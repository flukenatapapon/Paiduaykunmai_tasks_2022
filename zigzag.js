
const zigzag = (str, n) => {
  let row = new Array(n);
  let len = str.split('').length;
  let space = '\u0020';
  let down = true
  let up = false
  let count_up_round = 0
  let count_down_round = 0
  let last_space_count = 0
  let row_now = 0
  let space_count = 0
  let result = ''
  
  for (let i = 0; i < n; i++) {
    row[i] = '';
  }

  for (let i = 0; i < len; i++) {
    row[row_now] += space.repeat(space_count) +''+ str.split('')[i];
    if(row_now+1 == n) {
        space_count = 0;
        row_now = n-1;
        count_down_round++;
        down = false
        up = true
    }

    if(row_now == 0) {
        last_space_count = space_count;
        space_count = 0;
        count_up_round++;
        down = true
        up = false
    }

    if(down) {
        if(count_down_round >= 1 && space_count != 0) {
            space_count+=2;
        }else {
            space_count++; 
        }
        row_now++;
    } else {
        if(space_count == 0) {
            space_count += 1;
        } else {
            space_count += 2;
        }
        
        row_now--;
    }

  }

  for(let i=0; i< n; i++) {
    result += row[i] + '\n'
  }

  return result;
};

console.log(zigzag('interdisciplinary', 4));
console.log("-------------------------------");
console.log(zigzag('unitedstatesofamerica', 3));
console.log("-------------------------------");
console.log(zigzag('krungthepmahanakorn', 5));
console.log("-------------------------------");
