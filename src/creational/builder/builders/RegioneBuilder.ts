import EnteTerritorialeBuilder from './EnteTerritorialeBuilder';
import Regione from '../products/Regione';

export default class RegioneBuilder extends EnteTerritorialeBuilder {
    private regione: Regione;

    constructor() {
        super();
        this.regione = new Regione();
    }

    buildCodiceIstat(codiceIstat: string) {
        this.regione.setCodiceIstat(codiceIstat);
    }

    buildDenominazione(denominazione: string) {
        this.regione.setDenominazione(denominazione);
    }

    get(): Regione {
        return this.regione;
    }
}
