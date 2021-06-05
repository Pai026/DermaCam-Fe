import React,{useState} from "react";
import { useDispatch } from "react-redux"
import {uploadImage} from "../Redux/actions";
const UploadImage = () => {
    const[form,setForm]=useState()
    const[showModal,setModal]=useState(false)
    const[result,setResult]=useState()
    const dispatch = useDispatch();
    const onChange = (e) => {
        let file=e.target.files[0]
        const fieldValue = {...form}
        console.log(file)
        fieldValue["image"]=file
        setForm(fieldValue)
    }
    const handleSubmit= async(e)=>{
        const formData = new FormData();
        console.log(form["image"])
        formData.append("image",form["image"])
        console.log(formData)
        dispatch(uploadImage(formData))
        .then((resp)=>{
            console.log("hello")
            const { data: res } = resp;
            console.log(res)
            setResult(res)
            setModal(true)
        })
    }
    return (
        <div className="ml-auto mr-auto mt-52">
            
{showModal?<div
      className="fixed inset-0 w-full h-full z-20 bg-black bg-opacity-50 duration-300 overflow-y-auto"
      x-show="showModal1"
      x-transitionenter="transition duration-300"
      x-transitionenter-start="opacity-0"
      x-transitionenter-end="opacity-100"
      x-transitionleave="transition duration-300"
      x-transitionleave-start="opacity-100"
      x-transitionleave-end="opacity-0"
    >
      <div className="relative sm:w-3/4 md:w-1/2 lg:w-1/3 mx-2 sm:mx-auto my-10 opacity-100">
        <div
          className="relative bg-white shadow-lg rounded-md text-gray-900 z-20"
          onClick={()=>setModal(false)}
          x-show="showModal1"
          x-transitionenter="transition transform duration-300"
          x-transitionenter-start="scale-0"
          x-transitionenter-end="scale-100"
          x-transitionleave="transition transform duration-300"
          x-transitionleave-start="scale-100"
          x-transitionleave-end="scale-0"
        >
          <header className="flex items-center justify-between p-2">
            <h2 className="font-semibold">Header</h2>
            <button className="focus:outline-none p-2" onClick={() => setModal(false)}>
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                <path
                  d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                ></path>
              </svg>
            </button>
          </header>
          <main className="p-2 text-center">
            <p>
              {result.data}
            </p>
          </main>
          <footer className="flex justify-center p-2">
            <button
              className="bg-red-600 font-semibold text-white p-2 w-32 rounded-full hover:bg-red-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300"
              onClick={()=>setModal(false)}
            >
              Go back
            </button>
          </footer>
        </div>
      </div>
    </div>:<div className="w-full h-screen mt-auto mb-auto items-center justify-center bg-grey-lighter">
    <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-black">
        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="mt-2 text-base leading-normal">Select a file</span>
        <input onChange={onChange} type='file' className="hidden" name="image"/>
    </label>
    <div className="ml-auto mr-auto pl-16 mt-5">
    <button onClick={handleSubmit} className="bg-white ml-auto mr-auto text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
      <span className="mr-2">Submit</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentcolor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
      </svg>
    </button>
    </div>
    
</div>}
    
        </div>
    )
}
export default UploadImage;