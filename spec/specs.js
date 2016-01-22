describe('romanNumeral',function() {
  it('will convert a number into roman numerals', function() {
    expect(romanNumeral(511)).to.equal('DXI');
  });
  it('will properly display roman numerals when there are more than three of the same character in a row',function() {
    expect(romanNumeral(4)).to.eql("IV");
  })
});

describe('romanNumeralConverter',function() {
  it('will convert a number to a roman numeral', function() {
    expect(romanNumeralConverter(50)).to.equal('L');
  });
});

describe("breakDownNumber",function(){
  it("will break down numbers into roman numeral values",function(){
    expect(breakDownNumber(653)).to.eql([500,100,50,1,1,1]);
  });
});
