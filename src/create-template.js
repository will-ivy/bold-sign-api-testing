const axios = require('axios');

const url = 'https://api.boldsign.com/v1/template/createEmbeddedTemplateUrl';
const boldSignApiKey = process.env.BOLD_SIGN_API_KEY;

const payload = {
  Title: 'API template',
  Description: 'API template description',
  DocumentTitle: 'API document title',
  DocumentMessage: 'API document message description',
  AllowMessageEditing: true,
  Roles: [
    {
      name: 'Guest',
      index: 1,
      // formFields: [
      //   {
      //     id: 'total_cost',
      //     name: 'total_cost',
      //     fieldType: 'TextBox',
      //     pageNumber: 1,
      //     bounds: { x: 50, y: 100, width: 100, height: 60 },
      //     isRequired: true,
      //     // backgroundHexColor: 'string',
      //   }
      // ],
    }
  ],
  ShowToolbar: true,
  ShowSaveButton: true,
  ShowSendButton: true,
  ShowPreviewButton: true,
  ShowNavigationButtons: true,
  ShowTooltip: false,
  ViewOption: 'PreparePage',
  FileUrls: [ 
    "" // url for your file to upload goes here
  ]
};

class BoldSignTemplate {
  constructor(title) {
    this.title = title
  }

  async createNewTemplate() {
    payload.Title = this.title;

    try {
      const response = await axios.post(url, payload, {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'X-API-KEY': boldSignApiKey
        }
      });
      console.log(response.data.createUrl);
      return response.data.templateId
    } catch(e) {
      console.log(e);
    }
  }
}

module.exports = BoldSignTemplate;