Counters = new Mongo.Collection('counters');

Meteor.methods({
  modifyCounter: function(counter, newValue) {
    Counters.update(counter, {$inc: {value: newValue}});
  },
  resetCounter: function(counter) {
    Counters.update(counter, {$set: {value: 999}});
  },
  modifyMensaje: function(counter, newValue) {
    Counters.update(counter, {$set: {value: newValue}});
  }
});
