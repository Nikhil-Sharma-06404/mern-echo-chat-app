import React from 'react'

const GenderCheckBox = () => {
    return (
      <div className='flex'>
  
        <div className='form-control '>
         <label className={`label gap-2 cursor-pointer`}>
           <span className='label-text font-extrabold text-blue-200'>Male</span>
           <input type='checkbox' className='checkbox border-slate-900'
        //    checked={selectedGender === "male"}
        //    onChange={()=> onCheckboxChange("male")}
           />
         </label>
        </div>
  
        <div className='form-control '>
         <label className={`label gap-2 cursor-pointer `}>
           <span className='label-text ml-6 font-extrabold text-blue-200'>Female</span>
           <input type='checkbox' className='checkbox border-slate-900'
        //    checked={selectedGender === "female"}
        //    onChange={()=> onCheckboxChange("female")}
           />
         </label>
        </div>
  
      </div>
    )
  }
  
  export default GenderCheckBox