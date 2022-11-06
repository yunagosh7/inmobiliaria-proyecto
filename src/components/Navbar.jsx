import React from 'react'
import { Routes } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
            <ul>
                <li>
                    <a href='/'>Inicio</a>
                </li>
                <li><a href='/about'>Acerca de nosotros</a> </li>
                <li>
                    <a href='/products'>Productos</a>
                </li>
            </ul>
    </nav>
  )
}

export default Navbar