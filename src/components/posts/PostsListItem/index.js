import React from 'react'

const PostsListItem = ({
    title,
    published,
    postType,
    status,
    id
}) => (
    <div className="c_postslistitem">
        <div className="c_postslistitem_info">
            <span className="c_postslistitem_title">{postType}: {title}</span>
            <span className="c_postslistitem_published">Published on {published}</span>
            <span className="c_postslistitem_published">{status}</span>
        </div>
    </div>
)

export default PostsListItem