import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  message: DS.attr(),
  picture: DS.attr(),
  name: DS.attr(),
  email: DS.attr(),
  price: DS.attr(),

});
