import { Comune } from '@creational/builder/';

describe('Comune', () => {
    const enteTerritoriale = new Comune();

    it('set and get codice catastale', () => {
        enteTerritoriale.setCodiceCatastale('codice catastale');
        expect(enteTerritoriale.getCodiceCatastale()).toBe('codice catastale');
    });

    it('set and get denominazione', () => {
        enteTerritoriale.setFlagCapoluogo(false);
        expect(enteTerritoriale.getFlagCapoluogo()).toBe(false);
    });
});
