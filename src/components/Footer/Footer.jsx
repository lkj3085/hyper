import React from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import "./footer.css";

const MY__ACCOUNT = [
  {
    display: "Author Profile",
    url: "/seller-profile",
  },
  {
    display: "Create Item",
    url: "/create",
  },
  {
    display: "Collection",
    url: "/market",
  },
  {
    display: "Edit Profile",
    url: "/edit-profile",
  },
];

const RESOURCES = [
  {
    display: "Help Center",
    url: "#",
  },
  {
    display: "Partner",
    url: "#",
  },
  {
    display: "Community",
    url: "#",
  },
  {
    display: "Activity",
    url: "#",
  },
];

const COMPANY = [
  {
    display: "About",
    url: "#",
  },
  {
    display: "Career",
    url: "#",
  },
  {
    display: "Ranking",
    url: "#",
  },
  {
    display: "Contact Us",
    url: "/contact",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" sm="6">
            <div className="logo">
              <h2 className="d-flex gap-2 align-items-center">
                <span>
                  <i className="ri-fire-fill"></i>
                </span>
                HYPER
              </h2>
              <p>All &#8226; Deep Solution</p>
            </div>
          </Col>
          <Col lg="2" md="3" sm="6">
            <h5>My Account</h5>
            <ListGroup className="list__group">
              {MY__ACCOUNT.map((item, index) => (
                <ListGroupItem key={index} className="list__item">
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="2" md="3" sm="6">
            <h5>Resource</h5>
            <ListGroup className="list__group">
              {RESOURCES.map((item, index) => (
                <ListGroupItem key={index} className="list__item">
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="2" md="3" sm="6">
            <h5>Company</h5>
            <ListGroup className="list__group">
              {COMPANY.map((item, index) => (
                <ListGroupItem key={index} className="list__item">
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" sm="6">
            <h5>News & Letter</h5>
            <input type="text" className="newsletter" placeholder="Email" />
            <div className="social__links d-flex gap-3 align-items-center">
              <span>
                <Link to="#">
                  <i className="ri-facebook-line"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i className="ri-instagram-line"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i className="ri-twitter-line"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i className="ri-telegram-line"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i className="ri-discord-line"></i>
                </Link>
              </span>
            </div>
          </Col>

          <Col lg="12" className="'mt-4 text-center">
            <p className="copyright">
              CopyRights 2022 &#8226; Develop By HYOER STUDIO
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
