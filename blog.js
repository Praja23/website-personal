// Menampilkan pesan selamat datang saat halaman dimuat
window.onload = function () {
  alert("Selamat datang di Warung Mina Mamah Nada!");
};

// Menambahkan efek klik pada item menu
document.querySelectorAll(".menu-item").forEach((item) => {
  item.addEventListener("click", () => {
    alert(`Anda memilih ${item.querySelector("h3").innerText}`);
  });
});

// Menambahkan transisi halus saat navigasi
document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});
