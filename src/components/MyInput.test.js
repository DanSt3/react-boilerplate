import { expect } from 'chai';
import MyInput from './MyInput';

describe('toTitleCase', () => {
    it('should turn the string into Title Case', () => {
        const actual = MyInput.toTitleCase('abcd efg hijk');
        expect(actual).to.equal('Abcd Efg Hijk');
    });

    it('should work correctly with a space at the end', () => {
        const actual = MyInput.toTitleCase('abcd efg ');
        expect(actual).to.equal('Abcd Efg ');
    });
});
