Template.admin.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('counters');
  });
});