import {
    RegioneBuilder,
    ProvinciaBuilder,
    ComuneBuilder,
    Director,
    RigaCSVIstat
} from '@creational/builder/';
import RegioneFluentBuilder from './utils/RegioneFluentBuilder';
import ProvinciaFluentBuilder from './utils/ProvinciaFluentBuilder';
import ComuneFluentBuilder from './utils/ComuneFluentBuilder';

describe('director', () => {
    const codiceComune = 'codice comune';
    const denominazioneComune = 'denominazione comune';
    const codiceProvincia = 'codice provincia';
    const denominazioneProvincia = 'denominazioneProvincia';
    const codiceRegione = 'codice regione';
    const denominazioneRegione = 'denominazione regione';
    const codiceComuneCatastale = 'codice comune catastale';
    const siglaAutomobilistica = 'sigla automobilistica';
    const flagCapoluogo = false;

    const rigaCSV: RigaCSVIstat = {
        codiceComune,
        denominazioneComune,
        codiceProvincia,
        denominazioneProvincia,
        codiceRegione,
        denominazioneRegione,
        codiceComuneCatastale,
        siglaAutomobilistica,
        flagCapoluogo
    };

    const regione = new RegioneFluentBuilder()
        .addCodiceIstat(codiceRegione)
        .addDenominazione(denominazioneRegione)
        .build();

    const provincia = new ProvinciaFluentBuilder()
        .addDenominazione(denominazioneProvincia)
        .addCodiceIstat(codiceProvincia)
        .addSiglaAutomobilistica(siglaAutomobilistica)
        .build();

    const comune = new ComuneFluentBuilder()
        .addCodiceIstat(codiceComune)
        .addDenominazione(denominazioneComune)
        .addCodiceCatastale(codiceComuneCatastale)
        .addFlagCapoluogo(flagCapoluogo)
        .build();

    it('create regione from csv row', () => {
        const regioneBuilder = new RegioneBuilder();
        const director = new Director(regioneBuilder);
        director.build(rigaCSV);
        expect(regioneBuilder.get()).toEqual(regione);
    });

    it('create provincia from csv row', () => {
        const provinciaBuilder = new ProvinciaBuilder();
        const director = new Director(provinciaBuilder);
        director.build(rigaCSV);
        expect(provinciaBuilder.get()).toEqual(provincia);
    });

    it('create comune from csv row', () => {
        const comuneBuilder = new ComuneBuilder();
        const director = new Director(comuneBuilder);
        director.build(rigaCSV);
        expect(comuneBuilder.get()).toEqual(comune);
    });
});
