import App from './App';
import { render } from './test-utils';

jest.mock('./components/home.js', () => {
  return () => <div>Home component</div>;
});

jest.mock('./components/header.js', () => {
  return () => <div>Header component</div>;
});

it('renders app component', () => {
  render(<App />);
  //screen.debug();
});