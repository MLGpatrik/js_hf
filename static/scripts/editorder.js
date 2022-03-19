document.querySelector('button[name="editorder"]').addEventListener("click",()=>{
	itemid=document.querySelector('input[name="order_group"]:checked').value;

	var xhr = new XMLHttpRequest();
	xhr.open("POST", "/modifyorder", true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	
	xhr.send(JSON.stringify({
		item_id: itemid,
    	order_id: document.querySelector('input[name="order_id"]').value,
    	name:document.querySelector('input[name="order_name"]').value,
    	address:document.querySelector('input[name="order_address"]').value
    }));
     xhr.onreadystatechange = function() {
	    if(xhr.status){
	    	location.href = '/'
	    }
	}    
});

document.querySelector('button[name="cancel"]').addEventListener("click",()=>{
	location.href = '/'
});