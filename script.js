  function updateClock() {
      const now = new Date();
      const jam = now.getHours().toString().padStart(2, '0');
      const menit = now.getMinutes().toString().padStart(2, '0');
      const detik = now.getSeconds().toString().padStart(2, '0');
      document.getElementById("clock").textContent = `Jam sekarang: ${jam}:${menit}:${detik}`;
    }
    setInterval(updateClock, 1000);
    updateClock();

    document.getElementById("loginForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const now = new Date();
      const jam = now.getHours();
      const menit = now.getMinutes();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value;
      const errorMsg = document.getElementById("error-message");

      if (jam !== 0 || menit !== 0) {
        errorMsg.textContent = "Login hanya bisa dilakukan tepat pukul 00:00!";
        return;
      }

      if (username === "Tian Zafran" && password === "eumm pap") {
        errorMsg.textContent = "";
        alert("Login berhasil! Selamat ulang tahun 🎉");

        const music = document.getElementById("bg-music");
        music.style.display = "block";
        music.play();

        document.querySelector(".login-box").innerHTML = `
          <h2>Selamat Ulang Tahun, Tian! 🎂🎉</h2>
          <p>Semoga harimu penuh kebahagiaan, panjang umur, happy selalu, sayangg Tian 💜</p>
          <p>Gaada PAP Bugilss YAAA 😆😝</p>
        `;
      } else {
        errorMsg.textContent = "Username atau password salah!";
      }
    });

    document.getElementById("togglePassword").addEventListener("click", function () {
      const passInput = document.getElementById("password");
      if (passInput.type === "password") {
        passInput.type = "text";
        this.textContent = "🙈";
      } else {
        passInput.type = "password";
        this.textContent = "👁️";
      }
    });