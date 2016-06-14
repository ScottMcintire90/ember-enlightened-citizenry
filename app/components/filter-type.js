import Ember from 'ember';

export default Ember.Component.extend({
  isLegit: false,
  init(){
    //if it is a committee this should be true
    if(this.get('model.0.committee_id') !== undefined){
      this.set('isLegit', false);
    } else{
      this.set('isLegit', true);
    }


    this._super();
  }
});
