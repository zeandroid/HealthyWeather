
# Healthy Weather PHP API

## Setup Instructions

1. **Database Configuration**
   - Copy the SQLite database file to a non-public directory
   - Update the `DB_PATH` constant in `config.php`

2. **Email Configuration**
   - Configure your server's PHP mail settings
   - For production, consider using PHPMailer or similar for SMTP

3. **File Permissions**
   - Ensure PHP files are executable
   - Ensure the database file is writable by the web server

## API Endpoints

### POST /api/allergy-signup.php
Handles email signups for the Allergy Tracker app.

**Request Body:**
```json
{
  "email": "user@example.com"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Successfully signed up for early access!",
  "data": {
    "id": "cl...",
    "email": "user@example.com",
    "createdAt": "2025-09-03 16:30:00",
    "status": "pending"
  }
}
```

### POST /api/contact.php
Handles contact form submissions.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com", 
  "message": "Hello, I'm interested in your products."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Your message has been sent successfully!",
  "data": {
    "id": "cl...",
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello, I'm interested in your products.",
    "createdAt": "2025-09-03 16:30:00",
    "status": "pending"
  }
}
```

## Error Handling

All endpoints return appropriate HTTP status codes:
- 200: Success
- 400: Bad Request (validation errors)
- 405: Method Not Allowed
- 409: Conflict (duplicate email)
- 500: Internal Server Error
