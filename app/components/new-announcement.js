import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow(){
      this.set('addNewAnnouncement', true);
    },
    saveAnnouncement1(){
      var params= {
        text: this.get('text')
      };
      this.set('addNewAnnouncement', false);
      this.sendAction('saveAnnouncement2', params);

      this.set('text', '');
    }
  }
});
