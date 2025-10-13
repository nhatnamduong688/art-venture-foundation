# 🚀 **Vercel Deployment Guide - Art & Venture Foundation**

## 📋 **Pre-Deployment Checklist**

✅ **Build Test:** Production build successful (2.31s)  
✅ **GitHub:** Code pushed to main branch  
✅ **Vercel Config:** Optimized vercel.json created  
✅ **Dependencies:** All resolved with Yarn  
✅ **Framework:** Vite 7.1.9 ready for deployment

---

## 🌐 **Method 1: Deploy via Vercel Dashboard (Recommended)**

### **Step 1: Access Vercel**

```bash
🔗 Open: https://vercel.com/
```

### **Step 2: Login**

1. Click **"Continue with GitHub"**
2. Authorize Vercel to access your repositories
3. You'll be redirected to Vercel dashboard

### **Step 3: Import Project**

1. Click **"Add New..."** → **"Project"**
2. Find **"art-venture-foundation"** repository
3. Click **"Import"**

### **Step 4: Configure Project Settings**

**Project Configuration:**

```bash
Project Name: art-venture-foundation
Framework Preset: Vite (auto-detected)
Root Directory: ./
```

**Build Settings (Auto-detected):**

```bash
Build Command: yarn build
Output Directory: build
Install Command: yarn install
Development Command: yarn dev
```

**Environment Variables (Optional):**

```bash
NODE_VERSION: 18.x
YARN_VERSION: 4.x
```

### **Step 5: Deploy**

1. Click **"Deploy"**
2. Wait ~2-3 minutes for build completion
3. ✅ **Success!** Your site will be live at:
   ```
   https://art-venture-foundation.vercel.app
   ```

---

## ⚡ **Method 2: Deploy via Vercel CLI**

### **Step 1: Install & Login**

```bash
# Install Vercel CLI (if not installed)
npm install -g vercel

# Login to Vercel
vercel login
# Choose: Continue with GitHub
```

### **Step 2: Deploy**

```bash
# Navigate to project
cd /Users/duongnhatnam/Documents/av-frontend-test

# Deploy to production
vercel --prod

# Follow prompts:
# ? Set up and deploy "~/Documents/av-frontend-test"? [Y/n] Y
# ? Which scope do you want to deploy to? [Your Account]
# ? Link to existing project? [y/N] N
# ? What's your project's name? art-venture-foundation
# ? In which directory is your code located? ./
```

### **Step 3: Verify**

```bash
# CLI will output:
✅ Production: https://art-venture-foundation.vercel.app
```

---

## 🔧 **Build Configuration Details**

### **Vercel Auto-Detection:**

```json
{
  "framework": "vite",
  "buildCommand": "yarn build",
  "outputDirectory": "build",
  "installCommand": "yarn install",
  "devCommand": "yarn dev"
}
```

### **Performance Optimizations:**

```json
{
  "routes": [
    {
      "src": "/assets/(.*)",
      "headers": { "cache-control": "s-maxage=31536000, immutable" }
    },
    {
      "src": "/(.*\\.(ico|png|jpg|jpeg|svg|gif|webp|js|css|woff|woff2|ttf|eot))",
      "headers": { "cache-control": "s-maxage=86400" }
    }
  ]
}
```

### **Security Headers:**

```json
{
  "headers": [
    {
      "key": "X-Frame-Options",
      "value": "DENY"
    },
    {
      "key": "X-Content-Type-Options",
      "value": "nosniff"
    },
    {
      "key": "Referrer-Policy",
      "value": "strict-origin-when-cross-origin"
    }
  ]
}
```

---

## 📊 **Expected Build Output**

### **Build Stats:**

```bash
✓ 69 modules transformed
✓ Built in ~2-3 seconds

Assets:
- index.html: 1.82 kB (gzipped: 0.85 kB)
- CSS: 21.22 kB (gzipped: 4.14 kB)
- JavaScript: 251.84 kB (gzipped: 79.78 kB)
  - vendor.js: 11.84 kB (React, React-DOM)
  - router.js: 31.93 kB (React Router)
  - utils.js: 0.80 kB (Zustand, Framer Motion)
  - main.js: 207.27 kB (App code)
```

### **Performance Metrics:**

```bash
✅ First Contentful Paint: < 1.5s
✅ Largest Contentful Paint: < 2.5s
✅ Cumulative Layout Shift: < 0.1
✅ Time to Interactive: < 3s
✅ Lighthouse Score: 90+
```

---

## 🌐 **Post-Deployment Verification**

### **Test All Routes:**

```bash
✅ https://art-venture-foundation.vercel.app/
✅ https://art-venture-foundation.vercel.app/test
✅ https://art-venture-foundation.vercel.app/museum-card
✅ https://art-venture-foundation.vercel.app/hero
✅ https://art-venture-foundation.vercel.app/about
✅ https://art-venture-foundation.vercel.app/collection
✅ https://art-venture-foundation.vercel.app/community
✅ https://art-venture-foundation.vercel.app/partnerships
✅ https://art-venture-foundation.vercel.app/news
✅ https://art-venture-foundation.vercel.app/content
```

### **Test Features:**

```bash
✅ Navigation: All links working
✅ Images: Loading from Unsplash
✅ Fonts: Google Fonts (Inter, Big Caslon)
✅ Responsive: Mobile/Tablet/Desktop
✅ Components: All 12 components functional
✅ Routing: React Router working
✅ Figma Overlay: Press 'F' to toggle
```

---

## 🔄 **Auto-Deployment Setup**

### **GitHub Integration:**

```bash
✅ Every push to 'main' → Auto-deploy to production
✅ Every pull request → Preview deployment
✅ Branch deployments → Unique preview URLs
```

### **Deployment Workflow:**

```bash
1. git push origin main
2. Vercel detects changes
3. Triggers new build
4. Deploys to production
5. Updates live URL
```

---

## 🎯 **Custom Domain Setup (Optional)**

### **Step 1: Add Domain in Vercel**

1. Go to project → **Settings** → **Domains**
2. Add your domain: `www.artventure.com`
3. Follow DNS configuration instructions

### **Step 2: Configure DNS**

Add these records to your domain provider:

**For www subdomain:**

```bash
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**For root domain:**

```bash
Type: A
Name: @
Value: 76.76.21.21
```

### **Step 3: SSL Certificate**

```bash
✅ Automatic HTTPS with Let's Encrypt
✅ Certificate auto-renewal
✅ HTTP → HTTPS redirect
```

---

## 📈 **Performance Monitoring**

### **Vercel Analytics (Free):**

1. Dashboard → Project → **Analytics**
2. Enable Analytics
3. Track:
   - Page views
   - Performance metrics
   - User behavior
   - Core Web Vitals

### **Speed Insights:**

```bash
✅ Real User Monitoring (RUM)
✅ Core Web Vitals tracking
✅ Performance recommendations
✅ Mobile/Desktop metrics
```

---

## 🐛 **Troubleshooting**

### **Build Fails:**

```bash
# Check build locally first
yarn build

# Common fixes:
1. Clear cache: rm -rf node_modules .yarn/cache
2. Reinstall: yarn install
3. Check TypeScript errors: yarn type-check
```

### **Routing Issues:**

```bash
# SPA routing configured in vercel.json:
{
  "src": "/(.*)",
  "dest": "/index.html"
}
```

### **Environment Variables:**

```bash
# Add in Vercel Dashboard:
Settings → Environment Variables
- REACT_APP_API_URL=your_api_url
- NODE_ENV=production
```

---

## 🚀 **Quick Deployment Commands**

### **One-Click Deploy:**

```bash
# If using CLI:
cd /Users/duongnhatnam/Documents/av-frontend-test
vercel --prod
```

### **Update Deployment:**

```bash
# Push changes to GitHub:
git add .
git commit -m "update: your changes"
git push origin main
# Vercel auto-deploys!
```

---

## 📞 **Useful Links**

- **Live Site:** https://art-venture-foundation.vercel.app
- **Vercel Dashboard:** https://vercel.com/dashboard
- **GitHub Repo:** https://github.com/nhatnamduong688/art-venture-foundation
- **Vercel Docs:** https://vercel.com/docs

---

## ✅ **Deployment Checklist**

- [ ] Login to Vercel with GitHub
- [ ] Import art-venture-foundation repository
- [ ] Verify build settings (Vite auto-detected)
- [ ] Click Deploy
- [ ] Wait for build completion (~2-3 minutes)
- [ ] Test live URL: https://art-venture-foundation.vercel.app
- [ ] Verify all routes working
- [ ] Test responsive design
- [ ] Check performance (Lighthouse)
- [ ] Setup custom domain (optional)
- [ ] Enable analytics (optional)

---

**🎉 Ready to deploy! Follow the steps above and your Art & Venture Foundation website will be live in minutes!**
