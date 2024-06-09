import { Container, Text, VStack, Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

const Index = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Example drawing: a simple rectangle
    context.fillStyle = "#2a69ac";
    context.fillRect(10, 10, 100, 100);
  }, []);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Your Blank Canvas</Text>
        <Text>Chat with the agent to start making edits.</Text>
        <Box
          as="canvas"
          ref={canvasRef}
          width="300"
          height="300"
          border="1px solid #2a69ac"
          borderRadius="md"
          boxShadow="md"
        />
      </VStack>
    </Container>
  );
};

export default Index;