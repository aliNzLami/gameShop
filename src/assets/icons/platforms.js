import xbox from "./iconPics/x.png";
import playStation from "./iconPics/ps.png";
import windows from "./iconPics/windows.png";
import nintendo from "./iconPics/nintendo.png";
import android from "./iconPics/android.png";
import apple from "./iconPics/apple.png";
import linux from "./iconPics/linux.png";

export const platforms = {
    ps1: {name: "Play Station 1", icon: playStation, nature: "playStation", _id: "ps1"},
    ps2: {name: "Play Station 2", icon: playStation, nature: "playStation", _id: "ps2"},
    ps3: {name: "Play Station 3", icon: playStation, nature: "playStation", _id: "ps3"},
    ps4: {name: "Play Station 4", icon: playStation, nature: "playStation", _id: "ps4"},
    ps5: {name: "Play Station 5", icon: playStation, nature: "playStation", _id: "ps5"},
    psp: {name: "Play Station Portable", icon: playStation, nature: "playStation", _id: "psp"},
    psVita: {name: "Play Station Vita", icon: playStation, nature: "playStation", _id: "psVita"},

    windows: {name: "Microsoft Windows", icon: windows, nature: "windows", _id: "windows"},
    linux: {name: "Linux", icon: linux, nature: "linux", _id: "linux"},
    mac: {name: "MacOS", icon: apple, nature: "mac", _id: "mac"},

    xbox: {name: "Xbox", icon: xbox, nature: "xbox", _id: "xbox"},
    xbox360: {name: "Xbox 360", icon: xbox, nature: "xbox", _id: "xbox360"},
    xboxOne: {name: "Xbox One", icon: xbox, nature: "xbox", _id: "xboxOne"},
    xbox_xs: {name: "Xbox Series X/S", icon: xbox, nature: "xbox", _id: "xbox_xs"},

    nintendo64: {name: "Nintendo 64", icon: nintendo, nature: "nintendo", _id: "nintendo64"},
    gameboy_color: {name: "Game Boy Color", icon: nintendo, nature: "nintendo", _id: "gameboy_color"},
    gameboy_advance: {name: "Game Boy Advance", icon: nintendo, nature: "nintendo", _id: "gameboy_advance"},
    gameCube: {name: "GameCube", icon: nintendo, nature: "nintendo", _id: "gameCube"},
    nintendo_ds: {name: "Nintendo DS", icon: nintendo, nature: "nintendo", _id: "nintendo_ds"},
    nintendo_3ds: {name: "Nintendo 3DS", icon: nintendo, nature: "nintendo", _id: "nintendo_3ds"},
    nintendo_switch: {name: "Nintendo Switch", icon: nintendo, nature: "nintendo", _id: "nintendo_switch"},
    nintendo_switch2: {name: "Nintendo Switch 2", icon: nintendo, nature: "nintendo", _id: "nintendo_switch2"},

    android: {name: "Android", icon: android, nature: "android", _id: "android"},
    ios: {name: "iOS", icon: apple, nature: "ios", _id: "ios"},

}