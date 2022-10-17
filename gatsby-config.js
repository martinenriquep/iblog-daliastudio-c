require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Gatsby Contentful Starter",
    description: "Official Contentful Gatsby Starter",
  },
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "py3grjtw5y7d",
        accessToken: "MDmFFni38Kl8RlHXHyi3ijrNatc3bKNN_zYRSrfKjcs",
        host: "preview.contentful.com"
      },
    },
  ],
};
