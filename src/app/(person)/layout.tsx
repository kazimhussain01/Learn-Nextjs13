const PersonLayout = ({children}: {children: React.ReactNode})=> {
    return(
        <div>
            {children}
            <b>
            <h1 style={{fontFamily: 'Consolas'}}>This Function is Called a Group Layout Function</h1>
            </b>
        </div>
    )
}

export default PersonLayout