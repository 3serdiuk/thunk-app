import React from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions/PostsButton.js';

let style = {
    backgroundColor: 'lightBlue',
    padding: '5px 15px',
    borderRadius: '5px',
    textTransform: 'uppercase',
    margin: '10px 10px',
    cursor: 'pointer',
}

class Btn extends React.Component {
    render() {
        const {
            isLoading,
            posts
        } = this.props;

        return isLoading ? <h3>Loading...</h3> : (<>
            <button onClick={this.props.getPosts} style={style}>Show posts</button>
           
            <div>
                {posts.map((item) => (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                    </div>)
                )}
            </div>
        </>);
    }
}

const mapStateToProps = (state) => ({
    loading: state.isLoading,
    posts: state.posts
});

const mapDispatchToProps = {
    getPosts
};

export const PostsButton = connect(mapStateToProps, mapDispatchToProps)(Btn);