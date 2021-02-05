import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider'
function Header() {
    const [{basket}] = useStateValue();
    return (
        <nav className="header">
            <Link to="/">
            <img className=" header__logo "  
             src="https://res.cloudinary.com/dwbgv1uxp/image/upload/v1612124031/download_1_c2xfjn.png" alt=""/>
             </Link>

            <div className="header_search">
            <input type="text" className="header_searchInput"/>
             <SearchIcon className="header_searchIcon"/>
            </div>


            <div className="header_nav">
            <Link to="/" className="header_link">
                    <div className="header_option">
                    <span className="heaer_optionLinkeOne">Hello Qazi</span>
                    <span className="heaer_optionLinkeTwo">Sign In</span>
                    </div>
                </Link>
          
            
            <Link to="/" className="header_link">
                    <div className="header_option">
                    <span className="heaer_optionLinkeOne">return</span>
                    <span className="heaer_optionLinkeTwo">Order</span>
                    </div>
                </Link>
        
         
                <Link to="/" className="header_link">
                    <div className="header_option">
                    <span className="heaer_optionLinkeOne">Your</span>
                    <span className="heaer_optionLinkeTwo">Price</span>
                    </div>
                </Link>


                <Link to="/checkout" className="header_link">
                <div className="header_potionBasket">
                    <ShoppingBasketIcon/>
                    <span className="heaer_optionLinkeTwo header_basketCount">{basket?.length}</span>
                </div>
                </Link>

            </div>
        </nav>
    )
}

export default Header
