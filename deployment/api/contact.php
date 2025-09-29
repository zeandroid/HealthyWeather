
<?php
require_once 'config.php';

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendJsonResponse(['success' => false, 'error' => 'Method not allowed'], 405);
}

try {
    // Get JSON input
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (json_last_error() !== JSON_ERROR_NONE) {
        sendJsonResponse(['success' => false, 'error' => 'Invalid JSON'], 400);
    }

    // Validate required fields
    $requiredFields = ['name', 'email', 'message'];
    foreach ($requiredFields as $field) {
        if (!isset($input[$field]) || empty(trim($input[$field]))) {
            sendJsonResponse(['success' => false, 'error' => ucfirst($field) . ' is required'], 400);
        }
    }

    $name = sanitizeInput($input['name']);
    $email = sanitizeInput($input['email']);
    $message = sanitizeInput($input['message']);
    
    if (!isValidEmail($email)) {
        sendJsonResponse(['success' => false, 'error' => 'Valid email is required'], 400);
    }

    // Connect to database
    $pdo = getDatabase();

    // Insert new contact submission
    $id = generateId();
    $stmt = $pdo->prepare('INSERT INTO contact_submissions (id, name, email, message, createdAt, status) VALUES (?, ?, ?, ?, ?, ?)');
    $stmt->execute([$id, $name, $email, $message, date('Y-m-d H:i:s'), 'pending']);

    // Send email notification
    $subject = 'New Contact Form Submission - Healthy Weather';
    $emailMessage = "New contact form submission:\n\n";
    $emailMessage .= "Name: $name\n";
    $emailMessage .= "Email: $email\n"; 
    $emailMessage .= "Message:\n$message\n\n";
    $emailMessage .= "Time: " . date('Y-m-d H:i:s');
    
    $headers = "From: noreply@healthyweather.us\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    // Note: In production, configure SMTP properly or use a service like PHPMailer
    @mail(CONTACT_EMAIL, $subject, $emailMessage, $headers);

    // Return success response
    sendJsonResponse([
        'success' => true,
        'message' => 'Your message has been sent successfully!',
        'data' => [
            'id' => $id,
            'name' => $name,
            'email' => $email,
            'message' => $message,
            'createdAt' => date('Y-m-d H:i:s'),
            'status' => 'pending'
        ]
    ]);

} catch (PDOException $e) {
    error_log('Database error in contact form: ' . $e->getMessage());
    sendJsonResponse(['success' => false, 'error' => 'Failed to send message. Please try again.'], 500);
} catch (Exception $e) {
    error_log('General error in contact form: ' . $e->getMessage());
    sendJsonResponse(['success' => false, 'error' => 'Failed to send message. Please try again.'], 500);
}
?>
