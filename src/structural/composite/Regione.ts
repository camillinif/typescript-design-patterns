import EnteTerritoriale from './EnteTerritoriale';
import Provincia from './Provincia';

export default class Regione extends EnteTerritoriale {
    private province: Array<Provincia>;

    constructor(codice: number, denominazione: string) {
        super(codice, denominazione);
        this.province = new Array<Provincia>();
    }

    addChild(provincia: Provincia): void {
        this.province.push(provincia);
        console.log(this.province.length);
    }

    getChild(): EnteTerritoriale[] {
        return this.province;
    }

    getPopolazione(): number {
        return this.province.reduce<number>(
            (popolazione: number, provincia: Provincia) =>
                popolazione + provincia.getPopolazione(),
            0
        );
    }
}
