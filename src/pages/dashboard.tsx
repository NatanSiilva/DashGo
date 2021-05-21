import { Flex } from "@chakra-ui/layout";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export default function Dasboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" mx="auto" px="6" maxWidth={1480}>
        <Sidebar />
      </Flex>
    </Flex>
  );
}
