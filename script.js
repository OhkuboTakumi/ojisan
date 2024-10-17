document.addEventListener('DOMContentLoaded', () => {
    const buttonsContainer = document.getElementById('buttons');
    const resultText = document.getElementById('result');
    const remainingCountText = document.getElementById('remainingCount');
    const restartButton = document.getElementById('restart');

    let totalChoices = 16;
    let gameOverChoice = Math.floor(Math.random() * totalChoices);
    let remainingChoices = Array.from({ length: totalChoices }, (_, i) => i);

    // ボタンを生成し、表示を更新する関数
    function updateDisplay() {
        buttonsContainer.innerHTML = '';
        remainingChoices.forEach((choice) => {
            const imgButton = document.createElement('img');
            imgButton.src = 'ojisan.jpg';  // 固定画像
            imgButton.addEventListener('click', () => {
                if (choice === gameOverChoice) {
                    resultText.innerText = 'ゲームオーバー！';
                    restartButton.style.display = 'inline-block';
                } else {
                    imgButton.style.visibility = 'hidden';
                    remainingChoices = remainingChoices.filter(c => c !== choice);
                    remainingCountText.innerText = `残りのおじさんの数: ${remainingChoices.length}`;
                }
            });
            buttonsContainer.appendChild(imgButton);
        });
        remainingCountText.innerText = `残りのおじさんの数: ${remainingChoices.length}`;
    }

    // 再スタートの処理
    restartButton.addEventListener('click', () => {
        totalChoices = 16;
        gameOverChoice = Math.floor(Math.random() * totalChoices);
        remainingChoices = Array.from({ length: totalChoices }, (_, i) => i);
        resultText.innerText = '';
        remainingCountText.innerText = `残りのおじさんの数: ${remainingChoices.length}`;
        restartButton.style.display = 'none';
        updateDisplay();
    });

    updateDisplay();
});
