import { EnteTerritoriale } from '@creational/builder';

describe('EnteTerritoriale', () => {
    const enteTerritoriale = new EnteTerritoriale();

    it('set and get codice istat', () => {
        enteTerritoriale.setCodiceIstat('codice');
        expect(enteTerritoriale.getCodiceIstat()).toBe('codice');
    });

    it('set and get denominazione', () => {
        enteTerritoriale.setDenominazione('denominazione');
        expect(enteTerritoriale.getDenominazione()).toBe('denominazione');
    });
});
