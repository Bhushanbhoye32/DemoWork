import { HalfNamePipe } from './half-name.pipe';

describe('HalfNamePipe', () => {
  it('create an instance', () => {
    const pipe = new HalfNamePipe();
    expect(pipe).toBeTruthy();
  });
});
