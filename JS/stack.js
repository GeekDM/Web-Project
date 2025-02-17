let containers = document.querySelectorAll('.stack_container');

containers.forEach(container => {
    let overlay = container.querySelector('.overlay'); // 각 컨테이너의 overlay 찾기

    // 마우스 이동 시 컨테이너 회전
    container.addEventListener('mousemove', function(e) {
        let x = e.offsetX;
        let y = e.offsetY;
        
        let rotateX = (1 / 7.5) * y - 20;
        let rotateY = (-1 / 7.5) * x + 20;

        container.style.transform = `perspective(300px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        // 오버레이 움직이기 (배경 위치 변경)
        overlay.style.backgroundPosition = `${x/5 + y/5}%`;
        overlay.style.filter = "opacity(0.8)"; // 보이게 설정
    });

    // 마우스가 나갔을 때 초기화
    container.addEventListener('mouseout', function() {
        overlay.style.filter = "opacity(0)"; // 투명하게 만들기
        container.style.transform = "perspective(300px) rotateX(0deg) rotateY(0deg)";
    });
});
