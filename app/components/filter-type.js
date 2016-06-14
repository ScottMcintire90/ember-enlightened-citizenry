import Ember from 'ember';

export default Ember.Component.extend({
  isLegit: false,
  isCommittee: false,
  init(){
    //if it is a committee this should be true
    if(this.get('model.0.committee_id') !== undefined){
      this.set('isCommittee', true);
      this.set('isLegit', false);
    } else if (this.get('model.0.last_name') !== undefined){
      this.set('isLegit', true);
      this.set('isCommittee', false);
    }
    this._super();
  }
});
