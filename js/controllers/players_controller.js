Basketball.PlayersController = Ember.ArrayController.extend({
  actions: {
    createPlayer: function() {
      var name = this.get('newPlayer');
      var player = this.store.createRecord('player', {
        name: name
      });
      this.set('newPlayer', '');
      player.save();
    }
  }
});

Basketball.PlayerController = Ember.ObjectController.extend({
  isEditing: false,

  edit: function() {
    this.set('isEditing', true);
  },

  doneEditing: function() {
    this.set('isEditing', false);
    this.get('model').save();
  }
});
