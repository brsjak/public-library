import { borrows } from '../store/borrows.data';

export const getBorrows = () => {
  return borrows;
};

export const requestBorrow = (data: any) => {
  borrows.push(data);
};
