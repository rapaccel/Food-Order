import React from 'react'
import logoImg from '../assets/logo.jpg'
import Button from './UI/Button'

export default function Header() {
  return (
    <header id="main-header">
        <div className="" id='title'>
            <img src={logoImg} alt="A Restaurant" />
            <h1>ReactFood</h1>
        </div>
        <nav>
            <Button textOnly>Cart</Button>
        </nav>
    </header>
  )
}
