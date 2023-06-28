import Link from "next/link";
import Image from "next/image";

const dashboard = ()=> {
    return <div>
        <center>
        <b>
        <Link href='dashboard/analytics' className='no-underline' style={{fontFamily: 'Consolas', backgroundColor: 'tomato'}}>Analytics</Link>
        <br/>
        <Link href='dashboard/setting' className='no-underline' style={{fontFamily: 'Consolas', backgroundColor: 'green'}}>Setting</Link>
        <h1 style={{fontFamily: 'Consolas', backgroundColor: 'yellow'}}>Hi I am a Dashboard Page</h1>
        </b>  
        </center>
    </div>
}

export default dashboard;