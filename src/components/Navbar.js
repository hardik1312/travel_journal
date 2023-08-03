import world from '../images/World.png';

function Navbar(){
    return(
        <div className='navbar'>
            <img src={world} alt="world" />
            <h6>My Travel Journal</h6>
        </div>
    )
}

export default Navbar;