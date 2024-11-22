import { useState } from "react";
import { Button, Layout, Card, Row, Col, Flex, List, Input, Image } from 'antd';
import { FormatPainterFilled, RightCircleFilled, SearchOutlined, ClockCircleFilled, StarFilled, UserOutlined } from '@ant-design/icons'
import './index.css';
import ImageCard from './img/1.png';
import Logo from '../../assets/logo.png';
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { DataJasa } from "../../utils/constans";
import { formatCurrency } from "../../utils/ui";
import Link from "antd/es/typography/Link";

const dataDummy = [
  {key: 1, title: "Develop Your Skills Laravel and Filament", category: "Living Room", description: "The boy wtih blue hat", price: "150.000", tools: "Customer-Provided Tools", duration: "1 Hours"},
  {key: 2, title: "Web Event and Workshop Tickets Online", category: "Garden", description: "The girl wtih red hat", price: "150.000", tools: "Service-Provided Tools", duration: "3 Hours"},
  {key: 3, title: "Membuat CMS dan Super Admin Dengan Waktu yang Cepat", category: "Kitchen", description: "The mysterious person in the class", price: "150.000", tools: "Service-Provided Tools", duration: "5 Hours"},
  {key: 4, title: "Develop Your Skills Laravel and Filament", category: "Living Room", description: "The boy wtih blue hat", price: "150.000", tools: "Customer-Provided Tools", duration: "1 Hours"},
  {key: 5, title: "Web Event and Workshop Tickets Online", category: "Garden", description: "The girl wtih red hat", price: "150.000", tools: "Service-Provided Tools", duration: "3 Hours"},
  {key: 6, title: "Membuat CMS dan Super Admin Dengan Waktu yang Cepat", category: "Kitchen", description: "The mysterious person in the class", price: "150.000", tools: "Service-Provided Tools", duration: "5 Hours"},
]

const dataCategory = [
  {id: 0, label: "Semua", value: "Semua"},
  {id: 1, label: "Kamar Tamu", value: "Kamar Tamu"},
  {id: 3, label: "Dapur", value: "Dapur"},
  {id: 3, label: "Kamar Tidur", value: "Kamar Tidur"},
  {id: 2, label: "Kebun", value: "Kebun"},
  {id: 3, label: "Toilet", value: "Toilet"},
  {id: 3, label: "Atap", value: "Atap"},
]

const Homepage = () => {

  const [activeTabs, setActiveTabs] = useState("Semua");
  const [searchCategory, setSearchCategory] = useState("");
  const navigate = useNavigate();

  const tabsFiltered = (item) => {
    setActiveTabs(item?.value);
  }

  const handleSearchCategory = (e) => {
    setActiveTabs("Semua");
      setSearchCategory(e.target.value.toLowerCase());
  };

  const filteredData = activeTabs === 'Semua' ? DataJasa.filter((item) =>
    item.nama.toLowerCase().includes(searchCategory) ||
    item.deskripsi.toLowerCase().includes(searchCategory)) : 
    DataJasa.filter((item) => item.kategori === activeTabs);

  return (
    <div>
      <Row className='bg-violet-500 w-full h-96'>
        <Col xs={24}>
          <div className="layout px-4 lg:px-48 !bg-violet-500">
            <Flex className="pt-10"  justify='space-between' align='end'>
              <Link href="/">
                <Image src={Logo} className="!w-40" preview={false} />
              </Link>
              <Link href="/profile">
                <UserOutlined className="bg-white p-2 rounded-full text-violet-500"/>
              </Link>
            </Flex>
          </div>
          <Flex className='h-full pt-14' vertical justify='start' align='center'>
            <h1 className='text-4xl font-bold mb-2 mt-10 text-white text-center' data-aos="fade-up" data-aos-duration="2000">Temukan Jasa Yang Anda Butuhkan</h1>
            <p className="text-slate-300" data-aos="fade-up" data-aos-duration="3000">Solusi Rumah Anda, Kami yang Urus!,</p>
          </Flex>
        </Col>
      </Row>

      <div className="layout px-4 lg:px-48">
        <Layout className="bg-transparent">
          <div className="bg-category mt-10">
            <Row gutter={[24, 0]}>
              <Col md={24} xl={12}>              
                <List
                  grid={{
                    gutter: 10,
                    xs: 2,
                    sm: 4,
                    md: 5
                  }}
                  dataSource={dataCategory}
                  renderItem={(item) => (
                    <List.Item>
                        <button 
                          className={classNames(
                                  (activeTabs == item?.value ? 'bg-violet-500 border-violet-200 text-white' : 'bg-transparent text-slate-500' ), 
                                  'border border-slate-300 py-1 px-5 rounded-3xl mt-1')} 
                          onClick={()=>tabsFiltered(item)}
                          style={{ fontFamily: 'Montserrat',  }}    
                        >
                          {item?.label}
                        </button>
                    </List.Item>
                  )}
                /> 
              </Col>

              <Col xs={24} xl={12}>
                <Input 
                  className='custom-input bg-transparent text-slate-500 border-slate-400'
                  style={{ 
                    marginBottom: "20px", 
                    borderRadius: '100px', 
                    fontFamily: 'Montserrat'
                  }} 
                  size="large" 
                  placeholder="  Search Service . . ." 
                  prefix={<SearchOutlined style={{  marginRight: '5px' }}/>} 
                  onChange={handleSearchCategory}        
              />
              </Col>
            </Row>
          </div>

          <List
            grid={{
            gutter: 30,
            xs: 1,
            sm: 1,
            md: 2,
            lg: 2,
            xl: 3
            }}
            className="pb-5"
            dataSource={filteredData}
            renderItem={(item) => (
            <List.Item>
              <Card  style={{ borderRadius: 20, marginTop: 25, border: 'none' }}>
                <div className="img-card">
                  <div className="rate">
                    <span>{item?.rate}</span> <StarFilled style={{ marginTop: '4px', color: 'orange' }}/>
                  </div>
                  <img src={item?.img} alt="" style={{ borderRadius: 10 }}/>
                </div>

                <div className="extras-jasa flex mt-5">
                  <div className="type-jasa" style={{ display: 'flex' }}>
                    <FormatPainterFilled className="text-violet-500"/>
                    <p style={{ color: '#666', marginLeft: '5px' }}> {item?.topService}</p>
                  </div>

                  <div className="durasi-jasa" style={{ display: 'flex', marginLeft: 20 }}>
                    <ClockCircleFilled className="text-violet-500"/>
                    <p style={{ color: '#666', marginLeft: '5px' }}> {item?.estimasi}</p>
                  </div>
                </div>

                <h2 className="text-lg mt-3 leading-5">{item?.nama}</h2>
                <p style={{ color: '#acacac', marginTop: 10 }}>{item?.kategori}</p>

                <div className="harga-card text-xl" style={{ marginTop: 30, display: 'flex', justifyContent: 'space-between'}}>
                  <h2 className="text-violet-500">Rp {formatCurrency(item?.harga)}</h2>
                  <RightCircleFilled onClick={()=>navigate('/jasadetail')} className="text-violet-500" style={{ marginTop: '-5px', marginRight: 5, fontWeight: 700, fontSize: 30 }}/>
                </div>                  
              </Card> 
            </List.Item>
            )}
          />
        </Layout>
      </div>
    </div>
  )
}

export default Homepage;