import Login from './components/Login';
import { observer } from 'mobx-react';
import { Context } from ".";
import { useEffect, useContext } from 'react';
import Main from './components/Main';

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
        <Main/>
    )
  }
}

export default observer(App)
