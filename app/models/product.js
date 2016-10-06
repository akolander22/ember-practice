import Ember from 'ember';

export default Ember.Object.extend({

})

var product = Product.create({
  title: 'Sleeping Bag'
});

product.get('title')
product.set('title', 'Matches')
