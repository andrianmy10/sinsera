import { SUPER_ADMIN_PREFIX_PATH } from '@/constants/route.constant'
import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_ITEM,
    NAV_ITEM_TYPE_COLLAPSE,
} from '@/constants/navigation.constant'
import {ADMIN} from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const superAdminAreaNavigationConfig: NavigationTree[] = [
    {
        key: 'superAdminArea',
        path: '',
        title: 'Super Admin Area',
        icon: 'dashboard',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [ADMIN],
        meta: {
            horizontalMenu: {
                layout: 'default',
            },
        },
        subMenu: [
            {
                key: 'superAdminArea.dashboardSuperAdmin',
                path: `${SUPER_ADMIN_PREFIX_PATH}/dashboard`,
                title: 'Dashboard',
                icon: 'dashboard',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN],
                subMenu: [],
            },
            {
                key: 'superAdminArea.subscription',
                path: `${SUPER_ADMIN_PREFIX_PATH}/subscription`,
                title: 'Subscription',
                icon: 'subscription',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN],
                subMenu: [],
            },
            {
                key: 'superAdminArea.pegawai',
                path: '',
                title: 'Data Pegawai',
                icon: 'account',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN],
                subMenu: [
                    {
                        key: 'superAdminArea.pegawai.pegawai',
                        path: `${SUPER_ADMIN_PREFIX_PATH}/pegawai/manage`,
                        title: 'Kelola Pegawai',
                        icon: 'accountRoleAndPermission',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN],
                        subMenu: [],
                    },
                    {
                        key: 'superAdminArea.pegawai.grup',
                        path: `${SUPER_ADMIN_PREFIX_PATH}/pegawai/grup`,
                        title: 'Kelola Grup',
                        icon: 'accountRoleAndPermission',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN],
                        subMenu: [],
                    },
                    {
                        key: 'superAdminArea.pegawai.roles',
                        path: `${SUPER_ADMIN_PREFIX_PATH}/pegawai/roles`,
                        title: 'Kelola Roles',
                        icon: 'accountRoleAndPermission',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN],
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'superAdminArea.setting',
                path: '',
                title: 'Setting',
                icon: 'accountSettings',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN],
                subMenu: [
                    {
                        key: 'superAdminArea.setting.website',
                        path: `${SUPER_ADMIN_PREFIX_PATH}/setting/website`,
                        title: 'Kelola Website',
                        icon: 'accountRoleAndPermission',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN],
                        subMenu: [],
                    },
                    {
                        key: 'superAdminArea.setting.sekolah',
                        path: `${SUPER_ADMIN_PREFIX_PATH}/setting/sekolah`,
                        title: 'Kelola Sekolah',
                        icon: 'accountRoleAndPermission',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN],
                        subMenu: [],
                    },
                    {
                        key: 'superAdminArea.setting.roles',
                        path: `${SUPER_ADMIN_PREFIX_PATH}/setting/roles`,
                        title: 'Hak Akses Roles',
                        icon: 'accountRoleAndPermission',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN],
                        subMenu: [],
                    },
                    {
                        key: 'superAdminArea.setting.modul',
                        path: `${SUPER_ADMIN_PREFIX_PATH}/setting/modul`,
                        title: 'Kelola Modul',
                        icon: 'accountRoleAndPermission',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN],
                        subMenu: [],
                    },
                    {
                        key: 'superAdminArea.setting.addon',
                        path: `${SUPER_ADMIN_PREFIX_PATH}/setting/addon`,
                        title: 'Kelola Add-On',
                        icon: 'accountRoleAndPermission',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN],
                        subMenu: [],
                    },
                ],
            },
        ],
    },
]

export default superAdminAreaNavigationConfig
