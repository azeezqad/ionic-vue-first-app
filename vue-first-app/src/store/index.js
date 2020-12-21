import {createStore} from "vuex";

const store = createStore(
    {
        state(){
            return{
                memories: [
                    {
                        id: "1",
                        image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190827-beauty-best-hair-products-1566922412.png",
                        title: "Product 1",
                        description: "This is the best book ever"
                    },
                    {
                        id: "2",
                        image: "https://au.oberlo.com/media/1603958036-new-products.jpg",
                        title: "Product 2",
                        description: "This is the best book ever"
                    },
                     {
                        id: "3",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLTwj9ZnfG_SA0rHNmYE2XBzkwX0nI5GLoWA&usqp=CAU",
                        title: "Product 3",
                        description: "This is the best book ever"
                    },

                ],
            };
        },
        mutations: {
          addMemory(state, memoryData) {
            const newMemory = {
              id: new Date().toISOString(),
              title: memoryData.title,
              image: memoryData.imageUrl,
              description: memoryData.description
            };
      
            state.memories.unshift(newMemory);
          }
        },
        actions: {
          addMemory(context, memoryData) {
            context.commit('addMemory', memoryData);
          }
        },
        getters: {
            memories(state) {
              return state.memories;
            },
            memory(state) {
              return (memoryID) => {
                return state.memories.find((memories) => memories.id === memoryID);
              };
            },
          },
        });
        
        export default store;