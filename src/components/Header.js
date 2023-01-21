import React from 'react'
import {MdHome,MdTrendingUp,MdLiveTv,MdCollectionsBookmark,MdSearch,MdPerson} from 'react-icons/md'
import './css/Header.css'

 const Header = () => {
  return (
    <div className='header'>
        <div className="header__icons">
            <div className="header__icon">
                <MdHome/>
                <p>Home</p>
            </div>
            <div className="header__icon">
                <MdTrendingUp/>
                <p>Trending</p>
            </div>
            <div className="header__icon">
                <MdLiveTv/>
                <p>Verified</p>
            </div>
            <div className="header__icon">
                <MdCollectionsBookmark/>
                <p>Collection</p>
            </div>
            <div className="header__icon">
            <MdSearch/>
                <p>Search</p>
            </div>
            <div className="header__icon">
                <MdPerson/>
                <p>Account</p>
            </div>
        </div>
        <img src={'https://hulu-matchmaker.s3.us-west-2.amazonaws.com/2020-08/Hulu_Logo-01_newgreen.png'} alt="hulu" />
    </div>
  )
}

export default Header