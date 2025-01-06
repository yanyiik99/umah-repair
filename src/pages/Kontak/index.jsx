import { useEffect, useState } from 'react';
import { Carousel, Rate, Space, Typography } from 'antd';
const {Compact} = Space;
const {Paragraph} = Typography;;
import { DataJasa, dataTestimoni } from '../../utils/constans';
import './index.css';
import Header from '../../Layout/Header.jsx';
import Footer from '../../Layout/Footer.jsx';
import { InstagramOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';


const Kontak = () => {

  return (
    <div>
      <Header />
      
      <main id="content" className="relative flex w-full max-w-[980px] gap-6 mx-auto px-10 mt-[96px]">
        <section id="bg-details" className="flex flex-col gap-6 w-full flex-1">

          <div id="reviews" className="flex flex-col w-full rounded-3xl p-8 gap-8 bg-white">
              <div className="flex flex-col gap-4">
                  <h2 className="text-[32px] leading-[40px] tracking-05 text-center">Kontak Kami</h2>
                  <p className="leading-19 tracking-03 opacity-60 text-center">Tim kami selalu tersedia untuk menjawab pertanyaan Anda, memberikan informasi lebih lanjut, atau membantu kebutuhan Anda.</p>
                  <hr className="opacity-10 border-gray-500 my-2"/>

                  <div className="kontak flex gap-3 mx-auto">
                    <PhoneOutlined/>
                    <h3 className="text-[18px] leading-[40px] text-gray-800 tracking-05 text-center">021 543 545 676</h3>
                  </div>

                  <div className="kontak flex gap-3 mx-auto">
                    <MailOutlined/>
                    <h3 className="text-[18px] leading-[40px] text-gray-800 tracking-05 text-center">admin@umahrepair.com</h3>
                  </div>

                  <div className="kontak flex gap-3 mx-auto">
                    <InstagramOutlined/>
                    <h3 className="text-[18px] leading-[40px] text-gray-800 tracking-05 text-center">@umah.repair</h3>
                  </div>
              </div>
          </div>
        </section>  
      </main>

    </div>
  )
}
  
export default Kontak