var WhiskeyListView = Backbone.View.extend ({

  el: '.whiskey_list',

  events: {
    'click .card' : 'toggleDrank'
  },

  initialize: function () {
    this.render();
    this.collection.on('change', this.render, this);
//    this.collection.on('sort', this.render, this);
  },

  render: function () {
    this.collection.sort();
    var template = Handlebars.compile($('#whiskey_items').html());
    var rendered = template({ drinks: this.collection.toJSON() });
    this.$el.html(rendered);
  },

  toggleDrank: function (event) {
    event.preventDefault();

    var item_clicked = $(event.currentTarget);
    var drink_id = item_clicked.attr('id');
    var drink = this.collection.get(drink_id);
    var tried = drink.get('tried');

    if (tried) {
      drink.set({ tried: false }).save();
    } else {
      drink.set({ tried: true }).save();
    }
  }

});

