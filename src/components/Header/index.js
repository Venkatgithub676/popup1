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
      <Link to="/" className="logo-link-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </Link>
      <Popup
        modal
        overlayStyle={styles}
        className="popup-content"
        trigger={
          <button
            data-testid="hamburgerIconButton"
            type="button"
            className="ham-btn"
          >
            <GiHamburgerMenu className="hamburger-menu" alt="ham-btn" />
          </button>
        }
      >
        {close => (
          <>
            <button
              type="button"
              data-testid="closeButton"
              className="close-con"
              onClick={() => close()}
            >
              <IoMdClose alt="close-btn" className="icons" />
            </button>

            <ul className="header-about-home-con">
              <li>
                <Link to="/" className="link-con">
                  <AiFillHome className="icons" />
                  <h1 className="name">Home</h1>
                </Link>
              </li>
              <li>
                <Link to="/about" className="link-con">
                  <BsInfoCircleFill className="icons" />
                  <h1 className="name">About</h1>
                </Link>
              </li>
            </ul>
          </>
        )}
      </Popup>
    </nav>
  )
}

export default Header
