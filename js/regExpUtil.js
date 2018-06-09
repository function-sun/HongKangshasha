
function checkAll(type,value){
	var reg = null;
	switch(type){
		case "username":reg = /^[a-zA-Z_]\w{5,15}$/;break;
		case "userpassword":reg = /^[a-zA-Z0-9]\w{6-16}$/;break;
		case "useremail":reg = /^\w+@[a-zA-Z0-9]+\.(com|cn|net|top|vip)$/;break;
		default:;
	}
	if(reg!=null){
		if(reg.test(value)){
			return true;
		}
	}
	return false;	
} 