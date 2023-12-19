import {
  Box,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Image from "next/image";
import sortLogo from "../../public/sort.png";
import { Banner } from "../components";
import { OrderBookInfo } from "../utils";

interface OrderTableProps {
  orderType: string;
  tokenGetSymbol: string;
  tokenGiveSymbol: string;
  orderBookInfo: null | OrderBookInfo[];
}

const OrderTable = ({
  orderType,
  tokenGetSymbol,
  tokenGiveSymbol,
  orderBookInfo,
}: OrderTableProps) => {
  return (
    <Box>
      {orderBookInfo?.length !== 0 && tokenGetSymbol && tokenGiveSymbol ? (
        <TableContainer>
          <Text fontSize="sm" mb={2}>
            {orderType}ing
          </Text>
          <Table size="sm" mt={2} ml={-4} variant="unstyled">
            <Thead color="gray">
              <Tr>
                <Th>
                  <Flex>
                    {tokenGetSymbol}
                    <Image
                      src={sortLogo}
                      alt="ETH Logo"
                      style={{ width: "16px", height: "16px" }}
                    />
                  </Flex>
                </Th>
                <Th>
                  <Flex justifyContent="flex-end">
                    {tokenGetSymbol}/{tokenGiveSymbol}
                    <Image
                      src={sortLogo}
                      alt="ETH Logo"
                      style={{ width: "16px", height: "16px" }}
                    />
                  </Flex>
                </Th>
                <Th>
                  <Flex justifyContent="flex-end">
                    {tokenGiveSymbol}
                    <Image
                      src={sortLogo}
                      alt="ETH Logo"
                      style={{ width: "16px", height: "16px" }}
                    />
                  </Flex>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {orderBookInfo
                ?.sort((a, b) => b.price - a.price)
                .map((order, index) => {
                  return (
                    <Tr key={index} maxHeight="0px">
                      <Td py={1} fontSize="12px" fontWeight="semibold">
                        {order.amountGive}
                      </Td>
                      <Td
                        py={1}
                        fontSize="12px"
                        fontWeight="semibold"
                        textAlign="right"
                        color={orderType === "Buying" ? "green" : "red"}
                      >
                        {order.price}
                      </Td>
                      <Td
                        py={1}
                        textAlign="right"
                        fontWeight="semibold"
                        fontSize="12px"
                      >
                        {order.amountGet}
                      </Td>
                    </Tr>
                  );
                })}
            </Tbody>
          </Table>
        </TableContainer>
      ) : (
        <Banner text={`No ${orderType} Orders`} />
      )}
    </Box>
  );
};

export default OrderTable;
