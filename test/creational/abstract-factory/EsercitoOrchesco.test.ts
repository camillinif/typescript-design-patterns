import { EsercitoOrchesco } from '@creational/abstract-factory';

describe('EsercitoOrchesco', () => {
    it('get descrition', () => {
        expect(new EsercitoOrchesco().getDescription()).toBe(
            'Esercito orchesco'
        );
    });
});
