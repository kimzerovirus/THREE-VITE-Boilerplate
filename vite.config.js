import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
// 절대경로 설정을 읽어들이려면 아래 설정이 필요함
export default defineConfig({
	plugins: [tsconfigPaths()],
});
