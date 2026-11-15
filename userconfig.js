// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Berlin",
    scale: "C",
    // Optional OpenWeatherMap API key, get a free one at https://openweathermap.org/api
    // Leave empty to keep the placeholder and skip the network request
    appId: "",
  },
  clock: {
    format: "h:i",
    icon_color: palette.maroon,
  },
  additionalClocks: [
    {
      label: "DE",
      timezone: "Europe/Berlin",
      format: "h:i",
      icon_color: palette.peach,
    },
  ],
  search: {
    engines: {
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      ddgh: ["https://html.duckduckgo.com/html?q=", "DuckDuckGo HTML"],
      kagi: ["https://kagi.com/search?q=", "Kagi"],
      pdb: ["https://www.protondb.com/search?q=", "ProtonDB"],
      np: ["https://search.nixos.org/packages?query=", "Nix Packages"],
      no: ["https://search.nixos.org/options?query=", "Nix Options"],
      nw: ["https://wiki.nixos.org/w/index.php?search=", "NixOS Wiki"],
      hm: ["https://home-manager-options.extranix.com/?query=", "Home Manager"],
      mn: ["https://mynixos.com/search?q=", "MyNixOS"],
      ng: ["https://noogle.dev/q?term=", "Noogle"],
      ghc: ["https://github.com/search?type=code&q=", "GitHub Code"],
      ghr: ["https://github.com/search?type=repositories&q=", "GitHub Repositories"],
      alw: ["https://wiki.archlinux.org/index.php?search=", "ArchWiki"],
    },
    default: "d",
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: ["weather-forecast"],
  localIcons: true,
  localFonts: true,
  fastlink: "https://www.tomhesse.xyz",
  openLastVisitedTab: false,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/banner_11.gif",
      categories: [
        {
          name: "workspace",
          links: [
            {
              name: "mailbox.org",
              url: "https://login.mailbox.org/",
              icon: "mail",
              icon_color: palette.green,
            },
            {
              name: "cloud",
              url: "https://cloud.shrimphouse.xyz",
              icon: "brand-nextcloud",
              icon_color: palette.peach,
            },
            {
              name: "raindrop",
              url: "https://app.raindrop.io",
              icon: "droplet-bolt",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "music",
          links: [
            {
              name: "spotify",
              url: "https://open.spotify.com/",
              icon: "brand-spotify",
              icon_color: palette.green,
            },
            {
              name: "last.fm",
              url: "https://www.last.fm",
              icon: "antenna-bars-5",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "news",
          links: [
            {
              name: "tagesschau",
              url: "https://www.tagesschau.de",
              icon: "news",
              icon_color: palette.green,
            },
            {
              name: "heise",
              url: "https://www.heise.de",
              icon: "device-desktop",
              icon_color: palette.peach,
            },
            {
              name: "golem",
              url: "https://www.golem.de",
              icon: "terminal-2",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/banner_07.gif",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
          ],
        },
        {
          name: "nixos",
          links: [
            {
              name: "nix.dev",
              url: "https://nix.dev",
              icon: "snowflake",
              icon_color: palette.green,
            },
            {
              name: "nixos wiki",
              url: "https://wiki.nixos.org",
              icon: "books",
              icon_color: palette.peach,
            },
            {
              name: "noogle",
              url: "https://noogle.dev",
              icon: "search",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: palette.green,
            },
            {
              name: "cncf blog",
              url: "https://www.cncf.io/blog",
              icon: "cloud",
              icon_color: palette.peach,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/banner_01.gif",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "reddit",
              url: "https://www.reddit.com/r/unixporn",
              icon: "brand-reddit",
              icon_color: palette.green,
            },
            {
              name: "discord",
              url: "https://discord.com/app",
              icon: "brand-discord",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "gaming",
          links: [
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.green,
            },
            {
              name: "protondb",
              url: "https://www.protondb.com",
              icon: "certificate",
              icon_color: palette.peach,
            },
            {
              name: "osu!",
              url: "https://osu.ppy.sh",
              icon: "circle",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "entertainment",
          links: [
            {
              name: "anilist",
              url: "https://anilist.co/home",
              icon: "brand-funimation",
              icon_color: palette.green,
            },
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.peach,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.blue);
