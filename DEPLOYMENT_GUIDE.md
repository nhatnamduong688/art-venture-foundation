# 🚀 **Deployment Guide - Art & Venture Foundation**

## 📋 **Prerequisites**

- ✅ Git installed
- ✅ GitHub account
- ✅ Vercel account (free tier is enough)
- ✅ Node.js installed (for local testing)

---

## 🔧 **Step 1: Setup GitHub Repository**

### **1.1. Create New Repository on GitHub**

1. Go to https://github.com/new
2. Repository name: `art-venture-foundation` (hoặc tên bạn muốn)
3. Description: `Art & Venture Foundation - Museum Website`
4. Choose: **Public** or **Private**
5. ⚠️ **DO NOT** initialize with README, .gitignore, or license
6. Click **"Create repository"**

### **1.2. Push Code to GitHub**

```bash
# Add remote origin (thay YOUR_USERNAME bằng GitHub username của bạn)
git remote add origin https://github.com/YOUR_USERNAME/art-venture-foundation.git

# Đổi branch name thành main (nếu đang dùng master)
git branch -M main

# Push code lên GitHub
git push -u origin main
```

---

## 🌐 **Step 2: Deploy to Vercel**

### **Method 1: Deploy via Vercel Dashboard (Recommended)**

#### **2.1. Login to Vercel**
1. Go to https://vercel.com/
2. Click **"Sign Up"** or **"Login"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub

#### **2.2. Import Project**
1. Click **"Add New..."** → **"Project"**
2. Select **"Import Git Repository"**
3. Find your `art-venture-foundation` repository
4. Click **"Import"**

#### **2.3. Configure Project**
```
Project Name: art-venture-foundation (hoặc tùy chỉnh)
Framework Preset: Create React App
Root Directory: ./
Build Command: npm run build (auto-detected)
Output Directory: build (auto-detected)
Install Command: npm install (auto-detected)
```

#### **2.4. Environment Variables (Optional)**
Nếu có environment variables, thêm tại đây:
```
REACT_APP_API_URL=your_api_url
REACT_APP_FIGMA_TOKEN=your_figma_token
```

#### **2.5. Deploy**
1. Click **"Deploy"**
2. Wait ~2-3 minutes for build
3. ✅ Done! Your site is live at: `https://art-venture-foundation.vercel.app`

---

### **Method 2: Deploy via Vercel CLI**

#### **2.1. Install Vercel CLI**
```bash
npm install -g vercel
```

#### **2.2. Login**
```bash
vercel login
```

#### **2.3. Deploy**
```bash
# Test deployment (preview)
vercel

# Production deployment
vercel --prod
```

---

## 🔄 **Step 3: Auto-Deploy on Git Push**

Vercel tự động deploy khi bạn push code lên GitHub!

### **Workflow:**
```
1. Make changes locally
2. git add .
3. git commit -m "your message"
4. git push origin main
5. ✅ Vercel automatically deploys!
```

### **Preview Deployments:**
- Every push to **main** → Production deploy
- Every pull request → Preview deploy (unique URL)

---

## ⚙️ **Step 4: Custom Domain (Optional)**

### **4.1. Add Domain in Vercel**
1. Go to your project → **"Settings"** → **"Domains"**
2. Add your domain: `www.artventure.com`
3. Follow DNS configuration instructions

### **4.2. Configure DNS**
Add these records to your domain provider:

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**For root domain:**
```
Type: A
Name: @
Value: 76.76.21.21
```

---

## 📊 **Build Settings**

### **Production Build**
```json
{
  "scripts": {
    "build": "react-scripts build"
  }
}
```

### **Environment Variables on Vercel**
Dashboard → Project → Settings → Environment Variables:
```
REACT_APP_API_URL=https://api.yourbackend.com
NODE_ENV=production
```

---

## 🧪 **Testing Before Deploy**

### **Test Production Build Locally:**
```bash
# Build production version
npm run build

# Serve build folder (install serve if needed)
npx serve -s build

# Open http://localhost:3000
```

### **Check for Errors:**
```bash
# Run linter
npm run lint (if configured)

# Run tests
npm test

# Check TypeScript
npx tsc --noEmit
```

---

## 📱 **Post-Deployment Checklist**

- [ ] ✅ Website loads correctly
- [ ] ✅ All routes work (`/`, `/test`, `/about`, etc.)
- [ ] ✅ Images load properly
- [ ] ✅ Fonts display correctly (Inter, Big Caslon)
- [ ] ✅ Responsive on mobile/tablet/desktop
- [ ] ✅ Test all interactive elements
- [ ] ✅ Check browser console for errors
- [ ] ✅ Test cross-browser (Chrome, Firefox, Safari)
- [ ] ✅ Lighthouse score check

---

## 🔍 **Vercel Analytics (Optional)**

Enable analytics to track:
- Page views
- Performance metrics
- User behavior

**Enable:**
1. Dashboard → Project → **"Analytics"**
2. Click **"Enable Analytics"**
3. Free tier: 100k events/month

---

## 🐛 **Troubleshooting**

### **Build Fails**
```bash
# Check build locally first
npm run build

# Clear cache and rebuild
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

### **Routing Issues (404 on refresh)**
✅ Already configured in `vercel.json`:
```json
{
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### **Environment Variables Not Working**
- Make sure they start with `REACT_APP_`
- Redeploy after adding env vars
- Check: Settings → Environment Variables

### **Slow Build Times**
- Optimize images before committing
- Remove unused dependencies
- Use `.vercelignore` to skip unnecessary files

---

## 📈 **Performance Optimization**

### **Before Deploy:**
```bash
# Optimize images
# Use https://squoosh.app/ or similar

# Remove console.logs
npm install -g babel-plugin-transform-remove-console

# Analyze bundle size
npm install -g source-map-explorer
npm run build
source-map-explorer 'build/static/js/*.js'
```

### **Vercel Optimizations:**
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Image optimization (with Vercel Image)
- ✅ Compression (gzip/brotli)
- ✅ HTTP/2 & HTTP/3

---

## 🔒 **Security Best Practices**

1. **Environment Variables:**
   - Never commit `.env` files
   - Use Vercel dashboard for secrets

2. **HTTPS:**
   - ✅ Automatic with Vercel

3. **Headers:**
   Add to `vercel.json`:
   ```json
   {
     "headers": [
       {
         "source": "/(.*)",
         "headers": [
           {
             "key": "X-Frame-Options",
             "value": "DENY"
           },
           {
             "key": "X-Content-Type-Options",
             "value": "nosniff"
           }
         ]
       }
     ]
   }
   ```

---

## 📞 **Useful Links**

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Vercel Docs:** https://vercel.com/docs
- **Deploy Status:** https://vercel.com/your-username/art-venture-foundation
- **GitHub Repo:** https://github.com/your-username/art-venture-foundation

---

## 🎉 **Quick Start Summary**

```bash
# 1. Push to GitHub
git remote add origin https://github.com/YOUR_USERNAME/art-venture-foundation.git
git branch -M main
git push -u origin main

# 2. Go to Vercel
# - Login with GitHub
# - Import repository
# - Click Deploy
# - ✅ Done!

# 3. Future updates
git add .
git commit -m "update: feature description"
git push origin main
# Vercel auto-deploys!
```

---

## 💡 **Pro Tips**

1. **Preview Deployments:** Create pull requests để test trước khi merge vào main
2. **Rollback:** Dễ dàng rollback về version cũ từ Vercel dashboard
3. **Team Collaboration:** Invite team members từ Settings → Team
4. **Monitoring:** Setup notifications cho deployment failures
5. **Speed:** Vercel edge network globally distributed

---

**🚀 Ready to deploy? Let's go!**

