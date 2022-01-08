/*
  1 -  Go To The Options.js File, Usually In The Path Below
  [node_modules/discord.js/src/util/Options.js]
  2 - CTRL + F For [$browser]
  3 - Then Copy The Steps Below
  Method Fixed And Improved By ! EssaPrime#0001
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
