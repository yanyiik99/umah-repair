import { useEffect, useState } from 'react';
import { Button, Carousel, Flex, Form, Image, Input, notification, Rate, Space, Typography } from 'antd';
const {Compact} = Space;
const {Paragraph} = Typography;
import Countdown from 'react-countdown';
import { BiBadgeCheck } from "react-icons/bi";
import { formatCurrency, showReadmore } from '../../utils/ui';
import classNames from 'classnames';
import { useNavigate, useParams } from 'react-router-dom';
import { DataJasa, dataTestimoni } from '../../utils/constans';
import './index.css';
import Img from '../../assets/clean-service.jpg';
import ImgPromo from '../../assets/promo-banner.jpg';
import Logo from '../../assets/logo.png';
import LogoBlack from '../../assets/logo-bl.png';
import { getData, loadImage } from "../../utils/api";
import { useNotification } from '../../components/NotificationContext/index.jsx';


const Jasadetail = () => {
  const [form] = Form.useForm();
  const [newHargaPromo, setNewHargaPromo] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingPromo, setIsLoadingPromo] = useState(true);
  const [dataJasa, setDataJasa] = useState({});
  const [dataPromo, setDataPromo] = useState([]);
  const [validPromocode, setValidPromocode] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [timeCountdown, setTimeCountdown] = useState(0);
  const navigate = useNavigate();
  const params = useParams();
  const showAlert = useNotification();

  
  useEffect(() => {
    getDataJasa();
    console.log('Updated newHargaPromo:', newHargaPromo);
    console.log(dataJasa);

  }, []);

  const getDataJasa = () => {
    setIsLoading(true);
    getData(`/api/v1/layanan/read_layanan/${atob(params.id)}`)
      .then((ress) => {
          setIsLoading(false);
          if(ress?.datas){
            setDataJasa(ress?.datas);
            getDataPromo(ress?.datas?.id_promo);
          }else{
            showAlert('error', 'Failed', 'Data is Empty!')
          }
      }).catch((err) => {
          setIsLoading(false);
          console.log(err);
      })
  }

  const getDataPromo = (id_promo) => {
    getData(`/api/v1/promo/read_promo/${id_promo}`)
      .then((ressPromo) => {
          setIsLoadingPromo(false);
          if(ressPromo?.datas){
            setDataPromo(ressPromo?.datas);
            setPromoCode(ressPromo?.datas?.kode_promo);
            const endDate = new Date(ressPromo?.datas?.end_promo?.replace(" ", "T")); 
            const now = new Date(); 
            const differenceInMilliseconds = endDate - now; 
            setTimeCountdown(differenceInMilliseconds);
          }else{
            showAlert('error', 'Failed', 'Data Promo is Empty!')
          }
      }).catch((err) => {
          setIsLoadingPromo(false);
          console.log(err);
      })
  }


  const handlePromoCode = () => {
    let userpromoCode = form.getFieldValue("code");

    console.log(userpromoCode);
    if(userpromoCode === promoCode){
      
      if(dataPromo?.persen !== null){
        setNewHargaPromo((Number(dataPromo?.persen)/100) * Number(dataJasa?.harga))
        setDataJasa(() => ({
          ...dataJasa,
          hargaPromo: `${(Number(dataPromo?.persen)/100) * Number(dataJasa?.harga)}`
        }));
      }else{
        setNewHargaPromo(Number(dataJasa?.harga) - Number(dataPromo?.fix));
        setDataJasa(() => ({
          ...dataJasa,
          hargaPromo: `${Number(dataJasa?.harga) - Number(dataPromo?.fix)}`
        }));
      }
    
      setValidPromocode(true);
      form.resetFields();
      showAlert("success", "Data Disimpan", "Berhasil Claim Promotion Code");

    } else {
      form.resetFields();
      showAlert("error","Promotion Code Invalid","Masukan Promotion Code Dengan Benar!");
    }
  }


  return (
    <div>
      <div id="background" className="absolute w-full h-[450px] top-0 -z-10 bg-[#9FDDFF]"></div>
      <nav className="relative flex items-center justify-between w-full max-w-[1280px] mx-auto px-10 mt-10">
          <a href="/">
            <Image src={LogoBlack} className="!w-40" preview={false} />
          </a>
          <ul className="flex items-center gap-8 justify-end">
              <li>
                  <a href="#" className="leading-19 tracking-03 text-black">Layanan</a>
              </li>
              <li>
                  <a href="#" className="leading-19 tracking-03 text-black">Tentang Kami</a>
              </li>
              <li>
                  <a href="#" className="leading-19 tracking-03 text-black">Testimonial</a>
              </li>
              <li>
                  <a href="#" className="leading-19 tracking-03 text-black">Kontak Kami</a>
              </li>
              <li>
                  <a href="#" className="leading-19 tracking-0.5 text-white font-semibold rounded-[22px] py-2 px-6 bg-[#606DE5]">Login</a>
              </li>
          </ul>
      </nav>   
      
      <main id="content" className="relative flex w-full max-w-[1280px] gap-6 mx-auto px-10 mt-[96px]">
        <section id="bg-details" className="flex flex-col gap-6 w-full max-w-[820px] flex-1">

          <div id="main-thumbnail" className="w-full h-[453px] rounded-3xl bg-[#06425E] overflow-hidden">
              <Image src={loadImage(dataJasa?.img_layanan)} preview={false} width="100%" className="w-full h-full object-cover" alt="main thumbnail" />  
          </div>

          <div id="details" className="flex flex-col w-full rounded-3xl p-8 gap-12 bg-white">
              <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-col gap-2">
                      <h1 className="text-[32px] leading-[40px] tracking-05">{dataJasa?.nama}</h1>
                      <div className="flex items-center gap-2">
                          
                          <p className="text-xl leading-6 tracking-05 opacity-50 capitalize">{dataJasa?.kategori}</p>
                      </div>
                  </div>
                  <div className='flex flex-col justify-end items-end gap-2'>
                    <p className={
                        classNames('rounded-full py-3 px-6 text-xl w-fit font-semibold leading-19 tracking-05 text-white bg-[#606DE5]',
                          validPromocode && 'line-through'
                        )
                      }>
                      Rp {formatCurrency(dataJasa?.harga)}
                    </p>
                    <p className={
                        classNames('rounded-full py-3 px-6 text-xl w-fit font-semibold leading-19 tracking-05 text-white bg-[#606DE5]',
                          !validPromocode ? 'hidden' : 'block'
                        )
                      }>
                      {validPromocode && (
                        <span>
                          Rp {formatCurrency(newHargaPromo.toString())}
                        </span>
                      )}
                    </p>
                  </div>
              </div>

              <div className="flex flex-col gap-6">
                  <h2 className="text-xl leading-6 tracking-05">Fasilitas Tersedia</h2>
                  <hr className="opacity-10 border-black"/>
                  <div className="grid grid-cols-3 gap-x-8 gap-y-6">
                      <div className="flex items-center gap-2">                          
                          <div className="flex flex-col gap-2">
                              <p className="leading-19 tracking-05">Garansi</p>
                              <p className="text-sm leading-16 tracking-05 opacity-50">{dataJasa.garansi}</p>
                          </div>
                      </div>
                      <div className="flex items-center gap-2">                          
                          <div className="flex flex-col gap-2">
                              <p className="leading-19 tracking-05">Peralatan</p>
                              <p className="text-sm leading-16 tracking-05 opacity-50">{dataJasa.peralatan}</p>
                          </div>
                      </div>
                      <div className="flex items-center gap-2">                          
                          <div className="flex flex-col gap-2">
                              <p className="leading-19 tracking-05">Layanan</p>
                              <p className="text-sm leading-16 tracking-05 opacity-50">{dataJasa.operasional}</p>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="flex flex-col gap-6">
                  <h2 className="text-xl leading-6 tracking-05">Deskripsi</h2>
                  <hr className="opacity-10 border-black"/>
                  <Paragraph 
                    ellipsis={
                      { rows: 7, expandable: 'collapsible', symbol: showReadmore(expanded), onExpand: (_, info) => setExpanded(info.expanded),}
                    } 
                    className="desc !leading-[34px] !tracking-05">{dataJasa.deskripsi}</Paragraph>
              </div>

              <hr className="opacity-10 border-black"/>
              <div className="flex items-center gap-20">
                  <div className="flex items-center gap-3 shrink-0">
                      
                      <div className="flex flex-col gap-2">
                          <h2 className="text-facility text-xl leading-6 tracking-05">Durasi Pekerjaan</h2>
                          <p className="text-md leading-19 tracking-05 opacity-50 text-nowrap">{dataJasa.estimasi}</p>
                      </div>
                  </div>
                  <div className="flex items-center gap-8">
                      
                      <div className="flex flex-col gap-3">
                          <h2 className=" text-xl leading-6 tracking-05">Rating</h2>
                          <p className="leading-[22px] tracking-05 opacity-50">
                            <Rate allowHalf  disabled defaultValue={DataJasa[0].rate}/>
                          </p>
                      </div>
                  </div>
              </div>
          </div>

          <div id="reviews" className="flex flex-col w-full rounded-3xl p-8 gap-8 bg-white">
              <div className="flex flex-col gap-4">
                  <h2 className="text-[32px] leading-[40px] tracking-05">Cerita Bahagia</h2>
                  <p className="leading-19 tracking-03 opacity-60">Apa kata mereka tentang layanan, fasilitas, dan pengalaman kami</p>
              </div>

              <Carousel autoplay draggable slidesToShow={2} dots={false}>
                {dataTestimoni.map((testimonial) => (
                  <div key={testimonial.id}>

                    <div className="grid">
                        <div className="flex flex-col w-full rounded-3xl py-4 px-6 gap-3">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full border-[5px] border-white overflow-hidden">
                                    <img src={testimonial.avatar} alt="testimonial.name" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col gap-1" style={{ fontFamily: 'Inter' }}>
                                    <p className="font-semibold text-sm leading-[22px] tracking-03">{testimonial.name}</p>
                                    <p className="text-xs tracking-03 text-[#8D9397]">
                                      {testimonial.title}, {testimonial.company}
                                    </p>
                                </div>
                            </div>
                            <p className="text-sm leading-[22px] tracking-03">{testimonial.feedback}</p>
                            <hr className="opacity-10 border-gray-500 my-2"/>
                            <div className="flex items-center gap-1">
                                <Rate disabled defaultValue={5} className='text-xs' />
                            </div>
                        </div>
                    </div>

                  </div>
                ))}
              </Carousel>
          </div>
        </section>  

          <aside className="flex flex-col gap-6 w-[1000px]">
            { dataJasa?.id_promo != 1 && 
              <div className="flex flex-col w-full rounded-3xl p-8 gap-4 pb-5 bg-white">
                  <h3 className="leading-19 tracking-05 text-lg">Masukkan Kode Promo</h3>                
                  <div className='relative flex justify-center'>
                    <Image src={loadImage(dataPromo?.img_promo)} preview={false} className='rounded-lg brightness-50' />
                    <h2 className='absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold'>
                        {
                          !isLoadingPromo && 
                          <Countdown date={Date.now() + timeCountdown} />
                        }
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
            }

              <div className="flex flex-col w-full rounded-3xl p-8 gap-6 bg-white">
                  <h3 className="leading-19 tracking-05 text-lg">Solusi Unggulan</h3>
                  <div className="flex w-full h-[200px] rounded-3xl overflow-hidden bg-[#606DE5]">
                      
                  </div>
                  <Flex vertical >
                    {
                      dataJasa?.benefits?.map((benefit, index)=>{
                        return <Flex key={index} align='center' className='my-4 ml-2'>
                            <div className="flex items-center gap-4">                    
                                <p className="leading-19 tracking-05">{benefit}</p>
                            </div>
                          </Flex>
                      })
                    }
                  </Flex>

                  <a onClick={()=>{navigate(`/proses-transaksi`, {state: dataJasa})}} className="rounded-full py-3 px-6 bg-[#606DE5] font-semibold leading-19 tracking-05 text-white text-center cursor-pointer">
                    Pesan Sekarang
                  </a>
              </div>

              <div className="flex flex-col w-full rounded-3xl p-8 gap-4 bg-white">
                  <h3 className="leading-19 tracking-05 text-lg">Contact Person</h3>
                  <hr className="border-black opacity-10"/>
                  <div className="flex items-center gap-3">
                      <div className="flex w-10 h-10 rounded-full overflow-hidden">
                          
                      </div>
                      <div className="flex flex-col gap-2">
                          <h3 className="text-md leading-17 tracking-05">Lili Marlili Trilili</h3>
                          <p className="text-sm leading-14 tracking-05 opacity-50">021-256-7854</p>
                      </div>
                  </div>
              </div>
          </aside>  


      </main>

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
                        <a href="#" className="tracking-03">Tentang Kami</a>
                    </li>
                    <li>
                        <a href="#" className="tracking-03">Layanan</a>
                    </li>
                    <li>
                        <a href="#" className="tracking-03">Testimonial</a>
                    </li>
                    <li>
                        <a href="#" className="tracking-03">Kontak Kami</a>
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

    </div>
  )
}
  
export default Jasadetail