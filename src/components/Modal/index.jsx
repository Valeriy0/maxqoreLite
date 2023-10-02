import React from 'react';
import { DialogContent, DialogOverlay } from '@reach/dialog';
import clsx from 'clsx';

export const Modal = ({ isOpened, onClose, children, className, isDisableOnClose }) => {
  const preventDefaultCallBack = (callback) => (e) => {
    e.preventDefault();

    callback && callback(e);
  };

  return (
    <DialogOverlay
      className="header-dialog-overlay "
      isOpen={isOpened}
      as="div"
      onClick={!isDisableOnClose && preventDefaultCallBack(onClose)}
    >
      <DialogContent
        className={clsx(
          className,
          'header-dialog-content sm:header-dialog-content-mob sm:m-0 sm:w-screen sm:max-h-full sm:max-w-full relative sm:flex-col-reverse sm:justify-end sm:items-end sm:!px-1.5',
        )}
        as="div"
        aria-label="modal"
      >
        {children}
        <div
          className="hidden z-10 bg-white-100 justify-center cursor-pointer flex items-center w-[30px] h-[30px] rounded-full  sm:top-2.5 sm:right-5 sm:flex modal_gradient border border-[1px] border-white-100"
          onClick={preventDefaultCallBack(onClose)}
          onTouchEnd={preventDefaultCallBack(onClose)}
        >
           <img className="h-4 w-4" src="/icons/closeMob.svg"/> 
        </div>
      </DialogContent>
      {!isDisableOnClose && (
        <div
          className="flex top-9 right-10 bg-[#141517] justify-center cursor-pointer flex items-center w-10 h-10 rounded-full absolute sm:top-2.5 sm:right-5 sm:hidden pointer-events-none"
          onClick={preventDefaultCallBack(onClose)}
          onTouchEnd={preventDefaultCallBack(onClose)}
        >
          <img className="h-6 w-6" src="/icons/close.svg"/> 
        </div>
      )}
    </DialogOverlay>
  );
};
