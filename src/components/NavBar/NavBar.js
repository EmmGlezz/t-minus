import React, {useState, useRef, useEffect} from 'react'
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoMdMenu, IoMdClose } from 'react-icons/io'

const NavBar = () => {
    const [navBackground, setNavBackground] = useState(false)
    const [navbar, setNavbar] = useState(false)
    const navRef = useRef()
    
    navRef.current = navBackground

    useEffect(() => {
      const handleScroll = () => {
        const show = window.scrollY > 50
        if (navRef.current !== show) {
          setNavBackground(show)
        }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
        document.removeEventListener('scroll', handleScroll)
      }
    }, [])

  return (
        <header className={`w-100 mx-auto px-3 fixed-top ${navBackground ? 'navbar-scrolled' : 'navbar-config'}`}>
            <div className='justify-between d-md-flex align-items-md-center'>
                <div>
                  <div className='d-flex align-items-center justify-content-between py-2'>
                    <Navbar.Brand className='d-md-block' href="/">
                        <h1 className='logo-title'>T-MINUS</h1>
                    </Navbar.Brand>
                    <div className='d-md-none'>
                      <button onClick={() => setNavbar(!navbar)}>
                          {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30}/>}
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className={`d-flex align-self-center pb-3 mt-2 pb-md-0 mt-md-0 d-md-block 
                  ${navbar ? 'd-block' : 'd-none'}`}>
                    <div className="align-items-center justify-content-center d-md-flex " activeKey="/home">
                        <Nav.Item className='d-block d-md-inline-block py-2 px-md-2 py-md-0'>
                        <Nav.Link href="/">HOME</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='d-block d-md-inline-block py-2 px-md-2 py-md-0'>
                        <Nav.Link href="/">ABOUT</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='d-block d-md-inline-block py-2 px-md-2 py-md-0'>
                        <Nav.Link>
                            <a className='navbar-button' href='/'>
                                Launches
                            </a>
                        </Nav.Link>
                        </Nav.Item>
                    </div>
                  </div>
                </div>
            </div>
          </header>
  )
}

export default NavBar