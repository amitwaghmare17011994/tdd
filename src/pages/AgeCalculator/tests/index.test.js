import { Button } from '@material-ui/core';
import { create, act } from 'react-test-renderer';
import AgeCalculator from '..';
import { findAge } from '../helper';


describe('Age Calculator', () => {
    let root;
    let instance;

    beforeEach(() => {
        root = create(<AgeCalculator />)
        instance = root.root
    })



    it('should render AgeCalculator', () => {
        expect(root.toJSON()).toMatchSnapshot();
    })

    it('should not display anything if date is not selected', () => {
        const button = instance.findByType(Button)
        act(() => {
            button.props.onClick()
        })
        expect(instance.findByProps({ id: 'res' }).props.children).toBe('')

    })

    it('should not select future date', () => {
        const dateInput = instance.findByProps({ type: 'date' })
        act(() => {
            const eventObj = { target: { value: '2021-05-05' } }
            dateInput.props.onChange(eventObj)
        })
        const errorSpan = instance.findByProps({ id: 'error' })
        expect(errorSpan.props.children).toBe('Enter Past Date')
    })

    it('should disable calculate button if date is not valid', () => {
        const button = instance.findByType(Button)
        const dateInput = instance.findByProps({ type: 'date' })
        act(() => {
            const eventObj = { target: { value: '2021-05-05' } }
            dateInput.props.onChange(eventObj)
        })
        expect(button.props.disabled).toBe(true)
    })

    it('should remove error and enable button if date is from past', () => {

        const button = instance.findByType(Button)
        const dateInput = instance.findByProps({ type: 'date' })

        act(() => {
            const eventObj = { target: { value: '2021-05-05' } }
            dateInput.props.onChange(eventObj)
        })

        expect(button.props.disabled).toBe(true)
        const errorSpan = instance.findByProps({ id: 'error' })
        expect(errorSpan.props.children).toBe('Enter Past Date')


        act(() => {
            const eventObj = { target: { value: '2020-05-05' } }
            dateInput.props.onChange(eventObj)
        })

        expect(button.props.disabled).toBe(false)
        expect(errorSpan.props.children).toBe('')

    })

    it('should return return 26 ', () => {
        const bdate = new Date('1995-01-17')
        const result = findAge(bdate)
        expect(result).toBe(26)
    })

    it('should call callBack', () => {

        const fn = jest.fn()
        const root = create(<AgeCalculator callBack={fn} />)
        const instance = root.root

        const button = instance.findByType(Button)

        act(() => {
            button.props.onClick()
        })

        expect(fn).toBeCalled()

    })

})
