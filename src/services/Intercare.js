class Intercare {
  constructor() {
    this.baseUrl = import.meta.env.VITE_INTERCARE_API_URL;
    this.apiKey = import.meta.env.VITE_INTERCARE_API_KEY;
  }

  getHeaders() {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Api-Key": this.apiKey,
    };
  }

  async get(url) {
    const response = await fetch(this.baseUrl + "/" + url, {
      method: "GET",
      headers: this.getHeaders(),
    });

    return response.json();
  }

  async post(url, data) {
    const response = await fetch(this.baseUrl + "/" + url, {
      method: "POST",
      headers: this.getHeaders(),
      body: JSON.stringify(data),
    });

    return response.json();
  }

  async sendOtp(contact, deliveryMethod = "SMS") {
    return await this.post("otp/sendotp", { contact, deliveryMethod });
  }

  async validateOtp(otpId, challengeCode) {
    return await this.post("otp/validateotp", {
      otpId: otpId.toString(),
      challengeCode: challengeCode.toString(),
    });
  }
}

export default new Intercare();
