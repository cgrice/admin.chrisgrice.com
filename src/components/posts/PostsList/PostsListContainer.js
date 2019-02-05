import { graphql } from 'react-apollo'
import { compose, withProps } from 'recompose'
import gql from 'graphql-tag'


import PostsList from './PostsList'

const GET_POSTS = gql`
query PostsListContainerQuery {
    blogPostsConnection(first: 25) {
        edges {
            node {
                id
                title
                published
                postType
                status
            }
        }
        pageInfo {
            endCursor
            hasNextPage
        }
    }
}
`

const mapConnectionToArray = (connection) => connection.edges.map(({node}) => node)

const convertProps = ({ data }, originalProps) => {
    const { loading, error } = data
    if (loading || error) return originalProps
    return {
        posts: mapConnectionToArray(data.blogPostsConnection)
    }
}

export default compose(
    graphql(GET_POSTS),
    withProps(convertProps),
)(PostsList)

export {
    mapConnectionToArray,
}