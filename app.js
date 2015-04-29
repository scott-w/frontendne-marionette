var Backbone = require('backbone');
Backbone.$ = window.$; // Use the jQuery from the script tag
console.log(window.$);
Backbone.Marionette = Marionette;
var Marionette = require('backbone.marionette');


var Router = require('./router');


var blogData = [
  {
    id: 1,
    author: 'Scott',
    text: 'I love blogging!',
    comments: [
      {
        id: 33,
        text: 'So do I!',
        author: 'Andrew'
      },
      {
        id: 99,
        text: 'This is fun',
        author: 'Steve'
      }
    ]
  },
  {
    id: 5,
    author: 'Scott',
    text: 'Marionette is great!',
    comments: [
      {
        id: 34,
        text: 'It sure is!',
        author: 'Andrew'
      }
    ]
  }
];


var Application = Marionette.Application.extend({
  onStart: function(options) {
    var router = new Router({data: options.data});
  }
});


var app = new Application();
app.start({data: blogData});
