export default function blogs({params}: {params: {blogs: string}}) {
    return(
        <div>
            <b>
            <h1 style={{fontFamily: 'Consolas'}}>My Blog Name is {params.blogs}</h1>
            </b>
        </div>
    )
}