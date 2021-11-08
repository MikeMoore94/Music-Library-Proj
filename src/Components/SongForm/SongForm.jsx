import React, { Component } from 'react';
import './SongForm.css';
import '../App';

class SongForm extends Component {
    constructor(props) {
      super(props);
      this.state = { 
      title: '',
      artist: '',
      album: '',
      release_date: ''
    }
}
    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    handleSubmit = (event) => {
    event.preventDefault();
    const newSong = {
      title: this.state.title,
      album: this.state.album,
      artist: this.state.artist,
      release_date: this.state.release_date
    }
    this.props.addSongRequest(newSong);
    this.setState({
      title: '',
      album: '',
      artist: '',
      release_date: ''
    });
    }
  
    render() {
    return (
      <div>
        <h1>Add A Song To The PlayList</h1>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div>
            <label for= "title" >title:</label>
            <input type="text" name="title" onChange={this.handleChange} value={this.state.title} />
          </div>
          <div>
            <label for= "artist">Artist:</label>
            <input type="text" name="artist" onChange={this.handleChange} value={this.state.artist} />
          </div>
          <div>
            <label for= "album">Album:</label>
            <input type="text" name="album" onChange={this.handleChange} value={this.state.album} />
          </div>
          <div>
              <label for= "release_date">Release Date</label>
              <input type="date" name="release_date" onChange={this.handleChange} value={this.state.release_date} />  
          </div>

          <button type="submit">ADD SONG!!</button>
        </form>
      </div>
    )
  }
}


export default SongForm