var Backbone = require('backbone');
var Marionette = require('backbone.marionette');


var BlogItem = Marionette.LayoutView.extend({
  tagName: 'li',
  template: require('./blogitem.html'),

  attributes: {
    style: 'cursor:pointer;'
  },

  triggers: {
    click: 'view:blog'
  }
});


var BlogList = Marionette.CollectionView.extend({
  tagName: 'ol',
  childView: BlogItem,

  onChildviewViewBlog: function(child) {
    Backbone.history.navigate('blog/' + child.model.id);
    this.options.controller.blogEntry(child.model.id);
  }
});


module.exports = BlogList;
