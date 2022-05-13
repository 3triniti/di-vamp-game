const GRID_SIZE = 16;
const CELL_SIZE = 16;
const DIRECTIONS = {
    ArrowLeft: {
        Code: 37,
        Movement: -1,
    },
    ArrowUp: {
        Code: 38,
        Movement: -GRID_SIZE, 
    },
    ArrowRight: {
        Code: 39,
        Movement: 1,
    },
    ArrowDown: {
        Code: 40,
        Movement: GRID_SIZE,
    }
};

    const OBJECT_TYPE = {
        BLANK: 'blank',
        WALL: 'wall',
        VAMPIRE1: 'vampire1',
        VAMPIRE2: 'vampire2',
        VAMPIRE3: 'vampire3',
        PERSON: 'person',
        PLAYER: 'dayWalker',
        VAMPIRELAIR: 'lair',
        LIGHT: 'light',
        SCARED: 'scared'
    };

    // Lookup Array for classes
    const Class_List = [
        OBJECT_TYPE.BLANK,
        OBJECT_TYPE.WALL,
        OBJECT_TYPE.VAMPIRE1,
        OBJECT_TYPE.VAMPIRE2,
        OBJECT_TYPE.VAMPIRE3,
        OBJECT_TYPE.PERSON,
        OBJECT_TYPE.DAYWALKER,
        OBJECT_TYPE.LAIR,
        OBJECT_TYPE.LIGHT,
        OBJECT_TYPE.SCARED,
    ];

    // Prettier-ignore
    const Level1 = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 5, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 8, 1,
        1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 
        1, 1, 1, 0, 0, 0, 7, 7, 7, 7, 0, 0, 1, 1, 1, 1, 
        1, 8, 0, 1, 1, 0, 7, 7, 7, 7, 0, 0, 0, 0, 5, 1, 
        1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 
        1, 1, 1, 1, 0, 1, 1, 1, 6, 1, 1, 1, 1, 1, 0, 1, 
        1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 
        1, 5, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 8, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ]

}

