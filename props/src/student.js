//...........props

function Student(props) {
    console.log(props)
    return (

        <div className="App">
            <h1>Hello {props.name}</h1>
            {/* <h2>email :  {props.email}</h2>
            <h4>other : {props.other.mno}</h4> */}

        </div>
    )
}

export default Student