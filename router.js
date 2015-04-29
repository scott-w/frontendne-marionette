var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

var BlogListView = require('./bloglist');
var BlogView = require('./blog');


var Controller = Marionette.Object.extend({
  initialize: function() {
    this.collection = new Backbone.Collection(this.options.data);
    this.regions = new RegionManager({
      regions: {
        layout: '#layout'
      }
    });
  },

  entryList: function() {

  },

  blogEntry: function(id) {

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
