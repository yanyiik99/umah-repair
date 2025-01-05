import React, { useState } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { Layout, Table, Flex, Modal, Form, Input, Select, Upload} from 'antd';
import { NavLink } from 'react-router-dom';

import Sidebar from '../../Layout/Sidebar';
import Image from '../../assets/img1.jpg';

const { Header, Sider } = Layout;
const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
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

const columns = [
  {
    title: 'No',
    dataIndex: 'no',
    key: 'no',
  },
  {
    title: 'Nama Layanan',
    dataIndex: 'namaLayanan',
  },
  {
    title: 'Image',
    dataIndex: 'image',
  },
  {
    title: 'Deskripsi',
    dataIndex: 'deskripsi',
    key: 'deskripsi',
  },
  {
    title: 'Kategori',
    dataIndex: 'kategori',
    key: 'kategori',
  },
  {
    title: 'Harga',
    dataIndex: 'harga',
    key: 'harga'
  },
  {
    title: 'Peralatan',
    dataIndex: 'peralatan',
    key: 'peralatan'
  },
  {
    title: 'Estimasi',
    dataIndex: 'estimasi',
    key: 'estimasi'
  },
  {  
    title: 'Aksi',
    dataIndex: 'aksi',
    key: 'aksi',
    render: () => 
      <div className="action flex gap-3">
          <a href="#" className="font-[Inter] hover:text-white bg-[#606DE5] px-5 py-1 rounded-full text-white">Edit</a>
          <a href="#" className="font-[Inter] hover:text-white bg-red-400 px-5 py-1 rounded-full text-white">Delete</a>
      </div>
  },
];

const data = [
  {
    key: '1',
    no: '1',
    namaLayanan: 'Perbaikan Mesin Cuci dan Kulkas',
    image: {Image},
    deskripsi: 'Aman Bersih dari kotoran awet muda',
    kategori: 'Elektronik',
    harga: '15000',
    peralatan: 'Dari Kami',
    estimasi: '5 jam'
  },
  {
    key: '2',
    no: '1',
    namaLayanan: 'Perbaikan Mesin Cuci dan Kulkas',
    image: {Image},
    deskripsi: 'Aman Bersih dari kotoran awet muda',
    kategori: 'Elektronik',
    harga: '15000',
    peralatan: 'Dari Kami',
    estimasi: '5 jam'
  },
  {
    key: '3',
    no: '1',
    namaLayanan: 'Perbaikan Mesin Cuci dan Kulkas',
    image: {Image},
    deskripsi: 'Aman Bersih dari kotoran awet muda',
    kategori: 'Elektronik',
    harga: '15000',
    peralatan: 'Dari Kami',
    estimasi: '5 jam'
  },
  {
    key: '4',
    no: '1',
    namaLayanan: 'Perbaikan Mesin Cuci dan Kulkas',
    image: {Image},
    deskripsi: 'Aman Bersih dari kotoran awet muda',
    kategori: 'Elektronik',
    harga: '15000',
    peralatan: 'Dari Kami',
    estimasi: '5 jam'
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const MasterLayanan = () => {
    
    const [form] = Form.useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {      
        setIsModalOpen(true);
    };
  
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = () => {
        form.validateFields().then((values) => {            
            setProfile(values);
            setIsModalOpen(false);
            if(setProfile){
                showAlert(
                    "success", "Berhasil", "Data Berhasil Diupdate"
                );
            } else {
                showAlert("error", "Gagal", "Data Tidak Berhasil Diupdate");
            }
        }).catch((e) => {
            console.log('Validation Failed:', e);
            showAlert("error", "Gagal", "Error Update");
        });
    };

    return (
        <>
        
            <Sidebar />

            <Modal 
              width={800}
              title={'Tambah Layanan'}
              open={isModalOpen} 
              onCancel={handleCancel}
              onOk={handleSubmit}
              className='-mt-14'
            >
                <Form 
                    layout="vertical"
                    requiredMark={true}
                    form={form}
                >

                    <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined/>
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">
                        Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                        banned files.
                        </p>
                    </Dragger>

                    <Flex className='mt-8' gap={"small"} align="flex-start" horizontal>
                        <label class="group flex flex-col font-[Inter] w-full">
                            <h2 class="text-md flex w-[162px] shrink-0 leading-19 tracking-05"> 
                                <span class="text-red-500 mr-1">*</span> Nama Layanan
                            </h2>
                            <Form.Item                                 
                                name="namaStaff" 
                                rules={[
                                    { required: true, message: "Nama Name Wajib Diisi" }
                                ]}
                                className="w-full"
                            >
                                <Input placeholder="Nama Staff" className="mt-2 font-[Inter] w-full"/>
                            </Form.Item>
                        </label>

                        <label class="group flex flex-col font-[Inter] w-full">
                            <h2 class="text-md flex w-[162px] shrink-0 leading-19 tracking-05"> 
                                <span class="text-red-500 mr-1">*</span> Kategori
                            </h2>
                            <Form.Item 
                                name="kategori" 
                                rules={[
                                    { required: true, message: "Kategori Name Wajib Diisi" }
                                ]}
                            >
                                <Select
                                className='mt-2 font-[Inter]'
                                defaultValue="Elektronik"
                                onChange={handleChange}
                                options={[
                                    {
                                    value: 'Elektronik',
                                    label: 'Elektronik',
                                    },
                                    {
                                    value: 'Renovasi',
                                    label: 'Renovasi',
                                    },
                                    {
                                    value: 'Kebersihan',
                                    label: 'Kebersihan',
                                    },
                                    {
                                    value: 'Instalasi',
                                    label: 'Instalasi',
                                    },
                                    {
                                    value: 'Dekorasi',
                                    label: 'Dekorasi',
                                    },
                                    {
                                    value: 'Plumbing dan Air',
                                    label: 'Plumbing dan Air',
                                    },
                                ]}
                                />
                            </Form.Item>
                        </label>
                    </Flex>

                    <label class="group flex flex-col font-[Inter] w-full">
                        <h2 class="text-md flex w-[162px] shrink-0 leading-19 tracking-05"> 
                            <span class="text-red-500 mr-1">*</span> Deskripsi
                        </h2>
                        <Form.Item 
                            name="deskripsi" 
                            rules={[
                            {required: true, message: "Deskripsi Name Wajib Diisi"}
                        ]}>
                            <Input.TextArea rows={3} placeholder="Deskripsi" className="mt-2 font-[Inter] w-full"/>
                        </Form.Item>     
                    </label>      

                    <Flex gap={"small"} align="flex-start" horizontal>
                        <label class="group flex flex-col font-[Inter] w-full">
                            <h2 class="text-md flex w-[162px] shrink-0 leading-19 tracking-05"> 
                                <span class="text-red-500 mr-1">*</span> Harga
                            </h2>
                            <Form.Item                                 
                                name="harga" 
                                rules={[
                                    { required: true, message: "Harg Wajib Diisi" }
                                ]}
                                className="w-full"
                            >
                                <Input placeholder="Harga" className="mt-2 font-[Inter] w-full"/>
                            </Form.Item>
                        </label>

                        <label class="group flex flex-col font-[Inter] w-full">
                            <h2 class="text-md flex w-[162px] shrink-0 leading-19 tracking-05"> 
                                <span class="text-red-500 mr-1">*</span> Estimasi Pengerjaan
                            </h2>
                            <Form.Item                                 
                                name="estimasi" 
                                rules={[
                                    { required: true, message: "Estimasi Pengerjaan Wajib Diisi" }
                                ]}
                                className="w-full"
                            >
                                <Input placeholder="Estimasi Pengerjaan" className="mt-2 font-[Inter] w-full"/>
                            </Form.Item>
                        </label>                        

                        <label class="group flex flex-col font-[Inter] w-full">
                            <h2 class="text-md flex w-[162px] shrink-0 leading-19 tracking-05"> 
                                <span class="text-red-500 mr-1">*</span> Peralatan
                            </h2>
                            <Form.Item                                 
                                name="peralatan" 
                                rules={[
                                    { required: true, message: "Peralatan Wajib Diisi" }
                                ]}
                                className="w-full"
                            >
                                <Select
                                className='mt-2 font-[Inter]'
                                defaultValue="Dari Kami"
                                onChange={handleChange}
                                options={[
                                    {
                                    value: 'Dari Kami',
                                    label: 'Dari Kami',
                                    },
                                    {
                                    value: 'Dari Pemesan',
                                    label: 'Dari Pemesan',
                                    }
                                ]}
                                />
                            </Form.Item>
                        </label>
                    </Flex>     

                </Form>
            </Modal>

            <Layout>
                <main id="content" class="relative left-24 w-full max-w-[1330px] gap-6 mx-auto px-10 mt-5">
                    <section id='bg-title' className='flex flex-row justify-between gap-6 w-full max-w-[1440px] flex-1 bg-white rounded-2xl p-8 mb-5'>
                        <div className="title-transaksi">
                            <h3 class="text-xl leading-6 tracking-05">Daftar Layanan</h3>
                            <p class="text-sm mt-1 opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>

                        <button onClick={showModal} className="bg-[#606DE5] px-5 py-3 font-[Inter] rounded-full text-white hover:text-white">Tambah Layanan</button>
                    </section>
                    <section id="bg-content" class="flex flex-col gap-6 w-full max-w-[1440px] flex-1 bg-white rounded-2xl p-8">
                        <Table className="mt-5 font-[Inter]" columns={columns} dataSource={data} onChange={onChange} />
                    </section>  
                </main>
            </Layout>

        </>
    );
};
export default MasterLayanan;