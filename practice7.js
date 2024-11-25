function countvowel() {

    let str = "rishi";

    count= 0;


    for (const  i  of str) {
     
        if (i === "a" || i === "e" || i === "i" || i ==="o" || i === "u") {

            count++

          
        }
    }


    console.log(count);

}

countvowel();
