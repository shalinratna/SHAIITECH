# SHAIITECH - Deployment Guide

This guide provides step-by-step instructions for deploying the SHAIITECH website to Cloudflare Pages.

## 🚀 Quick Start Deployment

### Option 1: Direct Upload to Cloudflare Pages (Fastest)

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Login to Cloudflare**:
   - Go to [pages.cloudflare.com](https://pages.cloudflare.com)
   - Sign in to your Cloudflare account

3. **Create new project**:
   - Click "Create a project"
   - Choose "Upload assets"
   - Upload the entire `dist` folder contents
   - Set project name to "shaiitech" or your preferred name

4. **Configure custom domain** (optional):
   - After deployment, go to your project settings
   - Navigate to "Custom domains"
   - Add your domain name
   - Update DNS settings as instructed

### Option 2: GitHub Integration (Recommended for ongoing development)

1. **Initialize Git repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: SHAIITECH premium website"
   ```

2. **Push to GitHub**:
   ```bash
   # Create repository on GitHub first, then:
   git remote add origin https://github.com/yourusername/shaiitech.git
   git branch -M main
   git push -u origin main
   ```

3. **Connect to Cloudflare Pages**:
   - Go to [pages.cloudflare.com](https://pages.cloudflare.com)
   - Click "Create a project"
   - Select "Connect to Git"
   - Choose your GitHub repository

4. **Configure build settings**:
   ```
   Framework preset: None
   Build command: npm run build
   Build output directory: dist
   Root directory: /
   Environment variables: (none required)
   ```

5. **Deploy**:
   - Click "Save and Deploy"
   - Cloudflare will automatically build and deploy
   - Future pushes to main branch will trigger automatic deployments

### Option 3: Wrangler CLI

1. **Install Wrangler globally**:
   ```bash
   npm install -g wrangler
   ```

2. **Authenticate with Cloudflare**:
   ```bash
   wrangler login
   ```

3. **Build and deploy**:
   ```bash
   npm run build
   wrangler pages deploy dist --project-name=shaiitech
   ```

## 🔧 Build Configuration

The project includes optimized build settings:

- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Node version**: 18+ (recommended)
- **Redirects**: Configured in `public/_redirects` for SPA routing

## 🌐 Domain Setup

### Custom Domain Configuration

1. **Add domain in Cloudflare Pages**:
   - Go to your project dashboard
   - Click "Custom domains"
   - Add your domain (e.g., `shaiitech.com`, `www.shaiitech.com`)

2. **Update DNS settings**:
   - If domain is not on Cloudflare: Create CNAME record pointing to your Pages URL
   - If domain is on Cloudflare: DNS will be configured automatically

3. **SSL Certificate**:
   - SSL certificates are automatically provisioned
   - HTTPS redirection is enabled by default

### Subdomain Setup

For subdomains (e.g., `app.shaiitech.com`):
1. Add subdomain in Cloudflare Pages
2. Create CNAME record: `app` → `shaiitech.pages.dev`

## 📊 Performance Optimization

The build includes several optimizations:

- **Code splitting**: Automatic chunk splitting for optimal loading
- **Asset optimization**: Images and fonts are optimized
- **CSS purging**: Unused Tailwind CSS classes are removed
- **JavaScript minification**: All JS files are minified
- **Gzip compression**: Enabled by default on Cloudflare

## 🔒 Security Features

Cloudflare Pages provides built-in security:

- **DDoS protection**: Automatic protection against attacks
- **SSL/TLS encryption**: End-to-end encryption
- **Security headers**: Automatic security header injection
- **Bot management**: Protection against malicious bots

## 🚀 Performance Monitoring

Monitor your site performance:

1. **Cloudflare Analytics**: Built-in analytics in your dashboard
2. **Web Vitals**: Monitor Core Web Vitals metrics
3. **Lighthouse**: Regular performance audits recommended

## 🔧 Environment Variables (if needed)

If you need to add environment variables:

1. **In Cloudflare Pages dashboard**:
   - Go to Settings → Environment variables
   - Add variables for production environment

2. **Common variables for this project**:
   ```
   NODE_VERSION=18
   VITE_API_URL=https://api.shaiitech.com (if backend needed)
   ```

## 📱 Mobile Optimization

The site is fully optimized for mobile:

- **Responsive design**: Works on all screen sizes
- **Touch-friendly**: Optimized touch targets
- **Fast loading**: Optimized for mobile networks
- **Progressive enhancement**: Works without JavaScript

## 🔄 Deployment Workflow

### Automated Deployment (GitHub Integration)

1. Make changes to your code
2. Push to main branch:
   ```bash
   git add .
   git commit -m "Update: description of changes"
   git push origin main
   ```
3. Cloudflare automatically builds and deploys
4. Check deployment status in Cloudflare Pages dashboard

### Manual Deployment

1. Build locally:
   ```bash
   npm run build
   ```
2. Test build:
   ```bash
   npm run preview
   ```
3. Upload to Cloudflare or deploy via Wrangler

## 🐛 Troubleshooting

### Common Issues

1. **Build fails with "command not found"**:
   ```bash
   # Ensure Node.js 18+ is installed
   node --version
   npm --version
   ```

2. **CSS not loading**:
   - Check build output in `dist/assets/`
   - Verify Tailwind CSS is properly configured

3. **Routes not working (404 errors)**:
   - Ensure `_redirects` file is in the `dist` folder
   - Check that SPA redirect rule is: `/* /index.html 200`

4. **Slow loading**:
   - Enable compression in Cloudflare dashboard
   - Check image optimization settings
   - Review bundle size with `npm run build`

### Build Debugging

Enable verbose build output:
```bash
npm run build -- --debug
```

### Contact Support

For deployment issues:
- **Cloudflare Support**: [support.cloudflare.com](https://support.cloudflare.com)
- **Project Issues**: Contact SHAIITECH development team

## 📈 Post-Deployment Checklist

After successful deployment:

- [ ] Test all pages and navigation
- [ ] Verify contact form functionality
- [ ] Check mobile responsiveness
- [ ] Test loading speed
- [ ] Verify SEO meta tags
- [ ] Set up domain and SSL
- [ ] Configure analytics (Google Analytics, etc.)
- [ ] Test all animations and interactions
- [ ] Verify all external links work
- [ ] Set up monitoring/alerts

## 🎯 Production URLs

After deployment, your site will be available at:

- **Primary URL**: `https://shaiitech.pages.dev`
- **Custom domain**: `https://yourdomain.com` (if configured)
- **Git integration**: Auto-deploys from main branch

---

**Deployment Complete! 🚀**

Your premium SHAIITECH website is now live and ready to turn dreams into reality!