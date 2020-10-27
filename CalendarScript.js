function search(){
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    document.getElementsByClassName("calendar")[0].innerHTML = printCalendar(day,month,year);
}
function printCalendar(day,month,year){

}
function validDate(type){
    switch(type){
        case 1:
            let day = document.getElementById("day").value;
            if(day.length<=2){
                if(parseInt(day)==day){
                    if(day<1){
                        document.getElementById("day").value =1;
                    }else if(day>31){
                        document.getElementById("day").value =31;
                    }
                }else{
                    document.getElementById("day").value = day.substr(0,day.length-1);
                }
            }else{
                document.getElementById("day").value = day.substr(0,day.length-1);
            }
            break;
        case 2:
            let month = document.getElementById("month").value;
            if(month.length<=2){
                if(parseInt(month)==month){
                    if(month<1){
                        document.getElementById("month").value =1;
                    }else if(month>12){
                        document.getElementById("month").value =12;
                    }
                }else{
                    document.getElementById("month").value = month.substr(0,month.length-1);
                }
            }else{
                document.getElementById("month").value = month.substr(0,month.length-1);
            }
            break;
        case 3:
            alert("any")
            break;
    }
}