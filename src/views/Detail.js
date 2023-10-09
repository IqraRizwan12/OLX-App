import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"

function Detail(){
const params = useParams()
const [productDetail,setProductDetail] = useState()
console.log(params)



useEffect(()=>{
    fetch('https://fakestoreapi.com/products/' +params.id )
    .then(res => res.json())
    .then(res =>setProductDetail(res))
},[])

if(!productDetail){
    return <div>Loading....</div>
}

return(
    <div style={{border:'1px solid white',textAlign:'center' ,width:'70%',margin:'auto',backgroundColor:'black'}}>
     <img width={400} src={productDetail.image}/>
     <div style={{color:'black',backgroundColor:'beige'}}>
     <h1 style={{borderTop:'1px solid white' }}>${productDetail.price}</h1>
     <h1 style={{fontSize:'2em'}}>{productDetail.rating.rate}<img height={50} width='10%' src="https://pluginscreenshots.craft-cdn.com/star-ratings/_2200x2200_fit_center-center_none/example-stars.png?1523835344"/></h1>
     <h1 >{productDetail.title}</h1>
     </div>
     <div style={{borderTop:'1px solid white' ,fontFamily:'Arial' ,textTransform:"capitalize",color:'black',backgroundColor:'beige',height:150}}>
        <h2>{productDetail.description}</h2>
     </div>

    </div>
   )


}

export default Detail