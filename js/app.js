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

      this.setear()
     

      
    },
    setear(){
      this.nombre = null
      this.apellido = null
      this.hobby = null
      this.lugar = null
    }
    
  },
  data() {
    return {
      nombre: null,
      apellido:null,
      hobby:null,
      lugar:null, 
      formulario: [] 
    };
  }
});

app.mount('#myApp');
