// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { remove } from '../redux/CartSlice';

// function Cart() {
//     const CartItems = useSelector(
//         ((state) =>state.cart)
//     )
// const dispatch = useDispatch();

//     const handleRemove = (product)=>{
// dispatch(remove(product))
//     }
//     const totalPrice = (CartItems)=>{
//        const total =  CartItems.reduce((total , product) => total + product.price,0);
//         return parseFloat(total.toFixed(2));
//     }
//     const total = totalPrice(CartItems);
    
//   return (<>
//     <div> {
//         CartItems.map((product) =>(
//             <div className='single-product' key={product.id}>
        
    
//         <div className="card" style={{width: "18rem"}}>
//       <img src={product.image} className="card-img-top" alt="img"/>
//       <div className="card-body">
//         <h5 className="card-title">{product.title}</h5>
//         <p className="card-text" >{product.price}</p>
//         <button  className="btn btn-primary"  onClick={()=>handleRemove(product.id)}> Remove From Cart </button>
//       </div>
//     </div>
//     </div>))
//     } </div>
//     <h3> Total price : {total}</h3>
//     </>
//   )
// }

// export default Cart


///////
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../redux/CartSlice';

function Cart() {
    const CartItems = useSelector(
        ((state) =>state.cart.cart)
    )
const dispatch = useDispatch();

    const handleRemove = (product)=>{
dispatch(remove(product))
    }
    const totalPrice = (CartItems)=>{
      if(!Array.isArray(CartItems)){
        return 0 ;
      }
       const total =  CartItems.reduce((total , item) => total + item.product.price *item.quantity,0);
        return parseFloat(total.toFixed(2));
    }
    const total = totalPrice(CartItems);
    console.log(CartItems.quantity)
  return (<>
    <div> {
        CartItems.map((item) =>(
            <div className='single-product' key={item.product.id} style={{ margin: "10px 20px" ,  padding:"100px auto" }}>
        
    
        <div class="card mb-3  " style={{maxWidth: "740px" , margin:"30px auto  "  ,borderRadius:"50px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={item.product.image} class="img-fluid rounded-start" alt={item.product.title}/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">{item.product.description}</p>
        <p className="card-text"  style={{fontFamily:"'Quicksand', sans-serif; " , color:"	#585858" }}> Ratings: {item.product.rating.rate}<span  style={{marginBottom:"-10px"}} ><i className="material-icons" style={{fontSize:"18px", color:"#ffe234" , marginBottom:"0px"}}>star</i></span>({item.product.rating.count}) </p>
   
    <p className="card-text"  style={{fontFamily:"'Quicksand', sans-serif;" }}>${item.product.price} </p>
   
        <p class="card-text"><small class="text-muted">Last updated just now</small></p>
        <button  className="btn btn-primary"  onClick={()=>handleRemove(item.product.id)}> Remove From Cart({item.quantity}) </button>

      </div>
    </div>
  </div>
</div>
    </div>))
    } </div>
    <h3  style={{ margin:"10px auto"}}> Total Price : {total}</h3>
    </>
  )
}

export default Cart