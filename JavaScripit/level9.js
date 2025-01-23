//OBJECT: SPREAD AND REST OPERATORS 
const examDetails= {
    name: 'ram',
    examDate: '12/12/2020',
    highest:{
        subject: 'Math',
        score:99,
        attempts:1
    },
    lowest: {
        subject: 'Science',
        score:14,
        attempts: 3
    }
}


const {subject, ...restothers} = examDetails.lowest





examDetails.lowest.previousAttemptsTotal = 19
console.log(examDetails)
//Q1. log the total scores scored in the lowest subject
//expected output is 42
const {score: lowestScore, attempts:lowestAttempt} = examDetails.lowest
console.log(lowestScore* lowestAttempt)
//Q2.Calculate the total percentage scored, full marks each subject is 100,
// hint scores should be  picked :99 and 14
const {score:highestScore, attempts:highestAttempt}  = examDetails.highest
console.log((lowestScore+highestScore)/200*100)
//Q3. Only extract subject and score from the lowest by using rest operator
//  Output should be:
// {
//     subject: 'Science',
//     score:14,
// }
const {attempts, ...others} = examDetails.lowest
const previousAttempts = {
    science: {
        records: {
            '12/12/2020': 10,
            '12/11/2019':9
        }
    }
}

const {records} = previousAttempts.science
console.log(records['12/12/2020'] + records['12/11/2019'])



//expected output is

// {
//     name: 'ram',
//     examDate: '12/12/2020',
//     highest:{
//         subject: 'Math',
//         score:99,
//         attempts:1
//     },
//     lowest: {
//         subject: 'Science',
//         score:14,
//         attempts: 3,
//         previousAttemptsTotal: 19 
//     }
// }



