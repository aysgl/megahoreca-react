import Container from "react-bootstrap/Container";
import banner1 from "../images/banner-1.png"
import banner2 from "../images/banner-2.png"
import banner3 from "../images/banner-3.png"
export default function HeroSection() {
    return <Container className="py-4 px-0">
        <ul className="list-unstyled d-flex align-items-stretch">
            <li className="list-inline-item">
                <img className="img-fluid shadow" src={banner1}/>
            </li>
            <li className="list-inline-item">
                <img className="img-fluid shadow" src={banner2}/>
            </li>
            <li className="list-inline-item">
                <img className="img-fluid shadow d-none d-sm-none d-md-none d-lg-block" src={banner3}/>
            </li>
        </ul>
    </Container>
}