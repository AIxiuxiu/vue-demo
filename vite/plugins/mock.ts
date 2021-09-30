import { viteMockServe } from 'vite-plugin-mock';

/**
 * 提供了本地和生产 mock 服务
 */
export default function createMock() {
  return viteMockServe({
    mockPath: 'src/mock',
    injectCode: `
            import { setupProdMockServer } from './mock/mockProdServer';
            setupProdMockServer();
        `
  });
}
