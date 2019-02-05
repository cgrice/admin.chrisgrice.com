import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
import PostsListItem from '../PostsListItem'

const PostsList = ({
    posts,
    data,
}) => {
    return (
    <div className="c_postslist">
        {posts ? posts.map((post) => (
            <PostsListItem
                {...post}
                key={post.id}
            />
        )) : (
            <h3 className="c_postlist_empty">No posts</h3>
        )}
    </div>
)}

PostsList.propTypes = {
    posts: PropTypes.array,
}

export default PostsList