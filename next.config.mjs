const sub_slug = "carrefour-2024";
const slug = "tous-a-table-pour-le-changement";

const baseConfig =
  process.env.BUILD_DEST === "preview"
    ? {
        basePath:
          process.env.NODE_ENV === "production" ? `/clients/${sub_slug}` : "",
        env: {
          BASE_PATH:
            process.env.NODE_ENV === "production" ? `/clients/${sub_slug}` : "",
          BASE_URL: `https://madlab.mpublicite.fr/clients/${sub_slug}`,
        },
      }
    : {
        env: {
          BASE_PATH: "",
          BASE_URL: `https://${slug}.lemonde.fr`,
        },
      };
/** @type {import('next').NextConfig} */
const nextConfig = {
  ...baseConfig,
  output: "export",
  trailingSlash: true,
  sassOptions: {
    additionalData: `$white: #ffffff;
      $black: #000000;
      $blue-header: #026b9c;
      $grey-header: #eff0f3;
      $grey-footer: #616161;
      $green-banner: #427b3e;
      $blue-banner: #004F9E;
      $black-text: #121212;
      $red-avatar: #E51E26;
      $yellow-avatar: #FFB300;
      $ratio-square: 1;
      $bg-green-kpi: #eefaec;
      $green-kpi: #b6d526;
      $bg-orange-kpi: #fdf4e8;
      $orange-kpi: #FFB300;
      $bg-darkgreen-kpi: #eefaec;
      $darkgreen-kpi: #427b3e;
      $bg-blue-kpi: #ebf4f7;
      $blue-kpi: #0970E6;
      $media-xl: 1560px;
      $media-l: 1200px;
      $media-m: 1024px;
      $media-s: 840px;
      $media-ss: 580px;
      $media-xs: 480px;
      `,
  },
  //Config svgR
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    config.cache = false;

    return config;
  },
};

export default nextConfig;
