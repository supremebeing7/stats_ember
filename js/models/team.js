Basketball.Team = DS.Model.extend({
  players: DS.hasMany('player'),
  name: DS.attr(),
  team_id: DS.attr(),
  selected: DS.attr('boolean', { defaultValue: false })
});
