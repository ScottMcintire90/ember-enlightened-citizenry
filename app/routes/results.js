import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var key = "35e064d7e4344fc4a71b6113e4f26cc3";
    var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=' +key+ '&zip=' +params.zip;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
// 35e064d7e4344fc4a71b6113e4f26cc3
