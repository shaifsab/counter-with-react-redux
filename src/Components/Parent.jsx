
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Slices/counterSlice'

const Parent = () => {
  const data = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
    <div className="container">
      <div className="flex gap-10 justify-center  items-center h-screen">
            <button onClick={() => dispatch(decrement())} className="w-[130px] h-[50px] font-lato font-extrabold bg-[#EEF7FF] rounded-[15px] transition-all active:text-gray-900 active:bg-slate-400 drop-shadow-shadow">REMOVE</button>
      
        <div className="text w-[50px] flex justify-center ">
          <p className="text-[40px] font-lato font-extrabold text-[#EEF7FF] drop-shadow-shadow">{data}</p>
        </div>
           

            <button   onClick={() => dispatch(increment())} className="w-[130px] h-[50px] font-lato font-extrabold bg-[#EEF7FF] rounded-[15px] transition-all active:text-gray-900 active:bg-slate-400 drop-shadow-shadow">ADD</button>
       </div>
       </div>
    </>
  )
}

export default Parent