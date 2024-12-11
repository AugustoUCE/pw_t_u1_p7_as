const app = Vue.createApp({
  methods: {
    agregar() {
      const newformulario ={
        nombre: this.nombre,
        apellido: this.apellido,
        hobby: this.hobby,  
        lugar: this.lugar 
      } 
      
      this.formulario.push(newformulario);
      
      
    },
    
  },
  data() {
    return {
      nombre: null,
      apellido:null,
      hobby:null,
      lugar:null, // Campo para la nueva entrada
      formulario: [] // Lista de entradas
    };
  }
});

app.mount('#myApp');
