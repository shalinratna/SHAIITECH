# SHAIITECH - Premium Technology Company Website

A premium, enterprise-grade website for SHAIITECH - a technology company specializing in turning dreams into reality. Built with React, Tailwind CSS, and Framer Motion for professional animations and interactions.

## 🚀 Features

- **Modern Design**: Clean, professional aesthetics with premium feel
- **Responsive**: Optimized for all devices and screen sizes
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **Professional Animations**: Smooth transitions and micro-interactions using Framer Motion
- **SEO Ready**: Semantic HTML structure and optimized performance
- **Contact Form**: Professional contact form with validation using React Hook Form
- **Component Library**: Reusable UI components (Button, Card, Header, Footer)

## 🛠 Technology Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS 4.1
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Forms**: React Hook Form
- **Icons**: Heroicons
- **Fonts**: Inter (body), Poppins (headings)

## 📁 Project Structure

```
SHAIITECH/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Footer.jsx       # Site footer
│   │   ├── Button.jsx       # Custom button component
│   │   └── Card.jsx         # Card component
│   ├── pages/               # Page components
│   │   ├── Home.jsx         # Homepage with hero, services, testimonials
│   │   ├── About.jsx        # About page with company story, team
│   │   ├── Services.jsx     # Services page with offerings
│   │   └── Contact.jsx      # Contact page with form
│   ├── App.jsx              # Main app component with routing
│   ├── index.css            # Global styles and Tailwind imports
│   └── main.jsx             # React app entry point
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
├── vite.config.js           # Vite configuration
└── wrangler.toml            # Cloudflare Pages configuration
```

## 🎨 Brand Identity

- **Company**: SHAIITECH
- **Tagline**: "TURNING DREAMS INTO REALITY"
- **Primary Color**: #00A8E8 (Professional Blue)
- **Typography**: Inter (body), Poppins (headings)
- **Style**: Modern, clean, professional, premium

## 🏗 Installation & Development

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd SHAIITECH
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to `http://localhost:5173`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Build project for deployment

## 🚀 Deployment to Cloudflare Pages

### Option 1: GitHub Integration (Recommended)

1. **Push code to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Cloudflare Pages**:
   - Go to [Cloudflare Pages](https://pages.cloudflare.com/)
   - Click "Create a project"
   - Connect your GitHub repository
   - Configure build settings:
     - **Build command**: `npm run build`
     - **Build output directory**: `dist`
     - **Root directory**: `/`

3. **Deploy**:
   - Cloudflare will automatically build and deploy
   - Subsequent pushes will trigger automatic deployments

### Option 2: Direct Upload

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload to Cloudflare Pages**:
   - Go to Cloudflare Pages dashboard
   - Click "Upload assets"
   - Upload the contents of the `dist` folder

### Option 3: Wrangler CLI

1. **Install Wrangler**:
   ```bash
   npm install -g wrangler
   ```

2. **Authenticate**:
   ```bash
   wrangler login
   ```

3. **Deploy**:
   ```bash
   npm run build
   wrangler pages deploy dist --project-name=shaiitech
   ```

## 🌐 Domain Configuration

After deployment, you can configure a custom domain:

1. Go to your Cloudflare Pages project
2. Navigate to "Custom domains"
3. Add your domain (e.g., `shaiitech.com`)
4. Update your domain's nameservers to Cloudflare
5. SSL certificates will be automatically provisioned

## 📱 Pages Overview

### Homepage (`/`)
- Hero section with animated elements
- Company statistics
- About overview
- Services showcase
- Technology stack
- Client testimonials
- Call-to-action sections

### About Page (`/about`)
- Company story and mission
- Core values with icons
- Leadership team profiles
- Company timeline/milestones
- Awards and recognition

### Services Page (`/services`)
- Comprehensive service offerings
- Technology expertise
- Industry-specific solutions
- Development process
- Pricing information

### Contact Page (`/contact`)
- Professional contact form with validation
- Company contact information
- FAQ section
- Success state handling

## 🎯 Key Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Professional Animations**: Smooth transitions and hover effects
- **SEO Optimized**: Semantic HTML and performance optimized
- **Fast Loading**: Optimized images and code splitting
- **Accessibility**: WCAG compliant design and interactions
- **Modern Stack**: Latest React, Tailwind CSS, and build tools

## 🔧 Customization

### Colors
Update brand colors in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Update color palette
  }
}
```

### Typography
Modify fonts in `tailwind.config.js` and `src/index.css`

### Content
Update company information in the respective page components:
- Company details in `src/pages/About.jsx`
- Services in `src/pages/Services.jsx`
- Contact info in `src/pages/Contact.jsx`

## 📊 Performance

- **Lighthouse Score**: Optimized for 90+ scores
- **Bundle Size**: Optimized with tree shaking and code splitting
- **Loading Speed**: Fast initial load with lazy loading
- **Mobile Performance**: Fully responsive and touch-optimized

## 🔒 Security

- **Form Validation**: Client-side validation with React Hook Form
- **Secure Headers**: Cloudflare security features
- **HTTPS**: Automatic SSL/TLS encryption
- **DDoS Protection**: Cloudflare's built-in protection

## 📞 Support

For questions or support regarding this website:
- Email: hello@shaiitech.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ by SHAIITECH - Turning Dreams Into Reality