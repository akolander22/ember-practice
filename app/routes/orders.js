import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return [
      {id: '1', name: 'Andrew'},
      {id: '2', name: 'Kelly'}
    ].findBy('id', params.order_id);
  }
});
