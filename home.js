function get_inner_text(id){
    let balance = parseInt(document.getElementById(id).innerText)

    return balance
}

function set_heart_balance(val){
    let new_heart = document.getElementById("heart_balance")
    new_heart.innerText = val
}

// heart count
function heart_count_func(id){
    document.getElementById(id).addEventListener("click",function(e){
    e.preventDefault()

    let heart_balance = get_inner_text("heart_balance")
    let new_heart_balance = heart_balance + 1

    set_heart_balance(new_heart_balance)
    })
}

heart_count_func("heart_national")
heart_count_func("heart_police")
heart_count_func("heart_fire")
heart_count_func("heart_hospital")
heart_count_func("heart_child")
heart_count_func("heart_anticur")
heart_count_func("heart_electricity")
heart_count_func("heart_brac")
heart_count_func("heart_railway")

