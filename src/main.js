import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

createApp(App).use(store).use(router).mount('#app')


// import VueLazyload from 'vue-lazyload';
// const app = createApp(App);

// app.use(VueLazyload);

// app.mount('#app');

// import Swal from 'sweetalert2';

// Swal.fire({
//   title: 'Hello!',
//   text: 'This is a SweetAlert2 popup!',
//   icon: 'success',
// });

