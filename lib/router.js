FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render('layout', {content: 'counter'});
    document.title = "Counter";
  }
});

FlowRouter.route('/admin', {
  action: function() {
    BlazeLayout.render('layout', {content: 'admin'});
    document.title = "Admin";
  }
});
