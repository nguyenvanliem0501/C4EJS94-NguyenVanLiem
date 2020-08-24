const circle = {
    shape: 'circle',
    x: 100,
    y: 50,
    radius: 30,
};
penup();
rt(90);
fd(circle.x);
lt(90);
fd(circle.y-circle.radius);
pendown();
let perimeter = (2 * Math.PI * circle.radius)/500;
lt(90);
for(let i = 0;i < 1000; i ++){
	fd(perimeter);
  	rt(180-998*180/1000);
}