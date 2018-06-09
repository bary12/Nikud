// tslint:disable:ordered-imports
import Vue from 'vue';
import App from './components/App.vue';
import 'markdown-air/css/air.css';

// tslint:disable-next-line:no-unused-expression
new Vue({
  el: '#app',
  components: { App },
  render(h) {
    return h(App);
  },
  template: '<App />',
});
