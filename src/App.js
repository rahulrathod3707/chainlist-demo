import "./App.css";
import { BiSearch } from "react-icons/bi";
import { ImCoinYen } from "react-icons/im";
import { BlockList } from "./assets/blocklist";


function App() {
  return (
    <div className="h-screen flex overflow-hidden">
      <div className="w-2/5 bg-white flex items-start justify-center px-10 flex-col">
        <div className="text-4xl font-bold">Blocklist</div>
        <div className="text-xl font-bold w-3/4 mt-5">
          Helping users connect to EVM powered networks
        </div>
        <div className="font-semibold mt-5">
          Chainlist is a list of EVM networks. Users can use the information to
          connect their wallets and Web3 middleware providers to the appropriate
          Chain ID and Network ID to connect to the correct chain.
        </div>
        <div className="mt-10 px-10 py-3 border-2 rounded-full cursor-pointer hover:border-blue-500">
          Add Your Netwrok
        </div>
      </div>
      <div className="w-3/5 bg-gray-200 overflow-auto">
        <div className="p-7">
          <div className="flex items-center justify-between">
            <div className="bg-white px-3 py-2 border-2 border-white hover:border-black rounded-lg drop-shadow-lg active:border-blue-600 flex items-center">
              <span className="font-semibold">Search Networks</span>
              <input
                className="ml-3 outline-none"
                placeholder="ETH, Fantom, ..."
              />
              <BiSearch className="cursor-pointer" />
            </div>
            <div className="px-10 py-3 border-2 bg-gray-300 rounded-full cursor-pointer font-bold">
              Connect Wallet
            </div>
          </div>
        </div>
        <div className="p-7 grid grid-cols-2 gap-8 mx-10">
          {BlockList.map((item) => {
            return (
              <div className="bg-white p-7 rounded-xl drop-shadow-2xl flex">
                <ImCoinYen className="mx-3 my-1 text-lg" />
                <div className="flex flex-col">
                  <div className="font-semibold text-lg">{item.name}</div>
                  <div className="mt-2 grid grid-cols-2">
                    <div className="flex flex-col">
                      <span className="font-light">ChainID</span>
                      <span className="font-bold">{item.chainId}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-light">Currency</span>
                      <span className="font-bold">
                        {item.nativeCurrency.symbol}
                      </span>
                    </div>
                  </div>
                  <div className="text-center mt-8">
                    <span className="border-2 rounded-full text-blue-500 py-2 px-5 cursor-pointer text-sm hover:bg-blue-500 hover:border-blue-500 hover:text-white">
                      Connect Wallet
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
