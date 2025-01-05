import { AppstoreOutlined, FileOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons'
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
                <span className="label font-[Inter]">Dashboard</span>
            </NavLink>),
        },
        {
            key: '2',
            icon: <UserOutlined />,
            label: ( <NavLink to="/ternaklele/admin/member">
                <span className="label font-[Inter]">Member</span>
            </NavLink>),
        },
        {
            key: '3',
            icon: <FiSmile  />,
            label: ( <NavLink to="/ternaklele/admin/staff">
                <span className="label font-[Inter]">Staff</span>
            </NavLink>),
        },
        {
            key: '4',
            icon: <FiLayers  />,
            label: ( <NavLink to="/ternaklele/admin/layanan">
                <span className="label font-[Inter]">Layanan</span>
            </NavLink>),
        },
        {
            key: '5',
            icon: <FiList   />,
            label: ( <NavLink to="/ternaklele/admin/transaksi">
                <span className="label font-[Inter]">Transaksi</span>
            </NavLink>),
        },
        {
            key: '6',
            icon: <FiLogOut   />,
            label: ( <NavLink to="">
                <span className="label font-[Inter]">Logout</span>
            </NavLink>),
        }
    ]

    return (
        <>
            <Sider trigger={null} collapsible  collapsed={props.collapse} style={{height: '100vh', padding:'15px', position: 'fixed'}}>
                <div className="demo-logo-vertical" />
                <img className='img-fluid p-4 mb-5' src={Logo} />
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