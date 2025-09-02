function get_inner_text(id){
    let balance = parseInt(document.getElementById(id).innerText)

    return balance
}

function set_heart_balance(val){
    let new_heart = document.getElementById("heart_balance")
    new_heart.innerText = val
}

function set_coin_balance(val){
    let new_coin_bal = document.getElementById("coin_balance")
    new_coin_bal.innerText = val
}

function set_copy_counter(val){
    let new_copy_count = document.getElementById("copy_count")
    new_copy_count.innerText = val
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

// call btn
function coin_count_func(btn_id, name, phn_num){
    document.getElementById(btn_id).addEventListener("click", function(e){
    e.preventDefault()
    let coin_balance = get_inner_text("coin_balance")
    let service_name = document.getElementById(name).innerText
    let phone_number = document.getElementById(phn_num).innerText
    if(coin_balance < 20){
        alert("Insufficient balance!!!!")
        return;
    }
    else{
        let new_coin_balance = coin_balance - 20
        set_coin_balance(new_coin_balance)
        alert("Calling " + service_name + " " + phone_number + ".")
    }

    })
}

coin_count_func("call_btn_national", "name_national", "num_national")
coin_count_func("call_btn_police", "name_police", "num_police")
coin_count_func("call_btn_fire", "name_fire", "num_fire")
coin_count_func("call_btn_hospital", "name_hospital", "num_hospital")
coin_count_func("call_btn_child", "name_child", "num_child")
coin_count_func("call_btn_anticur", "name_anticur", "num_anticur")
coin_count_func("call_btn_electricity", "name_electricity", "num_electricity")
coin_count_func("call_btn_brac", "name_brac", "num_brac")
coin_count_func("call_btn_railway", "name_railway", "num_railway")

// copy counter
function copy_counter_func(id, mbl_num){
    document.getElementById(id).addEventListener("click", function(e){
        e.preventDefault()
        let copy_balance = get_inner_text("copy_count")
        let hotline = document.getElementById(mbl_num).innerText
        let new_copy_balance = copy_balance + 1
        set_copy_counter(new_copy_balance)
        navigator.clipboard.writeText(hotline) // copying the number to the clipboard
        alert("Number copied.")
    })
}

copy_counter_func("copy_btn_national", "num_national")
copy_counter_func("copy_btn_police", "num_police")
copy_counter_func("copy_btn_fire", "num_fire")
copy_counter_func("copy_btn_hospital", "num_hospital")
copy_counter_func("copy_btn_child", "num_child")
copy_counter_func("copy_btn_anticur", "num_anticur")
copy_counter_func("copy_btn_electricity", "num_electricity")
copy_counter_func("copy_btn_brac", "num_brac")
copy_counter_func("copy_btn_railway", "num_railway")