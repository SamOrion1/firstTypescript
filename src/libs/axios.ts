import axios from "axios";


class Axios {

    static async get(url: string): Promise<IAxiosResponse> {

        try{
            return await axios.get(url)
        }catch(e: any) {
            console.log('[Axios][get] Calling axios.get', url)
            throw new Error(e)
        }


    }

}
export default Axios