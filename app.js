Vue.component('svg-image', {
  template: '<svg class="center display_block mb_20px" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 47.5 47.5" id="svg2" xml:space="preserve"><defs id="defs6"><clippath id="clipPath18"><path d="M 0,38 38,38 38,0 0,0 0,38 z" id="path20"/></clippath></defs><g transform="matrix(1.25,0,0,-1.25,0,47.5)" id="g12"><g id="g14"><g clip-path="url(#clipPath18)" id="g16"><g transform="translate(19,1)" id="g22"><path d="m 0,0 c -9.941,0 -18,8.059 -18,18 0,9.941 8.059,18 18,18 C 9.941,36 18,27.941 18,18 18,8.059 9.94,0 0,0" id="path24"/></g><g transform="translate(28,19)" id="g26"><path d="m 0,0 c 0,-4.971 -4.029,-9 -9,-9 -4.971,0 -9,4.029 -9,9 0,4.971 4.029,9 9,9 4.971,0 9,-4.029 9,-9" id="path28" /></g><g transform="translate(17.7793,22.0703)" id="g30"><path d="m 0,0 c 0,-0.791 0.457,-1.336 1.266,-1.336 0.808,0 1.283,0.545 1.283,1.336 0,0.756 -0.457,1.336 -1.283,1.336 C 0.439,1.336 0,0.756 0,0 m -0.334,-5.098 c 0,-0.896 0.527,-1.757 1.6,-1.757 1.002,0 1.599,0.861 1.599,1.757 0,1.108 -0.633,1.758 -1.599,1.758 -1.02,0 -1.6,-0.773 -1.6,-1.758 m -2.742,-0.175 c 0,1.406 0.773,2.443 1.881,3.041 -0.826,0.597 -1.336,1.406 -1.336,2.513 0,2.057 1.705,3.375 3.797,3.375 2.039,0 3.814,-1.301 3.814,-3.375 0,-0.984 -0.492,-1.968 -1.353,-2.513 1.195,-0.598 1.88,-1.688 1.88,-3.041 0,-2.444 -1.986,-4.008 -4.341,-4.008 -2.426,0 -4.342,1.652 -4.342,4.008" id="path32" /></g></g></g></g></svg>'
});

var vm = new Vue({
  el: '#app',
  data: {
    answers: ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes', 'Reply hazy try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 'Don\'t count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful'],
    defaultState: true,
  },
  methods: {
    randomAnswer: function () {
      return this.answers[Math.floor(Math.random() * this.answers.length)];
    }
  }
});