export type Skill = {
  name: string;
  difficultyLevel: 'Beginner' | 'Intermediate' | 'Advanced';
};

export type ParkourSkills = {
  vaults: Skill[];
  bar: Skill[];
  wall: Skill[];
  jump: Skill[];
};

export const PARKOUR_SKILLS: ParkourSkills = {
  vaults: [
    { name: 'Speed Vault', difficultyLevel: 'Beginner' },
    { name: 'Kong Vault', difficultyLevel: 'Intermediate' },
    { name: 'Dash Vault', difficultyLevel: 'Intermediate' },
    { name: 'Lazy Vault', difficultyLevel: 'Beginner' },
    { name: 'Thief Vault', difficultyLevel: 'Intermediate' },
    { name: 'Reverse Vault', difficultyLevel: 'Advanced' },
    { name: 'Underbar Vault', difficultyLevel: 'Intermediate' },
    { name: 'Pop Vault', difficultyLevel: 'Beginner' },
    { name: 'Kash Vault', difficultyLevel: 'Advanced' },
    { name: 'Turn Vault', difficultyLevel: 'Intermediate' },
  ],
  bar: [
    { name: 'Muscle Up', difficultyLevel: 'Intermediate' },
    { name: 'Swing 360', difficultyLevel: 'Advanced' },
    { name: 'Bar Hop', difficultyLevel: 'Beginner' },
    { name: 'Underbar', difficultyLevel: 'Intermediate' },
    { name: 'Pull-over', difficultyLevel: 'Intermediate' },
    { name: 'Giant Swing', difficultyLevel: 'Advanced' },
    { name: 'Bar Spin', difficultyLevel: 'Advanced' },
    { name: 'Bar Catch', difficultyLevel: 'Intermediate' },
    { name: 'One Arm Pull-up', difficultyLevel: 'Advanced' },
    { name: 'Front Lever', difficultyLevel: 'Advanced' },
  ],
  wall: [
    { name: 'Wall Run', difficultyLevel: 'Beginner' },
    { name: 'Wall Spin', difficultyLevel: 'Intermediate' },
    { name: 'Tic Tac', difficultyLevel: 'Beginner' },
    { name: 'Cat Leap', difficultyLevel: 'Intermediate' },
    { name: 'Wall Flip', difficultyLevel: 'Advanced' },
    { name: 'Palm Spin', difficultyLevel: 'Intermediate' },
    { name: 'Wall Handstand', difficultyLevel: 'Advanced' },
    { name: 'Wall Climb-up', difficultyLevel: 'Intermediate' },
    { name: 'Wall Pop', difficultyLevel: 'Intermediate' },
    { name: 'Dyno', difficultyLevel: 'Advanced' },
  ],
  jump: [
    { name: 'Precision Jump', difficultyLevel: 'Beginner' },
    { name: 'Arm Jump', difficultyLevel: 'Intermediate' },
    { name: 'Striding', difficultyLevel: 'Beginner' },
    { name: 'Plyo Jump', difficultyLevel: 'Intermediate' },
    { name: 'Depth Jump', difficultyLevel: 'Intermediate' },
    { name: 'Standing Long Jump', difficultyLevel: 'Beginner' },
    { name: 'Running Jump', difficultyLevel: 'Intermediate' },
    { name: 'Split-foot Jump', difficultyLevel: 'Intermediate' },
    { name: 'Tuck Jump', difficultyLevel: 'Beginner' },
    { name: 'Double Kong Jump', difficultyLevel: 'Advanced' },
  ],
};
