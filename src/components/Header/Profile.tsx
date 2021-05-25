import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Text } from "@chakra-ui/layout";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" texteAlign="right">
        <Text>Natanael Silva</Text>
        <Text color="gray.300" fontSize="small">
          natanelsilva.progjs@mail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        nome="Natanel Silva"
        src="https://github.com/NatanSiilva.png"
      />
    </Flex>
  );
}
