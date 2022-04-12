import abc_product from '../images/abc product.svg';
import hrclogo from '../images/hrclogo.svg';

export default function Header() {
    return(
        <div>
            {/* <div style={{float: "left"}}>
                <img src={abc_product}></img>
            </div>
            <div style={{marginLeft: "600px"}}>
                <img  src={hrclogo}></img>
            </div> */}
            <img style={{marginLeft: "30px",marginTop: "15px",marginBottom:"20px", height: "40px"}} src={abc_product}></img>
            <img style={{marginLeft: "390px",marginTop: "15px",marginBottom:"20px", height: "40px"}} src={hrclogo}></img>
        </div>
    );
}