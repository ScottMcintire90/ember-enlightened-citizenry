import Ember from 'ember';

export default Ember.Component.extend({
    isLegit: false,
    model(){
      if (type === "legislators/locate"){
        this.set('isLegit', true);
      }
    }
});
