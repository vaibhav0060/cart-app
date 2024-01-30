// import React from 'react'
// import {useState , useEffect} from "react"
// import { useDispatch } from 'react-redux'
// import { add } from '../redux/CartSlice'
// import "./home.css"
// function Home() {
//     const [products , setProducts ] = useState([ ])
//     useEffect(() =>{
// const fetchProduct = async()=>{
    
//  const res =await fetch("https://fakestoreapi.com/products")
// const data = await res.json();
// setProducts(data);
// }
// fetchProduct();
// },[])
// console.log(products);
// const dispatch = useDispatch();
// const handleAdd=(product)=>{
//     dispatch(add(product));
// }
//   return (
//     <>
//     <div className='productsArray'>
// {
//     products.map((product) =>(
//         <div className='single-product' key={product.id}>
    

//     <div className="card" style={{width: "18rem"}}>
//   <img src={product.image} className="card-img-top" alt="img"/>
//   <div className="card-body">
//     <h5 className="card-title">{product.title}</h5>
//     <p className="card-text">{product.price}</p>
//     <button  className="btn btn-primary"  onClick={()=>handleAdd(product)}> Add To Cart </button>
//   </div>
// </div>
// </div>))
// }  ;  
// </div>
//     </>
//   )
// }
// export default Home

import React from 'react'
import {useState , useEffect} from "react"
import { useDispatch } from 'react-redux'
import { add } from '../redux/CartSlice'
import "./home.css"
function Home() {
    const [products , setProducts ] = useState([])
    useEffect(() =>{
const fetchProduct = async()=>{
    
 const res =await fetch("https://fakestoreapi.com/products")
const data = await res.json();
setProducts(data);
};
fetchProduct();
},[])
console.log(products);
const dispatch = useDispatch();
const handleAdd=(product)=>{
    dispatch(add({product}));
}
  return (
    <>
    <div className='productsArray '  >
{
    products.map((product) =>(
        <div className="col-md-3 mb-3 mt-5  " style={{marginRight:"20px" ,  marginLeft:"20px" , boxShadow:" 6px 10px 5px 1px rgba(186,179,186,0.26)" }} key={product.id}>
    

    <div className="card h-100 d-flex flex-column " style={{borderRadius:"20px" }} >
  <img src={product.image} className="card-img-top flex-grow-1" alt={product.title} style={{height:"320px"  ,objectFit:"contain"}}/>
  <div className="card-body">
    <h5 className="card-title " style={{minHeight:"64px" , maxHeight:"64px" , overflow:'hidden' ,fontFamily :  "Roboto ,sans-serif" , fontSize:"18px" , fontWeight:"bold"}}>{product.title}</h5>
    <p className="card-text"  style={{fontFamily:"'Quicksand', sans-serif; " , color:"	#585858" }}> Ratings: {product.rating.rate}<span  style={{marginBottom:"-10px"}} ><i className="material-icons" style={{fontSize:"18px", color:"#ffe234" , marginBottom:"0px"}}>star</i></span>({product.rating.count}) </p>
   
    <p className="card-text"  style={{fontFamily:"'Quicksand', sans-serif;" }}>${product.price} </p>
    <button  className="btn btn-primary"  onClick={()=>handleAdd(product)} style={{borderRadius:"16px" ,}}> Add To Cart </button>
  </div>
</div>
</div>))
}  ;  
</div>
    </>
  )
}
export default Home