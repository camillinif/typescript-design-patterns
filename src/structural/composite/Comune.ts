import EnteTerritoriale from './EnteTerritoriale';

export default class Comune extends EnteTerritoriale {
    private popolazione: number;

    constructor(codice: number, denominazione: string, popolazione: number) {
        super(codice, denominazione);
        this.popolazione = popolazione;
    }

    getChild(): EnteTerritoriale[] {
        return Array<EnteTerritoriale>();
    }
    getPopolazione(): number {
        return this.popolazione;
    }
}
