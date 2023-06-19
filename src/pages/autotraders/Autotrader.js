import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/Autotrader.module.css";

// Component used for creating the Autotrader post information.
function Autotrader(props) {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    save_id,
    title,
    brand,
    description,
    mileage,
    year,
    gearbox,
    fueltype,
    price,
    image,
    updated_at,
    autotraderPage,
    setAutotraders,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  // Save Autotrader posting
  const handleSave = async () => {
    try {
      const { data } = await axiosRes.post("/saved/", { autotrader: id });
      setAutotraders((setAutotraders) => ({
        ...setAutotraders,
        results: setAutotraders.results.map((autotrader) => {
          return autotrader.id === id ? { ...autotrader, save_id: data.id } : autotrader;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

   // Delete autotrader posting from saved autotraders
  const handleUnsave = async () => {
    try {
      await axiosRes.delete(`/saved/${save_id}/`);
      setAutotraders((setAutotraders) => ({
        ...setAutotraders,
        results: setAutotraders.results.map((autotrader) => {
          return autotrader.id === id ? { ...autotrader, save_id: null } : autotrader;
        }),
      }));
    } catch (err) {
      //console.log(err);
    }
  };

  const handleEdit = () => {
    history.push(`/cars/${id}/edit`);
  };

  // Delete autotrader posting
  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/autotraders/${id}/`);
      history.goBack();
    } catch (err) {
      //console.log(err);
    }
  };

  return (
    <Card className={styles.Autotrader}>
      <Card.Body>
        <Link to={`/autotraders/${id}`}>
          <Card.Img src={image} alt={title} />
        </Link>
      </Card.Body>

      <div className={styles.PostBar}>
        {is_owner ? (
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>You can't save your own car!</Tooltip>}
          >
            <i className="far fa-heart" />
          </OverlayTrigger>
        ) : save_id ? (
          <span onClick={handleUnsave}>
            <i className={`fas fa-heart ${styles.Heart}`} />
          </span>
        ) : currentUser ? (
          <span onClick={handleSave}>
            <i className={`far fa-heart ${styles.HeartOutline}`} />
          </span>
        ) : (
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>Log in to save autotrader!</Tooltip>}
          >
            <i className="far fa-heart" />
          </OverlayTrigger>
        )}
      </div>

      <Card.Body>
        <Row className="mb-2 text-left no-gutters">
          <Col>
            <Row>
              <Col className="d-inline-block" xs={3}>
                <i className="fa-solid fa-bookmark"></i>
              </Col>
              <Col className="d-inline-block" xs={9}>
                <span className="d-block text-muted">Brand</span>
                <span className="font-weight-bold text-capitalize">
                  {brand}
                </span>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col className="d-inline-block" xs={3}>
                <i className="fa-solid fa-road"></i>
              </Col>
              <Col className="d-inline-block" xs={9}>
                <span className="d-block text-muted">Mileage</span>
                <span className="font-weight-bold">{mileage}</span>
              </Col>
            </Row>
          </Col>

          <Col>
            <Row>
              <Col className="d-inline-block" xs={3}>
                <i className="fa-solid fa-calendar-days"></i>
              </Col>
              <Col className="d-inline-block" xs={9}>
                <span className="d-block text-muted">Year</span>
                <span className="font-weight-bold">{year}</span>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mb-5 text-left no-gutters">
          <Col>
            <Row>
              <Col className="d-inline-block" xs={3}>
                <i className="fa-solid fa-gears"></i>
              </Col>
              <Col className="d-inline-block" xs={9}>
                <span className="d-block text-muted">Gearbox</span>
                <span className="font-weight-bold text-capitalize">
                  {gearbox}
                </span>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col className="d-inline-block" xs={3}>
                <i className="fa-solid fa-gas-pump"></i>
              </Col>
              <Col className="d-inline-block" xs={9}>
                <span className="d-block text-muted">Fueltype</span>
                <span className="font-weight-bold text-capitalize">
                  {fueltype}
                </span>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col className="d-inline-block" xs={3}>
                <i className="fa-solid fa-money-bill-1-wave"></i>
              </Col>
              <Col className="d-inline-block" xs={9}>
                <span className="d-block text-muted">Price</span>
                <span className="font-weight-bold">{price}€</span>
              </Col>
            </Row>
          </Col>
        </Row>

        {title && <Card.Title className="text-left">{title}</Card.Title>}
        {description && (
          <Card.Text className="text-left mb-5">{description}</Card.Text>
        )}

        <Media className="align-items-center justify-content-around">
          <span>Sold by:</span>
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>Added: {updated_at}</span>
            {is_owner && autotraderPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
    </Card>
  );
};

export default Autotrader;

