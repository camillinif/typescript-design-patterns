import { EsercitoElfico } from '@creational/abstract-factory';

describe('EsercitoElfico', () => {
    it('get descrition', () => {
        expect(new EsercitoElfico().getDescription()).toBe('Esercito elfico');
    });
});
