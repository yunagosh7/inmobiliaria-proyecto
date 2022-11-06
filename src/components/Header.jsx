import '../styles/Header.css';


const Header = () => {
  return (
    <header>
        <h1>Empresa</h1>
        <div className='links-container'>
        <ul>
            <li>
                <a className='link' rel='noreferrer' target='_blank' href="https://instagram.com">Instagram</a>
            </li>
            <li>
                <a className='link' rel='noreferrer' target='_blank' href="https://facebook.com">Facebook</a>
            </li>
            <li>
                <a className='link' rel='noreferrer' target='_blank' href='https://twitter.com'>Twitter</a>
            </li>
        </ul>
        </div>
    </header>
  )
}

export default Header