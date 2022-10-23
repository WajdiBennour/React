function Employee(props)
{
    return( 
    <>
        <p>This employee is called {props.name}</p>
        <p>{props.role ? props.role : "no role"}</p>
    </>
    )
}
export default Employee;