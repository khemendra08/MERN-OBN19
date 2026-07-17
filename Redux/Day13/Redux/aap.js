//Action is an Object
// {
//     type : "kya karna hai"//BUY_CAKE, 
//     paylode? :"some data"
// }

const { createStore, combineReducers  } = require("redux");

const buyCake = "BUY_CAKE"
const restockCake  = "RESTOCK_CAKE"
const buyIceCream = "BUY_ICECREAM"
const restockIceCream = "RESTORE_ICECREAM"

//action crator
function BUY_CAKE(q)
{
    return{
        type:buyCake,
        data: q || 1
    }
}

function RESTOCK_CAKE()
{
    return{
        type:restockCake
    }
}

const initialCakeState = {
    numOfCakes : 12
}

//whatever you return from a reducer fn , that

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){

        case buyCake:
            return{
                numOfCakes : state.numOfCakes-1
            }

       case  restockCake:
        return{
            numOfCakes : 12
        }

    }
}

const store = createStore(cakeReducer)

const unsubscribe = store.subscribe(() =>{
    console.log(store.getState())
})

store.dispatch(BUY_CAKE())
store.dispatch(BUY_CAKE())
store.dispatch(BUY_CAKE())
store.dispatch(BUY_CAKE())
store.dispatch(BUY_CAKE())
store.dispatch(BUY_CAKE())
store.dispatch(BUY_CAKE())

unsubscribe()

store.dispatch(BUY_CAKE())
store.dispatch(BUY_CAKE())
store.dispatch(BUY_CAKE())
store.dispatch(BUY_CAKE())
console.log(store.getState())