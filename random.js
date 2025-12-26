// 随机图片重定向逻辑
window.addEventListener('DOMContentLoaded', () => {
    fetch('images.txt')
        .then(response => {
            if (!response.ok) throw new Error('无法加载图片列表');
            return response.text();
        })
        .then(text => {
            // 解析图片列表
            const lines = text.split('\n')
                .map(line => line.trim())
                .filter(line => line && !line.startsWith('#'));
            
            if (lines.length === 0) {
                throw new Error('图片列表为空');
            }
            
            // 随机选择一张图片
            const randomIndex = Math.floor(Math.random() * lines.length);
            const imageUrl = lines[randomIndex];
            
            // 重定向到图片
            window.location.replace(imageUrl);
        })
        .catch(error => {
            console.error('错误:', error);
            document.body.innerHTML = `
                <div style="text-align:center; padding:50px;">
                    <h2>随机图片API暂时不可用</h2>
                    <p>${error.message}</p>
                    <p><a href="/">刷新重试</a></p>
                </div>
            `;
        });
});