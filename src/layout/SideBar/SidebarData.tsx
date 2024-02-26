import React from 'react';

const MenuItems : any = [
    {
        menutitle: "MAIN",
        id: 1,
        Items: [
            {
                path: `${import.meta.env.BASE_URL}dashboard`,
                icon: (<svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="24" height="24" viewBox="0 0 24 24"><path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z" /></svg>),
                type: 'link',
                active: false,
                selected: false,
                title: 'Dashboard'
            },
        ]
    },

    {
        menutitle: "CUSTOM & SUB MENUS",
        id: 5,
        Items: [
           
            {
                path: `${import.meta.env.BASE_URL}Submenus`,
                icon: (<svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" /></svg>),
                type: 'sub',
                active: false,
                selected: false,
                title: 'Submenus',
                children: [
                    {
                        type: 'sub', active: false, selected: false, title: 'Submenu1', children:
                            [
                                { path: `${import.meta.env.BASE_URL}`, type: 'link', active: false, selected: false, title: 'Submenu1.1' },
                                { path: `${import.meta.env.BASE_URL}`, type: 'link', active: false, selected: false, title: 'Submenu1.2' },
                                { path: `${import.meta.env.BASE_URL}`, type: 'link', active: false, selected: false, title: 'Submenu1.3' },

                            ]
                    },
                    { path: `${import.meta.env.BASE_URL}`, type: 'link', active: false, selected: false, title: 'Submenus2' },

                ]
            },

        ]
    },
    {
    menutitle: "PAGES & ERROR PAGES",
    id: 6,
    Items: [
        {
            path: `${import.meta.env.BASE_URL}ErrorPages`, 
            icon:(<svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="24" height="24" viewBox="0 0 24 24">
            <path d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 14c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v8z"></path>
            <path d="M11 6h2v8h-2zm0 10h2v2h-2z"></path></svg>),
            type: 'sub',
            active: false,
            selected: false,
            title: 'ErrorPages',
            children: [
                { path: `${import.meta.env.BASE_URL}ErrorPages/error400`, type: 'link', active: false, selected: false, title: '400' },
               

            ]

        },
    ]

    }

];
export default MenuItems;

