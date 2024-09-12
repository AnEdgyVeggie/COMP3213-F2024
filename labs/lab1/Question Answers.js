    const capitalizeSentence = (sentence) => {
        if (sentence.length === 0 || sentence === null) return      // nullcheck (Safety first!)
        let sentenceArray = sentence.split(" ")                     // converts word to array. unnecessary, but avoids looking for spaces with for loop
        let newSentence = ""                                        // this will be the returned value
        sentenceArray.forEach(word => {                             // cycle through each word
            const capital = word[0].toUpperCase()                   // takes the first letter and capitalizes it
            const fullWord = capital + word.slice(1, word.length)   // removes the first letter from the word, replaces it with the capital
            newSentence += fullWord + " ";                          // adds to the return output
        });
        newSentence.trim()                                          // trims any additional whitespace
        return newSentence
    }

    const findTheLargestInteger = (integerArray) => {
        if (integerArray.length === 0 || integerArray === null) return  // nullcheck
        let largestInt = integerArray[0]                                // sets largest number as first in the array
        integerArray.forEach(integer => {                               // cycle through all numbers in the array
            if (integer > largestInt) largestInt = integer              // in the number is bigger than the first largest, make it the largest
        })
        return largestInt                                               // return the largest
    }

    const moveEndCharactersToLeft = (word) => {
        if (word.length <= 3) return word                               // if word is fewer than 3, return it, no change can be made
        const end = word.slice(word.length-3, word.length)              // the end of the word is 3 from the end to the end
        const start = word.slice(0, word.length-3)                      // the front of the word is 0 to the 3rd from the end
        return end + start                                              // reverse the end and start, return them

    }

    const angleType = (angle) => {                                      
        if (isNaN(angle)) return "NOT AN ANGLE"                         // check that the angle is actually a number
        if (angle === 180) return "Straight Angle"                      // check for each of the angles, return result
        if (angle < 90) return "Acute Angle"
        if (angle === 90) return "Right Angle"
        if (angle < 180) return "Obtuse Angle"
        
    }

    console.log("############################")
    console.log("Capitalize Sentences")
    console.log("IN: the quick brown fox  | EXPECTED: The Quick Brown Fox |  OUT: " + capitalizeSentence("the quick brown fox"))
    console.log()
    console.log("############################")
    console.log("Largest Integer")
    console.log("IN: [1, 0, 1]        | EXPECTED: 1    |  OUT: " + findTheLargestInteger([1, 0, 1]))
    console.log("IN: [0, -10, -20]    | EXPECTED: 0    |  OUT: " + findTheLargestInteger([0, -10, -20]))
    console.log("IN: [1000, 510, 440] | EXPECTED: 1000 |  OUT: " + findTheLargestInteger([1000, 510, 440]))
    console.log()
    console.log("############################")
    console.log("Move Characters To Beginning")
    console.log("IN: Python     | EXPECTED: honPyt     |  OUT: " + moveEndCharactersToLeft("Python"))
    console.log("IN: JavaScript | EXPECTED: iptJavaScr |  OUT: " + moveEndCharactersToLeft("JavaScript"))
    console.log("IN: Hi         | EXPECTED: Hi         |  OUT: " + moveEndCharactersToLeft("Hi"))
    console.log()
    console.log("############################")
    console.log("Get Angles")
    console.log("IN: 47  | EXPECTED: Acute Angle    |  OUT: " + angleType(47))
    console.log("IN: 90  | EXPECTED: Right Angle    |  OUT: " + angleType(90))
    console.log("IN: 145 | EXPECTED: Obtuse Angle   |  OUT: " + angleType(145))
    console.log("IN: 180 | EXPECTED: Straight Angle |  OUT: " + angleType(180))

