

// TypeScript types for API requests and responses
export interface AllergySignupRequest {
  email: string;
}

export interface ContactSubmissionRequest {
  name: string;
  email: string;
  message: string;
}

export interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export interface AllergySignupResponse extends ApiResponse {
  data?: {
    id: string;
    email: string;
    createdAt: string;
    status: string;
  };
}

export interface ContactSubmissionResponse extends ApiResponse {
  data?: {
    id: string;
    name: string;
    email: string;
    message: string;
    createdAt: string;
    status: string;
  };
}
