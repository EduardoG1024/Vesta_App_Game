
const Vanguards = [
    'Angela', 'Captain America', 'Deadpool', 
    'Devil Dinosaur', 'Doctor Strange', 'Emma Frost', 
    'Groot', 'Hulk', 'Magneto', 'Peni Parker', 
    'Rogue', 'The Hood', 'The Thing', 'Thor', 'Venom'];
const Duelists = [
    'Black Cat', 'Black Panther', 'Black Widow', 
    'Blade', 'Cyclops', 'DareDevil', 'Deadpool', 
    'Elsa Bloodstone', 'Hawkeye', 'Hela', 
    'Human Torch', 'Iron Fist', 'Iron Man', 'Magik', 
    'Mr Fantastic', 'Moon Knight', 'Namor', 'Phoenix', 
    'Psylocke', 'Scarlet Witch', 'Spider Man', 
    'Squirrel Girl', 'Star Lord', 'Storm', 
    'The Punisher', 'Winter Soldier', 'Wolverine'];
const Strategist = [
    'Jubilee', 'Invisible Woman', 'White Fox', 
    'Cloak & Dagger', 'Luna Snow', 'Mantis', 
    'Adam Warlock', 'Jeff the Land Shark', 'Gambit',
    'Ultron', 'Loki', 'Deadpool', 'Rocket Raccoon'];

const Ranks = [
    'Bronze', 'Silver', 'Gold', 
    'Platinum', 'Diamond', 
    'Grandmaster', 'Celestial', 
    'Eternity', 'One Above All'];

const Roles = ['Vanguard', 'Duelist', 'Strategist'];

const platforms = ['PC', 'Xbox', 'Playstation'];

export class ValidateCharactersRolesPlatform {
    static ValidateCharcter(character, role) {
        if (role === 'Vanguard' && !Vanguards.includes(character))
            throw new Error('Personaje no pertenece a ese role');

        if (role === 'Duelist' && !Duelists.includes(character))
            throw new Error('Personaje no pertenece a ese role');

        if (role === 'Strategist' && !Strategist.includes(character))
            throw new Error('Personaje no pertenece a ese role');
    }

    static ValidateRole(role) {
        if (!Roles.includes(role))
            throw new Error('Role no existente');
    }

    static ValidateRank(rank) {
        if (!Ranks.includes(rank))
            throw new Error('Rango no existente');
    }

    static ValidatePlatform(platform) {
        if (!platforms.includes(platform))
            throw new Error('Plataforma no permitida');
    }
}