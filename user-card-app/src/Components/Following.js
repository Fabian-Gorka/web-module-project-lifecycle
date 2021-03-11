import React, { Component } from 'react';
import axios from 'axios';

class Following extends Component {
    state = {
        following: []
    }

    componentDidMount(){
        axios
            .get(`https://api.github.com/users/${this.props.username}/following`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    following: res.data
                })
                })
            .catch(err => {
                console.log(err);
        })
    }

    componentDidUpdate(prevProps){
        if(prevProps.username !== this.props.username){
            axios.get(`https://api.github.com/users/${this.props.username}/following`)
            .then(res => {
                this.setState({ following: res.data })
            })
            .catch(err => {
                console.log(err);
            })
        }
    }

    render(){
        return(
            <div>
                {this.state.following.map(user => (
                    <div key={user.id} >
                        <img src={user.avatar_url} alt={user.login} />
                        <h4>{user.login}</h4>
                    </div>
                ))}
            </div>
        )
    }    
}

export default Following; 