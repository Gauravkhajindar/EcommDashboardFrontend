
import { Navbar, Nav, Container,NavDropdown } from 'react-bootstrap'
import { Link,useNavigate } from 'react-router-dom'
import react,{useEffect} from 'react';


function Header() {

    const user=JSON.parse(localStorage.getItem("user-Info"))
    const navigate=useNavigate() 
    function logout(){

        localStorage.clear()
        navigate("/Register")
    }
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto nav_bar_wrapper">
                        {
                            localStorage.getItem("user-Info") ?
                                <>
                                    <Link to="/Add">Add Product</Link>
                                    <Link to="/Update">Update Product</Link>
                                </> :
                                <>
                                    <Link to="/Login">Login</Link>
                                    <Link to="/Register">Register</Link>
                                </>
                        }
                       
                    </Nav>
                    localStorage.getItem("user-Info") ?
                    <Nav>
                     
                        <NavDropdown title={user && user.name}>
                            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                            <NavDropdown.Item>Profile</NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                    :null
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;