import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './container/HomePage/HomePage';
import SinglePage from './container/SinglePage/SinglePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/singlepost" component={SinglePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

