// /** @type {import('next').NextConfig} */
// const nextConfig = {}
// const { withNextGoogleFonts } = require('next-google-fonts');
// // const withGoogleFonts = require('next-google-fonts');

// module.exports = withNextGoogleFonts({
//   googleFonts: {
//     fonts: [
//       {
//         family: 'Roboto',
//         weights: ['400', '700'],
//       },
//       // Thêm các font khác nếu cần
//     ],
//   },
// });

module.exports = {
    // Cấu hình các thiết lập khác của Next.js
    // ...
    // Cấu hình favicon
    async headers() {
      return [
        {
          source: '/favicon.ico',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=604800, immutable',
            },
          ],
        },
      ];
    },
  };
  