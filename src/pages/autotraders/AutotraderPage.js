import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";

function AutotraderPage() {
  const { id } = useParams();
  const [autotrader, setAutotrader] = useState({ results: [] });
  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: autotrader}] = await Promise.all([
            axiosReq.get(`/autotraders/${id}`),
          ]);
          setAutotrader({ results: [autotrader]});
        } catch (err) {
        console.log(err);
      }
      };
      
      handleMount();
    }, [id]);
  
   return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <Autotrader {...autotrader.results[0]} setAutotraders={setAutotrader} autotraderPage />
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default AutotraderPage;