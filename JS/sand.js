document.addEventListener("DOMContentLoaded", function () {
    const ground = document.querySelector('.ground');
    const dotCount = 5000; // 생성할 점의 개수

    for (let i = 0; i < dotCount; i++) {
        let dot = document.createElement('div');
        dot.classList.add('dot');

        // 랜덤 위치 설정
        let x = Math.random() * 100; // 0 ~ 100% 사이
        let y = Math.random() * 100; // 0 ~ 100% 사이

        dot.style.left = `${x}%`;
        dot.style.top = `${y}%`;

        // 랜덤 색상 설정
        let colors = ["red", "blue", "yellow", "green", "purple", "orange", "pink"];
        dot.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        ground.appendChild(dot);
    }
});
