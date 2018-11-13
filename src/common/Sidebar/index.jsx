import React, { Component } from 'react'

export class Sidebar extends Component {
  render() {  
    return (
      <div id="sidebar" className="col-4">
        <ul>
          <li className="sidebar-item twitter">
            Twitter
          </li>
          <li className="sidebar-item facebook">
            Facebook
          </li>
          <li className="instagram">
            Instagram
          </li>
          <li className="youtube">
            YouTube
          </li>
          <li className="linkedin">
          
          </li>
        </ul>
      </div>
    )
  }
}

export default Sidebar
