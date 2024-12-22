import { useState } from 'react';
import { Breadcrumb, Button, Card, Carousel, Col, Flex, Form, Image, Input, notification, Rate, Row, Space, Typography } from 'antd';
import { AppstoreAddOutlined, ClockCircleFilled, ContainerFilled, CustomerServiceOutlined, FileProtectOutlined, FullscreenOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'antd/es/typography/Link';
const { Title, Paragraph, Text } = Typography;
const { Compact } = Space;

import Countdown from 'react-countdown';
import { BiBadgeCheck } from "react-icons/bi";
import { formatCurrency, showReadmore } from '../../utils/ui';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { DataJasa, dataTestimoni } from '../../utils/constans';

import './index.css';

import Img from '../../assets/clean-service.jpg';
import ImgPromo from '../../assets/promo-banner.jpg';
import Logo from '../../assets/logo.png';
import LogoBlack from '../../assets/logo-bl.png';


const Jasadetail = () => {
  const [form] = Form.useForm();
  const [expanded, setExpanded] = useState(false);
  const [validPromocode, setValidPromocode] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const dummyPromocode = 'XXX123';
  const navigate = useNavigate();

  
  const showAlert = (status, title, description) => {
      api[status]({
          message: title,
          description: description, 
          duration: 3
      })
  }

  
  const handlePromoCode = () => {
    let promoCode = form.getFieldValue("code");

    console.log(promoCode);
    if(promoCode === dummyPromocode){
      form.resetFields();
      setValidPromocode(true);
      showAlert("success", "Data Disimpan", "Berhasil Claim Promotion Code");
      console.log(validPromocode);
    } else {
      form.resetFields();
      console.log(validPromocode);
      showAlert("error","Promotion Code Invalid","Masukan Promotion Code Dengan Benar!");
    }
  }


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
        <section id="bg-details" class="flex flex-col gap-6 w-full max-w-[820px] flex-1">

          <div id="main-thumbnail" class="w-full h-[453px] rounded-3xl bg-[#06425E] overflow-hidden">
              <Image src={DataJasa[0].img} preview={false} width="100%" className="w-full h-full object-cover" alt="main thumbnail" />  
          </div>

          <div id="details" class="flex flex-col w-full rounded-3xl p-8 gap-12 bg-white">
              <div class="flex items-center justify-between gap-4">
                  <div class="flex flex-col gap-2">
                      <h1 class="text-[32px] leading-[40px] tracking-05">{DataJasa[0].nama}</h1>
                      <div class="flex items-center gap-2">
                          
                          <p class="text-xl leading-6 tracking-05 opacity-50">{DataJasa[0].kategori}</p>
                      </div>
                  </div>
                  <p className={classNames('rounded-full py-3 px-6 text-xl w-fit font-semibold leading-19 tracking-05 text-white bg-[#606DE5]')}>
                    Rp 250.000
                    {validPromocode && (
                      <span className="line-through ml-3">
                        Rp {formatCurrency(DataJasa[0].harga)}
                      </span>
                    )}
                  </p>
              </div>

              <div class="flex flex-col gap-6">
                  <h2 class="text-xl leading-6 tracking-05">Fasilitas Tersedia</h2>
                  <hr class="opacity-10 border-black"/>
                  <div class="grid grid-cols-3 gap-x-8 gap-y-6">
                      <div class="flex items-center gap-2">                          
                          <div class="flex flex-col gap-2">
                              <p class="leading-19 tracking-05">Garansi</p>
                              <p class="text-sm leading-16 tracking-05 opacity-50">{DataJasa[0].warranty}</p>
                          </div>
                      </div>
                      <div class="flex items-center gap-2">                          
                          <div class="flex flex-col gap-2">
                              <p class="leading-19 tracking-05">Peralatan</p>
                              <p class="text-sm leading-16 tracking-05 opacity-50">{DataJasa[0].tools}</p>
                          </div>
                      </div>
                      <div class="flex items-center gap-2">                          
                          <div class="flex flex-col gap-2">
                              <p class="leading-19 tracking-05">Layanan</p>
                              <p class="text-sm leading-16 tracking-05 opacity-50">{DataJasa[0].support}</p>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="flex flex-col gap-6">
                  <h2 class="text-xl leading-6 tracking-05">Deskripsi</h2>
                  <hr class="opacity-10 border-black"/>
                  <p class="leading-[34px] tracking-05">{DataJasa[0].deskripsi}</p>
              </div>

              <hr class="opacity-10 border-black"/>
              <div class="flex items-center gap-20">
                  <div class="flex items-center gap-3 shrink-0">
                      
                      <div class="flex flex-col gap-2">
                          <h2 class="text-facility text-xl leading-6 tracking-05">Durasi Pekerjaan</h2>
                          <p class="text-md leading-19 tracking-05 opacity-50 text-nowrap">{DataJasa[0].estimasi}</p>
                      </div>
                  </div>
                  <div class="flex items-center gap-8">
                      
                      <div class="flex flex-col gap-3">
                          <h2 class=" text-xl leading-6 tracking-05">Rating</h2>
                          <p class="leading-[22px] tracking-05 opacity-50">
                            <Rate allowHalf  disabled defaultValue={DataJasa[0].rate}/>
                          </p>
                      </div>
                  </div>
              </div>
          </div>

          <div id="reviews" class="flex flex-col w-full rounded-3xl p-8 gap-8 bg-white">
              <div class="flex flex-col gap-4">
                  <h2 class="text-[32px] leading-[40px] tracking-05">Cerita Bahagia</h2>
                  <p class="leading-19 tracking-03 opacity-60">Apa kata mereka tentang layanan, fasilitas, dan pengalaman kami</p>
              </div>

              <Carousel autoplay draggable slidesToShow={2} dots={false}>
                {dataTestimoni.map((testimonial) => (
                  <div key={testimonial.id}>

                    <div class="grid">
                        <div class="flex flex-col w-full rounded-3xl py-4 px-6 gap-3">
                            <div class="flex items-center gap-3">
                                <div class="w-12 h-12 rounded-full border-[5px] border-white overflow-hidden">
                                    <img src={testimonial.avatar} alt="testimonial.name" class="w-full h-full object-cover" />
                                </div>
                                <div class="flex flex-col gap-1" style={{ fontFamily: 'Inter' }}>
                                    <p class="font-semibold text-sm leading-[22px] tracking-03">{testimonial.name}</p>
                                    <p class="text-xs tracking-03 text-[#8D9397]">
                                      {testimonial.title}, {testimonial.company}
                                    </p>
                                </div>
                            </div>
                            <p class="text-sm leading-[22px] tracking-03">{testimonial.feedback}</p>
                            <hr class="opacity-10 border-gray-500 my-2"/>
                            <div class="flex items-center gap-1">
                                <Rate disabled defaultValue={5} className='text-xs' />
                            </div>
                        </div>
                    </div>

                  </div>
                ))}
              </Carousel>
          </div>
        </section>  

        <aside class="flex flex-col gap-6 w-[1000px]">
            <div class="flex flex-col w-full rounded-3xl p-8 gap-4 pb-5 bg-white">
                <h3 class="leading-19 tracking-05 text-lg">Masukkan Kode Promo</h3>                
                <div className='relative flex justify-center'>
                  <Image src={ImgPromo} preview={false} className='rounded-lg brightness-50' />
                  <h2 className='absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold'>
                      <Countdown date={Date.now() + (60000 * 60 * 24)} />
                  </h2>
                </div>

                <Form 
                  form={form}
                  disabled={validPromocode ? true : false}
                  className='mt-3'
                >
                <Form.Item name='code'>
                  <Compact className='w-full'>
                    <Input placeholder='Kode Promo . . .' className='focus:border-none focus:outline-none border' />
                    <Button size='large' className='font-[Inter] bg-[#606DE5] outline-bg-[#606DE5] border border-[#606DE5] text-white' onClick={()=>handlePromoCode()}>                  
                      Klaim
                    </Button>
                  </Compact>
                </Form.Item>
              </Form>
            </div>

            <div class="flex flex-col w-full rounded-3xl p-8 gap-6 bg-white">
                <h3 class="leading-19 tracking-05 text-lg">Solusi Unggulan</h3>
                <div class="flex w-full h-[200px] rounded-3xl overflow-hidden bg-[#606DE5]">
                    
                </div>
                <Flex vertical >
                  {
                    DataJasa[0].benefits.map((benefit, index)=>{
                      return <Flex key={index} align='center' className='my-4 ml-2'>
                          <div class="flex items-center gap-4">                    
                              <p class="leading-19 tracking-05">{benefit}</p>
                          </div>
                        </Flex>
                    })
                  }
                </Flex>

                <a href="subscription-list.html" class="rounded-full py-3 px-6 bg-[#606DE5] font-semibold leading-19 tracking-05 text-white text-center">Pesan Sekarang</a>
            </div>

            <div class="flex flex-col w-full rounded-3xl p-8 gap-4 bg-white">
                <h3 class="leading-19 tracking-05 text-lg">Contact Person</h3>
                <hr class="border-black opacity-10"/>
                <div class="flex items-center gap-3">
                    <div class="flex w-10 h-10 rounded-full overflow-hidden">
                        
                    </div>
                    <div class="flex flex-col gap-2">
                        <h3 class="text-md leading-17 tracking-05">Lili Marlili Trilili</h3>
                        <p class="text-sm leading-14 tracking-05 opacity-50">021-256-7854</p>
                    </div>
                </div>
            </div>

        </aside>              
      </main>

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
  
export default Jasadetail