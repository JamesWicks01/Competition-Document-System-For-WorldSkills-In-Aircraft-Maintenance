import { useState } from "react";

const CustomCheckbox = ({ id, label, disabled = false }) => {
    const [checked, setChecked] = useState(false);
    return <div id={id} className="ax_default checkbox">
        <input id={`${id}_input`} type="checkbox" checked={checked} onChange={e => { setChecked(e.target.checked); console.log(e.target.checked); }} disabled={disabled} hidden />
        <label htmlFor={`${id}_input`} id={`${id}_label`} style={{ display: "flex", alignItems: "center", gap: 4, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1 }}>
            <div style={{ width: 16, height: 16, border: "1px solid #797979", display: "flex", alignItems: "center", justifyContent: "center", background: disabled ? "#f0f0f0" : "transparent" }}>
                {checked && <span style={{ fontWeight: "bold" }}>✔</span>}
            </div>
            <span id={`${id}_text`} style={{ marginLeft: "8px" }}>{label}</span>
        </label>
    </div>;
};

export default CustomCheckbox;


