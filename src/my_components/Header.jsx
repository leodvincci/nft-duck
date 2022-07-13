import duck_img from "../my_images/pixel_duck.jpg";
import veri_img from "../my_images/Twitter_Verified_Badge.svg.png"
function Header(){

    return(

        <div id={"the-header-content-box"}>


            <img id={"nft-img"} src={duck_img} alt=""/>


            <div id={"the-collective"}>

                <div id={"temp-1"}>
                    <h1 style={{fontSize:"3.5rem",display:"inline"}}>Pixelated Duck</h1>
                    <img style={{width:"5.5%", display:"inline", paddingBottom:"10px"}} src={veri_img} alt=""/>
                    <p style={{color:"#555d6c",fontWeight:"bold"}}>Owned by <span style={{color:"#1c3da2"}}>LeoDpenrose </span></p>
                </div>


                <div id={"current-price"}>
                    <h1 style={{fontSize:"24px",color:"black"}}>Current Price</h1>
                    <p style={{fontSize:"2rem",fontWeight:"bold",color:"#6100ff"}} >69<span style={{fontSize:"1rem"}}>eth</span></p>
                </div>



                <div id={"price-history"}>
                    <h1 style={{fontSize:"24px",color:"black"}} >Price History</h1>
                    <p style={{color:"#6100ff",fontWeight:"bold",fontSize:"2rem"}}>262<span style={{fontSize:"1rem"}}>eth</span></p>
                </div>

            </div>


            <div id={"my-btns"}>

                <button className={"btn"} id={"btn-1"}>Buy Now </button>
                <button className={"btn"} id={"btn-2"}>Make an Offer</button>

            </div>




        </div>

    )


}

export default Header