import Vue from 'vue';
import App from './App.vue';
import Color from './color';

Vue.directive('colored', Color);

Vue.filter('uppercase', value => value.toUpperCase());

/*Vue.mixin({
  beforeCreate() {
    console.log('before create');
  }
});*/

new Vue({
  el: '#app',
  render: h => h(App)
});
