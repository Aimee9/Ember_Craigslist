import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  body: DS.attr(),
  name: DS.attr(),
  email: DS.attr(),
  phone: DS.attr(),
  location: DS.attr(),
  price: DS.attr(),
  date_added: DS.attr(),
  category: DS.belongsTo('category', {async: true})
});
