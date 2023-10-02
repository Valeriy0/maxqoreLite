import React from "react";
import { WALLETS } from "../../../connectors/wallets";
import { useTryActivation } from "../../../helpers/hooks/useTryActivation";
import { Modal } from "../../Modal";

export const ActivateModal = ({ openedModal, handleCloseModal, onClose, children, className, isDisableOnClose }) => {
  const { tryActivation } = useTryActivation();

  const preventDefaultCallBack = (callback) => (e) => {
    e.preventDefault();

    callback && callback(e);
  };

  const onWalletClick = (wallet) => () => {
    tryActivation(wallet.connector);
    handleCloseModal();
  };

  return (
      <Modal  isOpened={openedModal} onClose={handleCloseModal}>
        <div className="flex flex-col items-center justify-center modal_gradient border border-[1px] border-white-100 w-[480px] rounded-[30px] py-[40px] space-y-10 px-[40px] sm:w-full sm:rounded-[0px] sm:rounded-t-[30px] sm:mt-[10px]">
          <span className="font-poppins text-2xl  text-white font-medium sm:uppercase sm:text-xl">Connect your wallet</span>
            <div className="flex w-full flex-col overflow-auto mt-5 space-y-3.5">
              {WALLETS?.map((wallet) => {
                return (
                  <div
                    className="flex items-center space-x-5 rounded-[20px] border border-[1px] border-white-100 w-full p-2 cursor-pointer hover:bg-darkPurple"
                    onClick={onWalletClick(wallet)}
                    key={wallet.title}
                  >
                   <img src={wallet.icon} />
                    <div className="flex flex-col ml-5">
                      <span className="font-poppins text-lg text-white font-medium">
                        {wallet.title}
                      </span>
                      <span className="text-sm text-white-400 font-light">
                        {wallet.subtitle}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <button onClick={preventDefaultCallBack()} className="hidden sm:flex items-center justify-center border border-[1px] border-white-100 rounded-full w-full py-4">
              <span className="font-poppins text-sm text-white">
                Cancel
              </span>
            </button>

      </div>
      </Modal>
//       <div className="flex flex-col items-center justify-center z-[1111] bg-[#141517] w-full max-w-[480px] rounded-[30px] py-[50px] space-y-10">
//       {/* МОДАЛКА */}
//      <span className="font-poppins text-2xl  text-white font-medium">Connect your wallet</span>
//      <div className="flex flex-col space-y-3">
//          <div className="flex items-center space-x-5 rounded-[20px] border border-[1px] border-white-100 w-full min-w-[400px] p-2">
//              <img src="/images/nftcollection/wallets/TW.png"/>
//              <div className="flex flex-col">
//                  <span className="font-poppins text-lg text-white font-medium">Trust Wallet</span>
//                  <span className="text-sm text-white-400 font-light">DApp in app</span>
//              </div>
//          </div>
//          <div className="flex items-center space-x-5 rounded-[20px] border border-[1px] border-white-100 w-full min-w-[400px] p-2">
//              <img src="/images/nftcollection/wallets/TP.png"/>
//              <div className="flex flex-col">
//                  <span className="font-poppins text-lg text-white font-medium">TokenPocket</span>
//                  <span className="text-sm text-white-400 font-light">DApp in app</span>
//              </div>

//          </div>
//          <div className="flex items-center space-x-5 rounded-[20px] border border-[1px] border-white-100 w-full min-w-[400px] p-2">
//              <img src="/images/nftcollection/wallets/MT.png"/>
//              <div className="flex flex-col">
//                  <span className="font-poppins text-lg text-white font-medium">MetaMask</span>
//                  <span className="text-sm text-white-400 font-light">DApp in app</span>
//              </div>

//          </div>
//          <div className="flex items-center space-x-5 rounded-[20px] border border-[1px] border-white-100 w-full min-w-[400px] p-2">
//              <img src="/images/nftcollection/wallets/WC.png"/>
//              <div className="flex flex-col">
//                  <span className="font-poppins text-lg text-white font-medium">WalletConnect</span>
//                  <span className="text-sm text-white-400 font-light">DApp in app</span>
//              </div>

//          </div>

//      </div>
//  </div>
  
  );
};
