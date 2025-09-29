
# Healthy Weather - Static Export + PHP Backend Deployment Guide

## Overview
This project has been successfully converted to use:
- **Frontend**: Static HTML/CSS/JS (no server runtime required)
- **Backend**: PHP REST API with SQLite database
- **Logo**: Updated to use the new HW_icon_teal.png

## 🚀 Ready-to-Deploy Files

The `/deployment` directory contains everything you need:

```
deployment/
├── index.html          # Static website (main page)
├── logo.png           # Company logo
├── api/               # PHP backend
│   ├── config.php     # Database config & helpers
│   ├── allergy-signup.php
│   ├── contact.php
│   ├── .htaccess      # Apache configuration
│   └── README.md      # API documentation
└── data/
    └── dev.db         # SQLite database
```

## 📁 DreamHost Deployment Steps

### 1. Upload Files to DreamHost

**Upload to `public_html/`:**
- `index.html` (main website file)
- `logo.png` (company logo)
- `api/` directory (entire folder)

**Upload to private directory (e.g., `/home/username/data/`):**
- `dev.db` (SQLite database file)

### 2. Configure Database Path

Edit `public_html/api/config.php` and update the database path:

```php
define('DB_PATH', '/home/username/data/dev.db');
```

Replace `/home/username/` with your actual DreamHost home directory path.

### 3. Set File Permissions

```bash
chmod 755 api/*.php
chmod 644 /home/username/data/dev.db
chown www-data:www-data /home/username/data/dev.db  # If needed
```

## 🔧 API Endpoints

- **POST** `/api/allergy-signup.php` - Email signup for Allergy Tracker
- **POST** `/api/contact.php` - Contact form submissions

Both endpoints:
- Save data to SQLite database
- Send email notifications
- Return JSON responses
- Include CORS headers for cross-origin requests

## 📧 Email Configuration

The PHP files are configured to send emails to:
- **Allergy signups**: `allergy@healthyweather.us`
- **Contact forms**: `info@healthyweather.us`

## 🗄️ Database Schema

SQLite database contains:
- **allergy_signups**: `(id, email, createdAt, status)`
- **contact_submissions**: `(id, name, email, message, createdAt, status)`

## 🔐 Security Features

- Database stored in non-public directory
- Input sanitization and validation
- SQL injection protection via prepared statements
- XSS protection via htmlspecialchars
- CORS headers properly configured
- Error logging (not displayed to users)

## 🧪 Testing Locally

To test the PHP backend locally (if you have PHP installed):

```bash
cd deployment
php -S localhost:8080
```

Then visit `http://localhost:8080` to test the static site with PHP backend.

## 📝 Notes

- The static website (`index.html`) is a complete single-page application
- No Next.js server runtime required for deployment
- Forms will work seamlessly with the PHP backend
- Logo has been updated to the new teal icon
- Responsive design works on all devices
- All original functionality preserved
