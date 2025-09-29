

// API configuration for PHP backend
export const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? '/api' // Will be hosted alongside static files
  : '/api'; // For local development

export const API_ENDPOINTS = {
  allergySignup: `${API_BASE_URL}/allergy-signup.php`,
  contact: `${API_BASE_URL}/contact.php`,
} as const;

// Helper function to make API calls
export async function apiCall<T = any>(
  endpoint: string, 
  options: RequestInit = {}
): Promise<T> {
  const response = await fetch(endpoint, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}
