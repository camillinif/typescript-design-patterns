import { CastelloOrchesco } from '@creational/abstract-factory';

describe('CastelloOrchesco', () => {
    it('get descrition', () => {
        expect(new CastelloOrchesco().getDescription()).toBe(
            'Castello orchesco'
        );
    });
});
