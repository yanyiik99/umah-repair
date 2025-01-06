import { BankFilled, CreditCardOutlined, HomeOutlined, UserAddOutlined, InboxOutlined, PlusOutlined, UserOutlined, ArrowRightOutlined, InfoCircleFilled, InfoCircleOutlined } from "@ant-design/icons";
import { Breadcrumb, Card, Col, Flex, Row, Steps, Button, message,  Select, Image,Typography, Collapse, Form, Input, DatePicker, Upload, Result, Divider, Space, Modal, Tooltip  } from "antd";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { formatCurrency, showReadmore } from "../../utils/ui";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
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
import { AuthContextMember } from "../../providers/MemberProvider";

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
    const navigate = useNavigate();
    
    const { isLoggedInMember } = useContext(AuthContextMember);
    if(!isLoggedInMember){
        return <Navigate to="/auth/login" replace />
    }
    console.log("MemberProvider -> isLoggedInMember", isLoggedInMember);
    
    const [current, setCurrent] = useState(0);
    const [expanded, setExpanded] = useState(false);
    const [form] = Form.useForm();
    const location = useLocation();
    const [alamat, setAlamat] = useState(['Taman Wira Sambangan Blok Cempaka I No. 4']);
    const [selectedAlamat, setSelectedAlamat] = useState(null);
    const [selectedDate, setSelectedDate] = useState(false);
    const [name, setName] = useState('');
    const inputRef = useRef(null);
    const [arrow, setArrow] = useState('Show');
    const [dataJasa, setDataJasa] = useState(location.state);
    const tax = dataJasa?.harga * 0.12;

    const [dataCustomer, setDataCustomer] = useState({});
    
    useEffect(() => {
        console.log(dataJasa);

    },[dataCustomer]);

    const next = () => {
      setCurrent(current + 1);
    };

    const prev = () => {
      setCurrent(current - 1);
    };
    
    const handleTempSaveDataCustomer = () => {
        let namapenerima = form.getFieldValue("namapenerima");
        let notlpn = form.getFieldValue("notlpn");
        let catatan = form.getFieldValue("catatan");

        setDataCustomer({
            namapenerima: namapenerima,
            notlpn: notlpn,
            catatan: catatan,
            alamat: selectedAlamat,
            jadwal: selectedDate
        })

        setCurrent(current + 1);

    }

    
    const onSelectDate = (date, dateString) => {
        setSelectedDate(dateString);
    }

  
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
      disabled: true
    }))
    
    const onNameChange = (event) => {
        setName(event.target.value);
    };

    const onChangeSteps = (value) => {
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

        <section id="features" className="relative w-full max-w-[1280px] h-[280px] mx-auto px-10 mt-32">
          <div className="flex items-center justify-center w-full gap-16 bg-white rounded-2xl p-5">         
                <Steps 
                    current={current} 
                    onChange={onChangeSteps} 
                    items={items} 
                    style={{ fontFamily: 'Inter', margin: '10px' }}
                />
          </div>
        </section>

        { (current == 0) && (
            <div id="pesanan" className="relative flex w-full max-w-[1280px] gap-6 mx-auto px-10 -mt-40">
                <div className="flex flex-col gap-6 w-full max-w-[820px] shrink-0">
                    <div id="account" className="flex flex-col w-full rounded-3xl p-8 gap-6 bg-white">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl leading-6 tracking-05">Detail Penerima Layanan</h2>
                            <p className="text-sm leading-16 tracking-03 opacity-60">Isi data dan pastikan data sudah benar sebelum melanjutkan pembayaran</p>
                        </div>
                        <hr className="border-black opacity-10"/>

                        <Form layout="vertical" requiredMark={true} form={form}>
                            <Form.Item
                                name="namapenerima"
                                rules={[
                                    {required: true, message: "Nama Penerima Wajib Diisi"}
                                ]}
                            >
                                <label className="group flex items-center font-[Inter]">
                                    <h2 className="text-md flex w-[162px] shrink-0 leading-19 tracking-05"> 
                                        <span className="text-red-500 mr-1">*</span> Nama Lengkap
                                    </h2>
                                    <Input placeholder="Masukkan nama penerima layanan" className="font-[Inter] focus:border-none focus:outline-none outline-none flex w-full rounded-xl px-3 py-4 border border-[#BFBFBF] bg-white text-sm leading-[22px] tracking-03 placeholder:text-[#BFBFBF] transition-all duration-300 group-focus-within:border-black"/>
                                </label>
                            </Form.Item>

                            <Form.Item
                                name="notlpn"
                                rules={[
                                    {required: true, message: "Nomor Telepon Wajib Diisi"}
                                ]}
                            >
                                <label className="group flex items-center font-[Inter]">
                                    <h2 className="text-md flex w-[162px] shrink-0 leading-19 tracking-05"> 
                                        <span className="text-red-500 mr-1">*</span> No Telepon
                                    </h2>
                                    <Input placeholder="Masukkan nomor penerima layanan" className="font-[Inter] focus:border-none focus:outline-none outline-none flex w-full rounded-xl px-3 py-4 border border-[#BFBFBF] bg-white text-sm leading-[22px] tracking-03 placeholder:text-[#BFBFBF] transition-all duration-300 group-focus-within:border-black"/>
                                </label>
                            </Form.Item>

                            <Form.Item
                                name="alamat"
                                rules={[
                                    {required: false, message: "Alamat/Lokasi Wajib Diisi"}
                                ]}
                            >
                                <label className="group flex items-center font-[Inter]">
                                    <h2 className="text-md flex w-[162px] shrink-0 leading-19 tracking-05"> 
                                        <span className="text-red-500 mr-1">*</span> Alamat
                                    </h2>
                                    <Select 
                                        className="font-[Inter] focus:border-none focus:outline-none outline-none flex w-full rounded-xl border-[#BFBFBF] bg-white text-sm leading-[22px] tracking-03 placeholder:text-[#BFBFBF] transition-all duration-300 group-focus-within:border-black"
                                        style={{ fontFamily: 'Inter' }}
                                        size="large"
                                        placeholder="Masukan alamat atau lokasi"
                                        name="alamat"
                                        dropdownClassName="custom-dropdown"
                                        options={alamat.map((item) => ({
                                            label: item,
                                            value: item,
                                        }))}
                                        onChange={(value) => {
                                            setSelectedAlamat(value);
                                        }}
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
                                        
                                    />
                                </label>
                            </Form.Item>

                            <Form.Item
                                name="jadwal"
                                rules={[
                                    {required: false, message: "Jadwal Wajib Diisi"}
                                ]}
                            >
                                <label className="group flex items-center font-[Inter]">
                                    <h2 className="text-md flex w-[162px] shrink-0 leading-19 tracking-05"> 
                                        <span className="text-red-500 mr-1">*</span> Jadwal Layanan
                                    </h2>
                                    <DatePicker 
                                        showTime 
                                        placeholder="Masukkan jadwal layanan" 
                                        onChange={onSelectDate}
                                        className="font-[Inter] focus:border-none focus:outline-none outline-none flex w-full rounded-xl px-3 py-4 border border-[#BFBFBF] bg-white text-sm leading-[22px] tracking-03 placeholder:text-[#BFBFBF] transition-all duration-300 group-focus-within:border-black"/>
                                </label>
                            </Form.Item>

                            <Form.Item
                                name="catatan"
                            >
                                <label className="group flex items-center font-[Inter]">
                                    <h2 className="text-md flex w-[162px] shrink-0 leading-19 tracking-05"> 
                                        Catatan
                                    </h2>
                                    <Input.TextArea rows={4} className="font-[Inter] focus:border-none focus:outline-none outline-none flex w-full rounded-xl px-3 py-4 border border-[#BFBFBF] bg-white text-sm leading-[22px] tracking-03 placeholder:text-[#BFBFBF] transition-all duration-300 group-focus-within:border-black" placeholder="Beri catatan untuk mitra kami"/>
                                </label>                            
                            </Form.Item>
                        </Form>
                    </div>
                </div>

                <div className="flex flex-col gap-6 w-full">
                    <div className="flex flex-col w-full rounded-3xl p-8 gap-6 bg-white">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl leading-6 tracking-05">Detail Transaksi</h2>
                            <p className="text-sm leading-16 tracking-03 opacity-60">Cek kembali tagihan layanan anda</p>
                        </div>
                        <hr className="border-black opacity-10"/>
                        <div className="flex items-center justify-between">
                            <h2 className="leading-19 tracking-05">Subtotal</h2>
                            <p className="leading-19">Rp {formatCurrency(dataJasa?.harga)}</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <h2 className="leading-19 tracking-05">Promo</h2>
                            <p className="leading-19 tracking-05 text-[#EC0307]">-Rp {formatCurrency((Number(dataJasa?.harga) - Number(dataJasa?.hargaPromo)).toString())}</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <h2 className="leading-19 tracking-05 flex">
                                Tax 12%
                                <Tooltip className="ms-2" placement="top" title="Berdasarkan Regulasi Pemerintah UU 12 No.12 Tahun 2024" arrow={mergedArrow}>
                                    <InfoCircleOutlined/>
                                </Tooltip>
                            </h2>
                            <p className="leading-19">Rp {formatCurrency(tax.toString())}</p>
                        </div>
                        <hr className="border-black border-dashed"/>
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl leading-6 tracking-05">Total</h2>
                            <h2 className="text-xl leading-6 tracking-05">
                                Rp  {   
                                        (dataJasa?.hargaPromo != null && dataJasa?.hargaPromo != undefined) ?
                                            formatCurrency((Number(dataJasa?.hargaPromo) + tax).toString()) : 
                                            formatCurrency((Number(dataJasa?.harga) + tax).toString())

                                    }
                            </h2>
                        </div>
                        <button onClick={() => {
                            form
                            .validateFields()
                            .then(handleTempSaveDataCustomer)
                            .catch((err) => {
                                console.log(err);
                            })
                        }} type="submit" className="rounded-full py-3 px-6 bg-[#606DE5] font-semibold leading-19 tracking-05 text-white text-center">Bayar</button>

                    </div>
                </div>
            </div>
        )}
        
        {(current == 1) && (
            <div id="pembayaran" className="relative flex w-full max-w-[1280px] gap-6 mx-auto px-10 -mt-40">
                <div className="flex flex-col gap-6 w-full max-w-[820px] shrink-0">
                    <div id="account" className="flex flex-col w-full rounded-3xl p-8 gap-6 bg-white">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl leading-6 tracking-05">Detail Penerima Layanan</h2>
                            <p className="text-sm leading-16 tracking-03 opacity-60">Pastikan data sudah benar sebelum melakukan pembayaran</p>
                        </div>
                        <hr className="border-black opacity-10"/>
                        <div className="group flex items-center justify-between">
                            <h2 className="flex w-[162px] shrink-0 leading-19 tracking-05">Nama Lengkap</h2>
                            <p className="leading-19 tracking-05">{dataCustomer.namapenerima}</p>
                        </div>
                        <div className="group flex items-center justify-between">
                            <h2 className="flex w-[162px] shrink-0 leading-19 tracking-05">Nomor Telepon</h2>
                            <p className="leading-19 tracking-05">{dataCustomer.notlpn}</p>
                        </div>
                        <div className="group flex items-center justify-between">
                            <h2 className="flex w-[162px] shrink-0 leading-19 tracking-05">Alamat</h2>
                            <p className="leading-19 tracking-05">{dataCustomer.alamat}</p>
                        </div>
                        <div className="group flex items-center justify-between">
                            <h2 className="flex w-[162px] shrink-0 leading-19 tracking-05">Jadwal</h2>
                            <p className="leading-19 tracking-05">{dataCustomer.jadwal}</p>
                        </div>
                        <div className="group flex items-center justify-between">
                            <h2 className="flex w-[162px] shrink-0 leading-19 tracking-05">Catatan</h2>
                            <p className="leading-19 tracking-05">{dataCustomer.catatan}</p>
                        </div>
                    </div>

                    <div id="booking-items" className="flex flex-col w-full rounded-3xl p-8 gap-6 bg-white">
                        {/* <div className="flex flex-col gap-2">
                            <h2 className="text-xl leading-6 tracking-05">
                                No Pesanan : <span className="text-[#606DE5]">10294</span>
                            </h2>
                        </div> */}
                        <div className="items flex flex-nowrap gap-4 w-full">
                            <div className="flex flex-col gap-2 w-full">
                                <div className="flex justify-between">
                                    <h2 className="leading-19 tracking-05">{dataJasa.nama}</h2>
                                </div>
                                <p className="text-sm leading-16 tracking-03 opacity-60">{dataJasa.kategori} - All Benefits Included</p>
                            </div>
                        </div>
                        <div className="group flex items-center justify-between">
                            <h2 className="flex w-[162px] shrink-0 leading-19 tracking-05">Subtotal</h2>
                            <p className="leading-19 tracking-05">Rp {formatCurrency((Number(dataJasa?.harga) + tax).toString())}</p>
                        </div>
                        <div className="group flex items-center justify-between">
                            <h2 className="flex w-[162px] shrink-0 leading-19 tracking-05">Promo Code</h2>
                            <p className="leading-19 tracking-05 text-[#EC0307]">-Rp {formatCurrency((Number(dataJasa?.harga) - Number(dataJasa?.hargaPromo)).toString())}</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <h2 className="leading-19 tracking-05 flex">
                                Tax 12%
                                <Tooltip className="ms-2" placement="top" title="Berdasarkan Regulasi Pemerintah UU 12 No.12 Tahun 2024" arrow={mergedArrow}>
                                    <InfoCircleOutlined/>
                                </Tooltip>
                            </h2>
                            <p className="leading-19">Rp {formatCurrency(tax.toString())}</p>
                        </div>
                        <hr className="border-black border-dashed my-2"/>
                        <div className=" w-full flex justify-between items-center rounded-2xl py-4 px-8 bg-[#D0EEFF]">
                            <h2 className="text-xl leading-[43px] tracking-05">Total Payment</h2>
                            <h2 className="text-xl leading-[43px] tracking-05 text-right">
                                Rp {
                                      (dataJasa?.hargaPromo != null && dataJasa?.hargaPromo != undefined) ?
                                      formatCurrency((Number(dataJasa?.hargaPromo) + tax).toString()) : 
                                      formatCurrency((Number(dataJasa?.harga) + tax).toString())
                                }
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6 w-full">
                    <div className="flex flex-col w-full rounded-3xl p-8 gap-6 bg-white">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl leading-6 tracking-05">Transfer ke</h2>
                            <p className="text-sm leading-16 tracking-03 opacity-60">Pilih metode pembayaran di bawah</p>
                        </div>
                        <hr className="border-black opacity-10"/>
                        <div className="flex items-center gap-6">
                            <Image src={Bca} preview={false} width="80px" className="object-cover flex shrink-0" alt="logo"/>
                            <div className="flex flex-col gap-1">
                                <h2 className="leading-19 tracking-05">Umah Repair Corp</h2>
                                <p className="leading-19">129405960495</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <Image src={Bni} preview={false} width="80px" className="object-cover flex shrink-0" alt="logo"/>
                            <div className="flex flex-col gap-1">
                                <h2 className="leading-19 tracking-05">Umah Repair Corp</h2>
                                <p className="leading-19">129405960495</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <Image src={Dana} preview={false} width="80px" className="object-cover flex shrink-0" alt="logo"/>
                            <div className="flex flex-col gap-1">
                                <h2 className="leading-19 tracking-05">Umah Repair Corp</h2>
                                <p className="leading-19">129405960495</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <Image src={Gopay} preview={false} width="80px" className="object-cover flex shrink-0" alt="logo"/>
                            <div className="flex flex-col gap-1">
                                <h2 className="leading-19 tracking-05">Umah Repair Corp</h2>
                                <p className="leading-19">129405960495</p>
                            </div>
                        </div>
                        <hr className="border-black opacity-10"/>

                        <Form layout="vertical" requiredMark={true} form={form}>
                            <label id="upload-proof" className="flex flex-col gap-1 font-['Poppins']">
                                <h2 className="font-semibold text-lg text-black mb-2">Bukti Transfer</h2>
                                <div className="relative w-full rounded-xl border border-[#BFBFBF] py-4 px-3 bg-white">
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
                            <button type="submit" onClick={() => next()} className="font-[Inter] w-full mt-7 rounded-full py-3 px-6 bg-[#606DE5] font-semibold leading-19 tracking-05 text-white text-center">Konfirmasi</button>
                        </Form>
                    </div>
                </div>
            </div>
        )}

        {(current == 2) && (
            <div className="relative flex flex-col items-center w-full max-w-[645px] text-center rounded-3xl p-8 py-[85px] gap-6 bg-white mx-auto -mt-40">
                
                <div className="flex flex-col items-center gap-4">
                    <h1 className="text-[32px] leading-10 tracking-05">Pesanan Berhasil!</h1>
                    <p className="text-xl leading-8 tracking-[1px] opacity-60">
                        Kami akan melakukan konfirmasi pembayaran <br/>
                        Mohon tunggu 1-5 menit
                    </p>
                </div>
                <div className="w-fit flex items-center rounded-2xl py-4 px-8 gap-4 bg-[#D0EEFF]">
                    
                    <h2 className="text-xl leading-[34px] tracking-05">No Pesanan:<span className="ml-2 text-[#835DFE]">TIX721637</span></h2>
                </div>
                <a href="/" className="w-fit rounded-full py-3 px-6 bg-[#606DE5] font-semibold leading-19 tracking-05 text-white text-center">Kembali ke Beranda</a>
            </div>
        )}

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
}

export default UserTransaksi;