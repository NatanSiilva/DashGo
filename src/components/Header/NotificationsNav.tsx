import Icon from "@chakra-ui/icon";
import { HStack } from "@chakra-ui/layout";
import { RiNotificationOffLine, RiUserAddLine } from "react-icons/ri";

export function NotificationsNav() {
  return (
    <HStack
      spacing={["6", "8"]}
      mx={["6", "8"]}
      pr={["6", "8"]}
      py="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Icon
        as={RiNotificationOffLine}
        fontSize="20"
        bg="pink.500"
        w="9"
        h="9"
        p="2"
        borderRadius="50%"
        color="white"
      />
      <Icon
        as={RiUserAddLine}
        fontSize="20"
        bg="pink.500"
        w="9"
        h="9"
        p="2"
        borderRadius="50%"
        color="white"
      />
    </HStack>
  );
}
