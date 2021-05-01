import { create, act } from 'react-test-renderer';
import LayoutContainer from '../LayoutContainer';


describe('Layout Container', () => {

    
    it('should render Layout Container', () => {
        const root = create(<LayoutContainer />)
        expect(root.toJSON()).toMatchSnapshot();

    })

    


})
