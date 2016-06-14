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
        console.log(allCommittees[i].parent_committee_id);
      }
    }
    console.log(this.get('subCommittees'));




    this._super();
  },
  actions: {
    showSubs() {
      this.set('isShowing', !this.isShowing);
    }
  }
});
