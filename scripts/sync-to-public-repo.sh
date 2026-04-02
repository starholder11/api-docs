#!/usr/bin/env bash
#
# Sync docs-site/ to the public api-docs repo.
#
# Usage:
#   ./scripts/sync-to-public-repo.sh [path-to-public-repo]
#
# First time setup:
#   1. Create public repo: gh repo create starholder/api-docs --public
#   2. Clone it somewhere: git clone git@github.com:starholder/api-docs.git ~/repos/api-docs
#   3. Enable GitHub Pages: Settings > Pages > Source: GitHub Actions
#   4. Run this script:    ./scripts/sync-to-public-repo.sh ~/repos/api-docs

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
DOCS_ROOT="$(dirname "$SCRIPT_DIR")"
PUBLIC_REPO="${1:-$HOME/repos/api-docs}"

if [ ! -d "$PUBLIC_REPO/.git" ]; then
  echo "Error: $PUBLIC_REPO is not a git repo."
  echo "Clone the public repo first: git clone git@github.com:starholder/api-docs.git $PUBLIC_REPO"
  exit 1
fi

echo "Syncing $DOCS_ROOT -> $PUBLIC_REPO"

rsync -av --delete \
  --exclude='node_modules' \
  --exclude='.next' \
  --exclude='.source' \
  --exclude='out' \
  --exclude='.git' \
  "$DOCS_ROOT/" "$PUBLIC_REPO/"

cd "$PUBLIC_REPO"
git add -A
CHANGES=$(git diff --cached --stat)

if [ -z "$CHANGES" ]; then
  echo "No changes to sync."
  exit 0
fi

echo ""
echo "Changes:"
echo "$CHANGES"
echo ""

read -p "Commit and push? [y/N] " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
  git commit -m "sync: update docs from HH-Bot $(date +%Y-%m-%d)"
  git push origin main
  echo "Pushed to public repo."
else
  echo "Aborted. Changes are staged in $PUBLIC_REPO."
fi
