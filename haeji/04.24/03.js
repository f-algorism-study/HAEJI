function solution(today, terms, privacies) {
  // 1."" 로 스플릿트 해주기 
  const term = {};
  terms.forEach((v) => {
    const [a, b] = v.split(" ");
    term[a] = parseInt(b);
  });
  
  let answer = [];
  // 2. 같은 달 찾기 
  privacies.forEach((p, idx) => {
    let y, m, d;
    let [date, tm] = p.split(" ");
    let [pYear, pMonth, pDay] = date.split(".").map((v) => parseInt(v));
    y = pYear + parseInt((pMonth + term[tm]) / 12);
    m = (pMonth + term[tm]) % 12;
    d = pDay - 1;
    //2.1 달 구하기 
    if (m === 0) {
      y -= 1;
      m = 12;
    }
    // 2.2 만약 0일이면 전 달로 돌려주기 
    if (d === 0) {
      m -= 1;
      d = 28;
    }
    let result = parseInt(
      y + `${m < 10 ? "0" + m : m}` + `${d < 10 ? "0" + d : d}`
    );
    if (result < parseInt(today.replaceAll(".", ""))) answer.push(idx + 1);
  });
  return answer;
}
