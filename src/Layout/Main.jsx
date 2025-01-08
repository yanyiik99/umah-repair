import React, { useState } from 'react';
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Layout, theme } from 'antd';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import { jwtStorage } from '../utils/jwt_storage';

const { Header } = Layout;

function Main({children}) {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const navigate = useNavigate()
    
    const doLogout = () => {
      jwtStorage.removeItem();
      navigate('/ternaklele/admin/login', {replace: true})
    }


    return (
        <Layout className='!overflow-hidden'>
            <Sidebar collapse={collapsed} />
            <div className='w-52 bg-red-800 relative -z-20'></div>
            <Layout className='relative '>
                <Header
                  style={{
                      padding: 0,
                      background: colorBgContainer,
                  }}
                  className='w-full flex justify-between items-center'
                >
               
                {/* <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                      fontSize: '16px',
                      width: 64,
                      height: 64,
                    }}
                /> */}
                 <Button className="btn-sign-out" type="button" onClick={() => doLogout()}>
                  <LogoutOutlined />
                  <span>Logout</span>
                </Button>
                </Header>
                {children}
            </Layout>
        </Layout>
    );
};
export default Main;