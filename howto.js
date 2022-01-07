/*
  First Of All, Go To Your Main [index.js] File,
  2 -  Go To The Options.js File
  [node_modules/discord.js/src/utl/Options.js]
  3 - CTRL + F For [$browser]
  4 - Then Copy The Steps Below
  Nethod Fixed By ! EssaPrime#0001
 */
 
 ws: {
  large_threshold: 50,
  compress: false,
  properties: {
    $os: process.platform,
    $browser: 'discord.js',
    $device: 'discord.js',
   },
   version: 9,
},

// Change This To

 ws: {
  large_threshold: 50,
  compress: false,
  properties: {
    $os: process.platform,
    $browser: 'Discord Android',
    $device: 'discord.js',
   },
   version: 9,
}
