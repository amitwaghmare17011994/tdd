import { Button, Typography } from '@material-ui/core';
import { create, act } from 'react-test-renderer';
import VelocityCalculator from '..';



describe('Velocity Calculator', () => {
    let root;
    let instance;

    beforeEach(() => {
        root = create(<VelocityCalculator />)
        instance = root.root
    })


    it('should render Velocity Calculator', () => {
        expect(root.toJSON()).toMatchSnapshot();
    })

    it('should show result 3', () => {
        const timeInput = instance.findByProps({ placeholder: 'Enter Time' })
        const distanceInput = instance.findByProps({ placeholder: 'Enter Distance' })
        const button = instance.findByType(Button)
        act(() => {
            distanceInput.props.onChange({ target: { value: '6', name: 'distance' } })
        })
        act(() => {
            timeInput.props.onChange({ target: { value: '2', name: 'time' } })
        })
        act(() => {
            button.props.onClick()
        })
        const res = instance.findByType(Typography)
        expect(res.props.children).toBe(3)
    })

})