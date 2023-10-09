import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Product() {
    const [products, setProducts] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(res => setProducts(res))

    }, [])

    if (!products) {
        return <div>Loading...</div>
    }


    return (
        <div>
            {products.map(item => {
                return <div onClick={() => navigate('/product/' + item.id)} style={{ display: "inline-block", width: '23%', border: '1px solid black', margin: '10px', height: '100%', padding: '5px' }}>
                    <img style={{ borderBottom: '1px solid black' }} height={'500'} width={'100%'} src={item.image} />
                    <div style={{ backgroundColor: "beige" }}>
                        <h2 >${item.price}</h2>
                        <p style={{ fontWeight: 'bold', fontSize: 'large' }}>{item.title}</p>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Product