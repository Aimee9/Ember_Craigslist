import Ember from 'ember';

export function formatRelative(params) {
  var date = params[0];
  return moment(date).startOf('minute').fromNow();
}


export default Ember.Helper.helper(formatRelative);
