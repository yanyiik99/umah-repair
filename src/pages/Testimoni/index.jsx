import { useEffect, useState } from 'react';
import { Carousel, Rate, Space, Typography } from 'antd';
const {Compact} = Space;
const {Paragraph} = Typography;;
import { DataJasa, dataTestimoni } from '../../utils/constans';
import './index.css';
import Header from '../../Layout/Header.jsx';
import Footer from '../../Layout/Footer.jsx';


const Testimoni = () => {

  return (
    <div>
      <Header />
      
      <main id="content" className="relative flex w-full max-w-[1280px] gap-6 mx-auto px-10 mt-[96px]">
        <section id="bg-details" className="flex flex-col gap-6 w-full flex-1">

          <div id="reviews" className="flex flex-col w-full rounded-3xl p-8 gap-8 bg-white">
              <div className="flex flex-col gap-4">
                  <h2 className="text-[32px] leading-[40px] tracking-05 text-center">Testimonial</h2>
                  <p className="leading-19 tracking-03 opacity-60 text-center">Apa kata mereka tentang layanan, fasilitas, dan pengalaman kami</p>
                  <hr className="opacity-10 border-gray-500 my-2"/>
              </div>

              <Carousel autoplay draggable slidesToShow={2} dots={false}>
                {dataTestimoni.map((testimonial) => (
                  <div key={testimonial.id}>

                    <div className="grid">
                        <div className="flex flex-col w-full rounded-3xl py-4 px-6 gap-3">
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-12 h-12 rounded-full border-[5px] border-white overflow-hidden">
                                    <img src={testimonial.avatar} alt="testimonial.name" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col gap-1" style={{ fontFamily: 'Inter' }}>
                                    <p className="text-center font-semibold text-sm leading-[22px] tracking-03">{testimonial.name}</p>
                                    <p className="text-xs tracking-03 text-[#8D9397]">
                                      {testimonial.title}, {testimonial.company}
                                    </p>
                                </div>
                            </div>
                            <p className="text-sm text-center leading-[22px] tracking-03">{testimonial.feedback}</p>
                            <hr className="opacity-10 border-gray-500 my-2"/>
                            <div className="flex justify-around  items-center gap-1">
                                <Rate disabled defaultValue={5} className='text-xs' />
                            </div>
                        </div>
                    </div>

                  </div>
                ))}
              </Carousel>
          </div>
        </section>  
      </main>

    </div>
  )
}
  
export default Testimoni