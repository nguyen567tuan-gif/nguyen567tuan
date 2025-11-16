const divers = [
    {el: document.getElementById("diver1"), dx: 0, dy: 1, speed: 1},
    {el: document.getElementById("diver2"), dx: 0, dy: -1, speed: 2},
    {el: document.getElementById("diver3"), dx: 0, dy: 1, speed: 1.5}
];

const fish = [
    {el: document.getElementById("shark"), dx: 2, dy: 0, speed: 2},
    {el: document.getElementById("turtle"), dx: 1, dy: 0, speed: 1},
    {el: document.getElementById("goldFishSchool"), dx: 2.5, dy: 0, speed: 2},
    {el: document.getElementById("faintSchool"), dx: 1.5, dy: 0, speed: 1.5}
];

const characters = [...divers, ...fish];

characters.forEach(c => {
    c.x = Math.random() * (window.innerWidth - 100);
    c.y = Math.random() * (window.innerHeight - 100);
    c.el.style.left = c.x + "px";
    c.el.style.top = c.y + "px";
});


function move() {
    characters.forEach(c => {
        // cập nhật vị trí
        c.x += c.dx * c.speed;
        c.y += c.dy * c.speed;

        
        if (c.x <= 0 || c.x >= window.innerWidth - c.el.width) {
            c.dx *= -1;
            c.el.style.transform = `scaleX(${c.dx > 0 ? 1 : -1})`;
        }

        
        if (c.y <= 0 || c.y >= window.innerHeight - c.el.height) {
            c.dy *= -1;
        }

        c.el.style.left = c.x + "px";
        c.el.style.top = c.y + "px";
    });

    requestAnimationFrame(move);
}


move();
