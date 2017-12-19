// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '../../components/App'
import router from '../../router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// import '../../util/common';

// import Vue from 'vue';
// import Vuex from 'vuex';
// import common from '../../store/common';
// import finance from '../../store/modules/finance';
// import app from './index.vue';
// import createLogger from 'vuex/dist/logger';
// import '../../../rebuid/dist/css/orange/finance.css';
// // import '../../../rebuid/css/theme/default/financial-index.css';

// typeof window.Vue !== 'function' && Vue.use(Vuex);

// const debug = process.env.NODE_ENV !== 'production';

// let store = new Vuex.Store({
//     modules: {
//         common,
//         finance
//     },
//     strict: debug,
//     plugins: debug ? [createLogger()] : []
// });

// window.__store = store;

// new Vue({
//     el: '#app',
//     store,
//     render: h => h(app)
// });
