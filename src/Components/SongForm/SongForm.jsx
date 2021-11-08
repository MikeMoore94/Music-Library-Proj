import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import axios from 'axios';


class SongForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      album: '',
      artist: '',
      release_date: '',
    }
  }

  onChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

  handleSubmit = (event) => {
      event.preventDefault();
      const form_data = {
        title: this.state.title,
        artist: this.state.artist,
        album: this.state.album,
        release_date: this.state.release_date,
      };
      let response = axios.post('http://127.0.0.1:800/music/', form_data);
      let data = response.data;
      console.log(data);
  }

  

  render() { 
    return ( 
      <div className="post">
        <form className="post" onSubmit={(event) => this.handleSubmit}>
        
          <input
          name ="title"
            placeholder="Title" value={this.state.title}
            onChange={this.onChange} required
          />
          
          <input
          name ="album"
            placeholder="Album" value={this.state.album}
            onChange={this.onChange} required
          />

          <input
           name="artist"
            placeholder="Artist" value={this.state.artist}
            onChange={this.onChange} required
          />

          <input
          name="release_date"
           type="date"
            placeholder="Release Date" value={this.state.release_date}
            onChange={this.onChange} required
          />
          


          <button type="submit">Add Song</button>
        </form>
      </div>
    );
  }
}
 
export default SongForm;
