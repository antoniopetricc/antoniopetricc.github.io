document.addEventListener('DOMContentLoaded', () => {
    const technologies = [
        { id: "flutter", displayName: "Flutter" },
        { id: "dart", displayName: "Dart" },
        { id: "postgresql", displayName: "PostgreSQL" },
        { id: "go", displayName: "Go" },
        { id: "gofiber", displayName: "GoFiber" },
        { id: "nginx", displayName: "Nginx" },
        { id: "brave", displayName: "Brave" },
        { id: "docker", displayName: "Docker" },
        { id: "redis", displayName: "Redis" },
        { id: "canva", displayName: "Canva" },
        { id: "firebase", displayName: "Firebase" },
        { id: "appstore", displayName: "App Store" },
        { id: "googleplay", displayName: "Google Play" },
        { id: "illustrator", displayName: "Illustrator" },
        { id: "git", displayName: "Git" },
        { id: "mysql", displayName: "MySQL" },
    ];

    const logoWall = document.getElementById('logo-wall');
    if (!logoWall) return;

    const createLogoItem = (tech) => {
        const div = document.createElement('div');
        div.className = 'logo-item';

        const img = document.createElement('img');
        img.src = `assets/${tech.id}.svg`;
        img.alt = tech.displayName;
        img.width = 30;
        img.height = 30;
        img.loading = "lazy";

        const span = document.createElement('span');
        span.textContent = tech.displayName;

        div.appendChild(img);
        div.appendChild(span);
        return div;
    };


    technologies.forEach(tech => logoWall.appendChild(createLogoItem(tech)));

    const logos = Array.from(logoWall.children);
    logos.forEach(logo => logoWall.appendChild(logo.cloneNode(true)));

    const setWidth = logos.reduce((total, logo) => {
        const style = getComputedStyle(logo);
        const marginRight = parseFloat(style.marginRight) || 0;
        return total + logo.offsetWidth + marginRight;
    }, 0);

    let x = 0;
    const speed = 1.2;

    function animate() {
        x -= speed;
        if (x <= -setWidth) x = 0;
        logoWall.style.transform = `translateX(${x}px)`;
        requestAnimationFrame(animate);
    }

    animate();
});
