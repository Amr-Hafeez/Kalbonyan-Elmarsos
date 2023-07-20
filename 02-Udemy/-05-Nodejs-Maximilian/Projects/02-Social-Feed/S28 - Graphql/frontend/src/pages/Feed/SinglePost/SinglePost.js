import React, { Component } from 'react';


import Image from '../../../components/Image/Image';
import './SinglePost.css';

class SinglePost extends Component {
    state = {
        title: '',
        author: '',
        date: '',
        image: '',
        content: ''
    };

    componentDidMount() {
        const postId = this.props.match.params.postId;
        const graphqlQuery = {
            variables: {
                postId
            },
            query: `
                query FetchPost($postId: ID!) {
                    post(id: $postId) {
                        _id
                        title
                        creator {
                            name
                        }
                        imageUrl
                        content
                        createdAt
                    }
                }
            `
        }
        fetch('http://localhost:8080/graphql', {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + this.props.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(graphqlQuery)
        })
            .then(res => {
                return res.json();
            })
            .then(resData => {
                if (resData.errors) {
                    throw new Error('Fetching post failed!');
                }
                console.log(resData);
                this.setState({
                    title: resData.data.post.title,
                    author: resData.data.post.creator.name,
                    date: new Date(resData.data.post.createdAt).toLocaleDateString('en-US'),
                    content: resData.data.post.content,
                    image: 'http://localhost:8080/' + resData.data.post.imageUrl
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <section className="single-post">
                <h1>{this.state.title}</h1>
                <h2>
                  Created by {this.state.author} on {this.state.date}
                </h2>
                <div className="single-post__image">
                  <Image contain imageUrl={this.state.image} />
                </div>
                <p>{this.state.content}</p>
            </section>
        );
    }
}

export default SinglePost;
