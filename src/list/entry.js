/**
 * @flow
 */
import '../base.scss';
import '../helpers/relative-href.helper';
import listObjectTemplate from '../components/list/list-object.hbs';
import listItemTemplate from './components/my-list-item.hbs';

const items = [
  { name: 'abc', done: true },
  { name: 123, done: false },
  { name: 'help', done: false }
];


// Handlebars partials need to be compiled in javascript file and added to DOM with document object
const listObject = listObjectTemplate({ items, template: 'my-list-template' }, {
  partials: {
    'my-list-template': listItemTemplate
  }
});
document.getElementById('page').innerHTML = listObject;
