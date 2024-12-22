import { useState } from "react";
import { List, Input, Image } from 'antd';
import { SearchOutlined} from '@ant-design/icons'
import './index.css';
import LogoBlack from '../../assets/logo-bl.png';
import Logo from '../../assets/logo.png';
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { DataJasa } from "../../utils/constans";
import { formatCurrency } from "../../utils/ui";

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
  {id: 1, label: "Elektronik", value: "Elektronik"},
  {id: 2, label: "Renovasi", value: "Renovasi"},
  {id: 3, label: "Kebersihan", value: "Kebersihan"},
  {id: 4, label: "Instalasi", value: "Instalasi"},
  {id: 5, label: "Dekorasi", value: "Dekorasi"},
  {id: 6, label: "Plumbing dan Air", value: "Plumbing dan Air"},
]

const Jasa = () => {

  const [activeTabs, setActiveTabs] = useState("Semua");
  const [searchCategory, setSearchCategory] = useState("");
  const navigate = useNavigate();

  const tabsFiltered = (item) => {
    setActiveTabs(item?.value);
  }

  const handleSearchCategory = (e) => {
    setActiveTabs("Semua");
      setSearchCategory(e.target.value.toLowerCase());
  };

  const filteredData = activeTabs === 'Semua' ? dataDummy.filter((item) =>
    item.title.toLowerCase().includes(searchCategory) ||
    item.category.toLowerCase().includes(searchCategory)) : 
    dataDummy.filter((item) => item.category === activeTabs);

  return (
    <div>
        <div id="background" class="absolute w-full h-[450px] top-0 -z-10 bg-[#9FDDFF]"></div>
        <nav class="relative flex items-center justify-between w-full max-w-[1280px] mx-auto px-10 mt-10">
            <a href="/">
                <Image src={LogoBlack} className="!w-40" preview={false} />
            </a>
            <ul class="flex items-center gap-6 justify-end">
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
                    <a href="#" class="leading-19 tracking-0.5 text-white font-semibold rounded-[22px] py-3 px-6 bg-[#606DE5]">Login</a>
                </li>
            </ul>
        </nav>

        <div id="hero-text" class="relative flex flex-col items-center mx-auto mt-16">
            <h1 class="text-black mt-10 text-4xl" style={{ fontFamily: 'Inter' }}>Temukan Kebutuhan Anda</h1>
            <p class="leading-19 text-black mt-4">Semua Kebutuhan Rumah Anda Ada Di Sini</p>
        </div>

        <section id="features" class="relative w-full max-w-[1280px] h-[280px] mx-auto px-10 mt-32">
          <div className="flex items-center justify-center w-full gap-16 bg-white rounded-2xl p-5">

            <div class="flex flex-wrap flex-[3] items-center w-full rounded-lg text-center">
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
                              <span class="leading-19 tracking-03">{item?.label}</span>
                      </button>     
                  </List.Item>
                )}
              />                      
            </div>

            <div class="flex flex-col flex-[1] items-center w-full rounded-xl text-center bg-white">                  
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

        <section id="layanan" class="flex flex-col w-full max-w-[1280px] -mt-36 gap-8 mx-auto px-10">
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
              <a onClick={()=>navigate('/jasadetail')} class="card-layanan">
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
                          <button class="font-bold text-md leading-14 tracking-05 text-[#606DE5]">Rp {formatCurrency(item?.price)}</button>
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

export default Jasa;