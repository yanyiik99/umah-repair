import { useState, useEffect } from "react";
import { Row, Col, Flex, Card, Modal, Form, Input, notification} from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, EditOutlined, PushpinOutlined, EnvironmentOutlined, BankOutlined, CompressOutlined, ExpandOutlined, LeftOutlined, EyeOutlined, ArrowLeftOutlined} from '@ant-design/icons';
import './index.css';
import AvatarImage from './img/1.jpg';
import { useNavigate } from "react-router-dom";

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

const Profile = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [profile, setProfile] = useState(dataProfile);
    const [isModalPreviewOpen, setIsModalPreviewOpen] = useState(false);

    const showAlert = (status, title, description) => {
        notification[status]({
            message: title,
            description: description
        })
    }

    useEffect(() => {
        const handleLoad = () => {
            const banner = document.querySelector('.banner');
            if (banner) {
                banner.style.height = '24rem';
            }

            const layout = document.querySelector('.bg-layout');
            if (layout) {
                layout.style.height = 'unset';
                layout.style.transitionDelay = '1s'; 
            }

            const textBanner = document.querySelector('.text-banner');
            if (textBanner) {
                textBanner.style.marginTop = '0';
                textBanner.style.opacity = '1';   
                textBanner.style.transition = '.7s';         
                textBanner.style.transitionDelay = '.5s';         
            }

            const personalAvatar = document.querySelector('.personal-avatar-card');
            if (personalAvatar) {
                personalAvatar.style.opacity = '1';   
                personalAvatar.style.height = '200px';        
                personalAvatar.style.transition = '1s';        
                personalAvatar.style.transitionDelay = '.7s';        
            }

            const personalInfo = document.querySelector('.personal-information-card');
            if (personalInfo) {
                personalInfo.style.opacity = '1';  
                personalInfo.style.height = '600px';        
                personalInfo.style.transition = '1s';        
                personalInfo.style.transitionDelay = '1s';        
            }
        };

        window.addEventListener("load", handleLoad);
        return () => {
            window.removeEventListener("load", handleLoad);
        };
    }, []);

    const showModalPreview = () => {
        setIsModalPreviewOpen(true)
    };

    const handleCancelPreview = () => {
        setIsModalPreviewOpen(false)
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


    return (
        <div>
            <Modal 
            width={1000}
              title={'EDIT PROFILE'}
              style={{ fontFamily: 'Poppins' }} 
              open={isModalOpen} 
              onCancel={handleCancel}
              onOk={handleSubmit}
            >
                <Form 
                    layout="vertical"
                    requiredMark={true}
                    form={form}
                >

                    <Flex className='mt-5' gap={"small"} align="flex-start" horizontal>
                        <Form.Item 
                            label="Fullname" 
                            name="fullname" 
                            style={{ fontFamily: 'Poppins', width: '100%' }} 
                            rules={[
                                { required: true, message: "Fullname Name Wajib Diisi" }
                            ]}
                        >
                            <Input placeholder="Fullname" style={{ fontFamily: 'Montserrat', width: '100%' }}/>
                        </Form.Item>

                        <Form.Item 
                            label="Phone" 
                            name="phone" 
                            style={{ fontFamily: 'Poppins', width: '100%' }} 
                            rules={[
                                { required: true, message: "Phone Name Wajib Diisi" }
                            ]}
                        >
                            <Input placeholder="Phone" style={{ fontFamily: 'Montserrat', width: '100%' }}/>
                        </Form.Item>

                        <Form.Item 
                            label="Email" 
                            name="email" 
                            style={{ fontFamily: 'Poppins', width: '100%' }} 
                            rules={[
                                { required: true, message: "Email Name Wajib Diisi" }
                            ]}
                        >
                            <Input placeholder="Email" style={{ fontFamily: 'Montserrat', width: '100%' }}/>
                        </Form.Item>
                    </Flex>

                    <Form.Item 
                        label="Address" 
                        name="address" 
                        style={{ marginTop: '-10px', fontFamily: 'Poppins' }} 
                        rules={[
                        {required: true, message: "Address Name Wajib Diisi"}
                    ]}>
                        <Input.TextArea rows={3} placeholder="Address" style={{ fontFamily: 'Montserrat' }}/>
                    </Form.Item>

                    <Flex gap="16px" align="flex-start" horizontal style={{ marginTop: '-10px', }}>
                        <Form.Item 
                            label="Province" 
                            name="province" 
                            style={{ fontFamily: 'Poppins', width: '100%' }} 
                            rules={[
                                { required: true, message: "Province Name Wajib Diisi" }
                            ]}
                        >
                            <Input placeholder="Province" style={{ fontFamily: 'Montserrat', width: '100%' }}/>
                        </Form.Item>

                        <Form.Item 
                            label="Regency" 
                            name="regency" 
                            style={{ fontFamily: 'Poppins', width: '100%' }} 
                            rules={[
                                { required: true, message: "Regency Name Wajib Diisi" }
                            ]}
                        >
                            <Input placeholder="Regency" style={{ fontFamily: 'Montserrat', width: '100%' }}/>
                        </Form.Item>
                    </Flex>

                    <Flex gap="16px" align="flex-start" horizontal style={{ marginTop: '-10px', }}>
                        <Form.Item 
                            label="District" 
                            name="district" 
                            style={{ fontFamily: 'Poppins', width: '100%' }} 
                            rules={[
                                { required: true, message: "District Name Wajib Diisi" }
                            ]}
                        >
                            <Input placeholder="District" style={{ fontFamily: 'Montserrat', width: '100%' }}/>
                        </Form.Item>

                        <Form.Item 
                            label="Village" 
                            name="village" 
                            style={{ fontFamily: 'Poppins', width: '100%' }} 
                            rules={[
                                { required: true, message: "Village Name Wajib Diisi" }
                            ]}
                        >
                            <Input placeholder="Village" style={{ fontFamily: 'Montserrat', width: '100%' }}/>
                        </Form.Item>
                    </Flex>

                </Form>
            </Modal>

            <Modal
                open={isModalPreviewOpen}
                footer={null}
                onCancel={handleCancelPreview}
                centered>
                <img src={AvatarImage} alt="Preview Avatar" className="rounded-full w-48 h-48 mx-auto my-10" />
            </Modal>

            <Row className='bg-violet-500 w-full h-0 banner' style={{ transition: '.7s' }}>
                <Col xs={24} className="text-banner mt-5 opacity-0">
                    <div className="layout px-4 lg:px-48 !bg-violet-500">
                        <Flex className="pt-10"  justify='space-between'>
                            <div className="left">
                                <p onClick={()=>navigate('/')} className="text-white font-semibold cursor-pointer"><ArrowLeftOutlined className="mr-2 bg-white p-2 rounded-full text-violet-500"/> Back to Homepage</p>                            
                            </div>
                            <UserOutlined onClick={()=>navigate('/profile')} className="bg-white p-2 rounded-full text-violet-500"/>
                        </Flex>
                    </div>
                    <Flex className='h-full pt-10' vertical justify='start' align='center'>
                        <h1 className='text-4xl font-bold mb-2 mt-10 text-white'>Your Profile</h1>
                        <p className="text-slate-300">Easily edit your information to keep everything up-to-date.</p>
                    </Flex>
                </Col>
            </Row>

            <div className="layout bg-layout px-4 lg:px-48" style={{ backgroundColor: '#f9f9f9'}}>

                <div className="personal-avatar relative -top-20">
                    <Card   
                        className="rounded-2xl personal-avatar-card h-0 overflow-hidden opacity-0"
                        style={{ fontFamily: 'Poppins', padding: '20px' }} 
                        bordered={false}>
                        <Flex justify="space-between">
                            <div className="left-avatar flex">
                                <img src={AvatarImage} className="w-28 rounded-full" />
                                <div className="text-left-avatar ml-5 mt-8">
                                    <h1>{profile.fullname}</h1>
                                    <p>{profile.email}</p>
                                </div>
                            </div>
                            <button onClick={showModalPreview} className="mt-8 border border-violet-500 text-violet-500 h-8 w-28 rounded-full hover:bg-purple-500 hover:text-white transition">Preview <EyeOutlined className="ml-2"/></button>
                        </Flex>
                    </Card>
                </div>

                <div className="personal-information relative -top-10">
                    <Card   
                        className="rounded-2xl personal-information-card h-0 overflow-hidden opacity-0"
                        title="Personal Informations" 
                        style={{ fontFamily: 'Poppins', padding: '20px' }} 
                        bordered={false}
                        extra={<button onClick={showModal} className="border border-violet-500 text-violet-500 py-1 px-7 mb-3 rounded-full hover:bg-purple-500 hover:text-white transition">Edit <EditOutlined className="ml-2"/></button>}>
                        <Row>
                            <Col  xs={24} lg={12}>
                                <div className="personal flex mt-5">
                                    <div className="icon-personal w-14 h-14 flex justify-center bg-slate-100 rounded-xl mr-3">
                                        <UserOutlined className="font-bold text-slate-600 text-lg"/>
                                    </div>
                                    <div className="text-personal pt-2">
                                        <h1>{profile.fullname}</h1>
                                        <p className="text-slate-500">Fullname</p>
                                    </div>
                                </div>

                                <div className="personal flex mt-10">
                                    <div className="icon-personal w-14 h-14 flex justify-center bg-slate-100 rounded-xl mr-3">
                                        <MailOutlined className="font-bold text-slate-600 text-lg"/>
                                    </div>
                                    <div className="text-personal pt-2">
                                        <h1>{profile.email}</h1>
                                        <p className="text-slate-500">Email Address</p>
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
                                        <p className="text-slate-500">Phone</p>
                                    </div>
                                </div>

                                <div className="personal flex mt-10">
                                    <div className="icon-personal w-14 h-14 flex justify-center bg-slate-100 rounded-xl mr-3">
                                        <EnvironmentOutlined className="font-bold text-slate-600 text-lg"/>
                                    </div>
                                    <div className="text-personal pt-2">
                                        <h1>{profile.address}</h1>
                                        <p className="text-slate-500">Address</p>
                                    </div>
                                </div>                                
                            </Col>
                        </Row>
                        
                        <h1 className="mt-16 font-semibold" style={{ fontSize: '16px' }}>Address Details</h1>
                        <hr style={{ width: '104%', marginLeft: '-20px', borderColor: '#ececec', marginTop: '10px' }}/>

                        <Row className="my-5">
                            <Col xl={12} sm={24}>
                                <div className="personal flex mt-5">
                                    <div className="icon-personal w-14 h-14 flex justify-center bg-slate-100 rounded-xl mr-3">
                                        <BankOutlined className="font-bold text-slate-600 text-lg"/>
                                    </div>
                                    <div className="text-personal pt-2">
                                        <h1>{profile.province}</h1>
                                        <p className="text-slate-500">Province</p>
                                    </div>
                                </div>

                                <div className="personal flex mt-10">
                                    <div className="icon-personal w-14 h-14 flex justify-center bg-slate-100 rounded-xl mr-3">
                                        <CompressOutlined className="font-bold text-slate-600 text-lg"/>
                                    </div>
                                    <div className="text-personal pt-2">
                                        <h1>{profile.regency}</h1>
                                        <p className="text-slate-500">Regency</p>
                                    </div>
                                </div>
                            </Col>

                            <Col>
                                <div className="personal flex mt-5">
                                    <div className="icon-personal w-14 h-14 flex justify-center bg-slate-100 rounded-xl mr-3">
                                        <PushpinOutlined className="font-bold text-slate-600 text-lg"/>
                                    </div>
                                    <div className="text-personal pt-2">
                                        <h1>{profile.district}</h1>
                                        <p className="text-slate-500">District</p>
                                    </div>
                                </div>
                                
                                <div className="personal flex mt-10">
                                    <div className="icon-personal w-14 h-14 flex justify-center bg-slate-100 rounded-xl mr-3">
                                        <ExpandOutlined className="font-bold text-slate-600 text-lg"/>
                                    </div>
                                    <div className="text-personal pt-2">
                                        <h1>{profile.village}</h1>
                                        <p className="text-slate-500">Village</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                    </Card>
                </div>
                
            </div>
        </div>
    )
}

export default Profile;