import { rootUrl } from "../libs/const";
import Axios from "../libs/axios";

let beers = []

class beersService {
    static async getBeersList () {
        try {
            console.log ('[beersService][getBeersList] Calling beersService.getBeersList')
            return await Axios.get(rootUrl + 'beers')
            
        }catch (e) {
            console.error('[beersService][getBeersList] An error occured')
            throw new Error(e)
        }
    }
}

export default beersService;