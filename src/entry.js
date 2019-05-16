/**
 * @flow
 */
import LocalStorageService from './localStorage.service';
import AppController from './app.controller';

LocalStorageService.save({ key: 'test', val: 'abc' });

new AppController();
