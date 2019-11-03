let n 
initialization() //初始化
setInterval(() => { //定时器
    makeLeave(getImage(n))
        .one('transitionend', (sgs) => {
            makeEnter($(sgs.currentTarget))
        })
    makeCurrent(getImage(n+1))
    n++
}, 3000)



//--------------------------封装函数----------------------------------



function initialization() { //初始化
    n = 1
    getImage(n).addClass('current').siblings().addClass('enter')
}

function setNumber(n) {
    if (n > 5) {
        n = n % 5
        if (n === 0) {
            n = 5
        }
    } // n= 1,2,3 n+1=1,2,3
    return n
}
function getImage(n) {
    return $(`.images>img:nth-child(${setNumber(n)})`)
}
function makeCurrent($node) { //创造current状态
    return $node.addClass('current').removeClass('enter leave')
}
function makeEnter($node) { //创造enter状态
    return $node.addClass('enter').removeClass('leave current')
}
function makeLeave($node) { //创造leave状态，因为还要使用它的one方法，所以需要返回jQuery节点
    return $node.addClass('leave').removeClass('lenter current')
}