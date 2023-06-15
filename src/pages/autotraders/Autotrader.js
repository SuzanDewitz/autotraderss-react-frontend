import React from "react";
import styles from "../../styles/Autotrader.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from 'react-avatar';


const Autotrader = (props) => {
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
    AutotraderPage,
    setAutotraders,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <Card className={styles.Autotrader}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
        </Media>
      </Card.Body>
    </Card>
  );
};

export default Autotrader;
