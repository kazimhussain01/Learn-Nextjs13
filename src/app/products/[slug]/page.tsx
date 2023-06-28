type ProductDetails = {
    params: {
        slug: string;
    }
}

const ProductDetails = ({params}: ProductDetails) => {
    return(
        <div>
            <div>Product Details {params.slug}.</div>
        </div>
    )
}

export default ProductDetails;