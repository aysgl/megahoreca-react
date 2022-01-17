import product10 from "../images/product-10.png"

export default function SlickCardSmall() {
    return <div>
        <a className="item">
            <div style={{ height: "160px" }} className="p-3 pt-4 overlay" href="#">
                <img className="img-responsive" alt="Previously watched product" src={product10} />
            </div>
            <div className="p-3 text-left">
                <small className="font-weight-bold mb-0">Apple iPad(2018) 32GB</small>
                <h5 className="font-weight-bold mb-0"><span>€499,</span><span className="h6">99</span></h5>
            </div>
        </a>
    </div>
}