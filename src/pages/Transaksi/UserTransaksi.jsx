import { BankFilled, CreditCardOutlined, HomeOutlined, UserAddOutlined, InboxOutlined } from "@ant-design/icons";
import { Breadcrumb, Card, Col, Flex, Row, Steps, Button, message,  theme, Image,Typography, Collapse, Form, Input, DatePicker, Upload, Result  } from "antd";
import { useState } from "react";
import Img from '../../assets/clean-service.jpg';
import { showReadmore } from "../../utils/ui";
import { useNavigate } from "react-router-dom";
const { Title, Paragraph} = Typography;
const { Dragger } = Upload;

const steps = [
    {
      title: 'Ringkasan',
      content: 'First-content',
    },
    {
      title: 'Transaksi',
      content: 'Last-content',
    },
    {
      title: 'Berhasil',
      content: 'Last-content',
    },
];

const props = {
  name: 'file',
  multiple: false,
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


const UserTransaksi = () => {
    const [current, setCurrent] = useState(0);
    const [expanded, setExpanded] = useState(false);
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const next = () => {
      setCurrent(current + 1);
    };
    const prev = () => {
      setCurrent(current - 1);
    };

    const items = steps.map((item) => ({
      key: item.title,
      title: item.title,
    }));
    

    return <div>
      <Row className='bg-violet-200 w-full h-72'>
        <Col xs={24}>
          <Flex className='h-full pt-10' vertical justify='start' align='center'>
            <h1 className='text-4xl font-bold mb-2'>
              Proses Transaksi
            </h1>
            <Breadcrumb
                  items={[
                    {
                      href: '/',
                      title: <HomeOutlined />,
                    },
                    {
                      href: '/jasadetail',
                      title: 'Detail Jasa',
                    },
                    {
                      title: 'Transaksi',
                    },
                  ]}
            />
          </Flex>
        </Col>
      </Row>

      <div className="container mx-auto relative -top-32">
        <Row gutter={[20, 12]} >
            <Col xs={24}>
                <Card>
                    <Steps current={current} items={items} />
                    <div className="h-full bg-gray-100 rounded-lg border-2 border-dashed border-violet-200 mt-5 p-5" >
                        {
                            (current == 0) && (
                                <Row gutter={[20]}>
                                    <Col xs={10}>
                                        <Collapse
                                            size="large"
                                            defaultActiveKey='1'
                                            items={
                                                [
                                                    { key: '1', 
                                                        label: 'Preview Jasa', 
                                                        children: <div>
                                                            <Image preview={false} width="100%" height={300} className='object-cover rounded-xl' src={Img} />
                                                            <Title level={4} style={{fontWeight: 700}} className='my-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit ipsum sat sat.</Title>
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
                                                            <h2 className='text-3xl font-bold text-violet-900 mb-5'>
                                                                Rp500.000
                                                                <small className='text-base text-gray-400'>/Rumah</small>
                                                            </h2>
                                                        </div> 
                                                    }
                                                ]
                                            }
                                        />
                                    </Col>
                                    <Col xs={14}>
                                        <Title level={3} style={{fontWeight: 600}}>Instruksi Pembayaran</Title>
                                        <ol className="list-decimal list-inside">
                                            <li>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facere et soluta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi assumenda fugit nam sapiente ipsam iste corrupti rem ipsum obcaecati, reiciendis, cupiditate enim. Provident aliquam repellat consectetur sit dicta impedit ducimus.
                                            </li>
                                            <li className="mt-3">
                                                Lakukan asdas
                                            </li>
                                        </ol>
                                    </Col>
                                </Row>
                            )
                        }

                        {
                            (current == 1) && (
                                <Row gutter={[30,0]}>
                                    <Col xs={10}>
                                        <Collapse
                                            size="large"
                                            defaultActiveKey='1'
                                            items={
                                                [
                                                    { key: '1', 
                                                        label: 'Preview Jasa', 
                                                        children: <div>
                                                            <Image preview={false} width="100%" height={300} className='object-cover rounded-xl' src={Img} />
                                                            <Title level={4} style={{fontWeight: 700}} className='my-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit ipsum sat sat.</Title>
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
                                                            <h2 className='text-3xl font-bold text-violet-900 mb-5'>
                                                                Rp500.000
                                                                <small className='text-base text-gray-400'>/Rumah</small>
                                                            </h2>
                                                        </div> 
                                                    }
                                                ]
                                            }
                                        />
                                    </Col>
                                    <Col xs={14}>
                                        <Form
                                            layout="vertical"
                                            form={form}
                                        >
                                            <Form.Item
                                                label="Nama Penjamu"
                                                name="namapenjamu"
                                            >
                                                <Input placeholder="Masukan Nama Penjamu" />
                                            </Form.Item>

                                            <Form.Item
                                                label="Alamat/Lokasi"
                                                name="alamat"
                                            >
                                                <Input placeholder="Masukan Alamat/Lokasi" />
                                            </Form.Item>

                                            <Form.Item
                                                label="Jadwal"
                                                name="jadwal"
                                            >
                                                <DatePicker showTime style={{ width: '100%' }} />
                                            </Form.Item>

                                            <Form.Item
                                                label="Catatan"
                                                name="catatan"
                                            >
                                                <Input.TextArea rows={4} />
                                            </Form.Item>
                                            <Title level={3} style={{fontWeight: 600}}>Bank Account</Title>
                                            <Form.Item
                                                label="Nama Bank"
                                                name="bank"
                                            >
                                                <Input size="large" placeholder="Masukan Nama Bank" prefix={<BankFilled className="pe-3" />} />
                                            </Form.Item>
                                            <Form.Item
                                                label="Nama Lengkap"
                                                name="namalengkap"
                                            >
                                                <Input size="large" placeholder="Masukan Nama Pengirim Bank" prefix={<UserAddOutlined className="pe-3" />} />
                                            </Form.Item>
                                            <Form.Item
                                                label="Akun Nomor Bank"
                                                name="nobank"
                                            >
                                                <Input size="large" placeholder="Masukan Akun Nomor Bank" prefix={<CreditCardOutlined className="pe-3" />} />
                                            </Form.Item>
                                            <Dragger {...props}>
                                                <p className="ant-upload-drag-icon">
                                                    <InboxOutlined />
                                                </p>
                                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                                <p className="ant-upload-hint">
                                                    Support for a single. Strictly prohibited from uploading company data or other
                                                    banned files.
                                                </p>
                                            </Dragger>

                                        </Form>

                                    </Col>
                                </Row>
                            )
                        }

                        {
                            (current == 2) && (
                                <Result
                                    status="success"
                                    title="Berhasil Konfirmasi pembayaran"
                                    subTitle="TIX: #721637 Sementara Ticket Anda, Mohon tunggu 1-5 menit untuk dilakukan pengecekan."
                                    extra={[
                                    <Button type="primary" onClick={()=>navigate('/')} key="console">
                                        Beranda
                                    </Button>
                                    ]}
                                />
                            )
                        }
                    </div>
                    <div
                       className="mt-7 flex justify-center"
                    >
                        {current == 1 && (
                            <Button
                                style={{
                                margin: '0 8px',
                                }}
                                onClick={() => prev()}
                            >
                                Sebelumnya
                            </Button>
                        )}
                        {current < steps.length - 1 && (
                            <Button className="bg-violet-800 text-white hover:!bg-violet-700 hover:!text-white hover:!border-none" onClick={() => next()}>
                                Selanjutnya
                            </Button>
                        )}
                    </div>
                </Card>
            </Col>
        </Row>
      </div>

    </div>
}

export default UserTransaksi;