import { MULTIPLY_FIVE } from './actionTypes';

export type MultiplyType = {
    type: typeof MULTIPLY_FIVE;
    payload: number;
  };

export type TestActions =
    | MultiplyType;