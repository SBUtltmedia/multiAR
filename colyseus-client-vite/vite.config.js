// // import { defineConfig } from 'vite'
// import mkcert from 'vite-plugin-mkcert'
// import basicSsl from '@vitejs/plugin-basic-ssl'

// // export default defineConfig({
// //   server: { https: false }, // Not needed for Vite 5+
// // //   plugins: [ mkcert() ]
// // })


import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  server: {
    https: true, // Enables HTTPS for Vite
    proxy: {
      '/matchmake': {
        target: 'http://localhost:2567', // Your server's HTTP endpoint
        changeOrigin: true,
        ws: true, // Enable WebSocket proxying
        rewrite: (path) => path.replace(/^\/matchmake/, ''), // Rewrite the path if needed
        secure: true, // Set to false if using self-signed certificates
      },
    },
  },
  plugins: [mkcert()],
});