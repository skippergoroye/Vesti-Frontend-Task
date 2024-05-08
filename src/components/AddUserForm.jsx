import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addDetails } from "../features/posts/usersSlice";

const skillsdata = [
  { id: "0", name: "Frontend Engineer" },
  { id: "1", name: "Backend Engineer" },
  { id: "2", name: "DeveOps" },
  { id: "3", name: "Product Designer" },
  { id: "4", name: "Product Manager" },
];

const AddUserForm = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState("");

  const onSavePostClicked = () => {
    if (firstName && lastName && email && skills) {
      dispatch(addDetails(firstName, lastName, email, skills));
      setFirstName("");
      setLastName("");
      setEmail("");
      setSkills("");
    }
  };

  // const usersOptions = skills.map((user) => (
  //   <option key={user.id} value={user.id}>
  //     {user.name}
  //   </option>
  // ));

  return (
    <section>
      <h2 className="text-center mb-4">Add User Details</h2>
      <form>
        <label htmlFor="FirstName">FirstName:</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="text-black"
        />
        <label htmlFor="LastName">LastName:</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="text-black"
        />
        <label htmlFor="Email">Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-black"
        />
        <label htmlFor="Skills">Skills:</label>
        <select
          className="text-black"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        >
          <option value="">Please select </option>
          {skillsdata.map((skill) => (
            <option key={skill.id} value={skill.name}>
              {skill.name}
            </option>
          ))}
        </select>

        <button
          type="button"
          onClick={onSavePostClicked}
          className="text-black bg-purple-600 w-full"
        >
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddUserForm;
