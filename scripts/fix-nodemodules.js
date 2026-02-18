import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const nodeModulesPath = path.join(process.cwd(), 'node_modules');

try {
  // Check if node_modules exists and is a file (not a directory)
  const stats = fs.statSync(nodeModulesPath);
  
  if (stats.isFile()) {
    console.log('[v0] Found node_modules as a file, removing it...');
    fs.unlinkSync(nodeModulesPath);
    console.log('[v0] Removed node_modules file');
    
    // Remove from git
    try {
      execSync('git rm --cached node_modules', { stdio: 'pipe' });
      console.log('[v0] Removed node_modules from git cache');
    } catch (e) {
      console.log('[v0] node_modules not in git cache');
    }
    
    // Commit the change
    try {
      execSync('git add .gitignore', { stdio: 'pipe' });
      execSync('git commit -m "Remove node_modules file from repo"', { stdio: 'pipe' });
      console.log('[v0] Committed changes to git');
    } catch (e) {
      console.log('[v0] Could not commit changes (may already be committed)');
    }
  } else if (stats.isDirectory()) {
    console.log('[v0] node_modules is already a directory, no action needed');
  }
} catch (err) {
  if (err.code === 'ENOENT') {
    console.log('[v0] node_modules does not exist, clean state');
  } else {
    console.error('[v0] Error:', err.message);
    process.exit(1);
  }
}
