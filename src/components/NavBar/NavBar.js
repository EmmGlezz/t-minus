import React, {useState, useRef, useEffect} from 'react'
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    const [navBackground, setNavBackground] = useState(false)
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
    <div className=''>
        <Navbar variant='dark' fixed='top' className={navBackground ? 'navbar-scrolled' : 'navbar'}>
            <Container>
                <Navbar.Brand href="/">
                    <h1 className='logo-title'>T-MINUS</h1>
                </Navbar.Brand>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                    <Nav.Link href="/">HOME</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="/">ABOUT</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link>
                        <a className='navbar-button' href='/'>
                            Launches
                        </a>
                    </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
          </Navbar>
    </div>
  )
}

export default NavBar