<<<<<<< HEAD
=======
import { waitUntil } from 'async-wait-until';
>>>>>>> 6e5a597c2b2ba17b6b9c10078977d2e8af0ab28d
import App from './App.vue';
import './global.css';

$(async () => {
  await waitGlobalInitialized('Mvu');
<<<<<<< HEAD
=======
  await waitUntil(() => _.has(getVariables({ type: 'message' }), 'stat_data'));
>>>>>>> 6e5a597c2b2ba17b6b9c10078977d2e8af0ab28d
  createApp(App).use(createPinia()).mount('#app');
});
