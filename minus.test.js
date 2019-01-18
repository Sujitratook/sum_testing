const minus = require('./minus');

// 50 - 10 เท่ากับ 40
test('50 - 10 เท่ากับ 40', ()=> {
    expect(minus(50,10)).toBe(40)
});
// 16 - 4 เท่ากับ 12
test('16 - 4 เท่ากับ 12', ()=> {
    expect(minus(16,4)).toBe(12)
});
// 29 - 9 เท่ากับ 20
test('29 - 9 เท่ากับ 20', ()=> {
    expect(minus(29,9)).toBe(20)
});
// 12 - 5 เท่ากับ 7
test('12 - 5 เท่ากับ 7', ()=> {
    expect(minus(12,5)).toBe(7)
});
// 10 - 3 เท่ากับ 8
test('10 - 3 เท่ากับ 7', ()=> {
    expect(minus(10,3)).toBe(7)
});