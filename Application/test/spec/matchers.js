jasmine.addMatchers(
  {'toBeMultipleOf': function() {
    return {
      compare: function(actual, expected){
        var result = {pass: (actual % expected) === 0};
        result.message = result.pass ? '...' : '...' ;
        return result;
      }
    };
  }
});

describe('', function(){
  it('', function(){
    expect(15).toBeMultipleOf(5);
  });
});