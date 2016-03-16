Template.counter.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('counters');
  });
});

Template.registerHelper('leadingZeros', function(n) {
  var pad="0000";
  return (pad+n).slice(-4); // 4 digit
});

Template.counter.helpers({
  gm: function() {
    return Counters.findOne({name: 'gm'});
  },
  gs: function() {
    return Counters.findOne({name: 'gs'});
  }
});