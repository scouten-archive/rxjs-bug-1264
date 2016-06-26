var Rx = require('rx');

var obsCount = 0;

var source = Rx.Observable.from(['a1', 'a2', 'b1', 'b2', 'a3', 'a4', 'b3', 'b4'])
  .groupBy(function (item) { return item.substr(0, 1); })
  .map(function (obs) {
    var seq = ++obsCount;
    console.log('\n\n\nNEW GROUP %d\n\n\n', seq);
    return obs.tap(function (item) {
      console.log('processing item in group %d: %s', seq, item);
    });
  })
  .concatAll();

var subscription = source.subscribe(
  function (x) {
    console.log('Next: %s', x);
  },
  function (err) {
    console.log('Error: %s', err);
  },
  function () {
    console.log('Completed');
  });
