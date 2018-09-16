import React from 'react';
import { expect } from 'chai';
import MyInput from './MyInput';

describe('toTitleCase', () => {
    before(() => {
        debugger; /* eslint-disable-line no-debugger */
        // go to 'chrome://inspect/#devices' to debug!
    });

    afterEach(() => {
        // clean up any sinon stuff
        global.sinon.restore();
    });

    it('should turn the string into Title Case', () => {
        const actual = MyInput.toTitleCase('abcd efg hijk');
        expect(actual).to.equal('Abcd Efg Hijk');
    });

    it('should work correctly with a space at the end', () => {
        const actual = MyInput.toTitleCase('abcd efg ');
        expect(actual).to.equal('Abcd Efg ');
    });

    it('should render the component', () => {
        const wrapper = global.shallow(<MyInput />);
        expect(wrapper.find('input')).to.have.length(1);
    });

    it('should call toTitleCase() when the input text changes', () => {
        const myInput = new MyInput();
        const stubToTitleCase = global.sinon.stub(MyInput, 'toTitleCase');
        stubToTitleCase.returns('Not What You Entered');
        const stubSetState = global.sinon.stub(myInput, 'setState');

        const fakeEvent = { target: { value: 'an input string' } };
        myInput.handleChange(fakeEvent);
        const { inputText: actual } = stubSetState.getCall(0).args[0];
        expect(actual).to.equal('Not What You Entered');
        expect(stubToTitleCase.calledOnce).to.equal(true);
    });
});
