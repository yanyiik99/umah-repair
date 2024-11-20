import { useState } from "react";
import { Row, Col, Flex, Card} from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, EditOutlined, PushpinOutlined, EnvironmentOutlined, BankOutlined, CompressOutlined, ExpandOutlined} from '@ant-design/icons';
import './index.css';
import AvatarImage from './img/1.jpg';

const Profile = () => {
    return (
        <div>
            <Row className='bg-violet-500 w-full h-72'>
                <Col xs={24}>
                <Flex className='h-full pt-10' vertical justify='start' align='center'>
                    <h1 className='text-4xl font-bold mb-2 mt-10 text-white'>Your Profile</h1>
                    <p className="text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </Flex>
                </Col>
            </Row>

            <div className="layout" style={{ padding: '0 200px', backgroundColor: '#f9f9f9'}}>

                <div className="personal-avatar relative -top-20">
                    <Card   
                        className="rounded-2xl"
                        style={{ fontFamily: 'Poppins', padding: '20px' }} 
                        bordered={false}>
                        <Flex justify="space-between">
                            <div className="left-avatar flex">
                                <img src={AvatarImage} className="w-28 rounded-full" />
                                <div className="text-left-avatar ml-5 mt-8">
                                    <h1>I Gede Wahyu Parama Sucipta</h1>
                                    <p>wahyuscpta13@gmail.com</p>
                                </div>
                            </div>
                            <button className="mt-8 border border-violet-500 text-violet-500 h-8 w-24 rounded-full">Edit <EditOutlined className="ml-2"/></button>
                        </Flex>
                    </Card>
                </div>

                <div className="personal-information relative -top-10">
                    <Card   
                        className="rounded-2xl"
                        title="Personal Informations" 
                        style={{ fontFamily: 'Poppins', padding: '20px' }} 
                        bordered={false}
                        extra={<button className="border border-violet-500 text-violet-500 py-1 px-6 mb-3 rounded-full">Edit <EditOutlined className="ml-2"/></button>}>
                        <Row>
                            <Col xl={12} sm={24}>
                                <div className="personal flex mt-5">
                                    <div className="icon-personal w-14 h-14 flex justify-center bg-slate-100 rounded-xl mr-3">
                                        <UserOutlined className="font-bold text-slate-600 text-lg"/>
                                    </div>
                                    <div className="text-personal pt-2">
                                        <h1>I Gede Wahyu Parama Sucipta</h1>
                                        <p className="text-slate-500">Fullname</p>
                                    </div>
                                </div>

                                <div className="personal flex mt-10">
                                    <div className="icon-personal w-14 h-14 flex justify-center bg-slate-100 rounded-xl mr-3">
                                        <MailOutlined className="font-bold text-slate-600 text-lg"/>
                                    </div>
                                    <div className="text-personal pt-2">
                                        <h1>wahyuscpta13@gmail.com</h1>
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
                                        <h1>+62 896 352 086 86</h1>
                                        <p className="text-slate-500">Phone</p>
                                    </div>
                                </div>

                                <div className="personal flex mt-10">
                                    <div className="icon-personal w-14 h-14 flex justify-center bg-slate-100 rounded-xl mr-3">
                                        <EnvironmentOutlined className="font-bold text-slate-600 text-lg"/>
                                    </div>
                                    <div className="text-personal pt-2">
                                        <h1>Taman Wira Sambangan Blok Cempaka I No. 4</h1>
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
                                        <h1>Provinsi Bali</h1>
                                        <p className="text-slate-500">Province</p>
                                    </div>
                                </div>

                                <div className="personal flex mt-10">
                                    <div className="icon-personal w-14 h-14 flex justify-center bg-slate-100 rounded-xl mr-3">
                                        <CompressOutlined className="font-bold text-slate-600 text-lg"/>
                                    </div>
                                    <div className="text-personal pt-2">
                                        <h1>Kabupaten Buleleng</h1>
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
                                        <h1>Kecamatan Sukasada</h1>
                                        <p className="text-slate-500">District</p>
                                    </div>
                                </div>
                                
                                <div className="personal flex mt-10">
                                    <div className="icon-personal w-14 h-14 flex justify-center bg-slate-100 rounded-xl mr-3">
                                        <ExpandOutlined className="font-bold text-slate-600 text-lg"/>
                                    </div>
                                    <div className="text-personal pt-2">
                                        <h1>Desa Sambangan</h1>
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