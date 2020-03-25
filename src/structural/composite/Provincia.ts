import EnteTerritoriale from './EnteTerritoriale';
import Comune from './Comune';

export default class Provincia extends EnteTerritoriale {
    private comuni: Array<Comune>;

    constructor(codice: number, denominazione: string) {
        super(codice, denominazione);
        this.comuni = new Array<Comune>();
    }

    addChild(comune: Comune): void {
        this.comuni.push(comune);
    }

    getChild(): EnteTerritoriale[] {
        return this.comuni;
    }

    getPopolazione(): number {
        return this.comuni.reduce<number>(
            (popolazione: number, comune: Comune) =>
                popolazione + comune.getPopolazione(),
            0
        );
    }
}
