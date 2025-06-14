import * as hbs from 'hbs';

export function registerHandlebarsHelpers() {
  hbs.registerHelper('join', function(array, separator) {
    return array.join(separator);
  });
}