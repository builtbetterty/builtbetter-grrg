#!/bin/bash

# Script to upload website to GitHub
# Repository: https://github.com/builtbetterty/builtbetter-.git

echo "🚀 Uploading website to GitHub..."

# Initialize git if needed
if [ ! -d .git ]; then
    echo "📦 Initializing git repository..."
    git init
fi

# Add remote (update if exists)
echo "🔗 Setting up remote repository..."
git remote remove origin 2>/dev/null
git remote add origin https://github.com/builtbetterty/builtbetter-.git

# Add all files
echo "📝 Adding files..."
git add .

# Commit
echo "💾 Committing changes..."
git commit -m "Initial commit: Iron Physique fitness coaching website with calorie calculator"

# Push to main branch
echo "⬆️  Pushing to GitHub..."
git branch -M main
git push -u origin main

echo "✅ Upload complete!"
echo "🌐 Your website should be available at:"
echo "   https://builtbetterty.github.io/builtbetter-/"
echo ""
echo "💡 Don't forget to enable GitHub Pages:"
echo "   1. Go to: https://github.com/builtbetterty/builtbetter-/settings/pages"
echo "   2. Select 'main' branch"
echo "   3. Click 'Save'"



