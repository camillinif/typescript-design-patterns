import Animale from './Animale';

export default class Gatto implements Animale {
    comunica(): string {
        return 'miao';
    }
}
