import {useState, useEffect} from 'react';
import {Product} from 'components'
import { IProductProps } from 'interfaces';
import {http} from 'helpers'

const Products:React.FC = () => {
    const [products, setProducts] = useState<IProductProps[]>([])

    useEffect(() => {
       http.getData('https://dummyjson.com/products')
      .then((result) => {
        setProducts(result.products)
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


