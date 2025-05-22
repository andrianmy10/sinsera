import { ADMIN_PREFIX_PATH } from '@/constants/route.constant'
import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_ITEM,
    NAV_ITEM_TYPE_COLLAPSE,
} from '@/constants/navigation.constant'
import {ADMIN} from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const schoolAdminAreaNavigationConfig: NavigationTree[] = [
    {
        key: 'adminArea',
        path: '',
        title: 'ADMIN AREA',
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
                key: 'adminArea.dashboardAdmin',
                path: `${ADMIN_PREFIX_PATH}/dashboard`,
                title: 'Dashboard',
                icon: 'dashboard',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN],
                subMenu: [],
            },
            {
                key: 'adminArea.sekolah',
                path: `${ADMIN_PREFIX_PATH}/sekolah`,
                title: 'Data Sekolah',
                icon: 'school',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN],
                subMenu: [
                    {
                        key: 'adminArea.sekolah.sekolah',
                        path: `${ADMIN_PREFIX_PATH}/sekolah/manage`,
                        title: 'Kelola Sekolah',
                        icon: 'accountRoleAndPermission',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN],
                        subMenu: [],
                    },
                    {
                        key: 'adminArea.sekolah.organisasi',
                        path: `${ADMIN_PREFIX_PATH}/sekolah/organisasi`,
                        title: 'Struktur Organisasi',
                        icon: 'accountRoleAndPermission',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN],
                        subMenu: [],
                    },
                    {
                        key: 'adminArea.sekolah.satuan',
                        path: `${ADMIN_PREFIX_PATH}/sekolah/satuan`,
                        title: 'Satuan Kerja',
                        icon: 'accountRoleAndPermission',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN],
                        subMenu: [],
                    },
                    {
                        key: 'adminArea.sekolah.grup',
                        path: `${ADMIN_PREFIX_PATH}/sekolah/grup`,
                        title: 'Kelola Grup',
                        icon: 'accountRoleAndPermission',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN],
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'adminArea.pegawai',
                path: '',
                title: 'Data Pegawai',
                icon: 'account',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN],
                subMenu: [
                    {
                        key: 'adminArea.pegawai.pegawai',
                        path: `${ADMIN_PREFIX_PATH}/pegawai/manage`,
                        title: 'Kelola Pegawai',
                        icon: 'accountRoleAndPermission',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN],
                        subMenu: [],
                    }
                ],
            },
        ],
    },
]

export default schoolAdminAreaNavigationConfig
