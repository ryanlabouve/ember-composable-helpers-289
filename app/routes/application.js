import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Route.extend({
  model() {
    let bob = this.store.createRecord('people', {
      name: 'bob'
    });

    let zim = this.store.createRecord('people', {
      name: 'zim'
    });

    let salley = this.store.createRecord('people', {
      name: 'salley'
    });

    let promiseArray = DS.PromiseArray.create({
      promise: Ember.RSVP.resolve([bob, zim, salley])
    });

    return Ember.RSVP.hash({
      people: promiseArray
    });
  }
});
