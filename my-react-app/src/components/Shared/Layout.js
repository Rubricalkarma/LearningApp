import { Outlet } from "react-router-dom";
import NavbarWrapper from "./NavbarWrapper";

export default function Layout() {
  console.log('rendering layout')
  // const [user, loading, error] = useAuthState(auth);
  //console.log('render')
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/firebase.User
  //       const uid = user.uid;
  //       console.log(user);
  //       // ...
  //     } else {
  //       console.log("user is signed out");
  //       // User is signed out
  //       // ...
  //     }
  //   });
  // },[]);

  // const user = auth.currentUser;

  // if (user) {
  //   // User is signed in, see docs for a list of available properties
  //   // https://firebase.google.com/docs/reference/js/firebase.User
  //   // ...
  //   console.log(user)
  // } else {
  //   // No user is signed in.
  //   console.log('no user logged in')
  // }

  return (
    <>
      <NavbarWrapper />
      <Outlet />
    </>
  );
}
