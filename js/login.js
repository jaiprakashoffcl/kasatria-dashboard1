function handleCredentialResponse(response) {
  console.log("JWT Token:", response.credential);

  window.location.href = "dashboard.html";
}
