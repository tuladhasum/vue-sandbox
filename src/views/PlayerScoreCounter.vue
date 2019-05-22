<template>
   <div class="container ">
      <h1 class="text-center">Player Score Counter</h1>

      <div class="card">
         <div class="card-body text-center">
            <h3>Player 1</h3>
            <button class="btn btn-danger btn-sm" @click="decreaseScore(player_1)">Down</button>
            <span class="player-score display-4">{{player_1.score}}</span>
            <button class="btn btn-success btn-sm" @click="increaseScore(player_1)">Up</button>
         </div>

         <div class="card-body text-center">
            <h3>Player 2</h3>
            <button class="btn btn-danger btn-sm" @click="decreaseScore(player_2)">Down</button>
            <span class="player-score display-4">{{player_2.score}}</span>
            <button class="btn btn-success btn-sm" @click="increaseScore(player_2)">Up</button>
         </div>
      </div>
   </div>
</template>

<script>
    export default {
        name: "PlayerScoreCounter",
        data(){
            return {
                player_1_score: 0,
                player_1: {
                    score: 0
                },
                player_2: {
                    score: 0
                }
            }
        },
        methods: {
            increaseScore(player){
                player.score += 1
            },
            decreaseScore(player){
                if (player.score > 0){
                    player.score -= 1
                }
            }
        }
    }
</script>

<style scoped>

</style>