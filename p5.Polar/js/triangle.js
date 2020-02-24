// 2.1
const lv2_1Pattern = [
	's.polarTriangle(0,100)'
];

const lv2_1 = (userInput, cm) => {
	userInput = userInput.map(substr =>
		substr.replace(',0)', ')')
	);
	
	if(document.getElementById('defaultCanvas4')) {
    document.getElementById('defaultCanvas4').remove();
    document.getElementById('msg').innerText = '';
  } 

  const lv2_1Ans = userInput.every(el => 
    lv2_1Pattern.includes(el)
  );
	
	let draw1 = (s) => { 
    s.setup = () => {
      let w = document.getElementById('sketch1').clientWidth;
      let h = document.getElementById('sketch1').clientHeight;
      s.createCanvas(w, h);
      s.noFill();
      polar.setCenter(w/2, h/2);
      if(!lv2_1Ans) {
      	s.stroke('#ccc');
      	s.strokeWeight(1); 
	      eval(userInput.join());
	      document.getElementById('msg').innerText = 'Try again!';
	    }
	    else {
      	s.strokeWeight(1); 
      	s.stroke('#cef19d');
	      s.polarTriangle(0, 100, 0);
	      example1.drawingContext.lineWidth = 1;
	      document.getElementById('msg').innerText = 'Pass!';
	      setTimeout(() => { 
		      let lv2_2Val = '<h4>Level-2.2 Triangle</h4>'
	          + '<p><hint><b>Mission</b></hint> ' 
	          + 'Draw a triangle, starts with <b>angle 0 and radius of 100</b>. '
	          +	'And draw another triangle starts with <b>angle 180 and radius of 100</b> '
	          + 'by calling polarTriangle() function twice</p> '
	          + '<p><hint><b>Hint</b></hint> <func><b>polarTriangle()</b></func> '
	          + 'is the function to draw a single triangle. '
	          + 'Three parameters can be passed to the single drawing funciton by the following order: '
	          + '<b>angle</b>, <b>radius</b>, and <b>distance</b> (distance is an optional parameter) '
	          + 'For example, polarTriangle(30, 50, 0) draws a triangle starts with 30 degree of angle and radius of 50</p>'
	          + '<p>* Type your answer in the box below and execute the code with <key><b>Shift + Enter</b></key> keys</p>';
		      document.getElementById('intro').innerHTML = lv2_2Val;
		      document.getElementById('msg').innerText = '';
		      cm.setValue('// type your code here\n');
		      cm.setCursor({line: 1});
		    }, 1000);
	    }
    }; 
  };
  let userDrawing1 = new p5(draw1, 'draw1');
}

// 2.2
const lv2_2Pattern = [
	's.polarTriangle(0,100)',
  's.polarTriangle(180,100)'
];

const lv2_2 = (userInput, cm) => {
	userInput = userInput.map(substr =>
		substr.replace(',0)', ')')
	);
	
	if(document.getElementById('defaultCanvas5')) {
    document.getElementById('defaultCanvas5').remove();
    document.getElementById('msg').innerText = '';
  } 

  const lv2_2Match = userInput.every(el => 
    lv2_2Pattern.includes(el)
  );

  const lv2_2Ans = lv2_2Pattern.every(el => 
    lv2_2Match && userInput.includes(el)
  );

	let draw2 = (s) => { 
    s.setup = () => {
      let w = document.getElementById('sketch2').clientWidth;
      let h = document.getElementById('sketch2').clientHeight;
      s.createCanvas(w, h);
      s.noFill();
      polar.setCenter(w/2, h/2);
      if(!lv2_2Ans) {
      	s.stroke('#ccc');
      	s.strokeWeight(1); 
	      eval(userInput.join());
	      document.getElementById('msg').innerText = 'Try again!';
	    }
	    else {
      	s.strokeWeight(1); 
      	s.stroke('#cef19d');
	      s.polarTriangle(0, 100, 0);
	      s.stroke('#77bd98');
    		s.polarTriangle(180, 100, 0);
	      example2.drawingContext.lineWidth = 1;
	      document.getElementById('msg').innerText = 'Pass!';
	      setTimeout(() => { 
		      let lv2_3Val = '<h4>Level-2.3 Triangle</h4>'
	          + '<p><hint><b>Mission</b></hint> ' 
	          + 'Draw a triangle, starts with <b>angle 0, radius 100 and distance of 50</b>. '
	          +	'And draw another triangle starts with <b>angle 180, radius 100 and distance of 50</b> '
	          + 'by calling polarTriangle() function twice</p> '
	          + '<p><hint><b>Hint</b></hint> <func><b>polarTriangle()</b></func> '
	          + 'is the function to draw a single triangle. '
	          + 'Three parameters can be passed to the single drawing funciton by the following order: '
	          + '<b>angle</b>, <b>radius</b>, and <b>distance</b> (distance is an optional parameter) '
	          + 'For example, polarTriangle(30, 50, 0) draws a triangle starts with 30 degree of angle and radius of 50</p>'
	          + '<p>* Type your answer in the box below and execute the code with <key><b>Shift + Enter</b></key> keys</p>';
		      document.getElementById('intro').innerHTML = lv2_3Val;
		      document.getElementById('msg').innerText = '';
		      cm.setValue('// type your code here\n');
		      cm.setCursor({line: 1});
		    }, 1000);
	    }
    }; 
  };
  let userDrawing2 = new p5(draw2, 'draw2');
}

// 2.3
const lv2_3Pattern = [
	's.polarTriangle(0,100,50)',
  's.polarTriangle(180,100,50)'
];

const lv2_3 = (userInput, cm) => {
	if(document.getElementById('defaultCanvas6')) {
    document.getElementById('defaultCanvas6').remove();
    document.getElementById('msg').innerText = '';
  } 

  const lv2_3Match = userInput.every(el => 
    lv2_3Pattern.includes(el)
  );
  
  const lv2_3Ans = lv2_3Pattern.every(el => 
    lv2_3Match && userInput.includes(el)
  );

	let draw3 = (s) => { 
    s.setup = () => {
      let w = document.getElementById('sketch3').clientWidth;
      let h = document.getElementById('sketch3').clientHeight;
      s.createCanvas(w, h);
      s.noFill();
      polar.setCenter(w/2, h/2);
      if(!lv2_3Ans) {
      	s.stroke('#ccc');
      	s.strokeWeight(1); 
	      eval(userInput.join());
	      document.getElementById('msg').innerText = 'Try again!';
	    }
	    else {
      	s.strokeWeight(1); 
	      s.stroke('#cef19d');
	      s.polarTriangle(0, 100, 50);
	      s.stroke('#77bd98');
    		s.polarTriangle(180, 100, 50);
	      example3.drawingContext.lineWidth = 1;
	      document.getElementById('msg').innerText = 'Pass!';
	      setTimeout(() => { 
		      let lv2_4Val = '<h4>Level-2.4 Triangle</h4>'
	          + '<p><hint><b>Mission</b></hint> ' 
	          + 'Draw four triangles with <b>radius 50 and distance of 100</b> '
	          + 'and with four different angles <b>0, 90, 180 and 270</b>. '
	          + 'Call polarTriangle() function four times. Each of triangle function should have different angle</p> '
	          + '<p><hint><b>Hint</b></hint> <func><b>polarTriangle()</b></func> '
	          + 'is the function to draw a single triangle. '
	          + 'Three parameters can be passed to the single drawing funciton by the following order: '
	          + '<b>angle</b>, <b>radius</b>, and <b>distance</b> (distance is an optional parameter) '
	          + 'For example, polarTriangle(30, 50, 0) draws a triangle starts with 30 degree of angle and radius of 50</p>'
	          + '<p>* Type your answer in the box below and execute the code with <key><b>Shift + Enter</b></key> keys</p>';
		      document.getElementById('intro').innerHTML = lv2_4Val;
		      document.getElementById('msg').innerText = '';
		      cm.setValue('// type your code here\n');
		      cm.setCursor({line: 1});
		    }, 1000);
	    }
    }; 
  };
  let userDrawing3 = new p5(draw3, 'draw3');
}

// 2.4
const lv2_4Pattern = [
	's.polarTriangle(0,50,100)',
  's.polarTriangle(90,50,100)',
  's.polarTriangle(180,50,100)',
  's.polarTriangle(270,50,100)'
];

const lv2_4 = (userInput, cm) => {
	userInput = userInput.map(substr =>
		substr.replace(',0)', ')')
	);

	if(document.getElementById('defaultCanvas7')) {
    document.getElementById('defaultCanvas7').remove();
    document.getElementById('msg').innerText = '';
  } 

  const lv2_4Match = userInput.every(el => 
    lv2_4Pattern.includes(el)
  );
  
  const lv2_4Ans = lv2_4Pattern.every(el => 
    lv2_4Match && userInput.includes(el)
  );

	let draw4 = (s) => { 
    s.setup = () => {
      let w = document.getElementById('sketch4').clientWidth;
      let h = document.getElementById('sketch4').clientHeight;
      s.createCanvas(w, h);
      s.noFill();
      polar.setCenter(w/2, h/2);
      if(!lv2_4Ans) {
      	s.stroke('#ccc');
      	s.strokeWeight(1); 
	      eval(userInput.join());
	      document.getElementById('msg').innerText = 'Try again!';
	    }
	    else {
      	s.strokeWeight(1); 
	      s.stroke('#f9c6b3');
	      s.polarTriangle(0, 50, 100);
	      s.stroke('#e29686');
				s.polarTriangle(90, 50, 100);
				s.stroke('#cef19d');
				s.polarTriangle(180, 50, 100);
				s.stroke('#77bd98');
				s.polarTriangle(270, 50, 100);
	      example4.drawingContext.lineWidth = 1;
	      document.getElementById('msg').innerText = 'Pass!';
	      setTimeout(() => { 
		      let nextLevel = '<h3>Congratulations! (*´▽`*)</h3>'
		      + '<p>You just learned how to draw triangles with single drawing function. Click the button below and move to the next level</p>'
		      + '<button onclick="window.location.href = \'../challenge/challenge_1.html\'">Next Level - Challenge &#8544;</button>';
	        document.getElementById('intro').innerHTML = nextLevel;
		      document.getElementById('msg').innerText = '';
		    }, 1000);
	    }
    }; 
  };
  let userDrawing4 = new p5(draw4, 'draw4');
}