import { Breadcrumb, Button, Card, Carousel, Col, Flex, Form, Image, Input, notification, Rate, Row, Space, Typography } from 'antd';
import './index.css';

import Img from '../../assets/clean-service.jpg';
import ImgPromo from '../../assets/promo-banner.jpg';
import { AppstoreAddOutlined, ClockCircleFilled, ContainerFilled, CustomerServiceOutlined, FileProtectOutlined, FullscreenOutlined, HomeOutlined } from '@ant-design/icons';
import { useState } from 'react';
import Countdown from 'react-countdown';
const { Title, Paragraph, Text } = Typography;
const { Compact } = Space;

import { BiBadgeCheck } from "react-icons/bi";
import { showReadmore } from '../../utils/ui';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';


const testimonials = [
  {
    id: 1,
    name: "Ari Pramana",
    title: "Software Engineer",
    company: "TechCorp",
    feedback: "This product has significantly improved my productivity!",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Wahyu Sucipta",
    title: "Product Manager",
    company: "Innovate Inc.",
    feedback: "Fantastic experience with the service. Highly recommend it!",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 3,
    name: "Dea Amanda",
    title: "Designer",
    company: "Creative Studio",
    feedback: "Beautifully designed and incredibly intuitive! Beautifully designed and incredibly",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 4,
    name: "Ayu Suputri",
    title: "Freelance",
    company: "Creative Studio",
    feedback: "Beautifully designed and incredibly intuitive! Beautifully designed and incredibly",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];


const Jasadetail = () => {
  const [form] = Form.useForm();
  const [expanded, setExpanded] = useState(false);
  const [validPromocode, setValidPromocode] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const dummyPromocode = 'XXX123';
  const navigate = useNavigate();

  
  const showAlert = (status, title, description) => {
      api[status]({
          message: title,
          description: description, 
          duration: 3
      })
  }

  

  const handlePromoCode = () => {
    let promoCode = form.getFieldValue("code");

    console.log(promoCode);
    if(promoCode === dummyPromocode){
      form.resetFields();
      setValidPromocode(true);
      showAlert("success", "Data Disimpan", "Berhasil Claim Promotion Code");
      console.log(validPromocode);
    } else {
      form.resetFields();
      console.log(validPromocode);
      showAlert("error","Promotion Code Invalid","Masukan Promotion Code Dengan Benar!");
    }
  }


  return (
    <div>
      <Row className='bg-violet-500 w-full h-72'>
        {contextHolder}
        <Col xs={24}>
          <Flex className='h-full pt-10' vertical justify='start' align='center'>
            <h1 className='text-4xl font-bold mb-2 text-white'>
              Detail Home Service
            </h1>
            <Breadcrumb
              items={[
                {
                  href: '/',
                  title: <HomeOutlined />,
                },
                {
                  title: 'Detail Jasa',
                },
              ]}
            />
          </Flex>
        </Col>
      </Row>

      <div className="container px-5 mx-auto relative -top-32">
        <Row gutter={[20, 12]} >
          <Col xs={24} lg={16}>
            <Card className='rounded-xl shadow-lg'>
              <Image preview={false} width="100%" height={300} className='object-cover rounded-xl' src={Img} />
              <Flex align='center'>
                <div className='bg-green-300 text-green-800 py-1 px-3 font-bold flex items-center rounded-md border border-lime-700'>
                  <FullscreenOutlined className='text-xl me-2' />
                  AVAILABLE
                </div>
                <Flex className='mx-4 my-3' align='center'>
                  <Rate allowHalf  disabled defaultValue={3.5}/>
                  <span className='font-bold text-lg mx-3'>4.5</span>
                  <span className='font-bold text-lg text-gray-400'>(500 Reviews)</span>
                </Flex>
              </Flex>
              <Title level={2} style={{fontWeight: 700}} className='my-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit ipsum sat sat.</Title>
              <Row gutter={[10,10]} className='mt-5'>
                <Col xs={12} xl={6}>
                  <Card size='small' className='bg-gray-100'>
                    <Flex align='center' justify='space-around'>
                      <div>
                        <ClockCircleFilled className='text-4xl text-violet-500' />
                      </div>
                      <div>
                        <h4 className='font-bold text-lg'>15 Jam</h4>
                        <p className='text-gray-500 font-semibold'>Estimasi</p>
                      </div>
                    </Flex>
                  </Card>
                </Col>
                <Col xs={12} xl={6}>
                  <Card size='small' className='bg-gray-100'>
                    <Flex align='center' justify='space-around'>
                      <div>
                        <CustomerServiceOutlined className='text-4xl text-violet-500' />
                      </div>
                      <div>
                        <h4 className='font-bold text-lg'>Top Service</h4>
                        <p className='text-gray-500 font-semibold'>Garansi</p>
                      </div>
                    </Flex>
                  </Card>
                </Col>
                <Col xs={12} xl={6}>
                  <Card size='small' className='bg-gray-100'>
                    <Flex align='center' justify='space-around'>
                      <div>
                        <AppstoreAddOutlined className='text-4xl text-violet-500' />
                      </div>
                      <div>
                        <h4 className='font-bold text-lg'>Living Room</h4>
                        <p className='text-gray-500 font-semibold'>Kategori</p>
                      </div>
                    </Flex>
                  </Card>
                </Col>
                <Col xs={12} xl={6}>
                  <Card size='small' className='bg-gray-100'>
                    <Flex align='center' justify='space-around'>
                      <div>
                        <FileProtectOutlined className='text-4xl text-violet-500' />
                      </div>
                      <div>
                        <h4 className='font-bold text-lg'>Our Tools</h4>
                        <p className='text-gray-500 font-semibold'>SNI</p>
                      </div>
                    </Flex>
                  </Card>
                </Col>
              </Row>
              <Row className='mt-5'>
                <Col xs={24}>
                  <Title level={3} style={{fontWeight: 600}}>Deskripsi</Title>
                  <Paragraph 
                    ellipsis={
                      { rows: 3, expandable: 'collapsible', symbol: showReadmore(), expanded, onExpand: (_, info) => setExpanded(info.expanded),}
                    }>
                    Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                    Design, a design language for background applications, is refined by Ant UED Team. Ant
                    Design, a design language for background applications, is refined by Ant UED Team. Ant
                    Design, a design language for background applications, is refined by Ant UED Team. Ant
                    Design, a design language for background applications, is refined by Ant UED Team. Ant
                    Design, a design language for background applications, is refined by Ant UED Team.
                    Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                    Design, a design language for background applications, is refined by Ant UED Team. Ant
                    Design, a design language for background applications, is refined by Ant UED Team. Ant
                    Design, a design language for background applications, is refined by Ant UED Team. Ant
                    Design, a design language for background applications, is refined by Ant UED Team. Ant
                    Design, a design language for background applications, is refined by Ant UED Team.
                  </Paragraph>  
                  <Title level={3} style={{fontWeight: 600, marginTop: 40}}>Review Customers</Title>
                  <Carousel autoplay draggable slidesToShow={2} dots={false}>
                    {testimonials.map((testimonial) => (
                      <div key={testimonial.id}>
                        <Row justify="center" gutter={[20,0]}>
                          <Col xs={20} className='pb-10'>
                            <Card
                              style={{
                                borderRadius: "8px",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                              }}
                            >
                              <div style={{ textAlign: "start" }}>
                                  <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    style={{
                                      width: "80px",
                                      height: "80px",
                                      borderRadius: "50%",
                                      marginBottom: "15px",
                                    }}
                                  />
                                <Rate disabled defaultValue={5} className='text-xs' />
                                <Title level={5}>{testimonial.name}</Title>
                                <Text>
                                  {testimonial.title}, {testimonial.company}
                                </Text>
                                <blockquote style={{ fontStyle: "italic", color: "#555" }}>
                                  &quot;{testimonial.feedback}&quot;
                                </blockquote>
                              </div>
                            </Card>
                          </Col>
                        </Row>
                      </div>
                    ))}
                  </Carousel>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={24} lg={8}>
            <Card className='rounded-xl shadow-sm'>
              <div className='relative flex justify-center'>
                <Image src={ImgPromo} preview={false} className='rounded-lg brightness-50' />
                <h2 className='absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold'>
                    <Countdown date={Date.now() + (60000 * 60 * 24)} />
                </h2>
              </div>
              <Form 
                form={form}
                disabled={validPromocode ? true : false}
                className='mt-3'
              >
                <Form.Item name='code'>
                  <Compact
                    className='w-full'
                  >
                    <Input placeholder='Promo Code ?'  className='focus:border-violet-600' />
                    <Button size='large' className='bg-violet-900 text-white' onClick={()=>handlePromoCode()}>
                      <ContainerFilled />
                      Apply
                    </Button>
                  </Compact>
                </Form.Item>
              </Form>
            </Card>
            <Card className='rounded-xl shadow-lg mt-5'>
              <Title level={4} style={{fontWeight: 700}}>Harga Jasa</Title>
              <h2 className={classNames(validPromocode && 'line-through','text-3xl font-bold text-violet-900')} >
                Rp500.000
                <small className={classNames(validPromocode && 'line-through', 'text-base text-gray-400')}>/Rumah</small>
              </h2>
              {
                (validPromocode) && 
                <h2 className='text-3xl font-bold text-violet-900 mt-2' >
                  Rp250.000
                  <small className='text-base text-gray-400'>/Rumah</small>
                </h2>
              }
              
              <Title level={4} style={{fontWeight: 700}} className='mt-10'>Service Benefits</Title>
              <Flex vertical >
                <Flex align='start' className='mt-3'>
                  <BiBadgeCheck className='text-5xl me-2 text-green-600' /> 
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, porro?
                  </span>
                </Flex>
                <Flex align='start' className='mt-3'>
                  <BiBadgeCheck className='text-5xl me-2 text-green-600' /> 
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, porro?
                  </span>
                </Flex>
                <Flex align='start' className='mt-3'>
                  <BiBadgeCheck className='text-5xl me-2 text-green-600' /> 
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, porro?
                  </span>
                </Flex>
                <Flex align='start' className='mt-3'>
                  <BiBadgeCheck className='text-5xl me-2 text-green-600' /> 
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, porro?
                  </span>
                </Flex>
              </Flex>
              <Button onClick={()=>navigate('/proses-transaksi')} className='bg-purple-600 text-white font-semibold w-full py-6 text-xl mt-10 hover:!border-violet-700 hover:!text-violet-950' >
                Pesan Jasa
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}
  
export default Jasadetail