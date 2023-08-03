import world from '../images/World.png';

function Navbar(){
    return(
        <div className='navbar'>
            <img src={world} alt="world" />
            <p className='white'>My Travel Journal</p>
        </div>
    )
}

export default Navbar;