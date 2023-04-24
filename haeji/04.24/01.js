//귤 고르기 
function solution(k, tangerine) {
    const obj = {}
    // 1. 귤의 크기 별 개수르 구한다. 
    tangerine.forEach((el) => {
        obj[el] =  ++obj[el] || 1
    })
    
    // 2. 귤을 크기 별로 선언한당
    const values = Object.values(obj).sort((a, b) => b - a)
      
    let count = 0
    for (let i=0; i<values.length; i++) {
        count += values[i]
        // 담으려는 귤의 개수와 같거나 커졌을때 반복분을 멈춘다. 
        if (count >= k) {
            return i ? i + 1 : 1     
        }
    }   
}
