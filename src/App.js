import Login from './components/Login';
import { observer } from 'mobx-react-lite';
import { Context } from ".";
import { useEffect, useContext } from 'react';

function App() {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem('token')) {
        store.checkAuth();
    }
  }, []);

  if (!store.isAuth) {
    return (
      <div className="App">
        <Login />
      </div>
    )
  } else {
    return (
      <div>
        main
      </div>
    )
  }
}

export default observer(App)
