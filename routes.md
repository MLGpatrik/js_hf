# JS HF routes dokumentáció

Webshop adatbázis kezelő rendszer, entitások: Rendelések és termékek

- index.html megjelenítni a rendeléseket, rendeléseket is itt lehet törölni.
- add_order.html rendeléseket lehet feladni.
- modify_order.html rendeléseket lehet módosítani.
- edit_items.html termékeket lehet hozzáadni, módosítani és törölni.


routing

renderMW

middleware/items/
	delItemMW
	createItemMW
	delItemMW
	changeItemMW

middleware/orders/
	addOrderMW.js
	delOrderMW.js
	editOrderMW.js
	getOrderMW.js
	getOrdersMW.js


GET /deleteorder/:id
	delOrderMW

GET /deleteitem/:id
	delItemMW

POST /additem
	jsonParser
	createItemMW;

POST /changeitem
	jsonParser
	changeItemMW

POST /modifyorder
	jsonParser
	editOrderMW

POST /addorder
	jsonParser
	addOrderMW

GET /
	getOrdersMW
	renderMW

GET /addorder
	getItemsMW
	renderMW

GET /editorder/:id
	getOrderMW
	getItemsMW
	renderMW

GET /edititems 
	getItemsMW
	renderMW
