import { ReOrchesco } from '@creational/abstract-factory';

describe('ReOrchesco', () => {
    it('get descrition', () => {
        expect(new ReOrchesco().getDescription()).toBe('Re orchesco');
    });
});
