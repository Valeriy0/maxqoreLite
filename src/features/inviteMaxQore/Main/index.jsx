import React, { useEffect, useState, useMemo } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useGetContract } from '../../../helpers/hooks/useGetContract.js';
import { CONTRACT_NAMES } from '../../../helpers/constants.js';
import { ActivateModal } from "../../../components/Modals/ActivateModal";
import { useModal } from "../../../helpers/hooks/useModal";
import { BigNumber } from '@ethersproject/bignumber';
import { parseUnits } from '@ethersproject/units';

export const Main = () => {
  const { openedModal, onOpen, onClose } = useModal()
  const { account } = useWeb3React();
  const { getContract } = useGetContract();
  const [nextLevel, setNextLevel] = useState(1);
  const [lastTrueActive, setLastTrueActive] = useState(null);

  const checkLastActiveMaxqore = async () => {
    try {
      const contract = await getContract(CONTRACT_NAMES.MAXQORE);
      const isAlreadyBoughtLevel = await contract.findNextUserLevel(account);

      setNextLevel(isAlreadyBoughtLevel);
   
      if (lastTrueActive !== isAlreadyBoughtLevel) {
        setLastTrueActive(isAlreadyBoughtLevel);
      }
      
      // setNextMaxqoreLvl(isAlreadyBoughtLevel);
    } catch (e) {
      // setNextMaxqoreLvl(0);
    }
  };

  useEffect(() => {
    if (account) {
      checkLastActiveMaxqore();
    }
  }, [account])

  useEffect(() => {
    const interval = setInterval(() => {
      checkLastActiveMaxqore();
      console.log('check');
    }, 5000);
    return () => clearInterval(interval);
  }, [account]);


  const MAXQORE_PROGRAM_PRICES =
   {
        1: 0.000044,
        2: 0.000055,
        3: 0.000088,
        4: 0.000122,
        5: 0.000177,
        6: 0.00026,
        7: 0.00038,
        8: 0.00054,
        9: 0.00078,
        10: 0.00115,
        11: 0.0017,
        12: 0.0024,
        13: 0.0035,
        14: 0.0055,
        15: 0.0075,
      };
  // const MAXQORE_PROGRAM_PRICES =
  //     {
  //       1: 0.044,
  //       2: 0.055,
  //       3: 0.088,
  //       4: 0.122,
  //       5: 0.177,
  //       6: 0.26,
  //       7: 0.38,
  //       8: 0.54,
  //       9: 0.78,
  //       10: 1.15,
  //       11: 1.7,
  //       12: 2.4,
  //       13: 3.5,
  //       14: 5.5,
  //       15: 7.5,
  //     };

  const toWei = (value) => {
    return parseUnits(String(value), 'ether');
  }

  const increaseByPercent = (number, percent = 30) => {
    const onePercent = number.div(100);
  
    return number.add(onePercent.mul(percent));
  };

  const registration = async () => {
    if (nextLevel < 15) {
      setNextLevel(prev => prev + 1);
    }
    const contract = await getContract(CONTRACT_NAMES.MAXQORE);
            const priceWithCommission = MAXQORE_PROGRAM_PRICES[1].toFixed(6)
      
            let gas = null;
            try {
              gas = await contract.estimateGas.registrationExt({
                value: toWei(priceWithCommission),
              });
            } catch (e) {
              //
            }

            return await contract.registrationExt({
              value: toWei(priceWithCommission),
              gasLimit: parseInt(gas) ? increaseByPercent(gas) : BigNumber.from(2000000),
            });
  }

  const upgrade = async (level) => {
    if (nextLevel < 15) {
      setNextLevel(prev => prev + 1);
    }
   
    const price = MAXQORE_PROGRAM_PRICES[level].toFixed(6);
    let result = {};
    try {
      const routeContract = await getContract(CONTRACT_NAMES.MAXQORE);
      const value = toWei(price);

      let gas = null;
      try {
        gas = await routeContract.estimateGas.buyNewLevel([level], {
          value,
        });
      } catch (e) {
        //
      }

      result = await routeContract.buyNewLevel([level], {
        value,
        gasLimit: parseInt(gas) ? increaseByPercent(gas) : BigNumber.from(2000000),
      });

      return result;
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    }
  }

  

  const mainButtonClick = (level = nextLevel) => {
    if (!account) {
      onOpen();
    } else {
      if (level === 1) {
        registration();
      } else {
        upgrade(level);
      }
    }
  }

  const maxQoreLvls = useMemo(() => {
    return (
      <div className="grid grid-cols-5 sm:grid-cols-3 gap-2.5">
        {Object.values(MAXQORE_PROGRAM_PRICES).map((item, itemIndex) => {
          const isActive = itemIndex + 1 < nextLevel;
          const nextActivate = itemIndex + 1 === nextLevel;
          const isLevelPending = itemIndex + 1 >= lastTrueActive && itemIndex + 1 < nextLevel;
          return (
            <div
              className={`relative w-[100px] h-[90px] flex items-center justify-center ${
                isActive ? 'bg-green-100' : nextActivate ? 'bg-green-350 cursor-pointer' : 'bg-black-300'
              } rounded`}
            >
              <span className="absolute top-1.5 left-1.5 text-white-500">{itemIndex + 1}</span>
              {isLevelPending ? <img src='/icons/puff.svg' className='w-10 h-10' /> : isActive ? (
                <img src='/icons/success_check.svg' className="w-10 h-10" />
              ) : (
                <div className="text-center text-white">
                  {nextActivate && <span className="font-semibold">Upgrade</span>}
                  <div className="flex items-center justify-center space-x-1.5">
                    {' '}
                    <span>{item} </span> <img src='/icons/BNB.svg' className="w-3.5 h-3.5" />{' '}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    )
  }, [nextLevel, lastTrueActive])

  return (
    <div className="relative w-full h-[100vh] flex flex-col items-center justify-center sm:p-2">
      <img
        className="hidden sm:flex absolute top-4 right-0 w-[35%]   "
        src="/maxQore/invite/main/main-right-mob.svg"
        alt=""
      />
      <img
        className="absolute top-0 right-0 sm:top-1/2 w-[20%] sm:rigth-[-100px] sm:hidden  "
        src="/maxQore/invite/main/main-left.svg"
        alt=""
      />
      <img
        className="hidden sm:flex absolute bottom-0 left-0 w-[45%]   "
        src="/maxQore/invite/main/main-left-mob.svg"
        alt=""
      />
      <img
        className="absolute top-1/3 left-0 w-[20%] sm:top-transparent sm:bottom-0 sm:hidden "
        src="/maxQore/invite/main/main-right.svg"
        alt=""
      />
      <div className="flex flex-col items-center max-w-[1168px] w-full sm:space-y-5 sm:h-full z-10">
        <div className="flex flex-col text-center items-center">
          <div className="flex items-center text-5xl sm:text-4xl sm:items-center ">
            <img className="h-[125px] sm:h-[90px]" src="/maxQore/invite/main/maxQoreLogo.png" alt="" />
          </div>
        </div>
        <div className="flex flex-col text-center items-center space-y-[50px] sm:h-full sm:justify-between sm:w-full pt-[40px]">
          <span className='text-white'>You wallet <span className='font-bold'>{account}</span></span>
          {account && maxQoreLvls}
          <button
            onClick={() => mainButtonClick(nextLevel)}
            className="font-semibold uppercase px-11 py-5 sm:min-h-[60px] maxQore_main_button rounded-small font-medium maxQore_main_button_shadow text-[#FFFFFF] sm:text-xl w-[90%]"
          >
            <span>{!account ? 'Connect wallet' : nextLevel === 1 ? 'Register now' : `buy ${nextLevel} level` }</span>
          </button>
          <span className="text-white-700 font-light sm:h-full">
            MaxQore is an advanced program for effective business growth and partner team
            <br className="sm:hidden" />
            development with a 860% reward in BNB coin from a single cycle.
          </span>
        </div>
      </div>
      <ActivateModal handleCloseModal={onClose} openedModal={openedModal} />
    </div>
  );
};
