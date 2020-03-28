import EnteTerritoriale from './EnteTerritoriale';

export default class Comune extends EnteTerritoriale {
    private codiceCatastale: string;
    private flagCapoluogo: boolean;

    setCodiceCatastale(codiceCatastale: string) {
        this.codiceCatastale = codiceCatastale;
    }

    getCodiceCatastale(): string {
        return this.codiceCatastale;
    }

    setFlagCapoluogo(flagCapoluogo: boolean) {
        this.flagCapoluogo = flagCapoluogo;
    }

    getFlagCapoluogo(): boolean {
        return this.flagCapoluogo;
    }
}
