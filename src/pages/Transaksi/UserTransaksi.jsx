import { BankFilled, CreditCardOutlined, HomeOutlined, UserAddOutlined, InboxOutlined, PlusOutlined } from "@ant-design/icons";
import { Breadcrumb, Card, Col, Flex, Row, Steps, Button, message,  Select, Image,Typography, Collapse, Form, Input, DatePicker, Upload, Result, Divider, Space  } from "antd";
import { useRef, useState } from "react";
import { formatCurrency, showReadmore } from "../../utils/ui";
import { useNavigate } from "react-router-dom";
import Meta from "antd/es/card/Meta";
const { Title, Paragraph} = Typography;
const { Dragger } = Upload;
import Img from '../../assets/clean-service.jpg';
import Bca from '../../assets/bca.png';
import Bri from '../../assets/bri.png';
import Bni from '../../assets/bni.png';
import Gopay from '../../assets/gopay.png';
import Jago from '../../assets/jago.png';
import Dana from '../../assets/dana.png';
import { DataJasa } from "../../utils/constans";

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
    const [alamat, setAlamat] = useState(['Taman Wira Sambangan Blok Cempaka I No. 4']);
    const [name, setName] = useState('');
    const inputRef = useRef(null);

    const next = () => {
      setCurrent(current + 1);
    };
    const prev = () => {
      setCurrent(current - 1);
    };

    const items = steps.map((item) => ({
      key: item.title,
      title: item.title,
    }))
    
    const onNameChange = (event) => {
        setName(event.target.value);
    };

    const addItem = (e) => {
        e.preventDefault();
        setAlamat([...alamat, name || `New item ${index++}`]);
        setName('');
        setTimeout(() => {
          inputRef.current?.focus();
        }, 0);
      };
    

    return <div>
      <Row className='bg-violet-500 w-full h-72'>
        <Col xs={24}>
          <Flex className='h-full pt-10' vertical justify='start' align='center'>
            <h1 className='text-4xl font-bold mb-2 text-white'>
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

      <div className="container px-10 mx-auto relative -top-32">
        <Row gutter={[20, 12]} >
            <Col xs={24}>
                <Card>
                    <Steps current={current} items={items} />
                    <div className="h-full bg-gray-100 rounded-lg border-2 border-dashed border-violet-200 mt-5 p-5" >
                        {
                            (current == 0) && (
                                <Row gutter={[30]}>
                                    <Col xs={24} lg={10} className="!pe-10">
                                        <div>
                                            <Image preview={false} width="100%" height={300} className='object-cover rounded-xl' src={DataJasa[0].img} />
                                            <Title level={4} style={{fontWeight: 700}} className='my-2'>
                                                {DataJasa[0].nama}
                                            </Title>
                                            <Title level={3} style={{fontWeight: 600}}>Deskripsi</Title>
                                            <Paragraph 
                                                ellipsis={
                                                { rows: 3, expandable: 'collapsible', symbol: showReadmore(expanded), onExpand: (_, info) => setExpanded(info.expanded),}
                                                }>
                                               {DataJasa[0].deskripsi}
                                            </Paragraph> 
                                            <Title level={3} style={{fontWeight: 600}}>Detail Pembayaran</Title> 
                                            <Flex justify="space-between" align="center">
                                                <p>Harga</p>
                                                <h2 className='text-xl font-bold text-violet-900'>
                                                    Rp250.000
                                                </h2>
                                            </Flex>
                                            <Flex justify="space-between" align="center" className="mt-4">
                                                <p>PPN</p>
                                                <h2 className='text-xl font-bold text-violet-900'>
                                                    Rp30.000
                                                </h2>
                                            </Flex>
                                            <hr className="mt-4" />
                                            <Flex justify="space-between" align="center" className="mt-4">
                                                <p>Total</p>
                                                <h2 className='text-xl font-bold text-violet-900'>
                                                    Rp280.000
                                                </h2>
                                            </Flex>
                                        </div> 
                                    </Col>
                                    <Col xs={24} lg={14}>
                                        <Title level={3} style={{fontWeight: 600}}>Transfer Detail</Title>
                                        <Collapse
                                            size="large"
                                            defaultActiveKey='1'
                                            items={
                                                [
                                                    { key: '1', 
                                                        label: 'Transfer Bank', 
                                                        children: <Card>
                                                        <Flex justify="space-between" align="center">
                                                            <Image preview={false} src={Bca} className="!h-10" />
                                                            <div>
                                                                <Paragraph className="text-lg font-semibold" >BCA ACTIVE BANK</Paragraph>
                                                                <Paragraph className="text-2xl font-bold" copyable>123123123</Paragraph>
                                                            </div>
                                                        </Flex>
                                                        <hr className="my-4" />
                                                        <Flex justify="space-between" align="center">
                                                            <Image preview={false} src={Bni} className="!h-10" />
                                                            <div>
                                                                <Paragraph className="text-lg font-semibold" >BNI ACTIVE BANK</Paragraph>
                                                                <Paragraph className="text-2xl font-bold" copyable>999999999</Paragraph>
                                                            </div>
                                                        </Flex>
                                                        <hr className="my-4" />
                                                        <Flex justify="space-between" align="center">
                                                            <Image preview={false} src={Bri} className="!h-16" />
                                                            <div>
                                                                <Paragraph className="text-lg font-semibold" >BRI ACTIVE BANK</Paragraph>
                                                                <Paragraph className="text-2xl font-bold" copyable>5555555555</Paragraph>
                                                            </div>
                                                        </Flex>
                                                        <hr className="my-4" />
                                                        <Flex justify="space-between" align="center">
                                                            <Image preview={false} src={Jago} className="!h-10" />
                                                            <div>
                                                                <Paragraph className="text-lg font-semibold" >JAGO ACTIVE BANK</Paragraph>
                                                                <Paragraph className="text-2xl font-bold" copyable>777777777</Paragraph>
                                                            </div>
                                                        </Flex>
                                                        <hr className="my-4" />
                                                        <Flex justify="space-between" align="center">
                                                            <Image preview={false} src={Dana} className="!h-10" />
                                                            <div>
                                                                <Paragraph className="text-lg font-semibold" >DANA ACTIVE BANK</Paragraph>
                                                                <Paragraph className="text-2xl font-bold" copyable>085946370867</Paragraph>
                                                            </div>
                                                        </Flex>
                                                        <hr className="my-4" />
                                                        <Flex justify="space-between" align="center">
                                                            <Image preview={false} src={Gopay} className="!h-10" />
                                                            <div>
                                                                <Paragraph className="text-lg font-semibold" >GOPAY ACTIVE BANK</Paragraph>
                                                                <Paragraph className="text-2xl font-bold" copyable>085946370867</Paragraph>
                                                            </div>
                                                        </Flex>
                                                    </Card>
                                                    }
                                                ]
                                            }
                                        />
                                        
                                        <Title level={3} style={{fontWeight: 600}} className="mt-10">Instruksi Transaksi</Title>
                                        <ol className="list-decimal list-inside">
                                            <li className="text-xl font-bold">
                                                Pembayaran dengan Transfer Bank
                                                <ul className="list-disc list-inside ms-5">
                                                    <li className="text-lg">
                                                        ATM
                                                        <ul className="list-[lower-alpha] list-inside ms-10 font-normal">
                                                            <li>
                                                                Pilih Metode Pembayaran: Pilih Transfer Bank.
                                                            </li>
                                                            <li>
                                                                Pilih Bank Tujuan: Pilih bank yang ingin digunakan (misalnya BCA, Mandiri).
                                                            </li>
                                                            <li>
                                                                Dapatkan Detail Rekening: Sistem akan menampilkan nomor rekening, nama penerima, dan jumlah yang harus dibayar.
                                                            </li>
                                                            <li>
                                                                Lakukan Transfer: Transfer sesuai jumlah yang tertera melalui aplikasi atau ATM.
                                                            </li>
                                                            <li>
                                                                Verifikasi Pembayaran: Kembali ke website dan pilih Konfirmasi Pembayaran.
                                                            </li>
                                                            <li>
                                                                Upload Bukti Transfer: Unggah foto bukti transfer.
                                                            </li>
                                                            <li>
                                                                Tunggu Konfirmasi: Pembayaran akan diverifikasi dan Anda akan menerima notifikasi status pembayaran.
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                                <ul className="list-disc list-inside ms-5">
                                                    <li className="text-lg">
                                                        MOBILE BANKING
                                                        <ul className="list-[lower-alpha] list-inside ms-10 font-normal">
                                                            <li>
                                                                Pilih metode Mobile Banking
                                                            </li>
                                                            <li>
                                                                Salin nomor rekening tujuan yang diberikan
                                                            </li>
                                                            <li>
                                                                Buka aplikasi mobile banking Anda.
                                                            </li>
                                                            <li>
                                                                Pilih menu Transfer ke Rekening Lain.
                                                            </li>
                                                            <li>
                                                                Masukkan nomor rekening tujuan, bank, dan jumlah transfer.
                                                            </li>
                                                            <li>
                                                                Verifikasi Pembayaran: Kembali ke website dan pilih Konfirmasi Pembayaran.
                                                            </li>
                                                            <li>
                                                                Upload Bukti Transfer: Unggah foto bukti transfer.
                                                            </li>
                                                            <li>
                                                                Tunggu Konfirmasi: Pembayaran akan diverifikasi dan Anda akan menerima notifikasi status pembayaran.
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="mt-3 text-xl font-bold">
                                                Pembayaran dengan E-wallet (Dompet Digital)
                                                <ul className="list-disc font-normal list-inside ms-5">
                                                    <li className="text-lg">
                                                        Pilih Metode Pembayaran: Pilih E-wallet ( DANA, GoPay.).
                                                    </li>
                                                    <li className="text-lg">
                                                        Salin Nomor E-Wallet : Salin nomor e-wallet ( DANA, GoPay.).
                                                    </li>
                                                    <li className="text-lg">
                                                        Transfer Melalui E-Wallet
                                                        <ul className="list-[lower-alpha] list-inside ms-10 font-normal">
                                                            <li>
                                                                Buka aplikasi e-wallet (GoPay, DANA).
                                                            </li>
                                                            <li>
                                                                Pilih menu Transfer dan tempel nomor yang disalin.
                                                            </li>
                                                            <li>
                                                                Masukkan nominal:  Rp100.000
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="text-lg">
                                                        Verifikasi Pembayaran: Kembali ke website dan pilih Konfirmasi Pembayaran.
                                                    </li>
                                                    <li className="text-lg">
                                                        Upload Bukti Transfer: Unggah foto bukti transfer.
                                                    </li>
                                                    <li className="text-lg">
                                                        Tunggu Konfirmasi: Pembayaran akan diverifikasi dan Anda akan menerima notifikasi status pembayaran.
                                                    </li>
                                                </ul>
                                            </li>
                                        </ol>
                                    </Col>
                                </Row>
                            )
                        }

                        {
                            (current == 1) && (
                                <Row gutter={[30,0]}>
                                    <Col xs={24} lg={10} className="!pe-10">
                                        <div>
                                            <Image preview={false} width="100%" height={300} className='object-cover rounded-xl' src={DataJasa[0].img} />
                                            <Title level={4} style={{fontWeight: 700}} className='my-2'>
                                                {DataJasa[0].nama}    
                                            </Title>
                                            <Title level={3} style={{fontWeight: 600}}>Deskripsi</Title>
                                            <Paragraph 
                                                ellipsis={
                                                { rows: 3, expandable: 'collapsible', symbol: showReadmore(expanded), onExpand: (_, info) => setExpanded(info.expanded),}
                                                }>
                                                    {DataJasa[0].deskripsi}    
                                            </Paragraph> 
                                            <Title level={3} style={{fontWeight: 600}}>Detail Pembayaran</Title> 
                                            <Flex justify="space-between" align="center">
                                                <p>Harga</p>
                                                <h2 className='text-xl font-bold text-violet-900'>
                                                    Rp250.000
                                                </h2>
                                            </Flex>
                                            <Flex justify="space-between" align="center" className="mt-4">
                                                <p>PPN</p>
                                                <h2 className='text-xl font-bold text-violet-900'>
                                                    Rp30.000
                                                </h2>
                                            </Flex>
                                            <hr className="mt-4" />
                                            <Flex justify="space-between" align="center" className="mt-4">
                                                <p>Total</p>
                                                <h2 className='text-xl font-bold text-violet-900'>
                                                    Rp280.000
                                                </h2>
                                            </Flex>
                                        </div> 
                                    </Col>
                                    <Col xs={24} lg={14}>
                                        <Form
                                            layout="vertical"
                                            requiredMark={true}
                                            form={form}
                                        >
                                            <Form.Item
                                                label="Nama Penjamu"
                                                name="namapenjamu"
                                                rules={[
                                                    {required: true, message: "Nama Penjamu Wajib Diisi"}
                                                ]}
                                            >
                                                <Input placeholder="Masukan Nama Penjamu" />
                                            </Form.Item>

                                            <Form.Item
                                                label="Alamat/Lokasi"
                                                name="alamat"
                                                rules={[
                                                    {required: true, message: "Alamat/Lokasi Wajib Diisi"}
                                                ]}
                                            >
                                                <Select 
                                                    placeholder="Masukan Alamat/Lokasi" 
                                                    dropdownRender={(menu) => (
                                                        <>
                                                          {menu}
                                                          <Divider
                                                            style={{
                                                              margin: '8px 0',
                                                            }}
                                                          />
                                                          <Space
                                                            style={{
                                                              padding: '0 8px 4px',
                                                            }}
                                                          >
                                                            <Input
                                                              placeholder="Masukan Alamat Baru"
                                                              ref={inputRef}
                                                              value={name}
                                                              onChange={onNameChange}
                                                              onKeyDown={(e) => e.stopPropagation()}
                                                            />
                                                            <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
                                                              Tambah Alamat
                                                            </Button>
                                                          </Space>
                                                        </>
                                                      )}
                                                      options={alamat.map((item) => ({
                                                        label: item,
                                                        value: item,
                                                      }))}
                                                    // options={[{value: "Taman Wira Sambangan Blok Cempaka I No. 4", label: "Taman Wira Sambangan Blok Cempaka I No. 4"}]}
                                                />
                                            </Form.Item>

                                            <Form.Item
                                                label="Jadwal"
                                                name="jadwal"
                                                rules={[
                                                    {required: true, message: "Jadwal Wajib Diisi"}
                                                ]}
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
                                                rules={[
                                                    {required: true, message: "Bank Account Wajib Diisi"}
                                                ]}
                                            >
                                                <Input size="large" placeholder="Masukan Nama Bank" prefix={<BankFilled className="pe-3" />} />
                                            </Form.Item>
                                            <Form.Item
                                                label="Nama Lengkap"
                                                name="namalengkap"
                                                rules={[
                                                    {required: true, message: "Nama Lengkap Wajib Diisi"}
                                                ]}
                                            >
                                                <Input size="large" placeholder="Masukan Nama Pengirim Bank" prefix={<UserAddOutlined className="pe-3" />} />
                                            </Form.Item>
                                            <Form.Item
                                                label="Akun Nomor Bank"
                                                name="nobank"
                                                rules={[
                                                    {required: true, message: "No Bank Wajib Diisi"}
                                                ]}
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
                                    <Button className="bg-violet-800 text-white hover:!bg-violet-700 hover:!text-white hover:!border-none" onClick={()=>navigate('/')} key="console">
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
                        {current == 0 && (
                            <Button className="bg-violet-800 text-white hover:!bg-violet-700 hover:!text-white hover:!border-none" onClick={() => next()}>
                                Selanjutnya
                            </Button>
                        )}
                        {current == 1 && (
                            <Button 
                                className="bg-violet-800 text-white hover:!bg-violet-700 hover:!text-white hover:!border-none"
                                onClick={() => {
                                    form.validateFields()
                                        .then(()=>{
                                            next();
                                            console.log("SUKSES")
                                        })
                                        .catch((err) => {
                                        console.log(err);
                                        })
                                }}
                            >
                                Konfirmasi
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