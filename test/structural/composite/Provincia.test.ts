import { Comune, Provincia } from '@structural/composite';
describe('Comune', () => {
    const comuneA = new Comune(1, 'Faenza', 2000);
    const comuneB = new Comune(2, 'Lugo', 3000);
    const provincia = new Provincia(1, 'Ravenna');

    it('get popolazione', () => {
        provincia.addChild(comuneA);
        provincia.addChild(comuneB);
        expect(provincia.getPopolazione()).toBe(
            comuneA.getPopolazione() + comuneB.getPopolazione()
        );
    });
});
