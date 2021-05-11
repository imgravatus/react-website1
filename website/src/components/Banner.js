export function Banner(props) {
    return(
        <div className="banner" style={props.style}>
            <h2 className="banner-text">
                {props.text}
            </h2>
        </div>
    )
}




export default Banner