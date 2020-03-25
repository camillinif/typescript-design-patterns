import { Comune, Provincia, Regione } from '@structural/composite';

describe('Comune', () => {
    const comuneA = new Comune(1, 'Faenza', 2000);
    const comuneB = new Comune(2, 'Lugo', 3000);
    const comuneC = new Comune(1, 'Morciano di Romagna', 6000);
    const comuneD = new Comune(1, 'San Clemente', 3000);
    const provinciaA = new Provincia(1, 'Ravenna');
    const provinciaB = new Provincia(1, 'Rimini');
    const regione = new Regione(1, 'Emilia Romagna');
    regione.addChild(provinciaA);
    regione.addChild(provinciaB);

    it('get popolazione', () => {
        provinciaA.addChild(comuneA);
        provinciaA.addChild(comuneB);
        provinciaB.addChild(comuneC);
        provinciaB.addChild(comuneD);
        expect(regione.getPopolazione()).toBe(
            provinciaA.getPopolazione() + provinciaB.getPopolazione()
        );
    });
});
