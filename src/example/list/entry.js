/**
 * @flow
 */
import '../base.scss';
import '../../helpers/relative-href.helper';
import listObjectTemplate from '../../components/list/list-object.hbs';
import listItemTemplate from './components/my-list-item.hbs';

const items: Array<{
  first: string;
  last: string;
  location?: string;
  status: 'SUCCESS' | 'FAIL' | 'IN_PROGRESS' | 'NEW';
}> = [
  { first: 'Devlin', last: 'Junker', location: 'OR', status: 'SUCCESS' },
  { first: 'Bob', last: 'Smith', location: 'CA', status: 'IN PROGRESS' },
  { first: 'Alfred', last: 'P', status: 'NEW' },
];


// Handlebars partials need to be compiled in javascript file and added to DOM with document object
const listObject = listObjectTemplate({ items, template: 'my-list-template' }, {
  partials: {
    'my-list-template': listItemTemplate
  }
});
document.getElementById('page').innerHTML = listObject;
