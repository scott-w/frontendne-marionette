var Backbone = require('backbone');
var Marionette = require('backbone.marionette');


var Comment = Marionette.LayoutView.extend({
  tagName: 'li',
  template: require('./blogitem.html')
});


var Blog = Marionette.CompositeView.extend({
  template: require('./blog.html'),
  childView: Comment,
  childViewContainer: 'ol',

  initialize: function() {
    this.collection = new Backbone.Collection(this.model.get('comments'));
  }
});


module.exports = Blog;
