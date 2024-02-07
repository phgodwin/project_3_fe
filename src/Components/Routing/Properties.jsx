import AddNewProperty from "../AddNewProperty";

// no axios
function Properties() {
    return ( 
    <div style={{marginTop: "50px", textAlign: "center"}}>
    
    <h1 style={{ color: "white", fontFamily: "monospace", textTransform: "capitalize", fontSize: "65px" }}>Properties Page</h1>
        <AddNewProperty/>
    </div>
    );
}

export default Properties;