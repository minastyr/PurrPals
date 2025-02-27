import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/* export default defineConfig({
  root: 'Client',
  build: {
    outDir: 'build',
    rollupOptions: {
      input: './Client/public/index.html',
    },
  },
  plugins: [react()],
});
 */
export default defineConfig({
  plugins: [react()],
  root: 'Client',
  build: {
    outDir: 'build',
    rollupOptions: {
      input: './Client/public/index.html',
    },
  },
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: "load-js-files-as-jsx",
          setup(build) {
            build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => ({
              loader: "jsx",
              contents: await fs.readFile(args.path, "utf8"),
            }));
          },
        },
      ],
    },
  },
});