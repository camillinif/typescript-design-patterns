import ReElfico from './ReElfico';
import CastelloElfico from './CastelloElfico';
import EsercitoElfico from './EsercitoElfico';
import RegnoFactory from './RegnoFactory';

export default class RegnoElficoFactory implements RegnoFactory {
    creaCastello(): CastelloElfico {
        return new CastelloElfico();
    }

    creaEsercito(): EsercitoElfico {
        return new EsercitoElfico();
    }

    creaRe(): ReElfico {
        return new ReElfico();
    }
}
