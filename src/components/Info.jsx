import React from 'react';
import "../styles/Info.css";

const Info = () => {
  return (
    <div className='info'>
        <h1>Info de la página</h1>
        <ul className='list'>
            <li>Creada con create-react-app</li>
            <li>Utiliza Bootstrap5</li>
            <li>Api: <a rel='noreferrer' target='_blank' href='https://fakestoreapi.com/products'>https://fakestoreapi.com/products</a></li>
        </ul>
    </div>
  )
}

export default Info;