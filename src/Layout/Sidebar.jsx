import { AppstoreOutlined, FileOutlined, UserOutlined } from '@ant-design/icons'
import { Menu, theme, Layout } from 'antd'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
const { Sider } = Layout;
import Logo from '../assets/logo.png'
import { FiLogOut, FiLayers, FiList,FiSmile } from "react-icons/fi";

function Sidebar (props) {
    const [selectedKey, setSelectedKey] = useState("1");

    const handleMenuKey = (key) => {
        setSelectedKey(key);
    };

    const menuItems = [
        {
            key: '1',
            icon: <AppstoreOutlined />,
            label: ( <NavLink to="/admin/dashboard">
                <span className="label">Dashboard</span>
            </NavLink>),
        },
        {
            key: '2',
            icon: <UserOutlined />,
            label: ( <NavLink to="/admin/member">
                <span className="label">Setup Member</span>
            </NavLink>),
        },
        {
            key: '3',
            icon: <FiSmile  />,
            label: ( <NavLink to="#">
                <span className="label">Setup Staff</span>
            </NavLink>),
        },
        {
            key: '4',
            icon: <FiLayers  />,
            label: ( <NavLink to="#">
                <span className="label">Setup Layanan</span>
            </NavLink>),
        },
        {
            key: '5',
            icon: <FiList   />,
            label: ( <NavLink to="#">
                <span className="label">Transaksi</span>
            </NavLink>),
        },
        {
            key: '10',
            icon: <FiLogOut />,
            label: 'Logout',
        },
    ]

    return (
        <>
            <Sider trigger={null} collapsible  collapsed={props.collapse} style={{height: '100vh'}}>
                <div className="demo-logo-vertical" />
                <img class='img-fluid p-4' src={Logo} />
                <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={[selectedKey]}
                items={menuItems}
                onSelect={handleMenuKey}
                />
            </Sider>
        </>
    );
}

export default Sidebar