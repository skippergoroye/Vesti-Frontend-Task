import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../features/users/usersSlice";


const UsersList = () => {
  const usersdata = useSelector((state) => state.users.items);
  const dispatch = useDispatch();

  const reversedUsers = usersdata.slice().reverse();
  // const reversedPosts = [...posts].reverse();

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };



  const renderedUsers = reversedUsers.map((data) => (
    <div className="article flex lg:gap-[500px]" key={data.id}>
      <div>
        <h2>FirstName: {data.firstName}</h2>
        <p>LastName: {data.lastName}</p>
        <p>Email Address: {data.email}</p>
        <p>Skills: {data.skills}</p>
      </div>
      <div className="">
        <button className="bg-red-500 px-4 rounded-lg" onClick={() => handleRemoveItem(data.id)}>Remove</button>
      </div>
    </div>
  ));

  return (
    <section>
      <h2>Users Details</h2>
      {renderedUsers}
    </section>
  );
};

export default UsersList;
