import React from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions/PostsButton.js';

let divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontamily: 'Dosis',
    fontWeight: '500',
    margin: '10px 10px',
}

let btnStyle = {
    display: 'flex',
    backgroundColor: '#229999',
    padding: '15px 20px',
    borderRadius: '50px',
    textTransform: 'uppercase',
    margin: '10px 10px',
    cursor: 'pointer',
    fontWeight: '900',
    fontSize: '1.17em',
}

let section = {
    backgroundColor: '#afeeee',
    padding: '5px 15px',
    borderRadius: '10px',
    marginBottom: '10px',
    textTransform: 'upperCase',
}

class Btn extends React.Component {
    render() {
        const {
            isLoading,
            posts
        } = this.props;

        return isLoading ? <h3>Loading...</h3> : (<div style={divStyle}>
            <button onClick={this.props.getPosts} style={btnStyle}>Show posts</button>
           
            <div>
                {posts.map((item) => (
                    <section style={section} key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                    </section>)
                )}
            </div>
        </div>);
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