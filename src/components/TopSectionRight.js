import Col from "react-bootstrap/Col";
import bannerResponsive from "../images/banner-responsive.png"
import bannerResponsiveText from "../images/banner-responsive-text.png"
export default function TopSectionRight() {
    return <Col xl={2} lg={2} md={12} className="d-flex align-content-stretch">
        <div className="d-none d-lg-block ">
            <div className="d-flex align-content-between flex-wrap h-100 bg-light">
                <div>
                    <img className="img-fluid p-3" src={bannerResponsiveText}/>
                </div>
                <div>
                    <img className="img-fluid" src={bannerResponsive}/>
                </div>
            </div>
        </div>
    </Col>
}