import React from 'react'
import StatusBadge from '../../StatusBadge'
import Badge from '../../Badge'
import { format, parse } from 'date-fns'

const formatDate = (dateString) => {
    const date = parse(dateString)
    return format(date, "YYYY-MM-DD")
}

const PostsListItem = ({
    title,
    published,
    postType,
    status,
    id
}) => (
    <div className="c_postslistitem">
        <div className="c_postslistitem_info">
            <span className="c_postslistitem_title">{title}</span>
            <span className="c_postslistitem_published">Published on {formatDate(published)}</span>
        </div>
        <div className="c_postslistitem_status">
            <Badge className="badge-info">{postType}</Badge>
            {/* <span className="c_postlistitem_posttype">{postType}</span> */}
            <StatusBadge status={status} />
        </div>
    </div>
)

export default PostsListItem