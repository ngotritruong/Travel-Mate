import axios from 'axios';
export const getAllreservation = async (req, res) => {
    try{
        const {data} = await axios.get("http://localhost:8090/phieudat/all");
        return data;
    }catch(err){
        return ({message: 'Error'});
    }
};