import { useState } from 'react'
import { Link } from "react-router-dom";
import { Image} from 'antd';

import Logo from '../assets/logo.png';

function Footer () {
    
    return (
        <>

            <footer className="flex flex-col w-full max-w-[1312px] mx-auto rounded-[32px] bg-black p-[120px] mt-[120px] mb-16">
                <div className="flex justify-between">
                    <div className="flex flex-col gap-6 max-w-[306px] text-start">
                        <Image src={Logo} className="!w-40" preview={false} />
                        <p className="tracking-03 text-white">Nikmati kenyamanan layanan fleksibel dan hemat waktu, tanpa harus meninggalkan rumah</p>
                    </div>

                    <nav className="flex gap-16 justify-end text-white">
                        <ul className="flex flex-col gap-4">
                            <p className="font-semibold tracking-03 text-facility">Ketahui Lebih Banyak</p>
                            <li>
                                <Link to="/jasa" clLinkssName="tracking-03">Layanan</Link>
                            </li>
                            <li>
                                <Link to="/testimonial" className="tracking-03">Testimonial</Link>
                            </li>
                            <li>
                                <Link to="/kontak-kami" className="tracking-03">Kontak Kami</Link>
                            </li>
                        </ul>

                        <ul className="flex flex-col gap-4">
                            <p className="font-semibold tracking-03 text-facility">Kontak Kami</p>
                            <li>
                                <a href="#" className="tracking-03">021 543 545 676</a>
                            </li>
                            <li>
                                <a href="#" className="tracking-03">@umah.repair</a>
                            </li>
                            <li>
                                <a href="#" className="tracking-03">admin@umahrepair.com</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <hr className="border-white/50 mt-16"/>
                <div className="flex items-center justify-between mt-[30px]">
                    <p className="font-semibold tracking-03 text-white text-facility">© 2024 umahrepairproductions</p>
                    <ul className="flex items-center justify-end gap-6 text-white">
                        <li>
                            <a href="#" className="tracking-03">Syarat dan Ketentuan</a>
                        </li>
                        <li>
                            <a href="#" className="tracking-03">Kebijakan Privasi</a>
                        </li>
                        <li>
                            <a href="#" className="tracking-03">Cookies</a>
                        </li>
                        <li>
                            <a href="#" className="tracking-03">Legal</a>
                        </li>
                    </ul>
                </div>
            </footer>
        
        </>
    );
}

export default Footer