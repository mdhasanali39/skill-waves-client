import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from  'prop-types'

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()
    if(loading){
        return <div className="min-h-[86vh] flex justify-center items-center"><span className="loading loading-dots loading-lg"></span></div>
    }
    if(!user){
        return <Navigate to={'/login'}/>
    }
    return children;
};
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
}
export default PrivateRoute;