import { selector } from 'recoil'
import { addProductAtom } from '../atom/addProductAtom'

const addProductSelector = selector({
  key: 'addProductSelector',
  get: ({ get }) => get(addProductAtom),
})
