var assert = require('assert');
var grib = require('../index');

describe('safrica.grib2', function() {
  var msgs;

  // Read in file before each test (to guard against modification)
  beforeEach(function(done) {
    grib.readFile('samples/safrica.grib2', function(err, msgs_) {
      if(err) return done(err);
      msgs = msgs_;
      done();
    });
  });

  it('should have 75 records', function() {
    assert.strictEqual(msgs.length, 75);
  });
});

describe('reduced_latlon_surface.grib2', function() {
  var msgs;

  // Read in file before each test (to guard against modification)
  beforeEach(function(done) {
    grib.readFile('samples/reduced_latlon_surface.grib2', function(err, msgs_) {
      if(err) return done(err);
      msgs = msgs_;
      done();
    });
  });

  it('should have 1 record', function() {
    assert.strictEqual(msgs.length, 1);
  });
});

describe('tpcprblty.grib2', function() {
  var msgs;

  // Read in file before each test (to guard against modification)
  beforeEach(function(done) {
    grib.readFile('samples/tpcprblty.grib2', function(err, msgs_) {
      if(err) return done(err);
      msgs = msgs_;
      done();
    });
  });

  it('should have 69 records', function() {
    assert.strictEqual(msgs.length, 69);
  });
});