export default class EnteTerritoriale {
    protected codiceIstat: string;
    protected denominazione: string;

    setCodiceIstat(codiceIstat: string) {
        this.codiceIstat = codiceIstat;
    }

    setDenominazione(denominazione: string) {
        this.denominazione = denominazione;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setSiglaAutomobilistica(setSiglaAutomobilistica: string) {}

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setCodiceCatastale(codiceCatastale: string) {}

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setFlagCapoluogo(flagCapoluogo: boolean) {}

    getCodiceIstat(): string {
        return this.codiceIstat;
    }

    getDenominazione(): string {
        return this.denominazione;
    }
}
