import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import AutotraderCreateForm from "./pages/autotraders/AutotraderCreateForm";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import AutotraderPage from "./pages/autotraders/AutotraderPage";
import AutotradersList from "./pages/autotraders/AutotradersList";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import AutotraderEditForm from "./pages/autotraders/AutotraderEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
//import UsernameForm from "./pages/profiles/UsernameForm";
//import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
//import NotFound from "./components/NotFound";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
        <Route
            exact
            path="/"
            render={() => (
              <AutotradersList message="No results found, adjust the search keyword." />
            )}
          />
          <Route
            exact
            path="/feed"
            render={() => (
              <AutotradersList
                message="No results found, adjust the search keyword or follow a user."
                filter={`owner__followed__owner__profile=${profile_id}&`}
              />
            )}
          />
          <Route
            exact
            path="/saved"
            render={() => (
              <AutotradersList
                message="No results found, adjust the search keyword or save a car."
                filter={`saved__owner__profile=${profile_id}&ordering=-saved__created_at&`}
              />
            )}
          />
          <Route exact path="/signin" component={SignInForm} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/autotraders/create" render={() => <AutotraderCreateForm />} />
          <Route exact path="/autotraders/:id" render={() => <AutotraderPage />} />
          <Route exact path="/autotraders/:id/edit" render={() => <AutotraderEditForm />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route
            exact
            path="/profiles/:id/edit"
            render={() => <ProfileEditForm />}
          />

        </Switch>
      </Container>
    </div>
  );
}

export default App;



           