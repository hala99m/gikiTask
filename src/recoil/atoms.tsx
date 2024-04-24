// atoms.js
import { atom } from 'recoil';

export const showStateAtom = atom({
  key: 'showState',
  default: false,
});

export const modalValueAtom = atom({
  key: 'modalValue',
  default: {
    name: 'Alice',
    language: 'select',
    region: 'select',
    images: []
  },
});

export const isEditableAtom = atom({
  key: 'isEditable',
  default: false,
});

export const activeStepAtom = atom({
    key: 'activeStep',
    default: 1,
});

export const isSubmittedAtom = atom({
    key: 'isSubmitted',
    default: false,
});
  