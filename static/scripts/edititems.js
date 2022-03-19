document.querySelector('button[name="additem"]').addEventListener("click",()=>{

	var xhr = new XMLHttpRequest();
	xhr.open("POST", "/additem", true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	
	xhr.send(JSON.stringify({
    	item_name:document.querySelector('input[name="item_name"]').value,
    	item_size:document.querySelector('input[name="item_size"]').value,
    	item_price: document.querySelector('input[name="item_price"]').value
    }));
     xhr.onreadystatechange = function() {
	    if(xhr.status){
	    	location.href = '/'
	    }
	}    
});

document.querySelector('button[name="changeitem"]').addEventListener("click",()=>{
	itemid=document.querySelector('input[name="order_group"]:checked').value;
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "/changeitem", true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	
	xhr.send(JSON.stringify({
		item_id:itemid,
    	item_name:document.querySelector('input[name="item_name_'+itemid+'"]').value,
    	item_size:document.querySelector('input[name="item_size_'+itemid+'"]').value,
    	item_price: document.querySelector('input[name="item_price_'+itemid+'"]').value,
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


document.querySelector('button[name="deleteitem"]').addEventListener("click",()=>{
	location.href = '/deleteitem/'+document.querySelector('input[name="order_group"]:checked').value;
});