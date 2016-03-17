Template.registerHelper('leadingZeros', function(n) {
  var pad="0000";
  return (pad+n).slice(-3); // 3 digit
});
