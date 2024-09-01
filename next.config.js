import path from 'path';

export default {
  webpack(config) {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
        {
          loader: 'resolve-url-loader',
          options: {
            sourceMap: true,
            root: path.resolve('src'),
          },
        },
      ],
      include: path.resolve('src'),
    });

    return config;
  },
};
