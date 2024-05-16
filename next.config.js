/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains:["crn-dataneuron-prod-as1-cms.dataneuron.ai"]
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'ghost-cms-test.azurewebsites.net',
    //     port: '',
    //     pathname: '/content/**',
    //   },
    // ],
  },
}
