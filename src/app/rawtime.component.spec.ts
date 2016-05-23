import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { RawtimeAppComponent } from '../app/rawtime.component';

beforeEachProviders(() => [RawtimeAppComponent]);

describe('App: Rawtime', () => {
  it('should create the app',
      inject([RawtimeAppComponent], (app: RawtimeAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'rawtime works!\'',
      inject([RawtimeAppComponent], (app: RawtimeAppComponent) => {
    expect(app.title).toEqual('rawtime works!');
  }));
});
