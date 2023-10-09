
function Facebook(props) {
    const { title , username ,profilePic,date } = props
   
    return (
        <div style={{marginRight:400}}>
            <img width={100} src={profilePic} style={{borderRadius:50}}/>
            <div style={{display:"inline-block"}}><h4> {username}<br/>{date.toDateString()}</h4></div>

            <h4 style={{marginRight:50}}>{title}</h4>

           
        </div>
    )
}


export default Facebook