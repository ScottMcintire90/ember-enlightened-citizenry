import Ember from 'ember';

export default Ember.Component.extend({
  isShowing: false,
  subCommittees: [],
  init(){
    this.set('subCommittees', []);
    var allCommittees = this.get('allCommittees');
    //loop everything in allCommittees
    for( var i=0; i< allCommittees.length; i++){
      if (allCommittees[i].parent_committee_id == this.get('committee').committee_id){
        //append to subCommittees array
        this.subCommittees.push(allCommittees[i]);
      }
    }


    if(this.subCommittees.length == 0){
      this.subCommittees.push({name: "no sub committees"})
    }

    this._super();
  },
  actions: {
    showSubs() {
      this.set('isShowing', !this.isShowing);
    }
  }
});
