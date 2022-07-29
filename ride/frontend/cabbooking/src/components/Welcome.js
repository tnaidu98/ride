import Controls from "./Controls";
import App from "../App";
import { useNavigate } from "react-router-dom";



function Welcome({ user, setUser }) {

    const navigate = useNavigate();

    return (
        <div className="Welcome" style={{ marginTop: "200px" }}>
            <h1>Choose the User</h1>
            <Controls.Button style={{ margin: "20px" }} onClick={() => { setUser("rider"); navigate('/rider') }}>RIDER</Controls.Button>
            {console.log(user)}
            <Controls.Button style={{ margin: "20px" }} onClick={() => { setUser("driver"); navigate('/driverLogin') }}>DRIVER</Controls.Button>
            {console.log(user)}
        </div>
    );
}

export default Welcome;