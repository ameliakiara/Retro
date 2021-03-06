export const dev: string[] = ["441958036362493962", "497336267252432897"];
export const nodes: { host: string; port: number; password: string }[] = [
  { host: "localhost", port: 6666, password: "password" },
];
export const clientID: string = process.env.clientID;
export const clientSecret: string = process.env.clientSecret;
export const settings = {
  COMMENT: "time_delay 0 === insta leave",
  progressbar_emoji: "đļ",
  leaveOnEmpty_Channel: { enable: true, time_delay: 60000 },
  LeaveOnEmpty_Queue: { enable: true, time_delay: 30000 },
  selfDef: true,
  serverDef: true,
};
export const embed = {
  color: "#8106f6",
  wrongcolor: "#e01e01",
  footertext: "RaRNime | powered by kiara.pw",
  footericon:
    "https://cdn.discordapp.com/attachments/891235330735366164/891387071376269342/amelia_corp.png",
};
export const emoji = {
  react: {
    COMMENT:
      "IF YOU DECIDE TO USE CUSTOM EMOJIS, USE JUST THE ID IN REACT, EXAMPLE: âĒ --> 818558865268408341",
    ERROR: "â",
    SUCCESS: "â",
    rewind: "âĒ",
    forward: "âŠ",
    pause_resume: "â¯ī¸",
    stop: "âšī¸",
    previous_track: "âŽī¸",
    skip_track: "â­ī¸",
    replay_track: "đ",
    reduce_volume: "đ",
    raise_volume: "đ",
    toggle_mute: "đ",
    repeat_mode: "đ",
    autoplay_mode: "âž",
    shuffle: "đ",
    show_queue: "đ",
    show_current_track: "đŠ¸",
  },
  msg: {
    COMMENT:
      "IF YOU DECIDE TO USE CUSTOM EMOJIS, USE THE NAME AND THE ID IN MSG, EXAMPLE: âŦ --> <:progressbar_left_filled:818558865268408341>",
    ERROR: "â",
    SUCCESS: "â",
    disabled: "â",
    enabled: "â",
    progress_bar: {
      leftindicator: "[",
      rightindicator: "]",
      emptyframe: "âŦ",
      filledframe: "đ§",
    },
    playing: "đļ",
    pruning: "đŦ",
    equalizer: "đ",
    cleared: "đ",
    leave_on_empty: "đŖī¸",
    time: "â",
    premium: "đ°",
    song_by: "đ¯",
    setup: "âī¸",
    dj: "đ§",
    bot: "đ¤",
    search: "đ",
    resume: "âļ",
    pause: "â¸",
    lyrics: "đ",
    disk: "đ",
    ping: "đ",
    rewind: "âĒ",
    forward: "âŠ",
    pause_resume: "â¯ī¸",
    stop: "âšī¸",
    previous_track: "âŽī¸",
    skip_track: "â­ī¸",
    replay_track: "đ",
    reduce_volume: "đ",
    raise_volume: "đ",
    toggle_mute: "đ",
    repeat_mode: "đ",
    autoplay_mode: "âž",
    shuffle: "đ",
    show_queue: "đ",
    show_current_track: "đŠ¸",
  },
};
export const songoftheday = { track: { url: "https://www.youtube.com/watch?v=gADgM89skZQ", title: "Tones and I - Dance Monkey (Lyrics)", duration: "03:29 | 209 Seconds", thumbnail: "https://img.youtube.com/vi/gADgM89skZQ/default.jpg"}, message: "Today It's a masterpeace which gives you happyness and old feelings."};