import React, { useState } from 'react';
import { Layout, Table, Flex, Modal, Form, Input, Select} from 'antd';
import Sidebar from '../../Layout/Sidebar';

const { Header, Sider } = Layout;

const columns = [
  {
    title: 'No',
    dataIndex: 'no',
    key: 'no',
  },
  {
    title: 'Nama Staff',
    dataIndex: 'namaMember',
  },
  {
    title: 'No Telepon',
    dataIndex: 'noTelp',
    key: 'noTelp',
  },
  {
    title: 'Alamat',
    dataIndex: 'alamat',
    key: 'alamat',
  },
  {
    title: 'Skill',
    dataIndex: 'skill',
    key: 'skill'
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
    namaMember: 'Ari Pramana Putra',
    noTelp: '081 234 567 890',
    alamat: 'Jl. Raya Mengwitani No. 59, Badung',
    skill: 'Cleaning Service'
  },
  {
    key: '2',
    no: '1',
    namaMember: 'Ari Pramana Putra',
    noTelp: '081 234 567 890',
    alamat: 'Jl. Raya Mengwitani No. 59, Badung',
    skill: 'Cleaning Service'
  },
  {
    key: '3',
    no: '1',
    namaMember: 'Ari Pramana Putra',
    noTelp: '081 234 567 890',
    alamat: 'Jl. Raya Mengwitani No. 59, Badung',
    skill: 'Cleaning Service'
  },
  {
    key: '4',
    no: '1',
    namaMember: 'Ari Pramana Putra',
    noTelp: '081 234 567 890',
    alamat: 'Jl. Raya Mengwitani No. 59, Badung',
    skill: 'Cleaning Service'
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const MasterStaff = () => {
    
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
          {/* <Sidebar /> */}
          <Modal 
            width={800}
            title={'Tambah Staff'}
            open={isModalOpen} 
            onCancel={handleCancel}
            onOk={handleSubmit}
          >
              <Form 
                  layout="vertical"
                  requiredMark={true}
                  form={form}
              >
                  <Flex className='mt-8' gap={"small"} align="flex-start" horizontal>
                      <label class="group flex flex-col font-[Inter] w-full">
                          <h2 class="text-md flex w-[162px] shrink-0 leading-19 tracking-05"> 
                              <span class="text-red-500 mr-1">*</span> Nama Staff
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
                              <span class="text-red-500 mr-1">*</span> No Telepon
                          </h2>
                          <Form.Item 
                              name="phone" 
                              rules={[
                                  { required: true, message: "Phone Name Wajib Diisi" }
                              ]}
                          >
                              <Input placeholder="Phone" className="mt-2 font-[Inter] w-full"/>
                          </Form.Item>
                      </label>
                  </Flex>

                  <label class="group flex flex-col font-[Inter] w-full">
                      <h2 class="text-md flex w-[162px] shrink-0 leading-19 tracking-05"> 
                          <span class="text-red-500 mr-1">*</span> Skill Staff
                      </h2>
                      <Form.Item 
                          name="email" 
                          rules={[
                              { required: true, message: "Email Name Wajib Diisi" }
                          ]}
                      >
                          <Select
                            defaultValue="lucy"
                            onChange={handleChange}
                            options={[
                              {
                                value: 'Cleaning Service',
                                label: 'Cleaning Service',
                              },
                              {
                                value: 'Service Kulkas',
                                label: 'Service Kulkas',
                              }
                            ]}
                          />
                      </Form.Item>
                  </label>

                  <label class="group flex flex-col font-[Inter] w-full">
                      <h2 class="text-md flex w-[162px] shrink-0 leading-19 tracking-05"> 
                          <span class="text-red-500 mr-1">*</span> Alamat
                      </h2>
                      <Form.Item 
                          name="alamat" 
                          rules={[
                          {required: true, message: "Alamat Name Wajib Diisi"}
                      ]}>
                          <Input.TextArea rows={3} placeholder="Alamat" className="mt-2 font-[Inter] w-full"/>
                      </Form.Item>     
                  </label>           

              </Form>
          </Modal>

          <Layout>
              <main id="content" class="relative left-4 w-full max-w-[1330px] gap-6 mx-auto px-10 mt-5">
                  <section id='bg-title' className='flex flex-row justify-between gap-6 w-full max-w-[1440px] flex-1 bg-white rounded-2xl p-8 mb-5'>
                      <div className="title-transaksi">
                          <h3 class="text-xl leading-6 tracking-05">Daftar Staff</h3>
                          <p class="text-sm mt-1 opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      </div>

                      <button onClick={showModal} className="bg-[#606DE5] px-5 py-3 font-[Inter] rounded-full text-white hover:text-white">Tambah Staff</button>
                  </section>
                  <section id="bg-content" class="flex flex-col gap-6 w-full max-w-[1440px] flex-1 bg-white rounded-2xl p-8">
                      <Table 
                      className="mt-5 font-[Inter]" columns={columns} dataSource={data} onChange={onChange} />
                  </section>  
              </main>
          </Layout>
      </>
    );
};
export default MasterStaff;