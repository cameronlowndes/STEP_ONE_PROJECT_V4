import React, { useState } from 'react';
import Footer from './Footer'; // Import the Footer component
import { Link } from 'react-router-dom';


const initialProducts = [
    { 
        id: 1,
        name: 'The Legend of Zelda: Breath of the Wild',
        price: 49.99,
        image: `${process.env.PUBLIC_URL}/image/image_1.jpg`, // Correctly referencing the image in public
        description: 'is an open-world action-adventure game set in a beautifully crafted, vast landscape of Hyrule. Players control Link, who awakens from a long slumber to defeat Calamity Ganon and rescue Princess Zelda. The game emphasizes exploration, allowing players to tackle challenges in various ways, solve intricate puzzles, and discover secrets across diverse environments, from lush forests to snow-capped mountains. Its blend of combat, crafting, and environmental interaction creates a rich, immersive experience.'
    },
    { 
        id: 2, 
        name: 'Super Mario Odyssey', 
        price: 39.99, 
        image: `${process.env.PUBLIC_URL}/image/image_2.jpg`,
        description: 'is a platform game that follows Mario on a globe-trotting adventure to rescue Princess Peach from Bowser. With innovative gameplay mechanics, including the ability to capture enemies and objects, Mario explores vibrant worlds filled with secrets, challenges, and collectibles.' 
    },
    { 
        id: 3, 
        name: 'Red Dead Redemption 2', 
        price: 59.99, 
        image: `${process.env.PUBLIC_URL}/image/image_3.jpeg`, 
        description: 'is a narrative-driven action-adventure game set in the late 1800s American West. Players assume the role of Arthur Morgan, a member of the Van der Linde gang, and experience a richly detailed open world filled with dynamic characters, thrilling gunfights, and immersive storytelling.' 
    },
    { 
        id: 4, 
        name: 'The Witcher 3: Wild Hunt', 
        price: 30.99, 
        image: `${process.env.PUBLIC_URL}/image/image_4.jpg`, 
        description: 'is a critically acclaimed role-playing game where players control Geralt of Rivia, a monster hunter, as he searches for his missing adopted daughter. The game features an expansive open world with deep storytelling, moral choices, and engaging combat.' 
    },
    { 
        id: 5, 
        name: 'God of War', 
        price: 49.99, 
        image: `${process.env.PUBLIC_URL}/image/image_5.jpg`, 
        description: 'is an action-adventure game that follows Kratos, a former Greek god, on a journey through Norse mythology to spread the ashes of his deceased wife. The game combines brutal combat with emotional storytelling and stunning visuals.' 
    },
    { 
        id: 6, 
        name: 'Animal Crossing: New Horizons', 
        price: 39.99, 
        image: `${process.env.PUBLIC_URL}/image/image_6.jpg`, 
        description: 'is a life simulation game where players create and manage their own island paradise. With charming characters, seasonal events, and extensive customization options, players can build and decorate their homes while interacting with adorable animal villagers.' 
    },
    { 
        id: 7, 
        name: 'call of duty black ops 6', 
        price: 59.00, 
        image: `${process.env.PUBLIC_URL}/image/image_7.jpg`, 
        description: 'is a free-to-play battle royale game that combines traditional Call of Duty gameplay with large-scale multiplayer action. Players parachute onto a massive map, scavenge for weapons, and compete to be the last one standing.' 
    },
    { 
        id: 8, 
        name: 'Minecraft', 
        price: 29.99, 
        image: `${process.env.PUBLIC_URL}/image/image_8.jpg`, 
        description: 'is a sandbox game that allows players to build and explore virtual worlds made up of blocks. With various gameplay modes, including survival and creative, players can craft, mine, and unleash their creativity in a procedurally generated environment.' 
    },
    { 
        id: 9, 
        name: 'Final Fantasy VII Remake', 
        price: 59.99, 
        image: `${process.env.PUBLIC_URL}/image/image_9.jpg`, 
        description: 'is a reimagining of the classic RPG that follows Cloud Strife as he joins a group of eco-terrorists to fight against the oppressive Shinra Corporation. The game features real-time combat and stunning visuals, immersing players in the world of Gaia.' 
    },
    { 
        id: 10, 
        name: 'Persona 5 Royal', 
        price: 28.99, 
        image: `${process.env.PUBLIC_URL}/image/image_10.jpg`,
        description: 'is an enhanced version of the acclaimed JRPG that follows a group of high school students who form the Phantom Thieves to change the hearts of corrupt adults. With turn-based combat, social simulation elements, and an engaging story, it captivates players with its unique art style and music.' 
    },
    { 
        id: 11, 
        name: 'Overwatch', 
        price: 39.99, 
        image: `${process.env.PUBLIC_URL}/image/image_11.jpg`, 
        description: 'is a team-based multiplayer first-person shooter featuring a diverse cast of heroes, each with unique abilities. Players work together to achieve objectives across various maps in this fast-paced and colorful shooter.' 
    },
    { 
        id: 12, 
        name: 'Forza Horizon 5', 
        price: 50.00, 
        image: `${process.env.PUBLIC_URL}/image/image_12.jpg`, 
        description: 'is a free-to-play online multiplayer first-person shooter with RPG elements. Players take on the role of Guardians, protecting humanity from various threats in a vast universe filled with striking visuals and engaging gameplay.' 
    },
    { 
        id: 13, 
        name: 'Ghost of Tsushima', 
        price: 59.99, 
        image: `${process.env.PUBLIC_URL}/image/image_13.jpg`, 
        description: 'is an open-world action-adventure game set in feudal Japan during the Mongol invasion. Players control Jin Sakai, a samurai who must learn to adapt and become a ghost to protect his home from the invading forces.' 
    },
    { 
        id: 14, 
        name: 'Hades', 
        price: 20.99, 
        image: `${process.env.PUBLIC_URL}/image/image_14.jpg`, 
        description: 'is a rogue-like dungeon crawler where players control Zagreus, the son of Hades, as he attempts to escape the Underworld. With fast-paced combat and a unique narrative structure, it offers a fresh take on Greek mythology.' 
    },
    { 
        id: 15, 
        name: 'Doom Eternal', 
        price: 34.99, 
        image: `${process.env.PUBLIC_URL}/image/image_15.jpg`, 
        description: 'is a first-person shooter that continues the story of the Doom Slayer in a battle against demonic forces. With brutal combat mechanics and stunning graphics, it delivers a thrilling and action-packed experience.' 
    },
    { 
        id: 16, 
        name: 'Sekiro: Shadows Die Twice', 
        price: 59.99, 
        image: `${process.env.PUBLIC_URL}/image/image_16.jpg`, 
        description: 'is an action-adventure game set in a reimagined late 1500s Sengoku period Japan. Players control a shinobi named Wolf as he seeks revenge against his captors and uncovers the secrets of his past.' 
    },
    { 
        id: 17, 
        name: 'The Last of Us Part II', 
        price: 59.99, 
        image:`${process.env.PUBLIC_URL}/image/image_17.jpg`, 
        description: 'is a narrative-driven action-adventure game that continues the story of Ellie in a post-apocalyptic world. It explores themes of revenge, loss, and the consequences of choices in a beautifully crafted environment.' 
    },
    { 
        id: 18, 
        name: 'Death Stranding', 
        price: 39.99, 
        image:`${process.env.PUBLIC_URL}/image/image_18.jpg`, 
        description: 'is an open-world action game that follows Sam Porter Bridges, who must deliver supplies across a desolate America. With unique gameplay mechanics and a captivating story, it pushes the boundaries of conventional gaming.' 
    },
    { 
        id: 19, 
        name: 'Cyberpunk 2077', 
        price: 59.99, 
        image:`${process.env.PUBLIC_URL}/image/image_19.jpg`, 
        description: 'is an open-world RPG set in a dystopian future where players control V, a customizable mercenary. The game offers a richly detailed world filled with characters, missions, and choices that impact the narrative.' 
    },
    { 
        id: 20, 
        name: 'Resident Evil Village', 
        price: 59.99, 
        image:`${process.env.PUBLIC_URL}/image/image_20.jpg`, 
        description: 'is a survival horror game that follows Ethan Winters as he searches for his kidnapped daughter in a mysterious village filled with terrifying creatures. With immersive gameplay and stunning visuals, it enhances the iconic series.' 
    },
    { 
        id: 21, 
        name: 'Forza Horizon 4', 
        price: 20.99, 
        image:`${process.env.PUBLIC_URL}/image/image_21.jpg`, 
        description: 'is an open-world racing game set in a fictionalized version of Great Britain. Players can explore the world in various vehicles, participate in events, and experience dynamic seasons that change gameplay.' 
    },
    { 
        id: 22, 
        name: 'FC 25', 
        price: 59.99, 
        image:`${process.env.PUBLIC_URL}/image/FC_25.png`, 
        description: 'is a football simulation game that features realistic gameplay and various modes, including Ultimate Team and Career Mode. Players can control their favorite teams and compete against others online.' 
    },
    { 
        id: 23, 
        name: 'Madden NFL 25', 
        price: 59.99, 
        image:`${process.env.PUBLIC_URL}/image/image_22.jpg`, 
        description: 'is an American football video game that offers an authentic simulation of the NFL experience, with various modes, including Franchise and Ultimate Team, allowing players to manage their teams.' 
    },
    { 
        id: 24, 
        name: 'Assassin’s Creed Valhalla', 
        price: 23.99, 
        image:`${process.env.PUBLIC_URL}/image/image_23.jpg`, 
        description: 'is an action role-playing game that follows Eivor, a Viking raider, during the invasion of England. Players can explore a vast open world, engage in combat, and build their settlement.' 
    },
    { 
        id: 25, 
        name: 'Hollow Knight', 
        price: 14.99, 
        image:`${process.env.PUBLIC_URL}/image/image_24.jpg`, 
        description: 'is a metroidvania-style action-adventure game set in a beautifully hand-drawn world. Players control a silent knight as they explore a vast interconnected kingdom filled with challenging enemies and secrets.' 
    },
    { 
        id: 26, 
        name: 'Cuphead', 
        price: 19.99, 
        image:`${process.env.PUBLIC_URL}/image/image_25.jpg`, 
        description: 'is a run-and-gun indie game known for its 1930s cartoon art style. Players control Cuphead as he battles challenging bosses and platforming levels to repay his debt to the devil.' 
    },
    { 
        id: 27, 
        name: 'Stardew Valley', 
        price: 14.99, 
        image:`${process.env.PUBLIC_URL}/image/image_26.jpg`, 
        description: 'is a farming simulation game where players inherit a run-down farm and work to restore it. With elements of farming, crafting, and building relationships with townsfolk, it offers a relaxing gameplay experience.' 
    },
    { 
        id: 28, 
        name: 'Celeste', 
        price: 19.99, 
        image:`${process.env.PUBLIC_URL}/image/image_27.jpg`, 
        description: 'is a platformer that tells the story of Madeline as she climbs Celeste Mountain. With tight controls and challenging levels, it explores themes of mental health and perseverance.' 
    },
    { 
        id: 29, 
        name: 'The Outer Worlds', 
        price: 59.99, 
        image:`${process.env.PUBLIC_URL}/image/image_28.jpg`, 
        description: 'is a first-person RPG set in an alternate future where mega-corporations control colonization. Players navigate a retro-futuristic world, make choices that affect the story, and interact with unique characters.' 
    },
    { 
        id: 30, 
        name: 'Marvel’s Spider-Man', 
        price: 39.99, 
        image:`${process.env.PUBLIC_URL}/image/image_29.jpg`, 
        description: 'is an open-world action-adventure game that follows Peter Parker as Spider-Man. With fluid combat and web-swinging mechanics, players can explore New York City and take on iconic villains.' 
    },
    { 
        id: 31, 
        name: 'Fall Guys: Ultimate Knockout', 
        price: 29.99, 
        image:`${process.env.PUBLIC_URL}/image/image_30.jpg`, 
        description: 'is a multiplayer party game where players compete in a series of chaotic obstacle courses. With colorful visuals and a whimsical tone, it provides fun and entertaining gameplay for all ages.' 
    },
    { 
        id: 32, 
        name: 'Dead Cells', 
        price: 24.99, 
        image:`${process.env.PUBLIC_URL}/image/image_31.jpg`, 
        description: 'is a rogue-like metroidvania that combines fast-paced combat and exploration. Players navigate procedurally generated levels and face challenging enemies, with permanent upgrades available through progression.' 
    },
    { 
        id: 33, 
        name: 'Nioh 2', 
        price: 59.99, 
        image:`${process.env.PUBLIC_URL}/image/image_32.jpg`, 
        description: 'is an action RPG set in a dark fantasy version of the Sengoku period in Japan. Players create their own character and engage in challenging combat against supernatural foes.' 
    },
    { 
        id: 34, 
        name: 'Ghostrunner', 
        price: 29.99, 
        image:`${process.env.PUBLIC_URL}/image/image_33.jpg`, 
        description: 'is a first-person action game that combines parkour and combat in a cyberpunk world. Players must use agility and skill to navigate levels and defeat enemies in a fast-paced environment.' 
    },
    { 
        id: 35, 
        name: 'Ori and the Will of the Wisps', 
        price: 29.99, 
        image:`${process.env.PUBLIC_URL}/image/image_34.jpg`, 
        description: 'is a visually stunning platformer that follows Ori as he embarks on a quest to uncover his destiny. With beautiful art, an emotional narrative, and refined gameplay, it captivates players.' 
    },
    { 
        id: 36, 
        name: 'Gris', 
        price: 16.99, 
        image:`${process.env.PUBLIC_URL}/image/image_35.jpg`, 
        description: 'is a platformer that emphasizes artistic expression. Players control a young girl navigating a world of vibrant colors, overcoming challenges, and experiencing a narrative without words.' 
    },
    { 
        id: 37, 
        name: 'Returnal', 
        price: 69.99, 
        image:`${process.env.PUBLIC_URL}/image/image_36.jpg`, 
        description: 'is a rogue-like third-person shooter that follows Selene, a space explorer trapped on an alien planet. With fast-paced combat and a gripping narrative, it combines exploration with challenging gameplay.' 
    },
    { 
        id: 38, 
        name: 'Hitman 3', 
        price: 59.99, 
        image:`${process.env.PUBLIC_URL}/image/image_37.jpg`, 
        description: 'is a stealth game where players control Agent 47 as he completes assassination contracts in various global locations. With intricate level design and creative gameplay options, it offers multiple approaches to each mission.' 
    },
    { 
        id: 39, 
        name: 'Control', 
        price: 39.99, 
        image:`${process.env.PUBLIC_URL}/image/image_38.jpg`, 
        description: 'is an action-adventure game set in a mysterious government building. Players assume the role of Jesse Faden as she explores a supernatural world and gains telekinetic powers.' 
    },
    { 
        id: 40, 
        name: 'Farming Simulator 22 ', 
        price: 20.99, 
        image:`${process.env.PUBLIC_URL}/image/image_63.jpg`, 
        description: 'Farming Simulator 22 is a realistic agricultural simulation game where players manage their own farms, grow crops, raise livestock, and expand their business. With enhanced graphics and new features like seasonal cycles and expanded machinery, it offers an immersive experience for both casual players and farming enthusiasts. The game encourages strategic planning and efficient resource management, providing a deep and engaging farming experience.' 
    },
    { 
        id: 41, 
        name: 'Monster Hunter: World', 
        price: 59.99, 
        image:`${process.env.PUBLIC_URL}/image/image_40.jpg`, 
        description: 'is an action RPG where players take on the role of hunters tracking down massive monsters. With cooperative gameplay, players can team up to take on formidable foes in vast environments.' 
    },
    { 
        id: 42, 
        name: 'Baldur’s Gate 3', 
        price: 59.99, 
        image:`${process.env.PUBLIC_URL}/image/image_41.jpg`, 
        description: 'is a role-playing game that brings the iconic series back to life with a modern twist. Players create their own character and engage in a rich narrative filled with choices, combat, and exploration.' 
    },
    { 
        id: 43, 
        name: 'The Surge 2', 
        price: 39.99, 
        image:`${process.env.PUBLIC_URL}/image/image_42.jpg`, 
        description: 'is an action RPG set in a dystopian future, where players navigate a world filled with hostile machines and powerful bosses. Its unique combat system focuses on targeting specific body parts of enemies.' 
    },
    { 
        id: 44, 
        name: 'Dying Light 2', 
        price: 59.99, 
        image:`${process.env.PUBLIC_URL}/image/image_83.jpg`, 
        description: 'is a survival horror game that combines parkour mechanics with open-world exploration. Players must navigate a post-apocalyptic world while making choices that affect the narrative and environment.' 
    },
    { 
        id: 45, 
        name: 'Watch Dogs: Legion', 
        price: 59.99, 
        image:`${process.env.PUBLIC_URL}/image/image_43.jpg`, 
        description: 'is an open-world action-adventure game that allows players to recruit and control any character in a dystopian London. With various abilities and backgrounds, each character adds unique gameplay options.' 
    },
    { 
        id: 46, 
        name: 'No Man’s Sky', 
        price: 59.99, 
        image:`${process.env.PUBLIC_URL}/image/image_44.jpg`, 
        description: 'is a space exploration game that offers players the ability to explore procedurally generated planets, build bases, and engage in interstellar trading and combat.' 
    },
    { 
        id: 47, 
        name: 'FIFA 21', 
        price: 20.99, 
        image:`${process.env.PUBLIC_URL}/image/image_45.jpg`, 
        description: 'is a football simulation game that features realistic gameplay and various modes, including Ultimate Team and Career Mode. Players can control their favorite teams and compete against others online.' 
    },
    { 
        id: 48, 
        name: 'Madden NFL 21', 
        price: 10.99, 
        image:`${process.env.PUBLIC_URL}/image/image_46.jpg`, 
        description: 'is an American football video game that offers an authentic simulation of the NFL experience, with various modes, including Franchise and Ultimate Team, allowing players to manage their teams.' 
    },
    { 
        id: 49, 
        name: 'Assassin’s Creed Shadows', 
        price: 59.99, 
        image:`${process.env.PUBLIC_URL}/image/image_47.jpg`, 
        description: 'is an action role-playing game that follows Eivor, a Viking raider, during the invasion of England. Players can explore a vast open world, engage in combat, and build their settlement.' 
    },
    { 
        id: 50, 
        name: 'Grand Theft Auto V', 
        price: 13.99, 
        image:`${process.env.PUBLIC_URL}/image/image_48.jpg`, 
        description: 'Grand Theft Auto V (GTA V) is an open-world action-adventure game that lets players explore a massive, detailed city filled with diverse missions and activities. With a gripping storyline, three playable protagonists, and an expansive online mode, it offers endless opportunities for chaos, crime, and creativity. The games realistic graphics, engaging gameplay, and freedom to roam make it a standout experience in the world of gaming.' 
    },
    { 
        id: 51, 
        name: 'Grand Theft Auto VI (COMMING SOON)', 
        price: 59.99, 
        image:`${process.env.PUBLIC_URL}/image/image_49.jpg`, 
        description: 'Grand Theft Auto VI (coming soon) is the highly anticipated next installment in the iconic open-world action-adventure series. Promising a bigger, more immersive world with groundbreaking graphics and gameplay, it aims to push the boundaries of storytelling and player freedom. With new locations, characters, and features, GTA VI is set to redefine the gaming experience and deliver an unforgettable journey through its vibrant, dynamic world.' 
    },
    { 
        id: 52, 
        name: 'FIFA 23', 
        price: 14.99, 
        image:`${process.env.PUBLIC_URL}/image/image_50.jpg`, 
        description: 'FIFA 23 is the latest installment in the popular football simulation series, offering enhanced gameplay, realistic graphics, and the most immersive football experience yet. Featuring updated team rosters, improved animations, and new mechanics like HyperMotion2 technology, it delivers more authentic and fluid player movements. With various game modes, including Ultimate Team and Career Mode, FIFA 23 provides endless opportunities for football fans to build their dream teams and compete on the global stage.' 
    },
    { 
        id: 53, 
        name: 'FIFA 22', 
        price: 5.99, 
        image:`${process.env.PUBLIC_URL}/image/image_51.jpg`, 
        description: 'FIFA 22 brings a new level of realism to the football simulation experience with improved gameplay, updated graphics, and innovative features like HyperMotion technology. This installment enhances player movements and in-game physics, offering a more authentic and immersive feel. With various modes like Career, Ultimate Team, and Volta Football, FIFA 22 delivers an engaging experience for both casual players and dedicated football fans.' 
    },
    { 
        id: 54, 
        name: 'FIFA 20', 
        price: 4.00, 
        image:`${process.env.PUBLIC_URL}/image/image_52.jpg`, 
        description: 'FIFA 20 introduces fresh gameplay innovations and the new VOLTA Football mode, bringing street football to the series for the first time. With improved ball physics, refined dribbling, and updated team rosters, it delivers a more realistic and dynamic football experience. Whether competing in traditional 11v11 matches or taking the game to the streets, FIFA 20 offers diverse game modes for all football enthusiasts.' 
    },
    { 
        id: 55, 
        name: 'Marvel’s Spider-Man Remastered', 
        price: 42.99, 
        image:`${process.env.PUBLIC_URL}/image/image_53.jpg`, 
        description: 'is an open-world action-adventure game that follows Peter Parker as Spider-Man. With fluid combat and web-swinging mechanics, players can explore New York City and take on iconic villains.' 
    },
    { 
        id: 56, 
        name: 'Warhammer 40,000: Space Marine 2', 
        price: 37.99, 
        image:`${process.env.PUBLIC_URL}/image/image_54.jpg`, 
        description: 'is a multiplayer party game where players compete in a series of chaotic obstacle courses. With colorful visuals and a whimsical tone, it provides fun and entertaining gameplay for all ages.' 
    },
    { 
        id: 57, 
        name: 'Ready or Not', 
        price: 21.99, 
        image:`${process.env.PUBLIC_URL}/image/image_55.jpg`, 
        description: 'is a rogue-like metroidvania that combines fast-paced combat and exploration. Players navigate procedurally generated levels and face challenging enemies, with permanent upgrades available through progression.' 
    },
    { 
        id: 58, 
        name: '7 Days to Die', 
        price: 12.99, 
        image:`${process.env.PUBLIC_URL}/image/image_56.jpg`, 
        description: 'is an action RPG set in a dark fantasy version of the Sengoku period in Japan. Players create their own character and engage in challenging combat against supernatural foes.' 
    },
    { 
        id: 59, 
        name: 'Gotham Knights ', 
        price: 2.99, 
        image:`${process.env.PUBLIC_URL}/image/image_57.jpg`, 
        description: 'is a first-person action game that combines parkour and combat in a cyberpunk world. Players must use agility and skill to navigate levels and defeat enemies in a fast-paced environment.' 
    },
    { 
        id: 60, 
        name: 'The Sims 4 Life and Death PC - DLC (COMING SOON)', 
        price: 22.99, 
        image:`${process.env.PUBLIC_URL}/image/image_58.jpg`, 
        description: 'The Sims 4: Life and Death (coming soon) is an upcoming DLC that adds a new layer of depth and realism to the popular life simulation game. This expansion promises to introduce dramatic life events, unique challenges, and fresh gameplay features that explore the full cycle of life. With new interactions, character traits, and story possibilities, it offers players even more ways to shape their Sims lives and experiences.' 
    },
    { 
        id: 61, 
        name: 'Party Animals PC', 
        price: 8.99, 
        image:`${process.env.PUBLIC_URL}/image/image_59.jpg`, 
        description: 'Party Animals is a fun-filled multiplayer brawler where players control adorable, physics-based animals in chaotic battles. With its charming visuals and hilarious ragdoll mechanics, the game offers a mix of competitive and cooperative gameplay across various modes and maps. Whether your fighting friends or teaming up against others, Party Animals delivers endless laughter and excitement for gamers of all ages.' 
    },
    { 
        id: 62, 
        name: 'Football Manager 2025', 
        price: 24.99, 
        image:`${process.env.PUBLIC_URL}/image/image_60.jpg`, 
        description: 'Football Manager 2025 is the latest installment in the iconic football management simulation series, offering even deeper control over team tactics, transfers, and match strategies. With advanced data analytics, realistic player development, and an immersive 3D match engine, it delivers the most authentic managerial experience yet. Whether your building a legacy with a top club or guiding an underdog to glory, Football Manager 2025 provides endless opportunities to shape your footballing journey.' 
    },
    { 
        id: 63, 
        name: 'Days Gone', 
        price: 9.99, 
        image:`${process.env.PUBLIC_URL}/image/image_61.jpg`, 
        description: 'is a stealth game where players control Agent 47 as he completes assassination contracts in various global locations. With intricate level design and creative gameplay options, it offers multiple approaches to each mission.' 
    },
    { 
        id: 64, 
        name: 'Valheim', 
        price: 9.11, 
        image:`${process.env.PUBLIC_URL}/image/image_62.jpg`, 
        description: 'is an action-adventure game set in a mysterious government building. Players assume the role of Jesse Faden as she explores a supernatural world and gains telekinetic powers.' 
    },
    { 
        id: 65, 
        name: 'PlayStation 5 DualSense Wireless Controllere', 
        price: 69.99, 
        image:`${process.env.PUBLIC_URL}/image/PlayStation 5_DualSense_Wireless_Controller.jpg`, 
        description: 'The PlayStation 5 DualSense Wireless Controller revolutionizes gaming with its advanced haptic feedback and adaptive triggers, delivering a more immersive and tactile experience. Its ergonomic design, built-in microphone, and enhanced features create a seamless connection between player and game. With precise motion sensors and responsive controls, the DualSense elevates gameplay on the PS5, making every action feel more dynamic and engaging.' 
    },
    { 
        id: 66, 
        name: 'Xbox Series X Controller', 
        price: 59.99, 
        image:`${process.env.PUBLIC_URL}/image/Xbox_Series_X_Controller.jpg`, 
        description: 'The Xbox Series X Controller offers gamers a refined and comfortable experience with its ergonomic design and textured grips for improved handling. Featuring responsive buttons, enhanced thumbsticks, and a new Share button for easy content sharing, it ensures seamless gameplay. Compatible with various devices and equipped with Bluetooth technology, the Xbox Series X Controller delivers reliability and versatility for both casual and competitive gamers.' 
    },
    { 
        id: 67, 
        name: 'Razer DeathAdder Elite Gaming Mouse"', 
        price: 59.99, 
        image:`${process.env.PUBLIC_URL}/image/Razer_DeathAdder_Elite_Gaming_Mouse.png`, 
        description: 's a high-performance gaming mouse designed for serious gamers, featuring an ergonomic shape that provides comfort during extended play sessions. It boasts a 16,000 DPI optical sensor for precise tracking and responsiveness, making it ideal for fast-paced gaming. With customizable Chroma RGB lighting, gamers can personalize their mouse to match their setup. The mouse also includes programmable buttons for quick access to macros and in-game commands, along with Razers advanced mechanical switches for durability and reliability. The Razer DeathAdder Elite combines performance and style, making it a favorite among esports professionals and gaming enthusiasts alike.' 
    },
    { 
        id: 68, 
        name: 'Logitech G502 Hero Gaming Mouse', 
        price: 49.99, 
        image:`${process.env.PUBLIC_URL}/image/Logitech_G502_Hero_Gaming_Mouse.jpeg`, 
        description: 'is a highly customizable and versatile gaming mouse designed for gamers who demand precision and performance. It features the advanced Hero 25K sensor, offering up to 25,600 DPI for accurate tracking and responsiveness in fast-paced gaming scenarios. The mouse includes customizable RGB lighting and programmable buttons, allowing players to assign macros and commands for enhanced gameplay. Its ergonomic design provides comfort during long gaming sessions, while the adjustable weight system lets users fine-tune the mouse to their preferred feel. With its combination of advanced features and durability, the Logitech G502 Hero is a top choice for both casual and competitive gamers.' 
    },
    { 
        id: 69, 
        name: 'Corsair K95 RGB Platinum Keyboard', 
        price: 149.99, 
        image:`${process.env.PUBLIC_URL}/image/Corsair_K95_RGB_Platinum_Keyboard.png`, 
        description: 'is a high-end mechanical gaming keyboard designed for gamers and professionals alike. It features customizable per-key RGB backlighting, allowing users to create vibrant lighting effects and personalize their gaming setup. The keyboard is equipped with Cherry MX mechanical switches, known for their reliability and tactile feedback, ensuring a responsive typing experience. With dedicated macro keys, customizable profiles, and an aluminum frame for durability, the K95 offers both functionality and aesthetics. It also includes a detachable wrist rest for enhanced' 
    },
    { 
        id: 70, 
        name: 'SteelSeries Arctis 7 Wireless Headset', 
        price: 99.99, 
        image:`${process.env.PUBLIC_URL}/image/SteelSeries_Arctis_7_Wireless_Headset.jpg`, 
        description: 'is a high-end mechanical gaming keyboard designed for gamers and professionals alike. It features customizable per-key RGB backlighting, allowing users to create vibrant lighting effects and personalize their gaming setup. The keyboard is equipped with Cherry MX mechanical switches, known for their reliability and tactile feedback, ensuring a responsive typing experience. With dedicated macro keys, customizable profiles, and an aluminum frame for durability, the K95 offers both functionality and aesthetics. It also includes a detachable wrist rest for enhanced comfort during extended gaming sessions, making it a top choice for those seeking a premium keyboard experience.' 
    },
    { 
        id: 71, 
        name: 'HyperX Cloud II Gaming Headset', 
        price: 79.99, 
        image:`${process.env.PUBLIC_URL}/image/HyperX_Cloud II_Gaming_Headset.jpg`, 
        description: 'is a space exploration game that offers players the ability to explore procedurally generated planets. With a focus on survival, crafting, and discovery, it presents a vast universe to uncover.' 
    },
    { 
        id: 72, 
        name: 'Asus ROG Strix Gaming Monitor', 
        price: 499.99, 
        image:`${process.env.PUBLIC_URL}/image/Asus_ROG_Strix_Gaming_Monitor.png`, 
        description: 'is a versatile and high-quality gaming headset designed for comfort and performance. Featuring memory foam ear cushions and a durable aluminum frame, it provides long-lasting comfort for extended gaming sessions. The headset is equipped with 53mm drivers that deliver immersive, high-fidelity audio, enhancing the gaming experience with clear sound and rich bass. It includes a detachable noise-canceling microphone, ensuring clear communication with teammates in multiplayer games. The Cloud II is compatible with multiple platforms, including PC, PlayStation, and Xbox, making it a great choice for gamers seeking reliable audio and comfort across various devices.' 
    },
    { 
        id: 73, 
        name: 'Razer BlackShark V2 Gaming Headset', 
        price: 89.99, 
        image:`${process.env.PUBLIC_URL}/image/Razer_BlackShark_V2_Gaming_Headset.jpg`, 
        description: 'is a high-performance display designed for gamers who demand exceptional visuals and responsiveness. Featuring a fast refresh rate of up to 240Hz and a 1ms response time, it provides smooth, tear-free gaming experiences with minimal motion blur. The monitor boasts vibrant colors and high contrast ratios, thanks to its IPS or TN panel technology, ensuring stunning graphics and accurate color reproduction. With NVIDIA G-SYNC compatibility, it eliminates screen tearing and enhances gameplay fluidity. The monitor also includes customizable RGB lighting and ergonomic design options, making it a stylish and functional choice for any gaming setup.' 
    },
    { 
        id: 74, 
        name: 'SteelSeries Rival 600 Gaming Mouse', 
        price: 79.99, 
        image:`${process.env.PUBLIC_URL}/image/SteelSeries_Rival_600_Gaming_Mouse.jpeg`, 
        description: 'The SteelSeries Rival 600 Gaming Mouse is a high-performance gaming mouse designed for competitive gamers who demand precision and customization. It features a dual sensor system with a TrueMove3+ optical sensor, offering true 1-to-1 tracking with up to 12,000 CPI for exceptional accuracy. The mouse incorporates customizable weight and balance adjustments, allowing users to fine-tune their setup for optimal comfort and performance. Its ergonomic design includes soft-touch rubber grips and an adjustable RGB lighting system, enabling personalization to match any gaming setup. The Rival 600 also features advanced customization options through SteelSeries Engine software, allowing for programming of buttons, macros, and performance settings. With its advanced technology and customizable features, the SteelSeries Rival 600 is an ideal choice for serious gamers seeking an edge in their gameplay.' 
    },
    { 
        id: 75, 
        name: 'Corsair HS70 Pro Wireless Headset', 
        price: 99.99, 
        image:`${process.env.PUBLIC_URL}/image/Corsair_HS70_Pro_Wireless_Headset.jpg`, 
        description: 'is a versatile and high-quality gaming headset designed for comfort and performance. Featuring a wireless connection with low latency, it offers freedom of movement while delivering immersive audio with 50mm neodymium drivers. The headset includes plush memory foam ear cups and an adjustable headband for all-day comfort during extended gaming sessions. Its detachable, noise-canceling microphone ensures clear communication with teammates, while customizable RGB lighting adds a personal touch to your setup. With a long battery life of up to 16 hours, the HS70 Pro is perfect for gamers seeking reliability and exceptional sound quality without the hassle of wires.' 
    },
    { 
        id: 76, 
        name: 'Elgato Stream Deck', 
        price: 149.99, 
        image:`${process.env.PUBLIC_URL}/image/Elgato_Stream_Deck.jpg`, 
        description: 'is a powerful and customizable control interface designed for streamers and content creators. Featuring 15 customizable LCD keys, it allows users to easily access and control various functions, such as switching scenes, launching media, and adjusting audio levels with a simple press. The Stream Deck integrates seamlessly with popular streaming software, enabling users to create complex multi-action macros and shortcuts to streamline their workflow. Its intuitive design and robust software provide an easy way to personalize key layouts and visual icons. With its compact size and versatility, the Elgato Stream Deck enhances productivity and efficiency, making it an essential tool for anyone in the streaming or content creation space.' 
    },
    { 
        id: 77, 
        name: 'Nintendo Switch Lite', 
        price: 199.99, 
        image:`${process.env.PUBLIC_URL}/image/Nintendo_Switch_Lite.jpg`, 
        description: 'is an open-world survival game set in an alien ocean planet. Players must explore underwater environments, gather resources, and survive against sea creatures.' 
    },
    { 
        id: 78, 
        name: 'Alienware 27 Gaming Monitor', 
        price: 699.99, 
        image:`${process.env.PUBLIC_URL}/image/Alienware_ 27_Gaming_Monitor.jpg`, 
        description: 'is a high-performance display built for competitive gaming, offering an impressive 240Hz refresh rate and a 1ms response time for ultra-smooth, lag-free gameplay. It features a 27-inch IPS panel that delivers vibrant colors and wide viewing angles, enhancing the visual experience. With NVIDIA G-SYNC compatibility, the monitor ensures tear-free, fluid gaming, while the sleek, futuristic design includes customizable RGB lighting. The adjustable stand provides ergonomic comfort, allowing players to tilt, swivel, and adjust height for optimal viewing. The Alienware 27 Gaming Monitor combines cutting-edge performance with striking aesthetics, making it a top choice for serious gamers.' 
    },
    { 
        id: 79, 
        name: 'Logitech G Pro X Wireless Headset', 
        price: 129.99, 
        image:`${process.env.PUBLIC_URL}/image/Logitech_ G_ Pro_ X_Wireless_Headset.png`, 
        description: 'is a premium gaming headset designed for professional-level performance and comfort. Featuring advanced 2.4 GHz wireless connectivity, it delivers lag-free audio with a range of up to 20 meters. The headset is equipped with Pro-G 50mm drivers, providing clear and immersive sound with deep bass and precise audio cues, ideal for competitive gaming. It includes Blue VO!CE microphone technology for studio-quality voice clarity and noise reduction, ensuring crisp communication with teammates. With a durable yet lightweight design, memory foam ear cushions, and up to 20 hours of battery life, the Logitech G Pro X Wireless offers superior comfort and audio quality for long gaming sessions.' 
    },
    { 
        id: 80, 
        name: 'SteelSeries QcK Gaming Mouse Pad', 
        price: 19.99, 
        image:`${process.env.PUBLIC_URL}/image/SteelSeries_QcK_Gaming_Mouse_Pad.jpg`, 
        description: 'is a high-quality, durable mouse pad designed for precision and smooth control during gaming. Its micro-woven cloth surface provides optimized tracking for both optical and laser sensors, ensuring responsive and accurate mouse movements. The non-slip rubber base keeps the mouse pad securely in place during intense gaming sessions. Available in multiple sizes, including large and extended options, the QcK caters to different play styles and setups. Known for its durability and consistency, the SteelSeries QcK is a favorite among gamers looking for reliable performance and enhanced control..' 
    },
    { 
        id: 81, 
        name: 'Terraria', 
        price: 9.99, 
        image:`${process.env.PUBLIC_URL}/image/image_81.jpg`, 
        description: 'is a sandbox adventure game that allows players to explore, craft, and build in a 2D world. With a mix of combat and exploration, it offers a wide range of activities and creativity.' 
    },
    { 
        id: 82, 
        name: 'BenQ Zowie XL2546K Monitor', 
        price: 449.99, 
        image:`${process.env.PUBLIC_URL}/image/BenQ Zowie_XL2546K_Monitor.jpg`, 
        description: 'is a top-tier gaming monitor designed for esports professionals, featuring a lightning-fast 240Hz refresh rate and 1ms response time for ultra-smooth, responsive gameplay. It includes BenQ proprietary DyAc+ technology, which reduces motion blur, ensuring clearer and more precise visuals during fast-paced action. The 24.5-inch display offers Full HD resolution, providing sharp and vibrant images, while its adjustable stand allows for optimal ergonomic positioning. The monitor also features customizable settings, such as Black eQualizer and Color Vibrance, for better visibility in darker scenes. The BenQ Zowie XL2546K is a favorite among competitive gamers looking for precision, speed, and performance in their gaming experience.'  },
    { 
        id: 83, 
        name: 'Turtle Beach Stealth 600 Headset', 
        price: 99.99, 
        image:`${process.env.PUBLIC_URL}/image/Turtle Beach_Stealth_600_Headset.jpg`, 
        description: 'is a wireless gaming headset designed for immersive audio and comfortable wear. With powerful 50mm speakers, it delivers clear highs and deep, immersive bass, making it ideal for gaming, movies, and music. The headset features a flip-up microphone with high sensitivity, ensuring clear voice communication with teammates. Its breathable ear cushions and adjustable headband provide comfort for extended gaming sessions. With integrated surround sound (on supported platforms) and seamless wireless connectivity, the Stealth 600 enhances gameplay by offering a lag-free audio experience. It is compatible with Xbox, PlayStation, and PC, making it a versatile choice for gamers.' 
    },
    { 
        id: 84, 
        name: 'Xbox Series X', 
        price: 499.99, 
        image:`${process.env.PUBLIC_URL}/image/Xbox_Series_X.jpg`, 
        description: 'most powerful gaming console, designed for high-end performance and seamless gameplay. Featuring a custom AMD Zen 2 processor and RDNA 2 architecture, it supports 4K gaming at up to 120 frames per second, offering stunning visuals and fluid motion. The console 1TB NVMe SSD ensures ultra-fast load times and quick game switching through the Quick Resume feature. With support for ray tracing, enhanced lighting, and spatial audio, it delivers an immersive gaming experience. The Xbox Series X is backward compatible with thousands of games from previous Xbox generations, and it supports Xbox Game Pass, giving players access to a vast library of games. Its sleek, tower-like design makes it both powerful and visually distinct.' 
    },
    { 
        id: 85, 
        name: 'Sony PlayStation 5', 
        price: 499.99, 
        image:`${process.env.PUBLIC_URL}/image/Sony_PlayStation_5.jpeg`, 
        description: 'is a next-generation gaming console known for its powerful hardware and innovative features. Equipped with a custom AMD processor, 16GB of RAM, and an ultra-fast SSD, it delivers lightning-quick load times and stunning graphics in 4K resolution. The console supports ray tracing, enhancing lighting and reflections for a more immersive gaming experience. Its DualSense controller offers haptic feedback and adaptive triggers, providing a tactile, responsive feel during gameplay. The PS5 also boasts backward compatibility with a wide range of PS4 games and offers exclusive titles like *Demon Souls* and *Spider-Man: Miles Morales*. With its sleek design and cutting-edge performance, the PlayStation 5 is a must-have for serious gamers.' 
    },
    { 
        id: 86, 
        name: 'Razer Kraken Gaming Headset', 
        price: 59.99, 
        image:`${process.env.PUBLIC_URL}/image/Razer_Kraken_Gaming_Headset.jpg`, 
        description: 'is a highly regarded headset designed for immersive sound and comfort during long gaming sessions. Equipped with custom-tuned 50mm drivers, it delivers powerful, clear audio with deep bass, making in-game soundscapes come alive. The headset features cooling gel-infused ear cushions and a lightweight, durable aluminum frame, ensuring long-lasting comfort and reducing heat build-up. Its retractable noise-canceling microphone provides clear voice communication, perfect for multiplayer gaming. The Razer Kraken is compatible with multiple platforms, including PC, consoles, and mobile devices, making it a versatile choice for gamers seeking comfort, durability, and superior audio performance.' 
    },
    { 
        id: 87, 
        name: 'Logitech G933 Wireless Headset', 
        price: 124.99, 
        image:`${process.env.PUBLIC_URL}/image/Logitech_G933_Wireless_Headset.jpg`, 
        description: 'is a premium gaming headset designed for immersive audio and versatility. Featuring Pro-G audio drivers, it delivers rich, clear sound with deep bass and crisp highs, perfect for gaming, music, and movies. The headset offers 7.1 surround sound for a fully immersive gaming experience, making it easier to pinpoint in-game sounds. Its wireless connection provides freedom of movement with no lag, and it also includes a wired option for multi-platform compatibility. The G933 features customizable RGB lighting, programmable G-keys, and a foldable noise-canceling microphone for clear communication. With its comfortable design, long battery life, and multi-device support, the G933 is ideal for gamers seeking a high-quality wireless audio experience.' 
    },
    { 
        id: 88, 
        name: 'Corsair M65 RGB Elite Mouse', 
        price: 59.99, 
        image:`${process.env.PUBLIC_URL}/image/Corsair_M65_RGB_Elite_Mouse.jpg`, 
        description: 'RGB Elite Mouse is a high-performance gaming mouse designed for precision and customization. It features a durable aluminum frame and an advanced 18,000 DPI optical sensor, allowing for extremely accurate tracking and responsiveness. The mouse includes customizable weight tuning, enabling players to adjust its balance to their preference. With eight programmable buttons, including a dedicated sniper button for on-the-fly DPI adjustments, it provides flexibility for various gaming styles. The M65 also offers customizable RGB lighting, allowing users to personalize the look of the mouse. Its ergonomic design and premium build make it a top choice for both casual and competitive gamers.' 
    },
    { 
        id: 89, 
        name: 'Thrustmaster T.16000M Joystick', 
        price: 69.99, 
        image:`${process.env.PUBLIC_URL}/image/Thrustmaster_T.16000M_Joystick.png`, 
        description: 'is a highly regarded flight simulation controller designed for precision and versatility. Featuring a unique H.E.A.R.T (HallEffect AccuRate Technology) system, it offers exceptional accuracy with 16,000 individual values on each axis, ensuring smooth and precise control. The joystick includes a comfortable grip and an ergonomic design, making it suitable for extended gaming sessions. With 12 programmable buttons and a multi-directional hat switch, it provides extensive customization options for various flight simulations. The T.16000M is compatible with both PC and PlayStation systems, making it a versatile choice for aviation enthusiasts and gamers looking for an authentic flying experience.' 
    },
    { 
        id: 90, 
        name: 'Logitech Driving Force Racing Wheel', 
        price: 299.99, 
        image:`${process.env.PUBLIC_URL}/image/Logitech_Driving_Force_Racing_Wheel.jpg`, 
        description: 'is a high-quality racing simulator wheel designed for immersive and realistic driving experiences. Featuring a force feedback mechanism, it provides a true-to-life feel with responsive feedback that simulates the road and terrain, enhancing the overall driving experience. The wheel has a comfortable rubber grip and a 900-degree rotation, allowing for precise control during sharp turns. Equipped with a set of responsive pedals, including an adjustable brake pedal for added realism, it is compatible with a wide range of racing games on PC and consoles. Its sturdy construction and customizable settings make the Logitech Driving Force Racing Wheel an excellent choice for racing enthusiasts seeking authenticity and performance.' 
    },
    { 
        id: 91, 
        name: 'HP Omen 15 Gaming Laptop', 
        price: 1299.99, 
        image:`${process.env.PUBLIC_URL}/image/HP_Omen_15_Gaming_Laptop.png`, 
        description: 'strikes a balance between performance and portability, making it an excellent choice for gamers on the go. Equipped with powerful Intel Core processors and NVIDIA GeForce GTX or RTX graphics, it delivers smooth gameplay and fast multitasking capabilities. The 15.6-inch display features options for Full HD or 4K resolution with high refresh rates for immersive visuals. With a sleek design, customizable RGB keyboard, and effective cooling system, the Omen 15 ensures an enjoyable gaming experience without compromising style or performance.' 
    },
    { 
        id: 92, 
        name: 'Razer Blade 15 Advanced Gaming Laptop', 
        price: 1599.99, 
        image:`${process.env.PUBLIC_URL}/image/Razer_Blade_15_Advanced_Gaming_Laptop.jpg`, 
        description: 'The Razer Blade 15 Advanced Gaming Laptop combines powerful performance with a sleek, portable design, making it ideal for gamers on the go. Equipped with the latest Intel processors and NVIDIA GeForce RTX graphics, it delivers exceptional speed and stunning visuals for an immersive gaming experience. The high-refresh-rate display, customizable RGB keyboard, and robust cooling system enhance gameplay while maintaining a premium feel, solidifying the Razer Blade 15 as a top choice for serious gamers.' 
    },
    { 
        id: 93, 
        name: 'Hollow Knight: Silksong', 
        price: 19.99, 
        image:`${process.env.PUBLIC_URL}/image/image_84.jpg`, 
        description: 'is a highly anticipated sequel to Hollow Knight, featuring new gameplay mechanics and a new protagonist. Players explore a new world filled with challenges and secrets.' 
    },
    { 
        id: 94, 
        name: 'Corsair Vengeance i7200 Gaming PC', 
        price: 2199.99, 
        image:`${process.env.PUBLIC_URL}/image/Corsair_Vengeance_i7200_Gaming_PC.jpg`, 
        description: 'is a premium device designed for serious gamers and creators, combining sleek aesthetics with powerful performance. Featuring the latest Intel Core processors and NVIDIA GeForce RTX graphics, it delivers exceptional gaming and multitasking capabilities. The 15.6-inch display offers options for Full HD or 4K resolution, with high refresh rates for stunning visuals. Its compact aluminum chassis is both durable and lightweight, while customizable RGB lighting adds a personal touch. With advanced cooling technology, the Blade 15 ensures peak performance during intense gaming sessions.' 
    },
    { 
        id: 95, 
        name: 'CyberPowerPC Gamer Supreme Liquid Cool Gaming PC', 
        price: 1599.99, 
        image:`${process.env.PUBLIC_URL}/image/CyberPowerPC_Gamer_Supreme_Liquid__Cool_Gaming_PC.jpg`, 
        description: 'is a high-performance machine designed for gamers and content creators who demand top-tier specifications. Equipped with powerful Intel Core processors and NVIDIA GeForce RTX graphics, it delivers seamless gameplay and impressive rendering capabilities. The customizable RGB lighting adds a stylish flair to its sleek chassis, while the advanced cooling system ensures optimal performance during intense sessions. With ample storage options and expandability, the Vengeance i7200 is ideal for those looking to elevate their gaming and productivity experience.' 
    },
    { 
        id: 96, 
        name: 'NZXT H510 Elite Gaming PC Case', 
        price: 149.99, 
        image:`${process.env.PUBLIC_URL}/image/NZXT_H510_Elite_Gaming_PC_Case.jpg`, 
        description: 'combines modern aesthetics with functional design, making it an excellent choice for gamers and PC builders. Featuring a tempered glass front and side panels, it showcases your components beautifully while providing excellent airflow. The case supports efficient cable management, ensuring a clean and organized build. With ample space for cooling solutions and multiple drive bays, the H510 Elite is versatile and easy to work with. Its sleek design and customizable RGB lighting options add a stylish touch to any gaming setup.' 
    },
    { 
        id: 97, 
        name: 'Cooler Master MasterBox Q300L Gaming PC Case', 
        price: 59.99, 
        image:`${process.env.PUBLIC_URL}/image/Cooler_Master_MasterBox_Q300L_Gaming_PC_Case.jpg`, 
        description: 'is a compact and versatile option designed for gamers and PC builders seeking efficiency and style. Featuring a minimalist design with a mesh front panel for optimal airflow, it ensures effective cooling for your components. The case supports customizable RGB lighting and offers a modular layout for easy upgrades and cable management. With ample space for additional fans and storage options, the Q300L is perfect for building a powerful gaming rig in a compact footprint, making it an excellent choice for any setup.' 
    },
    { 
        id: 98, 
        name: 'Fractal Design Meshify C Gaming PC Case', 
        price: 99.99, 
        image:`${process.env.PUBLIC_URL}/image/Fractal_Design_Meshify_C_Gaming_PC_Case.jpg`, 
        description: 'is engineered for optimal airflow and efficient cooling, making it ideal for high-performance builds. Its sleek, angular mesh front panel enhances ventilation while providing a striking aesthetic. The spacious interior supports a variety of components, including large GPUs and multiple cooling options, while its cable management features keep your build tidy. With a tempered glass side panel showcasing your setup, the Meshify C combines functionality with style, making it a top choice for gamers and enthusiasts alike.' 
    },
    { 
        id: 99, 
        name: 'Corsair RM850x 850W Power Supply', 
        price: 139.99, 
        image:`${process.env.PUBLIC_URL}/image/Corsair_RM850x_850W_Power_Supply.jpg`, 
        description: 'is a high-performance unit designed for gamers and PC builders seeking reliability and efficiency. Featuring a fully modular design, it allows for easy cable management and customization, reducing clutter in your build. With an 80 PLUS Gold certification, it ensures excellent energy efficiency and lower power consumption. The RM850x operates quietly with a zero RPM fan mode, providing silent cooling during light loads. Its durable components and comprehensive protection features make it a trustworthy choice for powering demanding gaming rigs and high-performance systems.' 
    },
    { 
        id: 100, 
        name: 'EVGA SuperNOVA 750 G5 Power Supply', 
        price: 129.99, 
        image: `${process.env.PUBLIC_URL}/image/EVGA_SuperNOVA_750_G5_PowerSupply.jpeg`, 
        description: 'is a reliable and efficient choice for gamers and PC builders. With an 80 PLUS Gold certification, it delivers high efficiency and lower energy costs. The fully modular design allows for easy installation and excellent cable management, ensuring a clean and organized build. Equipped with a quiet fan that operates in a zero RPM mode during low loads, it provides silent cooling. With robust protection features and a compact design, the SuperNOVA 750 G5 is perfect for powering high-performance systems with stability and reliability.' 
    }
]



const App = () => {
    const [products] = useState(
        initialProducts.map(product => ({
            ...product,
            discountedPrice: (product.price * 0.80).toFixed(2), // Apply a 20% discount
        }))
    );
    const [cart, setCart] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [minPrice, setMinPrice] = useState(0); // State for minimum price filter
    const [filterOrder, setFilterOrder] = useState('asc'); // State for filtering order (ascending or descending)
    const [showTopTen, setShowTopTen] = useState(false); // State to control showing top ten products

    // Function to add item to cart
    const addToCart = (product) => {
        setCart([...cart, product]);
        closeModal(); // Close modal after adding to cart
    };

    // Function to remove item from cart
    const removeFromCart = (productToRemove) => {
        setCart(cart.filter(product => product.id !== productToRemove.id));
    };

    // Function to clear the cart
    const clearCart = () => {
        setCart([]);
    };

    // Function to open modal with product information
    const openModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    // Function to close modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    // Filter products based on minimum price and order
    const filteredProducts = products
        .filter(product => parseFloat(product.discountedPrice) >= minPrice)
        .sort((a, b) => filterOrder === 'asc' ? a.discountedPrice - b.discountedPrice : b.discountedPrice - a.discountedPrice);

    // Combined filter and sort options
    const handleSelectChange = (e) => {
        const value = e.target.value;

        // Update showTopTen based on selected value
        if (value.includes('Top 10')) {
            setShowTopTen(true);
        } else {
            setShowTopTen(false);
        }

        // Update sorting order and minimum price
        if (value.includes('Ascending')) {
            setFilterOrder('asc');
        } else if (value.includes('Descending')) {
            setFilterOrder('desc');
        }

        const priceValue = value.match(/(\d+)/); // Extract price from the selected option
        if (priceValue) {
            setMinPrice(parseFloat(priceValue[0]));
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <main className="flex-grow mx-auto px-1 py-8 pt-20"> {/* Added padding-top for navbar */}
                <div className="flex flex-col mb-4">
                <label className="text-gray-800 font-medium text-lg mt-3">Options:</label> {/* Added mt-2 for margin */}
                    <select
                        onChange={handleSelectChange}
                        className="border border-gray-300 rounded-lg px-4 py-2"
                    >
                        <option value="All - Ascending $0">Show All - Lowest to Highest</option>
                        <option value="Top 10 - Descending $0">Show Top 10 - Highest to Lowest</option>
                    </select>
                </div>
                <div className="flex flex-grow justify-between">
                    <div id="product-list" className="flex flex-wrap w-full">
                        {(showTopTen ? filteredProducts.slice(0, 10) : filteredProducts).map(product => (
                            <div
                                key={product.id}
                                className="bg-white p-4 shadow-lg rounded-lg m-4 flex flex-col items-center transition-transform transform hover:scale-105 w-64"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-auto object-contain mb-4 rounded-lg shadow-md cursor-pointer"
                                    onClick={() => openModal(product)}
                                />
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
                                <p className="text-gray-600">Original Price: <span className="line-through text-red-500">${product.price}</span></p>
                                <p className="text-green-500 font-bold text-lg">Discounted Price: ${product.discountedPrice}</p>
                                <button
                                    onClick={() => addToCart(product)}
                                    className="bg-blue-600 text-white px-6 py-2 rounded-lg mt-4 hover:bg-blue-700 transition-colors duration-300"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="w-1/4">
                        <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />
                    </div>
                </div>

                {isModalOpen && (
                    <Modal product={selectedProduct} onClose={closeModal} addToCart={addToCart} />
                )}
            </main>

            <Footer className="mt-auto" />
        </div>
    );
};

const Cart = ({ cart, removeFromCart, clearCart }) => {
    const total = cart.reduce((acc, item) => acc + parseFloat(item.discountedPrice), 0);

    return (
        <div className="flex justify-end mt-4">
            <div
                className="cart bg-white rounded-lg shadow-lg relative"
                style={{ width: '400px', height: '600px', padding: '24px' }} // Set width and fixed height
            >
                <h2 className="text-lg font-semibold text-gray-800">Shopping Cart</h2>
                <div className="cart-items" style={{ height: 'calc(100% - 100px)', overflowY: 'auto' }}>
                    {cart.length === 0 ? (
                        <p className="text-gray-600">Your cart is empty.</p>
                    ) : (
                        cart.map(item => (
                            <div key={item.id} className="flex justify-between items-center my-2 border-b border-gray-300 pb-2">
                                <span className="text-gray-700">
                                    {item.name} - <span className="font-semibold">${item.discountedPrice}</span>
                                </span>
                                <button
                                    onClick={() => removeFromCart(item)}
                                    className="bg-red-500 text-white px-2 rounded hover:bg-red-600 transition"
                                >
                                    Remove
                                </button>
                            </div>
                        ))
                    )}
                </div>
                {cart.length > 0 && (
                    <div className="flex flex-col mt-4">
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-lg">
                                Total: <span className="text-green-600">${total.toFixed(2)}</span>
                            </span>
                        </div>
                        <div className="flex">
                            <button
                                onClick={clearCart}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition mr-2"
                            >
                                Clear Cart
                            </button>
                            <Link to="/checkout">
                                <button
                                    className="bg-green-500 text-white px-10 py-2 rounded hover:bg-green-700 transition"
                                >
                                    Checkout
                                </button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const Modal = ({ product, onClose, addToCart }) => {
    if (!product) return null;

    return (
        <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-lg w-1/2">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <div className="flex">
                    <img src={product.image} alt={product.name} className="w-1/3 h-auto mb-4" />
                    <div className="ml-4 flex-grow">
                        <p>Original Price: <span className="line-through">${product.price}</span></p>
                        <p>Discounted Price: ${product.discountedPrice}</p>
                        <p>{product.description}</p>
                        <button 
                            onClick={() => { addToCart(product); onClose(); }} // Ensure modal closes after adding to cart
                            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                        >
                            Add to Cart
                        </button>
                        <button 
                            onClick={onClose} 
                            className="bg-gray-500 text-white px-4 py-2 rounded ml-2 mt-4"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
export { initialProducts }; // Exporting initialProducts for testing
export { Cart }; // Exporting Cart component for testing
