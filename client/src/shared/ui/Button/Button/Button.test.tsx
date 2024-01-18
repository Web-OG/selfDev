import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button/Button/Button';

describe('Button', () => {
  test('Render', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
  test('Primary variant', () => {
    render(<Button variant='primary'>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('primary');
  });
});
