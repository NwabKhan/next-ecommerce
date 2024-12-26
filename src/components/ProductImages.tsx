"use client"

import Image from "next/image";
import { useState } from "react"


const images =
[
  {
    id: "1",
    url: "https://images.pexels.com/photos/17565564/pexels-photo-17565564/free-photo-of-lighthouse-among-palm-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "2",
    url: "https://images.pexels.com/photos/28868269/pexels-photo-28868269/free-photo-of-cityscape-with-train-tracks-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "3",
    url: "https://images.pexels.com/photos/905485/pexels-photo-905485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "4",
    url: "https://images.pexels.com/photos/1434984/pexels-photo-1434984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
]

const ProductImages = () => {

  const [index, setIndex] = useState(0);
 
  return (
    <div className="">
      <div className="h-[500px] relative">
      
          <Image alt="" fill src={images[index].url}
            sizes="50vw"
            className="object-cover rounded-md"
          />
        </div>

      <div className="flex justify-between gap-4 mt-8">
        {
          images.map((img, i) => (
            <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer  " key={img.id} onClick={() => setIndex(i)}>
              <Image alt="" fill
              src={img.url}
                sizes="30vw"
                className="object-cover rounded-md"
              />

            </div>
          ))
        }

      </div>

    </div>
  )
}

export default ProductImages
