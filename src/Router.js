import React, { useState } from 'react';
import { Switch, Route } from 'react-router';
import JobPostings from '../src/components/JobPostings';

// Imported components for user login system
// import SignIn from './Containers/SignIn';
// import SignUp from './components/SignUp';
// import AddressBook from './components/AddressBook';
// import SavedJobs from './components/SavedJobs';

// Auth code to verify user
// const checkAuth = () => {
//   const cookies = cookie.parse(document.cookie);
//   return cookies['loggedIn'] ? true : false;
// };
// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         checkAuth() ? <Component {...props} /> : <Redirect to='/login' />
//       }
//     />
//   );
// };


function Router() {
  const [jobSearch, setJobSearch] = useState({});

  return (
    <Switch>
      {/* <Route exact path='/' component={Landing}></Route> */}
      {/* <Route path='/job-search'>
        <JobSearch setJobSearch={setJobSearch} />
      </Route> */}
      <Route path='/'>
        <JobPostings jobSearch={jobSearch} setJobSearch={setJobSearch} />
      </Route>

      {/* Components for user login and retrieve info */}
      {/* <Route path='/sign-in' component={SignIn}></Route> */}
      {/* <Route path='/sign-up' component={SignUp}></Route> */}
      {/* <Route path='/address-book' component={AddressBook}></Route> */}
      {/* <Route path='/saved-jobs' component={SavedJobs}></Route> */}

    </Switch>
  );
}

export default Router;
