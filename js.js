function Rectangle(width, height) {
    this.width= width ;
    this.height = height;

    this.getPerimeter = function  () {
        let perimeter = (this.width + this.height ) *2 ;
        return perimeter ;
    }
    this.getArea = function  () {
        let area = (this.width * this.height )  ;
        return area ;
    }
    this.drawRectangle = function (){
        let c = document.getElementById("myCanvas");
        let ctx = c.getContext("2d");
        ctx.fillStyle = "#2f0a8f";
        ctx.fillRect(0,0,width,height);
    }

}
let Rectangle1 = new Rectangle(500, 250) ;
Rectangle1.drawRectangle();
alert("Diện tích hình chữ nhật là: "+ Rectangle1.getArea());
alert("Chu vi hình chữ nhật là: "+ Rectangle1.getPerimeter());