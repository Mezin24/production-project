import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('render', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('sidebar collapse', () => {
    componentRender(<Sidebar />);
    const SidebarButton = screen.getByTestId('sidebar-button');
    const SidebarEl = screen.getByTestId('sidebar');
    expect(SidebarEl).toBeInTheDocument();
    fireEvent.click(SidebarButton);
    expect(SidebarEl).toHaveClass('collapsed');
  });
});
