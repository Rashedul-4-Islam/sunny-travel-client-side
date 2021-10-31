import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Homepage from './components/Home/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import SignIn from './components/SignIn/SignIn';
import AuthProvider from './Context/AuthProvider';
import TourDetails from './components/Home/TourDetails/TourDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import AddTour from './components/AddTour/AddTour';
import AllBooking from './components/AllBooking/AllBooking';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import NotFound from './components/NotFound/NotFound';
import MyOrders from './components/MyOrder/MyOrders';

function App() {
  return (
    <div className="App">
         <AuthProvider>
         <Router>
           <Header></Header>
              <Switch>
                   <Route exact path="/">
                        <Homepage></Homepage>
                   </Route>
                   <Route path="/homepage">
                        <Homepage></Homepage>
                   </Route>
                   <Route path="/placeorder">
                        <PlaceOrder></PlaceOrder>
                   </Route>
                   <PrivateRoute path="/allbooking">
                        <AllBooking></AllBooking>
                   </PrivateRoute>
                   <PrivateRoute path="/myorders">
                        <MyOrders></MyOrders>
                   </PrivateRoute>
                   <PrivateRoute path="/addtour">
                        <AddTour></AddTour>
                   </PrivateRoute>
                   <Route path="/blog">
                        <Blog></Blog>
                   </Route>
                   <Route path="/about">
                        <About></About>
                   </Route>
                   <PrivateRoute path="/tourdetails/:id">
                        <TourDetails></TourDetails>
                   </PrivateRoute>
                   <Route path="/signin">
                        <SignIn></SignIn>
                   </Route>
                   <Route path="*">
                        <NotFound></NotFound>
                   </Route>
              </Switch>
              <Footer></Footer>
         </Router>
         </AuthProvider>
    </div>
  );
}

export default App;
