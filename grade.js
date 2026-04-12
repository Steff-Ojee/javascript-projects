function checkGrade(score) {
    if (score >= 70) {
        console.log(`${score}: Excellent`)
    } else if (score >= 50) {
        console.log(`${score}: You passed!`)
    } else {
        console.log(`${score}: You failed!`)
    }
}
checkGrade (90)
checkGrade (55)
checkGrade (30)
checkGrade (70)
checkGrade (49)
checkGrade (12)