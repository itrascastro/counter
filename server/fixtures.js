if (Counters.find().count() === 0) {
  Counters.insert({name: 'gm', value: 999});
  Counters.insert({name: 'gs', value: 999});
  Counters.insert({name: 'altres', value: 999});
}