Template.registerHelper('leadingZeros', function(n) {
  var pad="0000";
  return (pad+n).slice(-4); // 4 digit
});
