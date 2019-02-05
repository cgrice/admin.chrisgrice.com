import { mapConnectionToArray } from '../PostsListContainer'

describe('mapConnectionToArray', () => {
    it('converts a connection into an array of posts', () => {
        const connection = {
            edges: [
                {
                    cursor: 1,
                    node: {
                        title: 'Test 1',
                        id: 1,
                    },
                },
                {
                    cursor: 2,
                    node: {
                        title: 'Test 2',
                        id: 2,
                    },
                },
            ]
        }

        const expectedPosts = [
            {
                title: 'Test 1',
                id: 1,
            },
            {
                title: 'Test 2',
                id: 2,
            }
        ]
    
        expect(mapConnectionToArray(connection)).toEqual(expectedPosts)
    })

    
})