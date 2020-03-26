import ReOrchesco from './ReOrchesco';
import CastelloOrchesco from './CastelloOrchesco';
import EsercitoOrchesco from './EsercitoOrchesco';
import RegnoFactory from './RegnoFactory';

export default class RegnoOrchescoFactory implements RegnoFactory {
    creaCastello(): CastelloOrchesco {
        return new CastelloOrchesco();
    }

    creaEsercito(): EsercitoOrchesco {
        return new EsercitoOrchesco();
    }

    creaRe(): ReOrchesco {
        return new ReOrchesco();
    }
}
