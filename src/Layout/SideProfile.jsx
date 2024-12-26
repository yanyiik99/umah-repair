import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { Menu, Layout, Image } from 'antd'
import { SettingOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { FiLogOut } from "react-icons/fi";
const { Sider } = Layout;

import AvatarImage from '../pages/Profile/img/1.jpg';

function SideProfile (props) {
    const [selectedKey, setSelectedKey] = useState("1");

    const handleMenuKey = (key) => {
        setSelectedKey(key);
    };

    const menuItems = [
        {
            key: '1',
            icon: <UserOutlined />,
            label: ( <NavLink to="/profile/dataprofile">
                <span className="label">Profile</span>
            </NavLink>),
        },
        {
            key: '2',
            icon: <ShoppingCartOutlined />,
            label: ( <NavLink to="/profile/transaksi">
                <span className="label">Transaksi</span>
            </NavLink>),
        },
        {
            key: '3',
            icon: <FiLogOut />,
            label: 'Logout',
        },
    ]

    return (
        <>
            <Sider trigger={null} collapsible collapsed={props.collapse} className="flex flex-col w-full rounded-3xl p-5 gap-4 bg-white">
                <div className="img-profile flex flex-col items-center">
                    <Image src={AvatarImage} width="100px" className="rounded-full" preview={false} />
                    <h3 class="text-md leading-17 tracking-05 mt-3">Wahyu Sucipta</h3>
                    <p class="text-xs leading-14 tracking-05 opacity-50 font-[Inter]">wahyuscpta13@gmail.com</p>
                </div>
                
                <hr class="border-black opacity-10 my-5"/>

                <Menu
                    className='font-[Inter] flex flex-col gap-2 border-inline-end-none'
                    defaultSelectedKeys={[selectedKey]}
                    items={menuItems}
                    onSelect={handleMenuKey}                
                />
            </Sider>
        </>
    );
}

export default SideProfile