
import { Box, Container, Flex } from '@chakra-ui/react';
import FeedPosts from '../../components/FeedPost/FeedPosts';
import SuggestedUsers from '../../components/SuggestedUser/SuggestedUsers';

export const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        <Box flex={2} py={10}>
          <FeedPosts/>
        
        </Box>
        <Box flex={3} mr={20} display={{ base: "none", lg: "block" }} maxW={"300px"} border={"1px solid red"}>
         <SuggestedUsers/> 
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage;
