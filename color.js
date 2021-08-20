//Arrays

let colors = [];
colors [0] ='yellow'
colors [1] ='blue'
colors [2] = 'red'
colors [3] = 'orange'


//While methode
console.log("while methode:")
var w = 0;
while (w < 4){
    console.log(colors[`${w}`])
    w++
}

//For methode
console.log("")
console.log("for methode:")


for (let i = 0; i < colors.length; i++) {
    console.log(colors[`${i}`])
}
  
//forEach methode
colors.forEach(element => console.log(element));

/*
1.for loop: 3. While loop: 5
2. forEach:1
3. for loop vind ik het makkelijkste leesbaar, alle relevante gegevens staan op een rij, in mijn geval rij 23
4. Nee*/