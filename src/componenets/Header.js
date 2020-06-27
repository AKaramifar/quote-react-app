import React, {useState, useEffect} from 'react';
import "./Header.css";

const Header = () => {
    
    return(
        <div className="Div_Header_Style">
            <div className="Div_Quote_Style"></div>
            <div className="Div_Search_Style">
                <input type="text" className="Input_Search_Style"></input>
                <p className="P_Search_Style">Search</p>
            </div>
        </div>
    )
}

export default Header;