import React from 'react'

export const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "10vh",
    width: "100%",
    border: "2px solid red"
  }
  return (
    <footer className="bg-dark text-light py-4" style={footerStyle}>
      <p className="text-center">Copyright &copy; Todos.corp</p>
    </footer>
  )
}
