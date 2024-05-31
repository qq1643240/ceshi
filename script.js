document.getElementById('card-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const pattern = document.getElementById('pattern').value;
    const resultsArea = document.getElementById('generated-numbers');

    // 清空之前的结果
    resultsArea.value = '';

    // 生成卡号逻辑（简单示例，实际生成逻辑可能更复杂）
    let generatedNumbers = [];
    for (let i = 0; i < 10; i++) {  // 生成10个示例卡号
        let cardNumber = pattern.replace(/\*/g, () => Math.floor(Math.random() * 10));
        generatedNumbers.push(cardNumber);
    }

    // 显示生成的卡号
    resultsArea.value = generatedNumbers.join('\n');
});
