
import { Button, Typography } from '@material-ui/core';
import { create, act } from 'react-test-renderer';
import DayFinder from '..';


describe('Day Finder', () => {
    let root;
    let instance;

    beforeEach(() => {
        root = create(<DayFinder />)
        instance = root.root
    })


    it('should render Day Finder', () => {
        expect(root.toJSON()).toMatchSnapshot();
    })

    it('should find day from 17/01/1994 (monday)', () => {
        const textField = instance.findByProps({ placeholder: 'Enter Date' })
        const button = instance.findByType(Button)
        act(() => {
            const date = '17/01/1994'
            textField.props.onChange({ target: { value: date } })
        })
        act(() => {
            button.props.onClick()
        })
        const res = instance.findByType(Typography)
        expect(res.props.children).toBe('Monday')


        act(() => {
            const date = '02/05/2021'
            textField.props.onChange({ target: { value: date } })
        })
        act(() => {
            button.props.onClick()
        })

        expect(res.props.children).toBe('Sunday')


        act(() => {
            const date = '27/02/2023'
            textField.props.onChange({ target: { value: date } })
        })
        act(() => {
            button.props.onClick()
        })

        expect(res.props.children).toBe('Monday')



    })
})