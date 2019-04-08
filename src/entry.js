/**
 * @flow
 */
import LocalStorageService from './localStorage.service';


LocalStorageService.save({ key: 'test', val: 'abc' });
LocalStorageService.get({ key: 'test' });
