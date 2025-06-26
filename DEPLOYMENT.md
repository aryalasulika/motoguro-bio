# Motoguro Linktree - Deployment Instructions

## Local Development

```bash
npm install
npm run dev
```

Access at: http://localhost:5173

## Production Build

```bash
npm run build
npm run preview
```

## Deployment Options

### 1. Netlify (Recommended)
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy!

### 2. Vercel
1. Import your GitHub repository
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy!

### 3. GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "homepage": "https://username.github.io/motoguro-linktree",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run build && npm run deploy`

### 4. Traditional Web Hosting
1. Run `npm run build`
2. Upload contents of `dist` folder to your web host
3. Configure web server to serve index.html for all routes

## Environment Variables (Optional)

Create `.env` file for custom configurations:

```env
VITE_WHATSAPP_NUMBER=6281234567890
VITE_INSTAGRAM_URL=https://instagram.com/motoguro
VITE_WEBSITE_URL=https://motoguro.com
```

Then update App.jsx to use these variables:

```javascript
const whatsappUrl = `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`;
```

## Performance Optimization

- Images are optimized (WebP format)
- CSS is minified
- JavaScript is bundled and minified
- Lazy loading implemented
- Service Worker ready (PWA)

## SEO Optimization

- Meta tags configured
- OpenGraph tags for social sharing
- Structured data ready
- Sitemap generation ready

## Custom Domain Setup

1. Add CNAME file to public folder with your domain
2. Configure DNS settings:
   - CNAME: www.yourdomain.com → your-deploy-url
   - A: yourdomain.com → deploy-ip-address

## Analytics Integration

Add Google Analytics or other tracking:

```html
<!-- In index.html head -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Monitoring & Maintenance

- Monitor website uptime
- Regular dependency updates
- Content updates via component editing
- Performance monitoring with Lighthouse
