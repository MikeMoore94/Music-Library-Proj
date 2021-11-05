import React, {Component} from 'react'
import axios from 'axios'
import SongCreator from './AddNewSong/AddNewSong';
import SongTable from './SongTable/SongTable';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: [],
            filteredSongs: [],
            filterValues: {
                title: "",
                artist: "",
                album: "",
                genre: "",
                releaseDate: "",
                
            }
        };
    }
    
    state = {
        songs: [],
        renderType:"table",
        
    }

    

    componentDidMount(){
        this.getAllSongs();
            
    }

    async getAllSongs(){
        let response = await axios.get('http://127.0.0.1:8000/music/');
        this.setState({
            songs: response.data,
        
        });
        return response
    }

   

    newSong = async (song) => {
        await axios.post('http://127.0.0.1:8000/music/',song)
        let response = await this.getAllSongs()
        if(response === undefined){
            this.setState({

            });
        }
        else{
            this.setState({
                songs: response.data
            });
        }
    }

    
    
    
    render(){
        return(
            <div>
                <SongTable songs={this.state.songs}/>
                <SongCreator newSong={this.newSong.bind(this)}/>
            </div>
        );
    }
}

export default App;