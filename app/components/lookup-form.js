import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    lookup() {
      var params = {
        zip: this.get('zip'),
        type: this.get('type')
      };
      this.sendAction('lookup', params);
    }
  }
});
