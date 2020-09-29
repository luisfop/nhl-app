import React,{useEffect} from 'react'
import { getTeams } from '../services/GetTeams';
import { TEAMS_URL } from '../Enviroment';

const Home = () => {
    useEffect(() => {
        async function fetchData(){
            let response = await getTeams(TEAMS_URL);
            console.log( 'RESPONSE -> ' , response.teams);
        }
        fetchData();
    },[])



    return (
        <div>
            <h1 style={{textAlign: 'center'}}>HOME</h1>
        </div>
    )
}

export default Home
