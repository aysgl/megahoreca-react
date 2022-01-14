import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React from "react";

export default function FooterTopCategory(props) {
    const { category } = props;
    return <ul className="list-unstyled text-black-50">
        <li className="font-weight-bold">{category.title}</li>
        {category.subCategories.map(subCategory => <li key={subCategory}>{subCategory}</li>)}
    </ul>
}