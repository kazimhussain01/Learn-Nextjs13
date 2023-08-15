import Image from "next/image";
import Link from "next/link";
import { Product } from "@/utlis/product";

const Male = () => {
  const ProduFilter = Product.filter ((products)=> products.category === 'male')
    return (
    <div>
      <h1>Male Page</h1>
      <div>
        <div className="grid grid-cols-4 gap-2 px-8">
          {ProduFilter.map((items, index)=>{
            return(
              <div key={index}>
                <div className="p-4 bg-gray-400">
                  <Link href={`/products/${index}`}>
                  <Image className="w-60 h-60 transform hover:scale-110 ease-out duration-150" src={items.Image} alt="image-1"
                  width={200}
                  height={200}
                  ></Image>
                  </Link>
                </div>
                <div className="text-xl font-semibold py-1">{items.name}</div>
                <div className="text-xl font-semibold">{items.category}</div>
                <div className="text-xl font-semibold">{items.price}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Male;
