import { ReElfico } from '@creational/abstract-factory';

describe('ReElfico', () => {
    it('get descrition', () => {
        expect(new ReElfico().getDescription()).toBe('Re elfico');
    });
});
