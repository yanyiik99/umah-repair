import React, { useEffect, useState } from 'react';
import { Layout, Table, Flex, Modal, Form, Input, Select} from 'antd';
import Sidebar from '../../Layout/Sidebar';
import { editDataPrivatePut, getData, getDataPrivate, sendDataPrivate } from '../../utils/api';
import { useNotification } from '../../components/NotificationContext/index.jsx';

const { Header, Sider } = Layout;

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

const MasterSkillStaff = () => {

  
  const columns = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
      render: (text, record, index) => index + 1,
    },
    {
      title: 'Skill',
      dataIndex: 'nama_skill',
      key: 'nama_skill'
    },
    {  
      title: 'Aksi',
      dataIndex: 'aksi',
      key: 'aksi',
      render: (text, record) => 
        <div className="action flex gap-3">
            <a onClick={()=>handleModalEdit(record)} className="font-[Inter] hover:text-white bg-[#606DE5] px-5 py-1 rounded-full text-white">Edit</a>
            <a href="#" className="font-[Inter] hover:text-white bg-red-400 px-5 py-1 rounded-full text-white">Delete</a>
        </div>
    },
  ];
    
  const showAlert = useNotification();
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataSkill, setDataSkill] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [idSelected, setIdSelected] = useState(null);

  
  const showModal = () => {      
      setIsModalOpen(true);
  };

  const handleCancelModal = () => {
      setIsModalOpen(false);
      setIsEdit(false);
      setIdSelected(null);
      form.resetFields();
  };

  const getDataSkill = () => {
    getDataPrivate("/api/v1/staff/read_skillstaff")
      .then((ress)=>{
        if(ress?.datas){
          setDataSkill(ress?.datas)
        }else{
          showAlert('error', 'Failed', 'Data is Empty!')
        }
      }).catch((err)=>{
        console.log(err);
      })
  }





  const handleSubmitSkill = () => {
    let skill = form.getFieldValue("skill");

    let formData = new FormData();
    formData.append("nama_skill", skill);

    let url = isEdit ? `/api/v1/staff/edit_skill/${idSelected}` : "/api/v1/staff/create_skill";

    if(isEdit){
      editDataPrivatePut(url, formData)
        .then((ress)=>{
          if(ress?.status == "OK"){
            showAlert('success', 'Success', ress?.message)
            setIsEdit(false);
            setIdSelected(null);
            setIsModalOpen(false);
            getDataSkill();
            form.resetFields();
          }else{
            showAlert('error', 'Failed', ress?.message)
          }
        }).catch((err)=>{
          console.log(err);
        })
    }else{
      sendDataPrivate(url, formData)
        .then((ress)=>{
          setIsEdit(false);
          setIdSelected(null);
          setIsModalOpen(false);
          form.resetFields();
          if(ress?.status == "OK"){
            showAlert('success', 'Success', ress?.message)
            getDataSkill();
          }else{
            showAlert('error', 'Failed', ress?.message)
          }
        }).catch((err)=>{
          console.log(err);
        })
    }
  };

  const handleModalEdit = (value) => {
    setIsModalOpen(true);
    setIsEdit(true);
    setIdSelected(value?.id_skill);
    form.setFieldValue("skill", value?.nama_skill);
  }

  useEffect(()=>{
    getDataSkill();
  },[])

  return (
      <>
        <Modal 
          width={800}
          title={'Tambah Skill Staff'}
          open={isModalOpen} 
          onCancel={handleCancelModal}
          onOk={handleSubmitSkill}
          okText={ isEdit ? "Edit" : "Tambah"}
        >
            <Form 
                layout="vertical"
                requiredMark={true}
                form={form}
            >
                <Flex className='mt-8' gap={"small"} align="flex-start" horizontal>
                    <label class="group flex flex-col font-[Inter] w-full">
                        <h2 class="text-md flex w-[162px] shrink-0 leading-19 tracking-05"> 
                            <span class="text-red-500 mr-1">*</span> Nama Skill
                        </h2>
                        <Form.Item                                 
                            name="skill" 
                            rules={[
                                { required: true, message: "Skill Wajib Diisi" }
                            ]}
                            className="w-full"
                        >
                            <Input placeholder="Skill Staff" className="mt-2 font-[Inter] w-full"/>
                        </Form.Item>
                    </label>
                </Flex>
            </Form>
        </Modal>

        <Layout>
            <main id="content" class="relative left-4 w-full max-w-[1330px] gap-6 mx-auto px-10 mt-5">
                <section id='bg-title' className='flex flex-row justify-between gap-6 w-full max-w-[1440px] flex-1 bg-white rounded-2xl p-8 mb-5'>
                    <div className="title-transaksi">
                        <h3 class="text-xl leading-6 tracking-05">Daftar Skill Staff</h3>
                        <p class="text-sm mt-1 opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <button onClick={showModal} className="bg-[#606DE5] px-5 py-3 font-[Inter] rounded-full text-white hover:text-white">
                      Tambah Skill Staff
                    </button>
                </section>
                <section id="bg-content" class="flex flex-col gap-6 w-full max-w-[1440px] flex-1 bg-white rounded-2xl p-8">
                    <Table 
                      className="mt-5 font-[Inter]" 
                      columns={columns} 
                      dataSource={dataSkill} 
                      onChange={onChange} 
                    />
                </section>  
            </main>
        </Layout>
    </>
  );
};
export default MasterSkillStaff;