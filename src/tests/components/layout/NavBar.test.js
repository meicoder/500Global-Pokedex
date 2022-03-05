import { shallow } from 'enzyme';
import { NavBar } from '../../../components/layout/NavBar';

describe('Tests NavBar component', () => {
    test('should render the component', () => {
        const wrapper = shallow(<NavBar title="Pokemon" />);
        expect(wrapper).toMatchSnapshot();
    });
});
