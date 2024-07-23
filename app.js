const { apiReference } = require('@scalar/express-api-reference')
const express = require('express');
const YAML = require('yamljs');
const swaggerJsdoc = require('swagger-jsdoc');
const path = require('path');
const app = express();

const openapiPath = path.resolve(__dirname, "publish", 'bundled.yaml');
const openapiDocument = YAML.load(openapiPath);
const openapiOptions = {
    failOnErrors: true,
    definition: openapiDocument,
    apis: [], // No additional files to include
  };
  

const swaggerSpec = swaggerJsdoc(openapiOptions);
app.use(
    '/reference',
    apiReference({
        theme: 'bluePlanet',
        layout: "modern",
        showSidebar: true,
        darkMode: true,
        spec: {
            content: swaggerSpec,
        },
        customCss: `
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
        * { font-family: "Roboto", cursive, sans-serif; }
        `,
        metaData: {
            title: 'Page title',
            description: 'My page page',
            ogDescription: 'Still about my my page',
            ogTitle: 'Page title',
            ogImage: 'https://cdn.bitkubnow.com/coins/icon/32/KUB.png',
            twitterCard: 'summary_large_image',
            // Add more...
          }
    }),
  )

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});