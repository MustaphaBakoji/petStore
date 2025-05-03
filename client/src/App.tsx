

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

function App() {
  const showLogin = useSelector((state: RootState) => state.popUpReducer.Login)
  const showSignUp = useSelector((state: RootState) => state.popUpReducer.SignUp)
  const showCArt = useSelector((state: RootState) => state.popUpReducer.Cart)
  const showError = useSelector((state: RootState) => state.errorReducer.showError)
  const { error } = useSelector((state: RootState) => state.errorReducer)


  return (
    <div>
      {/*       
      {showError && <Error statusCode={error && error.statusCode} message={error && error.message} />}
      <Nav />

      <Sidebar />

      {showCArt && <Carts />}
      <Home />
      {showLogin && <Login />}
      {showSignUp && <SignUp />} */}
      <AddNewProduct />
    </div>
  )
}

export default App
