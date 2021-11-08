import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component {
  constructor(props){
      super(props);
      this.state = {
          title: '',
          album: '',
          artist: '',
          release_date: '',
      }
  }
}