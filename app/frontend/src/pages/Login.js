import {useState} from 'react';
import './css/Login.css';
import logo from './images/WorldSkills-Logo.png';
import { BASE_URL } from './config';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async () => {
        try {
            const response = await fetch(`${BASE_URL}/login`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({username,password}),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token);
                window.location.href = 'dashboard-competitor';
            } else {
                alert(data.message);
            }
        } catch (err) {
            alert('Failed to connect to the server');
        }
    };

    return (
        <div id="base" className="">
        {/* Username Group (Group) */}
        <div
            id="u0"
            className="ax_default"
            data-label="Username Group"
            data-left={404}
            data-top={319}
            data-width={386}
            data-height={112}
            layer-opacity={1}
        >
            {/* Username_Input (Text field) */}
            <div
            id="u1"
            className="ax_default text_field transition notrs"
            data-label="Username_Input"
            >
            <div id="u1_div" className="" />
            <input id="u1_input" type="text" defaultValue="" className="u1_input" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            {/* Username_Label (Rectangle) */}
            <div
            id="u2"
            className="ax_default label transition notrs"
            data-label="Username_Label"
            >
            <div id="u2_div" className="" />
            <div id="u2_text" className="text ">
                <p>
                <span>Username</span>
                </p>
            </div>
            </div>
            {/* Helper text (Rectangle) */}
            <div
            id="u3"
            className="ax_default label transition notrs"
            data-label="Helper text"
            >
            <div id="u3_div" className="" />
            <div
                id="u3_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
        </div>
        {/* Password Group (Group) */}
        <div
            id="u4"
            className="ax_default"
            data-label="Password Group"
            data-left={404}
            data-top={452}
            data-width={386}
            data-height={112}
            layer-opacity={1}
        >
            {/* Password_Input (Text field) */}
            <div
            id="u5"
            className="ax_default text_field transition notrs"
            data-label="Password_Input"
            >
            <div id="u5_div" className="" />
            <input
                id="u5_input"
                type="password"
                defaultValue=""
                className="u5_input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            {/* Password_Label (Rectangle) */}
            <div
            id="u6"
            className="ax_default label transition notrs"
            data-label="Password_Label"
            >
            <div id="u6_div" className="" />
            <div id="u6_text" className="text ">
                <p>
                <span>Password</span>
                </p>
            </div>
            </div>
            {/* Helper text (Rectangle) */}
            <div
            id="u7"
            className="ax_default label transition notrs"
            data-label="Helper text"
            >
            <div id="u7_div" className="" />
            <div
                id="u7_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
            >
                <p />
            </div>
            </div>
        </div>

        {/* Login_Button (Rectangle) */}
        <button
            id="u8"
            className="ax_default shape transition notrs"
            data-label="Login_Button"
            onClick={handleLogin}
        >
            <div id="u8_div" className="" />
            <div id="u8_text" className="text ">
            <p>
                <span>Login</span>
            </p>
            </div>
        </button>
        {/* Unnamed (Rectangle) */}
        <div id="u9" className="ax_default heading_1 transition notrs">
            <div id="u9_div" className="" />
            <div id="u9_text" className="text ">
            <p>
                <span>Aircraft Maintenance</span>
            </p>
            </div>
        </div>
        {/* Unnamed (Image) */}
        <div id="u10" className="ax_default image transition notrs">
            <img id="u10_img" className="img " alt="WorldSkills_Logo" src={logo} />
            <div
            id="u10_text"
            className="text "
            style={{ display: "none", visibility: "hidden" }}
            >
            <p />
            </div>
        </div>
        </div>
    );
}

export default LoginPage;