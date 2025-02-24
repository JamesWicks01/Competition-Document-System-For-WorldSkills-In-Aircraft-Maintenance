import './css/Login.css';
import logo from './images/WorldSkills-Logo.png';

function LoginPage() {
    return (
        <div id="base" className="">
        {/* Text field & labels (filled) (Group) */}
        <div
            id="u0"
            className="ax_default"
            data-label="Text field & labels (filled)"
            data-left={404}
            data-top={319}
            data-width={386}
            data-height={112}
            layer-opacity={1}
        >
            {/* Input field (Text field) */}
            <div
            id="u1"
            className="ax_default text_field transition notrs"
            data-label="Input field"
            >
            <div id="u1_div" className="" />
            <input id="u1_input" type="text" defaultValue="" className="u1_input" />
            </div>
            {/* Input label (Rectangle) */}
            <div
            id="u2"
            className="ax_default label transition notrs"
            data-label="Input label"
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
        {/* Text field & labels (filled) (Group) */}
        <div
            id="u4"
            className="ax_default"
            data-label="Text field & labels (filled)"
            data-left={404}
            data-top={452}
            data-width={386}
            data-height={112}
            layer-opacity={1}
        >
            {/* Input field (Text field) */}
            <div
            id="u5"
            className="ax_default text_field transition notrs"
            data-label="Input field"
            >
            <div id="u5_div" className="" />
            <input
                id="u5_input"
                type="password"
                defaultValue=""
                className="u5_input"
            />
            </div>
            {/* Input label (Rectangle) */}
            <div
            id="u6"
            className="ax_default label transition notrs"
            data-label="Input label"
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
        {/* Unnamed (Rectangle) */}
        <div id="u8" className="ax_default shape transition notrs">
            <div id="u8_div" className="" />
            <div id="u8_text" className="text ">
            <p>
                <span>Login</span>
            </p>
            </div>
        </div>
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
            <img id="u10_img" className="img " src={logo} />
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
};

export default LoginPage;