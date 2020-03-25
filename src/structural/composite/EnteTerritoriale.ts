export default abstract class EnteTerritoriale {
    protected codice: number;
    protected denominazione: string;

    constructor(codice: number, denominazione: string) {
        this.codice = codice;
        this.denominazione = denominazione;
    }

    abstract getChild(): Array<EnteTerritoriale>;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    addChild(enteTerritoriale: EnteTerritoriale) {
        throw new Error('not allowed');
    }

    abstract getPopolazione(): number;

    getCodice(): number {
        return this.codice;
    }

    getDenominazione(): string {
        return this.denominazione;
    }
}
