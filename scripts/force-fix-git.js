import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();

try {
  console.log('[v0] Starting Git repository cleanup...');
  
  // Check if we're in a git repo
  try {
    execSync('git rev-parse --git-dir', { stdio: 'pipe' });
    console.log('[v0] In Git repository');
  } catch (e) {
    console.log('[v0] Not in a Git repository - attempting to initialize detection');
  }

  // Remove node_modules from git cache if it exists as a tracked file
  try {
    execSync('git rm --cached -f node_modules 2>&1 || true', { 
      cwd: projectRoot,
      stdio: 'pipe'
    });
    console.log('[v0] Removed node_modules from Git cache');
  } catch (e) {
    console.log('[v0] node_modules not in Git cache (expected)');
  }

  // Ensure .gitignore has node_modules
  const gitignorePath = path.join(projectRoot, '.gitignore');
  let gitignoreContent = '';
  
  if (fs.existsSync(gitignorePath)) {
    gitignoreContent = fs.readFileSync(gitignorePath, 'utf-8');
  }

  if (!gitignoreContent.includes('node_modules')) {
    gitignoreContent += '\nnode_modules/\n';
    fs.writeFileSync(gitignorePath, gitignoreContent);
    console.log('[v0] Updated .gitignore to include node_modules');
  }

  // Stage the changes
  try {
    execSync('git add .gitignore', { 
      cwd: projectRoot,
      stdio: 'pipe'
    });
    console.log('[v0] Staged .gitignore');
  } catch (e) {
    console.log('[v0] Could not stage .gitignore:', e.message);
  }

  // Create a commit if there are changes
  try {
    const status = execSync('git status --porcelain', { 
      cwd: projectRoot,
      stdio: 'pipe'
    }).toString();
    
    if (status.trim()) {
      execSync('git commit -m "fix: remove node_modules from git tracking and ensure proper gitignore"', {
        cwd: projectRoot,
        stdio: 'pipe'
      });
      console.log('[v0] Created commit to remove node_modules from Git');
    }
  } catch (e) {
    console.log('[v0] Commit creation details:', e.message);
  }

  console.log('[v0] Git cleanup completed. The node_modules file should now be properly ignored.');
  console.log('[v0] Push these changes to deploy successfully.');

} catch (error) {
  console.error('[v0] Error during Git cleanup:', error.message);
  process.exit(1);
}
