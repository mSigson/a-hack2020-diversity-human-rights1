import React from "react";

const Input = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  children,
}) => {
  return (
    <div className="input">
      <label for={label}>{label}</label>
      {type === "textarea" ? (
        <textarea
          id={label}
          name={label}
          rows="4"
          cols="50"
          value={value}
          onChange={onChange}
        ></textarea>
      ) : type === "select" ? (
        <select id={label}>{children}</select>
      ) : (
        <input
          id={label}
          name={label}
          placeholder={placeholder && placeholder}
          type={type}
          value={value}
          onChange={onChange}
        />
      )}

      <style jsx>{`
        .input {
          display: flex;
          flex-direction: column;
        }

        label {
          font-weight: bold;
          margin-bottom: 6px;
        }

        input {
          padding: 6px;
        }
      `}</style>
    </div>
  );
};

export default Input;
