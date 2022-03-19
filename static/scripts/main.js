document.querySelector('button[name="addorder"]').addEventListener("click",()=>{
	location.href = '/addorder'
});

document.querySelector('button[name="editorder"]').addEventListener("click",()=>{
	console.log(document.querySelector('input[name="order_group"]:checked').value);
	location.href = '/editorder/'+document.querySelector('input[name="order_group"]:checked').value;
});

document.querySelector('button[name="edititems"]').addEventListener("click",()=>{
	location.href = '/edititems'
});

document.querySelector('button[name="deleteorder"]').addEventListener("click",()=>{
	location.href = '/deleteorder/'+document.querySelector('input[name="order_group"]:checked').value;
});