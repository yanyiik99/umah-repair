import React, { useEffect, useState } from 'react';
import { Flex, Layout, Popconfirm, Table, Image } from 'antd';
import Sidebar from '../../Layout/Sidebar';
import { useNotification } from '../../components/NotificationContext/index.jsx';
import { editDataPrivatePut, getDataPrivate, loadImage } from '../../utils/api';
import { EyeFilled } from '@ant-design/icons';

const { Header, Sider } = Layout;


const data = [
  {
    key: '1',
    no: '1',
    namaMember: 'Ari Pramana Putra',
    email: 'Wahyu Sucipta',
    noTelp: '081 234 567 890',
    alamat: 'Jl. Raya Mengwitani No. 59, Badung',
    desa: 'Baha',
    kecamatan: 'Mengwi',
    kabupaten: 'Badung'
  },
  {
    key: '2',
    no: '1',
    namaMember: 'Ari Pramana Putra',
    email: 'ari.pramana@gmail.com',
    noTelp: '081 234 567 890',
    alamat: 'Jl. Raya Mengwitani No. 59, Badung',
    desa: 'Baha',
    kecamatan: 'Mengwi',
    kabupaten: 'Badung'
  },
  {
    key: '3',
    no: '1',
    namaMember: 'Ari Pramana Putra',
    email: 'ari.pramana@gmail.com',
    noTelp: '081 234 567 890',
    alamat: 'Jl. Raya Mengwitani No. 59, Badung',
    desa: 'Baha',
    kecamatan: 'Mengwi',
    kabupaten: 'Badung'
  },
  {
    key: '4',
    no: '1',
    namaMember: 'Ari Pramana Putra',
    email: 'ari.pramana@gmail.com',
    noTelp: '081 234 567 890',
    alamat: 'Jl. Raya Mengwitani No. 59, Badung',
    desa: 'Baha',
    kecamatan: 'Mengwi',
    kabupaten: 'Badung'
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const MasterMember = () => {

  const columns = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
      render: (text, record, index) => index + 1,
    },
    {
      title: 'Nama Member',
      dataIndex: 'nama',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
  {
      title: 'No Telepon',
      dataIndex: 'no_tlpn',
      key: 'no_tlpn'
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
      title: 'Kecamatan',
      dataIndex: 'kecamatan',
      key: 'kecamatan'
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
      render: (text, record) => (
        <>
          <Flex gap={3}>
            <span onClick={() => showPreviewImage(record?.img_member)} className='bg-blue-400 px-2 py-1 rounded-full text-white hover:text-white cursor-pointer'>
              <EyeFilled />
            </span>
            <Popconfirm
              title="apakah anda yakin menghapus member ini?"
              onConfirm={() => handleDeleteMember(record.id_member)}
              okText="Yes"
              cancelText="No"
            >
              <a className="bg-red-400 px-5 py-1 rounded-full text-white hover:text-white">Delete</a>
            </Popconfirm>
          </Flex>
        </>
      )
    },
  ];
  
  const showAlert = useNotification();
  const [dataMember, setDataMember] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [scaleStep, setScaleStep] = useState(0.5);
  const [prevImg, setPrevImg] = useState("");


  const showPreviewImage = (img_member) => {
    setVisible(true)
    setPrevImg(img_member);
  }

  const getDataMember = async () => {
    setIsLoading(true);
    getDataPrivate("/api/v1/member/read_allmember")
      .then((ress) => {
          setIsLoading(false);
          if(ress?.datas){            
            setDataMember(ress?.datas);
          }else{
            showAlert('error', 'Failed', 'Data is Empty!')
          }
      }).catch((err) => {
          setIsLoading(false);
          console.log(err);
      })
  }

  const handleDeleteMember = (id) => {
    editDataPrivatePut(`/api/v1/member/delete_member/${id}`, "yes")
      .then((ress) => {
        showAlert('success', 'Success Delete', ress?.message)
        getDataMember();
      }).catch((err) => {
        showAlert('error', 'Failed', 'Failed to deleted this member')
        console.log(err);
      })
  };
  
  useEffect(()=>{
    getDataMember();
  },[])

  return (
    <>  
   
      {/* <Sidebar /> */}
      
      <Layout >
        <Image
          width={200}
          style={{
            display: 'none',
          }}
          src={loadImage(prevImg)}
          preview={{
            visible,
            scaleStep,
            src: `${loadImage(prevImg)}`,
            onVisibleChange: (value) => {
              setVisible(value);
            },
          }}
        />
        
        <main id="content" className="relative w-full gap-6 mx-auto px-10 mt-5">
          <section id='bg-title' className='flex flex-col gap-6 w-full  flex-1 bg-white rounded-2xl p-8 mb-5'>
            <div className="title-transaksi">
                <h3 className="text-xl leading-6 tracking-05">Daftar Member</h3>
                <p className="text-sm mt-1 opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </section>
          <section id="bg-content" className="flex flex-col gap-6 w-full  flex-1 bg-white rounded-2xl p-8">
            <Table 
              className="mt-5 font-[Inter]" 
              loading={isLoading}
              columns={columns} 
              dataSource={dataMember} 
              onChange={onChange} 
              rowKey="id_member"
              scroll={{
                x: 1000,
                // y: 300,
              }}
            />
          </section>  
        </main>
      </Layout>
      
    </>
  );
};
export default MasterMember;