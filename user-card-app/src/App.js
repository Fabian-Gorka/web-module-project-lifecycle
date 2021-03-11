import React, { Component } from 'react';
import UserProfile from './Components/profile';
import UserForm from './Components/UserForm';
import Following from './Components/Following.js';

class App extends Component {

  state = {
    username: 'Fabian-Gorka'
  }

  setUsername = (name) => {
    this.setState({
      username: name
    });
  };

  render(){
    return (
      <div className='app' style={{textAlign: 'center'}}>
        <h1>Github UserCards</h1>
        <div className='users'>
          <UserProfile username={this.state.username} />
          <UserForm setUsername={this.setUsername} />
          <Following username={this.state.username} />
        </div> 
      </div>

    );
  }
}

export default App;