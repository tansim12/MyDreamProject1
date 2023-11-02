import { NavLink } from "react-router-dom";
import { FiLogIn } from 'react-icons/fi';



const LoginAndProfile = () => {
    return (
        <div>
            <div className="flex items-center justify-center gap-2 btn-accent btn btn-sm btn-outline">
                <FiLogIn></FiLogIn>
                <NavLink to={"/login"}>Login</NavLink>
            </div>
        </div>
    );
};

export default LoginAndProfile;