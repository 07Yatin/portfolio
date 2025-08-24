# Deploying React Portfolio to Vercel

## Prerequisites
- Node.js (v14 or later)
- npm or Yarn
- A Vercel account (https://vercel.com)
- GitHub repository for your project

## Deployment Steps

### 1. Prepare Your Project
1. Ensure all dependencies are installed:
   ```bash
   npm install
   # or
   yarn install
   ```

2. Test your build locally:
   ```bash
   npm run build
   # or 
   yarn build
   ```

### 2. Create Vercel Account
1. Go to https://vercel.com
2. Sign up using GitHub (recommended)

### 3. Deploy from GitHub
#### Option A: Vercel CLI
1. Install Vercel CLI globally:
   ```bash
   npm i -g vercel
   # or
   yarn global add vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy your project:
   ```bash
   cd Personal-Portfolio
   vercel
   ```
   - Follow the prompts
   - Choose default settings for a React app

#### Option B: Vercel Web Interface
1. Connect your GitHub repository
2. Import your React project
3. Configure build settings:
   - Build Command: `npm run build` or `yarn build`
   - Output Directory: `build`
   - Install Command: `npm install` or `yarn install`

### 4. Environment Variables
If you use any environment variables:
1. Go to Project Settings in Vercel
2. Add environment variables under "Environment Variables"
3. For Create React App, prefix with `REACT_APP_`

### 5. Custom Domain (Optional)
1. Go to Project Settings
2. Navigate to "Domains"
3. Add your custom domain

## Troubleshooting
- Ensure `package.json` scripts are correct
- Check build logs in Vercel dashboard
- Verify all assets (images, PDFs) are in correct paths

## Common Issues
- Large file sizes: Use code splitting
- Missing dependencies: Run `npm install` or `yarn install`
- Routing issues: Use `react-router-dom` with `BrowserRouter`

## Performance Optimization
1. Use lazy loading for components
2. Optimize images
3. Use production build

## Recommended Vercel Settings
- Auto-deploy on push
- Preview deployments for pull requests
- Automatic performance monitoring

## Continuous Deployment
Vercel automatically sets up CI/CD when connected to GitHub
- Pushes to `main` trigger production deploy
- Pull requests create preview deployments

## Support
- Vercel Documentation: https://vercel.com/docs
- React Deployment Guide: https://create-react-app.dev/docs/deployment/

## Notes for This Project
- Uses React 17
- Requires PDF.js and other specific libraries
- Includes custom assets (profile picture, resume PDF)
