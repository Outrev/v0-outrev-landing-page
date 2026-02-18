import { execSync } from 'child_process';
import { unlinkSync, statSync } from 'fs';
import { join } from 'path';

const nodeModulesPath = join(process.cwd(), 'node_modules');

console.log('[v0] Attempting to remove node_modules file from Git...');

try {
  // Check if node_modules exists and what it is
  try {
    const stats = statSync(nodeModulesPath);
    if (!stats.isDirectory()) {
      console.log('[v0] node_modules is a file, removing it...');
      unlinkSync(nodeModulesPath);
      console.log('[v0] Successfully removed node_modules file');
    } else {
      console.log('[v0] node_modules is a directory (expected), no removal needed');
    }
  } catch (err) {
    if (err.code !== 'ENOENT') {
      throw err;
    }
    console.log('[v0] node_modules does not exist');
  }

  // Remove from Git index
  console.log('[v0] Removing node_modules from Git index...');
  try {
    execSync('git rm --cached node_modules 2>/dev/null || true', { cwd: process.cwd() });
    console.log('[v0] Removed from Git index');
  } catch (err) {
    console.log('[v0] Git rm failed (expected if not in index)');
  }

  // Force add the gitignore to ensure node_modules stays ignored
  console.log('[v0] Staging gitignore...');
  execSync('git add .gitignore', { cwd: process.cwd() });

  console.log('[v0] Cleanup complete!');
} catch (err) {
  console.error('[v0] Error during cleanup:', err.message);
  process.exit(1);
}
