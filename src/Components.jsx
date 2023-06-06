function Contact(props){
    return(
        <div className="contact-container">
            <div className="name-container">
                <a href={props.wikiUrl}>{props.userName}</a>
                <p className="userName">{props.rulesYears}</p>
            </div>
        </div>
    )
}

export default Contact