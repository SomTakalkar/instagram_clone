import { Box, Container, Flex, Image, Link, VStack } from "@chakra-ui/react";
import React from "react";
import AuthForms from "../../components/AuthForm/AuthForms";

export const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          <Box display={{ base: "none", md: "block" }}>
            {/* Left-hand side */}
            <Image src="/auth.png" h={650} alt="Phone img" />
          </Box>

          {/* Right-hand side */}
          <VStack spacing={4} align={"stretch"}>
            <AuthForms />
            <Box textAlign={"center"}>Get the App</Box>
            <Flex gap={5} justifyContent={"center"}>
              <Link href="https://play.google.com/store/apps/details?id=com.instagram.android&pcampaignid=web_share" target="_blank">
              <Image src="/playstore.png" h={"10"} alt="PlayStore logo" />
              </Link>
              <Link href="https://apps.microsoft.com/detail/9NBLGGH5L9XT?hl=en-us&gl=US" target="_blank">
              <Image src="/microsoft.png" h={"10"} alt="Microsoft logo" />
              </Link>
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
