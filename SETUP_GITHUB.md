# GitHub Setup Instructions

Follow these steps to upload your website to GitHub:

## Option 1: Using GitHub CLI (Recommended)

1. Install GitHub CLI if you haven't already:
   ```bash
   brew install gh
   ```

2. Authenticate with GitHub:
   ```bash
   gh auth login
   ```

3. Initialize git and create repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Iron Physique fitness coaching website"
   gh repo create webiste --public --source=. --remote=origin --push
   ```

## Option 2: Using GitHub Website

1. **Initialize Git Repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Iron Physique fitness coaching website"
   ```

2. **Create Repository on GitHub**:
   - Go to https://github.com/new
   - Repository name: `webiste` (or your preferred name)
   - Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
   - Click "Create repository"

3. **Connect and Push**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/webiste.git
   git branch -M main
   git push -u origin main
   ```

## Option 3: Using GitHub Desktop

1. Download GitHub Desktop: https://desktop.github.com/
2. Sign in with your GitHub account
3. File → Add Local Repository
4. Select the `/Users/temp/Desktop/webiste` folder
5. Click "Publish repository" button
6. Choose repository name and visibility
7. Click "Publish repository"

## Enable GitHub Pages (Free Hosting!)

After pushing to GitHub:

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **main** branch (or **master**)
4. Click **Save**
5. Your site will be live at: `https://YOUR_USERNAME.github.io/webiste/`

The GitHub Actions workflow I've included will automatically deploy your site on every push!

## What's Included

✅ **README.md** - Professional project documentation  
✅ **LICENSE** - MIT License for open source  
✅ **.gitignore** - Excludes unnecessary files  
✅ **CONTRIBUTING.md** - Guidelines for contributors  
✅ **GitHub Actions** - Automatic deployment to GitHub Pages  

## Next Steps

- Customize the README with your specific details
- Update the repository description on GitHub
- Add topics/tags on GitHub (e.g., `html`, `css`, `fitness`, `website`)
- Consider adding a custom domain in GitHub Pages settings



