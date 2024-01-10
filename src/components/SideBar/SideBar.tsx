/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Sidebar, Menu, MenuItem, menuClasses, MenuItemStyles } from 'react-pro-sidebar';

import Invoice from './icons/Invoice';
import MenuIcon from './icons/MenuIcon';
import User from './icons/User';
import Users from './icons/Users';
import TwoUser from './icons/TwoUser';
import { ArrowDownLeftIcon } from '@heroicons/react/24/solid';


type Theme = 'light' | 'dark';

const themes = {
    light: {
        sidebar: {
            backgroundColor: '#ffffff',
            color: '#607489',
        },
        menu: {
            menuContent: '#fbfcfd',
            icon: '#706F6F',
            hover: {
                backgroundColor: '#c5e4ff',
                color: '#44596e',
            },
            disabled: {
                color: '#9fb6cf',
            },
        },
    },
    dark: {
        sidebar: {
            backgroundColor: '#0b2948',
            color: '#8ba1b7',
        },
        menu: {
            menuContent: '#082440',
            icon: '#59d0ff',
            hover: {
                backgroundColor: '#00458b',
                color: '#b6c8d9',
            },
            disabled: {
                color: '#3e5e7e',
            },
        },
    },
};

// hex to rgba converter
const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};




export const SideBar: React.FC = () => {
    const [collapsed, setCollapsed] = React.useState(false);
    const [toggled, setToggled] = React.useState(false);
    const [broken, setBroken] = React.useState(false);
    const [hasImage, setHasImage] = React.useState(false);
    const [theme, setTheme] = React.useState<Theme>('light');

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };


    (window as any).broken = broken;
    (window as any).setHasImage = setHasImage;
    (window as any).setTheme = setTheme;
    

    const menuItemStyles: MenuItemStyles = {
        root: {
            fontSize: '13px',
            fontWeight: 400,
        },
        icon: {
            color: themes[theme].menu.icon,
            [`&.${menuClasses.disabled}`]: {
                color: themes[theme].menu.disabled.color,
            },
        },
        SubMenuExpandIcon: {
            color: '#b6b7b9',
        },
        subMenuContent: ({ level }) => ({
            backgroundColor:
                level === 0
                    ? hexToRgba(themes[theme].menu.menuContent, hasImage && !collapsed ? 0.4 : 1)
                    : 'transparent',
        }),
        button: {
            [`&.${menuClasses.disabled}`]: {
                color: themes[theme].menu.disabled.color,
            },
            '&:hover': {
                backgroundColor: hexToRgba(themes[theme].menu.hover.backgroundColor, hasImage ? 0.8 : 1),
                color: themes[theme].menu.hover.color,
            },
        },
        label: ({ open }) => ({
            fontWeight: open ? 600 : undefined,
        }),
    };


    return (
        <div style={{ display: 'flex', height: '100%', minHeight: '195vh' }}>
            <Sidebar
                collapsed={collapsed}
                toggled={toggled}
                onBackdropClick={() => setToggled(false)}
                onBreakPoint={setBroken}
                breakPoint="md"
                backgroundColor={hexToRgba(themes[theme].sidebar.backgroundColor, hasImage ? 0.9 : 1)}
                rootStyles={{
                    color: themes[theme].sidebar.color,
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <div style={{ flex: 1, marginBottom: '32px' }}>
                        <button onClick={toggleSidebar} style={{ marginBottom: '16px' }}>
                            <ArrowDownLeftIcon className='mx-6 h-7'/>
                        </button>
                        <Menu menuItemStyles={menuItemStyles}>
                            <MenuItem icon={<MenuIcon />}>
                                <div className='text-xl font-semibold'>
                                    Dashboard
                                </div>
                                </MenuItem>
                            <MenuItem icon={<User />}>
                                <div className='text-xl font-semibold'>
                                    Profile
                                </div>
                            </MenuItem>

                            <MenuItem icon={<Invoice />}>
                                <div className='text-xl font-semibold'>
                                    Invoice
                                  
                                </div>
                            </MenuItem>

                           
                            
                            <MenuItem icon={<TwoUser />}>
                                <div className='text-xl font-semibold'>
                                    Customers
                                </div>
                                </MenuItem>
                            <MenuItem icon={<Users />}><div className='text-xl font-semibold'>
                                Users
                            </div>
                            </MenuItem>

                        </Menu>
                    </div>
                </div>
            </Sidebar>


        </div>
    );
};