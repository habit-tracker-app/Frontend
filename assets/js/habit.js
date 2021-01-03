const doneButtons = $('.done');
const notDoneButtons = $('.not-done');
const nullButtons = $('.null-status');

// to change staus and create status if not present 
function changeStatusCall(id,status){
    //to get the current date
    let date = new Date().toLocaleDateString();
    $.ajax({
            type:'get',
            url:'/users/changeStatus',
            data:{
                id:id,
                status:status,
                date:date
            },
            success:function(data){
                new Noty({
                    theme: 'relax',
                    text: status,
                    type: 'success',
                    layout: 'topRight',
                    timeout: 1500
                    
                }).show();
            },
            error:function(err){
                console.log(`Error in ajax Call ${status}`);
            }
        });
}

//add event listener for done 
for(button of doneButtons){
    button.addEventListener('click',function(){
        let idDone = this.id.slice(5);
        changeStatusCall(idDone,'done');
    });
}

//adding event listener for not-done
for(button of notDoneButtons){
    button.addEventListener('click',function(){
        let idNotDone = this.id.slice(9);
        changeStatusCall(idNotDone,'not-done');
    });
}

//adding event listener for null
for(button of nullButtons){
    button.addEventListener('click',function(){
        let idNull = this.id.slice(5);
        changeStatusCall(idNull,'null');
    });
}

