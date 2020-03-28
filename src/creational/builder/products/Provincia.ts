import EnteTerritoriale from './EnteTerritoriale';

export default class Provincia extends EnteTerritoriale {
    private siglaAutomobilistica: string;

    setSiglaAutomobilistica(siglaAutomobilistica: string) {
        this.siglaAutomobilistica = siglaAutomobilistica;
    }

    getSiglaAutomobilistica(): string {
        return this.siglaAutomobilistica;
    }
}
