import { CastelloElfico } from '@creational/abstract-factory';

describe('CastelloElfico', () => {
    it('get descrition', () => {
        expect(new CastelloElfico().getDescription()).toBe('Castello elfico');
    });
});
