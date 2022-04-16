import React from "react";
import products from "./product.js";
import {Row, Col} from "react-bootstrap";
import ProductScreen from "./ProductScreen";
const HomeScreen = () => {
    return (
        <>
            <Row>
                {products.map((product) =>(
                   <Col key={product._id} md={2}>
                        <ProductScreen product={product}/>
                    </Col>
                ))}
            </Row>
        </>
    );
};
export default HomeScreen;