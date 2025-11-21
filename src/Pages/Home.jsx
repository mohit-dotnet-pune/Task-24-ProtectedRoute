import {NavLink,Outlet} from "react-router-dom"
export const Home = () => {
return(
    <div>
        <nav style={{display:"flex",justifyContent:"space-around"}}>
            <NavLink to="login">Login</NavLink>
            
            <NavLink to="dashboard">Dashboard</NavLink>
        </nav>
        <Outlet/>
    </div>
)
}