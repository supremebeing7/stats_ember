Basketball.TeamsController = Ember.ArrayController.extend({
  actions: {
    createTeam: function() {
      var name = this.get('newTeam');
      var team = this.store.createRecord('team', {
        name: name
      });
      this.set('newTeam', '');
      team.save();
    }
  }
});

Basketball.TeamController = Ember.ObjectController.extend({
  isEditing: false,

  edit: function() {
    this.set('isEditing', true);
  },

  doneEditing: function() {
    this.set('isEditing', false);
    this.get('model').save();
  }
});
