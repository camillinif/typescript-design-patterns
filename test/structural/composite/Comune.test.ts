import { Comune } from '@structural/composite';

describe('Comune', () => {
    const comune = new Comune(1, 'Faenza', 2000);

    it('get codice', () => expect(comune.getCodice()).toBe(1));

    it('get denominazione', () =>
        expect(comune.getDenominazione()).toBe('Faenza'));

    it('get popolazione', () => expect(comune.getPopolazione()).toBe(2000));
});
