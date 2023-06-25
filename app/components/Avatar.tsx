'use client'

import Image from "next/image"

const Avatar = () => {
  return ( 
    <Image
      className="rounded-full"
      src="https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg"
      alt="avatar"
      width="25"
      height="25"
    />
   );
}
 
export default Avatar;