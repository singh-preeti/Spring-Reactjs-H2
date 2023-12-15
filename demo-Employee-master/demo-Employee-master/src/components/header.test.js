import { BrowserRouter } from 'react-router-dom';
import { render } from '../test-utils';
import Header from './header';

it('renders Header component', () => {
    render(<BrowserRouter><Header /></BrowserRouter>);
});