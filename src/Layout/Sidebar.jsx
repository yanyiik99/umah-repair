import { AppstoreOutlined, FileOutlined, UserOutlined } from '@ant-design/icons'
import { Menu, theme, Layout, Button } from 'antd'
import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
const { Sider } = Layout;
import Logo from '../assets/logo.png'
import { FiLogOut, FiLayers, FiList,FiSmile } from "react-icons/fi";
import { jwtStorage } from '../utils/jwt_storage';

function Sidebar (props) {
    const [selectedKey, setSelectedKey] = useState("1");
    const navigate = useNavigate()

    const handleMenuKey = (key) => {
        setSelectedKey(key);
    };

    const doLogout = () => {
        jwtStorage.removeItem();
        navigate('/ternaklele/admin/login', {replace: true})
      }
    

    const menuItems = [
        {
            key: '1',
            icon: <AppstoreOutlined />,
            label: ( <NavLink to="/ternaklele/admin/dashboard">
                <span className="label">Dashboard</span>
            </NavLink>),
        },
        {
            key: '2',
            icon: <UserOutlined />,
            label: ( <NavLink to="/ternaklele/admin/member">
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
        }
    ]

    return (
        <>
            <Sider trigger={null} collapsible  collapsed={props.collapse} style={{height: '100vh'}}>
                <div className="demo-logo-vertical" />
                <img className='img-fluid p-4' src={Logo} />
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