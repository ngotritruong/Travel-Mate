describe('Forgot Password', () => {
    test('should return an error if email is not provided', () => {
      const result = forgotPassword('');
      expect(result).toBe('Email is required');
    });

    test('should return a success message if password reset link is sent successfully', () => {
      const result = forgotPassword('test@example.com');
      expect(result).toBe('Password reset link sent successfully');
    });
  });