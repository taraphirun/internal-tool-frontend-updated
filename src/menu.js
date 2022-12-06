import {
  mdiAccountCircle,
  mdiDesktopMac,
  mdiHelpCircle,
  mdiLock,
  mdiSquareEditOutline,
  mdiTable,
  mdiMenuOpen,
  mdiTelevisionGuide,
  mdiBarcode,
  mdiThemeLightDark,
  mdiPalette,
  mdiCardAccountDetailsOutline, 
  mdiHumanGreetingVariant,
  mdiViewDashboard,
  mdiGoogle,
  mdiFacebook
} from '@mdi/js'

export default [
  {
    to: '/',
    icon: mdiViewDashboard,
    label: 'Dashboard'
  },
  {
    to: '/onboarding',
    label: 'Onboarding',
    icon: mdiHumanGreetingVariant,
    updateMark: 'warning',
    menuSecondary: [
      {
        to: '/onboarding/facebook',
        label: 'Facebook',
        icon: mdiFacebook 
      },
      {
        label: 'Google',
        to: '/onboarding/google',
        icon: mdiGoogle
      }
    ]
  },
  {
    to: "/meetings",
    label: "Meetings",
    icon: mdiTable,
  }
  // {
  //   label: 'Dropdown',
  //   icon: mdiFormDropdown,
  //   menu: [
  //     {
  //       to: '/onboarding',
  //       label: 'Facebook',
  //       icon: mdiTable,
  //     },
  //     {
  //       to: '/onboarding',
  //       label: 'Google',
  //       icon: mdiTable,
  //     },
  //   ]
  // },
  // {
  //   to: '/tables-and-lists',
  //   label: 'Tables & Lists',
  //   icon: mdiTable,
  //   updateMark: 'warning'
  // },
  // {
  //   to: '/forms',
  //   label: 'Forms',
  //   icon: mdiSquareEditOutline
  // },
  // {
  //   to: '/ui',
  //   label: 'UI',
  //   icon: mdiTelevisionGuide
  // },
  // {
  //   to: '/styles',
  //   label: 'Styles',
  //   icon: mdiPalette
  // },
  // {
  //   label: 'Dark mode',
  //   icon: mdiThemeLightDark,
  //   darkModeToggle: true
  // },
  // {
  //   to: '/pricing',
  //   label: 'Pricing with very long item label',
  //   icon: mdiBarcode
  // },
  
  // {
  //   to: '/profile',
  //   label: 'Profile',
  //   icon: mdiAccountCircle,
  // },
  // {
  //   to: '/login',
  //   label: 'Login',
  //   icon: mdiLock
  // },
  // {
  //   // Key should be unique for each submenus object
  //   // It is required for open/close logic
  //   key: 'submenus-1',
  //   label: 'Sub',
  //   icon: mdiMenuOpen,
  //   to: '/onboarding',
  //   menuSecondary: [
  //     {
  //       to: '/profile',
  //       label: 'Sample RouterLink',
  //       icon: mdiCardAccountDetailsOutline 
  //     },
  //     {
  //       label: 'External link',
  //       href: 'https://justboil.me',
  //       icon: mdiOpenInNew,
  //       target: '_blank'
  //     },
  //     {
  //       label: 'Dropdown',
  //       icon: mdiFormDropdown,
  //       menu: [
  //         {
  //           label: 'Dropdown item One'
  //         },
  //         {
  //           label: 'Dropdown item Two'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   href: 'https://justboil.me/tailwind-admin-templates/vue-dashboard/',
  //   label: 'About',
  //   icon: mdiHelpCircle
  // }
]
