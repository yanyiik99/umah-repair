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

const { Header, Sider } = Layout;

const MasterMember = () => {

    return (
        <Row justify="space-around" className='mt-4'>
            <Col xs={11}>
                <Card className='bg-red-400'>
                    MEMBER SIDE
                </Card>
            </Col>
            <Col xs={11}>
                <Card className='bg-red-400'>
                    RIGHT SIDE
                </Card>
            </Col>
        </Row>
    );
};
export default MasterMember;