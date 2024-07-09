import { sonarProvider } from './sonar';
import { keplrProvider } from './keplr';
import { leapProvider } from './leap';

const providers = [
    sonarProvider,
    keplrProvider,
    leapProvider,
];

export {
    sonarProvider,
    keplrProvider,
    leapProvider,
    providers,
}