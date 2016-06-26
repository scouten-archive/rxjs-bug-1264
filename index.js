var Rx = require('rxjs');

var source = Rx.Observable.from(['a1', 'a2', 'b1', 'b2', 'a3', 'a4', 'b3', 'b4'])
  .groupBy(function (item) { return item.substr(0, 1); })
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
