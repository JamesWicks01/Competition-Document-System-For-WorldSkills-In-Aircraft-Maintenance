import './css/ChangeUserPassword.css';
import { useEffect } from 'react';
import * as authUtils from './Components/authUtils.js';

function ChangeUserPasswordPage() {

    useEffect(() => {
        authUtils.CheckLoggedIn();
        authUtils.CheckAccess();
     }, []);

    return(
        <div id="base" className="">
        {/* New_Record (Group) */}
        <div
            id="u15"
            className="ax_default"
            data-label="New_Record"
            data-left={390}
            data-top={275}
            data-width={415}
            data-height={284}
            layer-opacity={1}
        >
            {/* Unnamed (Rectangle) */}
            <div id="u16" className="ax_default heading_2 transition notrs">
            <div id="u16_div" className="" />
            <div id="u16_text" className="text ">
                <p>
                <span>You need to change you password</span>
                </p>
            </div>
            </div>
            {/* Submit_Button (Rectangle) */}
            <div
            id="u17"
            className="ax_default shape transition notrs"
            data-label="Submit_Button"
            >
            <div id="u17_div" className="" />
            <div id="u17_text" className="text ">
                <p>
                <span>Change</span>
                </p>
            </div>
            </div>
            {/* New_Password (Group) */}
            <div
            id="u18"
            className="ax_default"
            data-label="New_Password"
            data-left={457}
            data-top={326}
            data-width={287}
            data-height={91}
            layer-opacity={1}
            >
            {/* Input field (Text field) */}
            <div
                id="u19"
                className="ax_default text_field transition notrs"
                data-label="Input field"
            >
                <div id="u19_div" className="" />
                <input
                id="u19_input"
                type="password"
                defaultValue=""
                className="u19_input"
                />
            </div>
            {/* Input label (Rectangle) */}
            <div
                id="u20"
                className="ax_default label transition notrs"
                data-label="Input label"
            >
                <div id="u20_div" className="" />
                <div id="u20_text" className="text ">
                <p>
                    <span>New Password</span>
                </p>
                </div>
            </div>
            {/* Helper text (Rectangle) */}
            <div
                id="u21"
                className="ax_default label transition notrs"
                data-label="Helper text"
            >
                <div id="u21_div" className="" />
                <div
                id="u21_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
                >
                <p />
                </div>
            </div>
            </div>
            {/* Confirm_New_Password (Group) */}
            <div
            id="u22"
            className="ax_default"
            data-label="Confirm_New_Password"
            data-left={457}
            data-top={406}
            data-width={287}
            data-height={91}
            layer-opacity={1}
            >
            {/* Input field (Text field) */}
            <div
                id="u23"
                className="ax_default text_field transition notrs"
                data-label="Input field"
            >
                <div id="u23_div" className="" />
                <input
                id="u23_input"
                type="password"
                defaultValue=""
                className="u23_input"
                />
            </div>
            {/* Input label (Rectangle) */}
            <div
                id="u24"
                className="ax_default label transition notrs"
                data-label="Input label"
            >
                <div id="u24_div" className="" />
                <div id="u24_text" className="text ">
                <p>
                    <span>Confirm New Password</span>
                </p>
                </div>
            </div>
            {/* Helper text (Rectangle) */}
            <div
                id="u25"
                className="ax_default label transition notrs"
                data-label="Helper text"
            >
                <div id="u25_div" className="" />
                <div
                id="u25_text"
                className="text "
                style={{ display: "none", visibility: "hidden" }}
                >
                <p />
                </div>
            </div>
            </div>
        </div>
        </div>       
    );
};

export default ChangeUserPasswordPage;