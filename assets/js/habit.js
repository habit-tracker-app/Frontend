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
