---
title: 來，同學，Svelte了解一下嗎？
description: 如果你還沒有嘗試過Svelte，不妨先看看他的特點。這是一場無法回頭的體驗。
date: 2019-07-30
auther: James Tan
keywords: svelte, 中文
---

There's already plenty of material in English on the internet, let's add some Chinese here.

有鑒於網路上英文的資料已經很豐富了，我們添加一點中文的内容。

---

<br>
<br>

工具的存在是爲了解決問題，選用工具時，不同的人會有不同的決定，各自有充分的理由。考慮的很多很複雜不是一件壞事。尤其是當你需要為一個大的團隊而負責的時候。

可是對我而言，當我用Svelte時就是爲了寫起來很爽。沒錯，很爽，要起飛的那種。下面具體用React作一個對比，解釋一下爽在哪裏。

<br>
<br>

# 狀態管理

對於還沒有開始了解Svelte的人來說，我認爲先看看如何使用它進行狀態管理，可以直觀的感受到開發效率是如何提升的。以React為例，Redux方案很完善可是很囉嗦。如果你不需要追蹤狀態的歷史記錄，或者監控狀態的變化，或者想把邏輯放在組件以外等等，而只是需要讓數據傳遞到埋的很深的組件中，那你可以用context api去完成。

首先，你需要搞一個context文件出來，因爲要在不同的檔案中導入他
```javascript
import { createContext } from 'react'
const MyContext = createContext()
export default MyContext
```

然後在你有可能會需要用到這個context的最頂層組件中，佈置好Provider，塞入初始值
```javascript
import React, { useState } from 'react'
import MyContext from './myContext'
import SomeComponent from './someComponent'

const Root = ()=>{
    const [number, setNumber] = useState(11)
    return(
        <MyContext.Provider value={{number, setNumber}}>
            <SomeComponent />
        </MyContext.Provider>
    )
}

export default Root
```

等到要用的時候，召喚出Consumer，然後把東西扣出來用
```javascript
import React from 'react'

const SomeComponent = ()=>(
    <MyContext.Consumer>
        {({number})=> (
            <div>
                {number}
            </div>
        )}
    </MyContext.Consumer>
)

export default SomeComponent
```

再試著封裝一個遞減的按鈕，要塞進剛才的Provider裡才能用
```javascript
import React from 'react'

function decrement(number, setNumber){
    setNumber(number-1)
}

const DecrementButton = ()=>(
    <MyContext.Consumer>
        {({number, setNumber})=> (
            // 如果把函數挪到Consumer外面就抓不到number了，得傳出去
            <button onClick={e=>decrement(number,setNumber)}>
                -
            </button>
        )}
    </MyContext.Consumer>
)

export default DecrementButton
```

但context api真的就讓你得到救贖了嗎？確實，和Redux比起來，已經很舒心了，起碼不用從action到reducer到store走一圈。甚至如果複用次數多的話，你還可以專門寫一個HOC來避免一直重複召喚Consumer。到這邊我們都還沒有考慮到如果一個組件中需要兩個不同的context中的數據的情形。現在我們來看看Svelte怎么寫。

先做一個store文件出來，初始化一下。
```javascript
import { writable } from 'svelte/store'
export const number = writable(11)
```

然後，直接導入在任何地方拿來用
```html
<script>
    import { number } from './store'
</script>

<div>{$number}</div>
```

和前面一樣，試著封裝一個遞減的按鈕
```html
<script>
import { number } from './stores';
function decrement() {
    number.update(n => n - 1);
}
</script>

<button on:click={decrement}>
    -
</button>
```

要起飛了嗎？不管你飛不飛，反正我先飛了。

<br>
<br>

# 反應性

如果你也認同上面的例子確實能提高開發的效率和體驗，那你應該有興趣了解更多。讓我們直接再看一些例子。

當你希望數據變化的時候能夠反應在視圖上，React 16.8以前可以通過class component來進行re-render。但是現在有更推薦的做法就是利用hooks。

那Svelte如何在數據變化的時候自動更新視圖呢？
```html
<script>
    let number = 511;
    
    $: double = number * 2;
    $: triple = timesThree(number);
    $: sextuple = timesThree(double); 

    function timesThree(num){
        return num * 3
    }
</script>

<!-- 每當input的值變化，number就會更新，
        其他依賴number的數值也會更新 -->
<input bind:value={number}>
<div>{number} doubled is {double}</div>
<div>{number} tripled is {triple}</div>
<div>{number} sextupled is {sextuple}</div>
```

有沒有初戀的感覺？

<br>
<br>


# 樣式表

和其他框架一樣，你同樣可以使用像Bootstrap之類的工具在Svelte組件中建構樣式，事實上我個人覺得Tailwind CSS也是很適合的選擇。但是他内建的style標簽也值得一提，你可以在組件中的頂層直接加上style標簽，然後在標簽内寫CSS。而且這些樣式是僅限于該組件的，也就是說並不用擔心污染全局，不用擔心污染子組件。你可以放心大膽的對div或者p做害羞的事。

```html
<script>
    let lightsOut;
    $: bgColor = lightsOut ? "#555" : "white";
</script>

<style>
    div {
        background-color: var(--bgColor);
        transition: 3s;
    }
</style>

<div style={`--bgColor: ${bgColor}`}>我只想自己靜靜的一個人呆著</div>
<button on:click={ e=>lightsOut=true }>關燈</button>
```

<br>
<br>

---

我的目的是分享，希望用最短的内容引起你最大的興趣。所以只提了部分特點，其他還有許多實用并且高效的功能沒有介紹。
如果你能看到這邊，我覺得你應該會想去看看官方的互動教學以及文檔。

<div>
    <a href="https://svelte.dev/tutorial/basics" target="_blank">
        互動式教學
    </a>
</div>

<div>
    <a href="https://svelte.dev/docs" target="_blank">
        文檔
    </a>
</div>


<br>
<br>

<p align="right">
    by James T.
</p>