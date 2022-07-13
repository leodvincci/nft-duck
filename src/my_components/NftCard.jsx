import TheNFT from "./TheNFT";
import p1 from "../my_images/p1.png"

import p4 from "../my_images/p4.png"
import p5 from "../my_images/p5.png"
import p6 from "../my_images/p6.png"
function NftCard(){

    return(

        <div style={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"}}>

            <TheNFT
            duckImg = {p1}
            name = "Poop Duck"
            price = "228 ETH"
            />

            <TheNFT
            duckImg = {p4}
            name = "Space Duck"
            price = "259 ETH"

            />

            <TheNFT
            duckImg = {p5}
            name = "Digi Duck"
            price = "273 ETH"

            />

            <TheNFT
            duckImg = {p6}
            name = "Bat Duck"
            price = "256 ETH"

            />

        </div>

    )


}

export default NftCard