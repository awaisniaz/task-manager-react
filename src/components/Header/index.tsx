import React from 'react'
import './styles.css'
import { SearchOutlined } from '@ant-design/icons';
function Header() {
    return (
        <div className="main-container" >
            <div className="left">
                <img src="../../assests/images/logo2.png" alt="logo"></img>
            </div>
            <div className="middle"><span>Systems Technologies</span></div>
            <div className="right">
                <div className='search-bar'>
                    <input placeholder='Search Here'></input>
                    <SearchOutlined />
                </div>
            </div>
        </div>
    )
}

export default Header
