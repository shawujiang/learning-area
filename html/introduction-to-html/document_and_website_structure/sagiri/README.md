# HTML布局元素细节
从总体详细的理解HMTL的元素是不错的——随着你web开发经验的逐渐积累，你将会逐渐理解HTML元素。你可以通过[HTML元素参考](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)找到更多细节。现在，你需要理解这些主要的元素定义：  
* `<main>` 展现了页面内容的独特性。只可以在每一个页面上使用一次&lt;main&gt;，直接把它放在`<body>`中。在理解情况下，不应该把它嵌套进其他元素中
* `<aricle>`闭合一块与自身相关的内容，这块内容能够解释它自身而不是页面上其他的内容（例如一篇文章的博客）
* `<section>`近似于&lt;article&gt;，但是它能更多的是伴随着由一个单独功能构成的页面（例如为每一部分（section）开头；也要注意的是你可以把不同的&lt;article&gt;分到不同的&lt;section&gt;中，或者把不同的&le;section&gt;分到不同的&lt;article&gt;中，这要取决于内容。
* `<aside>`包含的内容并不与主要内容由直接的联系，但是它可以提供额外的不直接有联系的信息（术语表条目，作者简介，相关链接等等）。
* `header`展现了一系列的介绍内容。如果它是`<body>`的子元素，它就定义了网站的全局页眉。但是如果它是`<article>`或者`<section>`的子元素，它就定义了这些部分内容的特定页眉（不要把这些与`titles and heading`混淆）。
* `<nav>`包含了一面主要的导航功能。二级链接等，不会进入导航功能部分。
* `<footer>`包含了页面的页脚部分。
---
## 示例
```
<!DOCTYPE html>
<html lang="zh-CN">
<html>
  <head>
    <meta charset="utf-8">
    <title>My page title</title>
  </head>
  <body>
    <header>
      <h1>Page Title</h1>
    </header>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">Home</a></li>
      </ul>
    </nav>

    <main>
      <aricle>
        <h2>title</h2>
        <p>Centent ...<p>
      </aricle>
      <aside>
        
      </aside>
    </main>

    <footer>
      <p>&copy;Sagiri</p>
    </footer>
```
