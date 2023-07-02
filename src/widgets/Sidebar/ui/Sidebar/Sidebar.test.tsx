import { fireEvent, screen } from '@testing-library/react';
import {
  renderWithTranslation,
} from 'shared/lib/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('render', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('sidebar collapse', () => {
    renderWithTranslation(<Sidebar />);
    const SidebarButton = screen.getByTestId('sidebar-button');
    const SidebarEl = screen.getByTestId('sidebar');
    expect(SidebarEl).toBeInTheDocument();
    fireEvent.click(SidebarButton);
    expect(SidebarEl).toHaveClass('collapsed');
  });
});
