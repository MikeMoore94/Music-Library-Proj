import React, { Component } from 'react'
import axios from 'axios';
import Form from 'react-bootstrap/Form'

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

  onChange=(event)=>{
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createNewSong(this.state)
}
  

  render() { 
    return ( 
      <div className="post">
        <Form className="post" onSubmit={this.handleSubmit}>
        
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
        </Form>
      </div>
    );
  }
}
 
export default SongForm;
