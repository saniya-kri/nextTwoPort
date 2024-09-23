const nextConfig = {
  webpack: (config, { isServer }) => {
    // Ignore critical dependency warnings
    config.ignoreWarnings = [
      /critical dependency: the request of a dependency is an expression/,
    ];
    return config;
  },
};

export default nextConfig;
