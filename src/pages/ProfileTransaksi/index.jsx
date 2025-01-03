import { useState, useEffect } from "react";
import { Table, Form, Input, notification, Image, message, Upload} from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, EditOutlined, LoadingOutlined, EnvironmentOutlined, PlusOutlined} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

import './index.css';
import SideProfile from "../../Layout/SideProfile";
import LogoBlack from '../../assets/logo-bl.png';

const columns = [
  {
    title: 'No Transaksi',
    dataIndex: 'noTransaksi',
    key: 'noTransaksi',
  },
  {
    title: 'Nama Layanan',
    dataIndex: 'namaLayanan',
  },
  {
    title: 'Nama Penerima',
    dataIndex: 'namaPenerimaLayanan',
    key: 'namaPenerimaLayanan',
  },
  {
    title: 'Jadwal',
    dataIndex: 'jadwal',
    key: 'jadwal',
    sorter: (a, b) => a.jadwal - b.jadwal,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    filters: [
      {
        text: 'Selesai',
        value: 'Selesai',
      },
      {
        text: 'Menunggu Verifikasi',
        value: 'Menunggu Verikasi',
      },
      {
        text: 'Belum Selesai',
        value: 'Belum Selesai',
      },
    ],
    onFilter: (value, record) => record.status.startsWith(value),
    filterSearch: true,
  },
  {  
    title: 'Aksi',
    dataIndex: 'aksi',
    key: 'aksi',
    render: () => <a href="#" className="bg-[#606DE5] px-5 py-1 rounded-full text-white">View</a>
  },
];
const data = [
  {
    key: '1',
    noTransaksi: 'TRX12345',
    namaLayanan: 'Jasa Pembersih Sofa',
    namaPenerimaLayanan: 'Wahyu Sucipta',
    jadwal: '27-12-2024 08:00:00',
    status: 'Selesai'
  },
  {
    key: '2',
    noTransaksi: 'TRX12345',
    namaLayanan: 'Jasa Pembersih Sofa',
    namaPenerimaLayanan: 'Wahyu Sucipta',
    jadwal: '27-12-2024 08:00:00',
    status: 'Selesai'
  },
  {
    key: '3',
    noTransaksi: 'TRX12345',
    namaLayanan: 'Jasa Pembersih Sofa',
    namaPenerimaLayanan: 'Wahyu Sucipta',
    jadwal: '27-12-2024 08:00:00',
    status: 'Selesai'
  },
  {
    key: '4',
    noTransaksi: 'TRX12345',
    namaLayanan: 'Jasa Pembersih Sofa',
    namaPenerimaLayanan: 'Wahyu Sucipta',
    jadwal: '27-12-2024 08:00:00',
    status: 'Selesai'
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};


const ProfileTransaksi = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();

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
                <aside class="flex flex-col gap-6">    
                    <SideProfile/>
                </aside>   

                <section id="bg-content" class="flex flex-col gap-6 w-full max-w-[1440px] flex-1 bg-white rounded-3xl p-8">
                    <div className="title-transaksi">
                        <h3 class="text-xl leading-6 tracking-05">Riwayat Transaksi</h3>
                        <p class="text-sm mt-1 opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <Table className="mt-5 font-[Inter]" columns={columns} dataSource={data} onChange={onChange} />
                </section>  
            </main>

        </div>
    )
}

export default ProfileTransaksi;