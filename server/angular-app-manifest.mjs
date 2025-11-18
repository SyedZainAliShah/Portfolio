
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/portfolio",
    "route": "/portfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1745, hash: '855af146e6d8c6a1f72497e5befca65d7a673aa987c27ee02e033a8562b157ba', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1069, hash: 'e75a5cb5d1c59a441b72f40277553a486c4fb5193d4e66d4655f3142dfbaee07', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 68580, hash: '5253b2d6a48abd12155de99b57ab4029058b3932e1f2f5f4abf17d737d47f073', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 68580, hash: '5253b2d6a48abd12155de99b57ab4029058b3932e1f2f5f4abf17d737d47f073', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 68580, hash: '5253b2d6a48abd12155de99b57ab4029058b3932e1f2f5f4abf17d737d47f073', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 68580, hash: '5253b2d6a48abd12155de99b57ab4029058b3932e1f2f5f4abf17d737d47f073', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-N7JVF7XV.css': {size: 74267, hash: 'R6176GqsdXw', text: () => import('./assets-chunks/styles-N7JVF7XV_css.mjs').then(m => m.default)}
  },
};
