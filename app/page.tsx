"use client";

import { Box, Divider, Flex, HStack, Stack } from "@chakra-ui/react";
import { Header, NavBar } from "./components";
import useLoadContract from "./connect";
import {
  Balance,
  Markets,
  MyOrders,
  Order,
  OrderBook,
  PriceChart,
  Trades,
} from "./exchange";

export default function Home() {
  useLoadContract();

  return (
    <Flex height="100vh">
      <Stack width={380} bg="secondary" p={5}>
        <Header />

        <Markets />

        <Divider mt={3} mb={4} borderColor="gray.600" />

        <Balance />

        <Divider mb={4} borderColor="gray.600" />

        <Order />
      </Stack>
      <Box flex="1" bg="primary" p={5}>
        <NavBar />
        <PriceChart />
        <HStack>
          <Box width="50%">
            <MyOrders />
          </Box>
          <Box width="50%">
            <Trades />
          </Box>
        </HStack>
        <OrderBook />
      </Box>
    </Flex>
  );
}
