import React,{useState} from "react";
const HealthDetail = () => {
    const initForm = {
            allergies:[], 
            medications:[], 
            others:""
    }
    const [form,setForm]= useState(initForm)
    const handleEnter = (e) => {
            if(e.key === 'Enter')
            {
                    console.log("Enter Pressed")
                    const fieldValue = { ...form };
                    fieldValue[e.target.name]=[...fieldValue[e.target.name],e.target.value]
                    setForm(fieldValue)
                    console.log(form[e.target.name])
                    e.target.value=""
            }
            
    }
    return (
        <div className="my-8 ml-auto mr-auto">
        <div className="pb-6 md:pb-0 flex flex-col">
        <label htmlFor="name" className="input-label text-base mb-2">Allegries</label>
        <div>
        <label className="input-field inline-flex items-baseline border-none shadow-md bg-white p-4">
        <div className="flex-1 leading-none">
                <input id="handle" type="text"  className="placeholder-blue w-full p-0 no-outline text-dusty-blue-darker" name="allergies" onKeyPress={handleEnter} placeholder="Allegries"/>
                </div>
                </label>
                </div>
                <label for="name" className=" mt-5 input-label text-base mb-2">Medications</label>
        <div>
        <label className=" input-field inline-flex items-baseline border-none shadow-md bg-white p-4">
        <div className="flex-1 leading-none">
                <input id="handle" type="text"  className="placeholder-blue w-full p-0 no-outline text-dusty-blue-darker" name="medications" onKeyPress={handleEnter} placeholder="Medications"/>
                </div>
                </label>
                </div>
                <label for="name" className="mt-5  input-label text-base mb-2">Other Comments</label>
        <div>
        <label className="input-field inline-flex items-baseline border-none shadow-md bg-white p-4">
        <div className="flex-1 leading-none">
                <input id="handle" type="text"  className="placeholder-blue w-full p-0 no-outline text-dusty-blue-darker" name="others" onKeyPress={handleEnter} placeholder="Other Comments"/>
                </div>
                </label>
                </div>
                </div>
        <div className="flex flex-col mt-5 w-max-prose">
        {form.allergies.length>0?<div>
        <label htmlFor="Allergies" className="input-label text-base mb-2">Allergies</label>
        <div class="flex flex-wrap overflow-hidden">
        {form.allergies.map((item1)=>{
           return (<div key={item1}>
              <button className="h-6 md:h-12 w-full inline-block md:text-sm text-xs bg-gray-300 hover:bg-blue text-blue-dark font-semibold hover:text-black py-2 px-4 border border-blue hover:border-transparent rounded-full">
                  {item1}
              </button>
          </div>)
        })}
        </div>
        </div>:<div className="hidden"></div>}
        {form.medications.length>0?
        <div className="mt-5">
        <label htmlFor="Allergies" className="input-label text-base mb-2">Medications</label>
        <div class="flex flex-wrap overflow-hidden">
        {form.medications.map((item1)=>{
           return (<div key={item1}>
              <button className="h-6 md:h-12 w-full inline-block md:text-sm text-xs bg-gray-300 hover:bg-blue text-blue-dark font-semibold hover:text-black py-2 px-4 border border-blue hover:border-transparent rounded-full">
                  {item1}
              </button>
          </div>)
        })}
        </div>
        </div>:
        <div className="hiiden">
                </div>}
        {(form.allergies.length>0 || form.medications.length>0)?
        <div class="m-3">
    <button class="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
      <span class="mr-2">Submit</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentcolor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
      </svg>
    </button>
  </div>:
  <div className="hidden"></div>
  }
  </div>
        </div>
    )
}
export default HealthDetail;