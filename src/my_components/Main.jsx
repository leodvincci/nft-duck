import "../my_styles/main-style.css"
import Header from "./Header";
import NftCard from "./NftCard";
function Main(){

    return(



        <div id={"the-main"}>
            <header id={"the-header"}> <Header/> </header>





            <section style={{display:"flex",justifyContent:"center",alignItems:"center"}} id={"the-form-boxes"}>

                <input style={{textAlign:"center"}} id={"search-input"} className={"btn-2"} type={"search"} placeholder={"Search tags"}/>


                <select id={"all-category-select"} className={"btn-2"} style={{margin:"1rem"}}>
                    <option value="">All category</option>
                </select>



                <select id={"all-type-select"} className={"btn-2"} style={{margin:"1rem"}}>
                    <option value="">All type</option>
                </select>



                <select id={"all-platform-select"} className={"btn-2"} style={{margin:"1rem"}}>
                    <option value="">All platform</option>
                </select>

            </section>






            <section id={"the-nft-ducks"}> <NftCard/> </section>

        </div>









    )

}

export default Main