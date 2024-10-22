import axios from 'axios'
import { Cep } from '../types/CepType'

function useAPI() {
    const APICep = (cep: string): Promise<Cep> => {
        return new Promise((resolve, reject) => {
            axios
                .get(`https://viacep.com.br/ws/${cep}/json/`)
                .then((resp) => resolve(resp.data))
                .catch((err) => reject(err))
        })
    }

    return { APICep }
}
export default useAPI
