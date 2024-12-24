import { BankFilled, CreditCardOutlined, HomeOutlined, UserAddOutlined, InboxOutlined, PlusOutlined, UserOutlined, ArrowRightOutlined, InfoCircleFilled, InfoCircleOutlined } from "@ant-design/icons";
import { Breadcrumb, Card, Col, Flex, Row, Steps, Button, message,  Select, Image,Typography, Collapse, Form, Input, DatePicker, Upload, Result, Divider, Space, Modal, Tooltip  } from "antd";
import { useMemo, useRef, useState } from "react";
import { showReadmore } from "../../utils/ui";
import { useNavigate } from "react-router-dom";
const { Title, Paragraph} = Typography;
const { Dragger } = Upload;
// import Img from '../../assets/clean-service.jpg';
import Bca from '../../assets/bca.png';
import Bri from '../../assets/bri.png';
import Bni from '../../assets/bni.png';
import Gopay from '../../assets/gopay.png';
import Jago from '../../assets/jago.png';
import Dana from '../../assets/dana.png';
import { DataJasa } from "../../utils/constans";
import Link from "antd/es/typography/Link";
import Logo from '../../assets/logo.png';
import LogoBlack from '../../assets/logo-bl.png';
import './index.css';

const steps = [
    {
      title: 'Pesanan',
      content: 'First-content',
    },
    {
      title: 'Pembayaran',
      content: 'Last-content',
    },
    {
      title: 'Konfirmasi',
      content: 'Last-content',
    },
];

const props = {
  name: 'file',
  multiple: false,
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};


const UserTransaksi = () => {
    const [current, setCurrent] = useState(0);
    const [expanded, setExpanded] = useState(false);
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [alamat, setAlamat] = useState(['Taman Wira Sambangan Blok Cempaka I No. 4']);
    const [name, setName] = useState('');
    const inputRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [arrow, setArrow] = useState('Show');

    const next = () => {
      setCurrent(current + 1);
    };
    const prev = () => {
      setCurrent(current - 1);
    };

  
    const mergedArrow = useMemo(() => {
      if (arrow === 'Hide') {
        return false;
      }
      if (arrow === 'Show') {
        return true;
      }
      return {
        pointAtCenter: true,
      };
    }, [arrow]);

    const items = steps.map((item) => ({
      key: item.title,
      title: item.title,
      description: item.description,
    }))
    
    const onNameChange = (event) => {
        setName(event.target.value);
    };

    const onChange = (value) => {
        console.log('onChange:', value);
        setCurrent(value);
    };

    const addItem = (e) => {
        e.preventDefault();
        setAlamat([...alamat, name ]);
        setName('');
        setTimeout(() => {
          inputRef.current?.focus();
        }, 0);
      };
    

    return <div>
        {/* <Modal title="Transfer Bank, Pilih Salah Satu Tujuan" open={isModalOpen} closable={false} footer={null}>
            <Flex justify="space-between" className="cursor-pointer" align="center" onClick={()=>{setIsModalOpen(false)}}>
                <Image preview={false} src={Bca} className="!h-10" />
                <div>
                    <Paragraph className="text-lg font-semibold" >BCA ACTIVE BANK</Paragraph>
                    <Paragraph className="text-2xl font-bold" onClick={()=>{setIsModalOpen(false)}} copyable>123123123</Paragraph>
                </div>
            </Flex>
            <hr className="my-4" />
            <Flex justify="space-between" align="center" className="cursor-pointer">
                <Image preview={false} src={Bni} className="!h-10" />
                <div>
                    <Paragraph className="text-lg font-semibold" >BNI ACTIVE BANK</Paragraph>
                    <Paragraph className="text-2xl font-bold" copyable>999999999</Paragraph>
                </div>
            </Flex>
            <hr className="my-4" />
            <Flex justify="space-between" align="center" className="cursor-pointer">
                <Image preview={false} src={Dana} className="!h-10" />
                <div>
                    <Paragraph className="text-lg font-semibold" >DANA ACTIVE BANK</Paragraph>
                    <Paragraph className="text-2xl font-bold" copyable>085946370867</Paragraph>
                </div>
            </Flex>
            <hr className="my-4" />
            <Flex justify="space-between" align="center" className="cursor-pointer">
                <Image preview={false} src={Gopay} className="!h-10" />
                <div>
                    <Paragraph className="text-lg font-semibold" >GOPAY ACTIVE BANK</Paragraph>
                    <Paragraph className="text-2xl font-bold" copyable>085946370867</Paragraph>
                </div>
            </Flex>

        </Modal> */}

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

        <section id="features" class="relative w-full max-w-[1280px] h-[280px] mx-auto px-10 mt-32">
          <div className="flex items-center justify-center w-full gap-16 bg-white rounded-2xl p-5">         
                <Steps current={current} onChange={onChange} items={items} style={{ fontFamily: 'Inter', margin: '10px' }}/>
          </div>
        </section>

        { (current == 0) && (
            <div id="pesanan" class="relative flex w-full max-w-[1280px] gap-6 mx-auto px-10 -mt-40">
                <div class="flex flex-col gap-6 w-full max-w-[820px] shrink-0">
                    <div id="account" class="flex flex-col w-full rounded-3xl p-8 gap-6 bg-white">
                        <div class="flex flex-col gap-2">
                            <h2 class="text-xl leading-6 tracking-05">Detail Penerima Layanan</h2>
                            <p class="text-sm leading-16 tracking-03 opacity-60">Isi data dan pastikan data sudah benar sebelum melanjutkan pembayaran</p>
                        </div>
                        <hr class="border-black opacity-10"/>

                        <Form layout="vertical" requiredMark={true} form={form}>
                            <Form.Item
                                name="namapenjamu"
                                rules={[
                                    {required: true, message: "Nama Penjamu Wajib Diisi"}
                                ]}
                            >
                                <label class="group flex items-center font-[Inter]">
                                    <h2 class="text-md flex w-[162px] shrink-0 leading-19 tracking-05"> 
                                        <span class="text-red-500 mr-1">*</span> Nama Lengkap
                                    </h2>
                                    <Input placeholder="Masukkan nama penerima layanan" className="font-[Inter] focus:border-none focus:outline-none outline-none flex w-full rounded-xl px-3 py-4 border border-[#BFBFBF] bg-white text-sm leading-[22px] tracking-03 placeholder:text-[#BFBFBF] transition-all duration-300 group-focus-within:border-black"/>
                                </label>
                            </Form.Item>

                            <Form.Item
                                name="notelepon"
                                rules={[
                                    {required: true, message: "Nomor Telepon Wajib Diisi"}
                                ]}
                            >
                                <label class="group flex items-center font-[Inter]">
                                    <h2 class="text-md flex w-[162px] shrink-0 leading-19 tracking-05"> 
                                        <span class="text-red-500 mr-1">*</span> No Telepon
                                    </h2>
                                    <Input placeholder="Masukkan nomor penerima layanan" className="font-[Inter] focus:border-none focus:outline-none outline-none flex w-full rounded-xl px-3 py-4 border border-[#BFBFBF] bg-white text-sm leading-[22px] tracking-03 placeholder:text-[#BFBFBF] transition-all duration-300 group-focus-within:border-black"/>
                                </label>
                            </Form.Item>

                            <Form.Item
                                name="alamat"
                                rules={[
                                    {required: true, message: "Alamat/Lokasi Wajib Diisi"}
                                ]}
                            >
                                <label class="group flex items-center font-[Inter]">
                                    <h2 class="text-md flex w-[162px] shrink-0 leading-19 tracking-05"> 
                                        <span class="text-red-500 mr-1">*</span> Alamat
                                    </h2>
                                    <Select 
                                        className="font-[Inter] focus:border-none focus:outline-none outline-none flex w-full rounded-xl border-[#BFBFBF] bg-white text-sm leading-[22px] tracking-03 placeholder:text-[#BFBFBF] transition-all duration-300 group-focus-within:border-black"
                                        style={{ fontFamily: 'Inter' }}
                                        size="large"
                                        placeholder="Masukan alamat atau lokasi" 
                                        dropdownRender={(menu) => (
                                            <>
                                            {menu}
                                            <Divider style={{ margin: '8px 0'}}/>
                                            <div className="flex flex-wrap gap-3 m-3">
                                                <div className="flex-[3]">
                                                    <Input
                                                        placeholder="Masukan Alamat Baru"
                                                        ref={inputRef}
                                                        value={name}
                                                        onChange={onNameChange}
                                                        onKeyDown={(e) => e.stopPropagation()}
                                                        className="font-[Inter w-full]"
                                                    />
                                                </div>

                                                <div className="flex-[1]">
                                                    <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
                                                    Tambah Alamat
                                                    </Button>
                                                </div>
                                            </div>                                        
                                            </>
                                        )}
                                        dropdownClassName="custom-dropdown"
                                        options={alamat.map((item) => ({
                                            label: item,
                                            value: item,
                                        }))}
                                    />
                                </label>
                            </Form.Item>

                            <Form.Item
                                name="jadwal"
                                rules={[
                                    {required: true, message: "Jadwal Wajib Diisi"}
                                ]}
                            >
                                <label class="group flex items-center font-[Inter]">
                                    <h2 class="text-md flex w-[162px] shrink-0 leading-19 tracking-05"> 
                                        <span class="text-red-500 mr-1">*</span> Jadwal Layanan
                                    </h2>
                                    <DatePicker showTime placeholder="Masukkan jadwal layanan" className="font-[Inter] focus:border-none focus:outline-none outline-none flex w-full rounded-xl px-3 py-4 border border-[#BFBFBF] bg-white text-sm leading-[22px] tracking-03 placeholder:text-[#BFBFBF] transition-all duration-300 group-focus-within:border-black"/>
                                </label>
                            </Form.Item>

                            <Form.Item
                                name="catatan"
                            >
                                <label class="group flex items-center font-[Inter]">
                                    <h2 class="text-md flex w-[162px] shrink-0 leading-19 tracking-05"> 
                                        Catatan
                                    </h2>
                                    <Input.TextArea rows={4} className="font-[Inter] focus:border-none focus:outline-none outline-none flex w-full rounded-xl px-3 py-4 border border-[#BFBFBF] bg-white text-sm leading-[22px] tracking-03 placeholder:text-[#BFBFBF] transition-all duration-300 group-focus-within:border-black" placeholder="Beri catatan untuk mitra kami"/>
                                </label>                            
                            </Form.Item>
                        </Form>
                    </div>
                    <div id="booking-items" class="flex flex-col w-full rounded-3xl p-8 gap-6 bg-white">
                        <div class="flex flex-col gap-2">
                            <h2 class="text-xl leading-6 tracking-05">Detail Pesanan</h2>
                            <p class="text-sm leading-16 tracking-03 opacity-60">Layanan berikutnya menanti, periksa detail pemesanan Anda di sini</p>
                        </div>
                        <hr class="border-black opacity-10"/>
                        <div class="items flex flex-nowrap gap-4 w-full">
                            
                            <div class="flex flex-col gap-2 w-full">
                                <div class="flex justify-between">
                                    <h2 class="leading-19 tracking-05">Pembersihan Sofa</h2>
                                    <div class="flex gap-4 items-center">
                                        <h2 class="leading-19 tracking-05">Rp 199.000</h2>
                                        <button class="appearance-none">
                                            
                                        </button>
                                    </div>
                                </div>
                                <p class="text-sm leading-16 tracking-03 opacity-60">Kebersihan Rumah</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col gap-6 w-full">
                    <div class="flex flex-col w-full rounded-3xl p-8 gap-6 bg-white">
                        <div class="flex flex-col gap-2">
                            <h2 class="text-xl leading-6 tracking-05">Detail Transaksi</h2>
                            <p class="text-sm leading-16 tracking-03 opacity-60">Cek kembali tagihan layanan anda</p>
                        </div>
                        <hr class="border-black opacity-10"/>
                        <div class="flex items-center justify-between">
                            <h2 class="leading-19 tracking-05">Subtotal</h2>
                            <p class="leading-19">Rp 199.000</p>
                        </div>
                        <div class="flex items-center justify-between">
                            <h2 class="leading-19 tracking-05 flex">
                                Tax 12%
                                <Tooltip className="ms-2" placement="top" title="Berdasarkan Regulasi Pemerintah UU 12 No.12 Tahun 2024" arrow={mergedArrow}>
                                    <InfoCircleOutlined/>
                                </Tooltip>
                            </h2>
                            <p class="leading-19">Rp 21.890</p>
                        </div>
                        <hr class="border-black border-dashed"/>
                        <div class="flex items-center justify-between">
                            <h2 class="text-xl leading-6 tracking-05">Total</h2>
                            <h2 class="text-xl leading-6 tracking-05">Rp 220.890</h2>
                        </div>
                        <button onClick={() => next()} type="submit" class="rounded-full py-3 px-6 bg-[#606DE5] font-semibold leading-19 tracking-05 text-white text-center">Bayar</button>

                    </div>
                </div>
            </div>
        )}
        
        {(current == 1) && (
            <div id="pembayaran" class="relative flex w-full max-w-[1280px] gap-6 mx-auto px-10 -mt-40">
                <div class="flex flex-col gap-6 w-full max-w-[820px] shrink-0">
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

                    <div id="booking-items" class="flex flex-col w-full rounded-3xl p-8 gap-6 bg-white">
                        <div class="flex flex-col gap-2">
                            <h2 class="text-xl leading-6 tracking-05">
                                No Pesanan : <span class="text-[#606DE5]">10294</span>
                            </h2>
                        </div>
                        <div class="items flex flex-nowrap gap-4 w-full">
                            <div class="flex flex-col gap-2 w-full">
                                <div class="flex justify-between">
                                    <h2 class="leading-19 tracking-05">Jasa Pembersih Sofa</h2>
                                </div>
                                <p class="text-sm leading-16 tracking-03 opacity-60">Kebersihan - All Benefits Included</p>
                            </div>
                        </div>
                        <div class="group flex items-center justify-between">
                            <h2 class="flex w-[162px] shrink-0 leading-19 tracking-05">Subtotal</h2>
                            <p class="leading-19 tracking-05">Rp 220.890</p>
                        </div>
                        <div class="group flex items-center justify-between">
                            <h2 class="flex w-[162px] shrink-0 leading-19 tracking-05">Promo Code</h2>
                            <p class="leading-19 tracking-05 text-[#EC0307]">-Rp 0</p>
                        </div>
                        <hr class="border-black border-dashed my-2"/>
                        <div class=" w-full flex justify-between items-center rounded-2xl py-4 px-8 bg-[#D0EEFF]">
                            <h2 class="text-xl leading-[43px] tracking-05">Total Payment</h2>
                            <h2 class="text-xl leading-[43px] tracking-05 text-right">Rp220.890</h2>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col gap-6 w-full">
                    <div class="flex flex-col w-full rounded-3xl p-8 gap-6 bg-white">
                        <div class="flex flex-col gap-2">
                            <h2 class="text-xl leading-6 tracking-05">Transfer ke</h2>
                            <p class="text-sm leading-16 tracking-03 opacity-60">Pilih metode pembayaran di bawah</p>
                        </div>
                        <hr class="border-black opacity-10"/>
                        <div class="flex items-center gap-6">
                            <Image src={Bca} preview={false} width="80px" className="object-cover flex shrink-0" alt="logo"/>
                            <div class="flex flex-col gap-1">
                                <h2 class="leading-19 tracking-05">Umah Repair Corp</h2>
                                <p class="leading-19">129405960495</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-6">
                            <Image src={Bni} preview={false} width="80px" className="object-cover flex shrink-0" alt="logo"/>
                            <div class="flex flex-col gap-1">
                                <h2 class="leading-19 tracking-05">Umah Repair Corp</h2>
                                <p class="leading-19">129405960495</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-6">
                            <Image src={Dana} preview={false} width="80px" className="object-cover flex shrink-0" alt="logo"/>
                            <div class="flex flex-col gap-1">
                                <h2 class="leading-19 tracking-05">Umah Repair Corp</h2>
                                <p class="leading-19">129405960495</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-6">
                            <Image src={Gopay} preview={false} width="80px" className="object-cover flex shrink-0" alt="logo"/>
                            <div class="flex flex-col gap-1">
                                <h2 class="leading-19 tracking-05">Umah Repair Corp</h2>
                                <p class="leading-19">129405960495</p>
                            </div>
                        </div>
                        <hr class="border-black opacity-10"/>

                        <Form layout="vertical" requiredMark={true} form={form}>
                            <label id="upload-proof" class="flex flex-col gap-1 font-['Poppins']">
                                <h2 class="font-semibold text-lg text-black mb-2">Bukti Transfer</h2>
                                <div class="relative w-full rounded-xl border border-[#BFBFBF] py-4 px-3 bg-white">
                                    <Dragger {...props}>
                                        <p className="ant-upload-drag-icon">
                                            <InboxOutlined />
                                        </p>
                                        <h2 className="ant-upload-text">Upload bukti transfer</h2>
                                        <p className="ant-upload-hint">
                                            Klik atau seret file ke area ini untuk mengunggah
                                        </p>
                                    </Dragger>
                                </div>
                            </label>
                            <button type="submit" onClick={() => next()} class="font-[Inter] w-full mt-7 rounded-full py-3 px-6 bg-[#606DE5] font-semibold leading-19 tracking-05 text-white text-center">Konfirmasi</button>
                        </Form>
                    </div>
                </div>
            </div>
        )}

        {(current == 2) && (
            <div class="relative flex flex-col items-center w-full max-w-[645px] text-center rounded-3xl p-8 py-[85px] gap-6 bg-white mx-auto -mt-40">
                
                <div class="flex flex-col items-center gap-4">
                    <h1 class="text-[32px] leading-10 tracking-05">Pesanan Berhasil!</h1>
                    <p class="text-xl leading-8 tracking-[1px] opacity-60">
                        Kami akan melakukan konfirmasi pembayaran <br/>
                        Mohon tunggu 1-5 menit
                    </p>
                </div>
                <div class="w-fit flex items-center rounded-2xl py-4 px-8 gap-4 bg-[#D0EEFF]">
                    
                    <h2 class="text-xl leading-[34px] tracking-05">No Pesanan:<span class="ml-2 text-[#835DFE]">TIX721637</span></h2>
                </div>
                <a href="/" class="w-fit rounded-full py-3 px-6 bg-[#606DE5] font-semibold leading-19 tracking-05 text-white text-center">Kembali ke Beranda</a>
            </div>
        )}

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
}

export default UserTransaksi;