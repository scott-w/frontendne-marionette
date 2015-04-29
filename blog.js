var Marionette = require('backbone.marionette');


var Blog = Marionette.LayoutView.extend({
  template: require('./blog.html')
});


module.exports = Blog;
