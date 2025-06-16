module.exports = {
  siteMetadata: {
    title: "Heamdally.nett",
    description:
      "Butuh internet cepat dan stabil di rumah atau kantor? Hemdally.net menyediakan jasa pasang WiFi profesional dengan berbagai pilihan paket sesuai kebutuhan Anda. Teknisi ahli, instalasi cepat, dan layanan purna jual terbaik di wilayah Tangerang dan sekitarnya.",
    author: "muhamad hamdali",
    keywords: [
      "jasa pasang wifi Tangerang",
      "pemasangan wifi rumah",
      "instalasi wifi kantor",
      "teknisi wifi profesional",
      "wifi cepat stabil",
      "pasang wifi rumah kantor",
      "wifi murah Tangerang",
      "setting jaringan wifi",
      "penguatan sinyal wifi",
      "wifi mesh Tangerang"
    ],  
    url:"https://heamdally.my.id",
    
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
          indentedSyntax: true,
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-decap-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        develop: true,
        purgeOnly: ["/bulma-style.sass"],
        printRejected: true,
      },
    },
    "gatsby-plugin-netlify", // keep this last
  ],
};
