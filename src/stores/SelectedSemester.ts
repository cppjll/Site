import { atom } from 'nanostores';

export const SelectedSemester = atom(false);

export type LoadingStateValue = 'empty' | 'loading' | 'loaded';

export const $loadingState = atom<LoadingStateValue>('empty');