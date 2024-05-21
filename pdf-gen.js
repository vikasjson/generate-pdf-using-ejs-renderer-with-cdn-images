const ejs = require('ejs');
const fs = require('fs');
const htmlPdf = require('html-pdf');

const imageUrls = [
    'https://d31za8na64dkj7.cloudfront.net/alt_services_e60e1a16bb.jpg',
    'https://d31za8na64dkj7.cloudfront.net/2_2dd39a6560.jpg',
];

const templatePath = 'template.ejs';
const outputPath = 'output.pdf';

ejs.renderFile(templatePath, {imageUrls}, (err, html) => {
    if (err) {
        console.error('Error rendering EJS template:', err);
        return;
    }

    htmlPdf.create(html).toFile(outputPath, (err, res) => {
        if (err) {
            console.error('Error generating PDF:', err);
            return;
        }

        console.log('PDF created successfully:', res.filename);
    });
});
