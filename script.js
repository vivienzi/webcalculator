var show='0';
var op1,op2;
var operator='';


$('.number').click(function(){
	if(show=='0'){
	show=this.value;
	}else{
	show+=this.value;
	}
	$('#show').html(show);
})

$('#dot').click(function(){
	if(show.indexOf('.')==-1)show+='.';
	//alert(show);
})

$('.operator').click(function(){
		op1=parseFloat($('#show').text());
		show='0';
		operator=this.value;
})

$('#equal').click(function(){
	op2=parseFloat(show);
	switch (operator){
		case '+':{
			show=op1+op2;break;
		}
		case '-':{
			show=op1-op2;break;
		}
		case '*':{
			show=op1*op2;break;
		}
		case '/':{
			show=op1/op2;break;
		}
	}
	$('#show').html(show);
	show='0';
	op1=0;
	op2=0;
	operator='';
	
})

$('#AC').click(function(){
	show=0;
	op1=0;
	op2=0;
	operator='';
	$('#show').html(show);
	
})

$('.advenced_operator').click(function(){
	var temp = parseFloat($('#show').text());
	if(this.value=="1/x"){
		$('#show').text(1/temp);

	}else if(this.value=="√"){
		$('#show').text(Math.sqrt(temp));
	}else if(this.value=="sqr"){
		$('#show').text(temp*temp);
	}
	show=0;
	op1=0;
	op2=0;
	operator='';
}
)


