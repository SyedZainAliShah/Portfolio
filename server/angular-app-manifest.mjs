
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Portfolio"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Portfolio",
    "route": "/Portfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1648, hash: '390a1d19ccfcd9242786a0baab811f83ecb892fb71fddf51aa04bb8084d3314c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 964, hash: '964f30971f5401d0eb3ecf31ef92645e39ea5907056bfade40355d41fda862bd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 45431, hash: '417053432b407f7ee07efb8a8a91a32da444c430cac1d5cd057694028073aa57', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 45431, hash: '417053432b407f7ee07efb8a8a91a32da444c430cac1d5cd057694028073aa57', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 45431, hash: '417053432b407f7ee07efb8a8a91a32da444c430cac1d5cd057694028073aa57', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 45431, hash: '417053432b407f7ee07efb8a8a91a32da444c430cac1d5cd057694028073aa57', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-XBNA2R4N.css': {size: 74275, hash: 'mhhL5bkGr8A', text: () => import('./assets-chunks/styles-XBNA2R4N_css.mjs').then(m => m.default)}
  },
};
