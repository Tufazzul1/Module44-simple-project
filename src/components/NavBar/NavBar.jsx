import { useState } from "react";
import Link from "../Link/Link";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCancelCircle } from "react-icons/im";    



const NavBar = () => {

    const [open , setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Dashboard', path: '/dashboard' }
    ];



    return (
        <nav className="text-black p-4 lg:p-4 bg-yellow-200">
            <div className="lg:hidden text-2xl"  onClick={() => setOpen(!open)}>
                {
                    open === true ? <ImCancelCircle /> : <GiHamburgerMenu/>
                }
            </div>
            <ul className={`lg:flex absolute lg:static 
            ${open ? 'top-12' : '-top-60'} bg-sky-400 lg:bg-yellow-200 ml-5 p-4 duration-1000`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)                  
            }
            </ul>
        </nav>
    );
};

export default NavBar;