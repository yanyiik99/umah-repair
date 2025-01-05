import React, { useState } from 'react';
import {
    AppstoreAddOutlined,
    AppstoreOutlined,
    DashboardFilled,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserAddOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Table } from 'antd';
import { NavLink } from 'react-router-dom';
import Sidebar from '../../Layout/Sidebar';

const { Header, Sider } = Layout;

const columns = [
  {
    title: 'No',
    dataIndex: 'no',
    key: 'no',
  },
  {
    title: 'Nama Member',
    dataIndex: 'namaMember',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
{
    title: 'No Telepon',
    dataIndex: 'noTelp',
    key: 'noTelp'
  },
  {
    title: 'Alamat',
    dataIndex: 'alamat',
    key: 'alamat',
  },
{
    title: 'Desa',
    dataIndex: 'desa',
    key: 'desa'
  },
 {
    title: 'Kabupaten',
    dataIndex: 'kabupaten',
    key: 'kabupaten'
  },
  {  
    title: 'Aksi',
    dataIndex: 'aksi',
    key: 'aksi',
    render: () => <a href="#" className="bg-red-400 px-5 py-1 rounded-full text-white">Delete</a>
  },
];

const data = [
  {
    key: '1',
    no: '1',
    namaMember: 'Ari Pramana Putra',
    email: 'Wahyu Sucipta',
    noTelp: '081 234 567 890',
    alamat: 'Jl. Raya Mengwitani No. 59, Badung',
    desa: 'Mengwi',
    kabupaten: 'Badung'
  },
  {
    key: '2',
    no: '1',
    namaMember: 'Ari Pramana Putra',
    email: 'ari.pramana@gmail.com',
    noTelp: '081 234 567 890',
    alamat: 'Jl. Raya Mengwitani No. 59, Badung',
    desa: 'Mengwi',
    kabupaten: 'Badung'
  },
  {
    key: '3',
    no: '1',
    namaMember: 'Ari Pramana Putra',
    email: 'ari.pramana@gmail.com',
    noTelp: '081 234 567 890',
    alamat: 'Jl. Raya Mengwitani No. 59, Badung',
    desa: 'Mengwi',
    kabupaten: 'Badung'
  },
  {
    key: '4',
    no: '1',
    namaMember: 'Ari Pramana Putra',
    email: 'ari.pramana@gmail.com',
    noTelp: '081 234 567 890',
    alamat: 'Jl. Raya Mengwitani No. 59, Badung',
    desa: 'Mengwi',
    kabupaten: 'Badung'
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const MasterMember = () => {

    return (
        <>
        
            <Sidebar />

            <Layout>
                <main id="content" class="relative left-24 w-full max-w-[1330px] gap-6 mx-auto px-10 mt-5">
                    <section id='bg-title' className='flex flex-col gap-6 w-full max-w-[1440px] flex-1 bg-white rounded-2xl p-8 mb-5'>
                        <div className="title-transaksi">
                            <h3 class="text-xl leading-6 tracking-05">Daftar Member</h3>
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
export default MasterMember;