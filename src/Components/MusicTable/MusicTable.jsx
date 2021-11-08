import React from 'react';
import './MusicTable.css';
import '../App';




const MusicTable = (props) => {
    return ( 
      <div>
      <h1>PlayList!</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Release Date</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map(data => (
            <tr>
              <td>{data.title}</td>
              <td>{data.artist}</td>
              <td>{data.album}</td>
              <td>{data.release_date}</td>
              <button className="button1" onClick={() => props.delete(data.id)}>Delete</button>
          </tr>))}
        </tbody>
      </table>
      </div>
    );
}
export default MusicTable;