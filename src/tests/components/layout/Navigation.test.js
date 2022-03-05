import { shallow } from 'enzyme';
import { Navigation } from '../../../components/layout/Navigation';

describe('Tests Navigation component', () => {
    test('should render the component', () => {
        const wrapper = shallow(<Navigation />);
        expect(wrapper).toMatchSnapshot();
    });
});
