import React, { useState } from 'react';
import { Layout, Table} from 'antd';
import { NavLink } from 'react-router-dom';
import Sidebar from '../../Layout/Sidebar';

const { Header, Sider } = Layout;

const columns = [
  {
    title: 'No',
    dataIndex: 'no',
    key: 'no'
  },
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
    title: 'Diskon',
    dataIndex: 'diskon',
    key: 'diskon',
  },
  {
    title: 'Jadwal',
    dataIndex: 'jadwal',
    key: 'jadwal',
    sorter: (a, b) => a.jadwal - b.jadwal,
  },
  {
    title: 'Tgl Transaksi',
    dataIndex: 'tglTransaksi',
    key: 'tglTransaksi',
    sorter: (a, b) => a.tglTransaksi - b.tglTransaksi,
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
    title: 'Bukti Bayar',
    dataIndex: 'buktiPembayaran',
    key: 'buktiPembayaran',
  },
  {  
    title: 'Aksi',
    dataIndex: 'aksi',
    key: 'aksi',
    render: () => 
      <div className="action flex gap-3">
          <a href="#" className="font-[Inter] hover:text-white bg-red-400 px-5 py-1 rounded-full text-white">Delete</a>
      </div>
  },
];

const data = [
  {
    key: '1',
    no: '1',
    noTransaksi: 'TRX12345',
    namaLayanan: 'Jasa Pembersih Sofa',
    namaPenerimaLayanan: 'Wahyu Sucipta',
    diskon: '-',
    jadwal: '27-12-2024 08:00:00',
    tglTransaksi: '05-01-2025',
    status: 'Selesai'
  },
  {
    key: '2',
    no: '1',
    noTransaksi: 'TRX12345',
    namaLayanan: 'Jasa Pembersih Sofa',
    namaPenerimaLayanan: 'Wahyu Sucipta',
    diskon: '-',
    jadwal: '27-12-2024 08:00:00',
    tglTransaksi: '05-01-2025',
    status: 'Selesai'
  },
  {
    key: '3',
    no: '1',
    noTransaksi: 'TRX12345',
    namaLayanan: 'Jasa Pembersih Sofa',
    namaPenerimaLayanan: 'Wahyu Sucipta',
    diskon: '-',
    jadwal: '27-12-2024 08:00:00',
    tglTransaksi: '05-01-2025',
    status: 'Selesai'
  },
  {
    key: '4',
    no: '1',
    noTransaksi: 'TRX12345',
    namaLayanan: 'Jasa Pembersih Sofa',
    namaPenerimaLayanan: 'Wahyu Sucipta',
    diskon: '-',
    jadwal: '27-12-2024 08:00:00',
    tglTransaksi: '05-01-2025',
    status: 'Selesai'
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const MasterTransaksi = () => {

    return (
        <>
        
            <Sidebar />

            <Layout>
                <main id="content" class="relative left-24 w-full max-w-[1330px] gap-6 mx-auto px-10 mt-5">
                    <section id='bg-title' className='flex flex-row justify-between gap-6 w-full max-w-[1440px] flex-1 bg-white rounded-2xl p-8 mb-5'>
                        <div className="title-transaksi">
                            <h3 class="text-xl leading-6 tracking-05">Daftar Transaksi</h3>
                            <p class="text-sm mt-1 opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>

                    </section>
                    <section id="bg-content" class="flex flex-col gap-6 w-full max-w-[1440px] flex-1 bg-white rounded-2xl p-8">
                        <Table className="mt-5 font-[Inter]" columns={columns} dataSource={data} onChange={onChange} />
                    </section>  
                </main>
            </Layout>

        </>
    );
};
export default MasterTransaksi;