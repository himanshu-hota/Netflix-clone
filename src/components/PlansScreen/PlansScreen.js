
import React,{useEffect,useState} from 'react';
import classes from './PlansScreen.module.css'


const products =[
    {
        id:'32err23',
        name:'Basic',
        price:200,
        description:'1 Devie / HD / 28 Days'
    },
    {
        id: 'f23r23f',
        name: 'Standard',
        price: 800,
        description: '4 Devie / Full-HD / 28 Days'
    },
    {
        id: 'vfd6v4v',
        name: 'Premium',
        price: 1500,
        description: '8 Devie / 4k / 28 Days'
    }
]

const PlansScreen = () => {

    const [currentPlan, setCurrentPlan] = useState(null);
    
    const checkOut = (e) => {
        const id = e.target.id
        const plan = products.find(product => id===product.id);
        setCurrentPlan(plan);
        
    }

    useEffect(() => {

        window.addEventListener('click',checkOut);

        return () => {
            window.removeEventListener('click',checkOut );
        }

    }, [currentPlan])

    


  return (
    <div className={classes.plansScreen}>
          {products.map(product => { 
        return  <div key={product.id} className={classes.plansScreen__plan}>
            <div className={classes.plansScreen__info}>
            
                <h5>{`${product.name} ${product.id===currentPlan?.id ? '✅' : ''}`} </h5>
                <p>{`₹${product.price}`}</p>
                <h6>{product.description}</h6>
            </div>
            <button id={product.id}>{` ${product.id === currentPlan?.id ? 'Subsribed' : 'Subscribe'}`} </button>
        </div>
          })}
    </div>
  )
}

export default PlansScreen;
