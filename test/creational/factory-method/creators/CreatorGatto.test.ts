import CreatorGatto from '../../../../src/creational/factory-method/creators/CreatorGatto';

describe('creator gatto', () => {
    it('crea gatto', () => {
        const creator = new CreatorGatto();
        expect(creator.crea().comunica()).toBe('miao');
    });
});
