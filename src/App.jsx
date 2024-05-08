import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AddUserForm from "./components/AddUserForm";
import UsersList from "./components/UsersList";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={
      <>
       <AddUserForm />
      <UsersList />
      </>
      } />
    </Route>
  )
);



function App() {
  return (
    <RouterProvider router={router} />
  );
}


export default App;
