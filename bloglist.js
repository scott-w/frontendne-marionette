var Marionette = require('backbone.marionette');


var BlogItem = Marionette.LayoutView.extend({
  tagName: 'li',
  template: require('./blogitem.html')
});


var BlogList = Marionette.CollectionView.extend({
  tagName: 'ol'
});


module.exports = BlogList;
