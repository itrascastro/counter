Template.admin.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('counters');
  });
});

Template.admin.helpers({
  gm: function() {
    gm = Counters.findOne({name: 'gm'});
    Session.set('gmId', gm._id);
    return gm;
  },
  gs: function() {
    gs = Counters.findOne({name: 'gs'});
    Session.set('gsId', gs._id);
    return gs;
  },
  mensaje: function() {
    mensaje = Counters.findOne({name: 'mensaje'});
    Session.set('mensajeId', mensaje._id);
    return mensaje;
  }
});

Template.admin.events({
  'click #gm-plus': function() {
    Meteor.call('modifyCounter', Session.get('gmId'), 1);
  },
  'click #gm-minus': function() {
    Meteor.call('modifyCounter', Session.get('gmId'), -1);
  },
  'click #gm-reset': function() {
    Meteor.call('resetCounter', Session.get('gmId'));
  },
  'click #gs-plus': function() {
    Meteor.call('modifyCounter', Session.get('gsId'), 1);
  },
  'click #gs-minus': function() {
    Meteor.call('modifyCounter', Session.get('gsId'), -1);
  },
  'click #gs-reset': function() {
    Meteor.call('resetCounter', Session.get('gsId'));
  },
  'click #mensaje-btn': function(e,t) {
    var mensaje = t.find('#mensaje');
    Meteor.call('modifyMensaje', Session.get('mensajeId'), mensaje.value);
  }
});
