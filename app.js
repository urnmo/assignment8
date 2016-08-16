function loadApplication() {
    console.log('hello');
    let totes = document.getElementById('totwindow');
    let leftid = null;
    let rightid = null;
    let operator = null;
    

    //this function updates the textbox in the UI


    function updateDisplay() {
        if (leftid === null) {
            totes.value = "";
        } else if (operator === null) {
            totes.value = leftid;
        } else if (rightid === null) {
            totes.value = leftid + operator;
        } else {
            totes.value = leftid + operator + rightid;
        }
    }



    // Set event listeners, each listening for 
    // a click on a different button.
    // document.getElementById() gets a single element using
    //      its id
    //value1 is an object that corresponds to the one button in the html

    let value1 = document.getElementById('button1');
    value1.addEventListener('click', function () {
        if (leftid > null) {
            rightid = 1;
        }
        else leftid = 1;
        console.log('pressed one');

        //when button1 is pushed the value of 
        updateDisplay();
    });

    let value2 = document.getElementById('button2');
    value2.addEventListener('click', function () {
        if (leftid > null) {
            rightid = 2;
        }
        else leftid = 2;
        console.log('pressed two')
        updateDisplay();
    });

    let value3 = document.getElementById('button3');
    value3.addEventListener('click', function () {
        if (leftid > null) {
            rightid = 3;
        }
        else leftid = 3;
        console.log('pressed two')
        updateDisplay();
    });




    let value4 = document.getElementById('button4');
    value4.addEventListener('click', function () {
        if (leftid > null) {
            rightid = 4;
        }
        else leftid = 4;
        console.log('pressed four')
        updateDisplay();
    });

     let value5 = document.getElementById('button5');
	value5.addEventListener('click', function () {
        if (leftid > null) {
            rightid = 5;
        }
        else leftid = 5;
        console.log('pressed five')
        updateDisplay();
        });


        let value6 = document.getElementById('button6');
        value6.addEventListener('click', function () {
        if (leftid > null) {
            rightid = 6;
        }
        else leftid = 6;
        console.log('pressed six')
        updateDisplay();
        });


        let value7 = document.getElementById('button7');
        value7.addEventListener('click', function () {
        if (leftid > null) {
            rightid = 7;
        }
        else leftid = 7;
        console.log('pressed seven')
        updateDisplay();
        });

        let value8 = document.getElementById('button8');
        value8.addEventListener('click', function () {
        if (leftid > null) {
            rightid = 8;
        }
        else leftid = 8;
        console.log('pressed eight')
        updateDisplay();
        });

        let value9 = document.getElementById('button9');
        value9.addEventListener('click', function () {
        if (leftid > null) {
            rightid = 9;
        }
        else leftid = 9;
        console.log('pressed nine')
        updateDisplay();
        });

        let value0 = document.getElementById('button0');
        value0.addEventListener('click', function () {
        if (leftid > null) {
            rightid = 0;
        }
        else leftid = 0;
        console.log('pressed zero')
        updateDisplay();
        });

        let valuetotal = document.getElementById('buttontotal');
        valuetotal.addEventListener('click', function () {
            if (leftid !== null && operator !== null && rightid !== null) {
                if (operator === "+") {
                    totes.value = leftid + rightid;
                } else if (operator === "-") {
                    totes.value = leftid - rightid;
                } else if (operator === "*") {
                    totes.value = leftid * rightid;
                } else if (operator === "/") {
                    totes.value = leftid / rightid;
                }
            }

            console.log('pressed equals');

        });

// values seem to be being overridden by the first function plus

        let valueplus = document.getElementById('button+');
        valueplus.addEventListener('click', function () {
            if (leftid === null) {
                operator = null;
            }
            else operator = "+";
            console.log('pressed plus');
            updateDisplay();
        });


        let valueminus = document.getElementById('button-');
        valueminus.addEventListener('click', function () {
        if (leftid === null) {
            operator = null;
        }
        else operator = "-";
        console.log('pressed minus')
        updateDisplay();
        });

        let valuemulti = document.getElementById('button*');
        valuemulti.addEventListener('click', function () {
        if (leftid === null) {
            operator = null;
        }
        else operator = "*";
        console.log('pressed multiply')
        updateDisplay();
        });

        let valuediv = document.getElementById('button/');
        valuediv.addEventListener('click', function () {
        if (leftid === null) {
            operator = null;
        }
        else operator = "/";
        console.log('pressed divide')
        updateDisplay();
        });

        // let valuedec = document.getElementById('buttondec');
        // valuedec.addEventListener('click', function () {
        // if (leftid === null) {
        //     operator = null;
        // }
        // else operator = "-";
        // console.log('pressed minus')
        // updateDisplay();
        // });
        

//had to set each operator to null individually because other methods either did not work or the last value of operator would populate

        let valuec = document.getElementById('buttonc');
        valuec.addEventListener('click', function() {
            if (totes.value > 0) {
                totes.value = 0;
            }if (leftid > null) {
                leftid = null;
            }if (rightid > null) {
                rightid = null;
            }if (operator === "+") {
                operator = null;
            }if (operator === "-") {
                operator = null;
            }if (operator === "*") {
                operator = null;
            }if (operator === "/") {
                operator = null;
            }

        console.log('pressed clear')

        } );



    }







window.addEventListener('load', loadApplication);