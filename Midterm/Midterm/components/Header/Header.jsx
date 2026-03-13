import './Header.css';

function Header() {
   
    return (
        <div className='header-container'>
            <div className='header-left'>
                <div className='logo-container'>
                    <h1>Anonime</h1>
                </div>

                <div className='navigation-container'>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>List anime</a></li>
                    </ul>
                </div>
            </div>

            <div className='header-right'>
                <div className='search-container'>
                    <input type='text' placeholder='Search anime or movie' />
                </div>
            </div>
        </div>
    )
}

export default Header;