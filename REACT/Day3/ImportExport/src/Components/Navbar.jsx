// let name = "Qwarty"

// //Named export 
// export let age = 32
// export let  city = "Delhi"

// export default name
// //export default age



// function Navbar()
// {
//     return <nav>Navbar</nav>

// }

function Navbar() {
    return(
        <nav style={{display : "flex", backgroundColor : "brown", color : "white", justifyContent : "space-between", alignItems : "center", padding : "0  20px",height : "8vh", boxSizing : "border-box" }}>
            <h3 style={{margin : "0", fontSize : "28px"}}>Logo</h3>

            <div style={{display : "flex", gap : "30px", alignItems : "center"}}>

                <a style={{textDecoration : "none", color : "white" , fontSize : "18px"}} href="">A</a>
                <a style={{textDecoration : "none", color : "white" , fontSize : "18px"}} href="">B</a>
                <a style={{textDecoration : "none", color : "white" , fontSize : "18px"}} href="">C</a>

            </div>

        </nav>
    )
}

export default Navbar