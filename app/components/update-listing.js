import Ember from 'ember';

export default Ember.Component.extend({
  updateListingForm: false,
    actions: {
      updateListingForm() {
        this.set('updateListingForm', true);
      },
      update(listing) {
        var params = {
          name: this.get('name'),
          location: this.get('location'),
          phone: this.get('phone'),
          price: this.get('price'),
          title: this.get('title'),
          body: this.get('body'),
          email: this.get('email')
        };
        this.set('updateListingForm', false);
        this.sendAction('update', listing, params);
      }
    }
  });
