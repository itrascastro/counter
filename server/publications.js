Meteor.publish('counters', function() {
  return Counters.find();
});