import {useState, useEffect} from 'react';
import Product from 'components/Product'
import { IProductProps } from 'interfaces';

const Products:React.FC = () => {
    const [products, setProducts] = useState<IProductProps[]>([])
    

    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setProducts(data.products);
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <div className="productlist">
        {
            products && products.map((item) => {
                return (
                    <Product key={`product_${Math.random()}`} {...item} />                    
                )
            })
        }
        </div>
    )
}

export default Products;


