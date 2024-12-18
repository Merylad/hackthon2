async function loginUser(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const error = await response.text();
      document.getElementById("error-message").innerText = error;
    } else {
      window.location.href = "/homepage.html";
    }
  } catch (err) {
    console.error("Erreur lors de la connexion:", err);
    document.getElementById("error-message").innerText = "Erreur serveur.";
  }
}
