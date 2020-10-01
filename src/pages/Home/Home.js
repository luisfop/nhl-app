import React,{useEffect,useState} from 'react'
import { getTeams } from '../../services/GetTeams';
import { TEAMS_URL } from '../../Enviroment';

const Home = () => {

    const [ teams, setTeams ] = useState([])

    useEffect(() => {
        async function fetchData(){
            let response = await getTeams(TEAMS_URL);
            // console.log( 'RESPONSE -> ' , response.teams);
            setTeams(response.teams)
        }
        fetchData();
    },[])


    // console.log('TEAMS ->', teams)

    const showTeams = teams.map(team => {
        return (<p>{team.name}</p>)
    }) 

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>HOME</h1>

            <div>
                {/* {showTeams} */}
            </div>
        </div>
    )
}

export default Home
