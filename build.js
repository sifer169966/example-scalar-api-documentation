// const { apiReference } = require('@scalar/express-api-reference')
// const express = require('express');
// const YAML = require('yamljs');
// const swaggerJsdoc = require('swagger-jsdoc');
// const path = require('path');
// const app = express();

// const openapiPath = path.resolve(__dirname, "publish", 'bundled.yaml');
// const openapiDocument = YAML.load(openapiPath);
// const openapiOptions = {
//     failOnErrors: true,
//     definition: openapiDocument,
//     apis: [], // No additional files to include
//   };
  

// const swaggerSpec = swaggerJsdoc(openapiOptions);
// app.use(
//     '/reference',
//     apiReference({
//         theme: 'bluePlanet',
//         layout: "modern",
//         showSidebar: true,
//         darkMode: true,
//         spec: {
//             content: swaggerSpec,
//         },
//         customCss: `
//         @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
//         * { font-family: "Roboto", cursive, sans-serif; }
//         `,
//         metaData: {
//             title: 'Page title',
//             description: 'My page page',
//             ogDescription: 'Still about my my page',
//             ogTitle: 'Page title',
//             ogImage: 'https://cdn.bitkubnow.com/coins/icon/32/KUB.png',
//             twitterCard: 'summary_large_image',
//             // Add more...
//           }
//     }),
//   )

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server started on port ${PORT}`);
// });

const YAML = require('yamljs');
const fs = require('fs');
const path = require('path');

// Path to your OpenAPI YAML file
const openapiPath = path.resolve(__dirname, './publish/bundled.yaml');
const openapiDocument = YAML.load(openapiPath); // Load YAML as JavaScript object

// Generate the static HTML content for Scalar UI
const generateStaticHtml = () => {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>API Documentation</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@scalar/express-api-reference@latest/assets/styles.css" />
      <script src="https://cdn.jsdelivr.net/npm/@scalar/express-api-reference@latest/assets/scripts.js"></script>
    </head>
    <body>
      <script
        id="api-reference">
        ${JSON.stringify(openapiDocument)}
      </script>
      <script src="https://cdn.jsdelivr.net/npm/@scalar/api-reference"></script>
      <script>
        var configuration = {
          theme: 'bluePlanet',
          showSidebar: true,
          darkMode: true,
          isEditable: true,
          hideDarkModeToggle: true,
          forceDarkModeState: 'dark',
        }
        document.getElementById('api-reference').dataset.configuration =
          JSON.stringify(configuration)
      </script>
    </body>
    </html>
  `;

  // Save the HTML to a file (static-api-doc.html)
  const filePath = path.join(__dirname, './publish/doc.html');
  console.log(filePath)
  fs.writeFileSync(filePath, htmlContent, 'utf-8');
  console.log('Static HTML generated and saved as doc.html');
};

// Generate the static HTML immediately when the script is run
generateStaticHtml();
