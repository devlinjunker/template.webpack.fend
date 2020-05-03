/**
 * @flow
 */
import LocalStorageHelper from '../helpers/localStorage.helper';
import StorageAppController from './app.controller';
import '../base.scss';

LocalStorageHelper.save({ key: 'test', val: 'abc' });

new StorageAppController();
