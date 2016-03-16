Template.counter.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('counters');
  });
});

Template.counter.helpers({
  gm: function() {
    return Counters.findOne({name: 'gm'});
  },
  gs: function() {
    return Counters.findOne({name: 'gs'});
  }
});