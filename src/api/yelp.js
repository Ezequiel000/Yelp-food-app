import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: 'Bearer 7t0q33q_moqmrm5S9TE7vwYA8feIR0S64uYdCvhRDL6FXTJr38sTykeul0wtMSA-fVOAUsnk12Lyk5vSaeocrqrAM04NVAV02Uv5SbIo7SV1rXa0_ACvzix2kMgYZHYx'
    },
});