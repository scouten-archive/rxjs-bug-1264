var Rx = require('rx');

var source = Rx.Observable.from(['a1', 'a2', 'b1', 'b2', 'a3', 'a4', 'b3', 'b4'])
  .groupBy(function (item) { return item.substr(0, 1); });

var obsCount = 0;

var subscription = source.subscribe(
  function (obs) {
    var seq = ++obsCount;
    console.log('New child observable, sequence %d', seq);
    obs.subscribe(function (item) {
      console.log('  item in obs %d: %s', seq, item);
    },
    function (err) {
      console.log('  error in obs %d: %s', seq, err);
    },
    function () {
      console.log('  obs %d completed', seq);
    });
  },
  function (err) {
    console.log('Error: %s', err);
  },
  function () {
    console.log('Completed');
  });
