import React, { useState } from 'react';
import {
    AppstoreAddOutlined,
    AppstoreOutlined,
    DashboardFilled,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserAddOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Card, Col, Layout, Menu, Row, theme } from 'antd';
import { NavLink } from 'react-router-dom';
import Sidebar from '../../Layout/Sidebar';

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
    return (        
        <>
            <Sidebar />

            {/* <Col xs={11}>
                <Card className='bg-red-400'>
                    DASHBOARD SIDE
                </Card>
            </Col>
            <Col xs={11}>
                <Card className='bg-red-400'>
                    RIGHT SIDE
                </Card>
            </Col> */}
        </>
    );
};
export default Dashboard;