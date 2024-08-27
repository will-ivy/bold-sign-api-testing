const axios = require("axios");

const url = "https://api.boldsign.com/v1/template/send";
const boldSignApiKey = process.env.BOLD_SIGN_API_KEY;

const payload = {
  roles: [
    {
      roleIndex: 1,
      signerName: "Fake Name",
      signerEmail: "fakeemail@test.com",
    },
  ],
}

class BoldSignSendEsign {
  constructor(templateId) {
    this.templateId = templateId
  }

  async perform() {
    try {
      const response = await axios.post(url, payload, {
        params: {
          templateId: this.templateId,
        },
        headers: {
          accept: "application/json",
          "X-API-KEY": boldSignApiKey,
          "Content-Type": "application/json;odata.metadata=minimal;odata.streaming=true",
        },
      });
      console.log(response.data);
    } catch(e) {
      console.log(e);
    }
  }
}

module.exports = BoldSignSendEsign;