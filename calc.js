//display button pushes and clear error for new calculations
function dis(val) 
    { 
        if (document.getElementById("result").value === "ERROR")
        {
            clr();
        }
        document.getElementById("result").value+=val
    };
//function for solving equations entered  and catching invalid entries    
function solve() 
    { 
        let x = document.getElementById("result").value 
        try {
            let y = eval(x)
            document.getElementById("result").value = y
        }
        catch{
            document.getElementById("result").value = "ERROR"
        }      
    };
//function for clearing entry    
function clr()
{ 
    document.getElementById("result").value = ""
};