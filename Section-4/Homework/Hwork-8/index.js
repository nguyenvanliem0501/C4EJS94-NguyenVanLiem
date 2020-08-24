const square = {
    x: 100,
    y: 50,
    width: 20,
};
penup();
rt(90);
fd(square.x);
lt(90);
fd(square.y);
pendown();
  for(let i = 0; i < 4; i++){
      fd(pos.width);
        rt(90);
}  

