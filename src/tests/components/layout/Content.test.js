import { shallow } from 'enzyme';
import { Content } from '../../../components/layout/Content';

describe('Tests Content component', () => {
    test('should render the component', () => {
        const wrapper = shallow(<Content />);
        expect(wrapper).toMatchSnapshot();
    });
});
