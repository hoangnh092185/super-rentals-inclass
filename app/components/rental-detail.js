import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(rental) {
      if (confirm('Are you sure you want to DELETE this rental?')){
        this.sendAction('destroyRental', rental);
      }
    }
  }
});
