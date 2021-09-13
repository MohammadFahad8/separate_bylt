import Vue from 'vue'
import App from './App.vue'
import VSwitch from 'v-switch-case';
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;
Vue.prototype.$appUrl = 'https://5b48-2400-adc7-91b-8900-a1c4-8dcf-e803-c4fe.ngrok.io';
Vue.use(VSwitch)
Vue.component('hello',require('./components/HelloWorld').default)
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('bodyfit-component', require('./components/BodyComponent.vue').default);
Vue.component('form-component', require('./components/FormComponent.vue').default);
Vue.component('attribute-one-component', require('./components/AttributeoneComponent.vue').default);
Vue.component('attribute-two-component', require('./components/AttributetwoComponent.vue').default);
Vue.component('attribute-three-component', require('./components/AttributethreeComponent.vue').default);
Vue.component('result-component', require('./components/ResultComponent.vue').default);
Vue.component('dummy-result',require('./components/Errorplaceholder').default)
Vue.component('placeholder-text',require('./components/Errorplaceholdertext').default)
Vue.component('skeleton',require('./components/Skeletoncard.vue').default);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
