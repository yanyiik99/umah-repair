import { useState, useEffect } from "react";
import { Row, Col, Flex, Card, Modal, Form, Input, notification, Image, message, Upload} from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, EditOutlined, LoadingOutlined, EnvironmentOutlined, PlusOutlined} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

import './index.css';
import SideProfile from "../../Layout/SideProfile";
import LogoBlack from '../../assets/logo-bl.png';

import Header from "../../Layout/Header";

const dataProfile = {
    id: 0,
    fullname: "I Gede Wahyu Parama Sucipta",
    email: "wahyuscpta13@gmail.com",
    phone: "+62 896 352 086 86",
    address: "Taman Wira Sambangan Blok Cempaka I No. 4",
    province: "Provinsi Bali",
    regency: "Kabupaten Buleleng",
    district: "Kecamatan Sukasada",
    village: "Desa Sambangan",
};

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

const Profile = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [profile, setProfile] = useState(dataProfile);
    const [isModalPasswordOpen, setIsModalPasswordOpen] = useState(false);

    const showAlert = (status, title, description) => {
        notification[status]({
            message: title,
            description: description
        })
    }

    const showModalPassword = () => {
        setIsModalPasswordOpen(true)
    };

    const handleCancelPassword = () => {
        setIsModalPasswordOpen(false)
    };

    const showModal = () => {
        form.setFieldsValue(profile);
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

    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
        setLoading(true);
        return;
        }
        if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, (url) => {
            setLoading(false);
            setImageUrl(url);
        });
        }
    };
    const uploadButton = (
        <button
        style={{
            border: 0,
            background: 'none',
        }}
        type="button"
        >
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div
            style={{
            marginTop: 8,
            }}
        >
            Upload
        </div>
        </button>
    );

    return (
        <div>
            <Modal 
              width={1000}
              title={'EDIT PROFILE'}
              open={isModalOpen} 
              onCancel={handleCancel}
              onOk={handleSubmit}
            >
                <Form 
                    layout="vertical"
                    requiredMark={true}
                    form={form}
                >
                    <Flex vertical align="center">
                        <Upload
                            name="avatar"
                            listType="picture-circle"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                        >
                            {imageUrl ? (
                            <img
                                src={imageUrl}
                                alt="avatar"
                                style={{
                                width: '100%',
                                }}
                            />
                            ) : (
                            uploadButton
                            )}
                        </Upload>

                        <h3 className="mt-3">Ubah Gambar Avatar</h3>
                    </Flex>

                    <Flex className='mt-8' gap={"small"} align="flex-start" horizontal>
                        <label class="group flex flex-col font-[Inter] w-full">
                            <h2 class="text-md flex w-[162px] shrink-0 leading-19 tracking-05"> 
                                <span class="text-red-500 mr-1">*</span> Nama Lengkap
                            </h2>
                            <Form.Item                                 
                                name="fullname" 
                                rules={[
                                    { required: true, message: "Fullname Name Wajib Diisi" }
                                ]}
                                className="w-full"
                            >
                                <Input placeholder="Fullname" className="mt-2 font-[Inter] w-full"/>
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

                        <label class="group flex flex-col font-[Inter] w-full">
                            <h2 class="text-md flex w-[162px] shrink-0 leading-19 tracking-05"> 
                                <span class="text-red-500 mr-1">*</span> No Telepon
                            </h2>
                            <Form.Item 
                                name="email" 
                                rules={[
                                    { required: true, message: "Email Name Wajib Diisi" }
                                ]}
                            >
                                <Input placeholder="Email" className="mt-2 font-[Inter] w-full"/>
                            </Form.Item>
                        </label>
                    </Flex>

                    <label class="group flex flex-col font-[Inter] w-full">
                        <h2 class="text-md flex w-[162px] shrink-0 leading-19 tracking-05"> 
                            <span class="text-red-500 mr-1">*</span> No Telepon
                        </h2>
                        <Form.Item 
                            name="address" 
                            rules={[
                            {required: true, message: "Address Name Wajib Diisi"}
                        ]}>
                            <Input.TextArea rows={3} placeholder="Address" className="mt-2 font-[Inter] w-full"/>
                        </Form.Item>     
                    </label>           

                </Form>
            </Modal>

            <Modal 
              className="mt-14"
              title={'EDIT PASSWORD'}
              open={isModalPasswordOpen} 
              onCancel={handleCancelPassword}
              onOk={handleSubmit}
            >
                <Form 
                    layout="vertical"
                    requiredMark={true}
                    form={form}
                >

                    <label class="group flex flex-col font-[Inter] w-full mt-5">
                        <h2 class="text-md flex w-[162px] shrink-0 leading-19 tracking-05"> 
                            <span class="text-red-500 mr-1">*</span> Password Lama
                        </h2>
                        <Form.Item 
                            name="passwordLama" 
                            rules={[
                            {required: true, message: "Password Lama Wajib Diisi"}
                            ]}>
                            <Input type="password" placeholder="Password Lama" className="mt-2 font-[Inter] w-full"/>
                        </Form.Item>     
                    </label>  

                    <label class="group flex flex-col font-[Inter] w-full">
                        <h2 class="text-md flex w-[162px] shrink-0 leading-19 tracking-05"> 
                            <span class="text-red-500 mr-1">*</span> Password Baru
                        </h2>
                        <Form.Item 
                            name="passwordBaru" 
                            rules={[
                            {required: true, message: "Password Baru Wajib Diisi"}
                            ]}>
                            <Input type="password" placeholder="Password Baru" className="mt-2 font-[Inter] w-full"/>
                        </Form.Item>     
                    </label>   

                    <label class="group flex flex-col font-[Inter] w-full">
                        <h2 class="text-md flex w-[162px] shrink-0 leading-19 tracking-05 w-full"> 
                            <span class="text-red-500 mr-1">*</span> Konfirmasi Password Baru
                        </h2>
                        <Form.Item 
                            name="konfirmasiPasswordBaru" 
                            rules={[
                            {required: true, message: "Konfirmasi Password Baru Wajib Diisi"}
                            ]}>
                            <Input type="password" placeholder="Konfirmasi Password Baru" className="mt-2 font-[Inter] w-full"/>
                        </Form.Item>     
                    </label>           

                </Form>
            </Modal>

            <Header />

            <main id="content" class="relative flex w-full max-w-[1280px] gap-6 mx-auto px-10 mt-[96px]">
                <aside class="flex flex-col gap-6">    
                    <SideProfile/>
                </aside>   

                <section id="bg-content" class="flex flex-col gap-6 w-full max-w-[1440px] flex-1">
                    <div className="personal-information">
                        <Card   
                            className="rounded-3xl shadow-none"
                            title="Informasi Personal" 
                            style={{ fontFamily: 'Space Grotesk', padding: '20px', fontSize: '30px', boxShadow: 'none' }} 
                            bordered={false}
                            extra={<button onClick={showModal} className="bg-[#606DE5] text-white font-[Inter] py-2 px-7 mb-3 rounded-full">Edit <EditOutlined className="ml-2"/></button>}>
                            <Row>
                                <Col  xs={24} lg={12}>
                                    <div className="personal flex mt-5">
                                        <div className="icon-personal w-14 h-14 flex justify-center bg-slate-100 rounded-xl mr-3">
                                            <UserOutlined className="font-bold text-slate-600 text-lg"/>
                                        </div>
                                        <div className="text-personal pt-2">
                                            <h1>{profile.fullname}</h1>
                                            <p className="text-slate-500 font-[Inter]">Fullname</p>
                                        </div>
                                    </div>

                                    <div className="personal flex mt-10">
                                        <div className="icon-personal w-14 h-14 flex justify-center bg-slate-100 rounded-xl mr-3">
                                            <MailOutlined className="font-bold text-slate-600 text-lg"/>
                                        </div>
                                        <div className="text-personal pt-2">
                                            <h1>{profile.email}</h1>
                                            <p className="text-slate-500 font-[Inter]">Email Address</p>
                                        </div>
                                    </div>
                                </Col>

                                <Col>
                                    <div className="personal flex mt-5">
                                        <div className="icon-personal w-14 h-14 flex justify-center bg-slate-100 rounded-xl mr-3">
                                            <PhoneOutlined className="font-bold text-slate-600 text-lg"/>
                                        </div>
                                        <div className="text-personal pt-2">
                                            <h1>{profile.phone}</h1>
                                            <p className="text-slate-500 font-[Inter]">Phone</p>
                                        </div>
                                    </div>

                                    <div className="personal flex mt-10">
                                        <div className="icon-personal w-14 h-14 flex justify-center bg-slate-100 rounded-xl mr-3">
                                            <EnvironmentOutlined className="font-bold text-slate-600 text-lg"/>
                                        </div>
                                        <div className="text-personal pt-2">
                                            <h1>{profile.address}</h1>
                                            <p className="text-slate-500 font-[Inter]">Address</p>
                                        </div>
                                    </div>                                
                                </Col>

                                <button onClick={showModalPassword} className="mt-14 px-5 rounded-full text-sm text-[#606DE5] py-2 border-2 border-[#606DE5]">
                                    <h3>Ubah Password</h3>
                                </button>

                            </Row>
                        </Card>
                    </div>
                </section>  
            </main>

        </div>
    )
}

export default Profile;