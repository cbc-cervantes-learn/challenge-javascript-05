/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
    const lines = [];
    for(let index = 0; index <= lineNumber ; index++) {
        let line = [];
        if (index === 0){
            line.push(1);
        }else{
            let numbers = 0;
            while (numbers < index + 1){
                const prev_line = lines[index - 1];
                let left_number = prev_line[numbers - 1] === undefined ? 0 : prev_line[numbers - 1];
                let right_number = prev_line[numbers] === undefined ? 0 : prev_line[numbers];
                let number = left_number + right_number;
                line.push(number);
                numbers ++;
            }
        }
        lines.push(line);
    }
    return lines[lineNumber];
};

module.exports = pascalTriangle;
