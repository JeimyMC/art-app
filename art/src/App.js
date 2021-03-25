import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./containers/Principal";
import Museum from "./containers/Museum";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Header}></Route>
        <Route
          path="/city/:name/:museum"
          render={(props) => <Museum name={props.match.params.name}></Museum>}
        ></Route>
      </Switch>
    </Router>
  );
}

export default App;
