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
                key: 'superAdminArea.employee',
                path: '',
                title: 'Data Employee',
                icon: 'account',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN],
                subMenu: [
                    {
                        key: 'superAdminArea.employee.employee',
                        path: `${SUPER_ADMIN_PREFIX_PATH}/employee/manage`,
                        title: 'Manage Employee',
                        icon: 'accountRoleAndPermission',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN],
                        subMenu: [],
                    },
                    {
                        key: 'superAdminArea.employee.group',
                        path: `${SUPER_ADMIN_PREFIX_PATH}/employee/group`,
                        title: 'Manage Group',
                        icon: 'accountRoleAndPermission',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN],
                        subMenu: [],
                    },
                    {
                        key: 'superAdminArea.employee.roles',
                        path: `${SUPER_ADMIN_PREFIX_PATH}/employee/roles`,
                        title: 'Manage Roles',
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
                        title: 'Manage Website',
                        icon: 'accountRoleAndPermission',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN],
                        subMenu: [],
                    },
                    {
                        key: 'superAdminArea.setting.school',
                        path: `${SUPER_ADMIN_PREFIX_PATH}/setting/school`,
                        title: 'Manage School',
                        icon: 'accountRoleAndPermission',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN],
                        subMenu: [],
                    },
                    {
                        key: 'superAdminArea.setting.roles',
                        path: `${SUPER_ADMIN_PREFIX_PATH}/setting/roles`,
                        title: 'Roles Permission',
                        icon: 'accountRoleAndPermission',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN],
                        subMenu: [],
                    },
                    {
                        key: 'superAdminArea.setting.module',
                        path: `${SUPER_ADMIN_PREFIX_PATH}/setting/module`,
                        title: 'Manage Module',
                        icon: 'accountRoleAndPermission',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN],
                        subMenu: [],
                    },
                    {
                        key: 'superAdminArea.setting.addon',
                        path: `${SUPER_ADMIN_PREFIX_PATH}/setting/addon`,
                        title: 'Manage Add-On',
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
