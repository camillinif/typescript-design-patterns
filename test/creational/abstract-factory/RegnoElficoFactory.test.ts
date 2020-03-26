import { RegnoElficoFactory } from '@creational/abstract-factory';

describe('RegnoElficoFactory', () => {
    const regnoElficoFactory = new RegnoElficoFactory();

    it('create esercito elfico', () =>
        expect(regnoElficoFactory.creaEsercito().getDescription()).toBe(
            'Esercito elfico'
        ));

    it('create re elfico', () =>
        expect(regnoElficoFactory.creaRe().getDescription()).toBe('Re elfico'));

    it('create castello elfico', () =>
        expect(regnoElficoFactory.creaCastello().getDescription()).toBe(
            'Castello elfico'
        ));
});
