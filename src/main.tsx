
import { createRoot } from 'react-dom/client'
import AppRouter from "@routes/AppRouter";
// styles
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux';
import { store } from './store';



createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
   <AppRouter/>
   </Provider>
)
