import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from './github.actions';
import GithubUser from './components/User';

export class GithubDashboard extends Component {
  state = {
    username: ''
  }

  componentDidMount() {
    console.log(this.props);
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  getRepos = (e) => {
    e.preventDefault();
    if (!this.state.username) {
      console.error(`You must supply a username`);
    } else {
      this.props.get(this.state.username);
    }
  }

  render() {
    console.log(this.props);
    const { githubUser } = this.props;
    return (
      <div>
          <h1>I am the github dashboard</h1>
          <div className="well well-lg">
            <form action="" className="form" onSubmit={this.getRepos}>
              <div className="form-group">
                <input 
                type="text" className="form-control" name="username" onChange={this.handleInput} />
              </div>
              <button type="submit" className="btn btn-primary">Get Repos</button>
            </form>
          </div>
          {githubUser && <GithubUser user={this.props.githubUser} />}
      </div>
    )
  }
}
const select = ({github}) => ({
  ...github
});

export default withRouter(connect(select, actions)(GithubDashboard))
