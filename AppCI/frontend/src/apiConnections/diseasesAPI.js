import axios from "axios";

axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";


export async function getDiseasesListAPI() {
    // get list of diseases's names and labels REST API
    try {
      let response = await axios.get("api/diseases");
      let diseases = await response.data
      return diseases
    } catch(err) {
      if (err.response) {
        console.error('error: ', err.response.status);
      }
    }
  }

export async function getDetailedDiseaseAPI(disease_id) {
  // get data for a given disease from REST API
  let disease_data = null;

  try {
    let response = await axios.get("api/diseases/" + disease_id);
    disease_data = await response.data
    return disease_data

  } catch(err) {
      if (err.response) {
        console.error('error: ', err.response.status);
      }
    }
}
