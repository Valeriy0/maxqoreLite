import { useWeb3React } from "@web3-react/core";
import { Contract } from "@ethersproject/contracts";
import { CONTRACT_NAMES } from "../constants";
import config from "../config";

export const useGetContract = () => {
  const { account, provider } = useWeb3React();

  const types = {
    [CONTRACT_NAMES.MAXQORE]: [
      config.matrixMaxqore,
      config.matrixMaxqoreAbi,
    ],
    [CONTRACT_NAMES.BUSD_TOKEN]: [config.BUSDContract, config.BUSDContractAbi],
    [CONTRACT_NAMES.XBASE]: [config.XBASEContract, config.XBASEContractAbi],
  };

  const getContract = (type) =>
    new Promise((resolve, rejected) => {
      if (types[type] && provider) {
        const contract = new Contract(
          ...types[type],
          provider?.getSigner(account).connectUnchecked() || provider
        );

        resolve(contract);
      } else {
        rejected(`error init contract: ${type}`);
      }
    });

  return {
    getContract,
  };
};
