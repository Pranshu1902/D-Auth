import { useRouter } from "next/router";
import Header from "../Common/Header";
import {abi, contractAddress} from "../constants"
import { useMoralis, useWeb3Contract } from "react-moralis"

export default function RouteName() {

  const DAUTHAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null

  const { asPath } = useRouter();
  const {
    runContractFunction: mint,
    data: enterTxResponse,
    isLoading,
    isFetching,
} = useWeb3Contract({
    abi: abi,
    contractAddress: DAUTHAddress,
    functionName: "mint",
    params: {
      args:[1]
    },
})
const { runContractFunction: getVerifiedstatus } = useWeb3Contract({
  abi: abi,
  contractAddress: DAUTHAddress, // specify the networkId
  functionName: "getVerifiedstatus",
  params: {},
})

const { runContractFunction: Verifier } = useWeb3Contract({
  abi: abi,
  contractAddress: DAUTHAddress, // specify the networkId
  functionName: "Verifier",
  params: {
    args:[tp]
  },
})


  return (
    <div className="bg-white text-blue-500 min-h-screen">
      <Header />
    </div>
  );
}
