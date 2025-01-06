import { useState } from "react";
import { Button, Image} from 'antd';


import './index.css';

import Header from "../../Layout/Header";
import SideProfile from "../../Layout/SideProfile";
import LogoBlack from '../../assets/logo-bl.png';


const DetailProfileTransaksi = () => {
    
  const [visible, setVisible] = useState(false);

    return (
        <div>
            <Header/>

            <main id="content" className="relative flex w-full max-w-[1280px] gap-6 mx-auto px-10 mt-[96px]">
                <aside className="flex flex-col gap-6">    
                    <SideProfile/>
                </aside>   

                <section id="bg-content" className="flex flex-col gap-6 w-full max-w-[1440px] flex-1">

                      <div id="booking-items" className="flex flex-col w-full rounded-3xl p-8 gap-6 bg-white">

                        <div className="group flex items-center justify-between">
                            <div className="flex flex-col gap-2 w-full">
                                <div className="flex justify-between">
                                  <h2 className="text-xl leading-6 tracking-05">
                                      Detail Transaksi
                                  </h2>
                                </div>
                                <p className="text-sm leading-16 tracking-03 opacity-60">Pastikan data sudah benar sebelum melakukan pembayaran</p>
                            </div>
                            <h2 className="text-xl leading-6 tracking-05 text-[#606DE5]">
                                TRIX12345
                            </h2>
                        </div>                    

                        <hr className="border-black opacity-10"/>

                        <div className="group flex items-center justify-between">
                            <div className="flex flex-col gap-2 w-full">
                                <div className="flex justify-between">
                                    <h2 className="leading-19 tracking-05">Jasa Pembersih Sofa</h2>
                                </div>
                                <p className="text-sm leading-16 tracking-03 opacity-60">Kebersihan - All Benefits Included</p>
                            </div>
                            <p classNameName="leading-19 tracking-05 text-[#606DE5] border-[#606DE5] border-2 px-5 py-1 rounded-full">Selesai</p>
                        </div>
                        <div className="group flex items-center justify-between">
                            <h2 className="flex w-[162px] shrink-0 leading-19 tracking-05">Subtotal</h2>
                            <p className="leading-19 tracking-05">Rp 220.890</p>
                        </div>
                        <div className="group flex items-center justify-between">
                            <h2 className="flex w-[162px] shrink-0 leading-19 tracking-05">Promo Code</h2>
                            <p className="leading-19 tracking-05 text-[#EC0307]">-Rp 0</p>
                        </div>                        
                        <div className="group flex items-center justify-between">
                            <h2 className="flex w-[162px] shrink-0 leading-19 tracking-05">Total Bayar</h2>
                            <p className="leading-19 tracking-05">Rp 220.890</p>
                        </div>
                        <div className="group flex items-center justify-between">
                            <h2 className="flex w-[162px] shrink-0 leading-19 tracking-05">Bukti Pembayaran</h2>
                            <div classNameName="btn-bukti flex flex-col">
                              <Button classNameName="font-[Inter]" onClick={() => setVisible(true)}>
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

                    <div id="account" className="flex flex-col w-full rounded-3xl p-8 gap-6 bg-white">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl leading-6 tracking-05">Detail Penerima Layanan</h2>
                            <p className="text-sm leading-16 tracking-03 opacity-60">Pastikan data sudah benar sebelum melakukan pembayaran</p>
                        </div>
                        <hr className="border-black opacity-10"/>
                        <div className="group flex items-center justify-between">
                            <h2 className="flex w-[162px] shrink-0 leading-19 tracking-05">Nama Lengkap</h2>
                            <p className="leading-19 tracking-05">Dhimas Prio Utomo</p>
                        </div>
                        <div className="group flex items-center justify-between">
                            <h2 className="flex w-[162px] shrink-0 leading-19 tracking-05">Nomor Telepon</h2>
                            <p className="leading-19 tracking-05">081294885604</p>
                        </div>
                        <div className="group flex items-center justify-between">
                            <h2 className="flex w-[162px] shrink-0 leading-19 tracking-05">Alamat</h2>
                            <p className="leading-19 tracking-05">Jl. Nakula Sahadewa No.46 Singaraja</p>
                        </div>
                        <div className="group flex items-center justify-between">
                            <h2 className="flex w-[162px] shrink-0 leading-19 tracking-05">Jadwal</h2>
                            <p className="leading-19 tracking-05">2024-12-31 08:00:00</p>
                        </div>
                        <div className="group flex items-center justify-between">
                            <h2 className="flex w-[162px] shrink-0 leading-19 tracking-05">Catatan</h2>
                            <p className="leading-19 tracking-05">-</p>
                        </div>
                    </div>

                </section>  
            </main>

        </div>
    )
}

export default DetailProfileTransaksi;