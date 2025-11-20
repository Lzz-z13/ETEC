let slideIndex = 1;
      let autoMode = false;
      let autoTimer = null;

      const slides = document.getElementsByClassName("mySlides"); // DOM dos slides
      const pontos = document.getElementsByClassName("dot");
      const descriptions = [
        "Manutenção de Hardware: diagnóstico e substituição de peças com garantia.",
        "Venda de Equipamentos: laptops e desktops com assistência técnica.",
        "Serviços Gerenciados: suporte e planos para empresas.",
      ];

      function showSlides(n) {
        const total = slides.length;
        if (n > total) slideIndex = 1;
        if (n < 1) slideIndex = total;

        for (let i = 0; i < total; i++) {
          slides[i].style.display = "none";
          if (pontos[i]) pontos[i].classList.remove("active");
        }

        slides[slideIndex - 1].style.display = "block";
        if (pontos[slideIndex - 1])
          pontos[slideIndex - 1].classList.add("active");

        // atualiza descrição
        const descEl = document.getElementById("slideDesc");
        if (descEl) descEl.textContent = descriptions[slideIndex - 1] || "";
      }

      function plusSlides(n) {
        slideIndex += n;
        showSlides(slideIndex);
        resetAutoTimerIfRunning();
      }

      function currentSlide(n) {
        slideIndex = n;
        showSlides(slideIndex);
        resetAutoTimerIfRunning();
      }

      function toggleAuto() {
        autoMode = !autoMode;
        document.getElementById("autoIcon").className = autoMode
          ? "fa-solid fa-pause"
          : "fa-solid fa-play";
        document
          .getElementById("autoToggle")
          .setAttribute("aria-pressed", autoMode);
        if (autoMode) startAuto();
        else stopAuto();
      }

      function startAuto() {
        stopAuto();
        autoTimer = setInterval(function () {
          slideIndex++;
          showSlides(slideIndex);
        }, 4500);
      }

      function stopAuto() {
        if (autoTimer) {
          clearInterval(autoTimer);
          autoTimer = null;
        }
      }

      function resetAutoTimerIfRunning() {
        if (autoMode) {
          stopAuto();
          startAuto();
        }
      }

      // teclado: setas esquerda/direita
      document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") plusSlides(-1);
        if (e.key === "ArrowRight") plusSlides(1);
      });

      // iniciar
      showSlides(slideIndex);