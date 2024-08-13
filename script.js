const rangeValue=document.querySelector(".slider-container .price-slider")
const rangeInputValue=document.querySelectorAll(".range-in input")

// set the price gap 

let priceGap=600;
const priceInputValue=document.querySelectorAll(".price-in input")
for(let i=0; i<priceInputValue.length; i++){
    priceInputValue[i].addEventListener('input',e=>{

        // parse min & max values of range input
        let minParse=parseInt(priceInputValue[0].value)
        let maxParse=parseInt(priceInputValue[1].value)
        let diff= maxParse-minParse

        if(minParse < 0){
            alert("minimum  pricec can`t be less than the 0")
            priceInputValue[0].value=0;
            minParse=0;
        }
        if (maxParse > 10000) {
            alert("maximum price cannot be greater than 10000");
            priceInputValue[1].value = 10000;
            maxParse = 10000;
        }
        if (minParse> maxParse - priceGap) {
            priceInputValue[0].value = maxParse - priceGap;
            minParse = maxParse- priceGap;

            if (minParse < 0) {
                priceInputValue[0].value = 0;
                minParse = 0;
            }
        }
        
        if(diff >= priceGap && maxParse <= rangeInputValue[1].max){
            if(e.target.className === "min-in"){
                rangeInputValue[0].value=minParse;
                let value1=rangeInputValue[0].max;
                rangeValue.style.left=`${(minParse / value1) *100}%`;

            }
            else {
                rangeInputValue[1].value=maxParse
                let value2 =rangeInputValue[1].max;
                rangeValue.style.right=`${100 - (maxParse / value2) * 100}%`
            }
        }
    })

    for(let i=0; i<rangeInputValue.length; i++){
        rangeInputValue[i].addEventListener('input' ,e=>{
            let minVal= parseInt(rangeInputValue[0].value);
            let maxVal = 
                parseInt(rangeInputValue[1].value);
            let diff = maxVal - minVal
            
            if (diff < priceGap) {

                // Check if the input is the min range input
                if (e.target.className === "min-range"){
                    rangeInputValue[0].value = maxVal - priceGap;
                }
                else {
                    rangeInputValue[1].value = minVal + priceGap;
                }
            }
            else {
            
                // Update price inputs and range progress
                priceInputValue[0].value = minVal;
                priceInputValue[1].value = maxVal;
                rangeValue.style.left =
                    `${(minVal / rangeInputValue[0].max) * 100}%`;
                rangeValue.style.right =
                    `${100 - (maxVal / rangeInputValue[1].max) * 100}%`;
            }
          
        })
    }
}
