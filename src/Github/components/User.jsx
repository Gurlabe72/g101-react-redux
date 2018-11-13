import React, { Component } from 'react';
import axios from 'axios';

class GithubUser extends Component {
  state = {
    followers: []
  }

  componentDidMount() {
    const { user } = this.props
    if (user && user.followers_url) {
      axios.get(user.followers_url)
        .then(results => {
          this.setState({
            followers: results.data
          })
        })
    }
  }
  
  render() {
    const { user } = this.props;
    return (
      <div> 
        <h1>{user.login}</h1>
        <p>
          Followers: {user.followers}
        </p>
        <ul>
          {this.state.followers.map(follower => (
            <li key={follower.node_id}>
              {follower.login}
              <img src={follower.avatar_url} alt={follower.login}/>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default GithubUser;