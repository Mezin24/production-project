import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';

describe('Button', () => {
  test('render', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('render clear', () => {
    render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
    screen.debug();
  });
});
