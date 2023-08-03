import Location from '../images/Location.png'

function Main(props){
    return(
        <div className='card-container'>
            <div className='main--container'>
                <img src={props.element.img} className='main--img' alt="places"></img>
            </div>

            <div className='info'>
                <div className='location'>
                    <img src={Location} className='small-icon' alt='location'/>
                    <h6>{props.element.country}</h6>
                    <a href={props.element.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2 className='title'>{props.element.location}</h2>
                <h6 className='date'>{props.element.date}</h6>
                <p className='description'>{props.element.description}</p>
            </div>
        </div>
    )
}

export default Main;