import { useState } from "react";
import { Button, Layout, Card, Row, Col, Flex, List, Input } from 'antd';
import { FormatPainterFilled, RightCircleFilled, SearchOutlined, ClockCircleFilled, StarFilled } from '@ant-design/icons'
import './index.css';
import ImageCard from './img/1.png';
import classNames from "classnames";

const dataDummy = [
  {key: 1, title: "Develop Your Skills Laravel and Filament", category: "Living Room", description: "The boy wtih blue hat", price: "150.000", tools: "Customer-Provided Tools", duration: "1 Hours"},
  {key: 2, title: "Web Event and Workshop Tickets Online", category: "Garden", description: "The girl wtih red hat", price: "150.000", tools: "Service-Provided Tools", duration: "3 Hours"},
  {key: 3, title: "Membuat CMS dan Super Admin Dengan Waktu yang Cepat", category: "Kitchen", description: "The mysterious person in the class", price: "150.000", tools: "Service-Provided Tools", duration: "5 Hours"},
  {key: 4, title: "Develop Your Skills Laravel and Filament", category: "Living Room", description: "The boy wtih blue hat", price: "150.000", tools: "Customer-Provided Tools", duration: "1 Hours"},
  {key: 5, title: "Web Event and Workshop Tickets Online", category: "Garden", description: "The girl wtih red hat", price: "150.000", tools: "Service-Provided Tools", duration: "3 Hours"},
  {key: 6, title: "Membuat CMS dan Super Admin Dengan Waktu yang Cepat", category: "Kitchen", description: "The mysterious person in the class", price: "150.000", tools: "Service-Provided Tools", duration: "5 Hours"},
]

const dataCategory = [
  {id: 0, label: "All", value: "all"},
  {id: 1, label: "Living Room", value: "Living Room"},
  {id: 2, label: "Garden", value: "Garden"},
  {id: 3, label: "Kitchen", value: "Kitchen"},
]

const Homepage = () => {

  const [activeTabs, setActiveTabs] = useState("all");
  const [searchCategory, setSearchCategory] = useState("");

  const tabsFiltered = (item) => {
    setActiveTabs(item?.value);
  }

  const handleSearchCategory = (e) => {
    setActiveTabs("all");
      setSearchCategory(e.target.value.toLowerCase());
  };

  const filteredData = activeTabs === 'all' ? dataDummy.filter((item) =>
    item.title.toLowerCase().includes(searchCategory) ||
    item.description.toLowerCase().includes(searchCategory)) : 
    dataDummy.filter((item) => item.category === activeTabs);

  return (
    <div>
      <Row className='bg-violet-500 w-full h-72'>
        <Col xs={24}>
          <Flex className='h-full pt-10' vertical justify='start' align='center'>
            <h1 className='text-4xl font-bold mb-2 mt-10 text-white'>Discover Top Hom Service</h1>
            <p className="text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Flex>
        </Col>
      </Row>

      <div className="layout">
        <Layout className="bg-transparent">

          <div className="bg-category mt-10">
            <Row gutter={[24, 0]}>
              <Col md={24} xl={12}>              
                <List
                  grid={{
                    gutter: 10,
                    xs: 2,
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

              <Col md={24} xl={12}>
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
              <Card style={{ borderRadius: 20, marginTop: 25, border: 'none' }}>
                <div className="img-card">
                  <div className="rate">
                    <span>4.5</span> <StarFilled style={{ marginTop: '4px', color: 'orange' }}/>
                  </div>
                  <img src={ImageCard} alt="" style={{ borderRadius: 10 }}/>
                </div>

                <div className="extras-jasa flex mt-5">
                  <div className="type-jasa" style={{ display: 'flex' }}>
                    <FormatPainterFilled className="text-violet-500"/>
                    <p style={{ color: '#666', marginLeft: '5px' }}> {item?.tools}</p>
                  </div>

                  <div className="durasi-jasa" style={{ display: 'flex', marginLeft: 20 }}>
                    <ClockCircleFilled className="text-violet-500"/>
                    <p style={{ color: '#666', marginLeft: '5px' }}> {item?.duration}</p>
                  </div>
                </div>

                <h2 className="text-lg mt-3 leading-5">{item?.title}</h2>
                <p style={{ color: '#acacac', marginTop: 10 }}>{item?.category}</p>

                <div className="harga-card text-xl" style={{ marginTop: 30, display: 'flex', justifyContent: 'space-between'}}>
                  <h2 className="text-violet-500">Rp {item?.price}</h2>
                  <RightCircleFilled className="text-violet-500" style={{ marginTop: '-5px', marginRight: 5, fontWeight: 700, fontSize: 30 }}/>
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