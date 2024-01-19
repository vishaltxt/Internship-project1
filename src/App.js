import React from 'react';
import Login from './components/login';
import Homepage from './components/homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/about';
import Termsofuse from './components/termsofuse';
import Privacy from './components/privacypolicy';
import Faq from './components/faq';
import Address from './components/address';
import Filter from './components/filter';
import Profile from './components/profile';
import EditProfile from './components/editprofile';
import Forgot from './components/forgot';
import Forgotvianumber from './components/forgotvianumber';
import Successpage from './successpage';
import Order from './components/order';
// import { useState } from 'react';

const App = () => {
  // const [user, setUser] = useState({
  // name: 'John Doe',
  // email: 'john@example.com',
  // });

  // const updateUser = (newUser) => {
  // setUser(newUser);
  // };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/termsofuse" element={<Termsofuse />} />
        <Route path="/privacypolicy" element={<Privacy />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/address" element={<Address />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/forgotvianumber" element={<Forgotvianumber />} />
        <Route path="/successpage" element={<Successpage />} />
        <Route path="/order" element={<Order />} />
        {/* <Route path="/profile" exact render={() => <Profile user={user} />} /> */}
        {/* <Route path="/editprofile" render={() => <EditProfile user={user} updateUser={updateUser} />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
