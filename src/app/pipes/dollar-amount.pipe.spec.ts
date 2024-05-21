import { DollarAmountPipe } from './dollar-amount.pipe';

describe('DollarAmountPipe', () => {
  it('should create an instance', () => {
    const pipe = new DollarAmountPipe();
    expect(pipe).toBeTruthy();
  });

  it('should wrap a string in "$" and "million"', () => {
    const pipe = new DollarAmountPipe();
    expect(pipe.transform('123')).toEqual('$123 million');
  });
});
