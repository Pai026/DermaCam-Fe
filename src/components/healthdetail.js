import React from "react";
const HealthDetail = () => {
    return (
        <div class="my-8 ml-auto mr-auto">
        <div class="pb-6 md:pb-0 flex flex-col">
        <label for="name" class="input-label text-base mb-2">Allegries</label>
        <div>
        <label class="input-field inline-flex items-baseline border-none shadow-md bg-white p-4">
        <div class="flex-1 leading-none">
                <input id="handle" type="text"  class="placeholder-blue w-full p-0 no-outline text-dusty-blue-darker" name="handle" placeholder="Allegries"/>
                </div>
                </label>
                </div>
                <label for="name" class=" mt-5 input-label text-base mb-2">Medications</label>
        <div>
        <label class=" input-field inline-flex items-baseline border-none shadow-md bg-white p-4">
        <div class="flex-1 leading-none">
                <input id="handle" type="text"  class="placeholder-blue w-full p-0 no-outline text-dusty-blue-darker" name="handle" placeholder="Medications"/>
                </div>
                </label>
                </div>
                <label for="name" class="mt-5  input-label text-base mb-2">Other Comments</label>
        <div>
        <label class="input-field inline-flex items-baseline border-none shadow-md bg-white p-4">
        <div class="flex-1 leading-none">
                <input id="handle" type="text"  class="placeholder-blue w-full p-0 no-outline text-dusty-blue-darker" name="handle" placeholder="Other Comments"/>
                </div>
                </label>
                </div>
                </div>
        </div>
    )
}
export default HealthDetail;