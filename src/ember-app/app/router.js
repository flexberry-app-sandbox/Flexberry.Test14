import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-test14-город-l');
  this.route('i-i-s-test14-город-e',
  { path: 'i-i-s-test14-город-e/:id' });
  this.route('i-i-s-test14-город-e.new',
  { path: 'i-i-s-test14-город-e/new' });
  this.route('i-i-s-test14-дом-l');
  this.route('i-i-s-test14-дом-e',
  { path: 'i-i-s-test14-дом-e/:id' });
  this.route('i-i-s-test14-дом-e.new',
  { path: 'i-i-s-test14-дом-e/new' });
  this.route('i-i-s-test14-комната-l');
  this.route('i-i-s-test14-комната-e',
  { path: 'i-i-s-test14-комната-e/:id' });
  this.route('i-i-s-test14-комната-e.new',
  { path: 'i-i-s-test14-комната-e/new' });
  this.route('i-i-s-test14-улица-l');
  this.route('i-i-s-test14-улица-e',
  { path: 'i-i-s-test14-улица-e/:id' });
  this.route('i-i-s-test14-улица-e.new',
  { path: 'i-i-s-test14-улица-e/new' });
});

export default Router;
