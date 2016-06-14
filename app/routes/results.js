import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {

    var queryParams = params.type.split(";-)");
    var url;
    var zip = queryParams[1];
    var key = "35e064d7e4344fc4a71b6113e4f26cc3";
    var type = queryParams[0];
    if (type === "legislators/locate"){
      url = 'http://congress.api.sunlightfoundation.com/'+type+'?apikey=' +key+ '&zip=' + zip;
    } else if (type === "committees"){
      url = 'http://congress.api.sunlightfoundation.com/'+type+'?apikey=' +key +'&per_page=all';
    } else {
      url = 'http://congress.api.sunlightfoundation.com/'+type+'?apikey=' +key +'&per_page=all';
    }

    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
// 35e064d7e4344fc4a71b6113e4f26cc3
