
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    usertag VARCHAR(60) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    status BOOLEAN NOT NULL DEFAULT TRUE,
    ban BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE profiles(
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
    profile_icon VARCHAR(255) NOT NULL DEFAULT 'Marvel_Rivals/Galacta/Galacta_Icon.webp',
    profile_nameplate VARCHAR(255) NOT NULL DEFAULT 'Marvel_Rivals/Nameplates/Galacta_Nameplate.webp',
    main_character VARCHAR(255) NOT NULL DEFAULT 'Jubilee',
    role VARCHAR(50) NOT NULL DEFAULT 'Strategist' CHECK(role IN('Vanguard','Duelist','Strategist')),
    level INT NOT NULL DEFAULT 0 CHECK(level >= 0 AND level <= 1000),
    rank VARCHAR(50) NOT NULL DEFAULT 'Gold' CHECK(rank IN ('Bronze','Silver','Gold','Platinum','Diamond','Grandmaster','Celestial','Eternity','One Above All')),
    platform VARCHAR(50) NOT NULL CHECK(platform IN ('PC','Xbox','PlayStation')) DEFAULT 'PC',
    updated_at VARCHAR(100) NOT NULL
);

CREATE TABLE social(
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    youtube VARCHAR(255) DEFAULT NULL,
    twitch VARCHAR(255) DEFAULT NULL,
    kick VARCHAR(255) DEFAULT NULL,
    discord VARCHAR(255) DEFAULT NULL,
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    profile_id INT NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    comment VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);