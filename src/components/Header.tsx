import { Flex, Input, Text, Icon, HStack, Box, Avatar } from "@chakra-ui/react";
import React from "react";
import {
  RiNotificationOffLine,
  RiSearchLine,
  RiUserAddLine,
} from "react-icons/ri";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      marginX="auto"
      mt="4"
      paddingX="4"
      align="center"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        dashgo
        <Text as="span" ml={1} color="pink.500">
          .
        </Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: "gray.400" }}
        />
        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>

      <Flex align="center" ml="auto">
        <HStack
          spacing="4"
          mx="8"
          pr="8"
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
      </Flex>
    </Flex>
  );
}
