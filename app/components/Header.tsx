import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../../public/logo.png";

const Header = () => {
  return (
    <Flex align="center" gap="2">
      <Image src={logo} alt="Logo" style={{ width: "28px", height: "28px" }} />
      <Text fontSize="md" fontWeight="semibold">
        DApp Token Exchange
      </Text>
    </Flex>
  );
};

export default Header;
