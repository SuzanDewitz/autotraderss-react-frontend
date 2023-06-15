import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import NotFound from "./components/NotFound";
import AutotraderCreateForm from "./pages/autotraders/AutotraderCreateForm";
import AutotraderPage from "./pages/autotraders/AutotraderPage";


function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/signin" component={SignInForm} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/autotraders/create" render={() => <AutotraderCreateForm />} />
          <Route exact path="/autotraders/:id" render={() => <AutotraderPage />} />
          <Route component={NotFound} />
        </Switch>
      </Container> 
    </div>
  );
}

export default App;