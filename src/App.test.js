import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(
    <App />
  );
  
  expect(getByText('hello world!'));
  // console.log(getByText('hello world!'));
});
