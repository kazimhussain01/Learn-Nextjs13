import Link from "next/link";
import Image from "next/image";
import { Product } from "@/utlis/mock";

const femaleCategory = ()=> {
    const Productfilter = Product.filter
        ((products)=> products.category === 'Female') 

    return(
        <div className="flex flex-col">
            <div className="py-2">
                Female Category
            </div>
            <div>  
            <div className="flex gap-5 px-2">
                {Productfilter.map((item, index)=>{
                    return(
                        <div key={index} className="p-2 bg-slate-400">
                            <Link href={`/products/${item.slug}`}>
                            <div className="w-48 h-45">
                            <Image className="transition-transform duration-700 cubic-bezier transform hover:scale-110" 
                            src={item.Image} 
                            alt={item.name} 
                            width={200} 
                            height={200}/>
                            </div>
                            <div>This Product {item.name}</div>
                            <div>Category {item.category}</div>
                            <div>Price {item.price}</div>
                            </Link>
                        </div>
                    )
                })}
            </div>
            </div>
        </div>
    )
}

export default femaleCategory;