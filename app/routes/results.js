import Ember from 'ember';

export default Ember.Route.extend({

  isLegit: true,
  model: function(params) {

    //TODO parse params for zip and type
    var queryParams = params.type.split(";-)");
    var url;
    var zip = queryParams[1];
    var key = "35e064d7e4344fc4a71b6113e4f26cc3";
    var type = queryParams[0]; //params.type
    if (type === "legislators/locate"){
      // this.set('isLegit', true);
      url = 'http://congress.api.sunlightfoundation.com/'+type+'?apikey=' +key+ '&zip=' + zip;
    } else {
      url = 'http://congress.api.sunlightfoundation.com/'+type+'?apikey=' +key;
    }
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
// 35e064d7e4344fc4a71b6113e4f26cc3
