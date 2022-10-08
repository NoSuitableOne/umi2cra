import { defineConfig } from 'umi';

export default defineConfig({
  locale: {
    antd: true
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/a', component: '@/pages/pageA' },
    { path: '/b', component: '@/pages/pageB' },
    { path: '/c', component: '@/pages/pageC' },
  ],
  fastRefresh: {},
});
