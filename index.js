const BoldSignTemplate = require('./src/create-template');
const BoldSignSendEsign = require('./src/send-esign');

async function run() {
  // uncomment when you want to create a new template
  // const newTemplate = new BoldSignTemplate("File Name")
  // await newTemplate.createNewTemplate();

  // change this to be the id from the template you just created
  const templateId = ""
  const sender = new BoldSignSendEsign(templateId);
  await sender.perform();
}

run().catch(console.dir);