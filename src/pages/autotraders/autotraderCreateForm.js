import { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Upload from "../../assets/upload.png";

import styles from "../../styles/AutotraderCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

function AutotraderCreateForm() {
  const [errors, setErrors] = useState({});

  const [autotraderData, setAutotraderData] = useState({
    title: "",
    brand: "bmw",
    description: "",
    mileage: "",
    year: "",
    gearbox: "automatic",
    fueltype: "petrol",
    price: "",
    image: "",
  });
  const handleChange = (event) => {
    setCarData({
      ...autotraderData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
        URL.revokeObjectURL(image);
      setAutotraderData({
        ...autotraderData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Brand</Form.Label>
        <Form.Control
          as="select"
          type="text"
          name="brand"
          value={brand}
          onChange={handleChange}
        />
      </Form.Group>

      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => {}}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        create
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
            {image ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                      htmlFor="image-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (   
              <Form.Label
                className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                htmlFor="image-upload"
              >
                <Asset src={Upload} message="Click or tap to upload an image" />
              </Form.Label>
                )}
              <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default AutotraderCreateForm;
