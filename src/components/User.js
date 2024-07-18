import { useState } from "react";

const User = (props) => {
    const [count,setCount] = useState(0);

  return (
    <div className="userCard">
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
      <h2>{props.name}</h2>
      <p>Role - MERN Stack Developer</p>
    </div>
  );
};
export default User;
