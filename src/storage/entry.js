/**
 * @flow
 */
import LocalStorageService from './localStorage.service';
import AppController from './app.controller';
// import '../base.css'

LocalStorageService.save({ key: 'test', val: 'abc' });

new AppController();
