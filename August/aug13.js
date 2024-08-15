// today on git

// create a code to calculate and tell the users their scores
// 80-100 A
//70 -79, B
// 60-69, C
// 50-59, D
// 0-49, F






function checkScore() {

    let inputScore = document.getElementById('inputScore').value

    if (inputScore >= 80 && inputScore <= 100) {
        alert(`${inputScore}  grade is A`)
    } else  if (inputScore >=70 && inputScore <=79){
        alert(`${inputScore} grade is B`)
    }

    else if (inputScore >= 60 && inputScore <= 69){
        alert(`${inputScore} grade is C`)
    }
    else if (inputScore >= 50 && inputScore <= 59){
        alert(`${inputScore} grade is D`)
    }
    else if (inputScore >= 0 && inputScore <= 49){
        alert(`${inputScore} grade is F`)
    }
    else {
        alert('Invalid score input')
    }
    
}


//ASSIGNMENT 
// READ ON ARRAY METHODS