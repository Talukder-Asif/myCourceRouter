/* eslint-disable react/jsx-key */
import { createElement, useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import { TbBrandCashapp } from 'react-icons/Tb';
import { BsBook } from 'react-icons/Bs';

function App() {
  const [AllCource, setAllCource] = useState([]);
  const [Carts, setCarts] = useState([]);
  useEffect(() => {
    fetch('../public/cources.json')
    .then((ref) => ref.json())
    .then((data) => setAllCource(data));
  },[]);

  const [RemainingCradit, setRemainingCradit] = useState(20);
  const [CraditHour, setCraditHour] = useState(0);

  // Function for calculate cradit hour and remaining cradit.
  const craditCalculator = (courceCradit) =>{
    const NewRemainingCradit = RemainingCradit - courceCradit;
    const totalCradit = CraditHour + courceCradit;
    setCraditHour(totalCradit);
    setRemainingCradit (NewRemainingCradit);
    console.log(RemainingCradit);
  }

  const [TotalPrice, setTotalPrice]= useState(0);
  const CalculatePrice = (price) => {
    const newPrice = TotalPrice + price;
    setTotalPrice(newPrice);
  }

 

// Function for handle the cart after clicking button
  const handelBtn = (cartProduct) =>{
    Carts.push(cartProduct);
    console.log(Carts);
    craditCalculator(cartProduct.credit_hour);
    CalculatePrice(cartProduct.price)
  }


  return (
    <>
    <h1 className='text-[#1C1B1B] text-3xl font-bold py-7 text-center'>Course Registration</h1>
    <main className='md:flex md:gap-3'>
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
            <button onClick={() => handelBtn(Indivisualcource)} className='bg-[#2f80ed]  rounded-md py-1 text-white w-full'>Select</button>
          </div>
          ))}

      </div>
      <div className='Cart bg-white h-max rounded-2xl w-1/4 p-5'>
          <h3 id='remainingCr' className='text-[#2f80ed] my-3 text-lg font-bold'>Credit Hour Remaining : {RemainingCradit} hr</h3>
          <hr></hr>
          <h3 className='text-[#1C1B1B] text-xl font-bold my-3'>Course Name</h3>
            <ul id='ulName'></ul>
          <hr></hr>
          <p className='text-[#737272] my-2 text-base font-medium'>Total Credit Hour : {CraditHour}</p>
          <hr></hr>
          <p className='text-[#737272] my-2 text-base font-semibold'>Total Price : {TotalPrice} USD</p>
      </div>
    </main>
    </>
  )
}

export default App
