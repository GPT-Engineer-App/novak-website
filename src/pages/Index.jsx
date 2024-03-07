// Personal website for Novak Djokovic using Chakra UI
import { Box, Container, Heading, Text, Image, Stack, Flex, Link, IconButton, Button, useColorModeValue } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaFacebookF, FaTrophy } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Stack spacing={10} align="center">
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1626567775813-432301cbde13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxOb3ZhayUyMERqb2tvdmljfGVufDB8fHx8MTcwOTc5NTI0OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Novak Djokovic" />
        <Heading as="h1" size="xl">
          Novak Djokovic
        </Heading>
        <Text fontSize="lg" textAlign="center">
          World-renowned professional tennis player with numerous Grand Slam titles.
        </Text>
        <Stack direction="row" spacing={6}>
          <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" colorScheme="pink" variant="ghost" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" colorScheme="twitter" variant="ghost" />
          <IconButton aria-label="Facebook" icon={<FaFacebookF />} size="lg" colorScheme="facebook" variant="ghost" />
        </Stack>
        <Flex direction={{ base: "column", md: "row" }} justify="center" align="center" w="full">
          <Box p={4} textAlign="center">
            <FaTrophy size="3rem" color={useColorModeValue("#ffd700", "#ffa500")} />
            <Text mt={2} fontSize="xl">
              20
            </Text>
            <Text fontSize="md">Grand Slams</Text>
          </Box>
          {/* Add additional achievements as needed */}
        </Flex>
        <Box w="full" p={4} bg={useColorModeValue("gray.100", "gray.700")} borderRadius="md">
          <Heading as="h2" size="lg" mb={4}>
            Biography
          </Heading>
          <Text>Novak Djokovic is a Serbian professional tennis player. He is currently ranked world No. 1 by the Association of Tennis Professionals (ATP). Djokovic has won 20 Grand Slam singles titles, the fourth-most in history for a male player. He has held the No. 1 spot in the ATP rankings for over 300 weeks.</Text>
          {/* Add more biography content as needed */}
        </Box>
        <Box w="full" textAlign="center" p={4}>
          <Link href="https://en.wikipedia.org/wiki/Novak_Djokovic" isExternal>
            <Button colorScheme="blue" leftIcon={<FaTrophy />}>
              Learn More
            </Button>
          </Link>
        </Box>
      </Stack>
    </Container>
  );
};

export default Index;
