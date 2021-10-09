import './App.scss';
import { Switch, Route, useHistory } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { StartPage } from './pages/StartPage/StartPage';
import { Settings } from './pages/Settings/Settings';
import { BuildHistory } from './pages/BuildHistory/BuildHistory';

function App() {
  const history = useHistory();

  if (!localStorage.getItem('settings')) {
    history.push('/no-settings');
  }

  return (
    <div className="App">
      <div className="content">
        <Switch>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/no-settings">
            <StartPage />
          </Route>
          <Route path="/">
            <BuildHistory />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
