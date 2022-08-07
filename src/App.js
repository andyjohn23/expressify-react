import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './container/HomePage/HomePage';
import SinglePage from './container/SinglePage/SinglePage';
import Write from './container/PostCreate/Write';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/singlepost" component={SinglePage} />
          <Route exact path="/createpost" component={Write} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

