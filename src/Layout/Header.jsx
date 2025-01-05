import { useState } from 'react'
import { Link } from "react-router-dom";
import { Image} from 'antd';

import LogoBlack from '../assets/logo-bl.png';

function Header () {
    
    return (
        <>
            <div id="background" className="absolute w-full h-[450px] top-0 -z-10 bg-[#9FDDFF]"></div>
            <nav className="relative flex items-center justify-between w-full max-w-[1280px] mx-auto px-10 mt-10">
                <a href="/">
                    <Image src={LogoBlack} className="!w-40" preview={false} />
                </a>
                <ul className="flex items-center gap-8 justify-end">
                    <li>
                        <Link to="/jasa" className="leading-19 tracking-03 text-black">Layanan</Link>
                    </li>
                    <li>
                        <Link to="/testimonial" className="leading-19 tracking-03 text-black">Testimonial</Link>
                    </li>
                    <li>
                        <Link to="/kontak-kami" className="leading-19 tracking-03 text-black">Kontak Kami</Link>
                    </li>
                    <li>
                        <Link to="/auth/login" className="leading-19 tracking-0.5 text-white font-semibold rounded-[22px] py-2 px-6 bg-[#606DE5]">Login</Link>
                    </li>
                </ul>
            </nav>   
        </>
    );
}

export default Header