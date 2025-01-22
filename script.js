document.addEventListener("DOMContentLoaded", () => {
  const emailProtected = document.getElementById("email-protected")
  const emailParts = ["salchi", "correo.com"]

  emailProtected.addEventListener("mouseover", function () {
    this.textContent = `Para consultas: ${emailParts[0]}@${emailParts[1]}`
  })

  emailProtected.addEventListener("mouseout", function () {
    this.textContent = "Para consultas: salchi[at]correo.com"
  })
})
// Guardar la posición del scroll antes de recargar
window.addEventListener("beforeunload", () => {
  localStorage.setItem("scrollPosition", window.scrollY);
});

// Restaurar la posición después de recargar la página
window.addEventListener("load", () => {
  const scrollPosition = localStorage.getItem("scrollPosition");
  if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10)); // Mover a la posición guardada
      localStorage.removeItem("scrollPosition"); // Limpiar el almacenamiento
  }
});
