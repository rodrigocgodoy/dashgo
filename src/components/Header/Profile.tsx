import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
};

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Rodrigo Godoy</Text>
          <Text
            color="gray.300"
            fontSize="small"
          >
            rodrigocgodoy@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Rodrigo Godoy" src="https://github.com/rodrigocgodoy.png" />
    </Flex>
  );
}
