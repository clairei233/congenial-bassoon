<<<<<<< HEAD
=======
import { waitUntil } from 'async-wait-until';
>>>>>>> 8a3236488f838733f52d0fbae264274272bfdbb3
import App from './App.vue';
import './global.css';

$(async () => {
  await waitGlobalInitialized('Mvu');
<<<<<<< HEAD
=======
  await waitUntil(() => _.has(getVariables({ type: 'message' }), 'stat_data'));
>>>>>>> 8a3236488f838733f52d0fbae264274272bfdbb3
  createApp(App).use(createPinia()).mount('#app');
});
