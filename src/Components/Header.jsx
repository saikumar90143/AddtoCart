import React from 'react'
import {FaShoppingBag} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
const Header = () => {
   const {cart}=useSelector((state)=>state.product)
  return (
    <>
     <Wrapper>
        <div className='header'>
             <div className='logo'>
                <Link to='/'><h3>Make Cart</h3></Link>
             </div>
             <div className='cart-icon'>
             <NavLink to='/cart'>
                <FaShoppingBag className='cart'/>
               </NavLink>  
                <span>{cart.length}</span>
             </div>
        </div>
        </Wrapper> 
    </>
  )
}

const Wrapper=styled.section`
margin-bottom: 1rem;
   .header{
    box-shadow: 0 0 4px gray;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* logo */
    .logo{
      h3{
         background:linear-gradient(to right,blue,skyblue,limegreen,red);
       -webkit-text-fill-color: transparent;
      background-clip: text;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-size: 1.4rem;
      cursor: pointer;
      }
    }

    /* cart icon */
.cart-icon{
   position: relative;
   .cart{
     
      font-size: 1.5rem;
   }
   span{
      border:1px solid  #746e6e;
      background-color: #dbd5d5;
      border-radius:50%;
      padding: 0 3px;
      font-size: 0.9rem;
      position: absolute;
      top: -5px;
      right: -2px;
   }
}
   }
`

export default Header
