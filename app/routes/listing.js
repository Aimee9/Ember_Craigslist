import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('listing', params.listing_id);
  },
  actions: {

  update(listing, params) {
    Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          listing.set(key,params[key]);
        }
      });
      listing.save();
      this.transitionTo('category');
    },
    delete(listing) {
      if (confirm('Are you sure you want to delete this listing?')) {
        this.send('destroyListing', listing);
      }
    },

    destroyListing(listing) {
      listing.destroyRecord();
      this.transitionTo('index');
    }
  }
});
