import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/Autotrader.module.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { axiosRes } from "../../api/axiosDefaults";

// Component used to create each Autotrader on the landing page
// Is used by the AutotradersList component to genereate the complete list of Autotraders.
const AutotraderList = (props) => {
  const {
    id,
    owner,
    profile_id,
    save_id,
    title,
    mileage,
    year,
    gearbox,
    fueltype,
    price,
    image,
    updated_at,
    setAutotraders,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

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
      //console.log(err);
    }
  };

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
  return (
    <Card className={styles.Autotrader}>
      <Card.Body>
        <Row>
          <Col xs={5}>
            <Link to={`/autotraders/${id}`}>
              <Card.Img src={image} alt={title} />
            </Link>
          </Col>

          <Col xs={7}>
            <Row className="text-right">
              <Col className={styles.PostBar}>
                {is_owner ? (
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>You can't save your own autotrader!</Tooltip>}
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

                <span>{updated_at}</span>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to={`/autotraders/${id}`}>
                  {title && (
                    <Card.Title className="text-left">{title}</Card.Title>
                  )}
                </Link>
              </Col>
            </Row>

            <Row>
              <Col className="d-flex justify-content-between">
                <div>
                  <i className="fa-solid fa-calendar-days"></i>
                  {year}
                </div>
                <div>
                  <i className="fa-solid fa-road"></i>
                  {mileage}
                </div>
                <div className="text-capitalize">
                  <i className="fa-solid fa-gears"></i>
                  {gearbox}
                </div>
                <div className="text-capitalize">
                  <i className="fa-solid fa-gas-pump"></i>
                  {fueltype}
                </div>
              </Col>
            </Row>

            <Row>
              <Col className="d-flex justify-content-between mt-1">
                <div className="font-weight-bold">{price}€</div>
                <div>
                  <span>Seller:&nbsp;</span>
                  <Link to={`/profiles/${profile_id}`}>{owner}</Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default AutotraderList;