import { Route, Switch } from "react-router-dom";
import Cadastro from "./pages/cadastro";
import Dashboard from "./pages/dashboard";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Cadastro />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </>
  );
}

export default App;
