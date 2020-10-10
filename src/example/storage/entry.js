/**
 * @flow
 */
import '../base.scss';
import '../../helpers/relative-href.helper';
import LocalStorageHelper from '../../helpers/local-storage.helper';
import StorageAppController from './app.controller';

LocalStorageHelper.save({ key: 'test', val: 'abc' });

new StorageAppController();
