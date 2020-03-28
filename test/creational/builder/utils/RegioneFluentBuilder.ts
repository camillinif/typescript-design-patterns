import { Regione } from '@creational/builder';

export default class RegioneFluentBuilder {
    private regione: Regione;

    constructor() {
        this.regione = new Regione();
    }

    addCodiceIstat(codiceIstat: string): RegioneFluentBuilder {
        this.regione.setCodiceIstat(codiceIstat);
        return this;
    }

    addDenominazione(denominazione: string): RegioneFluentBuilder {
        this.regione.setDenominazione(denominazione);
        return this;
    }

    build(): Regione {
        return this.regione;
    }
}
