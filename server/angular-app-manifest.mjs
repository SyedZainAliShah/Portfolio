
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/MyPortfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/MyPortfolio"
  },
  {
    "renderMode": 2,
    "route": "/MyPortfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/MyPortfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/MyPortfolio/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/MyPortfolio",
    "route": "/MyPortfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1650, hash: 'ca6a13fa4df9be27b0bb97024e2d5b723668e0f6cdaeb1819fb45582b22f60b9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 966, hash: '7ce2e58dfa45e3e30d4fbcdd8a3efd4c342c7447ffafdaeb1e9a055d78021fda', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 45433, hash: 'd7ca16d302c364ab40ca7b919a3c811de40934a2d891a22a8cd93746ee66caf6', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 45433, hash: 'd7ca16d302c364ab40ca7b919a3c811de40934a2d891a22a8cd93746ee66caf6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 45433, hash: 'd7ca16d302c364ab40ca7b919a3c811de40934a2d891a22a8cd93746ee66caf6', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 45433, hash: 'd7ca16d302c364ab40ca7b919a3c811de40934a2d891a22a8cd93746ee66caf6', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-XBNA2R4N.css': {size: 74275, hash: 'mhhL5bkGr8A', text: () => import('./assets-chunks/styles-XBNA2R4N_css.mjs').then(m => m.default)}
  },
};
