import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import user from '../Assets/user.png'
import logout_icon from '../Assets/logout_icon.png'

import toggle_light from '../Assets/toggle_light.png'
import {Link} from 'react-router-dom'
import cart_icon from '../Assets/cart_icon.png'
import nav_dropdown from '../Assets/nav_dropdown.png'

import nav_dropdown_close from '../Assets/nav_dropdown_close.png'
import toggle_dark from '../Assets/toggle_dark.png'


const Navbar = ({theme, setTheme}) => {

  const [menuIcon , setMenuIcon] = useState('nav-menu-visible');

  const toggle_mode = ()=> {
    theme == 'dark' ? setTheme('light') : setTheme('dark');
  }

  const [menu, setMenu] = React.useState(false);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
    menuIcon == 'nav-menu-visible' ? setMenuIcon('open') : setMenuIcon('nav-menu-visible');
  }


  const [sticky, setSticky] = useState(false);

{/* when scrolling color add to navbar */}
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[])

  return (
    <div className={`navbar ${sticky? 'dark-nav':''}`}>

        <div className="nav-logo">
            <img src={logo} alt="" />

        </div>

        <img className='nav-dropdown' onClick={dropdown_toggle} src={menuIcon == 'nav-menu-visible' ? nav_dropdown : nav_dropdown_close} alt=''/>

        
        <ul ref={menuRef} className="nav-menu">
            <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:'none'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("courses")}}><Link style={{textDecoration:'none'}}  to='/courses'>Courses</Link>{menu==="courses"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("about")}}><Link style={{textDecoration:'none'}}  to='/about'>About</Link>{menu==="about"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("contact us")}}><Link style={{textDecoration:'none'}}  to='/contact'>Contact</Link>{menu==="contact us"?<hr/>:<></>}</li>
            
        </ul>

        <ul ref={menuRef} className="nav-menu-mobile">
            <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:'none'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("courses")}}><Link style={{textDecoration:'none'}}  to='/courses'>Courses</Link>{menu==="courses"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("cart")}}><Link style={{textDecoration:'none'}}  to='/cart'>Cart</Link>{menu==="cart"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("about")}}><Link style={{textDecoration:'none'}}  to='/about'>About</Link>{menu==="about"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("contact us")}}><Link style={{textDecoration:'none'}}  to='/contact'>Contact</Link>{menu==="contact us"?<hr/>:<></>}</li>
            {localStorage.getItem('auth-token')
            ?<li onClick={()=>{localStorage.removeItem('auth-token');
              window.location.replace('/');setMenu("login");}}><Link style={{textDecoration:'none'}}  to='/login'>Logout</Link>{menu==="login"?<hr/>:<></>}</li>
            :<li onClick={()=>{setMenu("login")}}><Link style={{textDecoration:'none'}}  to='/login'>Login</Link>{menu==="login"?<hr/>:<></>}</li>}
            
            <li onClick={()=>{toggle_mode()}}>{theme == 'light' ? "Dark Mode" : "Light Mode"}</li>
            
        </ul>

        
        
        

        <div className="nav-login-search-mode">
            
            <img onClick={()=>{toggle_mode()}} src = {theme == 'light' ? toggle_light : toggle_dark } alt=""/>
            <Link to='/cart'><img src={cart_icon} alt=""/></Link>
            {localStorage.getItem('auth-token')
            ?<img onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}} src={logout_icon} alt=''/>
            :<Link to='login'><img src={user} alt=""/></Link>}
        </div>
        
        

    </div>
  )
}
export default Navbar