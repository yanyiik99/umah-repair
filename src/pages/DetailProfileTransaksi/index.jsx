import { useState, useEffect } from "react";
import { Form, Button, Image} from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, EditOutlined, LoadingOutlined, EnvironmentOutlined, PlusOutlined} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

import './index.css';
import SideProfile from "../../Layout/SideProfile";
import LogoBlack from '../../assets/logo-bl.png';


const DetailProfileTransaksi = () => {
    
  const [visible, setVisible] = useState(false);

    return (
        <div>
            <div id="background" class="absolute w-full h-[450px] top-0 -z-10 bg-[#9FDDFF]"></div>
            <nav class="relative flex items-center justify-between w-full max-w-[1280px] mx-auto px-10 mt-10">
                <a href="/">
                    <Image src={LogoBlack} className="!w-40" preview={false} />
                </a>
                <ul class="flex items-center gap-8 justify-end">
                    <li>
                        <a href="#" class="leading-19 tracking-03 text-black">Layanan</a>
                    </li>
                    <li>
                        <a href="#" class="leading-19 tracking-03 text-black">Tentang Kami</a>
                    </li>
                    <li>
                        <a href="#" class="leading-19 tracking-03 text-black">Testimonial</a>
                    </li>
                    <li>
                        <a href="#" class="leading-19 tracking-03 text-black">Kontak Kami</a>
                    </li>
                    <li>
                        <a href="#" class="leading-19 tracking-0.5 text-white font-semibold rounded-[22px] py-2 px-6 bg-[#606DE5]">Login</a>
                    </li>
                </ul>
            </nav>   

            <main id="content" class="relative flex w-full max-w-[1280px] gap-6 mx-auto px-10 mt-[96px]">
                <aside class="flex flex-col gap-6">    
                    <SideProfile/>
                </aside>   

                <section id="bg-content" class="flex flex-col gap-6 w-full max-w-[1440px] flex-1">

                      <div id="booking-items" class="flex flex-col w-full rounded-3xl p-8 gap-6 bg-white">

                        <div class="group flex items-center justify-between">
                            <div class="flex flex-col gap-2 w-full">
                                <div class="flex justify-between">
                                  <h2 class="text-xl leading-6 tracking-05">
                                      Detail Transaksi
                                  </h2>
                                </div>
                                <p class="text-sm leading-16 tracking-03 opacity-60">Pastikan data sudah benar sebelum melakukan pembayaran</p>
                            </div>
                            <h2 class="text-xl leading-6 tracking-05 text-[#606DE5]">
                                TRIX12345
                            </h2>
                        </div>                    

                        <hr class="border-black opacity-10"/>

                        <div class="group flex items-center justify-between">
                            <div class="flex flex-col gap-2 w-full">
                                <div class="flex justify-between">
                                    <h2 class="leading-19 tracking-05">Jasa Pembersih Sofa</h2>
                                </div>
                                <p class="text-sm leading-16 tracking-03 opacity-60">Kebersihan - All Benefits Included</p>
                            </div>
                            <p className="leading-19 tracking-05 text-[#606DE5] border-[#606DE5] border-2 px-5 py-1 rounded-full">Selesai</p>
                        </div>
                        <div class="group flex items-center justify-between">
                            <h2 class="flex w-[162px] shrink-0 leading-19 tracking-05">Subtotal</h2>
                            <p class="leading-19 tracking-05">Rp 220.890</p>
                        </div>
                        <div class="group flex items-center justify-between">
                            <h2 class="flex w-[162px] shrink-0 leading-19 tracking-05">Promo Code</h2>
                            <p class="leading-19 tracking-05 text-[#EC0307]">-Rp 0</p>
                        </div>                        
                        <div class="group flex items-center justify-between">
                            <h2 class="flex w-[162px] shrink-0 leading-19 tracking-05">Total Bayar</h2>
                            <p class="leading-19 tracking-05">Rp 220.890</p>
                        </div>
                        <div class="group flex items-center justify-between">
                            <h2 class="flex w-[162px] shrink-0 leading-19 tracking-05">Bukti Pembayaran</h2>
                            <div className="btn-bukti flex flex-col">
                              <Button className="font-[Inter]" onClick={() => setVisible(true)}>
                                Preview Bukti Pembayaran
                              </Button>
                              <Image
                                width={200}
                                style={{
                                  display: 'none',
                                }}
                                src={LogoBlack}
                                preview={{
                                  visible,
                                  src: {LogoBlack},
                                  onVisibleChange: (value) => {
                                    setVisible(value);
                                  },
                                }}
                              />
                            </div>
                        </div>
                    </div>

                    <div id="account" class="flex flex-col w-full rounded-3xl p-8 gap-6 bg-white">
                        <div class="flex flex-col gap-2">
                            <h2 class="text-xl leading-6 tracking-05">Detail Penerima Layanan</h2>
                            <p class="text-sm leading-16 tracking-03 opacity-60">Pastikan data sudah benar sebelum melakukan pembayaran</p>
                        </div>
                        <hr class="border-black opacity-10"/>
                        <div class="group flex items-center justify-between">
                            <h2 class="flex w-[162px] shrink-0 leading-19 tracking-05">Nama Lengkap</h2>
                            <p class="leading-19 tracking-05">Dhimas Prio Utomo</p>
                        </div>
                        <div class="group flex items-center justify-between">
                            <h2 class="flex w-[162px] shrink-0 leading-19 tracking-05">Nomor Telepon</h2>
                            <p class="leading-19 tracking-05">081294885604</p>
                        </div>
                        <div class="group flex items-center justify-between">
                            <h2 class="flex w-[162px] shrink-0 leading-19 tracking-05">Alamat</h2>
                            <p class="leading-19 tracking-05">Jl. Nakula Sahadewa No.46 Singaraja</p>
                        </div>
                        <div class="group flex items-center justify-between">
                            <h2 class="flex w-[162px] shrink-0 leading-19 tracking-05">Jadwal</h2>
                            <p class="leading-19 tracking-05">2024-12-31 08:00:00</p>
                        </div>
                        <div class="group flex items-center justify-between">
                            <h2 class="flex w-[162px] shrink-0 leading-19 tracking-05">Catatan</h2>
                            <p class="leading-19 tracking-05">-</p>
                        </div>
                    </div>

                </section>  
            </main>

        </div>
    )
}

export default DetailProfileTransaksi;