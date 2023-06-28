"use client";

const Input = () => {
  return ( 
    <div
      className="w-full h-12 bg-gray-100 rounded-md"
    >
      <input
        className="w-full h-full px-4 text-gray-700 bg-transparent outline-none"
        type="text"
        placeholder="Name"
      />
      <input
        className="w-full h-full px-4 text-gray-700 bg-transparent outline-none"
        type="password"
        placeholder="Password"
      />

    </div>
   );
}
 
export default Input;