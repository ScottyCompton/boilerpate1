
 import {IProductProps} from 'interfaces'

const Product:React.FC<IProductProps> = (props:IProductProps) => {
    const {id, title, description, price, thumbnail} = props;

    return (
        <div className="productItem">
            <div className="productItem__info" style={{backgroundImage: `url(${thumbnail})`}}>
                {title}<br />{description}
            </div>
        </div>
    )
}

export default Product