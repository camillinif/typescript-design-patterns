import CreatorCane from '../../../../src/creational/factory-method/creators/CreatorCane';

describe('creator cane', () => {
    it('crea cane', () => {
        const creator = new CreatorCane();
        expect(creator.crea().comunica()).toBe('bau');
    });
});
