export default function name({params}: {params: {name: string}}){
    return(
        <div>
            <h1>My Name is {params.name}</h1>
        </div>
    )
}