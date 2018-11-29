import { expect } from 'chai';

import { AppController } from './app-controller';

/* tslint:disable:no-unused-expression */
describe('AppController', () => {
  let appController: AppController;

  beforeEach(() => {
    appController = new AppController();
  });

  it('should create', () => {
    expect(appController).to.be.not.undefined;
  });
});
