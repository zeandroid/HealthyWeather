
# Healthy Weather - Single Page Application

## 🌤️ Project Overview

Healthy Weather is a modern, responsive single-page application that promotes the company's mission of transforming weather and environmental data into personalized health solutions. The app features information about the upcoming Allergy Tracker and provides contact forms for potential partners and early access signups.

## 🏗️ Architecture

### Frontend (Static Export)
- **Technology**: React.js + TypeScript converted to Static HTML
- **Styling**: Tailwind CSS with custom Healthy Weather brand colors
- **Deployment**: Static files that can be hosted on any web server
- **Responsive**: Optimized for desktop and mobile viewing

### Backend (PHP REST API)
- **Technology**: PHP with SQLite database
- **Security**: Input validation, SQL injection protection, XSS prevention
- **Email**: Automatic notifications to specified email addresses
- **CORS**: Configured for cross-origin requests

## 🎨 Brand Design

- **Colors**: Muted teal (#4a9b8e) and beige (#f5f3f0) palette
- **Style**: Clean, modern, minimalist design
- **Icons**: Flat-style icons using Lucide icons and custom SVGs
- **Logo**: Updated to use the new teal cloud icon with graph line

## 📁 File Structure

```
healthy_weather_spa/
├── app/                    # Original Next.js source (for development)
├── deployment/             # Ready-to-deploy files
│   ├── index.html         # Static SPA website
│   ├── logo.png          # Company logo
│   ├── api/              # PHP backend
│   └── data/             # SQLite database
├── api/                   # PHP source files
├── data/                  # Database files
└── DEPLOYMENT.md          # Deployment instructions
```

## 🚀 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete deployment instructions to DreamHost or any PHP-enabled web hosting service.

## ✨ Features

### Website Sections
1. **Hero Section** - Company introduction with call-to-action
2. **About** - Mission statement and company approach
3. **Technology** - Four key technology pillars with visual icons
4. **Featured Product** - Allergy Tracker app information with email signup
5. **Contact** - Business inquiry form
6. **Footer** - Company info and legal links

### Interactive Elements
- **Smooth scrolling** between sections
- **Responsive navigation** with mobile-friendly design
- **Email signup form** for Allergy Tracker early access
- **Contact form** for business inquiries
- **Hover effects** and subtle animations
- **Form validation** and success/error feedback

### Backend Features
- **Email notifications** to appropriate addresses
- **Database storage** for all form submissions
- **API validation** and error handling
- **CORS support** for frontend integration

## 🔧 Technical Details

### Database Schema
- **allergy_signups**: Stores email addresses for early access
- **contact_submissions**: Stores contact form submissions

### API Endpoints
- `POST /api/allergy-signup.php` - Handle email signups
- `POST /api/contact.php` - Handle contact form submissions

### Email Configuration
- Allergy signups → `allergy@healthyweather.us`
- Contact forms → `info@healthyweather.us`

## 📧 Support

For questions about deployment or technical support, refer to the API documentation in `/api/README.md`.
