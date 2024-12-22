import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Layout, theme } from 'antd';
import Sidebar from './Sidebar';

const { Header } = Layout;

function Main({children}) {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();


    return (
        <Layout>
            <Sidebar collapse={collapsed} />
            <Layout>
                <Header
                style={{
                    padding: 0,
                    background: colorBgContainer,
                }}
                >
                <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                    }}
                />
                </Header>
                {children}
            </Layout>
        </Layout>
    );
};
export default Main;