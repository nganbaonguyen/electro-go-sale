import path from 'node:path';
import * as Repack from '@callstack/repack';

const __dirname = Repack.getDirname(import.meta.url);

/**
 * Cấu hình Re.Pack của mini app Bán hàng: đóng vai trò REMOTE của Module Federation.
 *   - Expose './App' (component gốc) để host nạp động bằng import('sale/App').
 *   - Chạy dev: `pnpm start:module` (cổng 9002); host đọc http://localhost:9002/<platform>/mf-manifest.json
 *   - Thư viện dùng chung (react, react-native, ...) lấy từ host, không đóng gói lại.
 *   - entry `./dev/index.js` chỉ dùng khi chạy riêng (khung Harness), host không chạy file này.
 */
const shared = Object.fromEntries(
  ['react', 'react-native', 'react-native-safe-area-context'].map(name => [
    name,
    // import: false = không đóng gói bản dự phòng, luôn dùng bản của host (nhẹ hơn nhiều)
    {singleton: true, eager: false, requiredVersion: '*', import: false},
  ]),
);

export default Repack.defineRspackConfig(env => {
  const {mode, platform} = env;

  return {
    mode,
    context: __dirname,
    entry: './dev/index.js',
    // enablePackageExports: Module Federation 2 cần đọc trường `exports` của package
    resolve: {...Repack.getResolveOptions({enablePackageExports: true})},
    output: {
      path: path.join(__dirname, 'build/generated', platform),
      uniqueName: 'electrogo-sale',
    },
    module: {
      rules: [...Repack.getJsTransformRules(), ...Repack.getAssetTransformRules()],
    },
    plugins: [
      new Repack.RepackPlugin(),
      new Repack.plugins.ModuleFederationPluginV2({
        name: 'sale',
        // Tên file container khác index.bundle (file entry) để không bị trùng
        filename: 'sale.container.js.bundle',
        dts: false,
        exposes: {'./App': './src/index.tsx'},
        shared,
      }),
    ],
  };
});
