var product = [
    {							
    id: 'SP1',							
    name: 'Áo dài thêu họa tiết 111111',							
    img: 'https://i.pinimg.com/236x/46/9d/90/469d90dce0571b52012c77a13ccec32a.jpg',							
    price: 122000,							
    },							
    {							
    id: 'SP2',							
    name: 'Áo dài truyền thống',							
    img: 'https://i.pinimg.com/236x/b7/8c/9d/b78c9d75a94589264a751bd25f658e29.jpg',							
    price: 400000,							
    },							
    {							
    id: 'SP3',							
    name: 'Áo dài',							
    img: 'https://i.pinimg.com/236x/b5/7c/d7/b57cd7f7f33ab2b60206cc6526c0d785.jpg',							
    price: 350000,							
    },							
    {							
    id: 'SP4',							
    name: 'Áo dài hiện đại',							
    img: 'https://i.pinimg.com/236x/89/b2/86/89b28694d5542fe893b45d6a6db8a309.jpg',							
    price: 564000,							
    },							
    {							
    id: 'SP5',							
    name: 'Áo dài hiện đại',							
    img: 'https://i.pinimg.com/236x/4c/4e/68/4c4e68a5291e774d41d114bcf0cc91a7.jpg',							
    price: 654000,							
    },							
    {							
    id: 'SP6',							
    name: 'Áo dài hiện đại',							
    img: 'https://i.pinimg.com/236x/46/eb/b9/46ebb943858893c29dd0adad04396a25.jpg',							
    price: 123000,							
    },							
    {							
    id: 'SP7',							
    name: 'Áo dài hiện đại',							
    img: 'https://i.pinimg.com/236x/a8/f7/4e/a8f74eba460aef2a7ea9673b5551815d.jpg',							
    price: 345000,							
    },							
    {							
    id: 'SP8',							
    name: 'Áo dài hiện đại',							
    img: 'https://i.pinimg.com/236x/00/73/8b/00738b4d5435cbbf5763c51bf4c63ffb.jpg',							
    price: 258000,							
    },							
    ];	
    								
//đẩy mảng product vào local								
function Save() {								
localStorage.setItem('listProduct', JSON.stringify(product));								
}								
//lấy sản phẩm								
function load() {								
product = JSON.parse(localStorage.getItem('listProduct'));								
}								
//xuất sản phẩm ra html								
if (localStorage.getItem('listProduct') != null) {								
load();								
}								
var listLocal = function() {								
    var listproduct = '';								
    for (var i in product) {								
        var data = JSON.parse(JSON.stringify(product[i]));								
                                        
        var listproduct = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">';								
        listproduct += '<div class="card product p-2" styte="width:auto">';								
        listproduct +=								
           ' <img class="card-img-top" src="' + data.img+ '" alt="...">';								
        listproduct +=								
            '<div class="card-title product-title text-center h5" >' +								
        data.name +								
        '</div>';								
listproduct +=								
'<div class="price text-center h6">' + data.price + '₫</div>';								
listproduct +=								
'<span class="text-center add-to-cart btn btn-outline-warning add-cart" data-id="' +								
data.id +								
'" data-name="' +								
data.name +								
'" data-img="' +								
data.img +								
'" data-price="' +								
data.price +								
'" onclick="tks()">';								
listproduct += '<a>';								
listproduct += '<i class="fas fa-cart-plus"></i>';								
listproduct += '</a>';								
listproduct += '</span>';								
listproduct += '</div>';
listproduct += '</div>';						
								
document.getElementById('banchay').innerHTML += listproduct;								
}								
Save();								
};								
listLocal();								
localStorage.clear();	

var addproduct= function (){
    var Product ={
        id: 'SP' +parseInt(product.length+1),
        name: document.getElementById('name').value,
        img: document.getElementById('img').value,
        price: document.getElementById('price').value,
    };
    product.push(Product);
    localStorage.setItem('listproduct',JSON.stringify(prodcut));
    //save();
    window.location.reload();
};
var productAmin = function(){
    var listproduct1 ='';
    for (var i in product){
        var data = JSON.parse(JSON,stringify(product[i]));
        var listproduct1 = '</tr>';
        listproduct1+= '<td>' +data.id+ '</td>';
        listproduct1+= '<td>' +data.name+ '</td>';
        listproduct1+= 
            '<td><img scr=".../img/'+data.img+' "alt="" style=width: 50px"+</td>';
        listproduct1+='<td>' +data.price+'</td>'
        // listproduct1+='';
        listproduct1+=
        '<td><button onclick = "updateProduct('+
        i+
        ')" class = "btn btn-outline-danger" date-toggle="modal" data-target="#updateProduct"></td>';
        listproduct1 += 
        '<td> <button onclick ="deleteProduct ('+
        i+
        ') "class =" bnt ml-1 btn-outline-warning"> <i class="fas fa-trash></i>Mua ngay </button> </td>';
    listproduct1 += '</tr>';
    document.getElementById('product-admin').innerHTML+=listproduct1;
    }
}
//
//
var deleteProduct = function(i){
    product.splice(i,1);
    localStorage.setItem('listProduct',JSON.stringify(prodcut));
    window.location.reload();
};
var updateProduct = function(i){
    var k = product[i];
    document.getElementById('idd').value=k.id;
    document.getElementById('named').value=k.name;
    document.getElementById('imgd').value=k.img;
    document.getElementById('priced').value=k.price;
    document.getElementById('idd').setAttribute('disabled','disanled');
    document.getElementById('submitUpdate').innerHTML=
    '<button class="btn btn-outline-danger mt-3" onclick="submitUpdate('+
    i+
    ')"> Đồng ý </button>';  
}
var submitUpdate=function(i){
    var k = product[i];
    k.id = document.getElementById('idd').value;
   k.name= document.getElementById('named').value=k.name;
   k.img= document.getElementById('imgd').value=k.img;
   k.price= document.getElementById('priced').value=k.price;
    //document.getElementById('idd').setAttribute('disabled','disanled');
    localStorage.setItem('listProduct',JSON.stringify(prodcut));
    window.location.reload();  
};

function proDetail(i){
    var pDetail='';
    for (var key in product){
        if (key ==i){
            var data=product[i];
            pDetail+='< form class="form_row">';
            pDetail+='<div class="col-lg-12 col-md-6 col-sm-6 col-6 mt-3">';
            pDetail+='<div class="card" style="width:auto">';
            pDetail+='<img class="card-img-top" src="img/'+ data.img+'">';
            pDetail+='<div class ="card-body">';
            pDetail+='<div class="card-title">'+data.name+'</div>';
            pDetail+='<div class="card-text">';
            pDetail+=data.descript+'<br>';
            pDetail+=data.price+'</div>';
            pDetail+='<span class="text-center add-to-cart btn">';
            pDetail+='<button class="btn btn-success">'+' <i class="fa fa-cart-plus mt-3"></i>'+'</button> </span>';
            pDetail+='</form>';
            break;
        }
    }
    document.getElementById('proDetail').innerHTML=pDetail;
}
function listLocal(){
    var listProduct='';
    for (var i in product){
        var data=JSON.parse(JSON.stringify(product[i]))
        listProduct+='<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">';
        listProduct+='<div class="card" style="width:auto">';
        listProduct+='<img class="card-img-top" src="img/'+ data.img+'">';
        listProduct+='<div class ="card-body">';
        listProduct+='<div class="card-title">'+data.name+'</div>';
        listProduct+='<div class="card-text">';
        listProduct+=data.price+'</div>';
        listProduct+='<button class="btn btn-secondary" data-target="#proDetails" onclick="proDatail('+i+')">Detail</button>'
        listProduct+='<span class="text-center add-to-cart bnt">';
        listProduct+='<button class="btn-success">'+' <i class="fa fa-cart-plus"></i>'+'</button></span>';
        document.getElementById('banchay').innerHTML+=listProduct;
    }
    save();
}