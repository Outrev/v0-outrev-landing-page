#!/bin/bash
# Fix Git tracking of node_modules file

# Remove node_modules from Git if it's tracked as a file
git rm --cached node_modules 2>/dev/null || true

# Ensure .gitignore has node_modules
if ! grep -q "^node_modules/$" .gitignore; then
  echo "node_modules/" >> .gitignore
fi

echo "Fixed Git tracking - node_modules file removed from Git"
