const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));  // 假设前端文件放在 public 文件夹中

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
