import './App.css';
import Home from './components/Home'

import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
