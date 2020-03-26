import { RegnoOrchescoFactory } from '@creational/abstract-factory';

describe('RegnoElficoFactory', () => {
    const regnoOrchescoFactory = new RegnoOrchescoFactory();

    it('create esercito elfico', () =>
        expect(regnoOrchescoFactory.creaEsercito().getDescription()).toBe(
            'Esercito orchesco'
        ));

    it('create re orchesco', () =>
        expect(regnoOrchescoFactory.creaRe().getDescription()).toBe(
            'Re orchesco'
        ));

    it('create castello orchesco', () =>
        expect(regnoOrchescoFactory.creaCastello().getDescription()).toBe(
            'Castello orchesco'
        ));
});
