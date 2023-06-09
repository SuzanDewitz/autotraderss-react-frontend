import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";
import styles from "../../styles/AutotraderCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useEffect, useRef, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

// Component used for editing an existing autotrader post.
// Prepopulates the existing data into the form.
function AutotraderEditForm() {
  const [errors, setErrors] = useState({});

  const [autotraderData, setAutotraderData] = useState({
    title: "",
    brand: "",
    description: "",
    mileage: "",
    year: "",
    gearbox: "",
    fueltype: "",
    price: "",
    image: "",
  });

  const {
    title,
    brand,
    description,
    mileage,
    year,
    gearbox,
    fueltype,
    price,
    image,
  } = autotraderData;

  const imageInput = useRef(null);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/autotraders/${id}/`);
        const {
          title,
          brand,
          description,
          mileage,
          year,
          gearbox,
          fueltype,
          price,
          image,
          is_owner,
        } = data;

        is_owner
          ? setAutotraderData({
              title,
              brand,
              description,
              mileage,
              year,
              gearbox,
              fueltype,
              price,
              image,
            })
          : history.push("/");
      } catch (err) {
      //console.log(err);
    }
    };

    handleMount();
  }, [history, id]);

  const handleChange = (event) => {
    setAutotraderData({
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("brand", brand);
    formData.append("description", description);
    formData.append("mileage", mileage);
    formData.append("year", year);
    formData.append("gearbox", gearbox);
    formData.append("fueltype", fueltype);
    formData.append("price", price);
    if (imageInput?.current?.files[0]) {
      formData.append("image", imageInput.current.files[0]);
    }
    try {
      await axiosReq.put(`/autotraders/${id}/`, formData);
      history.push(`/autotraders/${id}`);
    } catch (err) {
      //console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
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
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Brand</Form.Label>
        <Form.Control
          as="select"
          type="text"
          name="brand"
          value={brand}
          onChange={handleChange}
        >
          <option value="bmw">Bmw</option>
          <option value="mercedes-benz">Mercedes-benz</option>
          <option value="audi">Audi</option>
          <option value="volkswagen">Volkswagen</option>
          <option value="volvo">Volvo</option>
          <option value="ford">Ford</option>
          <option value="toyota">Toyota</option>
          <option value="honda">Honda</option>
          <option value="nissan">Nissan</option>
          <option value="mazda">Mazda</option>
          <option value="tesla">Tesla</option>
          <option value="renault">Renault</option>
          <option value="peugeot">Peugeot</option>
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="description"
          value={description}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.description?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Mileage</Form.Label>
        <Form.Control
          type="number"
          min="0"
          step="100.00"
          name="mileage"
          value={mileage}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.mileage?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label>Year</Form.Label>
        <Form.Control
          type="number"
          min="0"
          step="1.00"
          name="year"
          value={year}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.year?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label>Gearbox</Form.Label>
        <Form.Control
          as="select"
          type="text"
          name="gearbox"
          value={gearbox}
          onChange={handleChange}
        >
          <option value="automatic">Automatic</option>
          <option value="manual">Manual</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Fueltype</Form.Label>
        <Form.Control
          as="select"
          type="text"
          name="fueltype"
          value={fueltype}
          onChange={handleChange}
        >
          <option value="petrol">Petrol</option>
          <option value="diesel">Diesel</option>
          <option value="electric">Electric</option>
          <option value="hybrid">Hybrid</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          min="0"
          step="1.00"
          name="price"
          value={price}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.price?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => {}}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        save
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

              <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

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

export default AutotraderEditForm;