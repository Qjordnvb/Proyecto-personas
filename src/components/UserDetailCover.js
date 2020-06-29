import React, { Component } from 'react';
import './index.css';

class UserDetailCover extends Component {
   constructor(){
       super();
       this.state = {
           cover: 'https://static-media-prod-cdn.itsre-sumo.mozilla.net/static/sumo/img/default-FFA-avatar.png'
       }
   }
  render() {
    return (
      <div className="UserDetailCover">
        <img
          src= { this.state.cover }
          className="UserDetailCover-img"
          alt='Avatar'
        />
      </div>
    );
  }
}

export default UserDetailCover;
