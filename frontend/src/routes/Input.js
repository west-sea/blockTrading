import { useState, useEffect } from "react";
// 일단 localstorage에 저장하는 방식으로 구현
// 페이지 새로고침해도 저장 내용이 없어지지 않음, 신기 왜 그런지 나중에 찾아보기

function Input() {
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const savedUsers = localStorage.getItem("users");
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }
  }, []);

  const handleSave = () => {
    const newUser = { username, password };
    const updatedUsers = [...users, newUser];

    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setUsername("");
    setPassword("");
  };

  return (
    <>
      <h1>Input</h1>
      <h1>사용자 입력</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSave}>save</button>

      <h2>소중한 우리 회원들</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.username} / {user.password}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Input;
