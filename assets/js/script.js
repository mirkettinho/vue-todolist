const {createApp} = Vue;

createApp({
  data(){
    return{
      tasks:[
          {
            text: "prova 1",
            done: false
          },
          {
            text: "prova 2",
            done: true
          },
          {
            text: "prova 3",
            done: true
          },
          {
            text: "prova 4",
            done: true
          },
          {
            text: "prova 5",
            done: true
          }
      ]
    }
  },

  methods:{

    deleteTask(index){
      this.tasks.splice(index, 1)
    }

  }
}).mount("#app")