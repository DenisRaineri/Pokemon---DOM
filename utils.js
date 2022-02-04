const profCarvalho = (pokemon) =>{
    switch (pokemon){
        case 'Chespin':{
            pokemon = "Chespin"
            return pokemon
        };
        case 'Froakie':{
            pokemon = "Froakie"
            return pokemon
        };
        case 'Entei':{
            pokemon = "Entei"
            return pokemon
        } ;
        default:
            console.log('Digite um nome válido para o Pokémon.')
    }
}
module.exports = profCarvalho;