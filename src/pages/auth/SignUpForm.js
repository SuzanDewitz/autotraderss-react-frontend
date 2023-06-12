import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/SignInUpForm.module.css";
// eslint-disable-next-line
import btnStyles from "../../styles/Button.module.css";
// eslint-disable-next-line
import appStyles from "../../App.module.css";
// eslint-disable-next-line
import Form from "react-bootstrap/Form";
// eslint-disable-next-line
import Button from "react-bootstrap/Button";
// eslint-disable-next-line
import Col from "react-bootstrap/Col";
// eslint-disable-next-line
import Row from "react-bootstrap/Row";
// eslint-disable-next-line
import Image from "react-bootstrap/Image";
// eslint-disable-next-line
import Container from "react-bootstrap/Container";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useRedirect } from "../../hooks/useRedirect";
import Logo from "../../assets/logo.png";
import Alert from 'react-bootstrap/Alert'; // Add this line

// Rest of the code...


const SignUpForm = () => {
  useRedirect("loggedIn");
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const { username, password1, password2 } = signUpData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      history.push("/signin");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign up</h1>

          <Form onSubmit={handleSubmit}>
          <Form.Group controlId="username">
  <Form.Label className="d-none">username</Form.Label>
  <Form.Control
    className={styles.Input}
    type="text"
    placeholder="Username"
    name="username"
    value={username}
    onChange={handleChange}
  />
  {errors.username && errors.username.map((message, idx) => (
    <Alert variant="warning" key={idx}>
      {message}
    </Alert>
  ))}
</Form.Group>

<Form.Group controlId="password1">
  <Form.Label className="d-none">Password</Form.Label>
  <Form.Control
    className={styles.Input}
    type="password"
    placeholder="Password"
    name="password1"
    value={password1}
    onChange={handleChange}
  />
  {errors.password1 && errors.password1.map((message, idx) => (
    <Alert key={idx} variant="warning">
      {message}
    </Alert>
  ))}
</Form.Group>

<Form.Group controlId="password2">
  <Form.Label className="d-none">Confirm password</Form.Label>
  <Form.Control
    className={styles.Input}
    type="password"
    placeholder="Confirm password"
    name="password2"
    value={password2}
    onChange={handleChange}
  />
  {errors.password2 && errors.password2.map((message, idx) => (
    <Alert key={idx} variant="warning">
      {message}
    </Alert>
  ))}
</Form.Group>

<Button
  className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
  type="submit"
>
  Sign up
</Button>
{errors.non_field_errors && errors.non_field_errors.map((message, idx) => (
  <Alert key={idx} variant="warning" className="mt-3">
    {message}
  </Alert>
))}


            <Form.Group controlId="password1">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Password"
                name="password1"
                value={password1}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password1?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password2">
              <Form.Label className="d-none">Confirm password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Confirm password"
                name="password2"
                value={password2}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password2?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            <Button
              className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
              type="submit"
            >
              Sign up
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
        <Image className={`${appStyles.FillerImage}`} src={Logo} />
      </Col>
    </Row>
  );
};

export default SignUpForm;