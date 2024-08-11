// Write your code here
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import './index.css'

const Header = () => {
  const styles = {
    backgroundColor: '#ffffff',
    width: '100%',
  }
  return (
    <nav className="nav-con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="websiite-logo"
      />
      <Popup
        modal
        overlayStyle={styles}
        trigger={
          <button type="button" className="ham-btn">
            <GiHamburgerMenu className="hamburger-menu" alt="ham-btn" />
          </button>
        }
      >
        {close => (
          <>
            <div className="close-btn-con">
              <button type="button" className="close-con">
                <IoMdClose
                  alt="close-btn"
                  onClick={() => close()}
                  className="icons"
                />
              </button>
            </div>
            <div className="header-about-home-con">
              <Link to="/" className="link-con">
                <AiFillHome className="icons" />
                <h1 className="name">Home</h1>
              </Link>
              <Link to="/about" className="link-con">
                <BsInfoCircleFill className="icons" />
                <h1 className="name">About</h1>
              </Link>
            </div>
          </>
        )}
      </Popup>
    </nav>
  )
}

export default Header
