import EnteTerritorialeBuilder from './EnteTerritorialeBuilder';
import Comune from '../products/Comune';

export default class ComuneBuilder extends EnteTerritorialeBuilder {
    private comune: Comune;

    constructor() {
        super();
        this.comune = new Comune();
    }

    buildCodiceIstat(codiceIstat: string) {
        this.comune.setCodiceIstat(codiceIstat);
    }

    buildDenominazione(denominazione: string) {
        this.comune.setDenominazione(denominazione);
    }

    buildCodiceCatastale(codiceCatastale: string) {
        this.comune.setCodiceCatastale(codiceCatastale);
    }

    buildFlagCapoluogo(flagCapoluogo: boolean) {
        this.comune.setFlagCapoluogo(flagCapoluogo);
    }

    get(): Comune {
        return this.comune;
    }
}
