import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '../test-utils';
import EmployeeList from './employee-list';

it('renders Header component', () => {
  render(<BrowserRouter><EmployeeList /></BrowserRouter>);
  expect(screen.getByText(/Employee List/i)).not.toBeNull()
  screen.debug();
});