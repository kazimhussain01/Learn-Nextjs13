import Link from "next/link";

const Header = ()=> {
    return(
      <div>
      <nav>
        <ul className="flex gap-6 text-xl bg-slate-300 p-3 font-sans font-bold">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/dashboard">Dashboard</Link ></li>
        <li><Link href="/about-us">About-us</Link ></li>
        <li><Link href="/contact-us">Contact-us</Link ></li>
        <li><Link href="/detail">Detail</Link ></li>
        <li><Link href="/name">Name</Link ></li>
        <li><Link href="/name2">Name2</Link ></li>
        <li><Link href="/female">Female</Link ></li>
        </ul>
    </nav>
    </div>
    )
}

export default Header;