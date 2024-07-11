import { sonarProvider } from './sonar';
import { keplrProvider } from './keplr';
import { leapProvider } from './leap';

const providers = [
    sonarProvider,
    keplrProvider,
    leapProvider,
];

const getProvider = (name: string) => {
    return providers.find(p => p.name === name);
}

export {
    sonarProvider,
    keplrProvider,
    leapProvider,
    providers,
    getProvider,
}