
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://SyedZainAliShah.github.io/Portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/https://SyedZainAliShah.github.io/Portfolio"
  },
  {
    "renderMode": 2,
    "route": "/https://SyedZainAliShah.github.io/Portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/https://SyedZainAliShah.github.io/Portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/https://SyedZainAliShah.github.io/Portfolio/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/https://SyedZainAliShah.github.io/Portfolio",
    "route": "/https://SyedZainAliShah.github.io/Portfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1637, hash: '540f8e65bda5004943bba16052d8adf2b96d84f19fc77bdc78f71c151de78db6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 964, hash: '9d1695207e7feb762e0eaaec871ea1d17f28f67131c8a431e453752af5ee1d21', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 44332, hash: '745c394400f0b35935d8d7cac6bb728e53dd4fae47f5d11db0929697b13d8c98', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 44332, hash: '745c394400f0b35935d8d7cac6bb728e53dd4fae47f5d11db0929697b13d8c98', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'index.html': {size: 44332, hash: '745c394400f0b35935d8d7cac6bb728e53dd4fae47f5d11db0929697b13d8c98', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 44332, hash: '745c394400f0b35935d8d7cac6bb728e53dd4fae47f5d11db0929697b13d8c98', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-XBNA2R4N.css': {size: 74275, hash: 'mhhL5bkGr8A', text: () => import('./assets-chunks/styles-XBNA2R4N_css.mjs').then(m => m.default)}
  },
};
