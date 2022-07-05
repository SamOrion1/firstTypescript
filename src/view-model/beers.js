import beersService from "../services/beersService";

class BeersViewModel {
    static async start () {
        try{
            console.log('[BeersViewModel][start] Calling Start')
            return await beersService.getBeersList()
            
        }catch (e) {
            console.error('[BeersViewModel][start] An error occured', e)
            throw new Error(e)
        }
    }
}

export { BeersViewModel };