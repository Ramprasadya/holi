

const text = "Happy Holi!";
  const holiText = document.getElementById('holi-text');
  let font = "Sonsie One" 
  let font1 ="Rubik Gemstones"
  function changeFont(){
   holiText.style.fontFamily = Math.random(font,font1);
  }

  setInterval(changeFont(),5000)

  function type() {
    let index = 0;
    holiText.textContent = ''; 
    function typeCharacter() {
      if (index < text.length) {
        holiText.textContent += text.charAt(index);
        index++;
        setTimeout(typeCharacter, 300); 
      }
    }
    typeCharacter();
  }

  setInterval(type, 5000); 
  type(); 
    const bubbles = document.querySelectorAll('.color-bubble');

    function changeBubbleColors() {
      bubbles.forEach(bubble => {
        const randomColor = getRandomColor();
        bubble.style.backgroundColor = randomColor;
      });
    }

    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    changeBubbleColors()
  