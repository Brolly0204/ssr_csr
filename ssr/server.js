const express = require('express')

const app = express()

app.get('/ssr', (req, res) => {
  res.send(`
    <html>
      <head>
        <meta charset='utf-8'>
        <title>SSR 服务端渲染</title>
      </head>
      <body>
        <h3>SSR 服务端渲染</h3>
        <p>SSR意为 Server Side Rendering（服务端渲染）,目的是为了解决单页面应用的SEO的问题。</p>
      </body>
    </html>
  `)
})

app.listen(7200)
