const checkbox = document.getElementById("modo");
const toggle = document.querySelector(".toggle");

if (localStorage.getItem("modo") === "dark") {
    document.body.classList.add("dark");
    checkbox.checked = true;
}

checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("modo", "dark");
    } else {
        localStorage.setItem("modo", "light");
    }

    toggle.classList.remove("animar");
    void toggle.offsetWidth;
    toggle.classList.add("animar");
});

const intro = document.getElementById("intro");
const introVideo = document.getElementById("introVideo");

if (introVideo) {
    introVideo.addEventListener("ended", () => {
        intro.style.opacity = "0";

        setTimeout(() => {
            intro.style.display = "none";
        }, 500);
    });
}

const skipBtn = document.getElementById("skipBtn");

function fecharIntro() {
    intro.style.opacity = "0";

    setTimeout(() => {
        intro.style.display = "none";
    }, 500);
}

if (introVideo) {
    introVideo.addEventListener("ended", fecharIntro);
}

if (skipBtn) {
    skipBtn.addEventListener("click", fecharIntro);
}