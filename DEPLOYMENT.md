# 🚀 DEPLOYMENT GUIDE - HYPER-VIDEO SAAS

## 🌐 VERCEL DEPLOYMENT (RECOMMENDED)

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Initial commit: Hyper-Video SaaS Platform"
git push origin main
```

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import from GitHub
4. Select `hyper-video-saas` repository
5. Configure build settings:
   - **Build Command**: `pnpm run build --no-lint`
   - **Output Directory**: `.next`
   - **Install Command**: `pnpm install`

### Step 3: Environment Variables
Add these in Vercel Dashboard → Settings → Environment Variables:

```bash
# Required
NEXT_PUBLIC_APP_URL=https://yourdomain.com
ADMIN_EMAIL=admin@yourdomain.com

# Database (use managed service)
DATABASE_URL=postgresql://user:pass@host:5432/db

# Optional: Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
```

### Step 4: Deploy
Click "Deploy" and wait for completion.

## 🖥️ VPS DEPLOYMENT

### Server Requirements
- Ubuntu 20.04+ or CentOS 8+
- 2GB RAM minimum
- Node.js 18+
- PostgreSQL 13+
- Nginx

### Installation Script
```bash
#!/bin/bash
# VPS Setup Script for Hyper-Video SaaS

# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install pnpm
npm install -g pnpm

# Install PM2 for process management
npm install -g pm2

# Install PostgreSQL
sudo apt install postgresql postgresql-contrib -y

# Install Nginx
sudo apt install nginx -y

# Clone repository
git clone https://github.com/YOUR_USERNAME/hyper-video-saas.git
cd hyper-video-saas

# Install dependencies
pnpm install

# Setup environment
cp .env.example .env.local
# Edit .env.local with your values

# Setup database
sudo -u postgres createdb hypervideo_db
pnpm prisma migrate deploy
pnpm prisma generate

# Build application
pnpm run build --no-lint

# Start with PM2
pm2 start npm --name "hyper-video" -- start
pm2 save
pm2 startup

# Configure Nginx
sudo tee /etc/nginx/sites-available/hypervideo << EOF
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

# Enable site
sudo ln -s /etc/nginx/sites-available/hypervideo /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# Install SSL certificate
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## 🐳 DOCKER DEPLOYMENT

### Build and Run
```bash
# Build image
docker build -t hyper-video-saas .

# Run with docker-compose
docker-compose up -d

# Check status
docker-compose ps
```

## 🔧 TROUBLESHOOTING

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next node_modules
pnpm install
pnpm run build --no-lint
```

### Database Issues
```bash
# Reset database
pnpm prisma migrate reset
pnpm prisma db push
pnpm prisma generate
```

### Environment Variables
```bash
# Check current env vars
printenv | grep NEXT_

# Verify Vercel env vars
vercel env ls
```

## 📊 MONITORING

### Health Check Endpoint
```bash
# Add to pages/api/health.ts
curl https://yourdomain.com/api/health
```

### Performance Monitoring
- Vercel Analytics (built-in)
- Google Analytics
- Sentry for error tracking

## 🚀 POST-DEPLOYMENT CHECKLIST

- [ ] Application loads successfully
- [ ] All pages accessible
- [ ] API endpoints working
- [ ] Database connected
- [ ] Environment variables set
- [ ] SSL certificate active
- [ ] Custom domain working
- [ ] Admin panel accessible
- [ ] Error monitoring active
- [ ] Analytics tracking enabled

## 🆘 SUPPORT

If you encounter any issues during deployment:

1. Check the [troubleshooting](#troubleshooting) section
2. Review application logs
3. Verify environment variables
4. Test database connection
5. Contact support if needed

---

**Happy Deploying! 🎉**