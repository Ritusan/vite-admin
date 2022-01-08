import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import WindiCSS from 'vite-plugin-windicss'
import PurgeIcons from 'vite-plugin-purge-icons'

import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    WindiCSS(),
    PurgeIcons({
      // PurgeIcons Options
    })
  ],
  resolve: {
    // extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    alias: [
      { find: '@', replacement: path.resolve(__dirname, '/src') }
    ],  
  },
  server: {
    host: true,
    port: 8080,
  }
})
