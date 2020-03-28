import { Comune } from '@creational/builder';

export default class ComuneFluentBuilder {
    private comune: Comune;

    constructor() {
        this.comune = new Comune();
    }

    addCodiceIstat(codiceIstat: string): ComuneFluentBuilder {
        this.comune.setCodiceIstat(codiceIstat);
        return this;
    }

    addDenominazione(denominazione: string): ComuneFluentBuilder {
        this.comune.setDenominazione(denominazione);
        return this;
    }

    addCodiceCatastale(codiceCatastale: string): ComuneFluentBuilder {
        this.comune.setCodiceCatastale(codiceCatastale);
        return this;
    }

    addFlagCapoluogo(flagCapoluogo: boolean): ComuneFluentBuilder {
        this.comune.setFlagCapoluogo(flagCapoluogo);
        return this;
    }

    build(): Comune {
        return this.comune;
    }
}
