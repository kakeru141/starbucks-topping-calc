import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const LoginAtom = atom({
  key: 'LoginAtom',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
