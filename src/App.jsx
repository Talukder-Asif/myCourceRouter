/* eslint-disable react/jsx-key */
import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

import { TbBrandCashapp } from 'react-icons/Tb';
import { BsBook } from 'react-icons/Bs';

function App() {
  const [AllCource, setAllCource] = useState([])
  useEffect(() => {
    fetch('../public/cources.json')
    .then((ref) => ref.json())
    .then((data) => setAllCource(data));
  },[]);
  return (
    <>
    <h1 className='text-[#1C1B1B] text-3xl font-bold py-7 text-center'>Course Registration</h1>
    <main className='md:flex'>
      <div className='w-3/4 grid gap-3 md:grid-cols-2 lg:grid-cols-3 CourceConteiner'>

          {AllCource.map((Indivisualcource)=>(
            <div key={Indivisualcource.id} className='courceBody p-3 rounded-2xl bg-white'>
            <img className='w-full' src={Indivisualcource?.course_cover_image }></img>
            <h3 className='text-[#1C1B1B] py-3 text-lg font-semibold'>{Indivisualcource?.course_name}</h3>
            <p className='text-[#737272] pb-3 font-normal text-sm'>{Indivisualcource?.details}</p>
            <div className='flex pb-3 justify-between'>
              <p className='flex text-[#737272] font-normal text-sm items-center gap-1'><TbBrandCashapp/>  Price : {Indivisualcource.price} </p>
              <p className='flex text-[#737272] font-normal text-sm items-center gap-1'><BsBook/>  Credit : {Indivisualcource.credit_hour}hr </p>
            </div>
            <button className='bg-[#2f80ed] rounded-md py-1 text-white w-full'>Select</button>
          </div>
          ))}

      </div>
      <div className='Cart w-1/4'>
          hi
      </div>
    </main>
    </>
  )
}

export default App
