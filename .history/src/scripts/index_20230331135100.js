import '../styles/index.scss';

console.log('webpack starterkit');

import Handlebars from 'handlebars';
import template from '../index.hbs';

const data = {
  title: 'My Page',
  message: 'Welcome to my page!'
};

const compiledTemplate = Handlebars.compile(template);
const html = compiledTemplate(data);
console.log(html);

