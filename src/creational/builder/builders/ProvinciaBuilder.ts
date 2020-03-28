import EnteTerritorialeBuilder from './EnteTerritorialeBuilder';
import Provincia from '../products/Provincia';

export default class ProvinciaBuilder extends EnteTerritorialeBuilder {
    private provincia: Provincia;

    constructor() {
        super();
        this.provincia = new Provincia();
    }

    buildCodiceIstat(codiceIstat: string) {
        this.provincia.setCodiceIstat(codiceIstat);
    }

    buildDenominazione(denominazione: string) {
        this.provincia.setDenominazione(denominazione);
    }

    buildSiglaAutomobilistica(siglaAutomobilistica) {
        this.provincia.setSiglaAutomobilistica(siglaAutomobilistica);
    }

    get(): Provincia {
        return this.provincia;
    }
}
