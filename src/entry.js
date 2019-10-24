/**
 * @flow
 */
import LocalStorageService from './app/localStorage.service';
import AppController from './app/app.controller';

LocalStorageService.save({ key: 'test', val: 'abc' });

new AppController();
