import React from 'react'
import FormInput from '../../pages/CreateCar';

type Props = {
    id?: string[],
    open:boolean;
    onClose: () => void;
}

const Modal = (props: Props) => {
    if ( !props.open ) return (<></>)
  return (
    <div
        onClick={ props.onClose }
        className='prop-close'
        >
            <div
            className='max'
            onClick={(e) => {
                e.stopPropagation()
            }}
            >
                <div className='w-full flex flex-col'>
                    <div className='flex flex-row space-apart'>
                        <p className='flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white'
                        onClick={props.onClose}>
                            X
                        </p>
                    </div>
                    <div className='flex flex-col items-center text-center mt-3 p-2'>
                        <FormInput onBackBtnClickHnd={function (): void {
                          throw new Error('Function not implemented.');
                      } }/>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Modal