var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

var BlogListView = require('./bloglist');
var BlogView = require('./blog');


var Controller = Marionette.Object.extend({
  initialize: function() {
    this.collection = new Backbone.Collection(this.options.data);
    this.regionManager = new Marionette.RegionManager({
      regions: {
        layout: '#layout'
      }
    });
  },

  entryList: function() {
    var blogList = new BlogListView({
      collection: this.collection,
      controller: this
    });
    this.regionManager.get('layout').show(blogList);
  },

  blogEntry: function(id) {
    var model = this.collection.get(id);
    var blog = new BlogView({
      controller: this,
      model: model
    });
    this.regionManager.get('layout').show(blog);
  }
});


var Router = Marionette.AppRouter.extend({
  initialize: function() {
    this.controller = new Controller(this.options);
  },

  appRoutes: {
    '': 'entryList',
    'blog/:id': 'blogEntry'
  }
});


module.exports = Router;
