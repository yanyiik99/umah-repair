import { useEffect, useState } from "react";
import { List, Input, Image } from 'antd';
import { SearchOutlined} from '@ant-design/icons'
import './index.css';
import LogoBlack from '../../assets/logo-bl.png';
import Logo from '../../assets/logo.png';
import img from './img/1.png';
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { DataJasa } from "../../utils/constans";
import { formatCurrency } from "../../utils/ui";
import { getData, loadImage } from "../../utils/api";
import { useNotification } from '../../components/NotificationContext/index.jsx';

const dataDummy = [
  {key: 1, title: "Perbaikan Kulkas dan Mesin Cuci", category: "Elektronik", description: "The boy wtih blue hat", price: "150.000", warranty: "30 Hari", tools: "Dari Kami", support:"24/7", duration: "1 Jam"},
  {key: 2, title: "Perbaikan Dinding dan Plafon", category: "Renovasi", description: "The girl wtih red hat", price: "150.000", warranty: "60 Hari", tools: "Dari Anda", support:"24/7", duration: "3 Jam"},
  {key: 3, title: "Pembersihan Sofa dan Karpet", category: "Kebersihan", description: "The mysterious person in the class", price: "150.000", warranty: "30 Hari", tools: "Dari Kami", support:"24/7", duration: "5 Jam"},
  {key: 4, title: "Instalasi CCTV dan Keamanan", category: "Instalasi", description: "The boy wtih blue hat", price: "150.000", warranty: "30 Hari", tools: "Dari Anda", support:"24/7", duration: "1 Jam"},
  {key: 5, title: "Pembersihan Septic Tank", category: "Plumbing dan Air", description: "The girl wtih red hat", price: "150.000", warranty: "30 Hari", tools: "Dari Kami", support:"24/7", duration: "3 Jam"},
  {key: 6, title: "Pembuatan dan Perbaikan Mebel", category: "Dekorasi", description: "The mysterious person in the class", price: "150.000", warranty: "60 Hari", tools: "Dari Kami", support:"24/7", duration: "5 Jam"},
]

const dataCategory = [
  {id: 0, label: "Semua", value: "Semua"},
  {id: 1, label: "Elektronik", value: "elektronik"},
  {id: 2, label: "Renovasi", value: "renovasi"},
  {id: 3, label: "Kebersihan", value: "kebersihan"},
  {id: 4, label: "Instalasi", value: "instalasi"},
  {id: 5, label: "Dekorasi", value: "dekorasi"},
  {id: 6, label: "Plumbing dan Air", value: "plumbing dan air"},
]

const Jasa = () => {

  const [dataJasa, setDataJasa] = useState([]);
  const [activeTabs, setActiveTabs] = useState("Semua");
  const [searchCategory, setSearchCategory] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const showAlert = useNotification();

  
  useEffect(() => {
    getDataJasa();
  }, []);

  const getDataJasa = () => {
    setIsLoading(true);
    getData("/api/v1/layanan/read_alllayanan")
      .then((ress) => {
          setIsLoading(false);
          if(ress?.datas){
            console.log(ress?.datas);
            setDataJasa(ress?.datas);
          }else{
            showAlert('error', 'Failed', 'Data is Empty!')
          }
      }).catch((err) => {
          setIsLoading(false);
          console.log(err);
          
      })
  }

  const tabsFiltered = (item) => {
    setActiveTabs(item?.value);
  }

  const handleSearchCategory = (e) => {
    setActiveTabs("Semua");
      setSearchCategory(e.target.value.toLowerCase());
  };

  const filteredData = activeTabs === 'Semua' ? dataJasa.filter((item) =>
    item.nama.toLowerCase().includes(searchCategory) ||
    item.kategori.toLowerCase().includes(searchCategory)) : 
    dataJasa.filter((item) => item.kategori === activeTabs);

  


  return (
    <div>
        <div id="background" className="absolute w-full h-[450px] top-0 -z-10 bg-[#9FDDFF]"></div>
        <nav className="relative flex items-center justify-between w-full max-w-[1280px] mx-auto px-10 mt-10">
            <a href="/">
                <Image src={LogoBlack} className="!w-40" preview={false} />
            </a>
            <ul className="flex items-center gap-6 justify-end">
                <li>
                    <a href="#" className="leading-19 tracking-03 text-black"  onClick={() => showAlert('error', 'Success', 'This is a success message!')}>Layanan</a>
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
                    <a href="#" className="leading-19 tracking-0.5 text-white font-semibold rounded-[22px] py-3 px-6 bg-[#606DE5]">Login</a>
                </li>
            </ul>
        </nav>

        <div id="hero-text" className="relative flex flex-col items-center mx-auto mt-16">
            <h1 className="text-black mt-10 text-4xl" style={{ fontFamily: 'Inter' }}>Temukan Kebutuhan Anda</h1>
            <p className="leading-19 text-black mt-4">Semua Kebutuhan Rumah Anda Ada Di Sini</p>
        </div>

        <section id="features" className="relative w-full max-w-[1280px] h-[280px] mx-auto px-10 mt-32">
          <div className="flex items-center justify-center w-full gap-16 bg-white rounded-2xl p-5">

            <div className="flex flex-wrap flex-[3] items-center w-full rounded-lg text-center">
              <List
                grid={{
                  gutter: 10,
                  xs: 2,
                  sm: 4,
                  md: 5
                }}
                dataSource={dataCategory}
                renderItem={(item) => (
                  <List.Item>
                      <button onClick={()=>tabsFiltered(item)}
                              className={classNames(
                              (activeTabs == item?.value ? 'text-blue-500 font-bold' : 'bg-transparent text-black' ), 
                              'flex items-center mt-5 px-4')} 
                              style={{ fontFamily: 'Inter' }}
                      >
                              <span className="leading-19 tracking-03">{item?.label}</span>
                      </button>     
                  </List.Item>
                )}
              />                      
            </div>

            <div className="flex flex-col flex-[1] items-center w-full rounded-xl text-center bg-white">                  
              <Input 
                  className="custom-input border-none outline-none"                  
                  style={{ outline: 'none !important', fontFamily: 'Inter' }}
                  size="large" 
                  placeholder="   Cari Layanan . . ." 
                  prefix={<SearchOutlined style={{  marginRight: '5px' }}/>} 
                  onChange={handleSearchCategory}        
              />
            </div>
            
          </div>
        </section>

        <section id="layanan" className="flex flex-col w-full max-w-[1280px] -mt-36 gap-8 mx-auto px-10">
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
            dataSource={filteredData}
            renderItem={(item) => (
            <List.Item>
              <a onClick={()=>navigate(`/jasadetail/${btoa(item?.id_layanan)}`)} className="card-layanan">
                  <div className="flex flex-col rounded-3xl p-8 gap-6 bg-white">
                      <div className="title flex flex-col gap-2">
                          <h3 className="font-bold leading-19 tracking-03 text-lg">{item?.nama}</h3>
                          <div className="flex items-center gap-1">
                              <p className="text-sm leading-19 tracking-03 opacity-50 capitalize">{item?.kategori}</p>
                          </div>
                      </div>

                      <div className="thumbnail flex rounded-3xl h-[200px] bg-[#06425E] overflow-hidden">
                        <img src={loadImage(item?.img_layanan)} className="w-full" alt="" />
                      </div>

                      <div className="flex items-center justify-between">
                          <p className="text-facility text-sm">Harga dan Fasilitas</p>
                          <button className="font-bold text-md leading-14 tracking-05 text-[#606DE5]">Rp {formatCurrency(item?.harga)}</button>
                      </div>

                      <div className="grid grid-cols-3 justify-between gap-3">
                          <div className="flex flex-col gap-3 items-center text-center">
                              
                              <div className="flex flex-col gap-1">
                                  <p className="font-semibold text-sm leading-16 tracking-05">Garansi</p>
                                  <p className="opacity-50 text-sm leading-16 tracking-05">{item?.garansi}</p>
                              </div>
                          </div>
                          <div className="flex flex-col gap-3 items-center text-center">
                              
                              <div className="flex flex-col gap-1">
                                  <p className="font-semibold text-sm leading-16 tracking-05">Peralatan</p>
                                  <p className="opacity-50 text-sm leading-16 tracking-05">{item?.peralatan}</p>
                              </div>
                          </div>
                          <div className="flex flex-col gap-3 items-center text-center">
                              
                              <div className="flex flex-col gap-1">
                                  <p className="font-semibold text-sm leading-16 tracking-05">Layanan</p>
                                  <p className="opacity-50 text-sm leading-16 tracking-05">{item?.operasional}</p>
                              </div>
                          </div>
                      </div>

                      <hr className="border-black/10" />
                      <div className="flex items-center gap-3">
                          
                          <div className="flex flex-col gap-2">
                              <p className="text-facility text-sm leading-17 tracking-05">Durasi Pekerjaan</p>
                              <p className="text-sm leading-14 tracking-05 opacity-50"> {item?.estimasi} </p>
                          </div>
                      </div>
                  </div>
              </a>
            </List.Item>
            )}
          />
        </section>

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

export default Jasa;