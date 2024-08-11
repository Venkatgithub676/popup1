// Write your code here
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsInfoCircleFill} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import './index.css'

const Header = () => (
  <nav className="nav-con">
    <img
      src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
      alt="website logo"
      className="websiite-logo"
    />
    <Popup trigger={<GiHamburgerMenu className="hamburger-menu" />}>
      {close => (
        <>
          <Link>
            <AiFillHome />
            <h1>Home</h1>
          </Link>
          <Link>
            <BsInfoCircleFill />
            <h1>Home</h1>
          </Link>
        </>
      )}
    </Popup>
  </nav>
)

export default Header
