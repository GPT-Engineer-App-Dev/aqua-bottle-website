import { Box, Container, VStack, Heading, Text, SimpleGrid, Image, Flex, Spacer, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <VStack spacing={0} align="stretch">
        {/* Header */}
        <Box bg="blue.700" color="white" py={4} px={8}>
          <Flex align="center">
            <Heading as="h1" size="lg">Water Bottles</Heading>
            <Spacer />
            <Flex>
              <Link href="#" mx={2}><FaFacebook size="24px" /></Link>
              <Link href="#" mx={2}><FaTwitter size="24px" /></Link>
              <Link href="#" mx={2}><FaInstagram size="24px" /></Link>
            </Flex>
          </Flex>
        </Box>

        {/* Main Content */}
        <Box bg="gray.100" py={10} px={8}>
          <VStack spacing={8}>
            <Heading as="h2" size="xl">Discover the Best Water Bottles</Heading>
            <Text fontSize="lg" textAlign="center">
              Explore our wide range of water bottles designed to keep you hydrated throughout the day. Whether you're looking for something stylish, functional, or eco-friendly, we have the perfect bottle for you.
            </Text>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} width="100%">
              <Box bg="white" boxShadow="md" borderRadius="md" overflow="hidden">
                <Image src="https://via.placeholder.com/300" alt="Bottle 1" />
                <Box p={4}>
                  <Heading as="h3" size="md">Stylish Bottle</Heading>
                  <Text mt={2}>A stylish bottle that you can carry anywhere.</Text>
                </Box>
              </Box>
              <Box bg="white" boxShadow="md" borderRadius="md" overflow="hidden">
                <Image src="https://via.placeholder.com/300" alt="Bottle 2" />
                <Box p={4}>
                  <Heading as="h3" size="md">Eco-Friendly Bottle</Heading>
                  <Text mt={2}>An eco-friendly bottle made from sustainable materials.</Text>
                </Box>
              </Box>
              <Box bg="white" boxShadow="md" borderRadius="md" overflow="hidden">
                <Image src="https://via.placeholder.com/300" alt="Bottle 3" />
                <Box p={4}>
                  <Heading as="h3" size="md">Functional Bottle</Heading>
                  <Text mt={2}>A functional bottle with multiple features.</Text>
                </Box>
              </Box>
            </SimpleGrid>
          </VStack>
        </Box>

        {/* Footer */}
        <Box bg="blue.700" color="white" py={4} px={8}>
          <Text textAlign="center">&copy; 2023 Water Bottles. All rights reserved.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;