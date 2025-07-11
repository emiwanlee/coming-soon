 const launchDate = new Date("2025-08-01T00:00:00"); // SET your launch date/time

    function updateCountdown() {
      const now = new Date();
      const diff = launchDate - now;

      if (diff <= 0) {
        document.getElementById("countdown").innerText = "🚀 We Are Live!";
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);

      document.getElementById("countdown").innerText =
        `Launching In: ${days}d ${hours}h ${mins}m ${secs}s`;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();