import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { level: 1 });
  expect(heading).toHaveTextContent('¡Bienvenido a mi App en React!');
});

test('renders AWS S3 link', () => {
  render(<App />);
  const link = screen.getByRole('link', { name: /aprende más sobre aws s3/i });
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', 'https://aws.amazon.com/s3/');
});

test('renders deployment info', () => {
  render(<App />);
  const info = screen.getByText(/esta aplicación está desplegada en/i);
  expect(info).toBeInTheDocument();
});
