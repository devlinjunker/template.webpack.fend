/**
 * @flow
 */
import LocalStorageHelper from '../helpers/localStorage.helper';
import StorageAppController from './app.controller';
import 'normalize.css';
import '../base.css';

LocalStorageHelper.save({ key: 'test', val: 'abc' });

new StorageAppController();
