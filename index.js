var Create=function (opt){
   this.opt=opt.body;
   this.sum=opt.sum;
   this.content=opt.content;
   this.init();
}
Create.prototype={
    constructor:Create,
    init:function(){
    for(let i=0; i<this.sum;i++){
     var div=document.createElement('div');
     div.innerHTML=this.content;
     this.opt.appendChild(div);
    }
    }
}