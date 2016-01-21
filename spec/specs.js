describe('romanNumeralConverter',function() {
  it('will convert value to roman numeral', function() {
    expect(romanNumeralConverter(50)).to.equal('L');
  });
});

describe("breakDownNumber",function(){
  it("will convert value to corresponding roman numeral",function(){
    expect(breakDownNumber(654)).to.eql([500,100,50,1,1,1,1]);
  });
});
