import Ember from 'ember';


export default Ember.Route.extend({
  actions: {
    lookup(params) {

      var query = params.type + ";-)" + params.zip;


      this.transitionTo('results', query);

    }
  }
});
