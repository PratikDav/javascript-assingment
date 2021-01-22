


// Github Repository Link :  https://github.com/PratikDav/javascript-assingment






//  First Problem : Kilometer To Meter..

    function kilometerToMeter(kilometer){

        if(kilometer >= 0){

            return kilometer * 1000

        }

        return "invalid !" ;
    }

  
    



//  Second Problem : Badget Calculator..

    function badgetCalculator( watch, phone, laptop ) {
            
        if( watch >= 0 && phone >= 0 && laptop >= 0){

            return watch * 50 + phone * 100 + laptop * 500; 
        }

        else{
            return 'invalid !' ;          //if you won't buy a product,put '0' for that section;
        }
    
    }







//  Third Problem : Hotel Cost..

    function hotelCost(costPerTenDays){                        // costPerTenDays means fist ten days cost.

        if(costPerTenDays <= 10 && costPerTenDays > 0){        

            return costPerTenDays * 100 ;                      // per days cost for first ten days.  
            

        }

        else if(costPerTenDays <= 20 && costPerTenDays > 10){

            let secondTenDaysCost = costPerTenDays - 10;
            return secondTenDaysCost * 80 + 1000 ;              // including first ten days cost(1000).
        
        
        }

        else if(costPerTenDays >= 21){

            let extraDaysCost = costPerTenDays - 20;
            return  extraDaysCost * 50 + 1800 ;                 // including first and second ten days cost(1800)

        }

        else{
            return 'invalid !' ;
        }
    }







//  Forth Problem : Mega Friend

    const friendsName = ['Rajiya Sultana','Ritu Chakrabarthee','Mithila Dey','Pratik Dav','Ankur Chakrabarthee','Abrethee Biswash'];

    function megaFriend(friends) {
        let result = '';
        for (let i = 0; i<friends.length; i++){
            let element = friends[i];
            if(element.length > result.length){
                result = friends[i];
            }
            
        }
        
        return result;
    }
    