import React, { useState, useEffect } from "react";

const CustomCheckbox = ({ id, label, disabled = false, initialChecked, onChange }) => {
    const [checked, setChecked] = useState(initialChecked || false);

    useEffect(() => {
        setChecked(initialChecked);
    }, [initialChecked]); // Updates state if initialChecked changes

    const handleCheckboxChange = (e) => {
        setChecked(e.target.checked);
        onChange(id, e.target.checked);
    };

    return (
        <div id={id} className="ax_default checkbox">
            <input
                id={`${id}_input`}
                type="checkbox"
                checked={checked}
                onChange={handleCheckboxChange}
                disabled={disabled}
                style={{
                    width: 16,
                    height: 16,
                    marginRight: 8, 
                }}
            />
            <label
                htmlFor={`${id}_input`}
                id={`${id}_label`}
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    cursor: disabled ? "not-allowed" : "pointer",
                    opacity: disabled ? 0.5 : 1,
                }}
            >
                <div
                    style={{
                        width: 16,
                        height: 16,
                        border: "1px solid #797979",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {checked && <span style={{ fontWeight: "bold" }}>✔</span>}
                </div>
                <span id={`${id}_text`} style={{ marginLeft: "8px" }}>{label}</span>
            </label>
        </div>
    );
};

export default CustomCheckbox;
