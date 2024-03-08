import React from 'react'

export default function input({ placeholder, type, name, id, value, checked, func, }) {
  return (
    <input
      id={id}
      required
      checked={checked}
      value={value}
      name={name}
      placeholder={placeholder}
      type={type}
      onChange={func}
      className={type === "checkbox" ? "checked" : "loginInput"} />
  )
}
