#!/usr/bin/env bash
set -e
mkdir -p public/fonts
cd public/fonts
echo "Downloading recommended Arabic fonts..."

# Note: download fonts from Google Fonts or GitHub releases. Adjust links if needed.
# Cairo
curl -sL -o Cairo.zip "https://github.com/google/fonts/archive/refs/heads/main.zip" || true
# For CI safety we include only a placeholder method; you can replace this with explicit font links.
echo "Please replace the placeholders in scripts/fetch-fonts.sh with direct font URLs if needed."
ls -la || true
