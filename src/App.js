import Login from './components/Login';
import { observer } from 'mobx-react';
import { Context } from ".";
import { useEffect, useContext } from 'react';
import Main from './components/Main';
import { toJS } from 'mobx';

function App() {
  const { store } = useContext(Context);

  useEffect(() => {

    const token  = localStorage.getItem('token');

    if (token) {
        store.checkAuth(token);
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
