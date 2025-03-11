import {Link} from "react-router-dom";

function Nav() {
    return (
      <>
        <h1>Nav</h1>
        <ul className="navList">
          <li>
            <Link to="/input">회원정보 입력</Link>
          </li>
        </ul>
      </>
    );
  }
  
  export default Nav;
  