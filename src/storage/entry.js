/**
 * @flow
 */
import LocalStorageHelper from '../helpers/localStorage.helper';
import StorageAppController from './app.controller';
// import '../base.css'

LocalStorageHelper.save({ key: 'test', val: 'abc' });

new StorageAppController();
