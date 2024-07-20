import React, {useState} from 'react'
import Switch from '@mui/material/Switch';
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

const Subheader = () => {
  const [applyTaxes, setapplyTaxes] = useState(true)
  return (
    <>
        <div className='py-5 px-[5%] flex justify-between'>
            <div className='right flex text-3xl gap-12 text-zinc-500'>
                <div className='Icons flex flex-col place-items-center'>
                    <HiOutlineAdjustmentsHorizontal/>
                    <p className='text-[14px]'>Link</p>
                </div>
                
                <div className='Icons flex flex-col place-items-center'>
                    <HiOutlineAdjustmentsHorizontal/>
                    <p className='text-[14px]'>Link</p>
                </div>
                <div className='Icons flex flex-col place-items-center'>
                    <HiOutlineAdjustmentsHorizontal/>
                    <p className='text-[14px]'>Link</p>
                </div>
                <div className='Icons flex flex-col place-items-center'>
                    <HiOutlineAdjustmentsHorizontal/>
                    <p className='text-[14px]'>Link</p>
                </div>
            </div>

            <div className='left flex place-items-center gap-3'>
                <div className='filter flex place-items-center gap-2 shadow-sm shadow-zinc-300 rounded-xl border-[1px] border-zinc-300 px-3 py-2 h-12'> 
                    <HiOutlineAdjustmentsHorizontal className="text-lg"/>
                    <div className='text-[12px] font-semibold'>Filter</div>
                </div>

                <div className='Taxes flex place-items-center gap-2 border-[1px] border-zinc-300 shadow-sm shadow-zinc-300 rounded-xl px-3 py-2 h-12'>
                    <p className='text-[12px] font-semibold'>Display before taxes</p>
                    <Switch color='secondary' size='small' onChange={()=>{setapplyTaxes(!applyTaxes);}}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Subheader;