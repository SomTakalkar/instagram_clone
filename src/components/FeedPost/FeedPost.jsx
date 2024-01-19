import React from 'react'
import PostHeadder from './PostHeader'
import { Box, Image } from '@chakra-ui/react'
import PostFooter from './PostFooter'
import useGetUserProfileById from '../../hooks/useGetUserProfileById'

const FeedPost = ({post}) => {
  const { userProfile } = useGetUserProfileById(post.createdBy);
  return (
    <>
    <PostHeadder post={post} creatorProfile={userProfile}/>
    <Box my={2} borderRadius={4} overflow={"hidden"}>
        <Image src={post.imageURL} alt={"FEED POST IMG"}/>
    </Box>
    <PostFooter post={post} creatorProfile={userProfile}/>
    </>
  )
}

export default FeedPost