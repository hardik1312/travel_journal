import Location from '../images/Location.png'

function Main(props){
    return(
        <section>
            <img src={Location} alt='location'/>
            <img src={props.element.img} alt="fuji"></img>
            <p>{props.element.country}</p>
            <p>View on Google Maps</p>
            <h1>{props.element.location}</h1>
            <p>{props.element.date}</p>
            <p>{props.element.description}</p>
        </section>
    )
}

export default Main;