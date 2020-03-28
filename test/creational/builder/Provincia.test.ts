import { Provincia } from '@creational/builder';

describe('EnteTerritoriale', () => {
    const enteTerritoriale = new Provincia();

    it('set and get sigla automobilistica', () => {
        enteTerritoriale.setSiglaAutomobilistica('AA');
        expect(enteTerritoriale.getSiglaAutomobilistica()).toBe('AA');
    });
});
