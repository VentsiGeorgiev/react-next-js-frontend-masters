// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import path from "path";

const nextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
