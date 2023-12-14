import { Divider, Select, Stack, Text } from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { useState } from "react";
import config from "../config";
import useContractStore from "../store";
import { loadExchangeTokens } from "../utils";

const Markets = () => {
  const { provider, chainId } = useWeb3React();

  const [selectedTokenPair, setSelectedTokenPair] = useState<string>("");

  const [loadTokens, loadSymbols] = useContractStore((s) => [
    s.loadTokens,
    s.loadSymbols,
  ]);

  const marketHandler = (selected: string) => {
    setSelectedTokenPair(selected);
    loadExchangeTokens(provider, selected.split(","), loadTokens, loadSymbols);
  };

  return (
    <Stack mt={8}>
      <Text fontSize="sm" fontWeight="semibold">
        Select Market
      </Text>

      {chainId ? (
        <Select
          p={0}
          border={0}
          size="sm"
          borderColor="transparent"
          focusBorderColor="transparent"
          iconColor="white"
          value={selectedTokenPair}
          onChange={(e) => marketHandler(e.target.value)}
        >
          <option
            value={`${config.chains[chainId?.toString()].dappAddress},${
              config.chains[chainId?.toString()].mETHAddress
            }`}
          >
            DApp / mETH
          </option>
          <option
            value={`${config.chains[chainId?.toString()].dappAddress},${
              config.chains[chainId?.toString()].mDAIAddress
            }`}
          >
            DApp / mDAI
          </option>
        </Select>
      ) : (
        <Text fontSize="sm">No Network</Text>
      )}

      <Divider mt={6} mb={4} borderColor="gray.600" />
    </Stack>
  );
};

export default Markets;
