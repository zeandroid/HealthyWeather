
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

    // Validate email
    if (!isset($input['email']) || empty($input['email'])) {
        sendJsonResponse(['success' => false, 'error' => 'Email is required'], 400);
    }

    $email = sanitizeInput($input['email']);
    
    if (!isValidEmail($email)) {
        sendJsonResponse(['success' => false, 'error' => 'Valid email is required'], 400);
    }

    // Connect to database
    $pdo = getDatabase();

    // Check if email already exists
    $stmt = $pdo->prepare('SELECT id FROM allergy_signups WHERE email = ?');
    $stmt->execute([$email]);
    
    if ($stmt->fetch()) {
        sendJsonResponse(['success' => false, 'error' => 'Email already registered'], 409);
    }

    // Insert new signup
    $id = generateId();
    $stmt = $pdo->prepare('INSERT INTO allergy_signups (id, email, createdAt, status) VALUES (?, ?, ?, ?)');
    $stmt->execute([$id, $email, date('Y-m-d H:i:s'), 'pending']);

    // Send email notification (using PHP mail function)
    $subject = 'New Allergy Tracker Signup';
    $message = "New early access signup:\n\nEmail: $email\nTime: " . date('Y-m-d H:i:s');
    $headers = "From: noreply@healthyweather.us\r\n";
    
    // Note: In production, configure SMTP properly or use a service like PHPMailer
    @mail(ALLERGY_EMAIL, $subject, $message, $headers);

    // Return success response
    sendJsonResponse([
        'success' => true,
        'message' => 'Successfully signed up for early access!',
        'data' => [
            'id' => $id,
            'email' => $email,
            'createdAt' => date('Y-m-d H:i:s'),
            'status' => 'pending'
        ]
    ]);

} catch (PDOException $e) {
    error_log('Database error in allergy signup: ' . $e->getMessage());
    sendJsonResponse(['success' => false, 'error' => 'Failed to process signup. Please try again.'], 500);
} catch (Exception $e) {
    error_log('General error in allergy signup: ' . $e->getMessage());
    sendJsonResponse(['success' => false, 'error' => 'Failed to process signup. Please try again.'], 500);
}
?>
