console.log("Hola Mundo!")


  async function init() {
    const path = window.location.search; 
    const user_name = path.slice(1)
 
    if (!user_name) {
      // Mostrar home principal
      document.body.innerHTML = "<h1>Bienvenido a Clonetree</h1>";
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/${user_name}`);
      const data = await res.json();

      if (!res.ok) {
        document.body.innerHTML = `<h1>${data.message}</h1>`;
        return;
      }

      document.body.innerHTML = `
        <h1>Perfil de ${data.user_name}</h1>
        <p>Email: ${data.email}</p>
        <h3>Links:</h3>
        ${data.links.map(link => `<a href="${link.url}" target="_blank">${link.title}</a><br>`).join("")}
      `;
    } catch (err) {
      document.body.innerHTML = "<h1>Error de conexión con el servidor</h1>";
    }
  }

  init();

