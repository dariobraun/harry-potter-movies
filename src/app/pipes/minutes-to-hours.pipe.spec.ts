import { MinutesToHoursPipe } from './minutes-to-hours.pipe';

describe('MinutesToHoursPipe', () => {
  it('should create an instance', () => {
    const pipe = new MinutesToHoursPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform minutes to hours and minutes', () => {
    const pipe = new MinutesToHoursPipe();
    expect(pipe.transform('152')).toEqual('2h 32min')
  })
});
