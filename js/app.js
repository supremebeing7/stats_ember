Basketball = Ember.Application.create();

DS.LSAdapter.create({
});

Basketball.ApplicationAdapter = DS.LSAdapter.extend({
});

Basketball.ApplicationSerializer = DS.LSSerializer.extend();

Basketball.Router.map(function(){
  this.resource('teams', function(){
    this.resource('team', { path: ':team_id' });
  });
  this.resource('players', function() {
    this.resource('player', { path: ':player_id' });
  });
});


Basketball.TeamsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('team');
  }
});

Basketball.PlayersRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('player');
  }
});

Basketball.TeamRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('team').findBy('id', params.team_id);
  }
});

Basketball.PlayerRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('player').findBy('id', params.player_id);
  }
});

Ember.Handlebars.helper('format-date', function(date) {
  return moment(date).fromNow();
});

var showdown = new Showdown.converter();

Ember.Handlebars.helper('format-markdown', function(input) {
  return new Handlebars.SafeString(showdown.makeHtml(input));
});


