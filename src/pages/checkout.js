import React, { useContext } from "react";
import Link from "next/link";
import { Row, Col, Container, Button } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import { Select } from "../components/Core";
import CartContext from "../context/CartContext";

import imgCC from "../assets/image/inner/credit-cards.png";
import imgV from "../assets/image/inner/visa-image.png";
import imgP from "../assets/image/inner/paypal-brand.png";

const defaultOptions = [
  { value: "usa", label: "USA" },
  { value: "sn", label: "Singapore" },
  { value: "uae", label: "UAE" },
  { value: "uk", label: "UK" },
  { value: "bn", label: "Bangladesh" },
];

const CartItem = ({ qty, price, img, title, handleRemove }) => {
  return (
    <>
      <li className="mb-5">
        <div className="d-flex position-relative p-6 border-gray-3 rounded-10 pr-12">
          <div className="square-50 mr-6">
            <img
              src={img}
              alt=""
              css={`
                width: 50px;
                height: 50px;
              `}
            />
          </div>
          <div>
            <h3
              className="gr-text-9 mb-0 text-blackish-blue"
              css={`
                width: 155px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
              `}
            >
              {title}
            </h3>
            <div className="bottom-texts d-flex justify-content-between">
              <span className="inline-block gr-text-12 font-weight-bold text-uppercase text-blackish-blue">
                {qty} items
              </span>
              <span className="inline-block gr-text-12 font-weight-bold text-bold text-blackish-blue">
                ${qty * price}
              </span>
            </div>
          </div>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleRemove();
            }}
            className="cross-btn gr-abs-cr mr-7 text-blackish-blue gr-text-8"
          >
            <i className="icon icon-simple-remove"></i>
          </a>
        </div>
      </li>
    </>
  );
};

const Checkout = () => {
  const gCart = useContext(CartContext);
  return (
    <>
      <PageWrapper
        headerConfig={{
          align: "right",
          button: "account", // cta, account, null
        }}
      >
        <div className="inner-banner pt-29 pb-md-13 bg-default-2">
          <Container>
            <Row className="justify-content-center pt-5">
              <Col xl="8" lg="9">
                <div className="px-md-15 text-center">
                  <h2 className="title gr-text-2 mb-9">Checkout</h2>
                  <p className="gr-text-8 mb-13">
                    {gCart.products.length} Items on your cart
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="bg-default-2 pb-17 pb-md-29 ">
          <Container>
            <Row className="justify-content-md-between pt-9">
              <Col lg="7" xl="7">
                <div className="login-form bg-white border-gray-3 px-md-12 px-7 pt-12 pb-13 shadow-1 rounded-10 mb-9">
                  <h3 className="gr-text-7 font-weight-bold mb-8 text-blackish-blue">
                    Billing Details
                  </h3>
                  <form action="./">
                    <Row>
                      <Col xs="12">
                        <div className="form-group mb-7">
                          <label
                            htmlFor="name"
                            className="gr-text-11 font-weight-bold text-blackish-blue"
                          >
                            First &amp; Last Name
                          </label>
                          <input
                            className="form-control gr-text-11 border-gray-3 px-4"
                            type="text"
                            id="name"
                            placeholder="i.e. John Doe"
                          />
                        </div>
                      </Col>

                      <Col xs="12">
                        <div className="form-group mb-7">
                          <label
                            htmlFor="email"
                            className="gr-text-11 font-weight-bold text-blackish-blue"
                          >
                            Email Address
                          </label>
                          <input
                            className="form-control gr-text-11 border"
                            type="text"
                            id="email"
                            placeholder="i.e. john@mail.com"
                          />
                        </div>
                      </Col>

                      <Col xs="12" className="mb-9">
                        <div className="form-group">
                          <Select
                            options={defaultOptions}
                            className=" text-blackish-blue w-100 border rounded-lg"
                            accentColor="primary"
                            border={false}
                            bg="transparent"
                          />
                        </div>
                      </Col>

                      <Col md="6">
                        <div className="form-group mb-7">
                          <label
                            htmlFor="city"
                            className="gr-text-11 font-weight-bold text-blackish-blue"
                          >
                            City/State
                          </label>
                          <input
                            className="form-control gr-text-11 border"
                            type="text"
                            id="city"
                            placeholder="City"
                          />
                        </div>
                      </Col>

                      <Col md="6" className="pb-9">
                        <div className="form-group mb-7">
                          <label
                            htmlFor="zip"
                            className="gr-text-11 font-weight-bold text-blackish-blue"
                          >
                            Zip/Postal Code
                          </label>
                          <input
                            className="form-control gr-text-11 border"
                            type="text"
                            id="zip"
                            placeholder="Zip Code"
                          />
                        </div>
                      </Col>

                      <Col xs="12" className="mb-6">
                        <h3 className="gr-text-7 font-weight-bold mb-8 text-blackish-blue">
                          Payment Method
                        </h3>
                        <div className="form-group mb-7 gr-radio-input d-flex align-items-center w-100 border-gray-3 rounded-5 pt-5 pb-5 px-6">
                          <input
                            type="radio"
                            name="payment"
                            id="credit-card"
                            className="invisible position-absolute pointer-none"
                          />
                          <label
                            htmlFor="credit-card"
                            className="d-flex align-items-center mb-0 w-100"
                          >
                            <span className="round-indicator mr-3"></span>
                            <span className="line-height-reset font-weight-bold gr-text-11 text-blackish-blue">
                              Credit Cards{" "}
                            </span>
                            <img
                              src={imgCC}
                              alt=""
                              className="ml-auto d-none d-md-block"
                            />
                          </label>
                        </div>
                      </Col>

                      <Col xs="12" className="mb-7">
                        <div className="form-group mb-0">
                          <label
                            htmlFor="card"
                            className="gr-text-11 font-weight-bold text-blackish-blue"
                          >
                            Card Number
                          </label>
                          <div className="position-relative">
                            <input
                              className="form-control gr-text-11 border-gray-3 pr-15"
                              type="number"
                              id="card"
                              placeholder="11154 5665 6464 565"
                            />
                            <div className="gr-abs-tr h-100 d-flex align-items-center mr-5">
                              <img src={imgV} alt="" />
                            </div>
                          </div>
                        </div>
                      </Col>

                      <Col md="6" className="mb-7">
                        <div className="form-group mb-0">
                          <label
                            htmlFor="date"
                            className="gr-text-11 font-weight-bold text-blackish-blue"
                          >
                            Expire Date{" "}
                          </label>
                          <input
                            className="form-control gr-text-11 border"
                            type="text"
                            id="date"
                            placeholder="Month/Year"
                          />
                        </div>
                      </Col>

                      <Col md="6" className="pb-9">
                        <div className="form-group mb-0">
                          <label
                            htmlFor="code"
                            className="gr-text-11 font-weight-bold text-blackish-blue"
                          >
                            Security Code
                          </label>
                          <div className="position-relative">
                            <input
                              className="form-control gr-text-11 border-gray-3 pr-9"
                              type="text"
                              id="code"
                              placeholder="PIN"
                            />
                            <i className="far fa-question-circle gr-abs-cr mr-6 "></i>
                          </div>
                        </div>
                      </Col>

                      <Col xs="12">
                        <div className="form-group mb-8 gr-radio-input d-flex align-items-center w-100 border-gray-3 rounded-5 pt-5 pb-5 px-6">
                          <input
                            type="radio"
                            name="payment"
                            id="paypal"
                            className="invisible position-absolute pointer-none"
                          />
                          <label
                            htmlFor="paypal"
                            className="d-flex align-items-center mb-0 w-100"
                          >
                            <span className="round-indicator mr-3"></span>
                            <span className="line-height-reset font-weight-bold gr-text-11  text-blackish-blue">
                              Paypal
                            </span>
                            <img src={imgP} alt="" className="ml-auto" />
                          </label>
                        </div>
                      </Col>

                      <Col xs="12">
                        <div className="button-block mt-3 ">
                          <p className="gr-text-11 mb-7 text-blackish-blue">
                            By clicking the button you agree the{" "}
                            <Link href="/terms-conditions">
                              <a>Terms and Conditions</a>
                            </Link>
                          </p>
                          <Button className="form-btn w-100">
                            Proceed to checkout
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </form>
                </div>
              </Col>
              <Col sm="7" md="7" lg="5">
                <div className="bg-white px-7 pt-8 pb-9 rounded-10 ml-lg-8  ml-xl-19 mt-9 mt-md-0">
                  <h3 className="gr-text-12 font-weight-bold text-blackish-blue text-uppercase pb-7">
                    Order Details
                  </h3>
                  <ul className="list-unstyled">
                    <li className="d-flex justify-content-between mb-5">
                      <span className="d-block gr-text-9 text-blackish-blue">
                        Total Items
                      </span>
                      <div className="d-flex gr-text-9">
                        <span className="d-inline-flex  pl-7 pt-5 position-relative mr-2 ">
                          <span className="border-0 p-0 w-100 h-100 gr-abs-tl gr-text-9 gr-text-opacity focus-reset pointer-none text-blackish-blue-opacity">
                            {gCart.products.length <= 9
                              ? `0${gCart.products.length}`
                              : gCart.products.length}
                          </span>
                        </span>
                        items
                      </div>
                    </li>

                    {gCart.products.map((product, index) => (
                      <CartItem
                        key={index}
                        qty={product.qty}
                        price={product.price}
                        title={product.title}
                        img={product.img}
                        handleRemove={() => gCart.removeProduct(product.id)}
                      />
                    ))}

                    <li className="d-flex justify-content-between mb-9">
                      <span className="d-block gr-text-9 text-blackish-blue">
                        Delivery Fee
                      </span>
                      <span className="d-flex gr-text-9 font-weight-mid text-green-shamrock">
                        FREE
                      </span>
                    </li>
                    <li className="d-flex justify-content-between">
                      <span className="d-block gr-text-7 font-weight-bold text-blackish-blue">
                        Total Price
                      </span>
                      <span className="d-block gr-text-7 font-weight-bold text-blackish-blue">
                        $
                        {gCart.products.reduce(
                          (total, curr) => total + curr.qty * curr.price,
                          0
                        )}
                      </span>
                    </li>
                  </ul>
                  <div className="px-1 pt-2">
                    <Button className="gr-text-9 w-100">
                      Proceed to checkout
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};
export default Checkout;
