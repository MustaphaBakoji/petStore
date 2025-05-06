

import { useSelector } from 'react-redux'
import './App.css'
import Nav from './components/Nav'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Login from './pages/Login'
import { RootState } from './redux'
import SignUp from './pages/SignUp'
import CartItem from './components/cartItem'
import Carts from './pages/Carts'
import AddNewProduct from './admin/AddNewProduct'
import Error from './pages/Error'
import AdminItem from './admin/adminItem'
import UpdateProduct from './admin/UpdateItem'
import AdminHome from './admin/AdminHome'

function App() {
  const showLogin = useSelector((state: RootState) => state.popUpReducer.Login)
  const showSignUp = useSelector((state: RootState) => state.popUpReducer.SignUp)
  const showCArt = useSelector((state: RootState) => state.popUpReducer.Cart)
  const showError = useSelector((state: RootState) => state.errorReducer.showError)
  const { error } = useSelector((state: RootState) => state.errorReducer)

  const { user } = useSelector((state: RootState) => state.userReducer)
  const {
    update,
    productToUpdate,
    addProduct,
    home,
    admin
  } = useSelector((state: RootState) => state.adminReducer);



  console.log(update);
  console.log(productToUpdate);



  return (
    <div>

      {showError && <Error statusCode={error ? error.statusCode : 500} message={error ? error.message : "ann erro occured "} />}
      <Nav />

      {!admin && <Sidebar />}
      {home ? <AdminHome /> : <Home />}
      {showCArt && <Carts />}

      {showLogin && <Login />}
      {showSignUp && <SignUp />}
      {addProduct &&
        <AddNewProduct />
      }

      {productToUpdate &&

        <UpdateProduct name={productToUpdate.name} imageUrl={productToUpdate.imageUrl} price={productToUpdate.price} _id={productToUpdate._id} category={productToUpdate.category} animalTYpe={productToUpdate.animalTYpe} />
      }
    </div>
  )
}

export default App
