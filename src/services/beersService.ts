import { rootUrl } from "../libs/const";
import Axios from "../libs/axios";
import IAxiosResponse from "../interfaces/AxiosResponse";
import IBeer from "../interfaces/IBeer";

// let beers = []

class beersService {
    static async getBeersList (): Promise<[IBeer]> {
        try {
            console.log ('[beersService][getBeersList] Calling beersService.getBeersList')
            const response: IAxiosResponse = await Axios.get(rootUrl + 'beers')
            return response.data
            
        }catch (e) {
            console.error('[beersService][getBeersList] An error occured')
            throw new Error(e)
        }
    }
}

export default beersService;