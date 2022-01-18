import Container from "react-bootstrap/Container";
import banner1 from "../../images/banner-1.png"
import banner2 from "../../images/banner-2.png"
import banner3 from "../../images/banner-3.png"
import Seperate from "../stuff/Seperate";

export default function Advertisement() {
    return (
        <Container className="py-4">
            <ul className="list-unstyled d-flex align-items-stretch">
                <li className="list-inline-item">
                    <img className="img-fluid shadow rounded" src={banner1} />
                </li>
                <li className="list-inline-item">
                    <img className="img-fluid shadow rounded" src={banner2} />
                </li>
                <li className="list-inline-item">
                    <img className="img-fluid shadow rounded d-none d-sm-none d-md-none d-lg-block" src={banner3} />
                </li>
            </ul>
            <Seperate />
        </Container>
    )
}