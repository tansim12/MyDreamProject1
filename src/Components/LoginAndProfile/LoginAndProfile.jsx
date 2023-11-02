import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import Profile from "./Profile";

const LoginAndProfile = () => {
  return (
    <section>
        <div>
      <Link to={"/login"}>
        <div className="flex items-center justify-center gap-2 bg-secondary btn-sm btn sm:btn-md transition-all ease-in delay-100 border-none hover:btn-neutral text-white font-bold  ">
          <FiLogIn></FiLogIn>
          <span>Login</span>
        </div>
      </Link>
    </div>
    {/* profile div  */}
    <div>
        <Profile></Profile>
    </div>
    </section>
  );
};

export default LoginAndProfile;
