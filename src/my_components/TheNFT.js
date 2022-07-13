import "../my_styles/nft-style.css"

function TheNFT(props){

    return(

        <div id={"card"}>

            <img src={props.duckImg} alt=""/>
                <p>{props.name}</p>
                <p style={{fontSize:"1.6rem", fontWeight:"500",color:"#6101fd"}}>{props.price}</p>

        </div>

    )

}
export default TheNFT