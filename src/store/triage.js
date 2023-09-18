import { defineStore } from "pinia";

export const useTriageStore = defineStore("triage", {
  state: () => ({
    patient: {
      firstName: "",
      lastName: "",
      age: "",
      sex: "",
      mobile: "",
      email: "",
    },
    otp: {
      id: null,
      deliveryMethod: "",
      validated: false,
    },
    regions: [],
    interview: [],
    results: [],
  }),
  getters: {
    getPatient: (state) => state.patient,
    getOtp: (state) => state.otp,
    getRegions: (state) => state.regions,
    getInterview: (state) => state.interview,
    getResults: (state) => state.results,
  },
  actions: {
    setPatient(patient) {
      this.patient = patient;
    },
    setOtp(otp) {
      this.otp = otp;
    },
    setOtpValidated(validated) {
      this.otp.validated = validated;
    },
  },
});
