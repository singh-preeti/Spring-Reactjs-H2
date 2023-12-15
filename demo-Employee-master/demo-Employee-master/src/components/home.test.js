import { render } from '../test-utils';
import Home from './home';

jest.mock('./employee-list', () => {
    return () => <div>Employee list component</div>;
});

it('renders Home component', () => {
    render(<Home />);
    //screen.debug();
});