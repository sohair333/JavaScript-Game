const lastDateElement=document.getElementById('lastEnterDate');

function getLastGameDate(userName)
{
    ///////error
    fetch(`https://node-monge-iti-project.herokuapp.com/games/${userName}`)
    .then(response=>response.json())
    .then(data=>{
        console.log('sucess',data);
        
        if(data.date)
        {
            let objectdate=new Date(data.date);
            let format=objectdate.toLocaleString("en-Us");
            console.log('loool');
            lastDateElement.innerHTML=format;
        }
        else{
            lastDateElement.innerHTML='you are Welcome';
        }
    })
    .catch((error)=>{

        console.log('error');
        lastDateElement.innerHTML='Error';

    });
 
}

function saveLastGame(userName)
{
    console.log("Save", userName);
        let data={
            name:userName
        };
        fetch(`https://node-monge-iti-project.herokuapp.com/games`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data),
        })
        .then(response=>response.json())
        .then(data=>{
            console.log('sucess',data);
            if(data.date)
            {
                lastDateElement.innerHTML=data.date;
            }
            else{
                lastDateElement.innerHTML='this is the first time';
            }
        })
        .catch((error)=>{
    
            console.log('error');
            lastDateElement.innerHTML='Error';
    
        });

}