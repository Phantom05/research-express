exports.page = (
  {
    path = "",
    template = require.resolve(
      "html-webpack-plugin/default_index.ejs"
    ),
    title,

    entry,

  } = {}
) => ({

  entry,

  plugins: [
    new HtmlWebpackPlugin({
      filename: `${path && path + "/"}index.html`,
      title,
    }),
  ],
});