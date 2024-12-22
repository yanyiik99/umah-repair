import { useState } from "react";
import { Image, List } from 'antd';
import { FormatPainterFilled } from '@ant-design/icons'
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/logo.png';
import TriplePhoto from './img/triple-photo.png';
import Banner from './img/banner.jpg';
import './index.css';

const Homepage = () => {

  const dataDummy = [
    {key: 1, title: "Perbaikan Kulkas dan Mesin Cuci", category: "Elektronik", description: "The boy wtih blue hat", price: "150.000", warranty: "30 Hari", tools: "Dari Kami", support:"24/7", duration: "1 Jam"},
    {key: 2, title: "Perbaikan Dinding dan Plafon", category: "Renovasi", description: "The girl wtih red hat", price: "150.000", warranty: "60 Hari", tools: "Dari Anda", support:"24/7", duration: "3 Jam"},
    {key: 3, title: "Pembersihan Sofa dan Karpet", category: "Kebersihan", description: "The mysterious person in the class", price: "150.000", warranty: "30 Hari", tools: "Dari Kami", support:"24/7", duration: "5 Jam"},
    {key: 4, title: "Instalasi CCTV dan Keamanan", category: "Instalasi", description: "The boy wtih blue hat", price: "150.000", warranty: "30 Hari", tools: "Dari Anda", support:"24/7", duration: "1 Jam"},
    {key: 5, title: "Pembersihan Septic Tank", category: "Plumbing dan Air", description: "The girl wtih red hat", price: "150.000", warranty: "30 Hari", tools: "Dari Kami", support:"24/7", duration: "3 Jam"},
    {key: 6, title: "Pembuatan dan Perbaikan Mebel", category: "Dekorasi", description: "The mysterious person in the class", price: "150.000", warranty: "60 Hari", tools: "Dari Kami", support:"24/7", duration: "5 Jam"},
  ]

  return (
    <div>
      
        <header className="relative flex flex-col w-full h-[1044px] overflow-hidden -mb-[140px]">   
            <Image src={Banner} preview={false} className="absolute w-full h-full object-cover" />         
            <nav class="relative flex items-center justify-between w-full max-w-[1280px] mx-auto px-10 mt-10">
                <a href="index.html">
                    <Image src={Logo} className="!w-40" preview={false} />
                </a>
                <ul class="flex items-center gap-6 justify-end">
                    <li>
                        <a href="#" class="leading-19 tracking-03 text-white">Layanan</a>
                    </li>
                    <li>
                        <a href="#" class="leading-19 tracking-03 text-white">Tentang Kami</a>
                    </li>
                    <li>
                        <a href="#" class="leading-19 tracking-03 text-white">Testimonial</a>
                    </li>
                    <li>
                        <a href="#" class="leading-19 tracking-03 text-white">Kontak Kami</a>
                    </li>
                    <li>
                        <a href="#" class="leading-19 tracking-0.5 text-white font-semibold rounded-[22px] py-3 px-6 bg-[#606DE5]">Login</a>
                    </li>
                </ul>
            </nav>
            <div id="hero-text" class="relative flex flex-col items-center mx-auto mt-32">
                <div class="flex items-center w-fit rounded-full p-2 pl-4 pr-6 gap-3 bg-black">
                    <Image src={TriplePhoto} width={80} preview={false}/>
                    <p class="leading-19 text-white">Dipercaya oleh <span class="font-semibold">100K+</span> Pelanggan </p>
                </div>
                <h1 class="text-white mt-10 text-5xl" style={{ fontFamily: 'Inter' }}>Layanan Home Service Profesional</h1>
                <p class="leading-19 text-white mt-4">Dari Perbaikan Hingga Perawatan, Semua Kebutuhan Rumah Anda Ada Di Sini</p>
                <a href="" className="mt-16 leading-19 tracking-0.5 text-white font-semibold rounded-[22px] py-3 px-6 bg-[#606DE5]">Pesan Sekarang</a>
            </div>
        </header>

        <section id="features" class="relative w-full max-w-[1280px] h-[280px] mx-auto px-10">
          <div className="flex items-center justify-center w-full rounded-3xl p-10 gap-16 bg-white shadow-[8px_12px_28px_0_#0000000D]">
            <div class="flex flex-col items-center w-[282px] gap-4 text-center">
              <h3 class="text-xl leading-6 tracking-05">Ahli di Bidangnya</h3>
                <p class="tracking-03">
                  Tim profesional <br /> berpengalaman diberbagai jenis<br />
                  layanan rumah                   
                </p>
            </div>

            <div class="flex flex-col items-center w-[282px] gap-4 text-center">
              <h3 class="text-xl leading-6 tracking-05">Layanan Cepat dan Tepat</h3>
                <p class="tracking-03">
                  Proses pekerjaaan <br /> yang cepat dan efisien tanpa <br /> 
                  mengurangi kualitas <br />
                </p>
            </div>

            <div class="flex flex-col items-center w-[282px] gap-4 text-center">
              <h3 class="text-xl leading-6 tracking-05">Harga Jelas dan Terjangkau</h3>
                <p class="tracking-03">
                  Transparansi harga <br /> tanpa ada biaya tambahan <br />
                  layanan lainnya
                </p>
            </div>
          </div>
        </section>

        <section id="category" class="flex flex-col w-full max-w-[1280px] gap-8 mx-auto px-10 mt-[50px]">
          <div class="flex items-center justify-between">
              <div class="flex flex-col gap-4">
                  <h2 class="text-5xl leading-[59px] tracking-05">Kategori</h2>
                  <p class="leading-19 tracking-03 opacity-60">Tidak perlu repot! Kami menyediakan berbagai layanan rumah untuk Anda</p>
              </div>
          </div>
            <div class="flex items-center gap-4 flex-wrap">
              <a href="location-result.html">
                  <div class="flex items-center rounded-full p-3 pr-6 gap-3 bg-white">
                      <div class="w-10 h-10 flex shrink-0 rounded-full overflow-hidden">
                          
                      </div>
                      <span class="leading-19 tracking-03">Elektronik</span>
                  </div>
              </a>
              <a href="location-result.html">
                  <div class="flex items-center rounded-full p-3 pr-6 gap-3 bg-white">
                      <div class="w-10 h-10 flex shrink-0 rounded-full overflow-hidden">
                          
                      </div>
                      <span class="leading-19 tracking-03">Renovasi</span>
                  </div>
              </a>
              <a href="location-result.html">
                  <div class="flex items-center rounded-full p-3 pr-6 gap-3 bg-white">
                      <div class="w-10 h-10 flex shrink-0 rounded-full overflow-hidden">
                          
                      </div>
                      <span class="leading-19 tracking-03">Kebersihan</span>
                  </div>
              </a>              
              <a href="location-result.html">
                  <div class="flex items-center rounded-full p-3 pr-6 gap-3 bg-white">
                      <div class="w-10 h-10 flex shrink-0 rounded-full overflow-hidden">
                          
                      </div>
                      <span class="leading-19 tracking-03">Instalasi</span>
                  </div>
              </a>              
              <a href="location-result.html">
                  <div class="flex items-center rounded-full p-3 pr-6 gap-3 bg-white">
                      <div class="w-10 h-10 flex shrink-0 rounded-full overflow-hidden">
                          
                      </div>
                      <span class="leading-19 tracking-03">Dekorasi</span>
                  </div>
              </a>              
              <a href="location-result.html">
                  <div class="flex items-center rounded-full p-3 pr-6 gap-3 bg-white">
                      <div class="w-10 h-10 flex shrink-0 rounded-full overflow-hidden">
                          
                      </div>
                      <span class="leading-19 tracking-03">Plumbing dan Air</span>
                  </div>
              </a>              
              
          </div>
        </section>

        <section id="layanan" className="flex flex-col w-full max-w-[1280px] gap-8 mx-auto px-10 mt-[120px]">
          <div class="flex items-center justify-between">
            <div class="flex flex-col gap-4">
                <h2 class="font-['ClashDisplay-SemiBold'] text-5xl leading-[59px] tracking-05">Layanan Kami</h2>
                <p class="leading-19 tracking-03 opacity-60">Kami menyediakan berbagai solusi untuk kebutuhan rumah Anda</p>
            </div>
            <a href="#" class="w-fit rounded-full py-4 px-6 bg-black text-white">
                Lihat Semua
            </a>
          </div>

          <List
            grid={{
            gutter: 30,
            xs: 1,
            sm: 1,
            md: 2,
            lg: 2,
            xl: 3
            }}
            className="pb-5"
            dataSource={dataDummy}
            renderItem={(item) => (
            <List.Item>
              <a href="details.html" class="card-layanan">
                  <div class="flex flex-col rounded-3xl p-8 gap-6 bg-white">
                      <div class="title flex flex-col gap-2">
                          <h3 className="font-bold leading-19 tracking-03 text-lg">{item?.title}</h3>
                          <div class="flex items-center gap-1">
                              
                              <p class="text-sm leading-19 tracking-03 opacity-50">{item?.category}</p>
                          </div>
                      </div>

                      <div class="thumbnail flex rounded-3xl h-[200px] bg-[#06425E] overflow-hidden">
                          
                      </div>

                      <div class="flex items-center justify-between">
                          <p className="text-facility text-sm">Harga dan Fasilitas</p>
                          <button class="font-bold text-md leading-14 tracking-05 text-[#606DE5]">Rp. {item?.price}</button>
                      </div>

                      <div class="grid grid-cols-3 justify-between gap-3">
                          <div class="flex flex-col gap-3 items-center text-center">
                              
                              <div class="flex flex-col gap-1">
                                  <p class="font-semibold text-sm leading-16 tracking-05">Garansi</p>
                                  <p class="opacity-50 text-sm leading-16 tracking-05">{item?.warranty}</p>
                              </div>
                          </div>
                          <div class="flex flex-col gap-3 items-center text-center">
                              
                              <div class="flex flex-col gap-1">
                                  <p class="font-semibold text-sm leading-16 tracking-05">Peralatan</p>
                                  <p class="opacity-50 text-sm leading-16 tracking-05">{item?.tools}</p>
                              </div>
                          </div>
                          <div class="flex flex-col gap-3 items-center text-center">
                              
                              <div class="flex flex-col gap-1">
                                  <p class="font-semibold text-sm leading-16 tracking-05">Layanan</p>
                                  <p class="opacity-50 text-sm leading-16 tracking-05">{item?.support}</p>
                              </div>
                          </div>
                      </div>

                      <hr class="border-black/10" />
                      <div class="flex items-center gap-3">
                          
                          <div class="flex flex-col gap-2">
                              <p class="text-facility text-sm leading-17 tracking-05">Durasi Pekerjaan</p>
                              <p class="text-sm leading-14 tracking-05 opacity-50"> {item?.duration} </p>
                          </div>
                      </div>
                  </div>
              </a>
            </List.Item>
            )}
          />
        </section>

        <section id="benefits" class="flex flex-col w-full max-w-[1280px] gap-8 mx-auto px-10 mt-[120px]">
            <div class="flex items-center justify-between">
                <div class="flex flex-col gap-4 text-center mx-auto">
                    <h2 class="font-['ClashDisplay-SemiBold'] text-5xl leading-[59px] tracking-05">Manfaat Layanan Home Service Kami</h2>
                    <p class="leading-19 tracking-03 opacity-60">Layanan tanpa ribet dan nikmati kenyamanan layanan langsung di rumah</p>
                </div>
            </div>

            <div class="w-[1060px] mx-auto grid grid-cols-3 gap-20 mt-20">
                <div class="flex flex-col items-center text-center gap-4">                  

                    <h3 class="font-['ClashDisplay-SemiBold'] text-xl leading-6 tracking-05">Kemudahan Akses</h3>
                    <p class="tracking-03">Dapatkan layanan kami yang berkualitas tanpa meninggalkan <br /> rumah</p>
                </div>

                <div class="flex flex-col items-center text-center gap-4">
                    
                    <h3 class="font-['ClashDisplay-SemiBold'] text-xl leading-6 tracking-05">Hemat Waktu & Energi</h3>
                    <p class="tracking-03">Tidak perlu mencari atau mengantri, semua bisa dilakukan <br /> di rumah</p>
                </div>

                <div class="flex flex-col items-center text-center gap-4">
                
                    <h3 class="font-['ClashDisplay-SemiBold'] text-xl leading-6 tracking-05">Profesional & Terpercaya</h3>
                    <p class="tracking-03">Layanan dilakukan oleh tenaga ahli yang berpengalaman <br /> di bidangnya</p>
                </div>

                <div class="flex flex-col items-center text-center gap-4">
                    
                    <h3 class="font-['ClashDisplay-SemiBold'] text-xl leading-6 tracking-05">Kenyamanan & Fleksibilitas</h3>
                    <p class="tracking-03">Sesuaikan waktu layanan dengan berbagai kebutuhan anda <br /> di rumah</p>
                </div>
                <div class="flex flex-col items-center text-center gap-4">
                    
                    <h3 class="font-['ClashDisplay-SemiBold'] text-xl leading-6 tracking-05">Biaya Efisien</h3>
                    <p class="tracking-03">Hemat biaya tanpa biaya tambahan seperti transportasi dan <br /> layanan lainnya</p>
                </div>
                <div class="flex flex-col items-center text-center gap-4">
                    
                    <h3 class="font-['ClashDisplay-SemiBold'] text-xl leading-6 tracking-05">Layanan Disesuaikan</h3>
                    <p class="tracking-03"> Pilih layanan sesuai dengan <br /> kebutuhan spesifik anda <br />  di rumah</p>
                </div>
            </div>
        </section>

        <footer class="flex flex-col w-full max-w-[1312px] mx-auto rounded-[32px] bg-black p-[120px] mt-[120px] mb-16">
          <div class="flex justify-between">
              <div class="flex flex-col gap-6 max-w-[306px] text-start">
                  <Image src={Logo} className="!w-40" preview={false} />
                  <p class="tracking-03 text-white">Nikmati kenyamanan layanan fleksibel dan hemat waktu, tanpa harus meninggalkan rumah</p>
              </div>

              <nav class="flex gap-16 justify-end text-white">
                  <ul class="flex flex-col gap-4">
                      <p class="font-semibold tracking-03 text-facility">Ketahui Lebih Banyak</p>
                      <li>
                          <a href="#" class="tracking-03">Tentang Kami</a>
                      </li>
                      <li>
                          <a href="#" class="tracking-03">Layanan</a>
                      </li>
                      <li>
                          <a href="#" class="tracking-03">Testimonial</a>
                      </li>
                      <li>
                          <a href="#" class="tracking-03">Kontak Kami</a>
                      </li>
                  </ul>

                  <ul class="flex flex-col gap-4">
                      <p class="font-semibold tracking-03 text-facility">Kontak Kami</p>
                      <li>
                          <a href="#" class="tracking-03">021 543 545 676</a>
                      </li>
                      <li>
                          <a href="#" class="tracking-03">@umah.repair</a>
                      </li>
                      <li>
                          <a href="#" class="tracking-03">admin@umahrepair.com</a>
                      </li>
                  </ul>
              </nav>
          </div>

          <hr class="border-white/50 mt-16"/>
          <div class="flex items-center justify-between mt-[30px]">
              <p class="font-semibold tracking-03 text-white text-facility">© 2024 umahrepairproductions</p>
              <ul class="flex items-center justify-end gap-6 text-white">
                  <li>
                      <a href="#" class="tracking-03">Syarat dan Ketentuan</a>
                  </li>
                  <li>
                      <a href="#" class="tracking-03">Kebijakan Privasi</a>
                  </li>
                  <li>
                      <a href="#" class="tracking-03">Cookies</a>
                  </li>
                  <li>
                      <a href="#" class="tracking-03">Legal</a>
                  </li>
              </ul>
          </div>
        </footer>

    </div>
  )
}

export default Homepage;