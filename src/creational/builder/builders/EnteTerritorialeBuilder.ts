import EnteTerritoriale from '../products/EnteTerritoriale';

export default abstract class EnteTerritorialeBuilder {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    buildCodiceIstat(codiceIstat: string) {}

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    buildDenominazione(denominazione: string) {}

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    buildSiglaAutomobilistica(siglaAutomobilistica: string) {}

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    buildFlagCapoluogo(flagCapoluogo: boolean) {}

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    buildCodiceCatastale(codiceCatastale: string) {}

    abstract get(): EnteTerritoriale;
}
