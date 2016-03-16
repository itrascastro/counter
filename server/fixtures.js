if (Counters.find().count() === 0) {
  Counters.insert({name: 'gm', value: 0});
  Counters.insert({name: 'gs', value: 0});
}