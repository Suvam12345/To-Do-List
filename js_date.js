//console.log(module);
//module.exports = "Hello World"; //"Hello World" will be printed to console (though we haven't use 'console.log()') as we have exported it.

exports.getDate = function() { //As we write 'module.exports.getDate'; now 'module.exports' has two things, 'module.exports.getDate' & 'module.exports.getDay' (in code below).
    const today=new Date(); //'Date()' gives today's date.
    //var currentDay=today.getDay(); //If sunday, 'getDay()' gives 0; if monday, gives 1; if saturday, gives 6.
        
    /*if (currentDay === 6 || currentDay === 0) {        
        day = "Weekend";
        //res.send("<h1>Yay it's the weekend!</h1>"); //'send' is treated as the last statement that is to send to browser, so we can't use 'send' more than once. Will be sent to browser as html as '<h1>' is used.
    } else {
        //res.write("<p>It is not the weekend.</p>"); //'write' can be used as many times we want.
        //res.write("<h1>Boo! I have to work!</h1>"); //Will be sent to browser as html as '<h1>' is used.
        //res.send(); //'send' is treated as the last statement that is to send to browser, so we can't use 'send' more than once.
        day = "Weekday";
        //res.sendFile(__dirname + "/html_todolist.html"); //sending "html_todolist.html" file to the browser
    }*/
    
    const options = { //rule in Javascript to get date
        weekday: "long", //as "long" is used, will be printed in long format (text); like 'Monday'
        day: "numeric", //as "numeric" is used, no. will be printed; like '26'
        month: "long" //as "long" is used, will be printed in long format (text); like 'June'
    };

    return today.toLocaleDateString("en-US", options); //'toLocaleDateString' is used to convert 'options' (date) into string. "en-US" is ued for English.    
};

exports.getDay = function() { //As we write 'module.exports.getDay'; now 'module.exports' has two things, 'module.exports.getDate' & 'module.exports.getDay'.
    const today=new Date(); //'Date()' gives today's date.
    //var currentDay=today.getDay(); //If sunday, 'getDay()' gives 0; if monday, gives 1; if saturday, gives 6.
        
    /*if (currentDay === 6 || currentDay === 0) {        
        day = "Weekend";
        //res.send("<h1>Yay it's the weekend!</h1>"); //'send' is treated as the last statement that is to send to browser, so we can't use 'send' more than once. Will be sent to browser as html as '<h1>' is used.
    } else {
        //res.write("<p>It is not the weekend.</p>"); //'write' can be used as many times we want.
        //res.write("<h1>Boo! I have to work!</h1>"); //Will be sent to browser as html as '<h1>' is used.
        //res.send(); //'send' is treated as the last statement that is to send to browser, so we can't use 'send' more than once.
        day = "Weekday";
        //res.sendFile(__dirname + "/html_todolist.html"); //sending "html_todolist.html" file to the browser
    }*/
    
    const options = { //rule in Javascript to get date
        weekday: "long" //as "long" is used, will be printed in long format (text); like 'Monday'        
    };

    return today.toLocaleDateString("en-US", options); //'toLocaleDateString' is used to convert 'options' (date) into string. "en-US" is ued for English.
};