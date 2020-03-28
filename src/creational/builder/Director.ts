import EnteTerritoriale from './products/EnteTerritoriale';
import EnteTerritorialeBuilder from './builders/EnteTerritorialeBuilder';
import RigaCSVIstat from './RigaCSVIstat';

export default class Director {
    private enteTerritorialeBuilder: EnteTerritorialeBuilder;
    constructor(enteTerritorialeBuilder: EnteTerritorialeBuilder) {
        this.enteTerritorialeBuilder = enteTerritorialeBuilder;
    }

    build(rigaCSVIstat: RigaCSVIstat): EnteTerritoriale {
        let codiceIstat: string;
        let denominazione: string;

        switch (this.enteTerritorialeBuilder.constructor.name) {
            case 'RegioneBuilder':
                codiceIstat = rigaCSVIstat.codiceRegione;
                denominazione = rigaCSVIstat.denominazioneRegione;
                break;
            case 'ProvinciaBuilder':
                codiceIstat = rigaCSVIstat.codiceProvincia;
                denominazione = rigaCSVIstat.denominazioneProvincia;
                break;
            case 'ComuneBuilder':
                codiceIstat = rigaCSVIstat.codiceComune;
                denominazione = rigaCSVIstat.denominazioneComune;
                break;
        }

        this.enteTerritorialeBuilder.buildCodiceIstat(codiceIstat);
        this.enteTerritorialeBuilder.buildDenominazione(denominazione);

        this.enteTerritorialeBuilder.buildSiglaAutomobilistica(
            rigaCSVIstat.siglaAutomobilistica
        );

        this.enteTerritorialeBuilder.buildCodiceCatastale(
            rigaCSVIstat.codiceComuneCatastale
        );

        this.enteTerritorialeBuilder.buildFlagCapoluogo(
            rigaCSVIstat.flagCapoluogo
        );

        return this.enteTerritorialeBuilder.get();
    }
}
