import { ethers } from "ethers";
// const provider = new ethers.providers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/wqjdT1y3OVmW8VRzfsTEQsXYWTzAHzlK");
const provider = new ethers.AlchemyProvider("homestead", "wqjdT1y3OVmW8VRzfsTEQsXYWTzAHzlK");
const main = async () => {
    const balance = await provider.getBalance(`vitalik.eth`);
    console.log(`ETH Balance of vitalik: ${ethers.formatEther(balance)}ETH ${ethers.parseEther("1.22323")}WEI`);
}
main()