import { Box, Text } from "@chakra-ui/react";

export const AlertAddPoint = ({ message }:any) => {
  return (
    <Box boxShadow='lg' border="2px" borderColor={message.error ? "red" : "secondary"} p='6' rounded='md' bg='white' display="flex" justifyContent="space-around" alignItems="center">
        <Box >
          <Text fontWeight="bold">{message.error ? "¡Error!" : "¡Congrulations!"}</Text>
          <Text >{message.error ? message.error : `Update Points ${message["New Points"]}`}</Text>
        </Box>
    </Box>
  );
};
