import { Logo } from "components/Logo/Logo";
import s from "./style.module.css";
import logoSrc from "assets/images/logo.png";
import { useNavigate} from "react-router-dom";
import { selectUser } from "store/auth/auth-selectors";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "store/auth/auth-slice";
import { AuthAPI } from "api/auth";
import { Link } from "react-router-dom";

export function Header(props) {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signout = () => {
    AuthAPI.signout()
    dispatch(setUser(null))
  }
  const renderAuthProfile = () => {
    return(
  <div>
    <img src={`https://api.dicebear.com/5.x/bottts/svg?seed=${user.email}`} style={{width:40}} className="rounded-circle"></img>
    <div>Hello , {user.email}</div>
    <Link to="#" onClick={signout}> Signout </Link>
  </div>
    );
  }
  return (
    <div className={`row ${s.container}`}>
      <div className="col-xs-12 col-sm-4">
        <Logo
          onClick={() => navigate("/")}
          title="Note-A-Rioty"
          subtitle={"Manage yourself bro"}
          image={logoSrc}
        />
      </div>
     <div className ="col-xs-12 col-sm-8 text-end">{renderAuthProfile()}</div>
    </div>
  );
}