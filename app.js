const handleBlogRoute = require('./src/routes/blog')

const serveHandler = (req, res) => {
    // 数据返回的数据格式是字符串，字符串是json类型
    res.setHeader('Content-Type', 'application/json');

    const blogData = handleBlogRoute(req, res);
    if (blogData) {
        res.end(
            JSON.stringify(blogData)
        );
        return;
    }

}

module.exports = serveHandler;