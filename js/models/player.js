Basketball.Player = DS.Model.extend({
  team: DS.belongsTo('team'),
  name: DS.attr(),
  player_id: DS.attr()
});
