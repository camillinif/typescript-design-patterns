import Gatto from '../animali/Gatto';
import CreatorAnimale from './CreatorAnimale';

export default class CreatorGatto implements CreatorAnimale {
    crea(): Gatto {
        return new Gatto();
    }
}
