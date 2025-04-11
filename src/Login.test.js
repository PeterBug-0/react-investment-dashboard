import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

test('renders login inputs and submits', () => {
  const mockLogin = jest.fn();
  render(<Login onLogin={mockLogin} />);

  fireEvent.change(screen.getByPlaceholderText(/email/i), {
    target: { value: 'user@test.com' }
  });
  fireEvent.change(screen.getByPlaceholderText(/password/i), {
    target: { value: '1234' }
  });
  fireEvent.click(screen.getByText(/login/i));

  expect(mockLogin).toHaveBeenCalled();
});