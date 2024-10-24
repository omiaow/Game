const fs = require('fs');

const list = [
    {
        "expected": "0"
    },
    {
        "expected": "460"
    },
    {
        "expected": "920"
    },
    {
        "expected": "1380"
    },
    {
        "expected": "1840"
    },
    {
        "expected": "2300"
    },
    {
        "expected": "2760"
    },
    {
        "expected": "3230"
    },



    {
        "expected": "3690"
    },
    {
        "expected": "4030"
    },
    {
        "expected": "4380"
    },



    {
        "expected": "4840"
    },
    {
        "expected": "5070"
    },



    {
        "expected": "5530"
    },
    {
        "expected": "5760"
    },
    {
        "expected": "5880"
    },
    {
        "expected": "6230"
    },



    {
        "expected": "6690"
    },
    {
        "expected": "6920"
    },
    {
        "expected": "7150"
    },


    
    {
        "expected": "7380"
    },
    {
        "expected": "7730"
    },
    {
        "expected": "8070"
    },


    
    {
        "expected": "8530"
    },
    {
        "expected": "8760"
    },

 
    
    {
        "expected": "9230"
    },
    {
        "expected": "9460"
    },
    {
        "expected": "9570"
    },
    {
        "expected": "9920"
    },


    
    {
        "expected": "10380"
    },
    {
        "expected": "10610"
    },
    {
        "expected": "10840"
    },



    {
        "expected": "11070"
    },
    {
        "expected": "11420"
    },
    {
        "expected": "11760"
    },


    
    {
        "expected": "12230"
    },
    {
        "expected": "12460"
    },


    
    {
        "expected": "12920"
    },
    {
        "expected": "13150"
    },
    {
        "expected": "13260"
    },
    {
        "expected": "13610"
    },


    
    {
        "expected": "14070"
    },
    {
        "expected": "14300"
    },
    {
        "expected": "14530"
    },


    
    {
        "expected": "14760"
    },
    {
        "expected": "15110"
    },
    {
        "expected": "15460"
    },



    {
        "expected": "15920"
    },
    {
        "expected": "16150"
    },


    
    {
        "expected": "16610"
    },
    {
        "expected": "17070"
    },


    {
        "expected": "17530"
    },
    {
        "expected": "17760"
    },
    {
        "expected": "18000"
    },
    {
        "expected": "18230"
    },


    
    {
        "expected": "18460"
    },
    {
        "expected": "18800"
    },
    {
        "expected": "19150"
    },


    
    {
        "expected": "19610"
    },
    {
        "expected": "19840"
    },


    
    {
        "expected": "20300"
    },
    {
        "expected": "20530"
    },
    {
        "expected": "20650"
    },
    {
        "expected": "21000"
    },


    
    {
        "expected": "21460"
    },
    {
        "expected": "21690"
    },
    {
        "expected": "21920"
    },


    
    {
        "expected": "22150"
    },
    {
        "expected": "22500"
    },
    {
        "expected": "22840"
    },


    
    {
        "expected": "23300"
    },
    {
        "expected": "23530"
    },


    
    {
        "expected": "24000"
    },
    {
        "expected": "24460"
    },
    {
        "expected": "24920"
    },
    {
        "expected": "25380"
    },


    
    {
        "expected": "25840"
    },
    {
        "expected": "26190"
    },
    {
        "expected": "26530"
    },

    
    
    {
        "expected": "27000"
    },
    {
        "expected": "27230"
    },


    
    {
        "expected": "27690"
    },
    {
        "expected": "27920"
    },
    {
        "expected": "28030"
    },
    {
        "expected": "28380"
    },


    
    {
        "expected": "28840"
    },
    {
        "expected": "29070"
    },
    {
        "expected": "29300"
    },


    
    {
        "expected": "29530"
    },
    {
        "expected": "29880"
    },
    {
        "expected": "30230"
    },


    
    {
        "expected": "30690"
    },
    {
        "expected": "30920"
    },


    
    {
        "expected": "31380"
    },
    {
        "expected": "31840"
    },
    {
        "expected": "32300"
    },
    {
        "expected": "32760"
    },


    
    {
        "expected": "33230"
    },
    {
        "expected": "33570"
    },
    {
        "expected": "33920"
    },


    
    {
        "expected": "34380"
    },
    {
        "expected": "34610"
    },


    
    {
        "expected": "35070"
    },
    {
        "expected": "35300"
    },
    {
        "expected": "35420"
    },
    {
        "expected": "35760"
    },


    
    {
        "expected": "36230"
    },
    {
        "expected": "36460"
    },
    {
        "expected": "36690"
    },


    
    {
        "expected": "36920"
    },
    {
        "expected": "37260"
    },
    {
        "expected": "37610"
    },



    {
        "expected": "38070"
    },
    {
        "expected": "38300"
    },


    
    {
        "expected": "38760"
    },
    {
        "expected": "39230"
    },
    {
        "expected": "39690"
    },
    {
        "expected": "40150"
    },


    
    {
        "expected": "40610"
    },
    {
        "expected": "40960"
    },
    {
        "expected": "41300"
    },


    
    {
        "expected": "41760"
    },
    {
        "expected": "42000"
    },


    
    {
        "expected": "42460"
    },
    {
        "expected": "42690"
    },
    {
        "expected": "42800"
    },
    {
        "expected": "43150"
    },


    
    {
        "expected": "43610"
    },
    {
        "expected": "43840"
    },


    
    {
        "expected": "44300"
    },
    {
        "expected": "44650"
    },
    {
        "expected": "45000"
    },

    

    {
        "expected": "45460"
    },
    {
        "expected": "45690"
    },


    
    {
        "expected": "46150"
    },
    {
        "expected": "46380"
    },
    {
        "expected": "46500"
    },
    {
        "expected": "46840"
    },


    
    {
        "expected": "47300"
    },
    {
        "expected": "47530"
    },
    {
        "expected": "47760"
    },


    
    {
        "expected": "48000"
    },
    {
        "expected": "48230"
    },
    {
        "expected": "48460"
    },
    {
        "expected": "48690"
    },



    {
        "expected": "48920"
    },
    {
        "expected": "49150"
    },
    {
        "expected": "49380"
    },
    {
        "expected": "49610"
    },


    
    {
        "expected": "49840"
    },
    {
        "expected": "50070"
    },
    {
        "expected": "50190"
    },
    {
        "expected": "50530"
    },


    
    {
        "expected": "51000"
    },
    {
        "expected": "51230"
    },
    {
        "expected": "51460"
    },


    
    {
        "expected": "51690"
    },
    {
        "expected": "52380"
    },
    {
        "expected": "53070"
    },


    
    {
        "expected": "53530"
    },
    {
        "expected": "53760"
    },
    {
        "expected": "53880"
    },
    {
        "expected": "54230"
    },


    
    {
        "expected": "54690"
    },
    {
        "expected": "54920"
    },
    {
        "expected": "55150"
    },


    
    {
        "expected": "55380"
    },
    {
        "expected": "55840"
    },
    {
        "expected": "56300"
    },
    {
        "expected": "56760"
    },


    
    {
        "expected": "57230"
    },
    {
        "expected": "57460"
    },
    {
        "expected": "57570"
    },
    {
        "expected": "57920"
    },


    
    {
        "expected": "58380"
    },
    {
        "expected": "58610"
    },
    {
        "expected": "58840"
    },


    
    {
        "expected": "59070"
    },
    {
        "expected": "59530"
    },
    {
        "expected": "60000"
    },
    {
        "expected": "60460"
    }
]

function assignColumns(beats) {
    beats.forEach((beat, index) => {
        let column;
        let conflict; // Define conflict here

        do {
            column = Math.floor(Math.random() * 3) + 1; // Random column between 1 and 3

            // Check against all previous beats to ensure no column conflict
            conflict = beats.slice(0, index).some((prevBeat) => {
                return (
                    Math.abs(parseInt(beat.expected) - parseInt(prevBeat.expected)) < 400 &&
                    prevBeat.column === column
                );
            });

        } while (conflict); // Repeat until a valid column is found

        beat.column = column; // Assign the valid column
    });
}

assignColumns(list);

// Write the updated beats array to a file
fs.writeFile('updated_beats.json', JSON.stringify(list, null, 2), (err) => {
    if (err) {
        console.error('Error writing to file', err);
    } else {
        console.log('File written successfully');
    }
});