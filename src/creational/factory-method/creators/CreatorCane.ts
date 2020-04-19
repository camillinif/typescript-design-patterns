import Cane from '../animali/Cane';
import CreatorAnimale from './CreatorAnimale';

export default class CreatorCane implements CreatorAnimale {
    crea(): Cane {
        return new Cane();
    }
}
