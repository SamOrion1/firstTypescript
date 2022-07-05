import axios from "axios";

class Axios {
    static async get (url) {
        try {
            console.log('[Axios][get] Calling axios.get', url)
            return await axios.get(url)
        }catch(e){
            console.error('[Axios][get] An error occured', e)
        }
    }
}

export default Axios;