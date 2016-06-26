var Rx = require('rx');

var source = Rx.Observable.interval(100)
  .take(2)
  .map(function (i) {
    return [
      Rx.Observable.from(['a1', 'a2', 'a3', 'a4']),
      Rx.Observable.from(['b1', 'b2', 'b3', 'b4'])
    ][i];
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
