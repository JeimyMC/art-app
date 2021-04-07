import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./containers/Principal";
import Museum from "./containers/Museum";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Header}></Route>
        <Route
          path="/:idCity/:city/:name/:idMuseum"
          render={(props) => <Museum {...props.match.params}></Museum>}
        ></Route>
      </Switch>
    </Router>
  );
}

export default App;
