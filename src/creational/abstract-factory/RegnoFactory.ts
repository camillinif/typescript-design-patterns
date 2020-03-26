import Re from './Re';
import Esercito from './Esercito';
import Castello from './Castello';

export default interface RegnoFactory {
    creaRe(): Re;
    creaEsercito(): Esercito;
    creaCastello(): Castello;
}
