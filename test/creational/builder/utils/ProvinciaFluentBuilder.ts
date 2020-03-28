import { Provincia } from '@creational/builder';

export default class ProvinciaFluentBuilder {
    private provincia: Provincia;

    constructor() {
        this.provincia = new Provincia();
    }

    addCodiceIstat(codiceIstat: string): ProvinciaFluentBuilder {
        this.provincia.setCodiceIstat(codiceIstat);
        return this;
    }

    addDenominazione(denominazione: string): ProvinciaFluentBuilder {
        this.provincia.setDenominazione(denominazione);
        return this;
    }

    addSiglaAutomobilistica(
        siglaAutomobilistica: string
    ): ProvinciaFluentBuilder {
        this.provincia.setSiglaAutomobilistica(siglaAutomobilistica);
        return this;
    }

    build(): Provincia {
        return this.provincia;
    }
}
