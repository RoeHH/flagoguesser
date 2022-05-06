function test(input){
  const buttons = document.querySelectorAll("button");
  for(const b of buttons){
    b.addEventListener('click', event => {
        console.log( event.target.id );
   });
  }
}
