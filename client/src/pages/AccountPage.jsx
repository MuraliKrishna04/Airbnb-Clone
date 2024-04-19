import { useContext, useState } from "react";
import { UserContext } from "../UserContext.jsx";
import { Link, Navigate,useParams } from "react-router-dom";

export default function AccountPage(){
    const [redirect,setRedirect] = useState(null);
    const {ready,user,setUser} = useContext(UserContext);

    let {subpage} = useParams();
    if (subpage === undefined){
        subpage = 'profile';
    }

    async function logout(){
        await axios.post('/logout');
        setRedirect('/');
        setUser(null);

    }
    if(!ready){
        return 'Loading...!'
    }

    if (ready && !user && !redirect){
        return <Navigate to={"/login"} />
    }



    function linkClasses(type=null){
        let classes = 'py-2 px-6';
        if (type === subpage || (subpage === undefined && type ==='profile')){
            classes += 'bg-primary text-white rounded-full';
        }
        return classes;
    }


    if (redirect){
        return <Navigate to ={redirect}/>
    }

    return(
        <div>
            <nav className="w-full flex justify-center mt-8 gap-2 mb-8">
                <Link className={linkClasses('profile')}to={"/account"}>My Profile</Link>
                <Link className={linkClasses('bookings')}to={"/account/bookings"}>My Bookings</Link>
                <Link className={linkClasses('places')}to={"/account/places"}>My Accomodations</Link>
            </nav>
            {subpage ==='profile' && (
                <div className="text-center max-w-lg mx-auto">
                    Logged in as {user.name}({user.email})<br></br>
                    <button onClick={logout} className="primary max-w-sm mt-2">Logout</button>
                </div>
            )}
        </div>
    );
}