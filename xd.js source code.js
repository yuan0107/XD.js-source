//Some words from the original author @zxsleebu
//"pls, if you have the source code and seeing this comment,
//don't remove any comments, cuz i wanna to be in a history
//if you will obfuscate it pls specify me in comment before a code
//huge thanks
//i think this cord will be popular asf
//but rn it's only my dreams
//yes, i pasted, but many features were created and modded by me
//when i created it, i thought, would it be free, or paid
//if you paid me even 1$, very big thanks to you
//i wanna buy a new pc"
//give him some love and money at https://qiwi.com/n/sleebu
//His telegram: @zxsleebu
//His instagram: @zxsleebu
//His discord : Sleebu#0448

var name_text = "XD.js";
var last_upd = "never";
var version = "69.420";
var width = 494;
var height = 330;

//Set to true, if you want to get debug logs
var debug = false;

//Positioning and UI look
var subtabs_width = width - (14 * 2);
const tab_margin = 5;
const tab_width = 76;
const header_radius = 3;
const element_margin_bottom = 11;
const checkbox_height = 13;
const checkbox_width = 12;
const box_margin_top = 22;
const box_margin_bottom = 3;
const box_margin_x = 8;
const box_text_margin_x = 29;
const slider_height = 8;
const slider_text_margin = 9;
const list_height = 18;
const res = [1080, 1024, 960, 900, 864, 768, 720];

//Colors
const line_color = [55, 59, 66, 255];
const bright_line_color = [227, 186, 105, 255];
const subtab_text_color = [78, 81, 88, 255];
const background_color = [44, 48, 55, 255];
const tab_active_color = [34, 37, 42, 255];
const text_color = [220, 223, 230, 255];
const element_color = [31, 33, 37, 255];
const element_border_color = [37, 39, 44, 255];
const element_border_color2 = [56, 60, 67, 255];
const element_active_color = [217, 157, 86, 255];
const hintbox_color = [32, 34, 39, 255];
const white_color = [255, 255, 255, 255];
const list_text_color = [239, 239, 239, 255];
const shadow_color = [0, 0, 0, 150];

//Fonts
var menu_font = 0;
var icon_font = 0;
var subtabs_font = 0;
var text_icon_font = 0;
var list_font = 0;

//Predefining variables
var screen_size = Render.GetScreenSize();
var cursor_pos = Input.GetCursorPosition();
var canCrouch = false;
var crouchTime = 0;
var selected_tab = 0;
var tab_start = 0;
var box_offsets = [0, 0];
var box_width = 0;
var subtab_start = 0;
var subtab_text_pos = 0;
var tab_colors = [0, 0, 0, 0];
var old_cursor = [0, 0];
var is_pressed = false;
var is_moving = false;
var click_block = false;
var subtabs_names = {};
var checkboxes = [];
var selected_subtabs = {};
var checkbox_alpha = {};
var hint_text = "";
var hint_x = 0;
var hint_y = 0;
var hint_size = 0;
var show_items = false;
var slider_changing = false;
var settingsAreLoaded = false;
var player_list = [];
var force_lethal = false;
var stored = false;
var x_offs = 0;
var y_offs = 0;
var dragging = false;
var delays = [];
var worder = [2, 1, 3, 4, 5, 6, 7, 8, 9];
var shots = 0;
var predicthc = 0;
var safety = 0;
var hitboxName = "";
var choked = 0;
var exploit = 0;
var logs = [];
var logsct = [];
var logsalpha = [];
var target = -1;
var shots_fired = 0;
var hits = 0;
var lastUpdate = 0;
var logged = false;
var isInverted;
var invertedLean;
var bodyLean;
var isInverted;

function log(string) {
    (debug) && Cheat.Print("[DEBUG] " + string + "\n")
}
(debug) && Cheat.ExecuteCommand("showconsole");
Cheat.ExecuteCommand("-attack2");
log("Initialized log function");

var menu_elements = {
    "Rage": {
        "General": {
            "General": [{
                    "type": "checkbox",
                    "name": "Dormant Aimbot",
                    "id": "dormant_aim",
                    "hint": "Cheat will shoot at the Dormant ESP when pressing a hotkey"
                },
                {
                    "type": "checkbox",
                    "name": "Auto peek helper",
                    "id": "auto_peek",
                    "hint": "It will automatically turn on doubletap,\nfreestanding, mindamage and force baim\nwhen auto peek keybind is activated.\nBind \"Force body aim\" to toggle on any key\nto make this function work"
                },
                {
                    "type": "checkbox",
                    "name": "Safe AWP",
                    "id": "safe_awp",
                    "hint": "Bind \"Force safe point\" to toggle on any key\nto make this function work"
                },
                //{"type": "checkbox", "name": "Safe point on limbs", "id": "safe_limbs", "hint": "Forces safe points on legs, feet and arms"},
                {
                    "type": "checkbox",
                    "name": "Jumpscout",
                    "id": "jumpscout",
                    "hint": "Sets scout hitchance to 40 in air"
                },
                {
                    "type": "checkbox",
                    "name": "Adaptive noscope",
                    "id": "adaptive_noscope",
                    "hint": "No auto scope on auto and scout\nif target is less than 7 meters away"
                },
                {
                    "type": "checkbox",
                    "name": "Predictive autoscope",
                    "id": "predictive_autoscope",
                    "hint": "Improve scoping time of OTC3"
                },
                {
                    "type": "checkbox",
                    "name": "Safety after x misses",
                    "id": "safety_misses",
                    "hint": "Safer targeting after a number of misses"
                },
                {
                    "type": "checkbox",
                    "name": "Predict targeted hitbox",
                    "id": "pred_target",
                    "hint": "This feature might do nothing at all."
                },
                //{"type": "checkbox", "name": "Lethal safety", "id": "lethal_safety", "hint": "Forces baim or safe points when target is lethal.\nBind \"Force body aim\" to toggle on any key\nto make this function work"},
            ],
            "Min-DMG override": [{
                    "type": "checkbox",
                    "name": "Enabled",
                    "id": "mindamage"
                },
                {
                    "type": "checkbox",
                    "name": "Advanced",
                    "id": "mindamage_advanced",
                    "master": "mindamage"
                },
                {
                    "type": "slider",
                    "name": "Override value",
                    "id": "mindamage_hp",
                    "min": 1,
                    "max": 130,
                    "default": 5,
                    "master": "mindamage"
                },
                {
                    "type": "slider",
                    "name": "Pistol override value",
                    "id": "mindamage_hp_pistol",
                    "min": 1,
                    "max": 130,
                    "default": 5,
                    "master": "mindamage_advanced"
                },
                {
                    "type": "slider",
                    "name": "Revolver override value",
                    "id": "mindamage_hp_revolver",
                    "min": 1,
                    "max": 130,
                    "default": 10,
                    "master": "mindamage_advanced"
                },
                {
                    "type": "slider",
                    "name": "Scout override value",
                    "id": "mindamage_hp_scout",
                    "min": 1,
                    "max": 130,
                    "default": 5,
                    "master": "mindamage_advanced"
                },
                {
                    "type": "slider",
                    "name": "AWP override value",
                    "id": "mindamage_hp_awp",
                    "min": 1,
                    "max": 130,
                    "default": 15,
                    "master": "mindamage_advanced"
                },
                {
                    "type": "slider",
                    "name": "Autosniper override value",
                    "id": "mindamage_hp_auto",
                    "min": 1,
                    "max": 130,
                    "default": 5,
                    "master": "mindamage_advanced"
                },
            ],
            "Other": [{
                    "type": "checkbox",
                    "name": "Wait for on-shot",
                    "id": "force_backshoot"
                },
                {
                    "type": "checkbox",
                    "name": "Ping spike",
                    "id": "ping_spike"
                },
                {
                    "type": "checkbox",
                    "name": "Custom zeus hitchance",
                    "id": "zeus_hitchance_enabled"
                },
                {
                    "type": "slider",
                    "name": "Hitchance",
                    "id": "zeus_hitchance",
                    "min": 0,
                    "max": 100,
                    "append": "%",
                    "default": 70,
                    "master": "zeus_hitchance_enabled"
                }
            ],
            "Doubletap": [{
                    "type": "checkbox",
                    "name": "DT recharge boost",
                    "id": "doubletap_boost",
                    "hint": "Improve recharge time for doubletap"
                },
                {
                    "type": "checkbox",
                    "name": "Safe point on DT",
                    "id": "dt_safepoint",
                    "hint": "Force safe point on enemies when DT is on"
                },
                {
                    "type": "checkbox",
                    "name": "Prefer baim on DT",
                    "id": "prefer_baim_on_dt",
                    "hint": "Will turn on \"Prefer body aim\"\nif doubletap is active and charged"
                },
                {
                    "type": "checkbox",
                    "name": "Autostop with DT",
                    "id": "dt_autostop",
                    "hint": "Might do nothing at all\nTurning it on won't hurt tho."
                },
                {
                    "type": "checkbox",
                    "name": "Crouch on DT",
                    "id": "crouch_dt",
                    "hint": "Experimental\nMight do nothing at all\nAuto crouch when you double-tap"
                },
                {
                    "type": "checkbox",
                    "name": "Experimental MM DT",
                    "id": "mm_dt",
                    "hint": "Makes doubletap register better\non official Valve servers.\nDoubletap must be enabled\nin OTC3 exploits menu.\nalong side DT recharge boost\nYou can just turn it on,\nit will work only on Valve servers\nMight not do anything at all"
                },
            ]
        },
        "Safety system": {},
        "Player list": {}
    },
    "Anti-Aim": {
        "General": {
            "General": [{
                    "type": "checkbox",
                    "name": "Lowdelta",
                    "id": "lowdelta",
                    "hint": "Makes your head harder to hit"
                },
                {
                    "type": "checkbox",
                    "name": "Opposite on exploits",
                    "id": "opposite_on_exploits",
                    "hint": "Makes opposite AA type works on active exploits.\nMakes DT register a bit worse"
                },
                /*{"type": "checkbox", "name": "Pitch 0 on land", "id": "pitch_zero_on_land"},*/
                {
                    "type": "checkbox",
                    "name": "Legit AA on knife",
                    "id": "antiaim_fix",
                    "hint": "Enable legit AA while holding knife"
                },
                {
                    "type": "checkbox",
                    "name": "Legit AA on key",
                    "id": "legit_aa",
                    "hint": "Override your Anti-Aim with legit AA on key"
                },
                {
                    "type": "checkbox",
                    "name": "Teleport on peek",
                    "id": "teleport_onpeek",
                    "hint": "Makes you teleport when peeking\nUseful against AWPers / 1 way-ers\nCurrently disabled.Re-add and fix it using the source code"
                },
                {
                    "type": "checkbox",
                    "name": "Freestanding on key",
                    "id": "freestanding",
                    "hint": "Puts your head in a safe place"
                }
            ],
            "Fake-Lag": [{
                    "type": "checkbox",
                    "name": "Alternative fake-lag",
                    "id": "alternative_fakelag",
                    "hint": "Makes your fake-lag less predictable"
                },
                {
                    "type": "slider",
                    "name": "Alternative limit",
                    "id": "alternative_limit",
                    "min": 1,
                    "max": 16,
                    "default": 16,
                    "master": "alternative_fakelag"
                },
                {
                    "type": "checkbox",
                    "name": "No revolver fake-lag",
                    "id": "fakelag_fix",
                    "hint": "Helps to prevent R8 shooting at floor"
                }
            ],
            "Auto invert": [{
                    "type": "checkbox",
                    "name": "Invert on shot",
                    "id": "invert_on_shot"
                },
                {
                    "type": "checkbox",
                    "name": "Ideal yaw",
                    "id": "ideal_yaw",
                    "hint": "Ideal yaw makes you peek\nwith your desync turned to enemy.\nIf \"Anti bruteforce\" is on, ideal yaw will be turned off\nafter 1st enemy miss for 3 seconds"
                },
                {
                    "type": "checkbox",
                    "name": "Standing auto inverter",
                    "id": "standing_auto_invert"
                },
                {
                    "type": "checkbox",
                    "name": "Anti bruteforce",
                    "id": "anti_brute",
                    "hint": "Auto-invert your AA when enemy miss a shot"
                }
            ],
            "Animations": [{
                    "type": "checkbox",
                    "name": "Matchmaking FD",
                    "id": "mm_fd",
                    "hint": "Fakeduck created from a sketch.\nYou can use opposite LBY,\nbut your body will jitter and stop sometimes.\nThe best preset for MM is Lower Rage"
                },
                {
                    "type": "checkbox",
                    "name": "Slowmotion",
                    "id": "slowmotion",
                    "hint": "Makes your legs being slow and sliding on slowwalk"
                },
                {
                    "type": "checkbox",
                    "name": "Slowmotion legbreaker",
                    "id": "slowmotion_legbreaker",
                    "hint": "Jitters your legs and body on slowmotion.\nBreaks enemy's animfix.\nLess speed = more jitter",
                    "master": "slowmotion"
                },
                {
                    "type": "slider",
                    "name": "Slowmotion speed",
                    "id": "slowmotion_speed",
                    "min": 5,
                    "max": 70,
                    "default": 45,
                    "master": "slowmotion"
                },
                {
                    "type": "checkbox",
                    "name": "Legbreaker",
                    "id": "legbreaker",
                    "hint": "Spams \"Slide walk\" to make your legs unpredictable\nWorks better with alternative fake-lag"
                }
            ]
        },
        "Custom AA": {
            "General": [{
                "type": "checkbox",
                "name": "Base AA override",
                "id": "base_aa",
                "hint": "Overrides your entire AA\nNot undoable so make a backup of ur config."
            }, ],
            "Rory's Jitter merge": [{
                "type": "checkbox",
                "name": "Enable cycle jitter",
                "id": "rory_jitter",
                "hint": "A merge with a popular jitter script called Rory's Jitter\nPartially merged only."
            }, ],
            "OTv2 body lean": [{
                "type": "checkbox",
                "name": "Enable body lean",
                "id": "body_lean",
                "hint": "Bring back the old OTv2 body lean for fun ig\nNot finished"
            }, ],
        }
    },
    "Visual": {
        "World": {
            "General": [{
                    "type": "checkbox",
                    "name": "Skeleton on hit",
                    "id": "skeleton_on_hit"
                },
                {
                    "type": "checkbox",
                    "name": "Damage marker",
                    "id": "damage_marker"
                },
                {
                    "type": "checkbox",
                    "name": "Enemy eye tracers",
                    "id": "eye_tracers"
                }
            ],
            "Local player": [{
                    "type": "checkbox",
                    "name": "Bullet tracer",
                    "id": "bullet_tracer"
                },
                {
                    "type": "checkbox",
                    "name": "Trail",
                    "id": "trail"
                }
            ],
            "Bloom & FX": [{
                    "type": "checkbox",
                    "name": "World color",
                    "id": "world_color"
                },
                {
                    "type": "slider",
                    "name": "World brightness",
                    "id": "world_brightness",
                    "min": -50,
                    "max": 25
                },
                {
                    "type": "slider",
                    "name": "Model brightness",
                    "id": "model_brightness",
                    "min": 0,
                    "max": 100,
                    "append": "%"
                },
                {
                    "type": "slider",
                    "name": "Bloom scale",
                    "id": "bloom_scale",
                    "min": 0,
                    "max": 100,
                    "append": "%"
                }
            ],
            "Custom fog": [{
                    "type": "checkbox",
                    "name": "Enabled",
                    "id": "custom_fog"
                },
                {
                    "type": "slider",
                    "name": "Distance",
                    "id": "fog_distance",
                    "min": 0,
                    "max": 3000,
                    "master": "custom_fog"
                },
                {
                    "type": "slider",
                    "name": "Distance third person",
                    "id": "fog_distance_3rd",
                    "min": 0,
                    "max": 2500,
                    "visible": false,
                    "master": "custom_fog"
                },
                {
                    "type": "slider",
                    "name": "Density",
                    "id": "fog_density",
                    "min": 0,
                    "max": 100,
                    "master": "custom_fog"
                }
            ]
        },
        "Models": {
            "Better Chams": [{
                    "type": "checkbox",
                    "name": "Enabled",
                    "id": "better_glow_chams"
                },
                {
                    "type": "checkbox",
                    "name": "Hollow",
                    "id": "better_glow_chams_hollow",
                    "master": "better_glow_chams"
                },
                {
                    "type": "checkbox",
                    "name": "Pulse",
                    "id": "better_glow_chams_pulse",
                    "master": "better_glow_chams"
                },
                {
                    "type": "checkbox",
                    "name": "Rainbow",
                    "id": "better_glow_chams_rainbow",
                    "master": "better_glow_chams"
                },
                {
                    "type": "checkbox",
                    "name": "Wireframe",
                    "id": "better_glow_chams_wireframe",
                    "master": "better_glow_chams"
                },
                {
                    "type": "slider",
                    "name": "Vibrancy",
                    "id": "better_glow_chams_vibrancy",
                    "min": 0,
                    "max": 100,
                    "append": "%",
                    "default": 85,
                    "master": "better_glow_chams"
                }
            ],
            "Model changer": [{
                    "type": "checkbox",
                    "name": "Team-based agent changer",
                    "id": "agent_changer",
                    "hint": "Team-based agent changer.\nAPI issue to add new agents, sorry"
                },
                {
                    "type": "checkbox",
                    "name": "Skins color on arms",
                    "id": "arms_color"
                }
            ]
        },
        "Other": {
            "General": [{
                    "type": "checkbox",
                    "name": "Medi-Shot effect on kill",
                    "id": "effect_on_kill"
                },
                {
                    "type": "checkbox",
                    "name": "Rainbow bar",
                    "id": "rainbow_bar"
                },
                //{"type": "checkbox", "name": "Custom out of FOV", "id": "custom_out_of_fov"}
            ],
            "Crosshair": [{
                    "type": "checkbox",
                    "name": "Better scope",
                    "id": "better_scope"
                },
                {
                    "type": "checkbox",
                    "name": "Better crosshair",
                    "id": "better_crosshair"
                },
                {
                    "type": "checkbox",
                    "name": "Better hitmarker",
                    "id": "hitmarker"
                }
            ],
            "Nades": [{
                    "type": "checkbox",
                    "name": "Nade circle",
                    "id": "nade_circle",
                    "hint": "Draws molotov and smoke radius,\nHE grenade explosion visualisation"
                },
                {
                    "type": "checkbox",
                    "name": "Nade tracer",
                    "id": "nade_tracer"
                },
                {
                    "type": "checkbox",
                    "name": "Nade warning",
                    "id": "nade_warning"
                },
                {
                    "type": "checkbox",
                    "name": "Molotov timer",
                    "id": "molotov_timer"
                },
                {
                    "type": "checkbox",
                    "name": "Transparency on nade",
                    "id": "transparency_on_nade",
                    "hint": "Wall and prop transparency\nwhen throwing nade"
                },
            ],
            "Miscellaneous": [{
                    "type": "slider",
                    "name": "Aspect ratio",
                    "id": "aspect_ratio",
                    "min": 0,
                    "max": 300,
                    "append": "%"
                },
                {
                    "type": "checkbox",
                    "name": "Dark menu background",
                    "id": "dark_menu"
                }
            ]
        }
    },
    "Misc": {
        "General": {
            "Miscellaneous": [{
                    "type": "checkbox",
                    "name": "FPS boost",
                    "id": "fps_boost"
                },
                {
                    "type": "checkbox",
                    "name": "Autostrafe fix",
                    "id": "autostrafe_fix"
                },
                {
                    "type": "checkbox",
                    "name": "Zoom fix",
                    "id": "zoom_fix"
                },
                {
                    "type": "checkbox",
                    "name": "Location spammer",
                    "id": "enemy_location",
                    "hint": "Sends enemy location in team chat"
                },
                {
                    "type": "checkbox",
                    "name": "Party mode",
                    "id": "party_mode",
                    "hint": "Make your zeus,chicken kills and bomb defusals happy!"
                },
                {
                    "type": "checkbox",
                    "name": "Custom music kit",
                    "id": "music_kit"
                },
                {
                    "type": "checkbox",
                    "name": "Clantag on peek",
                    "id": "clantag_on_peek",
                    "hint": "Turns on clantag when enemy is peeking"
                },
                {
                    "type": "checkbox",
                    "name": "Clantag",
                    "id": "clantag"
                },
                {
                    "type": "checkbox",
                    "name": "Killsay",
                    "id": "Killsay",
                    "hint": "Say in chat after killing an enemy"
                },
                {
                    "type": "checkbox",
                    "name": "Show useless features",
                    "id": "useless_features"
                },
                {
                    "type": "checkbox",
                    "name": "No buybot in MM",
                    "id": "anti_buybot"
                },
                {
                    "type": "checkbox",
                    "name": "Clear chat",
                    "id": "clear_chat"
                },
                {
                    "type": "checkbox",
                    "name": "Hide chat",
                    "id": "chat_hide",
                    "hint": "Hide all chat messages"
                },
                {
                    "type": "checkbox",
                    "name": "Molotov auto-smoke",
                    "id": "auto_smoke",
                    "hint": "Auto-smokes molotov for you\nVery buggy fix yourself"
                },
                {
                    "type": "checkbox",
                    "name": "Anti-server crash",
                    "id": "anti_crash",
                    "hint": "Since harpoon went public kids\nhave been crashing servers non-stop\nThis feature prevents you from being kicked."
                },
                {
                    "type": "checkbox",
                    "name": "Gernade helper",
                    "id": "gernade_helper",
                    "hint": "Help you with gernade lineups.\nFeel free to add more locations in the script\nMight cause low fps on weak PCs."
                },
                {
                    "type": "checkbox",
                    "name": "Auto choose team",
                    "id": "auto_teamchoose",
                    "hint": "Experimental\nAuto choose CT/T/Spectator side for you\non team-selectable servers"
                }

            ],
            "Information": [{
                    "type": "checkbox",
                    "name": "Buy list",
                    "id": "buy_list",
                    "hint": "Show what the enemy bought for the round\nThe sliders are not really working now\nYou can still drag the buylist tho."
                },
                {
                    "type": "checkbox",
                    "name": "Vote revealer",
                    "id": "vote_revealer",
                    "hint": "reveals enemies' votes"
                },
                {
                    "type": "checkbox",
                    "name": "Watermark",
                    "id": "watermark",
                    "hint": "Use the color graph in the watermark color section\nto change the color of the watermark top bar.\nUse the slider in the watermark color section\nto change the watermark's background density"
                },
                {
                    "type": "checkbox",
                    "name": "AA Indicators bar",
                    "id": "indicators_bar"
                },
                {
                    "type": "checkbox",
                    "name": "Info bar",
                    "id": "info_bar",
                    "hint": "Shows some info in skeet style"
                },
                {
                    "type": "checkbox",
                    "name": "Net graph",
                    "id": "net_graph",
                    "hint": "Cool netgraph"
                },
                {
                    "type": "checkbox",
                    "name": "Keybinds",
                    "id": "keybinds",
                    "hint": "Cleaner keybinds than the original"
                },
                {
                    "type": "checkbox",
                    "name": "Spectator list",
                    "id": "specList",
                    "hint": "Cleaner spectator list than the original"
                },
                {
                    "type": "checkbox",
                    "name": "Exploit indicators",
                    "id": "exploit_indicators"
                },
                {
                    "type": "checkbox",
                    "name": "Panorama Buylist",
                    "id": "panorama_weaponlist",
                    "hint": "Regarding all the hype from the neverlose's panorama buylist\nI decided to add a rudimentary version of it to otc\nIf you want it to be better fix it urself."
                },
                {
                    "type": "checkbox",
                    "name": "Better miss logs",
                    "id": "better_missLogs",
                    "hint": "Improves otc3's missed due to spread logs.\nNow it will (probably) show what really happened."
                },
                {
                    "type": "checkbox",
                    "name": "TeamSkeet indicators",
                    "id": "teamskeet",
                    "hint": "TeamSkeet.lua indicators style.\nColor picker for fake and AA indicator type not working\nso i removed it from the menu for now."
                }
            ],
        }
    }
};
var subtabs_icons = {
    "Rage": {
        "General": "A",
        "Safety system": "D",
        "Player list": "D"
    },
    "Anti-Aim": {
        "General": "B",
        "Custom AA": "B"
    },
    "Visual": {
        "World": "C",
        "Models": "D",
        "Other": "E"
    },
    "Misc": {
        "General": "F"
    }
};
var subtabs_text_icons = {
    "Rage": {
        "General": "",
        "Safety system": "",
        "Player list": ""
    },
    "Anti-Aim": {
        "General": "",
        "Custom AA": ""
    },
    "Visual": {
        "World": "",
        "Models": "",
        "Other": "",
    },
    "Misc": {
        "General": ""
    }
};

//Calculating variables
UI.AddSliderInt(name_text + "_x", -width, screen_size[0]);
UI.AddSliderInt(name_text + "_y", -28, screen_size[1]);
UI.SetEnabled("Script items", name_text + "_x", false);
UI.SetEnabled("Script items", name_text + "_y", false);
var x = UI.GetValue("Script items", name_text + "_x");
var y = UI.GetValue("Script items", name_text + "_y");
UI.AddCheckbox("Show " + name_text + " items");
UI.SetValue("Script items", "Show " + name_text + " items", true);
//UI.AddLabel("Reload " + name_text + " after first load");


//Lowdelta
var jitter_bak = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset");
var yaw_bak = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset");
var block_set = false;
var lowdelta_active = false;
var mmFDActive = false;

function lowdelta() {
    if (!GetVal("lowdelta")) return;
    var FDState = (GetValue("Lowdelta on FD") && (UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck") || UI.IsHotkeyActive("Script items", "Matchmaking FD")));
    if (legitAAactive) return;
    if (GetValue("Lowdelta") == 1) {
        block_set = false;
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 10);
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 0);
        AntiAim.SetOverride(1);
        AntiAim.SetFakeOffset(0);
        AntiAim.SetRealOffset(-26);
        lowdelta_active = true;
        return;
    }
    if (isSlowwalking() || FDState) {
        block_set = false;
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 10);
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 0);
        AntiAim.SetOverride(1);
        AntiAim.SetFakeOffset(0);
        AntiAim.SetRealOffset(-26);
        lowdelta_active = true;
    }
    if (!isSlowwalking() && !mmFDActive && !FDState) {
        lowdelta_active = false;
        if (!block_set) {
            UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yaw_bak);
            UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", jitter_bak);
            AntiAim.SetOverride(0);
            block_set = true;
        }
        yaw_bak = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset");
        jitter_bak = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset");
    }
}
//Predict targetted hitbox
Render.FadedCircle = function(x, y, radius, color) {
    const step = color[3] / radius;

    for (var i = 0; i <= radius; i++) {
        Render.FilledCircle(x, y, i, [color[0], color[1], color[2], color[3] - step * i]);
    }
}
//endregion

//region Math
function radToDeg(radians) {
    return radians * 180 / Math.PI;
}
//endregion

//region Utilities
var Cache = {
    values: []
};

Cache.InvokeCallback = function(label, state, func, args) {
    if (this.values[label] == null)
        this.values[label] = null;

    if (this.values[label] === state)
        return;

    this.values[label] = state;

    func.apply(null, args);
}
//endregion

//region Targeting
var Targeting = {
    currentData: {
        target: null,
        hitbox: 0,
        last_hitbox: -1
    },

    hitboxMap: [6, 5, 4, 3, 2],

    weaponId: [
        [2, 3, 4, 30, 32, 36, 61, 63],
        [1, 64],
        [40],
        [9],
        [11, 38]
    ],

    configuration: [
        "GENERAL",
        "PISTOL",
        "HEAVY PISTOL",
        "SCOUT",
        "AWP",
        "AUTOSNIPER"
    ],

    HITBOX: {
        "UNSURE": -1,
        "BODY": 3,
        "HEAD": 0
    }
};

Targeting.FindOptimalTarget = function() {
    const players = Entity.GetEnemies();
    const me = Entity.GetLocalPlayer();

    if (!me || !Entity.IsAlive(me))
        return null;

    const eye_position = Entity.GetEyePosition(me);
    const view_angles = Local.GetViewAngles();

    var data = {
        fov: 180,
        id: null
    };

    for (var i = 0; i < players.length; i++) {
        const e = players[i];

        if (!Entity.IsAlive(e) || Entity.IsDormant(e))
            continue;

        const head_position = Entity.GetHitboxPosition(e, 0);
        const sub = [head_position[0] - eye_position[0], head_position[1] - eye_position[1], head_position[2] - eye_position[2]];

        const pitch = -radToDeg(Math.atan2(sub[2], Math.sqrt(sub[0] ** 2 + sub[1] ** 2)));
        const yaw = radToDeg(Math.atan2(sub[1], sub[0]));

        const delta_x = Math.abs(view_angles[0] - pitch);
        const delta_y = Math.abs(view_angles[1] % 360 - yaw % 360) % 360;

        const fov = Math.sqrt(delta_x * delta_x + delta_y * delta_y);

        if (fov < data.fov) {
            data.fov = fov;
            data.id = e;
        }
    }

    return data.id;
}

Targeting.GetNextTargetedHitbox = function(e) {
    if (!e)
        return this.HITBOX.UNSURE;

    const me = Entity.GetLocalPlayer();
    const wpn = Entity.GetWeapon(me);

    if (!me || !wpn)
        return this.HITBOX.UNSURE;

    const eye_position = Entity.GetEyePosition(me);

    const wpn_id = Entity.GetProp(wpn, "CBaseAttributableItem", "m_iItemDefinitionIndex") & 0xFFFF;
    const tab = "GENERAL";

    for (var i = 0; i < this.weaponId.length; i++)
        for (var j = 0; j < this.weaponId[i].length; j++)
            if (this.weaponId[i][j] === wpn_id)
                tab = this.configuration[i + 1];

    const prefer_baim = UI.GetValue("Rage", tab, "Accuracy", "Prefer body aim");
    const is_head_aiming = UI.GetValue("Rage", tab, "Targeting", "Hitboxes") & (1 << 0);

    if (prefer_baim)
        return this.HITBOX.BODY;

    if (!is_head_aiming)
        return this.HITBOX.BODY;

    const head = Trace.Bullet(me, e, eye_position, Entity.GetHitboxPosition(e, 0));
    const stomach = Trace.Bullet(me, e, eye_position, Entity.GetHitboxPosition(e, 3));
    const health = Entity.GetProp(e, "CBasePlayer", "m_iHealth");

    /*for (var i = 0; i < this.hitboxMap.length; i++) {
    	const body_dmg = Trace.Bullet(me, e, eye_position, Entity.GetHitboxPosition(e, this.hitboxMap[i]))[1];

    	if (body_dmg > dmg)
    		return this.HITBOX.BODY;
    }*/

    if (!head[2] && this.currentData.last_hitbox === 0) {
        if (health < 25)
            return this.HITBOX.BODY;

        return this.HITBOX.HEAD;
    }

    this.currentData.last_hitbox = -1;

    if (health < stomach[1]) {
        return this.HITBOX.BODY;
    }

    return this.HITBOX.HEAD;
}

function hkCreateMove() {
    if (!GetVal("pred_target")) return;
    const target = Targeting.FindOptimalTarget();
    const hitbox = Targeting.GetNextTargetedHitbox(target);

    Targeting.currentData.target = target;
    Targeting.currentData.hitbox = hitbox;
}

function hkRagebotFire() {
    if (!GetVal("pred_target")) return;
    const target = Event.GetInt("target_index");

    if (target !== Targeting.currentData.target)
        return;

    Targeting.currentData.last_hitbox = Event.GetInt("hitbox");
}

function hkDraw() {
    if (!GetVal("pred_target")) return;
    const me = Entity.GetLocalPlayer();

    if (!me || !Entity.IsAlive(me))
        return;

    if (!Targeting.currentData.target || !Entity.IsAlive(Targeting.currentData.target) || Targeting.currentData.hitbox < 0)
        return;

    const wts = Render.WorldToScreen(Entity.GetHitboxPosition(Targeting.currentData.target, Targeting.currentData.hitbox));
    const ssize = Render.GetScreenSize();

    if (!wts)
        return;

    if (wts[0] < 0 || wts[0] > ssize[0] || wts[1] < 0 || wts[1] > ssize[1])
        return;

    Render.FadedCircle(wts[0], wts[1], 15, [25, 10, 230, 75]);
}

//Safe AWP
var safePbak = false;

function safeAWP() {
    if (!GetVal("safe_awp")) return;
    weapon = getWeaponName();

    if (weapon == "awp") {
        forceSafePoint = UI.IsHotkeyActive('Rage', 'GENERAL', 'General', 'Force safe point');
        if (!forceSafePoint) {
            UI.ToggleHotkey('Rage', 'GENERAL', 'General', 'Force safe point');
            safePbak = true;
        }
    } else if (safePbak) {
        UI.ToggleHotkey('Rage', 'GENERAL', 'General', 'Force safe point');
        safePbak = false;
    }
}

//Jumpscout
var hitchanceBak = UI.GetValue("Rage", "SCOUT", "Accuracy", "Hitchance");
var block_set2 = false;
var scoutInAir = 40;

function jumpscout() {
    if (!GetVal("jumpscout")) return;
    if (getWeaponName() !== "ssg08") {
        if (UI.GetValue("Rage", "SCOUT", "Accuracy", "Hitchance") !== scoutInAir) {
            hitchanceBak = UI.GetValue("Rage", "SCOUT", "Accuracy", "Hitchance");
        }
        if (block_set2) return;
        UI.SetValue("Rage", "SCOUT", "Accuracy", "Hitchance", hitchanceBak);
        block_set2 = true;
        return;
    }

    if (isInAir()) {
        block_set2 = false;
        UI.SetValue("Rage", "SCOUT", "Accuracy", "Hitchance", scoutInAir);
    } else {
        if (UI.GetValue("Rage", "SCOUT", "Accuracy", "Hitchance") !== scoutInAir) {
            hitchanceBak = UI.GetValue("Rage", "SCOUT", "Accuracy", "Hitchance");
        }
        if (block_set2) return;
        UI.SetValue("Rage", "SCOUT", "Accuracy", "Hitchance", hitchanceBak);
        block_set2 = true;
    }
}

//Opposite LBY on Exploits
var block_set3 = false;

function oppositeOnExploits() {
    if (GetVal("lowdelta") && isSlowwalking()) return;
    if (!GetVal("opposite_on_exploits") || !exploitsActive("all")) {
        if (block_set3) return;
        AntiAim.SetOverride(0);
        block_set3 = true;
        return;
    }
    if (UI.GetValue("Anti-Aim", "Fake angles", "LBY mode") == 1) {
        AntiAim.SetOverride(1);
        block_set3 = false;
        var fake_direction = UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter") == 1 ? 1 : -1;
        if (UI.GetValue("Anti-Aim", "Fake angles", "Fake desync")) {
            fake_direction = fake_direction * -1;
        }
        var real_yaw_offset = 60 * fake_direction;
        var lower_body_offset = -60 * fake_direction;
        var current_fake_yaw = Local.GetFakeYaw();
        var current_real_yaw = Local.GetRealYaw();
        if (Math.abs(angle_diff(current_fake_yaw, current_real_yaw)) > 100) {
            lower_body_offset = 180;
        }
        AntiAim.SetFakeOffset(0);
        AntiAim.SetRealOffset(real_yaw_offset);
        AntiAim.SetLBYOffset(lower_body_offset);
    } else {
        if (block_set3) return;
        AntiAim.SetOverride(0);
        block_set3 = true;
    }
}

//Adaptive noscope and predictive autoscope
var noscope_target = -1;
var noscope_dist = {
    "ssg08": 4,
    "scar20": 7,
    "g3sg1": 7
};
var stop_attack2 = false;

function autoscope() {
    if (stop_attack2) {
        stop_attack2 = false;
        Cheat.ExecuteCommand("-attack2");
    }
    local = Entity.GetLocalPlayer();
    if (GetVal("adaptive_noscope")) {
        if ((getWeaponName() !== "ssg08" && getWeaponName() !== "scar20" && getWeaponName() !== "g3sg1") || isInAir()) {
            UI.SetValue("Rage", "GENERAL", "General", "Auto scope", true);
            return;
        };
        if (!Ragebot.GetTarget())
            noscope_target = closestTarget();
        else
            noscope_target = Ragebot.GetTarget();
        if (!Entity.IsAlive(noscope_target)) {
            UI.SetValue("Rage", "GENERAL", "General", "Auto scope", true);
            return;
        }
        if (get_metric_distance(Entity.GetRenderOrigin(local), Entity.GetRenderOrigin(noscope_target)) < noscope_dist[getWeaponName()]) {
            UI.SetValue("Rage", "GENERAL", "General", "Auto scope", false);
        } else {
            UI.SetValue("Rage", "GENERAL", "General", "Auto scope", true);
        }
    }
    if (GetVal("predictive_autoscope")) {
        switch (getWeaponName()) {
            case "ssg08":
            case "scar20":
            case "g3sg1":
            case "awp":
                break;
            default:
                return;
        }
        var enemies = Entity.GetEnemies();
        var local_pos = ExtrapolateTick(15);
        var auto_scope = false;
        var is_scoped = Entity.GetProp(local, "CCSPlayer", "m_bIsScoped");
        for (var i = 0; i < enemies.length; i++) {
            var enemy = enemies[i];
            if (!Entity.IsAlive(enemy) || Entity.IsDormant(enemy) || !Entity.IsValid(enemy)) continue;
            var pos = Entity.GetHitboxPosition(enemy, 2)
            var result = Trace.Bullet(local, enemy, local_pos, pos);
            if (result[1] > 1) { // aka damage
                if (get_metric_distance(Entity.GetRenderOrigin(local), Entity.GetRenderOrigin(enemy)) > noscope_dist[getWeaponName()]) {
                    auto_scope = true;
                    break;
                }
            }
        }
        if (!is_scoped && auto_scope && !stop_attack2 && canShoot(local)) {
            Cheat.ExecuteCommand("+attack2");
            stop_attack2 = true;
        }
    }
}

//Bullet tracer
var bullets = [];

function bulletTracer() {
    if (!GetVal("bullet_tracer")) return;
    if (!World.GetServerString()) return;
    var player = Entity.GetEntityFromUserID(Event.GetInt("userid"));
    if (Entity.GetLocalPlayer() !== player) return;
    if (bullets.length > 20) bullets.shift();
    var eyePos = Entity.GetEyePosition(Entity.GetLocalPlayer());
    var vector = VectorSubtract([Event.GetFloat("x"), Event.GetFloat("y"), Event.GetFloat("z")], eyePos);
    eyePos[0] += vector[0] * 0.01;
    eyePos[1] += vector[1] * 0.01;
    eyePos[2] += vector[2] * 0.01;
    bullets.push({
        "impact": [Event.GetFloat("x"), Event.GetFloat("y"), Event.GetFloat("z")],
        "origin": eyePos,
        "time": Globals.Curtime()
    });
}

function bulletTracer2() {
    if (!GetVal("bullet_tracer")) return;
    if (!World.GetServerString()) return;
    if (bullets.length < 1) return;
    for (i = 0; i < bullets.length; i++) {
        if (bullets[i] != undefined) {
            if (bullets[i]["time"] + 10 < Globals.Curtime()) {
                delete bullets[i];
            } else {
                function getDistance(A, B) {
                    return Math.sqrt(Math.pow(A[0] - B[0], 2) + Math.pow(A[1] - B[1], 2) + Math.pow(A[2] - B[2], 2));
                }
                var impact = Render.WorldToScreen(bullets[i]["impact"]);
                var origin = Render.WorldToScreen(bullets[i]["origin"]);
                var color = UI.GetColor("Script items", "Bullet tracer");
                var thickness = GetValue("Bullet tracer thickness");
                if (origin != undefined && impact != undefined) {
                    if (origin[2] == 0 && !UI.IsHotkeyActive("Visual", "WORLD", "View", "Thirdperson")) {
                        var vector = VectorSubtract(bullets[i]["impact"], bullets[i]["origin"]);
                        var newOrigin = duplicate(bullets[i]["origin"]);
                        var length = getDistance(bullets[i]["impact"], newOrigin) - getDistance(bullets[i]["impact"], Entity.GetEyePosition(Entity.GetLocalPlayer()));
                        newOrigin[0] += vector[0] * (length / getDistance(bullets[i]["impact"], newOrigin) + 0.05);
                        newOrigin[1] += vector[1] * (length / getDistance(bullets[i]["impact"], newOrigin) + 0.05);
                        newOrigin[2] += vector[2] * (length / getDistance(bullets[i]["impact"], newOrigin) + 0.05);
                        origin = Render.WorldToScreen(newOrigin);
                    }
                    if (impact[2] != 0 /*&& origin[1] < screen_size[1] && origin[0] < screen_size[0]*/ && origin[0] > 0) {
                        var step = clamp(Math.floor((color[3] / thickness) * ((Globals.Curtime() - bullets[i]["time"]) / 1.5)), 0, 255);
                        Render.Line(impact[0], impact[1], origin[0], origin[1], [color[0], color[1], color[2], clamp(color[3] - step, 0, 255)]);
                        for (c = 1; c < thickness; c++) {
                            var val = clamp(color[3] - (c * step), 0, 255);
                            Render.Line(impact[0] + (c - 1), impact[1], origin[0] + c, origin[1], [color[0], color[1], color[2], val]);
                            Render.Line(impact[0], impact[1] + (c - 1), origin[0], origin[1] + c, [color[0], color[1], color[2], val]);
                            Render.Line(impact[0] - (c - 1), impact[1], origin[0] - c, origin[1], [color[0], color[1], color[2], val]);
                            Render.Line(impact[0], impact[1] - (c - 1), origin[0], origin[1] - c, [color[0], color[1], color[2], val]);
                        }
                    }
                }
            }
        }
    }
}

//Force backshoot
var enemies = Entity.GetEnemies();
var last_shot_time = []

function forceBackshoot() {
    if (!GetVal("force_backshoot") || !UI.IsHotkeyActive("Script items", "Wait for on-shot")) return;
    if (!World.GetServerString()) return;
    local = Entity.GetLocalPlayer();
    if (!Entity.IsAlive(Entity.GetLocalPlayer())) return;
    enemies = Entity.GetEnemies();

    for (var i = 0; i < enemies.length; i++) {
        var enemy = enemies[i];
        var dif = Globals.Tickcount() - last_shot_time[enemy]
        var has_shot = dif >= 0 && dif <= 12;
        if (!has_shot)
            Ragebot.IgnoreTarget(enemy)
    }
}

var baim_state_bak = UI.IsHotkeyActive('Rage', 'GENERAL', 'Force body aim');
var block_set13 = false;
var block_set14 = false;
var forcedBaim = false;
//Baim or safe points on lethal
function lethalSafety() {
    if (!GetVal("lethal_safety")) return;
    enemies = Entity.GetEnemies();
    for (i = 0; i < enemies.length; i++) {
        if (!Entity.IsValid(enemies[i])) continue;
        if (!Entity.IsAlive(enemies[i])) continue;
        if (Entity.IsDormant(enemies[i])) continue;
        var target = Ragebot.GetTarget();
        if (IsLethal(enemies[i])) {
            if (GetValue("Lethal safety") & (1 << 0)) {
                Ragebot.ForceTargetSafety(enemies[i]);
            }
            if (GetValue("Lethal safety") & (1 << 1)) {
                if (target == enemies[i]) forceBaim(enemies[i]);
                block_set13 = false;
                block_set14 = false;
            }
            continue;
        }
        if (!baim_state_bak && GetValue("Lethal safety") & (1 << 1)) {
            if (!block_set14) {
                DisableBaim();
                block_set14 = true;
            }
            forcedBaim = false;
        }
    }
    if (!forcedBaim && GetValue("Lethal safety") & (1 << 1)) {
        if (!block_set13) {
            if (UI.IsHotkeyActive('Rage', 'GENERAL', 'Force body aim') !== baim_state_bak) UI.ToggleHotkey('Rage', 'GENERAL', 'Force body aim');
            block_set13 = true;
        }
        baim_state_bak = UI.IsHotkeyActive('Rage', 'GENERAL', 'Force body aim');
    }
}

//Pitch 0 on land
var block_set4 = 0;
var block_set17 = false;
var groundCounter = 0;

function pitchZeroOnLand() {
    if (!GetVal("pitch_zero_on_land")) return;
    if (legitAAactive) return;

    local = Entity.GetLocalPlayer();
    var localPlayerFlags = Entity.GetProp(local, "CBasePlayer", "m_fFlags");
    if (localPlayerFlags == 256) {
        block_set4 = 0;
        groundCounter = 25;
    }
    if (groundCounter > 0 && localPlayerFlags === 257) {
        UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions", 0);
        UI.SetValue("Anti-Aim", "Extra", "Pitch", 0);
        block_set17 = false;
        groundCounter--;
    }
    if (groundCounter === 0) {
        if (block_set4 >= 5) {
            if (!block_set17) {
                UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions", restrictions_bak);
                UI.SetValue("Anti Aim", "Extra", "Pitch", pitch_bak);
                block_set17 = true;
            }
            if (UI.IsMenuOpen()) {
                pitch_bak = UI.GetValue("Anti-Aim", "Extra", "Pitch");
                restrictions_bak = UI.GetValue("Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions");
            }
            return;
        }
        block_set4++;
    }
}

//Better scope
var scope_animation = 0;
var scope_animation_step = 22;
var block_set17 = false;
var block_set18 = false;
var betterScopeActive = false;
var penetration_dot_bak = UI.GetValue("Visuals", "World", "Entities", "Penetration dot");
var penetration_crosshair_bak = UI.GetValue("Visuals", "World", "Entities", "Penetration crosshair");

function betterScope() {
    if (!GetVal("better_scope")) return;
    local = Entity.GetLocalPlayer();
    var scoped = Entity.GetProp(local, 'DT_CSPlayer', 'm_bIsScoped');
    if (!Entity.IsAlive(local) || !World.GetServerString()) {
        return;
    }
    if (Entity.IsAlive(local) && scoped) {
        scope_animation += scope_animation_step;
        scope_animation = clamp(scope_animation, 0, 255);
        if (GetValue("Better scope hide GUI")) {
            Convar.SetString('cl_draw_only_deathnotices', '1');
        }
        var startX = screen_size[0] / 2 + 1;
        var startY = screen_size[1] / 2 + 1;
        var sizeX = GetValue("Better scope width");
        var sizeY = GetValue("Better scope thickness");
        var off = sizeX / 2 + GetValue("Better scope start");
        var c2 = UI.GetColor("Script items", "Better scope color 1"); //[150, 200, 255, scope_animation]
        var c1 = UI.GetColor("Script items", "Better scope color 2"); //[150,0, 200, 0]
        c2[3] = scope_animation;
        c1[3] = 0;
        renderScopeLine(startX - off, startY, sizeX, sizeY, 1, c1, c2);
        renderScopeLine(startX + off, startY, sizeX, sizeY, 1, c2, c1);
        renderScopeLine(startX, startY - off, sizeY, sizeX, 0, c1, c2);
        renderScopeLine(startX, startY + off, sizeY, sizeX, 0, c2, c1);
    } else {
        scope_animation = 0;
        Convar.SetString('cl_draw_only_deathnotices', '0');
    }
}

function renderScopeLine(x, y, w, h, dir, color1, color2) {
    return Render.GradientRect(x - Math.round(w / 2), y - Math.round(h / 2), w, h, dir, color1, color2);
}

function betterScope2() {
    if (!GetVal("better_scope")) return;
    if (Cheat.FrameStage() != 5) return;
    local = Entity.GetLocalPlayer();
    var scoped = Entity.GetProp(local, 'DT_CSPlayer', 'm_bIsScoped');
    if (!Entity.IsAlive(local) || !World.GetServerString()) {
        Convar.SetFloat("r_drawvgui", 1);
        Convar.SetInt("fov_cs_debug", 0);
        block_set18 = false;
        return;
    }
    if (!GetValue("Better scope viewmodel")) {
        Convar.SetString("r_drawvgui", "1");
    }
    if (Entity.IsAlive(local) && scoped) {
        betterScopeActive = true;
        if (GetValue("Better scope viewmodel")) {
            Convar.SetString("r_drawvgui", "0");
            if (!UI.IsHotkeyActive("Visual", "WORLD", "View", "Thirdperson") && !block_set18) {
                Cheat.ExecuteCommand("fov_cs_debug 90");
                //UI.SetValue("Visual", "WORLD", "View", "FOV while scoped", 0);
                block_set18 = true;
            }
        }
    } else {
        //if(!block_set17){
        //	UI.SetValue("Visuals", "World", "Entities", "Penetration dot", penetration_dot_bak);
        //	UI.GetValue("Visuals", "World", "Entities", "Penetration crosshair", penetration_crosshair_bak);
        //}
        //penetration_dot_bak = UI.GetValue("Visuals", "World", "Entities", "Penetration dot");
        //penetration_crosshair_bak = UI.GetValue("Visuals", "World", "Entities", "Penetration crosshair");
        betterScopeActive = false;
        block_set18 = false;
        Convar.SetString("r_drawvgui", "1");
        Convar.SetString("fov_cs_debug", "0");
        Convar.SetInt("fov_cs_debug", 0);
    }
}

//Legbreaker
var legbreaker_speed = 2;
var legbreaker_old_tick_count = Globals.Tickcount();
var fakelag_leg = false;

function legBreaker() {
    if (!GetVal("legbreaker")) return;
    if (!World.GetServerString()) return;
    var leghider = GetVal("alternative_fakelag") && !exploitsActive("all") && UI.GetValue("Anti-Aim", "Fake-Lag", "Enabled");
    if ((Globals.Tickcount() - legbreaker_old_tick_count) > legbreaker_speed && !leghider) {
        if (UI.GetValue("Misc", "GENERAL", "Movement", "Slide walk"))
            UI.SetValue("Misc", "GENERAL", "Movement", "Slide walk", 0);
        else
            UI.SetValue("Misc", "GENERAL", "Movement", "Slide walk", 1);
        legbreaker_old_tick_count = Globals.Tickcount();
    }
    if (leghider) {
        if (!fakelag_leg && fakelag_flip) {
            UI.SetValue("Misc", "GENERAL", "Movement", "Slide walk", 1);
            fakelag_leg = true;
        } else {
            UI.SetValue("Misc", "GENERAL", "Movement", "Slide walk", 0);
        }
        if (fakelag_flip) {
            fakelag_leg = false;
        }
    }
}

var accurate_walk_bak = UI.GetValue("Misc", "GENERAL", "Movement", "Accurate walk");
var block_set7 = false;

function slowmotion() {
    if (!GetVal("slowmotion")) return;
    if (!World.GetServerString()) return;
    if (!isSlowwalking()) {
        if (!block_set7) {
            UI.SetValue("Misc", "GENERAL", "Movement", "Accurate walk", accurate_walk_bak);
            block_set7 = true;
        }
        if (UI.IsMenuOpen()) {
            accurate_walk_bak = UI.GetValue("Misc", "GENERAL", "Movement", "Accurate walk");
        }
        return;
    }
    if (UI.IsHotkeyActive("Visual", "SELF", "Freecam", "Enable")) return;
    block_set7 = false;
    UI.SetValue("Misc", "GENERAL", "Movement", "Accurate walk", false);
    var slowmotion_speed = GetVal("slowmotion_speed");
    if (GetVal("slowmotion_legbreaker")) {
        slowmotion_speed += 10;
    }
    var sSpeed = (slowmotion_speed * (((getVelocity(Entity.GetLocalPlayer()) >= slowmotion_speed) && GetVal("slowmotion_legbreaker")) ? -1 : 1));
    var dir = [0, 0, 0];
    if (Input.IsKeyPressed(0x57)) {
        dir[0] += sSpeed;
    }
    if (Input.IsKeyPressed(0x44)) {
        dir[1] += sSpeed;
    }
    if (Input.IsKeyPressed(0x41)) {
        dir[1] -= sSpeed
    }
    if (Input.IsKeyPressed(0x53)) {
        dir[0] -= sSpeed;
    }
    UserCMD.SetMovement(dir);
}
// //Teleport on peek
// //april's vector stuff. Idk if these are included already. 
// var vector = {
// 	_class: 'vector'
// };
// vector.new = function(data)
// {
// 	return {
// 		x: data[0],
// 		y: data[1],
// 		z: data[2]
// 	};
// };
// vector.operate = function(vec, vec2, operation)
// {
//   switch (operation)
//   {
// 	  case '+':
// 		  return {
// 			  x: vec.x + vec2.x,
// 			  y: vec.y + vec2.y,
// 			  z: vec.z + vec2.z
// 		  };
// 	  case '-':
// 		  return {
// 			  x: vec.x - vec2.x,
// 			  y: vec.y - vec2.y,
// 			  z: vec.z - vec2.z
// 		  };
// 	  case '*':
// 		  return {
// 			  x: vec.x * vec2.x,
// 			  y: vec.y * vec2.y,
// 			  z: vec.z * vec2.z
// 		  };
// 	  case 'x': //multiplication by number
// 		  return {
// 			  x: vec.x * vec2,
// 			  y: vec.y * vec2,
// 			  z: vec.z * vec2
// 		  };
// 	  case '/':
// 		  return {
// 			  x: vec.x / vec2.x,
// 			  y: vec.y / vec2.y,
// 			  z: vec.z / vec2.z
// 		  };
// 	  default:
// 		  throw new Error("[Vector] Invalid operation type.");
//   }
// }; 
// vector.to_array = function(vec)
// {
// 	return [
// 		vec.x,
// 		vec.y,
// 		vec.z
// 	];
// };

// function extrapolate_tick(headpos, velocity, tick_amt)
// {
// 	return vector.operate(headpos, vector.operate(velocity, tick_amt * Globals.TickInterval(), 'x'), "+"); 
// }
// var has_teleported = false; 
// var should_teleport = false;
// var last_teleport_time = 0.0;
// var js_items = ["Misc", "JAVASCRIPT", "Script Items"];
// function on_move()
// {	
// 	if (!GetVal("teleport_onpeek") || !UI.IsHotkeyActive("Script items", "Teleport key")) return;
// 	{
// 		var is_dt_enabled = UI.IsHotkeyActive("Rage", "Exploits", "Doubletap");
// 		var teleport_cooldown = UI.GetValue(js_items, "Teleport cooldown");
// 		if(Globals.Curtime() > last_teleport_time + teleport_cooldown)
// 		{
// 			if(is_dt_enabled && Exploit.GetCharge() < 0.95) 
// 			{
// 				return;
// 			}
// 			if(should_teleport && !has_teleported)
// 			{
// 				if(is_dt_enabled)
// 				{
// 					UI.ToggleHotkey("Rage", "Exploits", "Doubletap");
// 					last_teleport_time = Globals.Curtime();
// 					should_teleport = false;
// 					has_teleported = true;
// 					return;
// 				}
// 				else
// 				{
// 					UI.ToggleHotkey("Rage", "Exploits", "Doubletap");
// 					return;
// 				}
// 			}
// 			var local = Entity.GetLocalPlayer();
// 			var local_eyepos = Entity.GetEyePosition(local);
// 			var local_eyepos_vector = vector.new(local_eyepos);
// 			var local_velocity = Entity.GetProp(local, "CBasePlayer", "m_vecVelocity[0]");
// 			var local_velocity_vector = vector.new(local_velocity);
// 			var extrapolated_headpos = extrapolate_tick(local_eyepos_vector, local_velocity_vector, UI.GetValue(js_items, "Predicted ticks"));
// 			var enemies = Entity.GetEnemies();
// 			var teleport_mindamage = UI.GetValue(js_items, "Minimum damage to trigger teleport");
// 			if(!should_teleport && !has_teleported)
// 			{
// 				for(var i = 0; i < enemies.length; i++)
// 				{
// 					if(Entity.IsValid(enemies[i]) && Entity.IsAlive(enemies[i]) && !Entity.IsDormant(enemies[i]))
// 					{
// 						var enemy_headpos = Entity.GetHitboxPosition(enemies[i], 0);
// 						var enemy_pelvispos = Entity.GetHitboxPosition(enemies[i], 2); 
// 						var trace = Trace.Bullet(local, enemies[i], vector.to_array(extrapolated_headpos), enemy_pelvispos);
// 						var trace2 = Trace.Bullet(local, enemies[i], vector.to_array(extrapolated_headpos), enemy_headpos);
// 						if(trace[1] > teleport_mindamage || trace2[1] > teleport_mindamage)
// 						{
// 							should_teleport = true;
// 							break;
// 						}
// 					}
// 				}
// 			}
// 		}
// 		else if(has_teleported)
// 		{
// 			var should_attempt_to_reenable_dt = UI.GetValue(js_items, "Enable doubletap after teleport");
// 			var should_attempt_to_recharge = UI.GetValue(js_items, "Recharge after teleport");
// 			if(should_attempt_to_reenable_dt)
// 			{
// 				if(!is_dt_enabled)
// 				{
// 					UI.ToggleHotkey("Rage", "Exploits", "Doubletap"); 
// 				}
// 				if(should_attempt_to_recharge)
// 				{
// 					 Exploit.Recharge(); 
// 				}
// 			}
// 			 has_teleported = false;
// 		}
// 	}
// }
// // function update_menu()
// // {
// // 	var is_script_enabled = UI.GetValue("teleport_onpeek");
// // 	UI.SetEnabled(js_items, "Teleport key", is_script_enabled);
// // 	UI.SetEnabled(js_items, "Predicted ticks", is_script_enabled);
// // 	UI.SetEnabled(js_items, "Teleport cooldown", is_script_enabled);
// // 	UI.SetEnabled(js_items, "Minimum damage to trigger teleport", is_script_enabled);
// // 	UI.SetEnabled(js_items, "Enable doubletap after teleport", is_script_enabled);
// // 	var is_dt_shit_enabled = UI.GetValue(js_items, "Enable doubletap after teleport");
// // 	UI.SetEnabled(js_items, "Recharge after teleport", is_script_enabled && is_dt_shit_enabled);
// // 	UI.SetEnabled(js_items, "Render indicator", is_script_enabled);
// // }
// function tpindicator()
// {
// 	if (!GetVal("teleport_onpeek") || !UI.IsHotkeyActive("Script items", "Teleport key")) return;
// 	{
// 		if(World.GetServerString() == "")
// 		{
// 			return;
// 		}
// 		if(!Entity.IsAlive(Entity.GetLocalPlayer()))
// 		{
// 			return;
// 		}
// 		var screen_size = Render.GetScreenSize();
// 		var teleport_cooldown = UI.GetValue(js_items, "Teleport cooldown");
// 		Render.String(30, screen_size[1] * 0.8, 1, "TP", (Globals.Curtime() > last_teleport_time + teleport_cooldown) ? [25, 255, 25, 200] : [255, 25, 25, 200], 4);
// 	}   
// }
// function reset_shit() 
// {
// 	has_teleported = false;
// 	should_teleport = false;
// 	last_teleport_time = 0.0;
// }

// Safety after x misses
//Whether or not the script is listening for a 'player_hurt' event
var waiting_for_hit = false;

//The target the ragebot last fired at
var target_idx = 0;

//The tick the ragebot last fired on
var tick_count = -1;

//Miss count for each individual player
var misses = [64];

//Safety state for each individual player
var safety_ents = [64];

//Set the default values for 'misses' and 'safety_ents'
reset_miss_logs()

function on_ragebot_fire() {
    //The ragebot fired so now we're waiting for a 'player_hurt' event
    waiting_for_hit = true;
    //Update the current target index
    target_idx = Event.GetInt("target_index");
    //Update the tick count
    tick_count = Globals.Tickcount()
}

function on_player_hurt() {
    //The entity that was hurt
    var entity = Entity.GetEntityFromUserID(Event.GetInt("userid"));

    //Don't continue if the hurt entity is the local player
    if (entity == Entity.GetLocalPlayer())
        return;

    //The entity that attacked 'entity'
    var attacker = Entity.GetEntityFromUserID(Event.GetInt("attacker"));

    //Don't continue unless 'attacker' is the local player
    if (attacker != Entity.GetLocalPlayer())
        return;

    //Don't continue if 'entity' isn't the last target
    if (entity != target_idx)
        return;

    //We damaged the target so we are no longer waiting for a hit. Reset the variables
    waiting_for_hit = false;
    target_idx = 0;
    tick_count = -1;

}

function on_create_move() {
    //Time in milliseconds between each tick
    var tick_interval = 1000 / Globals.Tickrate();

    //The amount of ticks we're going to wait for a player_hurt event
    var wait_ticks = 1 + Math.ceil((Local.Latency() * 2) / tick_interval);

    //Run this block if more than 'wait_ticks" has passed since the ragebot fired
    if (Globals.Tickcount() - tick_count >= wait_ticks && waiting_for_hit) {
        //Increment the misses for the current target
        misses[target_idx]++;

        //Force safety on the current target if more than x misses
        if (misses[target_idx] >= UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Safety after x misses")) {
            safety_ents[target_idx] = 1;
        }

        //Reset the variables
        waiting_for_hit = false;
        target_idx = 0;
        tick_count = -1;
    }

    //Current target
    var rbot_target = Ragebot.GetTarget();

    //If there is no target, don't continue
    if (rbot_target == 0)
        return;

    //Force safety on the target
    if (safety_ents[rbot_target] == 1) {
        Ragebot.ForceTargetSafety(rbot_target);
    }
}

//Reset variables on death
function on_player_death2() {
    var idx = Entity.GetEntityFromUserID(Event.GetInt("userid"));
    reset_specific_miss_logs(idx)
}

//Resets 'misses[]' and 'safety_ents[]'
function reset_miss_logs() {
    for (var i = 0; i < 64; i++) {
        reset_specific_miss_logs(i)
    }
}

//Resets 'misses' and 'safety_ents' for a specific entity
function reset_specific_miss_logs(idx) {
    misses[idx] = 0;
    safety_ents[idx] = 0;
}

//Standing auto invert
var standingAutoInvert_wait = 0;
var standingAutoInvert_speed = 2;

function standingAutoInvert() {
    if (!GetVal("standing_auto_invert")) return;
    if (!World.GetServerString()) return;
    if (getVelocity(Entity.GetLocalPlayer()) > 3) return;
    if (standingAutoInvert_wait++ === standingAutoInvert_speed) {
        UI.ToggleHotkey("Anti-Aim", "Fake angles", "Inverter");
        standingAutoInvert_wait = 0;
    }
}

//Skeleton on hit and kill
var skeleton_draw_time = 4;
var hitlist = [
    [],
    [],
    []
];

function skeletonOnHit() {
    if (!GetVal("skeleton_on_hit")) return;
    var attackerplayer = Entity.GetEntityFromUserID(Event.GetString("attacker"));
    if (attackerplayer == Entity.GetLocalPlayer()) {
        var victimplayer = Entity.GetEntityFromUserID(Event.GetString("userid"))
        var color = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Skeleton Hit Color");
        if (Event.GetInt("health") < 1) {
            color = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Skeleton Kill Color");
        }
        var hitboxPos = [];
        for (var i = 0; i < 19; i++) {
            var p = Entity.GetHitboxPosition(victimplayer, i);
            hitboxPos.push(p);
        }
        hitlist[0].push(Global.Curtime() + skeleton_draw_time);
        hitlist[1].push(hitboxPos);
        hitlist[2].push(color);
    }
}

function skeletonOnHit2() {
    if (!GetVal("skeleton_on_hit") || hitlist[0].length == 0) return;
    for (var i = 0; i < hitlist[0].length; i++) {
        if (Global.Curtime() < hitlist[0][i]) {
            skeletonOnHit3(hitlist[1][i], hitlist[2][i]);
        } else {
            hitlist[0].splice(i, 1);
            hitlist[1].splice(i, 1);
            hitlist[2].splice(i, 1);
        }
    }
}

function skeletonOnHit3(hitboxPos, color) {
    var skelMesh = [
        [0, 1],
        [1, 6],
        [6, 5],
        [5, 4],
        [4, 3],
        [3, 2],
        [2, 7],
        [2, 8],
        [8, 10],
        [10, 12],
        [7, 9],
        [9, 11],
        [6, 15],
        [15, 16],
        [16, 13],
        [6, 17],
        [17, 18],
        [18, 14]
    ];
    for (var i = 0; i < skelMesh.length; i++) {
        var p1 = Render.WorldToScreen(hitboxPos[skelMesh[i][0]]);
        var p2 = Render.WorldToScreen(hitboxPos[skelMesh[i][1]]);
        Render.Line(p1[0], p1[1], p2[0], p2[1], color);
    }
}

var mindamage_bak = [0, 0, 0, 0, 0, 0];
var mindamage_override = [0, 0, 0, 0, 0, 0];
var weapon_categories = ["GENERAL", "PISTOL", "HEAVY PISTOL", "SCOUT", "AWP", "AUTOSNIPER"];
for (category in weapon_categories) {
    mindamage_bak[category] = UI.GetValue("Rage", weapon_categories[category], "Targeting", "Minimum damage");
}
var block_set20 = false;

//Min damage override on key
function minDamageOverride() {
    if (!GetVal("mindamage")) return;
    if (UI.IsMenuOpen()) {
        if (!GetVal("mindamage_advanced")) {
            for (mindamage in mindamage_override) {
                mindamage_override[mindamage] = GetVal("mindamage_hp");
            }
        } else {
            mindamage_override[0] = GetVal("mindamage_hp");
            mindamage_override[1] = GetVal("mindamage_hp_pistol");
            mindamage_override[2] = GetVal("mindamage_hp_revolver");
            mindamage_override[3] = GetVal("mindamage_hp_scout");
            mindamage_override[4] = GetVal("mindamage_hp_awp");
            mindamage_override[5] = GetVal("mindamage_hp_auto");
        }
    }
    if (UI.IsHotkeyActive('Script items', 'Min damage override') || autopeek_active) {
        block_set20 = false;
        for (category in weapon_categories) {
            UI.SetValue("Rage", weapon_categories[category], "Targeting", "Minimum damage", mindamage_override[category]);
        }
    } else {
        if (!block_set20) {
            for (category in weapon_categories) {
                UI.SetValue("Rage", weapon_categories[category], "Targeting", "Minimum damage", mindamage_bak[category]);
            }
            block_set20 = true;
        }
        if (UI.IsMenuOpen()) {
            for (category in weapon_categories) {
                mindamage_bak[category] = UI.GetValue("Rage", weapon_categories[category], "Targeting", "Minimum damage");
            }
        }
    }
}

//Trail
var trails = [];
var trail_rgb_speed = 15;
var trail_timer = 200;

function trail() {
    if (!GetVal("trail")) return;
    local = Entity.GetLocalPlayer();
    if (Entity.IsValid(local)) {
        var position = Entity.GetHitboxPosition(local, 6);
        if (Array.isArray(position)) {
            trails.push({
                remove: Global.Tickcount() + trail_timer,
                location: position
            });

            trails.forEach(function(x, y) {
                var location = trails[y]["location"];
                var rainbow = rgb(trail_rgb_speed / 500);
                rainbow[3] = 50;
                if (!GetValue("Trail rainbow")) {
                    var color = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Trail");
                    rainbow = color;
                }
                var position = Render.WorldToScreen([location[0], location[1], location[2] - 50.0]);
                Render.FilledRect(position[0], position[1], 15, 15, rainbow);

                var time = Global.Tickcount();
                if (trails[y]["remove"] <= time) {
                    trails.splice(y, 1);
                }
            });
        }
    }
}

function rgb(speed) {
    var timer = Global.Tickcount();
    var result = [0, 0, 0, 255];

    result[0] = Math.floor(Math.sin(timer * speed + 0) * 127 + 128);
    result[1] = Math.floor(Math.sin(timer * speed + 2) * 127 + 128);
    result[2] = Math.floor(Math.sin(timer * speed + 4) * 127 + 128);
    return result;
}

function fps_boost() {
    if (GetVal("fps_boost")) {
        UI.SetValue("Misc", "GENERAL", "Misc", "Force sv_cheats", true);
        UI.SetValue("Misc", "GENERAL", "Misc", "Hidden cvars", true);
        Convar.SetString("r_shadows", "0");
        Convar.SetString("cl_csm_static_prop_shadows", "0");
        Convar.SetString("cl_csm_shadows", "0");
        Convar.SetString("cl_csm_world_shadows", "0");
        Convar.SetString("cl_foot_contact_shadows", "0");
        Convar.SetString("cl_csm_viewmodel_shadows", "0");
        Convar.SetString("cl_csm_rope_shadows", "0");
        Convar.SetString("cl_csm_sprite_shadows", "0");
        Convar.SetString("cl_csm_world_shadows_in_viewmodelcascade", "0");
        Convar.SetString("cl_csm_translucent_shadows", "0");
        Convar.SetString("cl_csm_entity_shadows", "0");
        Convar.SetString("violence_hblood", "0");
        Convar.SetString("r_3dsky", "0");
        Convar.SetString("r_drawdecals", "0");
        Convar.SetString("r_drawrain", "0");
        Convar.SetString("r_drawropes", "0");
        Convar.SetString("r_drawsprites", "0");
        Convar.SetString("fog_enable", "0");
        Convar.SetString("fog_enable_water_fog", "0");
        Convar.SetString("fog_enableskybox", "0");
        Convar.SetString("@panorama_disable_blur", "1");
        Convar.SetString("dsp_slow_cpu", "1");
        Convar.SetString("cl_disable_ragdolls", "1");
        Convar.SetString("mat_disable_bloom", "1");
    } else {
        Convar.SetString("r_shadows", "1");
        Convar.SetString("cl_csm_static_prop_shadows", "1");
        Convar.SetString("cl_csm_shadows", "1");
        Convar.SetString("cl_csm_world_shadows", "1");
        Convar.SetString("cl_foot_contact_shadows", "1");
        Convar.SetString("cl_csm_viewmodel_shadows", "1");
        Convar.SetString("cl_csm_rope_shadows", "1");
        Convar.SetString("cl_csm_sprite_shadows", "1");
        Convar.SetString("cl_csm_world_shadows_in_viewmodelcascade", "1");
        Convar.SetString("cl_csm_translucent_shadows", "1");
        Convar.SetString("cl_csm_entity_shadows", "1");
        Convar.SetString("violence_hblood", "1");
        Convar.SetString("r_3dsky", "1");
        Convar.SetString("r_drawdecals", "1");
        Convar.SetString("r_drawrain", "1");
        Convar.SetString("r_drawropes", "1");
        Convar.SetString("r_drawsprites", "1");
        Convar.SetString("fog_enable", "1");
        Convar.SetString("fog_enable_water_fog", "1");
        Convar.SetString("fog_enableskybox", "1");
        Convar.SetString("@panorama_disable_blur", "0");
        Convar.SetString("dsp_slow_cpu", "0");
        Convar.SetString("cl_disable_ragdolls", "0");
        Convar.SetString("mat_disable_bloom", "0");
    }
}

//Molotov auto-smoke (idk why sometimes it just doesn't work)
const actions = [
    [function() {
        Cheat.ExecuteCommand('use weapon_smokegrenade')
    }, 50],
    [function() {
        Cheat.ExecuteCommand('+attack2')
    }, 10],
    [function() {
        angles = Local.GetViewAngles();
        Local.SetViewAngles([90, angles[1], angles[2]])
    }, 0],
    [function() {
        Cheat.ExecuteCommand('-attack2')
    }, 7],
    [function() {
        Local.SetViewAngles(angles)
    }, 0],
    [function() {
        Cheat.ExecuteCommand('slot3')
    }, 0],
    [function() {
        Cheat.ExecuteCommand('slot2')
    }, 0],
    [function() {
        Cheat.ExecuteCommand('slot1')
    }, 0]
];
const next = 0,
    angles = [],
    current = -1;

function on_tick() {
    if (!GetVal("auto_smoke") || !UI.IsHotkeyActive("Script items", "Enable auto-smoke")) return;
    if (current == -1 || Globals.Tickcount() <= next) return;
    actions[current][0]();
    next = Globals.Tickcount() + actions[current][1] * (Globals.Tickrate() / 64);
    if (++current == actions.length) {
        next = 0;
        current = -1;
    }
}

function molotov_detonated() {
    if (!GetVal("auto_smoke") || !UI.IsHotkeyActive("Script items", "Enable auto-smoke")) return;
    if (!Entity.IsAlive(Entity.GetLocalPlayer())) return;
    if (~Entity.GetTeammates().indexOf(Entity.GetEntityFromUserID(Event.GetInt('userid'))) && !Entity.IsLocalPlayer(Entity.GetEntityFromUserID(Event.GetInt('userid')))) return;
    const player_pos = Entity.GetRenderOrigin(Entity.GetLocalPlayer());
    const magnitude = Math.sqrt((Event.GetFloat('x') - player_pos[0]) ** 2 + (Event.GetFloat('y') - player_pos[1]) ** 2);
    if (magnitude <= 175 && Math.abs(Event.GetFloat('z') - player_pos[2]) <= 300) current = 0;
}

function on_draw_molotov() {
    if (!GetVal("auto_smoke") || !UI.IsHotkeyActive("Script items", "Enable auto-smoke")) return;
    Render.String(0, 500, 0, 'Auto-smoke', [0, 255, 0, UI.IsHotkeyActive("Script items", "Enable auto-smoke") ? 255 : 0], 16)
}
//Anti server crash
function anticrash() {
    if (!GetVal("anti_crash")) return;
    if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Enable anti-crasher")) {
        Cheat.ExecuteCommand("cl_timeout 9999");
    } else {
        Cheat.ExecuteCommand("cl_timeout 60");
    }
}

//Hide chat
function hidechat() {
    if (!GetVal("chat_hide")) return;
    var i_chat = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable hide chat");
    if (i_chat) {
        Cheat.ExecuteCommand("cl_chatfilters 0")
    } else {
        Cheat.ExecuteCommand("cl_chatfilters 63")
    }
}
//Transparent walls and props when nading
var block_set5 = 0;
var wallTransparencyBak = UI.GetValue("Visual", "Map", "Wall transparency");
var propTransparencyBak = UI.GetValue("Visual", "Map", "Prop transparency");

function transparencyOnNade() {
    if (!GetVal("transparency_on_nade")) return;
    var weapon = getWeaponName();
    local = Entity.GetLocalPlayer();
    if ((weapon.indexOf("nade") !== -1 /*|| weapon === "flashbang"*/ || weapon === "molotov") && weapon !== "decoy" && Entity.IsAlive(local) && Input.IsKeyPressed(0x01)) {
        block_set5 = 0;
        UI.SetValue("Visual", "Map", "Wall transparency", (GetValue("Wall transparency") / 100));
        UI.SetValue("Visual", "Map", "Prop transparency", (GetValue("Prop transparency") / 100));
    } else {
        if (block_set5 < 3) {
            UI.SetValue("Visual", "Map", "Wall transparency", wallTransparencyBak);
            UI.SetValue("Visual", "Map", "Prop transparency", propTransparencyBak);
            block_set5++;
        }
        if (UI.IsMenuOpen()) {
            propTransparencyBak = UI.GetValue("Visual", "Map", "Prop transparency");
            wallTransparencyBak = UI.GetValue("Visual", "Map", "Wall transparency");
        }
    }
}

//Force safe point on DT
function safePointOnDT() {
    if (!GetVal("dt_safepoint")) return;
    if (!exploitsActive("dt")) return;
    enemies = Entity.GetEnemies();
    for (i = 0; i < enemies.length; i++) {
        if (!Entity.IsValid(enemies[i])) continue;
        if (!Entity.IsAlive(enemies[i])) continue;
        Ragebot.ForceTargetSafety(enemies[i]);
    }
}

//Svastica crosshair
//The best function in otc3 cord
//kinda cringe from the original author but ok
var cnt = 0;

function betterCrosshair() {
    if (!GetVal("better_crosshair")) return;
    local = Entity.GetLocalPlayer();
    if (!local || !Entity.IsValid(local)) return;
    if (betterScopeActive) return;
    var scr = Render.GetScreenSize();
    scr[0] /= 2;
    scr[1] /= 2;

    var col = UI.GetColor("Script Items", "Better crosshair");
    if (GetValue("Better crosshair rainbow")) {
        var coll = hsv2rgb(cnt * .002, 1, 1);
        col = [coll.r, coll.g, coll.b, col[3]];
    }
    var range = GetValue("Better crosshair length");
    var topx = scr[0];
    var topy = scr[1] + range;
    var topxx = scr[0] - range;
    var topyy = scr[1] + range;
    var topp = rotateAroundPoint(scr, [topx, topy], cnt);
    var toppp = rotateAroundPoint(scr, [topxx, topyy], cnt);
    Render.Line(scr[0], scr[1], topp[0], topp[1], col);
    Render.Line(topp[0], topp[1], toppp[0], toppp[1], col);
    var botx = scr[0];
    var boty = scr[1] - range;
    var botxx = scr[0] + range;
    var botyy = scr[1] - range;
    var bott = rotateAroundPoint(scr, [botx, boty], cnt);
    var bottt = rotateAroundPoint(scr, [botxx, botyy], cnt);
    Render.Line(scr[0], scr[1], bott[0], bott[1], col);
    Render.Line(bott[0], bott[1], bottt[0], bottt[1], col);
    var rightx = scr[0] + range;
    var righty = scr[1];
    var rightxx = scr[0] + range;
    var rightyy = scr[1] + range;
    var rightt = rotateAroundPoint(scr, [rightx, righty], cnt);
    var righttt = rotateAroundPoint(scr, [rightxx, rightyy], cnt);
    Render.Line(scr[0], scr[1], rightt[0], rightt[1], col);
    Render.Line(rightt[0], rightt[1], righttt[0], righttt[1], col);
    var leftx = scr[0] - range;
    var lefty = scr[1];
    var leftxx = scr[0] - range;
    var leftyy = scr[1] - range;
    var leftt = rotateAroundPoint(scr, [leftx, lefty], cnt);
    var lefttt = rotateAroundPoint(scr, [leftxx, leftyy], cnt);
    Render.Line(scr[0], scr[1], leftt[0], leftt[1], col);
    Render.Line(leftt[0], leftt[1], lefttt[0], lefttt[1], col);
    cnt += Globals.Frametime() * ((GetValue("Better crosshair speed") / 3) * 100);
}

//Hitmarker
var hitShots = [];
const hitgroup_to_hitbox = {
    1: 0,
    2: 5,
    3: 2,
    4: 13,
    5: 14,
    6: 12,
    7: 11
};

function hitShotsHandle() {
    if (!Entity.IsAlive(Entity.GetLocalPlayer())) return;
    var size = 7;
    var disableTime = 250;
    for (shot in hitShots) {
        var w2s = Render.WorldToScreen(hitShots[shot][1]);
        var time = hitShots[shot][2];
        if (time > disableTime) {
            hitShots.splice(shot, 1);
            continue;
        }
        var screenX = w2s[0];
        var screenY = w2s[1];
        var alpha = 255 * (1 - (time / disableTime));
        if (GetVal("hitmarker")) {
            var color = UI.GetColor("Script items", "Hitmarker");
            color[3] = alpha;
            if (GetValue("Hitmarker in screen center")) {
                var screenX = screen_size[0] / 2;
                var screenY = screen_size[1] / 2;
            }
            Render.Line(screenX + size, screenY + size, screenX + (size / 3), screenY + (size / 3), color);
            Render.Line(screenX + size, screenY - size, screenX + (size / 3), screenY - (size / 3), color);
            Render.Line(screenX - size, screenY - size, screenX - (size / 3), screenY - (size / 3), color);
            Render.Line(screenX - size, screenY + size, screenX - (size / 3), screenY + (size / 3), color);
        }
        if (GetVal("damage_marker")) {
            var color = UI.GetColor("Script items", "Damage marker");
            screenY = screenY - 16 - (time);
            screenX = screenX - 15 + hitShots[shot][3];
            color[3] = alpha;
            var font = Render.AddFont("Verdana", 8, 600);
            var damage = hitShots[shot][0].toString();
            if (GetValue("Damage marker outline")) {
                Render.StringCustom(screenX + 1, screenY, 0, damage, [0, 0, 0, alpha], font);
                Render.StringCustom(screenX - 1, screenY, 0, damage, [0, 0, 0, alpha], font);
                Render.StringCustom(screenX, screenY + 1, 0, damage, [0, 0, 0, alpha], font);
                Render.StringCustom(screenX, screenY - 1, 0, damage, [0, 0, 0, alpha], font);
            }
            Render.StringCustom(screenX, screenY, 0, damage, color, font);
        }
        hitShots[shot][2]++;
    }
}

function addHitShot() {
    if (!GetVal("hitmarker") && !GetVal("damage_marker")) return;
    var uid = Entity.GetEntityFromUserID(Event.GetInt("userid"));
    if (Entity.GetEntityFromUserID(Event.GetString("attacker")) == Entity.GetLocalPlayer()) {
        hitShots.push([Event.GetInt("dmg_health"), Entity.GetHitboxPosition(uid, hitgroup_to_hitbox[Event.GetInt("hitgroup")] != undefined ? hitgroup_to_hitbox[Event.GetInt("hitgroup")] : 3), 0, Math.floor(Math.random() * Math.floor(30))]);
    }
}

//Aspect ratio
function aspectRatio() {
    Convar.SetString("r_aspectratio", (GetVal("aspect_ratio") / 100).toString());
}

//Autostrafe fix
function autostrafeFix() {
    if (!GetVal("autostrafe_fix")) return;
    var speed = 2;
    var velocity = parseFloat(getVelocity(Entity.GetLocalPlayer()));
    UI.SetValue("Misc", "GENERAL", "Movement", "Turn speed", (velocity / 1.5) / speed);
}

//World color, bloom and FX
var nightmode_value = 0.1;
var nightmode_modelBrightness = 1.5;

function worldColor() {
    var props = 0;
    if (!Entity.GetLocalPlayer()) return;
    if (GetVal("world_color")) {
        var worldColor = UI.GetColor("Script items", "World color");
        Convar.SetFloat('mat_ambient_light_r', worldColor[0] / 100);
        Convar.SetFloat('mat_ambient_light_g', worldColor[1] / 100);
        Convar.SetFloat('mat_ambient_light_b', worldColor[2] / 100);
    } else {
        Convar.SetFloat('mat_ambient_light_r', 0);
        Convar.SetFloat('mat_ambient_light_g', 0);
        Convar.SetFloat('mat_ambient_light_b', 0);
    }
    var worldBrightness = GetVal("world_brightness");
    if (worldBrightness < 0) {
        worldBrightness = 1 / Math.abs(worldBrightness / 2);
    }
    if (Convar.GetString("mat_force_tonemap_scale") != worldBrightness) {
        Convar.SetString("mat_force_tonemap_scale", worldBrightness + "");
    }
}

function worldColor2(entity) {
    var custom_bloom = /*(GetVal("bloom_scale") !== 0)*/ true;
    var props = 0;
    if (props == 0) {
        Entity.SetProp(entity, 'CEnvTonemapController', 'm_bUseCustomAutoExposureMin', custom_bloom);
        Entity.SetProp(entity, 'CEnvTonemapController', 'm_bUseCustomAutoExposureMax', custom_bloom);
        Entity.SetProp(entity, 'CEnvTonemapController', 'm_bUseCustomBloomScale', custom_bloom);
        props = 1;
    }
    if (props == 1) {
        //Entity.SetProp(entity, 'CEnvTonemapController', 'm_flCustomAutoExposureMin', GetVal("world_brightness"));
        //Entity.SetProp(entity, 'CEnvTonemapController', 'm_flCustomAutoExposureMax', GetVal("world_brightness"));
        if (custom_bloom) {
            Entity.SetProp(entity, 'CEnvTonemapController', 'm_flCustomBloomScale', GetVal("bloom_scale") / 10);
        }
    }
    var nightmodeAddition = (GetVal("darker_nightmode")) ? nightmode_modelBrightness : 0;
    Convar.SetFloat("r_modelAmbientMin", GetVal("model_brightness") / 10 + nightmodeAddition);
}

//Matchmaking FD
var fd_choke = [7, 4, 11, 12];
var fd_min_amount = [86, 92, 86, 100];
var fd_max_amount = [48, 52, 14, 0];
var fd_precision = [12, 12, 18, 20];
var doubletap_bak = false;
var hideshots_bak = false;
var duck_bak = false;
var fakelag_state_bak = UI.GetValue("Anti-Aim", "Fake-Lag", "Enabled");
var fakelag_limit_bak = UI.GetValue("Anti-Aim", "Fake-Lag", "Limit");
var fakelag_jitter_bak = UI.GetValue("Anti-Aim", "Fake-Lag", "Jitter");
var fakelag_triggers_bak = UI.GetValue("Anti-Aim", "Fake-Lag", "Triggers");
var fakelag_trigger_limit_bak = UI.GetValue("Anti-Aim", "Fake-Lag", "Trigger limit");
//var legitaa_state_bak = UI.GetValue("Anti-Aim", "Legit Anti-Aim", "Enabled");
//var fakeangles_state_bak = UI.GetValue("Anti-Aim", "Fake angles", "Enabled");
var fake_desync_bak = UI.GetValue("Anti-Aim", "Fake angles", "Fake desync");
var lby_bak = UI.GetValue("Anti-Aim", "Fake angles", "LBY mode");
var extend_angle_bak = UI.GetValue("Anti-Aim", "Legit Anti-Aim", "Extend angle");
var block_set6 = false;
var set_lock_camera = false;

function mmFD() {
    if (!GetVal("mm_fd")) return;
    UI.SetValue("Misc", "GENERAL", "Movement", "Fast crouch", true);
    local = Entity.GetLocalPlayer();
    var amount = Entity.GetProp(local, "CBasePlayer", "m_flDuckAmount") * 100;
    var fd_type = GetValue("Matchmaking FD presets");
    if (UI.IsHotkeyActive("Script items", "Matchmaking FD")) {
        var precision = /*Math.round(2 + clamp(10 - (fd_max_amount[fd_type] / 10), 0, 12))*/ fd_precision[fd_type];
        mmFDActive = true;
        var lock_camera = UI.IsHotkeyActive("Visual", "WORLD", "Thirdperson") && getVelocity(local) < 10 && GetValue("Matchmaking FD lock camera");
        var opposite_lby = GetValue("Matchmaking FD opposite LBY") && !GetValue("Lowdelta on FD");
        /*var weapons = Entity.GetProp(local, "CBasePlayer", "m_hMyWeapons");
        Cheat.Print(typeof weapons + "\n");
        var clip = weapon = Entity.GetProp(local, "CBaseEntity", "m_iAmmo");
        Cheat.Print(clip + "\n");*/
        block_set6 = false;
        duck_bak = true;
        if (exploitsActive("dt")) {
            doubletap_bak = true;
            UI.ToggleHotkey("Rage", "GENERAL", "Exploits", "Doubletap");
        }
        if (exploitsActive("hs")) {
            hideshots_bak = true;
            UI.ToggleHotkey("Rage", "GENERAL", "Exploits", "Hide shots");
        }

        //UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 0);
        UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", fd_choke[fd_type] + ((opposite_lby) ? 1 : 0));
        UI.SetValue("Anti-Aim", "Fake-Lag", "Jitter", 0);
        UI.SetValue("Anti-Aim", "Fake-Lag", "Triggers", /*(1 << 2) + (1 << 7) + */ 0);
        UI.SetValue("Anti-Aim", "Fake-Lag", "Trigger limit", 0);
        UI.SetValue("Anti-Aim", "Fake angles", "Fake desync", false);
        UI.SetValue("Anti-Aim", "Fake angles", "LBY mode", opposite_lby);
        UI.GetValue("Anti-Aim", "Legit Anti-Aim", "Extend angle", opposite_lby);
        UI.SetValue("Anti-Aim", "Fake-Lag", "Trigger limit", 0);
        //UI.SetValue("Anti-Aim", "Legit Anti-Aim", "Enabled", false);
        //UI.SetValue("Anti-Aim", "Fake angles", "Enabled", false);

        if (amount >= fd_min_amount[fd_type] - precision) {
            Convar.SetString('cl_lock_camera', '1');
            var fl_st = UI.GetValue("Anti-Aim", "Fake-Lag", "Enabled");
            //UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 21);
            fakelag(false);

            if (fl_st == false) {
                if (!Input.IsKeyPressed(17)) Cheat.ExecuteCommand("-duck");
            } else {
                return;
            }
        }
        if (amount > fd_min_amount[fd_type] - precision && amount < fd_max_amount[fd_type] + precision) {
            if (lock_camera)
                Convar.SetString('cl_lock_camera', '1');
            //UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 0);
            fakelag(true);
        }
        if (amount <= fd_max_amount[fd_type] + precision) {
            if (lock_camera) {
                if (!set_lock_camera) {
                    Convar.SetString('cl_lock_camera', '0');
                    set_lock_camera = true;
                } else {
                    Convar.SetString('cl_lock_camera', '1');
                    set_lock_camera = false;
                }
            }
            //UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 0);
            fakelag(true);
            Cheat.ExecuteCommand("+duck");
        } else {
            if (lock_camera) {
                if (fd_max_amount[fd_type] - amount <= 42) {
                    if (!set_lock_camera) {
                        //Convar.SetString('cl_lock_camera', '0');
                        set_lock_camera = true;
                    } else {
                        Convar.SetString('cl_lock_camera', '1');
                        set_lock_camera = false;
                    }
                }
            } else {
                Convar.SetString('cl_lock_camera', '0');
            }
        }
    } else {
        mmFDActive = false;
        if (!block_set6 && !legitAAactive) {
            Convar.SetString('cl_lock_camera', '0');
            fakelag(fakelag_state_bak);
            //UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yaw_bak);
            //UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", jitter_bak);
            UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", fakelag_limit_bak);
            UI.SetValue("Anti-Aim", "Fake-Lag", "Jitter", fakelag_jitter_bak);
            UI.SetValue("Anti-Aim", "Fake-Lag", "Triggers", fakelag_triggers_bak);
            UI.SetValue("Anti-Aim", "Fake-Lag", "Trigger limit", fakelag_trigger_limit_bak);
            UI.SetValue("Anti-Aim", "Fake angles", "Fake desync", fake_desync_bak);
            UI.SetValue("Anti-Aim", "Fake angles", "LBY mode", lby_bak);
            UI.SetValue("Anti-Aim", "Legit Anti-Aim", "Extend angle", extend_angle_bak);
            //UI.SetValue("Anti-Aim", "Legit Anti-Aim", "Enabled", legitaa_state_bak);
            //UI.SetValue("Anti-Aim", "Fake angles", "Enabled", fakeangles_state_bak);
            Convar.SetString('cl_lock_camera', '0');
            block_set6 = true;
        }
        if (!lowdelta_active && !legitAAactive && UI.IsMenuOpen()) {
            //yaw_bak = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset");
            //jitter_bak = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset");
            if (!noFakeLagOnRevolver) {
                fakelag_state_bak = UI.GetValue("Anti-Aim", "Fake-Lag", "Enabled");
            }
            fake_desync_bak = UI.GetValue("Anti-Aim", "Fake angles", "Fake desync");
            lby_bak = UI.GetValue("Anti-Aim", "Fake angles", "LBY mode");
            extend_angle_bak = UI.GetValue("Anti-Aim", "Legit Anti-Aim", "Extend angle");
            fakelag_limit_bak = UI.GetValue("Anti-Aim", "Fake-Lag", "Limit");
            fakelag_jitter_bak = UI.GetValue("Anti-Aim", "Fake-Lag", "Jitter");
            fakelag_triggers_bak = UI.GetValue("Anti-Aim", "Fake-Lag", "Triggers");
            fakelag_trigger_limit_bak = UI.GetValue("Anti-Aim", "Fake-Lag", "Trigger limit");
            //legitaa_state_bak = UI.GetValue("Anti-Aim", "Legit Anti-Aim", "Enabled");
            //fakeangles_state_bak = UI.GetValue("Anti-Aim", "Fake angles", "Enabled");
        }
        if (doubletap_bak == true) {
            UI.ToggleHotkey("Rage", "GENERAL", "Exploits", "Doubletap");
            doubletap_bak = false;
        }
        if (hideshots_bak == true) {
            UI.ToggleHotkey("Rage", "GENERAL", "Exploits", "Hide shots");
            hideshots_bak = false;
        }
        if (duck_bak == true) {
            if (!Input.IsKeyPressed(17)) Cheat.ExecuteCommand("-duck");
            duck_bak = false;
        }
    }
}

//Gernade helper
function Delay(delay, func, times) {
    if (!GetVal("gernade_helper")) return;
    this.delay = delay;
    this.resume = Globals.Curtime() + delay;
    this.func = func;
    this.times = 0;
    this.max = times || 1;
    delays.push(this);
}

Delay.prototype.run = function() {
    if (!GetVal("gernade_helper")) return;
    this.func();
    this.times++;
    this.resume += this.delay;
    return this.times >= this.max;
}

function checkDelays() {
    if (!GetVal("gernade_helper")) return;
    currTime = Globals.Curtime();

    delays.forEach(function(delay, index) {
        currTime >= delay.resume && delay.run() && delays.splice(index, 1);
    })
}

var coords

function vector_sub(vec1, vec2) {
    if (!GetVal("gernade_helper")) return;
    return [
        vec1[0] - vec2[0],
        vec1[1] - vec2[1],
        vec1[2] - vec2[2]
    ];
}

function getAngles(localPos, pos) {
    if (!GetVal("gernade_helper")) return;
    newPos = vector_sub(pos, localPos);
    xyDist = Math.sqrt((newPos[0] * newPos[0] + newPos[1] * newPos[1]));
    yaw = Math.atan2(newPos[1], newPos[0]) * 180 / Math.PI;
    pitch = Math.atan2(-newPos[2], xyDist) * 180 / Math.PI;
    roll = 0;
    angles = [pitch, yaw, roll];
    return angles;
}


function atv(pitch, yaw) {
    if (!GetVal("gernade_helper")) return;

    return [Math.cos(pitch * Math.PI / 180) * Math.cos(yaw * Math.PI / 180), Math.cos(pitch * Math.PI / 180) * Math.sin(yaw * Math.PI / 180), -Math.sin(pitch * Math.PI / 180)]

}

var scriptitems = ["Misc", "JAVASCRIPT", "Script Items"];

function menu_cb() {
    if (!GetVal("gernade_helper")) return;
    var enabled = UI.GetValue(scriptitems, "Enable gernade helper");
    UI.SetEnabled(scriptitems, "Automatic throw", enabled);
    UI.SetEnabled(scriptitems, "Automatic throw hotkey", enabled);
    UI.SetEnabled(scriptitems, "Grenade helper color", enabled);
    UI.SetEnabled(scriptitems, "Render nade on all map", enabled);
}

function grenade_helper() {
    if (!GetVal("gernade_helper")) return;
    menu_cb();
}

function dis(a, b) {
    if (!GetVal("gernade_helper")) return;
    var ax = a[0]

    var ay = a[1]

    var az = a[2]

    var bx = b[0]

    var by = b[1]

    var bz = b[2]

    var dx = ax - bx

    var dy = ay - by

    var dz = az - bz

    return Math.sqrt(dx * dx + dy * dy + dz * dz)

}

function alp(c, a) {
    if (!GetVal("gernade_helper")) return;
    return [c[0], c[1], c[2], a]

}

test = 0
movement_autothrow = []

function drawhelper() {
    if (!GetVal("gernade_helper")) return;
    weaponnames = {
        "flashbang": [43],
        "molotov": [46, 48],
        "smoke": [45],
        "nade": [44]
    }

    weapon = Entity.GetProp(Entity.GetWeapon(Entity.GetLocalPlayer()), "CEconEntity", "m_iItemDefinitionIndex")

    world = World.GetMapName()

    color = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Grenade helper color")

    var enabled = UI.GetValue(scriptitems, "Enable gernade helper");

    if (enabled) {
        if (!color) color = [255, 255, 255, 255]

        if ([46, 48, 45, 43, 44].indexOf(weapon) < 0) return

        // ["", "", "",  ],
        // ["", ,[]],

        if (world == "de_cbble") {
            movement_autothrow = [
                ["Boost Corner1", 1, [
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 283.2433776855469],
                    [450, 0, 283.2433776855469],
                    [450, 0, 283.2433776855469],
                    [450, 0, 270.74334716796875],
                    [450, 0, 270.7424011230469],
                    [450, 0, 270.7424011230469],
                    [450, 0, 258.2424011230469],
                    [450, 0, 258.2424011230469],
                    [450, 0, 258.2424011230469],
                    [450, 0, 258.2424011230469],
                    [450, 0, 245.74240112304688]
                ]],


            ]
        }
        if (world == "de_mirage") {
            movement_autothrow = [
                ["Under", 1, [
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0]
                ]],
                ["Window", 10, [
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0]
                ]],
                ["One-Way Ramp", 1, [
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 283.2433776855469],
                    [450, 0, 283.2433776855469],
                    [450, 0, 283.2433776855469]
                ]],
            ]
        }
        if (world == "de_dust2") {
            movement_autothrow = [
                []

            ]
        }
        if (world == "de_inferno") {
            movement_autothrow = [
                ["Pit", 8, [
                    [450.02211380004883, 0, 0],
                    [450.65053939819336, 0, 0],
                    [450.90695571899414, 0, 0],
                    [450.53515625, 0, 0],
                    [450.393945693969727, 0, 0],
                    [450.5786018371582, 0, 0],
                    [450.5311737060547, 0, 0],
                    [450.2818603515625, 0, 0],
                    [450.48575592041016, 0, 0],
                    [450.93397521972656, 0, 0],
                    [450.8269958496094, 0, 0],
                    [450.3787612915039, 0, 0],
                    [450.398193359375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0]
                ]],
                ["Mid", 1, [
                    [1.125562559813261, 0, 0],
                    [1.1255620624870062, 0, 0],
                    [1.12556217238307, 0, 0],
                    [1.1255620624870062, 0, 0],
                    [1.1255620624870062, 0, 0],
                    [1.124624202027917, 0, 0],
                    [1.12556217238307, 0, 0],
                    [21.543969690799713, 0, 0],
                    [36.43856465816498, 0, 0],
                    [66.22589480876923, 0, 0],
                    [81.11870193481445, 0, 0],
                    [109.75620746612549, 0, 0],
                    [122.38414692878723, 0, 0],
                    [133.98439383506775, 0, 0],
                    [133.9861981868744, 0, 0],
                    [144.6437792778015, 0, 0],
                    [163.4331409931183, 0, 0],
                    [163.4331409931183, 0, 0],
                    [179.29327392578125, 0, 0],
                    [186.26964616775513, 0, 0],
                    [192.68085193634033, 0, 0],
                    [198.56950902938843, 0, 0],
                    [192.68281269073486, 0, 0.00098419189453125],
                    [208.95178318023682, 0, 0],
                    [213.5128688812256, 0, 0],
                    [221.56566047668457, 0, 0],
                    [231.35248279571533, 0, 0],
                    [234.10069465637207, 0, 0],
                    [236.62394905090332, 0, 0],
                    [238.94390296936035, 0, 0],
                    [238.94390201568604, 0, 283.24334716796875],
                    [238.94586277008057, 0, 283.2424011230469],
                    [254.51007843017578, 0, 270.7424011230469]
                ]],
                ["Fountain", 12, [
                    [450.900423407554626, 0, 0],
                    [450.73103332519531, 0, 0],
                    [450.900423407554626, 0, 0],
                    [450.3917555809021, 0, 0],
                    [450.3917555809021, 0, 0],
                    [450.3917555809021, 0, 0],
                    [450.22231674194336, 0, 0],
                    [450.08318901062012, 0, 0],
                    [450.41434955596924, 0, 0],
                    [450.15271377563477, 0, 0],
                    [450.7157211303711, 0, 0],
                    [450.5017385482788, 0, 0],
                    [450.57388305664063, 0, 0],
                    [450.9901828765869, 0, 0],
                    [450.41479682922363, 0, 0],
                    [450.06400680541992, 0, 0],
                    [450.81544876098633, 0, 0],
                    [450.09961318969727, 0, 0],
                    [450.41479682922363, 0, 0],
                    [450.81321144104004, 0, 270.7433776855469],
                    [450.81321144104004, 0, 270.7433776855469],
                    [450.18292808532715, 0, 245.74240112304688],
                    [450.18292808532715, 0, 245.74240112304688]
                ]],
                ["Graveyard", 1, [
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 258.2433776855469],
                    [450, 0, 233.24337768554688],
                    [450, 0, 220.74337768554688],
                    [450, 0, 195.74337768554688],
                    [450, 0, 183.24337768554688],
                    [450, 0, 158.24337768554688],
                    [450, 0, 145.74337768554688]
                ]],
                ["Box", 1, [
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0]
                ]],
                ["Box A", 1, [
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 270.7433776855469],
                    [450, 0, 258.2433776855469],
                    [450, 0, 245.74240112304688],
                    [450, 0, 220.74240112304688],
                    [450, 0, 208.24240112304688],
                    [450, 0, 195.74240112304688],
                    [450, 0, 170.74240112304688]
                ]],
                ["Archade", 12, [
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 283.2433776855469],
                    [450, 0, 283.2433776855469],
                    [450, 0, 270.7433776855469],
                    [450, 0, 270.7433776855469],
                    [450, 0, 245.74337768554688],
                    [450, 0, 245.74337768554688],
                    [450, 0, 233.2433624267578]
                ]],
            ]

        }
        if (world == "de_nuke") {
            movement_autothrow = [
                []

            ]
        }
        if (world == "de_overpass") {
            movement_autothrow = [
                []

            ]
        }
        if (world == "de_train") {
            movement_autothrow = [
                []

            ]
        }
        if (world == "de_cache") {
            movement_autothrow = [
                []

            ]
        }
        if (world == "de_shortdust") {
            movement_autothrow = [
                ["Box", 4, [
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0]
                ]],
                ["One-Way Car", 8, [
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0]
                ]],

            ]
        }

        if (world == "de_cbble") coords = [
            ["Fountain", "Throw", "nade", 280.924866, -80.187576, -12.565859, -8.844892, -94.796295],
            ["Rock", "Throw", "molotov", 591.136230, -132.038406, 0.031250, -9.724643, -145.176041],
            ["Boost Corner", "Throw", "molotov", 47.968750, -16.031250, -23.177315, -31.504919, -124.580345],
            ["Boost Corner1", "Run + JumpThrow", "molotov", -94.259033, -239.954468, -31.968748, -18.909958, 91.239822],
            ["One-way Long", "Crouch + Right click", "smoke", 272.031250, -291.031250, -63.906189, -30.971577, 17.418360],
            ["B Long", "JumpThrow", "smoke", -1540.973389, -1226.978027, -25.199188, -50.672855, 41.294445],
            ["Matrix", "Throw", "smoke", -1864.968750, -1611.968750, 96.093810, -11.221231, 136.023499],
            ["B Long", "Throw", "smoke", -288.031250, 1020.970520, 128.093811, -51.547066, -53.167721],
            ["Truck - front", "Throw", "smoke", -3295.975586, 79.968750, -29.906188, -36.680634, -52.524323],
            ["Truck - right", "Throw", "smoke", -3168.031250, 79.968750, -29.906188, -47.158157, -65.556221],
            ["Grass", "Throw", "smoke", -3167.270508, 584.685120, 0.093811, -55.144222, -61.434193],
            ["Skyfall", "Throw", "smoke", -752.031250, -80.031250, 128.093811, 5.361639, -119.332336],
            ["Hut - right", "Throw", "smoke", -155.970673, -16.010778, -31.906188, -50.869473, -69.637550],
            ["Hut - left", "Throw", "smoke", -340.020111, -80.031250, -31.907466, -53.921837, -52.166801],
            ["Sandwich", "Throw", "smoke", 47.968750, -16.031250, -23.114716, -81.378204, -89.289169],
            ["Fountain", "Throw", "smoke", -418.514893, -95.749924, -32.562836, -75.323563, -61.343159],
            ["B Door", "Throw", "smoke", -558.031250, -42.535999, 0.093811, -62.173512, -100.720726],
            ["Balcony", "JumpThrow", "smoke", -2534.005371, -272.031250, -184.407272, -17.127037, -65.392319],
            ["A Door", "Walk + Throw", "smoke", -3346.178711, 455.572449, 0.093811, -40.327240, -45.610413],
            ["A Door", "Run + Throw", "smoke", -2989.968750, -944.371948, 32.093811, -12.160514, -4.402364],
            ["Skyfall", "Throw", "flashbang", -780.031250, 111.931717, 128.093811, -4.768500, -92.183800],
            ["Skyfall", "Throw", "flashbang", -590.995239, 434.631622, -0.906188, -17.854057, -108.593758],
            ["Wood", "Throw", "flashbang", -2907.962402, -1976.022705, 143.093811, -8.300402, 94.145882],
            ["Balcony", "Run + Throw", "molotov", -2989.968750, -944.036682, 32.093811, -15.675012, -32.634476],
            ["Wood", "Throw", "molotov", -2907.962402, -1976.022705, 143.093811, -8.300402, 94.145882]
        ]

        if (world == "de_mirage") coords = [
            ["One-Way Ramp", "Run + JumpThrow", "molotov", -34.403679, -1916.279053, -39.968750, 2.595078, 71.391121],
            ["Car", "Throw", "molotov", -1182.872070, 679.580505, -79.968750, -9.450004, 174.482330],
            ["Under", "Walk + Throw", "molotov", -34.409924, 822.263123, -135.968750, -8.459991, -150.967743],
            ["One-Way Site", "Throw", "molotov", -538.933411, -1309.055664, -159.968750, -11.109911, -75.805000],
            ["One-Way Box", "JumpThrow", "molotov", 663.968750, -1128.005005, -127.968750, 0.395009, -136.764679],
            ["Window", "Run + Throw", "molotov", 334.825684, -149.313019, -165.968750, -17.259995, -152.143692],
            ["Ramp", "Throw", "molotov", -1119.997314, -1527.024292, -156.076477, -17.370033, 0.035920],
            ["Stairs", "Throw", "molotov", 499.251617, -1574.105713, -261.590881, -25.290028, 176.995941],
            ["Window Mid", "JumpThrow", "smoke", 1423.964355, -248.026840, -167.906188, -25.723558, -170.518921],
            ["Connector", "JumpThrow ", "smoke", 1135.968750, 647.996033, -261.322754, -34.518116, -140.291428],
            ["Catwalk", "Throw", "smoke", 1423.997803, 71.985359, -112.840103, -32.653351, -163.530762],
            ["One-way Mid", "Right click", "smoke", 369.960144, -720.522705, -162.412476, 35.376301, 124.135780],
            ["Short", "Run + Throw", "smoke", 399.998444, 4.656666, -203.571350, -22.060497, -134.482208],
            ["Window Mid", "Throw", "smoke", -624.243530, 615.992065, -78.914246, -51.595604, -109.421127],
            ["Kitchen door", "Throw", "smoke", -2325.227783, 811.800659, -119.773079, -14.883981, -94.343178],
            ["Short", "Throw", "smoke", -160.031250, 887.968750, -135.265563, -44.269619, -134.435654],
            ["Kitchen window", "Throw", "smoke", -835.001404, 615.070190, -79.065735, -63.789238, -146.581238],
            ["Short", "Throw", "smoke", 341.836212, -620.153992, -163.282486, -23.134167, 164.957458],
            ["Connector + Jungle", "Throw", "smoke", 815.999512, -1457.235596, -108.906189, -26.797188, -174.613022],
            ["Stairs", "Throw", "smoke", 1148.225586, -1183.999756, -205.509155, -41.168613, -165.354019],
            ["Window Mid", "Run + Throw", "smoke", 1391.968750, -1011.236084, -167.906188, -42.603077, 172.188919],
            ["Stairs", "JumpThrow", "smoke", -90.864479, -1418.000244, -115.906189, -31.895834, -62.464306],
            ["Fireboxes", "JumpThrow", "smoke", 1391.968750, -930.076294, -167.906188, -21.037338, -151.204865],
            ["One-way", "Throw", "smoke", 457.968750, -1711.996582, -240.886871, -10.477256, 133.144836],
            ["Bombsite A", "Throw", "smoke", 815.998718, -1272.017944, -108.906189, -32.654591, -149.503601],
            ["CT Spawn", "JumpThrow", "smoke", 1257.861938, -871.968750, -143.906188, -21.318205, -144.344666],
            ["One-way", "Throw", "smoke", -1209.077515, -873.270447, -167.906188, -48.526600, 67.790833],
            ["One-way", "Right click", "smoke", -964.056885, -2489.520264, -167.913391, -41.926632, -10.765607],
            ["Ramp", "JumpThrow", "smoke", -2026.397583, -2029.968750, -299.060150, -15.312100, 12.573707],
            ["One-way Kitchen", "Throw", "smoke", -2600.019287, 535.973022, -159.906188, -16.582365, -50.818062],
            ["B Apps", "Throw", "flashbang", -2114.031250, 830.582214, -121.516441, -69.514664, 38.815456],
            ["Connector", "Throw", "flashbang", -496.031250, -1309.031250, -159.906188, -65.176048, -10.261290],
            ["Fireboxes", "Throw", "molotov", -31.432693, -1418.005371, -167.906188, -19.768339, -138.115036],
            ["Tetris", "Throw", "molotov", -364.996552, -2173.031250, -176.139190, -26.004026, 44.655296]
        ]

        if (world == "de_dust2") coords = [
            ["B Entrance", "Throw", "smoke", -1846.553223, 1232.569824, 32.496025, -8.613732, 118.773392],
            ["CT Mid", "Throw", "smoke", -538.606567, 1382.031250, -111.957108, -35.360550, 53.845985],
            ["Xbox", "Throw", "smoke", 229.130554, 112.497559, 5.215744, -40.624023, 108.758316],
            ["Long Corner", "Throw", "smoke", 222.664124, -87.978210, 9.093811, -46.250572, 48.164497],
            ["CT Spawn", "Run + Throw", "smoke", 860.031250, 790.031250, 3.900847, -23.414322, 43.616291],
            ["Short (Close)", "Throw", "smoke", 489.998535, 1446.031250, 2.660506, -5.677320, 88.280685],
            ["Long Gate", "Throw", "smoke", 1752.049561, 2046.932739, 0.365111, -33.430305, -130.546280],
            ["Lower Mid", "Throw", "smoke", -242.031250, 2278.887695, -119.931587, -32.687481, -123.649094],
            ["Upper Tunnel", "Throw", "smoke", -985.452942, 2553.223877, 1.318862, -26.764244, -143.848251],
            ["Bombsite B", "Throw", "flashbang", -1273.968750, 2575.968750, 67.353363, -42.043125, 1.218936],
            ["Bombsite B", "Throw", "molotov", -760.031250, 2066.031250, -45.182931, -23.497030, 132.684860]
        ]

        if (world == "de_inferno") coords = [
            ["Graveyard", "Run + JumpThrow", "molotov", 2017.503174, 1225.968750, 178.031250, -33.659977, -64.684898],
            ["Mid", "Run + JumpThrow", "molotov", 2343.707520, 568.729492, 145.928940, -38.500111, -178.690613],
            ["Fountain", "Run + JumpThrow", "molotov", 362.636536, 1726.205933, 128.376053, -39.875027, 95.339996],
            ["Triple Box", "Throw", "molotov", 877.968750, 2393.092041, 150.504181, -13.529912, 168.994965],
            ["Library", "JumpThrow", "molotov", 1314.032593, 797.901489, 153.586700, -26.509958, 10.154735],
            ["Box", "Run + Throw", "molotov", 1364.515015, 277.541809, 135.426834, -17.755112, -48.144848],
            ["Archade", "Run + JumpThrow", "molotov", 1287.723633, 434.031250, 125.995117, -36.354294, 55.140560],
            ["Default", "JumpThrow", "molotov", 1961.373169, 1225.968750, 175.031250, -34.145012, -79.280289],
            ["Stove", "Throw", "molotov", 698.401245, -267.968750, 105.031250, -21.614807, 32.599926],
            ["Mid", "Run + Throw", "smoke", -857.968750, 449.902283, -31.604805, -44.401531, 1.405892],
            ["Pit", "Run + Throw", "molotov", 2105.090088, 1168.412354, 165.084000, -13.804811, -63.900101],
            ["Box A", "Run + JumpThrow", "molotov", 2079.774658, 1225.998535, 180.093811, -37.500053, -89.940086],
            ["Coffins", "Throw", "smoke", 338.871887, 1650.802856, 122.093810, -50.093639, 84.572739],
            ["B Entrance", "Throw", "smoke", 460.464905, 1828.470825, 136.182693, -25.443281, 86.280159],
            ["CT Spawn", "Throw", "smoke", 119.999580, 1587.966187, 113.307662, -34.798424, 56.149929],
            ["Long (Deep)", "Run + Throw", "smoke", 274.681335, -224.627777, 88.093810, -41.052132, 31.799410],
            ["Pit (Crack)", "Throw", "smoke", 704.160339, 11.968750, 88.797089, -52.337799, -2.135024],
            ["Short (Deep)", "Throw", "smoke", 697.511902, -242.261810, 91.093810, -53.097946, 16.442726],
            ["Library to A", "Throw", "smoke", 960.900330, 434.006409, 88.093810, -49.863846, 13.159984],
            ["Pit to Hay", "Throw", "smoke", 726.031250, 220.962921, 94.029999, -55.241890, -8.699924],
            ["Long", "Throw", "smoke", 491.936829, -267.968750, 88.093810, -42.024933, 45.854645],
            ["Bombsite B", "Throw", "smoke", 1971.687988, 2636.702393, 128.093811, -39.996227, 175.975357],
            ["Connector", "Throw", "smoke", 726.031250, 288.680084, 96.093810, -43.560978, 41.450943],
            ["One-way", "Throw", "smoke", 2631.968750, -16.031250, 84.093810, -5.692367, -179.128860],
            ["Balcony", "Throw", "smoke", 1913.227295, 1225.968750, 174.093811, -46.497322, -87.005005],
            ["B Entrance", "Throw", "flashbang", 498.968750, 2444.031250, 160.093811, 1.748943, 142.807571],
            ["Banana", "Throw", "flashbang", 610.968750, 1873.031250, 134.252365, -44.186985, -0.872295],
            ["Short", "Walk + Throw", "flashbang", 1275.968750, -111.968750, 256.093811, 9.454458, 116.691383],
            ["Bombsite A", "Crouch + Throw", "flashbang", 1329.031250, -365.989349, 256.093811, -29.733957, -22.831499],
            ["B Plant", "JumpThrow", "molotov", 929.176636, 3295.995117, 144.093811, -45.887463, -131.960571],
            ["3s", "Throw", "molotov", 999.982422, 1878.530640, 149.329788, -26.647552, 141.132538],
            ["Coffins", "Throw", "molotov", 664.968750, 1873.031250, 168.093811, -24.272781, 96.641022]
        ]

        if (world == "de_nuke") coords = [
            ["Hangar", "Throw", "smoke", -164.092941, -1954.733765, -415.916107, -13.613587, 1.278547],
            ["Red container", "Throw", "smoke", -533.003357, -833.215759, -193.634827, -30.904673, -43.816589],
            ["Between containers", "Run + Throw", "smoke", -423.996399, -1753.002075, -415.914856, -2.624159, -50.804165],
            ["T Outside", "JumpThrow", "smoke", 1664.031250, -280.002014, -351.906250, -25.048063, -135.212463]
        ]

        if (world == "de_overpass") coords = [
            ["Stairs", "Run + JumpThrow", "molotov", -3750.460938, -250.358826, 520.609863, 5.050490, 35.776577],
            ["Barrels", "Run + Throw", "molotov", -430.186157, -1551.968750, 150.031250, -16.164569, 101.556863],
            ["Heaven", "Walk + JumpThrow", "molotov", -856.031311, -639.968750, 105.031250, 4.120225, 128.027786],
            ["Barrels", "Throw", "molotov", -1580.517578, -710.171814, 135.334778, -14.950030, 60.188404],
            ["Water", "Throw", "molotov", -1276.541260, -964.551147, 10.933800, -23.484703, 82.194580],
            ["Toilet entrance", "Run + Throw", "smoke", -730.031250, -2225.143799, 240.093811, -51.612926, 149.045975],
            ["B Bridge", "Throw", "smoke", -617.486389, -1509.028809, 144.093811, -48.988934, 113.071342],
            ["B Center", "Throw", "smoke", -525.982300, -1551.984375, 144.093811, -43.807911, 110.431473],
            ["Barrels to Pillar", "Throw", "smoke", -613.014099, -1082.017212, 42.160416, -29.337307, 99.340714],
            ["B Center", "Throw", "smoke", -1567.968750, -1087.984619, 0.093811, -30.278185, 74.646019],
            ["Monster to Pillar", "Throw", "smoke", -1645.986938, -1087.982300, 96.093810, -20.015800, 55.835869],
            ["Heaven", "Throw", "smoke", -1559.968750, -728.785583, 52.574355, -33.446209, 96.293686],
            ["B Bridge", "Throw", "smoke", -1559.999390, -361.285339, 32.421722, -43.693123, 21.193089],
            ["Heaven", "Throw", "smoke", -2174.002441, -1151.968750, 398.197235, -26.368107, 71.543701],
            ["Long to Boxes", "Throw", "smoke", -2025.534058, -865.001343, 395.427856, -28.313963, 114.564102],
            ["Bank", "Throw", "smoke", -2162.000488, -519.968750, 391.460358, -29.749702, 100.836487],
            ["Truck to Bank", "Throw", "smoke", -3612.545654, -177.626740, 512.791992, -40.392601, 51.259613],
            ["Boxes to Truck", "Throw", "smoke", -3540.031250, -381.968750, 528.080200, -14.256992, 41.849758],
            ["Truck", "Throw", "smoke", -2351.968750, -815.968750, 391.089905, -34.683971, 81.500427],
            ["Trash", "Throw", "smoke", -2351.968750, -414.031250, 388.562317, -60.588089, 73.825958],
            ["Trash", "Throw", "smoke", -3383.369629, 35.247875, 516.906006, -18.035419, 31.699080],
            ["Long", "Crouch + Throw", "smoke", -1993.398926, 537.698242, 475.093810, -28.677984, -169.596695],
            ["Monster", "Throw", "smoke", -1926.860962, 1311.968750, 355.030579, -46.200985, -40.010532],
            ["One-way", "Throw", "smoke", -2191.968750, 1311.968750, 356.093811, -8.861760, -55.390415],
            ["One-way", "Right click", "smoke", -1826.375610, 629.178894, 256.093811, 26.580435, -17.457275],
            ["One-way", "Throw", "smoke", -2012.968750, -1231.968750, 240.093811, 16.218643, 63.144173],
            ["Short B", "Throw", "smoke", -2115.841309, 992.920288, 480.093810, -22.936214, -57.690578],
            ["Bombsite A", "Throw", "flashbang", -2604.023926, 1102.215088, 480.093810, -24.090078, 70.938210],
            ["Barrels", "Throw", "molotov", -1580.023315, -480.767883, 136.093811, -20.147602, 53.764153],
            ["Bombsite B", "Throw", "molotov", -1399.968750, -139.998840, 0.093811, -15.444187, 63.084324]
        ]

        if (world == "de_train") coords = [
            ["B site", "Throw", "molotov", -1085.563477, -954.344543, -55.968750, -2.244908, -11.982774],
            ["Default", "Walk + Throw", "molotov", 1054.867188, 426.185638, -215.982330, -14.129807, -158.603027],
            ["Heaven", "Throw", "molotov", 132.170197, 499.088257, -219.968750, -30.679949, -56.869923],
            ["Site", "Run + Throw", "molotov", -338.848297, 307.854095, -215.968750, -29.580017, -36.570026],
            ["B Upper", "Throw", "smoke", -1055.968750, -1607.969116, -151.906188, -9.076089, -21.028521],
            ["B Lower", "Throw", "smoke", -1159.978027, -1088.112549, -95.909508, -9.122071, 13.307947],
            ["Blue to Bombsite", "Run + Throw", "smoke", -1155.979004, -1301.504395, -95.906189, -15.857571, 38.882820],
            ["Connector", "Run + Throw", "smoke", -1159.999634, -1048.001709, -95.906189, -11.023086, 5.091055],
            ["Ivy (right)", "Throw", "smoke", 1388.426270, 1446.000488, -223.906189, -6.188282, -95.524574],
            ["Ivy (left)", "Run + Throw", "smoke", 1535.968750, 1775.968750, -223.906189, -9.818258, -112.486588],
            ["Bombsite A to Connector", "Both buttons", "smoke", -655.968750, -399.892731, 16.093811, -46.002502, 10.890710],
            ["Blue to Red train", "Throw", "smoke", -645.479370, 1697.721924, -209.906189, -41.564690, -65.086685],
            ["Electric box", "Throw", "smoke", -481.865631, 1725.011597, -209.906189, -45.937080, -78.790627],
            ["Blue train (Left)", "Throw", "smoke", -555.031250, 1262.031250, -212.532227, -68.096550, -50.974125],
            ["Green to Red train", "Throw", "smoke", -838.162292, 1268.024414, -222.906189, -37.604507, -42.064575],
            ["Ivy to Green train", "Throw", "smoke", -640.027832, -583.969666, 16.093811, -44.699406, 32.218452],
            ["Bombsite A to Red train", "Throw", "smoke", -453.358459, 1286.284668, -86.490753, -25.130558, -58.731426],
            ["Main", "Throw", "smoke", 1021.096924, -254.988556, -215.906189, -38.494926, 154.562332],
            ["Bombsite A", "Run + Throw", "flashbang", 400.031250, -420.031250, -211.777573, -28.859020, -89.674629],
            ["Blue train (Back)", "Run + Throw", "molotov", -790.028748, 375.928741, -215.906189, -11.270589, 27.332729]
        ]

        if (world == "de_cache") coords = [
            ["Ventsroom", "Throw", "smoke", 837.744141, -872.015564, 1614.093750, -15.362073, 177.850555],
            ["Headshot", "Throw", "smoke", 960.031250, -1463.968750, 1644.093750, -26.400745, 162.851730],
            ["B Center", "Throw", "smoke", 827.971313, -1463.968750, 1614.093750, -21.995483, 162.191437],
            ["Mid Center", "Throw", "smoke", 1711.974121, 463.987732, 1614.093750, -10.675973, -167.299591],
            ["Connector", "Throw", "smoke", 1160.711182, 715.841675, 1613.093750, -31.334572, -153.088974],
            ["White box", "Throw", "smoke", 2156.583740, -182.968750, 1613.483887, -22.077839, 161.943924],
            ["One-way", "Throw", "smoke", 1037.031250, 513.031250, 1613.550293, -49.137814, 104.639671],
            ["Mid (Right side)", "Throw", "smoke", 1711.968750, -71.968750, 1614.093750, -10.560504, 161.185349],
            ["Bombsite A", "Crouch + Throw", "smoke", 154.413376, 2096.080566, 1688.093750, 9.370919, -29.337667],
            ["Short", "Run + Throw", "smoke", 139.031250, 2197.968750, 1688.093750, -6.040052, -60.836231],
            ["Bombsite A", "Throw", "smoke", 1319.968750, 1520.395508, 1701.093750, -57.767025, 161.424835],
            ["Forklift", "Throw", "smoke", 1230.754150, 1612.968750, 1701.965088, -74.514435, -173.894516],
            ["Main", "Throw", "smoke", -782.198059, 1110.000366, 1689.439697, -9.703021, 24.963852],
            ["Main", "Throw", "smoke", -429.968750, 2244.968750, 1687.093750, -66.017174, -31.140173],
            ["Main", "Throw", "smoke", -50.012558, 2261.968750, 1687.093750, -18.612713, -64.612831],
            ["Vents", "Run + Throw", "smoke", -996.979553, 1440.231689, 1691.182373, -33.181599, -46.326721],
            ["Bombsite A", "Throw", "flashbang", -358.534668, 2147.728027, 1687.093750, -17.540194, 2.039984],
            ["Bombsite A", "Throw", "flashbang", 89.984558, 2244.983398, 1687.093750, -71.181236, -93.482628],
            ["Bombsite B", "Both buttons", "flashbang", -633.975891, -379.968750, 1620.093750, -41.629662, -58.865555],
            ["Mid", "Crouch + Throw", "flashbang", 114.968750, -107.322037, 1613.718506, -16.913092, -84.200432],
            ["Mid", "Run + Throw", "flashbang", 1736.970581, 308.968750, 1614.093750, -9.157659, 162.762833],
            ["Bombsite B", "Throw", "flashbang", 879.802185, -872.031250, 1614.093750, -14.157107, 177.892853],
            ["Bombsite B", "Throw", "molotov", 907.649597, -1228.031250, 1614.093750, -23.876366, -179.771790],
            ["White box", "Throw", "molotov", 605.005188, -149.968750, 1689.035889, -6.584105, 133.537994],
            ["Boost", "Throw", "molotov", 11.759085, -148.994904, 1613.093750, -32.654572, 38.675369]
        ]

        if (world == "de_shortdust") coords = [
            ["Box", "Run + Throw", "molotov", -309.406403, 1933.314819, 32.031250, -5.444888, -45.821072],
            ["Car", "Throw", "molotov", -893.477783, 956.593933, 35.031250, -11.485014, -34.438034],
            ["One-Way CT", "Throw", "molotov", -450.279297, 780.684265, 40.753510, -19.734886, -50.160259],
            ["One-Way Car", "Run + Throw", "molotov", -1279.968750, 1039.968750, -170.329315, -27.609568, -18.734381]
        ]


        var font1 = Render.AddFont("Verdana", 10, 600)

        var font2 = Render.AddFont("Verdana", 12, 600)

        var font3 = Render.AddFont("Verdana", 12, 500)

        var scsiz = Render.GetScreenSize()
        var scrmid = [Render.GetScreenSize()[0] / 2, Render.GetScreenSize()[1] / 2]

        var coordslenght = 0

        color_circle = [0, 0, 0, 0]

        while (coords[coordslenght]) {

            coordslenght++

        }
        // if(UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Automatic Throw Hotkey") && UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Automatic Throw"))
        // {
        //   get_velocity()
        // }
        for (var i = 0; i < coordslenght; i++) {

            crd = coords[i]

            if (weaponnames[crd[2]].indexOf(weapon) >= 0) {

                cds = Render.WorldToScreen([crd[3], crd[4], crd[5]])

                var distance = dis([crd[3], crd[4], crd[5]], Entity.GetRenderOrigin(Entity.GetLocalPlayer()))
                var nadeallmap = UI.GetValue(scriptitems, "Render nade on all map");

                if (nadeallmap) {
                    if (distance >= 7000 - 255 && distance <= 7000) {
                        Render.StringCustom(cds[0], cds[1], 1, crd[0], alp(color, Math.round(Math.min(255, 7000 - distance))), font1)
                        continue;
                    }
                    if (distance < 7000 - 255 && distance >= 10) {
                        Render.StringCustom(cds[0], cds[1], 1, crd[0], alp(color, 255), font1)
                    }
                } else {
                    if (distance >= 800 - 255 && distance <= 800) {
                        Render.StringCustom(cds[0], cds[1], 1, crd[0], alp(color, Math.round(Math.min(255, 800 - distance))), font1)
                        continue;
                    }
                    if (distance < 800 - 255 && distance >= 10) {
                        Render.StringCustom(cds[0], cds[1], 1, crd[0], alp(color, 255), font1)
                    }
                }

                if (dis([crd[3], crd[4], crd[5]], Entity.GetRenderOrigin(Entity.GetLocalPlayer())) < 10) {

                    Render.StringCustom(cds[0], cds[1], 1, crd[0], alp(color, 255), font2)


                    vec = atv(crd[6], crd[7])

                    wec = Render.WorldToScreen([crd[3] + vec[0] * 200, crd[4] + vec[1] * 200, crd[5] + 64 + vec[2] * 200])


                    Render.StringCustom(wec[0] + 14, wec[1] - 9, 0, crd[1], alp(color, 255), font3)

                    Render.Line(scsiz[0] / 2, scsiz[1] / 2, wec[0], wec[1], alp(color, 255))


                    if ((Math.abs(wec[0] - scrmid[0]) + Math.abs(wec[1] - scrmid[1])) <= 5) {
                        color_circle = [0, 255, 0, 255]
                    } else {
                        color_circle = [255, 0, 0, 255]
                    }

                    Render.FilledCircle(wec[0], wec[1], 5, (color_circle));

                    Render.Circle(wec[0], wec[1], 5, alp(color, 255))
                }
            }
        }
    }
}

coords_auto_throw = []
tickcount = 0
running = false;

function on_create_move() {
    if (!GetVal("gernade_helper")) return;
    weaponnames = {
        "flashbang": [43],
        "molotov": [46, 48],
        "smoke": [45],
        "nade": [44]
    }

    weapon = Entity.GetProp(Entity.GetWeapon(Entity.GetLocalPlayer()), "CEconEntity", "m_iItemDefinitionIndex")

    world = World.GetMapName()

    color = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Grenade helper color")

    var enabled = UI.GetValue(scriptitems, "Enable gernade helper");

    if (enabled) {
        if (!color) color = [255, 255, 255, 255]

        if ([46, 48, 45, 43, 44].indexOf(weapon) < 0) return

        // ["", "", "",  ],
        // ["", ,[]],

        if (world == "de_cbble") {
            movement_autothrow = [
                ["Boost Corner1", 1, [
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 283.2433776855469],
                    [450, 0, 283.2433776855469],
                    [450, 0, 283.2433776855469],
                    [450, 0, 270.74334716796875],
                    [450, 0, 270.7424011230469],
                    [450, 0, 270.7424011230469],
                    [450, 0, 258.2424011230469],
                    [450, 0, 258.2424011230469],
                    [450, 0, 258.2424011230469],
                    [450, 0, 258.2424011230469],
                    [450, 0, 245.74240112304688]
                ]],


            ]
        }
        if (world == "de_mirage") {
            movement_autothrow = [
                ["Under", 1, [
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0]
                ]],
                ["Window", 10, [
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0]
                ]],
                ["One-Way Ramp", 1, [
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 283.2433776855469],
                    [450, 0, 283.2433776855469],
                    [450, 0, 283.2433776855469]
                ]],
            ]
        }
        if (world == "de_dust2") {
            movement_autothrow = [
                []

            ]
        }
        if (world == "de_inferno") {
            movement_autothrow = [
                ["Pit", 8, [
                    [450.02211380004883, 0, 0],
                    [450.65053939819336, 0, 0],
                    [450.90695571899414, 0, 0],
                    [450.53515625, 0, 0],
                    [450.393945693969727, 0, 0],
                    [450.5786018371582, 0, 0],
                    [450.5311737060547, 0, 0],
                    [450.2818603515625, 0, 0],
                    [450.48575592041016, 0, 0],
                    [450.93397521972656, 0, 0],
                    [450.8269958496094, 0, 0],
                    [450.3787612915039, 0, 0],
                    [450.398193359375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0]
                ]],
                ["Mid", 1, [
                    [1.125562559813261, 0, 0],
                    [1.1255620624870062, 0, 0],
                    [1.12556217238307, 0, 0],
                    [1.1255620624870062, 0, 0],
                    [1.1255620624870062, 0, 0],
                    [1.124624202027917, 0, 0],
                    [1.12556217238307, 0, 0],
                    [21.543969690799713, 0, 0],
                    [36.43856465816498, 0, 0],
                    [66.22589480876923, 0, 0],
                    [81.11870193481445, 0, 0],
                    [109.75620746612549, 0, 0],
                    [122.38414692878723, 0, 0],
                    [133.98439383506775, 0, 0],
                    [133.9861981868744, 0, 0],
                    [144.6437792778015, 0, 0],
                    [163.4331409931183, 0, 0],
                    [163.4331409931183, 0, 0],
                    [179.29327392578125, 0, 0],
                    [186.26964616775513, 0, 0],
                    [192.68085193634033, 0, 0],
                    [198.56950902938843, 0, 0],
                    [192.68281269073486, 0, 0.00098419189453125],
                    [208.95178318023682, 0, 0],
                    [213.5128688812256, 0, 0],
                    [221.56566047668457, 0, 0],
                    [231.35248279571533, 0, 0],
                    [234.10069465637207, 0, 0],
                    [236.62394905090332, 0, 0],
                    [238.94390296936035, 0, 0],
                    [238.94390201568604, 0, 283.24334716796875],
                    [238.94586277008057, 0, 283.2424011230469],
                    [254.51007843017578, 0, 270.7424011230469]
                ]],
                ["Fountain", 12, [
                    [450.900423407554626, 0, 0],
                    [450.73103332519531, 0, 0],
                    [450.900423407554626, 0, 0],
                    [450.3917555809021, 0, 0],
                    [450.3917555809021, 0, 0],
                    [450.3917555809021, 0, 0],
                    [450.22231674194336, 0, 0],
                    [450.08318901062012, 0, 0],
                    [450.41434955596924, 0, 0],
                    [450.15271377563477, 0, 0],
                    [450.7157211303711, 0, 0],
                    [450.5017385482788, 0, 0],
                    [450.57388305664063, 0, 0],
                    [450.9901828765869, 0, 0],
                    [450.41479682922363, 0, 0],
                    [450.06400680541992, 0, 0],
                    [450.81544876098633, 0, 0],
                    [450.09961318969727, 0, 0],
                    [450.41479682922363, 0, 0],
                    [450.81321144104004, 0, 270.7433776855469],
                    [450.81321144104004, 0, 270.7433776855469],
                    [450.18292808532715, 0, 245.74240112304688],
                    [450.18292808532715, 0, 245.74240112304688]
                ]],
                ["Graveyard", 1, [
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 258.2433776855469],
                    [450, 0, 233.24337768554688],
                    [450, 0, 220.74337768554688],
                    [450, 0, 195.74337768554688],
                    [450, 0, 183.24337768554688],
                    [450, 0, 158.24337768554688],
                    [450, 0, 145.74337768554688]
                ]],
                ["Box", 1, [
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0]
                ]],
                ["Box A", 1, [
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 270.7433776855469],
                    [450, 0, 258.2433776855469],
                    [450, 0, 245.74240112304688],
                    [450, 0, 220.74240112304688],
                    [450, 0, 208.24240112304688],
                    [450, 0, 195.74240112304688],
                    [450, 0, 170.74240112304688]
                ]],
                ["Archade", 12, [
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 283.2433776855469],
                    [450, 0, 283.2433776855469],
                    [450, 0, 270.7433776855469],
                    [450, 0, 270.7433776855469],
                    [450, 0, 245.74337768554688],
                    [450, 0, 245.74337768554688],
                    [450, 0, 233.2433624267578]
                ]],
            ]

        }
        if (world == "de_nuke") {
            movement_autothrow = [
                []

            ]
        }
        if (world == "de_overpass") {
            movement_autothrow = [
                []

            ]
        }
        if (world == "de_train") {
            movement_autothrow = [
                []

            ]
        }
        if (world == "de_cache") {
            movement_autothrow = [
                []

            ]
        }
        if (world == "de_shortdust") {
            movement_autothrow = [
                ["Box", 4, [
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0]
                ]],
                ["One-Way Car", 8, [
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0]
                ]],

            ]
        }

        if (world == "de_cbble") coords = [
            ["Fountain", "Throw", "nade", 280.924866, -80.187576, -12.565859, -8.844892, -94.796295],
            ["Rock", "Throw", "molotov", 591.136230, -132.038406, 0.031250, -9.724643, -145.176041],
            ["Boost Corner", "Throw", "molotov", 47.968750, -16.031250, -23.177315, -31.504919, -124.580345],
            ["Boost Corner1", "Run + JumpThrow", "molotov", -94.259033, -239.954468, -31.968748, -18.909958, 91.239822],
            ["One-way Long", "Crouch + Right click", "smoke", 272.031250, -291.031250, -63.906189, -30.971577, 17.418360],
            ["B Long", "JumpThrow", "smoke", -1540.973389, -1226.978027, -25.199188, -50.672855, 41.294445],
            ["Matrix", "Throw", "smoke", -1864.968750, -1611.968750, 96.093810, -11.221231, 136.023499],
            ["B Long", "Throw", "smoke", -288.031250, 1020.970520, 128.093811, -51.547066, -53.167721],
            ["Truck - front", "Throw", "smoke", -3295.975586, 79.968750, -29.906188, -36.680634, -52.524323],
            ["Truck - right", "Throw", "smoke", -3168.031250, 79.968750, -29.906188, -47.158157, -65.556221],
            ["Grass", "Throw", "smoke", -3167.270508, 584.685120, 0.093811, -55.144222, -61.434193],
            ["Skyfall", "Throw", "smoke", -752.031250, -80.031250, 128.093811, 5.361639, -119.332336],
            ["Hut - right", "Throw", "smoke", -155.970673, -16.010778, -31.906188, -50.869473, -69.637550],
            ["Hut - left", "Throw", "smoke", -340.020111, -80.031250, -31.907466, -53.921837, -52.166801],
            ["Sandwich", "Throw", "smoke", 47.968750, -16.031250, -23.114716, -81.378204, -89.289169],
            ["Fountain", "Throw", "smoke", -418.514893, -95.749924, -32.562836, -75.323563, -61.343159],
            ["B Door", "Throw", "smoke", -558.031250, -42.535999, 0.093811, -62.173512, -100.720726],
            ["Balcony", "JumpThrow", "smoke", -2534.005371, -272.031250, -184.407272, -17.127037, -65.392319],
            ["A Door", "Walk + Throw", "smoke", -3346.178711, 455.572449, 0.093811, -40.327240, -45.610413],
            ["A Door", "Run + Throw", "smoke", -2989.968750, -944.371948, 32.093811, -12.160514, -4.402364],
            ["Skyfall", "Throw", "flashbang", -780.031250, 111.931717, 128.093811, -4.768500, -92.183800],
            ["Skyfall", "Throw", "flashbang", -590.995239, 434.631622, -0.906188, -17.854057, -108.593758],
            ["Wood", "Throw", "flashbang", -2907.962402, -1976.022705, 143.093811, -8.300402, 94.145882],
            ["Balcony", "Run + Throw", "molotov", -2989.968750, -944.036682, 32.093811, -15.675012, -32.634476],
            ["Wood", "Throw", "molotov", -2907.962402, -1976.022705, 143.093811, -8.300402, 94.145882]
        ]

        if (world == "de_mirage") coords = [
            ["One-Way Ramp", "Run + JumpThrow", "molotov", -34.403679, -1916.279053, -39.968750, 2.595078, 71.391121],
            ["Car", "Throw", "molotov", -1182.872070, 679.580505, -79.968750, -9.450004, 174.482330],
            ["Under", "Walk + Throw", "molotov", -34.409924, 822.263123, -135.968750, -8.459991, -150.967743],
            ["One-Way Site", "Throw", "molotov", -538.933411, -1309.055664, -159.968750, -11.109911, -75.805000],
            ["One-Way Box", "JumpThrow", "molotov", 663.968750, -1128.005005, -127.968750, 0.395009, -136.764679],
            ["Window", "Run + Throw", "molotov", 334.825684, -149.313019, -165.968750, -17.259995, -152.143692],
            ["Ramp", "Throw", "molotov", -1119.997314, -1527.024292, -156.076477, -17.370033, 0.035920],
            ["Stairs", "Throw", "molotov", 499.251617, -1574.105713, -261.590881, -25.290028, 176.995941],
            ["Window Mid", "JumpThrow", "smoke", 1423.964355, -248.026840, -167.906188, -25.723558, -170.518921],
            ["Connector", "JumpThrow ", "smoke", 1135.968750, 647.996033, -261.322754, -34.518116, -140.291428],
            ["Catwalk", "Throw", "smoke", 1423.997803, 71.985359, -112.840103, -32.653351, -163.530762],
            ["One-way Mid", "Right click", "smoke", 369.960144, -720.522705, -162.412476, 35.376301, 124.135780],
            ["Short", "Run + Throw", "smoke", 399.998444, 4.656666, -203.571350, -22.060497, -134.482208],
            ["Window Mid", "Throw", "smoke", -624.243530, 615.992065, -78.914246, -51.595604, -109.421127],
            ["Kitchen door", "Throw", "smoke", -2325.227783, 811.800659, -119.773079, -14.883981, -94.343178],
            ["Short", "Throw", "smoke", -160.031250, 887.968750, -135.265563, -44.269619, -134.435654],
            ["Kitchen window", "Throw", "smoke", -835.001404, 615.070190, -79.065735, -63.789238, -146.581238],
            ["Short", "Throw", "smoke", 341.836212, -620.153992, -163.282486, -23.134167, 164.957458],
            ["Connector + Jungle", "Throw", "smoke", 815.999512, -1457.235596, -108.906189, -26.797188, -174.613022],
            ["Stairs", "Throw", "smoke", 1148.225586, -1183.999756, -205.509155, -41.168613, -165.354019],
            ["Window Mid", "Run + Throw", "smoke", 1391.968750, -1011.236084, -167.906188, -42.603077, 172.188919],
            ["Stairs", "JumpThrow", "smoke", -90.864479, -1418.000244, -115.906189, -31.895834, -62.464306],
            ["Fireboxes", "JumpThrow", "smoke", 1391.968750, -930.076294, -167.906188, -21.037338, -151.204865],
            ["One-way", "Throw", "smoke", 457.968750, -1711.996582, -240.886871, -10.477256, 133.144836],
            ["Bombsite A", "Throw", "smoke", 815.998718, -1272.017944, -108.906189, -32.654591, -149.503601],
            ["CT Spawn", "JumpThrow", "smoke", 1257.861938, -871.968750, -143.906188, -21.318205, -144.344666],
            ["One-way", "Throw", "smoke", -1209.077515, -873.270447, -167.906188, -48.526600, 67.790833],
            ["One-way", "Right click", "smoke", -964.056885, -2489.520264, -167.913391, -41.926632, -10.765607],
            ["Ramp", "JumpThrow", "smoke", -2026.397583, -2029.968750, -299.060150, -15.312100, 12.573707],
            ["One-way Kitchen", "Throw", "smoke", -2600.019287, 535.973022, -159.906188, -16.582365, -50.818062],
            ["B Apps", "Throw", "flashbang", -2114.031250, 830.582214, -121.516441, -69.514664, 38.815456],
            ["Connector", "Throw", "flashbang", -496.031250, -1309.031250, -159.906188, -65.176048, -10.261290],
            ["Fireboxes", "Throw", "molotov", -31.432693, -1418.005371, -167.906188, -19.768339, -138.115036],
            ["Tetris", "Throw", "molotov", -364.996552, -2173.031250, -176.139190, -26.004026, 44.655296]
        ]

        if (world == "de_dust2") coords = [
            ["B Entrance", "Throw", "smoke", -1846.553223, 1232.569824, 32.496025, -8.613732, 118.773392],
            ["CT Mid", "Throw", "smoke", -538.606567, 1382.031250, -111.957108, -35.360550, 53.845985],
            ["Xbox", "Throw", "smoke", 229.130554, 112.497559, 5.215744, -40.624023, 108.758316],
            ["Long Corner", "Throw", "smoke", 222.664124, -87.978210, 9.093811, -46.250572, 48.164497],
            ["CT Spawn", "Run + Throw", "smoke", 860.031250, 790.031250, 3.900847, -23.414322, 43.616291],
            ["Short (Close)", "Throw", "smoke", 489.998535, 1446.031250, 2.660506, -5.677320, 88.280685],
            ["Long Gate", "Throw", "smoke", 1752.049561, 2046.932739, 0.365111, -33.430305, -130.546280],
            ["Lower Mid", "Throw", "smoke", -242.031250, 2278.887695, -119.931587, -32.687481, -123.649094],
            ["Upper Tunnel", "Throw", "smoke", -985.452942, 2553.223877, 1.318862, -26.764244, -143.848251],
            ["Bombsite B", "Throw", "flashbang", -1273.968750, 2575.968750, 67.353363, -42.043125, 1.218936],
            ["Bombsite B", "Throw", "molotov", -760.031250, 2066.031250, -45.182931, -23.497030, 132.684860]
        ]

        if (world == "de_inferno") coords = [
            ["Graveyard", "Run + JumpThrow", "molotov", 2017.503174, 1225.968750, 178.031250, -33.659977, -64.684898],
            ["Mid", "Run + JumpThrow", "molotov", 2343.707520, 568.729492, 145.928940, -38.500111, -178.690613],
            ["Fountain", "Run + JumpThrow", "molotov", 362.636536, 1726.205933, 128.376053, -39.875027, 95.339996],
            ["Triple Box", "Throw", "molotov", 877.968750, 2393.092041, 150.504181, -13.529912, 168.994965],
            ["Library", "JumpThrow", "molotov", 1314.032593, 797.901489, 153.586700, -26.509958, 10.154735],
            ["Box", "Run + Throw", "molotov", 1364.515015, 277.541809, 135.426834, -17.755112, -48.144848],
            ["Archade", "Run + JumpThrow", "molotov", 1287.723633, 434.031250, 125.995117, -36.354294, 55.140560],
            ["Default", "JumpThrow", "molotov", 1961.373169, 1225.968750, 175.031250, -34.145012, -79.280289],
            ["Stove", "Throw", "molotov", 698.401245, -267.968750, 105.031250, -21.614807, 32.599926],
            ["Mid", "Run + Throw", "smoke", -857.968750, 449.902283, -31.604805, -44.401531, 1.405892],
            ["Pit", "Run + Throw", "molotov", 2105.090088, 1168.412354, 165.084000, -13.804811, -63.900101],
            ["Box A", "Run + JumpThrow", "molotov", 2079.774658, 1225.998535, 180.093811, -37.500053, -89.940086],
            ["Coffins", "Throw", "smoke", 338.871887, 1650.802856, 122.093810, -50.093639, 84.572739],
            ["B Entrance", "Throw", "smoke", 460.464905, 1828.470825, 136.182693, -25.443281, 86.280159],
            ["CT Spawn", "Throw", "smoke", 119.999580, 1587.966187, 113.307662, -34.798424, 56.149929],
            ["Long (Deep)", "Run + Throw", "smoke", 274.681335, -224.627777, 88.093810, -41.052132, 31.799410],
            ["Pit (Crack)", "Throw", "smoke", 704.160339, 11.968750, 88.797089, -52.337799, -2.135024],
            ["Short (Deep)", "Throw", "smoke", 697.511902, -242.261810, 91.093810, -53.097946, 16.442726],
            ["Library to A", "Throw", "smoke", 960.900330, 434.006409, 88.093810, -49.863846, 13.159984],
            ["Pit to Hay", "Throw", "smoke", 726.031250, 220.962921, 94.029999, -55.241890, -8.699924],
            ["Long", "Throw", "smoke", 491.936829, -267.968750, 88.093810, -42.024933, 45.854645],
            ["Bombsite B", "Throw", "smoke", 1971.687988, 2636.702393, 128.093811, -39.996227, 175.975357],
            ["Connector", "Throw", "smoke", 726.031250, 288.680084, 96.093810, -43.560978, 41.450943],
            ["One-way", "Throw", "smoke", 2631.968750, -16.031250, 84.093810, -5.692367, -179.128860],
            ["Balcony", "Throw", "smoke", 1913.227295, 1225.968750, 174.093811, -46.497322, -87.005005],
            ["B Entrance", "Throw", "flashbang", 498.968750, 2444.031250, 160.093811, 1.748943, 142.807571],
            ["Banana", "Throw", "flashbang", 610.968750, 1873.031250, 134.252365, -44.186985, -0.872295],
            ["Short", "Walk + Throw", "flashbang", 1275.968750, -111.968750, 256.093811, 9.454458, 116.691383],
            ["Bombsite A", "Crouch + Throw", "flashbang", 1329.031250, -365.989349, 256.093811, -29.733957, -22.831499],
            ["B Plant", "JumpThrow", "molotov", 929.176636, 3295.995117, 144.093811, -45.887463, -131.960571],
            ["3s", "Throw", "molotov", 999.982422, 1878.530640, 149.329788, -26.647552, 141.132538],
            ["Coffins", "Throw", "molotov", 664.968750, 1873.031250, 168.093811, -24.272781, 96.641022]
        ]

        if (world == "de_nuke") coords = [
            ["Hangar", "Throw", "smoke", -164.092941, -1954.733765, -415.916107, -13.613587, 1.278547],
            ["Red container", "Throw", "smoke", -533.003357, -833.215759, -193.634827, -30.904673, -43.816589],
            ["Between containers", "Run + Throw", "smoke", -423.996399, -1753.002075, -415.914856, -2.624159, -50.804165],
            ["T Outside", "JumpThrow", "smoke", 1664.031250, -280.002014, -351.906250, -25.048063, -135.212463]
        ]

        if (world == "de_overpass") coords = [
            ["Stairs", "Run + JumpThrow", "molotov", -3750.460938, -250.358826, 520.609863, 5.050490, 35.776577],
            ["Barrels", "Run + Throw", "molotov", -430.186157, -1551.968750, 150.031250, -16.164569, 101.556863],
            ["Heaven", "Walk + JumpThrow", "molotov", -856.031311, -639.968750, 105.031250, 4.120225, 128.027786],
            ["Barrels", "Throw", "molotov", -1580.517578, -710.171814, 135.334778, -14.950030, 60.188404],
            ["Water", "Throw", "molotov", -1276.541260, -964.551147, 10.933800, -23.484703, 82.194580],
            ["Toilet entrance", "Run + Throw", "smoke", -730.031250, -2225.143799, 240.093811, -51.612926, 149.045975],
            ["B Bridge", "Throw", "smoke", -617.486389, -1509.028809, 144.093811, -48.988934, 113.071342],
            ["B Center", "Throw", "smoke", -525.982300, -1551.984375, 144.093811, -43.807911, 110.431473],
            ["Barrels to Pillar", "Throw", "smoke", -613.014099, -1082.017212, 42.160416, -29.337307, 99.340714],
            ["B Center", "Throw", "smoke", -1567.968750, -1087.984619, 0.093811, -30.278185, 74.646019],
            ["Monster to Pillar", "Throw", "smoke", -1645.986938, -1087.982300, 96.093810, -20.015800, 55.835869],
            ["Heaven", "Throw", "smoke", -1559.968750, -728.785583, 52.574355, -33.446209, 96.293686],
            ["B Bridge", "Throw", "smoke", -1559.999390, -361.285339, 32.421722, -43.693123, 21.193089],
            ["Heaven", "Throw", "smoke", -2174.002441, -1151.968750, 398.197235, -26.368107, 71.543701],
            ["Long to Boxes", "Throw", "smoke", -2025.534058, -865.001343, 395.427856, -28.313963, 114.564102],
            ["Bank", "Throw", "smoke", -2162.000488, -519.968750, 391.460358, -29.749702, 100.836487],
            ["Truck to Bank", "Throw", "smoke", -3612.545654, -177.626740, 512.791992, -40.392601, 51.259613],
            ["Boxes to Truck", "Throw", "smoke", -3540.031250, -381.968750, 528.080200, -14.256992, 41.849758],
            ["Truck", "Throw", "smoke", -2351.968750, -815.968750, 391.089905, -34.683971, 81.500427],
            ["Trash", "Throw", "smoke", -2351.968750, -414.031250, 388.562317, -60.588089, 73.825958],
            ["Trash", "Throw", "smoke", -3383.369629, 35.247875, 516.906006, -18.035419, 31.699080],
            ["Long", "Crouch + Throw", "smoke", -1993.398926, 537.698242, 475.093810, -28.677984, -169.596695],
            ["Monster", "Throw", "smoke", -1926.860962, 1311.968750, 355.030579, -46.200985, -40.010532],
            ["One-way", "Throw", "smoke", -2191.968750, 1311.968750, 356.093811, -8.861760, -55.390415],
            ["One-way", "Right click", "smoke", -1826.375610, 629.178894, 256.093811, 26.580435, -17.457275],
            ["One-way", "Throw", "smoke", -2012.968750, -1231.968750, 240.093811, 16.218643, 63.144173],
            ["Short B", "Throw", "smoke", -2115.841309, 992.920288, 480.093810, -22.936214, -57.690578],
            ["Bombsite A", "Throw", "flashbang", -2604.023926, 1102.215088, 480.093810, -24.090078, 70.938210],
            ["Barrels", "Throw", "molotov", -1580.023315, -480.767883, 136.093811, -20.147602, 53.764153],
            ["Bombsite B", "Throw", "molotov", -1399.968750, -139.998840, 0.093811, -15.444187, 63.084324]
        ]

        if (world == "de_train") coords = [
            ["B site", "Throw", "molotov", -1085.563477, -954.344543, -55.968750, -2.244908, -11.982774],
            ["Default", "Walk + Throw", "molotov", 1054.867188, 426.185638, -215.982330, -14.129807, -158.603027],
            ["Heaven", "Throw", "molotov", 132.170197, 499.088257, -219.968750, -30.679949, -56.869923],
            ["Site", "Run + Throw", "molotov", -338.848297, 307.854095, -215.968750, -29.580017, -36.570026],
            ["B Upper", "Throw", "smoke", -1055.968750, -1607.969116, -151.906188, -9.076089, -21.028521],
            ["B Lower", "Throw", "smoke", -1159.978027, -1088.112549, -95.909508, -9.122071, 13.307947],
            ["Blue to Bombsite", "Run + Throw", "smoke", -1155.979004, -1301.504395, -95.906189, -15.857571, 38.882820],
            ["Connector", "Run + Throw", "smoke", -1159.999634, -1048.001709, -95.906189, -11.023086, 5.091055],
            ["Ivy (right)", "Throw", "smoke", 1388.426270, 1446.000488, -223.906189, -6.188282, -95.524574],
            ["Ivy (left)", "Run + Throw", "smoke", 1535.968750, 1775.968750, -223.906189, -9.818258, -112.486588],
            ["Bombsite A to Connector", "Both buttons", "smoke", -655.968750, -399.892731, 16.093811, -46.002502, 10.890710],
            ["Blue to Red train", "Throw", "smoke", -645.479370, 1697.721924, -209.906189, -41.564690, -65.086685],
            ["Electric box", "Throw", "smoke", -481.865631, 1725.011597, -209.906189, -45.937080, -78.790627],
            ["Blue train (Left)", "Throw", "smoke", -555.031250, 1262.031250, -212.532227, -68.096550, -50.974125],
            ["Green to Red train", "Throw", "smoke", -838.162292, 1268.024414, -222.906189, -37.604507, -42.064575],
            ["Ivy to Green train", "Throw", "smoke", -640.027832, -583.969666, 16.093811, -44.699406, 32.218452],
            ["Bombsite A to Red train", "Throw", "smoke", -453.358459, 1286.284668, -86.490753, -25.130558, -58.731426],
            ["Main", "Throw", "smoke", 1021.096924, -254.988556, -215.906189, -38.494926, 154.562332],
            ["Bombsite A", "Run + Throw", "flashbang", 400.031250, -420.031250, -211.777573, -28.859020, -89.674629],
            ["Blue train (Back)", "Run + Throw", "molotov", -790.028748, 375.928741, -215.906189, -11.270589, 27.332729]
        ]

        if (world == "de_cache") coords = [
            ["Ventsroom", "Throw", "smoke", 837.744141, -872.015564, 1614.093750, -15.362073, 177.850555],
            ["Headshot", "Throw", "smoke", 960.031250, -1463.968750, 1644.093750, -26.400745, 162.851730],
            ["B Center", "Throw", "smoke", 827.971313, -1463.968750, 1614.093750, -21.995483, 162.191437],
            ["Mid Center", "Throw", "smoke", 1711.974121, 463.987732, 1614.093750, -10.675973, -167.299591],
            ["Connector", "Throw", "smoke", 1160.711182, 715.841675, 1613.093750, -31.334572, -153.088974],
            ["White box", "Throw", "smoke", 2156.583740, -182.968750, 1613.483887, -22.077839, 161.943924],
            ["One-way", "Throw", "smoke", 1037.031250, 513.031250, 1613.550293, -49.137814, 104.639671],
            ["Mid (Right side)", "Throw", "smoke", 1711.968750, -71.968750, 1614.093750, -10.560504, 161.185349],
            ["Bombsite A", "Crouch + Throw", "smoke", 154.413376, 2096.080566, 1688.093750, 9.370919, -29.337667],
            ["Short", "Run + Throw", "smoke", 139.031250, 2197.968750, 1688.093750, -6.040052, -60.836231],
            ["Bombsite A", "Throw", "smoke", 1319.968750, 1520.395508, 1701.093750, -57.767025, 161.424835],
            ["Forklift", "Throw", "smoke", 1230.754150, 1612.968750, 1701.965088, -74.514435, -173.894516],
            ["Main", "Throw", "smoke", -782.198059, 1110.000366, 1689.439697, -9.703021, 24.963852],
            ["Main", "Throw", "smoke", -429.968750, 2244.968750, 1687.093750, -66.017174, -31.140173],
            ["Main", "Throw", "smoke", -50.012558, 2261.968750, 1687.093750, -18.612713, -64.612831],
            ["Vents", "Run + Throw", "smoke", -996.979553, 1440.231689, 1691.182373, -33.181599, -46.326721],
            ["Bombsite A", "Throw", "flashbang", -358.534668, 2147.728027, 1687.093750, -17.540194, 2.039984],
            ["Bombsite A", "Throw", "flashbang", 89.984558, 2244.983398, 1687.093750, -71.181236, -93.482628],
            ["Bombsite B", "Both buttons", "flashbang", -633.975891, -379.968750, 1620.093750, -41.629662, -58.865555],
            ["Mid", "Crouch + Throw", "flashbang", 114.968750, -107.322037, 1613.718506, -16.913092, -84.200432],
            ["Mid", "Run + Throw", "flashbang", 1736.970581, 308.968750, 1614.093750, -9.157659, 162.762833],
            ["Bombsite B", "Throw", "flashbang", 879.802185, -872.031250, 1614.093750, -14.157107, 177.892853],
            ["Bombsite B", "Throw", "molotov", 907.649597, -1228.031250, 1614.093750, -23.876366, -179.771790],
            ["White box", "Throw", "molotov", 605.005188, -149.968750, 1689.035889, -6.584105, 133.537994],
            ["Boost", "Throw", "molotov", 11.759085, -148.994904, 1613.093750, -32.654572, 38.675369]
        ]

        if (world == "de_shortdust") coords = [
            ["Box", "Run + Throw", "molotov", -309.406403, 1933.314819, 32.031250, -5.444888, -45.821072],
            ["Car", "Throw", "molotov", -893.477783, 956.593933, 35.031250, -11.485014, -34.438034],
            ["One-Way CT", "Throw", "molotov", -450.279297, 780.684265, 40.753510, -19.734886, -50.160259],
            ["One-Way Car", "Run + Throw", "molotov", -1279.968750, 1039.968750, -170.329315, -27.609568, -18.734381]
        ]

        var scsiz = Render.GetScreenSize()
        var scrmid = [Render.GetScreenSize()[0] / 2, Render.GetScreenSize()[1] / 2]

        var coordslenght = 0

        color_circle = [0, 0, 0, 0]

        while (coords[coordslenght]) {

            coordslenght++

        }
        for (var i = 0; i < coordslenght; i++) {

            crd = coords[i]

            if (weaponnames[crd[2]].indexOf(weapon) >= 0) {

                cds = Render.WorldToScreen([crd[3], crd[4], crd[5]])

                var distance = dis([crd[3], crd[4], crd[5]], Entity.GetRenderOrigin(Entity.GetLocalPlayer()))
                var nadeallmap = UI.GetValue(scriptitems, "Render nade on all map");
                if (dis([crd[3], crd[4], crd[5]], Entity.GetRenderOrigin(Entity.GetLocalPlayer())) < 10) {

                    vec = atv(crd[6], crd[7])
                    local_player = Entity.GetLocalPlayer()

                    if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Automatic throw hotkey") && UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Automatic throw") && !running) {
                        eye_pos = Entity.GetEyePosition(local_player)
                        angles = getAngles(eye_pos, [crd[3] + vec[0] * 200, crd[4] + vec[1] * 200, crd[5] + 64 + vec[2] * 200])
                        UserCMD.SetAngles([angles[0], angles[1], angles[2]])
                        tickcount = Global.Tickcount()

                        running = true
                        //  coords_auto_throw = crd
                        for (t = 0; t < movement_autothrow.length; t++) {
                            if (movement_autothrow[t][0] == crd[0]) {
                                crd[8] = movement_autothrow[t][2]
                                crd[9] = movement_autothrow[t][1]
                            }
                        }
                        coords_auto_throw = crd
                        auto_throw_repeat()
                    }
                }
            }
        }
    }
}

function auto_throw() {
    if (!GetVal("gernade_helper")) return;
    tick = Global.Tickcount()
    if (coords_auto_throw[8] == null) {

        if ((coords_auto_throw[1].includes("Jump") || coords_auto_throw[1].includes("Throw")) && !coords_auto_throw[1].includes("Run") && !coords_auto_throw[1].includes("Walk")) {

            if (tick - tickcount == 1) {
                Cheat.ExecuteCommand("+attack");
            }
            if (tick - tickcount == 2) {
                if (coords_auto_throw[1].includes("Jump"))
                    UserCMD.ForceJump()
                Cheat.ExecuteCommand("-attack");
                new Delay(Global.TickInterval() * 2 - Global.TickInterval() / 100, stop_attack);
                running = false;
            }
            return
        }

        running = false
        return
    }
    jump_throw = false;
    for (i = 0; i < coords_auto_throw[8].length; i++) {
        if (coords_auto_throw[8][i][2] != 0) {
            jump_throw = true;
            break;
        }
    }
    if (tick - tickcount < coords_auto_throw[8].length) {
        UserCMD.SetMovement([coords_auto_throw[8][tick - tickcount][0], 0, 0]);
        if (tick - tickcount < coords_auto_throw[8].length - 1) {
            if (coords_auto_throw[8][tick - tickcount + 1][2] != 0 && coords_auto_throw[8][tick - tickcount][2] == 0) {
                Cheat.ExecuteCommand("+attack");
            }
        }
        if (tick - tickcount - 1 >= 0 && coords_auto_throw[8][tick - tickcount][2] != 0 && coords_auto_throw[8][tick - tickcount - 1][2] == 0) {
            UserCMD.ForceJump()
            Cheat.ExecuteCommand("-attack");
            running = false;
        }
        if (!jump_throw) {
            if (tick - tickcount == 1)
                Cheat.ExecuteCommand("+attack");
            if (tick - tickcount == coords_auto_throw[8].length - coords_auto_throw[9]) {
                Cheat.ExecuteCommand("-attack");

                running = false;
            }
        }
    }
}
throw_tick = 0

function stop_attack() {
    if (!GetVal("gernade_helper")) return;
    Cheat.ExecuteCommand("-attack");
}

function set_false() {
    if (!GetVal("gernade_helper")) return;
    running = false
}

function auto_throw_repeat() {
    if (!GetVal("gernade_helper")) return;
    if (coords_auto_throw[8] == null) {
        if ((coords_auto_throw[1].includes("Jump") || coords_auto_throw[1].includes("Throw")) && !coords_auto_throw[1].includes("Run") && !coords_auto_throw[1].includes("Walk")) {

            for (i = 0; i < 2; i++) {
                new Delay(Global.TickInterval() * i - Global.TickInterval() / 100, auto_throw);
            }
            new Delay(Global.TickInterval() * 3 - Global.TickInterval() / 100, set_false);
            return
        }
        new Delay(Global.TickInterval() * 0 - Global.TickInterval() / 100, set_false)
        return
    }
    for (i = 1; i <= coords_auto_throw[8].length; i++) {
        new Delay(Global.TickInterval() * i - Global.TickInterval() / 100, auto_throw);
    }
}

//Panorama Weaponlist
function Weaponlist() {
    if (!GetVal("panorama_weaponlist")) return;
    if (Input.IsKeyPressed(0x09) != true) {
        return
    } //Draws only when the Key "Tab" is being help down

    xPos = UI.GetValue("Script items", "Weaponlist X position");
    color = UI.GetColor("Script items", "Weapon color");

    players = Entity.GetEnemies();

    var score = [];
    var sorted = [];
    var sorted_score = [];
    var startweapons = [];

    for (i = 0; i < players.length; i++) //Stored the score Value in the same order as player
    {
        score[i] = Entity.GetProp(players[i], "CCSPlayerResource", "m_iScore");
    }

    for (x = 0; x < score.length; x++) //Sorts the Score Values from highest to lowest by index
    {
        sorted[x] = score.indexOf(Math.max.apply(null, score));
        sorted_score[x] = Math.max.apply(null, score);
        score[sorted[x]] = null;
    }

    finished = deathcheck(sorted, sorted_score); //Sorts the playerlist by the death system

    for (x = 0; x < players.length; x++) {
        pos = sorted[x];

        weapons_array = Entity.GetWeapons(players[pos]);

        if (UI.GetValue("Script items", "Remove active weapon")) {
            cur_weap = Entity.GetWeapon(players[pos]); //Remove active weapon from the tab list
            activ_weap = weapons_array.indexOf(cur_weap);
            weapons_array.splice(activ_weap, 1);
        }

        weapons_string = "";

        for (i = 1; i < weapons_array.length; i++) //Converts the array into a string of Letters to be able to draw it with Size 6
        {
            weapon_name = Entity.GetName(weapons_array[i]);
            weapons_string += converter(weapon_name);
        }

        additional = Render.TextSize(weapons_string, 6);
        Render.String((screen_size[0] / 2) + xPos - additional[0], y_position(x), 0, weapons_string, color, 6);

    }
}

function deathcheck(ar, ar_score) //Switches the places of players, if the top one is dead and the bottom one alive while both have the same points
{
    if (!GetVal("panorama_weaponlist")) return;
    players = Entity.GetEnemies();

    for (i = 0; i < ar.length; i++) {
        if (ar_score[i + 1] != null) {
            if (Entity.IsAlive(players[ar[i]]) == false && Entity.IsAlive(players[ar[i + 1]]) == true && (ar_score[i] == ar_score[i + 1])) //Compates the current players point with the one below them if the current one is dead
            {
                ar = swap(ar, i, i + 1);
            }
        }
    }

    return ar;
}

function swap(arr, one, two) //Swaps positions of 2 values of an array
{
    if (!GetVal("panorama_weaponlist")) return;
    var temp = arr[one];
    arr[one] = arr[two];
    arr[two] = temp;
    return arr;
}

function y_position(index) //Gives back the according Y-Pos depending on the team, amount of enemies, amount of teammates and resolution of the screen
{
    if (!GetVal("panorama_weaponlist")) return;
    screen_size = Render.GetScreenSize();

    switch (screen_size[1]) {
        case 1080:
            pos = 390;
            t = 5;
            ct = 3;
            factor = 26;
            diff = 228;
            break
        case 1024:
            pos = 370;
            t = 6;
            ct = 4;
            factor = 25;
            diff = 215;
            break
        case 960:
            pos = 343;
            t = 4;
            ct = 1;
            factor = 23;
            diff = 206;
            break
        case 900:
            pos = 322;
            t = 5;
            ct = 2;
            factor = 22;
            diff = 194;
            break
        case 864:
            pos = 309;
            t = 4;
            ct = 1;
            factor = 21;
            diff = 186;
            break
        case 768:
            pos = 275;
            t = 6;
            ct = 1;
            factor = 19;
            diff = 165;
            break
        case 720:
            pos = 260;
            t = 5;
            ct = 5;
            factor = 18;
            diff = 149;
            break
        case 1050:
            pos = 377;
            t = 4;
            ct = 1;
            factor = 25;
            diff = 225;
            break
        case 800:
            pos = 289;
            t = 5;
            ct = 4;
            factor = 20;
            diff = 167;
            break
        default:
            return;
    }

    local = Entity.GetLocalPlayer();
    team = Entity.GetProp(local, "CCSPlayerResource", "m_iTeam");

    result = 0;

    if (team == 3) //Adds additional pixels if the localplayer is on ct
    {
        result = pos + diff + (index * factor);
    } else {
        result = pos + (index * factor);
    }

    teammates = Entity.GetTeammates();
    enemies = Entity.GetEnemies();

    if (enemies.length == 5) {
        if (team == 3) {
            result -= t;
        } else {
            result -= ct;
        }
    }

    if (teammates.length == 5) {
        if (team == 3) {
            result += ct;
        } else {
            result -= t;
        }
    }

    return result;
}



function converter(input) { //Converts the weapon name to the font icon
    if (!GetVal("panorama_weaponlist")) return;
    var letter = "";
    switch (input) {
        case "desert eagle":
            letter = "a"
            break
        case "dual berettas":
            letter = "b"
            break
        case "five seven":
            letter = "c"
            break
        case "glock 18":
            letter = "d"
            break
        case "ak 47":
            letter = "e"
            break
        case "aug":
            letter = "f"
            break
        case "awp":
            letter = "g"
            break
        case "famas":
            letter = "h"
            break
        case "m249":
            letter = "i"
            break
        case "g3sg1":
            letter = "j"
            break
        case "galil ar":
            letter = "k"
            break
        case "m4a4":
            letter = "l"
            break
        case "m4a1 s":
            letter = "m"
            break
        case "mac 10":
            letter = "n"
            break
        case "p2000":
            letter = "o"
            break
        case "mp5 sd":
            letter = "p"
            break
        case "ump 45":
            letter = "q"
            break
        case "xm1014":
            letter = "r"
            break
        case "pp bizon":
            letter = "s"
            break
        case "mag 7":
            letter = "t"
            break
        case "negev":
            letter = "u"
            break
        case "sawed off":
            letter = "v"
            break
        case "tec 9":
            letter = "w"
            break
        case "zeus x27":
            letter = "x"
            break
        case "p250":
            letter = "y"
            break
        case "mp7":
            letter = "z"
            break
        case "mp9":
            letter = "A"
            break
        case "nova":
            letter = "B"
            break
        case "p90":
            letter = "C"
            break
        case "scar 20":
            letter = "D"
            break
        case "sg 553":
            letter = "E"
            break
        case "ssg 08":
            letter = "F"
            break
        case "knife":
            letter = "G"
            break
        case "flashbang":
            letter = "H"
            break
        case "high explosive grenade":
            letter = "I"
            break
        case "smoke grenade":
            letter = "J"
            break
        case "molotov":
            letter = "K"
            break
        case "decoy grenade":
            letter = "L"
            break
        case "incendiary grenade":
            letter = "M"
            break
        case "c4 explosive":
            letter = "N"
            break
        case "usp s":
            letter = "P"
            break
        case "cz75 auto":
            letter = "Q"
            break
        case "r8 revolver":
            letter = "R"
            break
        case "armor":
            letter = "S"
            break
        case "helmet":
            letter = "T"
            break
        default:
            letter = ""
            break
    }
    return letter
}


//Effect on kill
var effect_alpha = 0;
var effect_size = 0;
var effect_duration = 3;

function effectOnKill() {
    if (!GetVal("effect_on_kill")) return;
    if (effect_alpha === 0)
        return;

    const inc_alpha = ((1 / effect_duration) * Global.Frametime()) * 255
    const inc_size = ((1 / effect_duration) * Global.Frametime()) * 360

    effect_alpha = clamp(effect_alpha - inc_alpha, 0, 255);
    effect_size = clamp(effect_size - inc_size, 0, 360);

    const x = Global.GetScreenSize()[0],
        y = Global.GetScreenSize()[1];

    Render.GradientRect(0, 0, x, effect_size, 0, [128, 195, 255, effect_alpha], [128, 195, 255, 0]);
    Render.GradientRect(0, y - effect_size, x, effect_size, 0, [128, 195, 255, 0], [128, 195, 255, effect_alpha]);
    Render.GradientRect(x - effect_size, 0, effect_size, y, 1, [128, 195, 255, 0], [128, 195, 255, effect_alpha]);
    Render.GradientRect(0, 0, effect_size, y, 1, [128, 195, 255, effect_alpha], [128, 195, 255, 0]);
}

function effectOnKill2() {
    if (!GetVal("effect_on_kill")) return;
    const attacker = Entity.GetEntityFromUserID(Event.GetInt("attacker"));
    const userid = Entity.GetEntityFromUserID(Event.GetInt("userid"));
    local = Entity.GetLocalPlayer();
    if (attacker === local && userid != local) {
        effect_alpha = 100;
        effect_size = 150;
    }
}

//Alternative fakelag
var fakelag_tickcount = 0;
var fakelag_flip = false;

function alternativeFakelag() {
    if (!GetVal("alternative_fakelag")) return;
    if (GetVal("mm_fd") && UI.IsHotkeyActive("Script items", "Matchmaking FD")) return;
    UI.SetValue("Anti-Aim", "Fake-Lag", "Jitter", 0);
    //UI.SetValue("Anti-Aim", "Fake-Lag", "Triggers", (1 << 2) + (1 << 7));
    //UI.SetValue("Anti-Aim", "Fake-Lag", "Trigger limit", 7);
    var fakelag_1 = 3;
    var fakelag_2 = GetVal("alternative_limit");
    if (fakelag_tickcount >= fakelag_2 && !fakelag_flip) {
        fakelag_flip = true;
        fakelag_tickcount = 0
    };
    if (fakelag_tickcount >= fakelag_1 && fakelag_flip) {
        fakelag_flip = false;
        fakelag_tickcount = 0
    };
    UI.SetValue('Anti-Aim', 'Fake-Lag', 'Limit', !fakelag_flip ? fakelag_2 : 0);
    fakelag_tickcount++
}

function alternativeFakelag2() {
    fakelag_tickcount = 0;
}

//Prefer baim on DT
function preferBaimOnDT() {
    if (!GetVal("prefer_baim_on_dt")) return;
    if (exploitsActive("dt") && Exploit.GetCharge() === 1) {
        UI.SetValue("Rage", "AUTO", "Accuracy", "Prefer body aim", true);
    } else {
        UI.SetValue("Rage", "AUTO", "Accuracy", "Prefer body aim", false);
    }
}

//Autostop with DT
function vectorangles(forward) {
    var angles = []
    if (forward[1] == 0 && forward[0] == 0) {
        angles[0] = forward[2] > 0 ? 270 : 90
        angles[1] = 0
    } else {
        angles[0] = Math.atan2(-forward[2], Math.sqrt(forward[0] * forward[0] + forward[1] * forward[1])) * -180 / Math.PI
        angles[1] = Math.atan2(forward[1], forward[0]) * 180 / Math.PI
        if (angles[1] > 90)
            angles[1] -= 180
        else if (angles[1] < 90)
            angles[1] += 180
        else if (angles[1] == 90)
            angles[1] = 0
    }
    return angles
}

function anglevectors(angles) {
    var sy = Math.sin(angles[1] * 180 / Math.PI)
    var cy = Math.cos(angles[1] * 180 / Math.PI)
    var sp = Math.sin(angles[0] * 180 / Math.PI)
    var cp = Math.cos(angles[0] * 180 / Math.PI)
    return [cp * cy, cp * sy, -sp]
}
var currentAction = 2
var lastTickShot = 0

function reset() {
    lastTickShot = 0
}
var lasttarget = 0

function onRageShoot() {
    if (!GetVal("dt_autostop")) return;
    if (!UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap") && !UI.GetValue("Rage", "GENERAL", "Exploits", "Doubletap"))
        return
    var type = Event.GetInt("exploit")
    // 1 = 1st shot
    // 2 = 2nd shot
    if (type == 1) {
        currentAction = 1
        lastTickShot = Globals.Tickcount()
    }
    if (type == 2) {
        currentAction = 2
    }
    lasttarget = Event.GetInt("target_index")
}

function onCM() {
    if (!GetVal("dt_autostop")) return;
    var local = Entity.GetLocalPlayer()
    if (!local || !Entity.IsAlive(local) || currentAction == 2)
        return
    if (!UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap") && !UI.GetValue("Rage", "GENERAL", "Exploits", "Doubletap"))
        return
    if (!Entity.IsAlive(lasttarget) || lastTickShot + 12 < Globals.Tickcount()) {
        lasttarget = 0
        return
    }
    var velo = Entity.GetProp(local, "DT_CSPlayer", "m_vecVelocity[0]")
    var speed = Math.sqrt((velo[0] * velo[0]) + (velo[1] * velo[2]) + (velo[2] * velo[2]))
    var direction = vectorangles(velo)
    direction[1] = Local.GetViewAngles()[1] - direction[1]
    var forward = anglevectors(direction)
    var negative = []
    negative[0] = forward[0] * speed
    negative[1] = forward[1] * speed
    negative[2] = forward[2] * speed
    UserCMD.SetMovement([negative[0], negative[1], 0])
}

// Crouch on DT
function onShot() {
    if (!GetVal("crouch_dt")) return;
    exploit = Event.GetInt("exploit");

    if (exploit == 2) {
        canCrouch = true;
        crouchTime = Globals.Curtime();
    } else {
        canCrouch = false;
        crouchTime = 0;
    }
}

function userCMD1() {
    if (!GetVal("crouch_dt")) return;
    if (canCrouch) {
        if (Globals.Curtime() - crouchTime > .3) {
            crouchTime = 0;
            canCrouch = false;
        } else {
            UserCMD.ForceCrouch();
        }

    }
}

//Doubletap boost
function doubletapBoost() {
    if (!checkbox_states["doubletap_boost"] && !checkbox_states["mm_dt"]) {
        Exploit.EnableRecharge();
        return;
    };
    var gamerules = Entity.GetGameRulesProxy();
    var is_scoped = Entity.GetProp(Entity.GetLocalPlayer(), 'CCSPlayer', 'm_bIsScoped');
    var boost_type = GetValue("Doubletap boost");
    var charge = Exploit.GetCharge();
    (charge != 1) ? Exploit.EnableRecharge(): Exploit.DisableRecharge();
    if (!Entity.GetProp(gamerules, "CCSGameRulesProxy", "m_bIsValveDS") && checkbox_states["doubletap_boost"]) {
        switch (boost_type) {
            case 0:
                if (can_shift_shot(14) && charge != 1) {
                    Exploit.DisableRecharge();
                    Exploit.Recharge();
                }
                break;
            case 1:
                if (can_shift_shot(5) && charge != 1) {
                    Exploit.DisableRecharge();
                    Exploit.Recharge();
                }
                break;
            case 2:
                if (getWeaponName() === "ssg 08") {
                    Exploit.DisableRecharge();
                    if (can_shift_shot(16) && charge != 1) {
                        Exploit.DisableRecharge();
                        Exploit.Recharge();
                    }
                    break;
                }
                if (can_shift_shot(12) && charge != 1) {
                    Exploit.DisableRecharge();
                    Exploit.Recharge();
                }
                if (isSlowwalking()) {
                    if (can_shift_shot(10) && charge != 1) {
                        Exploit.DisableRecharge();
                        Exploit.Recharge();
                    }
                }
                break;
            case 3:
                if (getWeaponName() === "ssg 08") {
                    Exploit.DisableRecharge();
                    if (can_shift_shot(16) && charge != 1) {
                        Exploit.DisableRecharge();
                        Exploit.Recharge();
                    }
                    break;
                }
                if (can_shift_shot(10) && charge != 1) {
                    Exploit.DisableRecharge();
                    Exploit.Recharge();
                }
                if (isSlowwalking()) {
                    if (can_shift_shot(10) && charge != 1) {
                        Exploit.DisableRecharge();
                        Exploit.Recharge();
                    }
                }
                break;
        }
    } else if (checkbox_states["mm_dt"]) {
        if (can_shift_shot(64) && charge != 1) {
            Exploit.DisableRecharge();
            Exploit.Recharge();
        }
    }
}
//Rory's jitter merge
var master = {
    dir: "back",
    cycle: false,
    iteration: 0,
    showArrows: false,
    showCycle: false,
    showDegree: false,
    showInverted: false,
    leftPressed: function() {
        return UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script Items", "[CJitter] Left")
    },
    backPressed: function() {
        return UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script Items", "[CJitter] Back")
    },
    rightPressed: function() {
        return UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script Items", "[CJitter] Right")
    },
    getYaw: function() {
        return UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset")
    },
    setYaw: function(yaw) {
        return UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yaw)
    },
    getAAInvert: function() {
        return UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")
    },
    setAAInvert: function() {
        return UI.ToggleHotkey("Anti-Aim", "Fake angles", "Inverter")
    },
    getWidth: function() {
        return UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "[CJitter] Jitter Width")
    },
    getFreq: function() {
        return UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "[CJitter] Jitter Frequency")
    },
    getRandom: function() {
        return UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "[CJitter] Randomize Factor")
    },
    getInvert: function() {
        return UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "[CJitter] Auto-Inverter")
    },
    getVisuals: function() {
        return UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "[CJitter] Visuals")
    },
    setVisible: function() {
        var selected = master.getVisuals();
        var alias = {
                [1]: "showArrows",
                [2]: "showCycle",
                [4]: "showDegree",
                [8]: "showInverted"
            },
            binaries = [8, 4, 2, 1];

        for (i in binaries) {
            i = binaries[i];

            if (selected - i >= 0) {
                selected -= i;
                master[alias[i]] = true;
            } else {
                master[alias[i]] = false;
            }
        }
    }
}
var colors = {
    neg: [255, 255, 255, 255],
    pos: [250, 161, 255, 255]
}

function hud() {
    if (!GetVal("rory_jitter")) return;
    if (!Entity.IsAlive(Entity.GetLocalPlayer())) return;

    master.setVisible();

    var offset = 30;
    var x = Global.GetScreenSize()[0] / 2,
        y = Global.GetScreenSize()[1] / 2;

    function arrows() {
        if (!GetVal("rory_jitter")) return;
        Render.String(x - 50, y - 20, 1, "<", master.dir == "left" ? colors.pos : colors.neg, 4);
        Render.String(x, y + 30, 1, "v", master.dir == "back" ? colors.pos : colors.neg, 4);
        Render.String(x + 50, y - 20, 1, ">", master.dir == "right" ? colors.pos : colors.neg, 4);
    }

    function cycle() {
        if (!GetVal("rory_jitter")) return;
        Render.String(x, y + 30 + offset, 0, "CYCLE", master.cycle ? colors.pos : colors.neg, 1);
        offset += 12;
    }

    function inverted() {
        if (!GetVal("rory_jitter")) return;
        Render.String(x, y + 30 + offset, 0, "INVERTED", master.getAAInvert() ? colors.pos : colors.neg, 1);
        offset += 12;
    }

    function degree() {
        if (!GetVal("rory_jitter")) return;
        var yaw = master.getYaw();
        Render.String(x, y + 30 + offset, 0, "DEG: " + yaw.toString(), colors.pos, 1);
    }

    if (master.showArrows) arrows();
    if (master.showCycle) cycle();
    if (master.showInverted) inverted();
    if (master.showDegree) degree();
}

function getRandomInt(min, max) {
    if (!GetVal("rory_jitter")) return;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function jitter() {
    if (!GetVal("rory_jitter")) return;
    master.iteration++;

    if (master.iteration % master.getFreq() != 0) return;
    master.cycle = !master.cycle;

    if (master.dir == "left") master.setYaw((master.cycle ? -90 : master.getWidth() - 90) + getRandomInt(-master.getRandom(), master.getRandom()));
    else if (master.dir == "back") master.setYaw((master.cycle ? master.getWidth() / 2 : -(master.getWidth() / 2)) + getRandomInt(-master.getRandom(), master.getRandom()));
    else if (master.dir == "right") master.setYaw((master.cycle ? 90 : 90 - master.getWidth()) + getRandomInt(-master.getRandom(), master.getRandom()));
}

function invert() {
    if (!GetVal("rory_jitter")) return;
    if (!master.getInvert() || Entity.GetEntityFromUserID(Event.GetInt("userid")) != Entity.GetLocalPlayer()) return;

    master.setAAInvert();
}

function keys() {
    if (!GetVal("rory_jitter")) return;
    if (master.leftPressed()) master.dir = "left";
    if (master.backPressed()) master.dir = "back";
    if (master.rightPressed()) master.dir = "right";
}

//Zoom fix
function zoomFix() {
    if (Cheat.FrameStage() == 5) {
        var zoom_sens = Convar.GetFloat("zoom_sensitivity_ratio_mouse");
        if (GetVal("zoom_fix")) {
            var zoom_current_sens = Convar.GetFloat("sensitivity");
            var zoom_fov = UI.GetValue("Visual", "WORLD", "View", "Field of view");
            var fixed_zoom_sens = zoom_fov / 100 * zoom_current_sens;
            if (zoom_sens != fixed_zoom_sens) {
                Cheat.ExecuteCommand("zoom_sensitivity_ratio_mouse " + fixed_zoom_sens);
                Cheat.ExecuteCommand("zoom_sensitivity_ratio_joystick " + fixed_zoom_sens);
            }
        } else {
            if (zoom_sens != 1.0) {
                Cheat.ExecuteCommand("zoom_sensitivity_ratio_mouse 1");
                Cheat.ExecuteCommand("zoom_sensitivity_ratio_joystick 1");
            }
        }
    }
}

//Rainbow bar
var rainbow_bar_speed = 0.1;

function rainbowBar() {
    if (!GetVal("rainbow_bar")) return;
    local = Entity.GetLocalPlayer();
    if (!local || !Entity.IsValid(local)) return;

    var screen_width = Math.round(Global.GetScreenSize()[0]);
    var bar_type = GetValue("Rainbow bar");

    var rgb = hsv2rgb(Global.Realtime() * rainbow_bar_speed, 1, 1);
    switch (bar_type) {
        case 0:
            Render.FilledRect(0, 0, screen_width, 4, [rgb.r, rgb.g, rgb.b, 255]);
            break;
        case 1:
            Render.GradientRect(0, 0, screen_width / 2, 4, 1, [rgb.g, rgb.b, rgb.r, 255], [rgb.r, rgb.g, rgb.b, 255]);
            Render.GradientRect(screen_width / 2, 0, screen_width / 2, 4, 1, [rgb.r, rgb.g, rgb.b, 255], [rgb.b, rgb.r, rgb.g, 255]);
            break;
    }
}

//Ideal yaw
function idealYaw() {
    if (!GetVal("ideal_yaw")) return;
    if (lastHitTime + idealYawDelay > Global.Curtime()) {
        return;
    }
    UI.SetValue("Anti-Aim", "Fake angles", "Hide real angle", true);
    const mode = 0;
    local = Entity.GetLocalPlayer();
    const origin = VectorNew(Entity.GetRenderOrigin(local));
    var yaw = Local.GetViewAngles()[1];
    var data = {
        left: 0,
        right: 0
    };
    for (var r = yaw - 90; r <= yaw + 90; r += 30) {
        if (r === yaw)
            continue;
        const rad = degree_to_radian(r);
        const point = VectorOperate(
            origin,
            VectorNew([
                256 * Math.cos(rad),
                256 * Math.sin(rad),
                0
            ]),
            "+"
        );
        const line = Trace.Line(local, VectorToArray(origin), VectorToArray(point));
        const side = r < yaw ? "left" : "right";
        data[side] += line[1];
    }
    data.left /= 3;
    data.right /= 3;
    if (data.left > data.right) {
        update_anti_aim_state(_mode === 0 ? 0 : 1);
        return;
    }
    update_anti_aim_state(_mode === 0 ? 1 : 0)
}

//Nade circle
var he_positions = [];
var grenadeData = [];
var fadeOutSpeed = 5;
var sizeSpeed = 7;

function nadeCircle() {
    if (!GetVal("nade_circle")) return;
    for (var i = 0; i < he_positions.length; i++) {
        var circleColor = UI.GetColor("Script items", "HE circle");
        var wordLoc = he_positions[i];
        var renderOrigin = Entity.GetRenderOrigin(Entity.GetLocalPlayer());
        var screenLoc = Render.WorldToScreen(wordLoc);

        var currentGrenadeData = grenadeData[i];

        var a = wordLoc[0] - renderOrigin[0];
        var b = wordLoc[1] - renderOrigin[1];
        var c = wordLoc[2] - renderOrigin[2];

        currentGrenadeData[0] += (sizeSpeed / 4) * 3 + ((sizeSpeed / 4) * (Math.sqrt(a * a + b * b + c * c) / 500)); //i know im genius :)
        currentGrenadeData[1] -= fadeOutSpeed * (Math.sqrt(a * a + b * b + c * c) / 250); //auto size mmmm

        //Fixing past braindead dev mistakes
        if (currentGrenadeData[1] < 0) currentGrenadeData[1] = 0;

        grenadeData[i] = currentGrenadeData;

        if (currentGrenadeData[1] < 1) {
            grenadeData.shift(i, 1);
            he_positions.shift(i, 1);
        }

        if (screenLoc[2] == 0) {
            return;
        }

        Render.Circle(screenLoc[0], screenLoc[1], currentGrenadeData[0], [circleColor[0], circleColor[1], circleColor[2], currentGrenadeData[1]]);
        Render.Circle(screenLoc[0], screenLoc[1], currentGrenadeData[0] + 1, [circleColor[0], circleColor[1], circleColor[2], currentGrenadeData[1]]);
    }
}
//Clear chat
var LastSpammed = Global.Tickcount();

function ClearChat() {
    if (!GetVal("clear_chat")) return;
    var ClearChatSpeed = (UI.GetValue("MISC", "JAVASCRIPT", "Script Items", "Clear chat speed"));

    if (Global.Tickcount() - LastSpammed > ClearChatSpeed) {
        Global.ExecuteCommand("say " + "﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽");
        LastSpammed = Global.Tickcount();
    }
}

//Clantag on peek
function clantagOnPeek() {
    if (!GetVal("clantag_on_peek")) return;
    if (exploitsActive("all")) return;
    var enemies = Entity.GetEnemies();
    var local_pos = ExtrapolateTick(15);
    for (var i = 0; i < enemies.length; i++) {
        var enemy = enemies[i];
        if (!Entity.IsAlive(enemy) || Entity.IsDormant(enemy) || !Entity.IsValid(enemy)) continue;
        var pos = Entity.GetHitboxPosition(enemy, 2);
        var result = Trace.Bullet(Entity.GetLocalPlayer(), enemy, local_pos, pos);
        if (result[1] > 1) { // aka damage
            Local.SetClanTag("SE ASIAN PEEK");
            return;
        }
    }
}

//Buy list made by @zxsleebu btw
var COLORNAMES,
    COLORS,
    PRINTABLE,
    _,
    display_icons,
    drag,
    draw,
    enemycache,
    exceptions,
    i,
    in_warmup,
    index,
    key,
    len,
    moving,
    onDraw,
    on_cs_game_disconnected,
    on_item_equip,
    on_item_pickup,
    on_item_remove,
    on_player_death,
    position,
    priorities,
    priority_array,
    rel_start,
    screen,
    value,
    weapon,
    weaponcache,
    weaponname_icons

screen = Render.GetScreenSize()

position = [UI.GetValue('Buylist X position'), UI.GetValue('Buylist Y position')]

if (!position[0]) {
    position[0] = screen[0] - 200
}

if (!position[1]) {
    position[1] = screen[1] / 2 - 100
}

moving = false

PRINTABLE = /[a-zA-Z0-9!"#$%&'()*+,-.\/:;<=>?@[\\\]^_`{|}~]/
COLORNAMES = ['Yellow', 'Purple', 'Green', 'Blue', 'Orange']

// Colors taken from : https://github.com/perilouswithadollarsign/cstrike15_src/blob/master/engine/baseclientstate.cpp#L56
// && https://github.com/perilouswithadollarsign/cstrike15_src/blob/f82112a2388b841d72cb62ca48ab1846dfcc11c8/game/shared/shareddefs.h
COLORS = [
    [240, 243, 32, 255],
    [190, 33, 222, 255],
    [28, 166, 0, 255],
    [92, 168, 255, 255],
    [255, 155, 37, 255],
]
COLOR_CT = [153, 204, 255, 255]
COLOR_T = [255, 178, 70, 255]
DARKENCOLORS = [
    [128, 130, 7, 255],
    [95, 16, 111, 255],
    [13, 83, 0, 255],
    [0, 80, 173, 255],
    [146, 79, 0, 255],
]

display_icons = {
    'glock 18': 'd',
    p2000: 'o',
    'dual berettas': 'b',
    p250: 'y',
    'five seven': 'c',
    'cz75 auto': 'Q',
    'usp s': 'P',
    'desert eagle': 'a',
    'r8 revolver': 'R',
    'tec 9': 'w',
    nova: 'B',
    xm1014: 'r',
    'mag 7': 't',
    'sawed off': 'v',
    negev: 'u',
    m249: 'i',
    mp9: 'A',
    mp7: 'z',
    'mp5 sd': 'p',
    'ump 45': 'q',
    p90: 'C',
    'pp bizon': 's',
    'mac 10': 'n',
    'ak 47': 'e',
    m4a4: 'l',
    'm4a1 s': 'm',
    famas: 'h',
    'galil ar': 'k',
    aug: 'f',
    'ssg 08': 'F',
    'sg 553': 'E',
    awp: 'g',
    'scar 20': 'D',
    g3sg1: 'j',
    'high explosive grenade': 'I',
    'smoke grenade': 'J',
    flashbang: 'H',
    'decoy grenade': 'L',
    molotov: 'K',
    'incendiary grenade': 'M',
    'zeus x27': 'x',
    'c4 explosive': 'N',
    'm9 bayonet': 'G',
    bayonet: 'G',
    'flip knife': 'G',
    'gut knife': 'G',
    karambit: 'G',
    'butterfly knife': 'G',
    'falchion knife': 'G',
    'navaja knife': 'G',
    'shadow daggers': 'G',
    'stiletto knife': 'G',
    'bowie knife': 'G',
    'huntsman knife': 'G',
    'talon knife': 'G',
    'ursus knife': 'G',
    'classic knife': 'G',
    'paracord knife': 'G',
    'survival knife': 'G',
    'nomad knife': 'G',
    'skeleton knife': 'G',
    knife: 'G',
    defuse_kit: 'U',
    c4: 'N',
    kevlar: 'S',
    kelvar_helmet: 'T',
}

exceptions = {
    'glock 18': 'glock',
    p2000: 'hkp2000',
    'dual berettas': 'elite',
    'cz75 auto': 'cz75a',
    'usp s': 'usp_silencer',
    'desert eagle': 'deagle',
    'r8 revolver': 'revolver',
    'pp bizon': 'bizon',
    'high explosive grenade': 'hegrenade',
    'decoy grenade': 'decoy',
    'incendiary grenade': 'incgrenade',
    'zeus x27': 'taser',
}

weaponname_icons = {}

for (key in display_icons) {
    value = display_icons[key]
    weaponname_icons['weapon_' + (exceptions[key] ? exceptions[key] : key.replace(/ /g, ''))] = value
}

// ARMOR KNIFE TASER NADES PISTOL OTHER KIT BOMB -> Old Order
// Newer Order : ARMOR TASER NADES PISTOL KNIFE OTHER KIT BOMB
priority_array = [
    [display_icons.kevlar, display_icons.kelvar_helmet],
    [display_icons['zeus x27']],
    [display_icons.molotov, display_icons['incendiary grenade']],
    [display_icons['high explosive grenade']],
    [display_icons['smoke grenade']],
    [display_icons.flashbang],
    [display_icons['decoy grenade']],
    [display_icons['glock 18'], display_icons.p2000, display_icons['dual berettas'], display_icons.p250, display_icons['five seven'], display_icons['cz75 auto'], display_icons['usp s'], display_icons['desert eagle'], display_icons['r8 revolver'], display_icons['tec 9']],
    [display_icons.knife],
    [],
    [display_icons.defuse_kit],
    [display_icons.c4],
]

priorities = {}

for (_ in display_icons) {
    weapon = display_icons[_]
    priorities[weapon] = 9
}

for (index in priority_array) {
    value = priority_array[index]
    for (i = 0, len = value.length; i < len; i++) {
        weapon = value[i]
        priorities[weapon] = index
    }
}

weaponcache = {}

enemycache = {}
draw = function() {
    if (!GetVal("buy_list")) return;
    local = Entity.GetLocalPlayer();
    var active, enemies, font, height, icon, icons, j, k, l, len1, len2, len3, len4, m, money, name, player, ref, results, size, width, customColor
    if (!(Entity.IsValid(Entity.GetLocalPlayer()) || UI.IsMenuOpen())) {
        return
    }
    font = Render.AddFont('Segoe UI', 8, 600)
    height = 0
    // upper header
    // header

    Render.GradientRect(position[0], position[1], 100, 2, 1, [218, 160, 87, 255], [255, 223, 150, 255])
    Render.GradientRect(position[0] + 100, position[1], 100, 2, 1, [255, 223, 150, 255], [218, 160, 87, 255])
    Render.FilledRect(position[0], position[1] + 2, 200, 16, [38, 40, 52, 90])
    /*
    Render.GradientRect(position[0], position[1], 100, 2, 1, 
    	(Entity.GetProp(Entity.GetLocalPlayer(), 'CCSPlayer', 'm_iTeamNum') === 2 ? COLOR_CT : COLOR_T),
    	(Entity.GetProp(Entity.GetLocalPlayer(), 'CCSPlayer', 'm_iTeamNum') === 3 ? COLOR_CT : COLOR_T))
    Render.GradientRect(position[0] + 100, position[1], 100, 2, 1, 
    	(Entity.GetProp(Entity.GetLocalPlayer(), 'CCSPlayer', 'm_iTeamNum') === 3 ? COLOR_CT : COLOR_T),
    	(Entity.GetProp(Entity.GetLocalPlayer(), 'CCSPlayer', 'm_iTeamNum') === 2 ? COLOR_CT : COLOR_T))
    Render.FilledRect(position[0], position[1] + 2, 200, 16, 
    					[38, 40, 52, 90])*/
    text = 'Buy list '
    if (Entity.GetProp(Entity.GetLocalPlayer(), 'CCSPlayer', 'm_iTeamNum') === 2) text = text + '( CT )'
    else if (Entity.GetProp(Entity.GetLocalPlayer(), 'CCSPlayer', 'm_iTeamNum') === 3) text = text + '( T )'

    //+ (Entity.GetProp(Entity.GetGameRulesProxy(), "CCSGameRulesProxy" ,"m_bIsValveDS") == 1 ? " (valve) " : " ")
    size = Render.TextSizeCustom(text, font)
    Render.StringCustom(position[0] + (200 - size[0]) / 2 + 1, position[1] + (18 - size[1]) / 2 + 1, 0, text, [0, 0, 0, 100], font)
    Render.StringCustom(position[0] + (200 - size[0]) / 2, position[1] + (18 - size[1]) / 2, 0, text, [239, 239, 239, 255], font)
    enemies = Entity.GetEnemies()
    for (j = 0, len1 = enemies.length; j < len1; j++) {
        player = enemies[j]
        enemycache[player] = true
    }
    for (player in enemycache) {
        _ = enemycache[player]
        player = parseInt(player) // keys always string
        if (enemies.indexOf(player) === -1 && Entity.IsEnemy(player)) {
            // just to be sure
            enemies.push(player)
        }
    }
    results = []
    for (k = 0, len2 = enemies.length; k < len2; k++) {
        player = enemies[k]
        if (!(Entity.GetProp(player, 'CCSPlayerResource', 'm_iHealth') > 0)) {
            continue
        }
        if (!Entity.IsDormant(player)) {
            icons = []
            ref = Entity.GetWeapons(player)
            for (l = 0, len3 = ref.length; l < len3; l++) {
                weapon = ref[l]
                icon = display_icons[Entity.GetName(weapon)]
                if (icon) {
                    icons.push(icon)
                }
            }
            if (icons.indexOf(display_icons[Entity.GetName(Entity.GetWeapon(player))]) >= 0) {
                // JANK PROTECTION
                weaponcache[player] = {
                    weapons: icons,
                    selected: display_icons[Entity.GetName(Entity.GetWeapon(player))],
                }
            }
        }
        name = Entity.GetName(player)
        if (!PRINTABLE.exec(name)) {
            if (Entity.GetProp(player, 'CCSPlayerResource', 'm_iCompTeammateColor') >= 0) name = 'Enemy ' + COLORNAMES[Entity.GetProp(player, 'CCSPlayerResource', 'm_iCompTeammateColor')]
            else name = 'Enemy Player'
        }

        if (Entity.IsBot(player)) {
            name = 'BOT ' + name
        }

        width = 0
        customColor = [239, 239, 239, 255]
        if (!Entity.IsBot(player) && Entity.GetProp(player, 'CCSPlayerResource', 'm_iCompTeammateColor') >= 0) {
            customColor = COLORS[Entity.GetProp(player, "CCSPlayerResource", "m_iCompTeammateColor")]
            customCircleColor = DARKENCOLORS[Entity.GetProp(player, "CCSPlayerResource", "m_iCompTeammateColor")]
            //customColor = COLORS[k], customCircleColor = DARKENCOLORS[k]
            Render.FilledCircle(position[0] + 8, position[1] + height + 26, 4, customColor)
            Render.Circle(position[0] + 8, position[1] + height + 26, 4, customCircleColor)
            width = +18
        }

        Render.StringCustom(position[0] + width + 4, position[1] + height + 21, 0, name, [0, 0, 0, 100], font)
        Render.StringCustom(position[0] + width + 3, position[1] + height + 20, 0, name, [239, 239, 239, 255], font)
        width = width + Render.TextSizeCustom(name, font)[0]
        //
        money = Entity.GetProp(player, 'CCSPlayer', 'm_iAccount') + '$'
        Render.StringCustom(position[0] + width + 11, position[1] + height + 21, 0, money, [0, 0, 0, 100], font)
        Render.StringCustom(position[0] + width + 10, position[1] + height + 20, 0, money, [0, 144, 81, 255], font)
        //
        /*
	location = "; " + Entity.GetProp(player, "CCSPlayer", "m_szLastPlaceName")
	width    =  width + Render.TextSizeCustom(money, font)[0];
	Render.StringCustom(position[0] + width + 16, position[1] + height + 19, 0, location, [0, 0, 0, 100], font);
	Render.StringCustom(position[0] + width + 15, position[1] + height + 18, 0, location, [233, 233, 233, 255], font);*/
        //
        width = 0
        icons = weaponcache[player] ? weaponcache[player].weapons.slice() : []
        if (Entity.GetProp(player, 'CCSPlayer', 'm_bHasHelmet')) {
            icons.push(display_icons.kelvar_helmet)
        } else if (Entity.GetProp(player, 'CCSPlayerResource', 'm_iArmor') > 0) {
            icons.push(display_icons.kevlar)
        }
        if (Entity.GetProp(player, 'CCSPlayer', 'm_bHasDefuser')) {
            icons.push(display_icons.defuse_kit)
        }
        icons.sort(function(a, b) {
            return priorities[a] - priorities[b]
        })

        active = weaponcache[player] ? weaponcache[player].selected : void 0
        for (m = 0, len4 = icons.length; m < len4; m++) {
            icon = icons[m]
            if (icon === "G" && icon !== active) continue; // filter out knives
            Render.String(position[0] + width + 2, position[1] + height + 36, 0, icon, [0, 0, 0, 100], 5)
            Render.String(position[0] + width + 1, position[1] + height + 35, 0, icon, active === icon ? [255, 164, 1, 255] : [239, 239, 239, 255], 5)
            width += Render.TextSize(icon, 5)[0]

        }
        results.push((height += 36)) // was 32, changed to adapt filledcircle
    }
    return results
}

rel_start = void 0
drag = function() {
    if (!GetVal("buy_list")) return;
    var cursor, rel
    if (!(UI.IsMenuOpen() && Input.IsKeyPressed(0x01))) {
        return (rel_start = void 0)
    }
    cursor = Input.GetCursorPosition()
    rel = [cursor[0] - position[0], cursor[1] - position[1]]
    if (!rel_start && (rel[0] < 0 || rel[0] > 200 || rel[1] < 0 || rel[1] > 18)) {
        return
    }
    if (!rel_start) {
        rel_start = rel
    }
    position = [cursor[0] - rel_start[0], cursor[1] - rel_start[1]]
    UI.SetValue('Buylist X position', position[0])
    return UI.SetValue('Buylist Y position', position[1])
}
in_warmup = false
onDraw = function() {
    if (!GetVal("buy_list")) return;

    if (Entity.GetProp(Entity.GetGameRulesProxy(), 'CCSGameRulesProxy', 'm_bWarmupPeriod')) {
        in_warmup = true
    } else if (in_warmup) {
        enemycache = {}
        weaponcache = {}
        in_warmup = false
    }
    drag()
    return draw()
}
on_item_pickup = function() {
    if (!GetVal("buy_list")) return;
    var player
    player = Entity.GetEntityFromUserID(Event.GetInt('userid'))
    if (!Entity.IsEnemy(player)) {
        return
    }
    weapon = weaponname_icons['weapon_' + Event.GetString('item')]
    if (!weapon) {
        return
    }
    if (!weaponcache[player]) {
        weaponcache[player] = {
            weapons: [],
            selected: void 0,
        }
    }
    return weaponcache[player].weapons.push(weapon)
}

on_item_remove = function() {
    if (!GetVal("buy_list")) return;
    var player
    player = Entity.GetEntityFromUserID(Event.GetInt('userid'))
    if (!(weaponcache[player] && Entity.IsEnemy(player))) {
        return
    }
    weapon = weaponname_icons['weapon_' + Event.GetString('item')]
    if (!weapon) {
        return
    }
    index = weaponcache[player].weapons.indexOf(weapon)
    if (index >= 0) {
        return weaponcache[player].weapons.splice(index, 1)
    }
}

on_item_equip = function() {
    if (!GetVal("buy_list")) return;
    var player
    player = Entity.GetEntityFromUserID(Event.GetInt('userid'))
    if (!(weaponcache[player] && Entity.IsEnemy(player))) {
        return
    }
    weapon = weaponname_icons['weapon_' + Event.GetString('item')]
    if (!weapon) {
        return
    }
    return (weaponcache[player].selected = weapon)
}

on_player_death = function() {
    if (!GetVal("buy_list")) return;
    var player
    player = Entity.GetEntityFromUserID(Event.GetInt('userid'))
    if (!(weaponcache[player] && Entity.IsEnemy(player))) {
        return
    }
    return (weaponcache[player] = {
        weapons: [],
        selected: void 0,
    })
}

on_cs_game_disconnected = function() {
    if (!GetVal("buy_list")) return;
    enemycache = {}
    return (weaponcache = {})
}

//Vote revealer
var vote_options = [];

function voteRevealer() {
    if (!GetVal("vote_revealer")) return;
    var entid = Event.GetInt("entityid");
    if (!entid) return;
    var team = Event.GetInt("team");
    var option = Event.GetInt("vote_option");
    var name = Entity.GetName(entid);
    var chTeam = "null";
    switch (team) {
        case 0:
            chTeam = "[N] ";
            break;
        case 1:
            chTeam = "[S] ";
            break;
        case 2:
            chTeam = "[T] ";
            break;
        case 3:
            chTeam = "[CT] ";
            break;
        default:
            chTeam = "[UNK] ";
            break;
    }

    var vote = vote_options[option];
    Global.PrintColor([217, 217, 217, 255], "[XD.js] \0");
    Global.Print(chTeam + name + " voted " + vote + "\n");
    Global.PrintChat(chTeam + name + " voted " + vote);
}

function onVoteOptions() {
    vote_options[0] = Event.GetString("option1");
    vote_options[1] = Event.GetString("option2");
    vote_options[2] = Event.GetString("option3");
    vote_options[3] = Event.GetString("option4");
    vote_options[4] = Event.GetString("option5");
}

//Agent Changer
var agent_list = {
    "'TwoTimes' McCoy": "CT",
    "Seal Team 6 Soldier": "CT",
    "Buckshot": "CT",
    "Lt. Commander Ricksaw": "CT",
    "Dragomir": "T",
    "Rezan The Ready": "T",
    "Maximus": "T",
    "Blackwolf": "T",
    "The Doctor' Romanov": "T",
    "B Squadron Officer": "CT",
    "3rd Commando Company": "CT",
    "Special Agent Ava": "CT",
    "Operator": "CT",
    "Markus Delrow": "CT",
    "Michael Syfers": "CT",
    "Enforcer": "T",
    "Slingshot": "T",
    "Soldier": "T",
    "The Elite Mr. Muhlik": "T",
    "Ground Rebel": "T",
    "Osiris": "T",
    "Prof. Shahmat": "T"
};
var newAgents = {
    "'Blueberries' Buckshot": "CT",
    "New 'Two Times' McCoy": "CT",
    "'Dead Cold' Jamison": "CT",
    "1st Lieutenant Farlow": "CT",
    "John 'Van Healen' Kask": "CT",
    "Bio-Haz Specialist": "CT",
    "Sergeant Bombson": "CT",
    "Chem-Haz Specialist": "CT",
    "Rezan the Redshirt": "T",
    "Bloody Miami Darryl": "T",
    "Safecracker Voltzmann": "T",
    "Little Kev": "T",
    "Getaway Sally": "T",
    "Number K": "T",
    "Bloody Silent Darryl": "T",
    "Bloody Skullhead Darryl": "T",
    "Bloody Darryl Royale": "T",
    "Bloody Loudmouth Darryl": "T",
    "Street Soldier": "T",
    "New Dragomir": "T"
};
var agentsModels = {
    "'Blueberries' Buckshot": "ctm_st6_variantj",
    "New 'Two Times' McCoy": "ctm_st6_variantl",
    "'Dead Cold' Jamison": "ctm_swat_variante",
    "1st Lieutenant Farlow": "ctm_swat_variantf",
    "John 'Van Healen' Kask": "ctm_swat_variantg",
    "Bio-Haz Specialist": "ctm_swat_varianth",
    "Sergeant Bombson": "ctm_swat_varianti",
    "Chem-Haz Specialist": "ctm_swat_variantj",
    "Rezan the Redshirt": "tm_balkan_variantk",
    "Bloody Miami Darryl": "tm_professional_varf",
    "Safecracker Voltzmann": "tm_professional_varg",
    "Little Kev": "tm_professional_varh",
    "Getaway Sally": "tm_professional_varj",
    "Number K": "tm_professional_vari",
    "Bloody Silent Darryl": "tm_professional_varf1",
    "Bloody Skullhead Darryl": "tm_professional_varf2",
    "Bloody Darryl Royale": "tm_professional_varf3",
    "Bloody Loudmouth Darryl": "tm_professional_varf4",
    "Street Soldier": "tm_phoenix_varianti",
    "New Dragomir": "tm_balkan_variantl"
};
//Fix this if you want ↓↓↓ this code tries to change an agent to new from Broken Fang operation. idk why it throws an error
function agentChanger() {
    if (!GetVal("agent_changer")) return;
    if (Cheat.FrameStage() != 2) return;
    local = Entity.GetLocalPlayer();
    var team = Entity.GetProp(local, "DT_BaseEntity", "m_iTeamNum")
    if (team == 2) { // T
        UI.SetValue("Misc", "SKINS", "Player", "Player model", getAgent("T", GetValue("T agent")));
        //setModel("T", GetValue("T agent"));
    } else if (team == 3) { // CT
        UI.SetValue("Misc", "SKINS", "Player", "Player model", getAgent("CT", GetValue("CT agent")));
        //setModel("CT", GetValue("CT agent"));
    }
}

function getAgents(team) {
    var agents = ["None"];
    var agent_names = Object.keys(agent_list);
    for (i = 0; i < agent_names.length; i++) {
        var name = agent_names[i];
        if (agent_list[name] !== team && team !== "all") continue;
        agents.push(agent_names[i]);
    }
    /*newAgents_names = Object.keys(newAgents);
    for(i = 0; i < newAgents_names.length; i++){
    	var name = newAgents_names[i];
    	if(newAgents[name] !== team && team !== "all") continue;
    	agents.push(newAgents_names[i]);
    }*/
    return agents;
}

function getAgent(team, id) {
    return getAgents("all").indexOf(getAgents(team)[id]);
}
/*function setModel(team, id){
	if(getAgents(team)[id] in agentsModels){
		Cheat.ExecuteCommand('script function ChangeAgent(n_class,p=null){{while((p=Entities.FindByClassname(p,n_class))!=null){p.SetModel("models/player/custom_player/legacy/'+getAgents(team)[id]+'.mdl")}}}')
		Cheat.ExecuteCommand('script ChangeAgent("player")');
	}
}*/

//Better miss logs
hitboxeslog = [
    'generic',
    'head',
    'chest',
    'stomach',
    'left arm',
    'right arm',
    'left leg',
    'right leg',
    '?'
];
var scriptitems = ("Misc", "JAVASCRIPT", "Script items"); //redefine again to make sure i dont forget anything
function getHitboxName(index) {
    if (!GetVal("better_missLogs")) return;
    UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Log events", "Damage dealt", false);
    UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Log events", "Damage rejected", false);
    UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Log events", "Spread misses", false);
    switch (index) {
        case 0:
            hitboxName = "head";
            break;
        case 1:
            hitboxName = "head";
            break;
        case 2:
            hitboxName = "stomach";
            break;
        case 3:
            hitboxName = "stomach";
            break;
        case 4:
            hitboxName = "stomach";
            break;
        case 5:
            hitboxName = "chest";
            break;
        case 6:
            hitboxName = "chest";
            break;
        case 7:
            hitboxName = "left leg";
            break;
        case 8:
            hitboxName = "right leg";
            break;
        case 9:
            hitboxName = "left leg";
            break;
        case 10:
            hitboxName = "right leg";
            break;
        case 11:
            hitboxName = "left leg";
            break;
        case 12:
            hitboxName = "right leg";
            break;
        case 13:
            hitboxName = "left arm";
            break;
        case 14:
            hitboxName = "right arm";
            break;
        case 15:
            hitboxName = "left arm";
            break;
        case 16:
            hitboxName = "left arm";
            break;
        case 17:
            hitboxName = "right arm";
            break;
        case 18:
            hitboxName = "right arm";
            break;
        default:
            hitboxName = "body";
    }
    return hitboxName;
}

function HitgroupName(index) {
    if (!GetVal("better_missLogs")) return;
    UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Log events", "Damage dealt", false);
    UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Log events", "Damage rejected", false);
    UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Log events", "Spread misses", false);
    return hitboxeslog[index] || 'body';
}

function ragebot_fire2() {
    if (!GetVal("better_missLogs")) return;
    UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Log events", "Damage dealt", false);
    UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Log events", "Damage rejected", false);
    UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Log events", "Spread misses", false);
    predicthc = Event.GetInt("hitchance");
    safety = Event.GetInt("safepoint");
    hitboxName = getHitboxName(Event.GetInt("hitbox"));
    exploit = (Event.GetInt("exploit") + 1).toString();
    target = Event.GetInt("target_index");
    shots_fired++;
    logged = false;
    lastUpdate = Globals.Curtime();
}

function hitlog() {
    if (!GetVal("better_missLogs")) return;
    UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Log events", "Damage dealt", false);
    UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Log events", "Damage rejected", false);
    UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Log events", "Spread misses", false);
    var hit = Entity.GetEntityFromUserID(Event.GetInt("userid"));
    var attacker = Entity.GetEntityFromUserID(Event.GetInt("attacker"));
    if (attacker == Entity.GetLocalPlayer() && hit == target) hits++;

    var hittype = "Hit ";
    me = Entity.GetLocalPlayer();
    hitbox = Event.GetInt('hitgroup');
    target_damage = Event.GetInt("dmg_health");
    target_health = Event.GetInt("health");
    victim = Event.GetInt('userid');
    attacker = Event.GetInt('attacker');
    weapon = Event.GetString('weapon');
    victimIndex = Entity.GetEntityFromUserID(victim);
    attackerIndex = Entity.GetEntityFromUserID(attacker);
    name = Entity.GetName(victimIndex);
    var simtime = Globals.Tickcount() % 17;

    var flags = "";

    if (exploit == 2)
        flags += "T";

    flags += "B";

    if (hitbox == 1)
        flags += "H";

    if (safety == 1) {
        safety = "true";
    } else {
        safety = "false";
    }

    if (weapon == "hegrenade")
        hittype = "Naded ";
    else if (weapon == "inferno")
        hittype = "Burned ";
    else if (weapon == "knife")
        hittype = "Knifed ";

    if (me == attackerIndex && me != victimIndex) {
        Cheat.PrintColor([89, 119, 239, 255], "[XD.js] ");
        if (hittype == "Hit ") {
            if (UI.GetValue("Script items", "Enable chat logging")) {
                Cheat.PrintChat(" \x08[\x0cXD.js\x08] [\x0c" + shots.toString() + "\x08] " + hittype + name + "'s \x10" + HitgroupName(hitbox) + "\x08 for \x07" + target_damage.toString() + "\x08 (" + target_health.toString() + " remaining) aimed=\x10" + hitboxName + "\x08(" + predicthc.toString() + "%%) safety=\x03" + safety + "\x08 (\x10" + flags + "\x08) (\x10" + simtime + "\x08:\x10" + exploit + "\x08)\n");
            }
            Cheat.Print("[" + shots.toString() + "] " + hittype + name + "'s " + HitgroupName(hitbox) + " for " + target_damage.toString() + " (" + target_health.toString() + " remaining) aimed=" + hitboxName + "(" + predicthc.toString() + "%%) safety=" + safety + " (" + flags + ") (" + simtime + ":" + exploit + ")\n");
            logs.push("[" + shots.toString() + "] " + hittype + name + "'s " + HitgroupName(hitbox) + " for " + target_damage.toString() + " (" + target_health.toString() + " remaining) aimed=" + hitboxName + "(" + predicthc.toString() + "%%) safety=" + safety + " (" + flags + ") (" + simtime + ":" + exploit + ")");
        } else {
            Cheat.Print("[" + shots.toString() + "] " + hittype + name + "'s " + HitgroupName(hitbox) + " for " + target_damage.toString() + " (" + target_health.toString() + " remaining) \n");
            logs.push("[" + shots.toString() + "] " + hittype + name + "'s " + HitgroupName(hitbox) + " for " + target_damage.toString() + " (" + target_health.toString() + " remaining)");
        }

        logsct.push(Globals.Curtime());
        logsalpha.push(255);
    }

    if (shots == 99)
        shots = 0;
    else
        shots++;

}

function removelogs() {
    if (!GetVal("better_missLogs")) return;
    UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Log events", "Damage dealt", false);
    UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Log events", "Damage rejected", false);
    UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Log events", "Spread misses", false);
    if (logs.length > 6) {
        logs.shift();
        logsct.shift();
        logsalpha.shift();
    }

    if (logsct[0] + 6.5 < Globals.Curtime()) {
        logsalpha[0] -= Globals.Frametime() * 600;
        if (logsalpha[0] < 0) {
            logs.shift();
            logsct.shift();
            logsalpha.shift();
        }
    }
}

function item_purchase() {
    if (!GetVal("better_missLogs")) return;
    UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Log events", "Damage dealt", false);
    UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Log events", "Damage rejected", false);
    UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Log events", "Spread misses", false);
    Cheat.PrintColor([89, 119, 239, 255], "[XD.js] ");
    Cheat.Print(Entity.GetName(Entity.GetEntityFromUserID(Event.GetInt("userid"))) + " bought " + Event.GetString("weapon") + "\n");
    logs.push(Entity.GetName(Entity.GetEntityFromUserID(Event.GetInt("userid"))) + " bought " + Event.GetString("weapon") + "");
    logsct.push(Globals.Curtime());
    logsalpha.push(255);
}

function onDrawHL() {
    if (!GetVal("better_missLogs")) return;
    UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Log events", "Damage dealt", false);
    UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Log events", "Damage rejected", false);
    UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Log events", "Spread misses", false);
    if (!World.GetServerString()) return;
    var font = Render.AddFont("Lucida Console", 8, 0);


    for (i = 0; i < logs.length; i++) {
        Render.StringCustom(4, 4 + 13 * i, 0, logs[i], [0, 0, 0, logsalpha[i]], font);
        Render.StringCustom(3, 3 + 13 * i, 0, logs[i], [255, 255, 255, logsalpha[i]], font);
    }

    if (shots_fired > hits && (Globals.Curtime() - lastUpdate > 0.33)) {
        if (Globals.Curtime() - lastUpdate > 1) {
            shots_fired = 0;
            hits = 0;
        }
        if (!logged) {
            var simtime = Globals.Tickcount() % 16;
            logged = true;
            var issafe = "true";
            var reason = "?";
            if (safety == 0) {
                issafe = "false";
            }

            if (Entity.IsAlive(target) == false)
                reason = "death";
            else if (Entity.IsAlive(Entity.GetLocalPlayer()) == false)
                reason = "dead";
            else if (safety == true && predicthc < 76)
                reason = "spread";
            else if (safety == true && predicthc > 76)
                reason = "prediction error";

            var flags = "";

            if (exploit == 2)
                flags += "T";

            flags += "B";

            Cheat.PrintColor([89, 119, 239, 255], "[XD.js] ");
            Cheat.Print("[" + shots.toString() + "] " + "Missed " + Entity.GetName(target) + "'s " + hitboxName + "(" + predicthc.toString() + "%%) due to " + reason + ", safety=" + issafe + " (" + flags + ") (" + simtime + ":" + exploit + ")\n");
            logs.push("[" + shots.toString() + "] " + "Missed " + Entity.GetName(target) + "'s " + hitboxName + "(" + predicthc.toString() + "%%) due to " + reason + ", safety=" + issafe + " (" + flags + ") (" + simtime + ":" + exploit + ")");

            if (UI.GetValue("Script items", "Enable chat logging")) {
                Cheat.PrintChat(" \x08[\x0cXD.js\x08] [\x0c" + shots.toString() + "\x08] " + "\x08Missed " + Entity.GetName(target) + "'s \x10" + hitboxName + "\x08(" + predicthc.toString() + "%%) due to \x07" + reason + "\x08, safety=\x03" + issafe + "\x08 (\x10" + flags + "\x08) (\x10" + simtime + "\x08:\x10" + exploit + "\x08)");
            }
            logsct.push(Globals.Curtime());
            logsalpha.push(255);
            if (shots == 99)
                shots = 0;
            else
                shots++;
        }
    }
}

//Net graph
Render.OutlineStringCustom = function(x, y, alignid, text, color, font) {
    Render.StringCustom(x - 1, y - 1, alignid, text, [0, 0, 0, color[3]], font);
    Render.StringCustom(x - 1, y, alignid, text, [0, 0, 0, color[3]], font);

    Render.StringCustom(x - 1, y + 1, alignid, text, [0, 0, 0, color[3]], font);
    Render.StringCustom(x, y + 1, alignid, text, [0, 0, 0, color[3]], font);

    Render.StringCustom(x, y - 1, alignid, text, [0, 0, 0, color[3]], font);
    Render.StringCustom(x + 1, y - 1, alignid, text, [0, 0, 0, color[3]], font);

    Render.StringCustom(x + 1, y, alignid, text, [0, 0, 0, color[3]], font);
    Render.StringCustom(x + 1, y + 1, alignid, text, [0, 0, 0, color[3]], font);

    Render.StringCustom(x, y, alignid, text, color, font);
}

var ping_color = function(ping_value) {
    if (ping_value < 40) {
        return [255, 255, 255]
    }
    if (ping_value < 100) {
        return [255, 125, 95]
    }

    return [255, 60, 80]
}

var ping_info = []
var fps_info = []
var last_time = Global.Curtime()

var scx = Render.GetScreenSize()[0]
var scy = Render.GetScreenSize()[1]

var LC_ALPHA = 1

function netgraph() {
    if (!GetVal("net_graph")) return;
    Cheat.ExecuteCommand("net_graph 0");
    var font = Render.AddFont("Verdana", 7, 400)
    var icon = Render.AddFont("Danger", 28, 400)
    var font_b = Render.AddFont("Verdana", 11, 400)

    var alpha = Math.min(Math.floor(Math.sin((Globals.Realtime() % 3) * 4) * 125 + 200), 255)
    var color = [255, 200, 95, 255]

    var net_state = 0
    var net_data_text = {
        [0]: "clock syncing",
        [1]: "packet choke",
        [2]: "packet loss",
        [3]: "lost connection"
    }

    if (Global.Curtime() - last_time > 0.5) {
        last_time = Global.Curtime();
        ping_info.unshift(Global.Latency())
        fps_info.unshift(Global.Frametime())
    };

    if (ping_info.length > 1) {
        ping_info.pop()
    };

    if (fps_info.length > 1) {
        fps_info.pop()
    };

    var server_framerate = fps_info
    var server_vars = ping_info

    if (server_vars > 1) {
        net_state = 2
    }

    if (net_state != 0) {
        color = [255, 50, 50, alpha]
    }

    var x = scx / 2 + 1
    var y = scy - 155

    var ccor_text = net_data_text[net_state]
    var ccor_width = Render.TextSizeCustom(ccor_text, font)

    var sp_x = x - ccor_width[0] - 25
    var sp_y = y

    var cn = 1

    LC_ALPHA = LC_ALPHA + (Globals.Frametime() * 2)
    LC_ALPHA = LC_ALPHA > 1 && 1 || LC_ALPHA

    Render.OutlineStringCustom(sp_x, sp_y, 0, ccor_text, [255, 255, 255, alpha], font)
    Render.StringCustom(x - 17, sp_y - 14, 0, "0", [color[0], color[1], color[2], color[3]], icon)
    Render.StringCustom(x - 6, sp_y - 8, 0, "!", [color[0], color[1], color[2], color[3]], font_b)
    Render.OutlineStringCustom(x + 20, sp_y, 0, "+-" + (server_vars / 1).toFixed(1) + "ms", [255, 255, 255, 255], font)

    var bytes_in_text = "in: 16.01k/s    "
    var bi_width = Render.TextSizeCustom(bytes_in_text, font)

    var sent_bytes_in_text = "out: 5.02k/s"
    var sb_width = Render.TextSizeCustom(sent_bytes_in_text, font)

    var tickrate = 1 / Globals.TickInterval()
    var lerp_time = Convar.GetFloat("cl_interp_ratio") * (1000 / tickrate)

    var lerp_clr = [255, 255, 255]

    if (lerp_time / 1000 < 2 / Convar.GetInt("cl_updaterate")) {
        lerp_clr = [255, 125, 95]
    }

    Render.OutlineStringCustom(sp_x, sp_y + 20 * cn, 0, bytes_in_text, [255, 255, 255, LC_ALPHA * 255], font)
    Render.OutlineStringCustom(sp_x + bi_width[0], sp_y + 20 * cn, 0, "lerp: " + lerp_time.toFixed(1) + " ms", [lerp_clr[0], lerp_clr[1], lerp_clr[2], LC_ALPHA * 255], font)
    cn = cn + 1
    Render.OutlineStringCustom(sp_x, sp_y + 20 * cn, 0, sent_bytes_in_text, [255, 255, 255, LC_ALPHA * 255], font)
    cn = cn + 1
    Render.OutlineStringCustom(sp_x, sp_y + 20 * cn, 0, "sv: " + (server_framerate / 1).toFixed(2) + " +- " + (server_vars / 1).toFixed(2) + "mc    var: " + (server_vars / 1).toFixed(3) + " mc", [255, 255, 255, LC_ALPHA * 255], font)
    cn = cn + 1

    var ping = Math.round(Entity.GetProp(Entity.GetLocalPlayer(), "CPlayerResource", "m_iPing")).toString()
    var avg_ping = ping

    var pc = ping_color(avg_ping)

    var latency_interval = (ping) / (Globals.TickInterval())
    var additional_latency = Math.min(latency_interval * 1000, 1) * 100 //-- 100 = green 0 = red

    var tr_text = "tick: " + tickrate + "p/s    "
    var tr_width = Render.TextSizeCustom(tr_text, font)

    var nd_text = "delay: " + ping.toString() + "ms (+- " + Math.abs(avg_ping - ping) + "ms)    "
    var nd_width = Render.TextSizeCustom(nd_text, font)

    var incoming_latency = Math.max(0, (server_vars + ping) * 1000)

    //Render.OutlineStringCustom(sp_x, sp_y + 20*cn, 0, tr_text, [pc[0], pc[1], pc[2], LC_ALPHA * 255], font) 
    Render.OutlineStringCustom(sp_x, sp_y + 20 * cn, 0, nd_text, [pc[0], pc[1], pc[2], LC_ALPHA * 255], font)
    Render.OutlineStringCustom(sp_x + nd_width[0], sp_y + 20 * cn, 0, "datagram", [255, 255 / 100 * additional_latency, 255 / 100 * additional_latency, LC_ALPHA * 255], font)

    var lc_state = 0
    var lc_variants = {
        [0]: "UNSAFE",
        [1]: "LAG COMP BREAKER",
        [2]: "SHIFTING TICKBASE",
    }

    var lc_text = "lagcomp: "
    var lc_width = Render.TextSizeCustom(lc_text, font)

    var lc_color = [255, 45, 45, 255]

    if (UI.IsHotkeyActive("Rage", "Exploits", "Hide shots")) {
        lc_state = 1, lc_color = [255, 125, 95, 255]
    }
    if (UI.IsHotkeyActive("Rage", "Exploits", "Doubletap")) {
        lc_state = 2, lc_color = [42, 250, 87, 255]
    }
    if (Exploit.GetCharge() != 1) {
        lc_state = 0, lc_color = [255, 45, 45, 255]
    }

    Render.OutlineStringCustom((scx / 2) - 60, sp_y + 28 * cn, 0, lc_text, [255, 255, 255, 255], font)
    Render.OutlineStringCustom((scx / 2) - 60 + lc_width[0], sp_y + 28 * cn, 0, lc_variants[lc_state], lc_color, font)
}
//Custom fog
function customFog() {
    if (!GetVal("custom_fog")) {
        if (Convar.GetString("fog_override") !== "0") {
            Convar.SetString("fog_override", "0");
        }
        return;
    }
    if (Convar.GetString("fog_override") !== "1") {
        Convar.SetString("fog_override", "1");
    }
    var color = UI.GetColor("Script items", "Fog color");
    var color_value = color[0] + " " + color[1] + " " + color[2];
    var distance = GetVal("fog_distance").toString();
    var density = (GetVal("fog_density") / 100).toString();

    if (Convar.GetString("fog_color") != color_value) {
        Convar.SetString("fog_color", color_value);
    }
    if (Convar.GetString("fog_end") != distance) {
        Convar.SetString("fog_start", "0");
        Convar.SetString("fog_end", distance);
    }
    if (Convar.GetString("fog_maxdensity") != density) {
        Convar.SetString("fog_maxdensity", density);
    }
    if (GetVal("useless_features") && UI.IsHotkeyActive("Visual", "WORLD", "Thirdperson")) {
        Convar.SetString("fog_end", GetVal("fog_distance_3rd").toString());
    }
}

//Watermark
var color = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Watermark color");

function draw9() {
    if (!GetVal("watermark")) return;
    UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Watermark", false);
    if (!UI.GetValue("MISC", "JAVASCRIPT", "Script Items", "Watermark")) return;

    if (!World.GetServerString())
        return;

    var today = new Date();
    var hours1 = today.getHours();
    var minutes1 = today.getMinutes();
    var seconds1 = today.getSeconds();
    var value = Math.min(Math.abs(Local.GetRealYaw() - Local.GetFakeYaw()) + 2, 60)["toFixed"](0);
    var hours = hours1 <= 9 ? "0" + hours1 + ":" : hours1 + ":";
    var minutes = minutes1 <= 9 ? "0" + minutes1 + ":" : minutes1 + ":";
    var seconds = seconds1 <= 9 ? "0" + seconds1 : seconds1;
    var server_tickrate = Globals.Tickrate().toString()
    var ebanaya_hueta = Math.round(Entity.GetProp(Entity.GetLocalPlayer(), "CPlayerResource", "m_iPing")).toString()
    var speed = Math.sqrt(Entity.GetProp(Entity.GetLocalPlayer(), "CBasePlayer", "m_vecVelocity[0]")).toString() //
    color = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Watermark color");
    var font = Render.AddFont("Verdana", 7, 400);
    var text = "onetap.com v3 cracked | XD.js | user: " + Cheat.GetUsername() + " | " + 1 + " ms / " + server_tickrate + " tick";
    var w = Render.TextSizeCustom(text, font)[0] + 8;
    var x = Global.GetScreenSize()[0];
    var y = Global.GetScreenSize()[1];

    x = x - w - 10;

    Render.GradientRect(x + 200, 12, w - 200, 2, 1, [color[0], color[1], color[2], 0], [color[0], color[1], color[2], 255]);
    Render.GradientRect(x, 12, w - 200, 2, 1, [color[0], color[1], color[2], 255], [color[0], color[1], color[2], 0]);
    Render.FilledRect(x, 12, w, 2, [color[0], color[1], color[2], 85]);
    Render.FilledRect(x, 14, w, 16, [17, 17, 17, color[3]]);
    Render.StringCustom(x + 4, 15, 0, text, [255, 255, 255, 245], font);
}

Cheat.RegisterCallback("Draw", "draw9");

function menu_wt() {
    enabled = UI.GetValue("Watermark");
    UI.SetEnabled("Watermark color", enabled);
}

function menu_wtcheck() {
    if (UI.IsMenuOpen()) {
        menu_wt();
    }

}

//Nade tracer
var nade_positions = [];
var nade_warning_max_dist = 150;

function nadeTracer() {
    if (!GetVal("nade_tracer")) return;

    const length = 256,
        rate = 0.1;
    const color = UI.GetColor("Script", "Nade tracer");

    for (g in nade_positions) {
        if (Globals.Curtime() - nade_positions[g][3] > 3 || !Entity.IsValid(nade_positions[g][0])) {
            nade_positions.shift();
            continue;
        }

        if (Globals.Curtime() - nade_positions[g][1] > rate) {
            if (nade_positions[g][2].length > length) {
                nade_positions[g][2].shift();
                nade_positions[g][1] = Globals.Curtime();
            }

            nade_positions[g][2].push(Entity.GetRenderOrigin(nade_positions[g][0]));
        }

        const is_he = Entity.GetClassID(nade_positions[g][0]) === 9,
            is_inferno = Entity.GetClassID(nade_positions[g][0]) === 100;
        const owner = Entity.GetProp(nade_positions[g][0], "CBaseCSGrenadeProjectile", "m_hOwnerEntity");
        if (!is_he && !is_inferno && owner) continue;

        for (l in nade_positions[g][2]) {
            pos = Render.WorldToScreen(nade_positions[g][2][l]);

            if (l > 0) {
                last = Render.WorldToScreen(nade_positions[g][2][l - 1]);

                //why??
                //i wanna thin, not bold :)

                /*Render.Line(pos[0] - 1, pos[1] - 1, last[0] - 1, last[1] - 1, color);
                Render.Line(pos[0] - 1, pos[1] + 1, last[0] - 1, last[1] + 1, color);
                Render.Line(pos[0] + 1, pos[1] - 1, last[0] + 1, last[1] - 1, color);*/
                Render.Line(pos[0] + 1, pos[1] + 1, last[0] + 1, last[1] + 1, color);
                Render.Line(pos[0], pos[1], last[0], last[1], color);
            }

            last = Render.WorldToScreen(nade_positions[g][2][nade_positions[g][2].length - 1]);
        }
    }
}

function nadeTracer2() {
    if (!GetVal("nade_tracer")) return;

    var grenades = Entity.GetEntitiesByClassID(9).concat(Entity.GetEntitiesByClassID(113)).concat(Entity.GetEntitiesByClassID(100));
    for (e in grenades) {

        var should_pass = false;
        for (g in nade_positions) {
            if (nade_positions[g][0] == grenades[e]) {
                should_pass = true;
                continue;
            }
        }

        if (should_pass) continue;

        nade_positions.push([grenades[e], Globals.Curtime(), [Entity.GetRenderOrigin(grenades[e])], Globals.Curtime()]);
    }
}

//Nade warning
function nadeWarning() {
    if (!GetVal("nade_warning") && !GetVal("molotov_timer")) return;
    var grenades = Entity.GetEntitiesByClassID(9).concat(Entity.GetEntitiesByClassID(113)).concat(Entity.GetEntitiesByClassID(100));

    local = Entity.GetLocalPlayer();
    if (!local) return;

    if (!Entity.IsAlive(local)) {
        const obs = Entity.GetProp(local, "CBasePlayer", "m_hObserverTarget");

        if (!Entity.IsValid(obs)) return;

        local = obs;
    }

    const origin = Entity.GetEyePosition(local);

    for (var i = 0; i < grenades.length; i++) {
        const g = grenades[i];

        const destination = Entity.GetRenderOrigin(g);
        const distance = get_metric_distance(origin, destination);
        const is_he = Entity.GetClassID(g) === 9,
            is_inferno = Entity.GetClassID(g) === 100;


        if (distance > nade_warning_max_dist) continue;

        const screen = Render.WorldToScreen(destination);

        const trace = Trace.Line(local, origin, destination);

        const is_safe = distance > (is_inferno ? 4 : 8) || trace[1] < 0.61;

        if (!is_he && !is_inferno) continue;

        if (is_he && Entity.GetProp(g, "CBaseCSGrenadeProjectile", "m_nExplodeEffectTickBegin")) continue;
        if (is_he && Entity.GetProp(g, "CBaseCSGrenadeProjectile", "m_hThrower") === local) continue;

        //If it is flashbang we skip it
        if (is_he && Entity.GetProp(g, "CBaseGrenade", "m_flDamage") === 100) continue;

        Render.FilledCircle(screen[0], screen[1] - 50, 30, !is_safe ? [225, 20, 20, 175] : [20, 20, 20, 175]);
        Render.String(screen[0], screen[1] - 75, 1, "!", [255, 250, 175, 200], 4);
        if (is_he && GetVal("nade_warning")) {
            var armor = Entity.GetProp(local, "CCSPlayerResource", "m_iArmor");
            var health = Entity.GetProp(local, "CBasePlayer", "m_iHealth");
            var x = origin[0] - destination[0];
            var y = origin[1] - destination[1];
            var z = origin[2] - destination[2];
            const distance = Math.sqrt(x * x + y * y + z * z);
            const a = 105.0;
            const b = 25.0;
            const c = 140.0;
            const d = (distance - b) / (c + 1);
            var damage = (a - 18) * Math.exp(-d * d);
            if (armor > 0) {
                var newDmg = damage * 0.5;
                var armorDmg = (damage - newDmg) * 0.5;

                if (armorDmg > armor) {
                    armor = armor * (1 / 0.5);
                    newDmg = damage - armorDmg;
                }
                damage = newDmg;
            }
            damage = clamp(Math.ceil(damage) - 1, 0, 100);

            Render.String(screen[0], screen[1] - 40, 1, damage + " dmg", [232, 232, 232, 200], 3);
        }

        if (is_inferno && GetVal("molotov_timer")) {
            if (!GetVal("molotov_timer")) return;
            const time = Entity.GetProp(g, "CInferno", "m_nFireEffectTickBegin") * Globals.TickInterval();
            const factor = clamp(((time + 7) - Globals.Curtime()) / 7, 0, 7);
            Render.String(screen[0], screen[1] - 40, 1, ((time + 7) - Globals.Curtime()).toFixed(1) + " s", [232, 232, 232, 200], 3);
            renderArc(screen[0], screen[1] - 50, 30, 32, -90, 360 * factor, [232, 232, 232, 200]);
        }
    }
}

//Better AA
function baseAA() {
    if (!GetVal("base_aa")) return;
    var LBYOffset = UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "LBY offset")
    var RealOffset = UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Real offset")
    var FakeOffset = UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Fake offset")

    var inverted = UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")

    if (inverted) {
        AntiAim.SetOverride(1);
        AntiAim.SetFakeOffset(-FakeOffset);
        AntiAim.SetRealOffset(-RealOffset);
        AntiAim.SetLBYOffset(-LBYOffset);
    } else {
        AntiAim.SetOverride(1);
        AntiAim.SetFakeOffset(FakeOffset);
        AntiAim.SetRealOffset(RealOffset);
        AntiAim.SetLBYOffset(LBYOffset);
    }
}

// OTv2 body lean
function setBodyLean() {

    if (!GetVal("body_lean")) return;
    if (!UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Body Lean moving"))
        return;

    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", isInverted ? invertedLean : bodyLean);
}

function onCreateMove() {

    if (!GetVal("body_lean")) return;
    isInverted = UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter");
    invertedLean = UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Inverted body lean");
    bodyLean = UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Body lean");

    setBodyLean();
}


//Anti bruteforce
var lastHitTime = 0.0;
var lastImpactTimes = [0.0];
var lastImpacts = [
    [0.0, 0.0, 0.0]
];
var idealYawDelay = 3;
var idealYawBak = UI.GetValue("Anti-Aim", "Fake angles", "Hide real angle");
var block_set8 = false;

function antiBruteforce() {
    if (!GetVal("anti_brute")) return;
    if (GetVal("lowdelta") && isSlowwalking()) return;

    var curtime = Global.Curtime();
    if (Math.abs(lastHitTime - curtime) < 0.5) return;

    var entity = Entity.GetEntityFromUserID(Event.GetInt("userid"));
    var impact = [Event.GetFloat("x"), Event.GetFloat("y"), Event.GetFloat("z"), curtime];
    var source;
    if (Entity.IsValid(entity) && Entity.IsEnemy(entity)) {
        if (!Entity.IsDormant(entity)) {
            source = Entity.GetEyePosition(entity);
        } else if (Math.abs(lastImpactTimes[entity] - curtime) < 0.1) {
            source = lastImpacts[entity];
        } else {
            lastImpacts[entity] = impact;
            lastImpactTimes[entity] = curtime;
            return;
        }
        local = Entity.GetLocalPlayer();
        var localEye = Entity.GetEyePosition(local);
        var localOrigin = Entity.GetProp(local, "CBaseEntity", "m_vecOrigin");
        var localBody = VectorMultiply(VectorAdd(localEye, localOrigin), [0.5, 0.5, 0.5]);

        var bodyVec = ClosestPointOnRay(localBody, source, impact);
        var bodyDist = VectorDistance(localBody, bodyVec);

        if (bodyDist < 128.0) { //he clearly shot at us!
            var realAngle = Local.GetRealYaw();
            var fakeAngle = Local.GetFakeYaw();

            var headVec = ClosestPointOnRay(localEye, source, impact);
            var headDist = VectorDistance(localEye, headVec);
            var feetVec = ClosestPointOnRay(localOrigin, source, impact);
            var feetDist = VectorDistance(localOrigin, feetVec);

            var closestRayPoint;
            var realPos;
            var fakePos;

            if (bodyDist < headDist && bodyDist < feetDist) { //that's a pelvis    
                //pelvis direction = goalfeetyaw + 180 
                closestRayPoint = bodyVec;
                realPos = ExtendVector(bodyVec, realAngle + 180.0, 10.0);
                fakePos = ExtendVector(bodyVec, fakeAngle + 180.0, 10.0);
            } else if (feetDist < headDist) { //ow my toe
                //toe direction = goalfeetyaw -30 +- 90
                closestRayPoint = feetVec;
                var realPos1 = ExtendVector(bodyVec, realAngle - 30.0 + 90.0, 10.0);
                var realPos2 = ExtendVector(bodyVec, realAngle - 30.0 - 90.0, 10.0);
                var fakePos1 = ExtendVector(bodyVec, fakeAngle - 30.0 + 90.0, 10.0);
                var fakePos2 = ExtendVector(bodyVec, fakeAngle - 30.0 - 90.0, 10.0);
                if (VectorDistance(feetVec, realPos1) < VectorDistance(feetVec, realPos2)) {
                    realPos = realPos1;
                } else {
                    realPos = realPos2;
                }
                if (VectorDistance(feetVec, fakePos1) < VectorDistance(feetVec, fakePos2)) {
                    fakePos = fakePos1;
                } else {
                    fakePos = fakePos2;
                }
            } else { //ow my head i feel like i slept for 2 days
                closestRayPoint = headVec;
                realPos = ExtendVector(bodyVec, realAngle, 10.0);
                fakePos = ExtendVector(bodyVec, fakeAngle, 10.0);
            }

            if (VectorDistance(closestRayPoint, fakePos) < VectorDistance(closestRayPoint, realPos)) { //they shot at our fake. they will probably not gonna shoot it again.
                lastHitTime = curtime;
                UI.SetValue("Anti-Aim", "Fake Angles", "Hide real angle", false);
                UI.ToggleHotkey("Anti-Aim", "Fake angles", "Inverter");
                block_set8 = false;
            } else {
                if (!block_set8) {
                    UI.SetValue("Anti-Aim", "Fake Angles", "Hide real angle", idealYawBak);
                    block_set8 = true;
                }
                if (UI.IsMenuOpen()) {
                    idealYawBak = UI.GetValue("Anti-Aim", "Fake angles", "Hide real angle");
                }
            }
        }

        lastImpacts[entity] = impact;
        lastImpactTimes[entity] = curtime;
    }
}

function antiBruteforce2() {
    if (!GetVal("anti_brute")) return;
    if (GetVal("lowdelta") && isSlowwalking()) return;
    if (Entity.GetEntityFromUserID(Event.GetInt("userid")) !== Entity.GetLocalPlayer()) return;
    var hitbox = Event.GetInt('hitgroup');

    if (hitbox == 1 || hitbox == 6 || hitbox == 7) { //head, both toe
        var curtime = Global.Curtime();
        if (Math.abs(lastHitTime - curtime) > 0.5) { //0.2s backtrack + 0.2 extand + 0.1 extra
            lastHitTime = curtime;
            block_set8 = false;
            UI.SetValue("Anti-Aim", "Fake Angles", "Hide real angle", false);
            UI.ToggleHotkey("Anti-Aim", "Fake angles", "Inverter");
        } else {
            if (!block_set8) {
                UI.SetValue("Anti-Aim", "Fake Angles", "Hide real angle", idealYawBak);
                block_set8 = true;
            }
        }
    }
}

function antiBruteforce3() {
    if (!GetVal("anti_brute")) return;
    if (lastHitTime + idealYawDelay <= Global.Curtime()) {
        if (!block_set8) {
            UI.SetValue("Anti-Aim", "Fake Angles", "Hide real angle", idealYawBak);
            block_set8 = true;
        }
    } else {
        UI.SetValue("Anti-Aim", "Fake Angles", "Hide real angle", false);
        block_set8 = false;
    }
}

//Arms color changer
function armsColor() {
    if (!GetVal("arms_color")) return;
    var team = Entity.GetProp(Entity.GetLocalPlayer(), "DT_BaseEntity", "m_iTeamNum");
    if (team == 2) { // T
        if (Convar.GetString("r_skin") == GetValue("T arms color")) return;
        Global.ExecuteCommand("r_skin " + GetValue("T arms color"));
    } else if (team == 3) { // CT
        if (Convar.GetString("r_skin") == GetValue("CT arms color")) return;
        Global.ExecuteCommand("r_skin " + GetValue("CT arms color"));
    }
}

//Better glow chams
function betterGlowChams() {
    var name = "Better glow chams";
    var mat_index = Material.Get(name);
    if (mat_index > 0) {
        Material.SetKeyValue(mat_index, "$baseTexture", "vgui/white");
        var additive = GetVal("better_glow_chams_hollow");
        Material.SetKeyValue(mat_index, "$additive", additive ? "1" : "0")
        Material.SetKeyValue(mat_index, "$envmap", "models/effects/cube_white")
        Material.SetKeyValue(mat_index, "$envmapfresnel", "1")

        var color = UI.GetColor("Script items", name);
        if (GetVal("better_glow_chams_rainbow")) {
            /*color = hsv2rgb(Globals.Realtime() / 5 % 1, 1, 1);
            color = [color.r, color.g, color.b];
            color[0] /= 10;
            color[1] /= 10;
            color[2] /= 10;*/
            color = rgb(15 / 500);
        }
        if (GetVal("better_glow_chams_pulse")) {
            var speed = 7
            var additive = 5
            var intensity = 0.6
            var sine = (Math.sin(Globals.Realtime() * 7) + 5) * intensity
            color[0] *= sine
            color[1] *= sine
            color[2] *= sine
        }
        var wireframe = GetVal("better_glow_chams_wireframe");
        Material.SetKeyValue(mat_index, "$wireframe", wireframe ? "1" : "0");
        var vibrancy = GetVal("better_glow_chams_vibrancy") / 10;
        Material.SetKeyValue(mat_index, "$envmapfresnelminmaxexp", "[0 " + (11 - vibrancy) + " " + ((11 - vibrancy) * 2) + "]");
        Material.SetKeyValue(mat_index, "$envmaptint", "[" + color[0] / 255 + " " + color[1] / 255 + " " + color[2] / 255 + "]");
        Material.SetKeyValue(mat_index, "$alpha", color[3] / 255 + "");
        Material.Refresh(mat_index);
    }
}
var betterGlowChamsRegistered = false;

function registerBetterGlowChams() {
    if (!GetVal("better_glow_chams")) {
        betterGlowChamsRegistered = false;
        Material.Destroy("Better glow chams");
        return;
    }
    if (!betterGlowChamsRegistered) {
        Material.Create("Better glow chams");
        betterGlowChamsRegistered = true;
    }
}

//Ping spike on key
function pingSpikeOnKey() {
    if (!GetVal("ping_spike")) return;
    UI.SetValue("Misc", "GENERAL", "Extended backtracking", UI.IsHotkeyActive("Script items", "Ping spike"));
}

//AA and fake-lag fixes
//bayonet, karambit, shadow daggers, knife
var pitch_bak = UI.GetValue("Anti-Aim", "Extra", "Pitch");
var restrictions_bak = UI.GetValue("Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions");
var legitAAactive = false;
var noFakeLagOnRevolver = false;
var block_set11 = false;
var block_set12 = false;

function fixes() {
    var weapon = getWeaponName();
    if (GetVal("fakelag_fix")) {
        if (weapon == "revolver" && !mmFDActive) {
            noFakeLagOnRevolver = true;
            block_set11 = false;
            UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", 0);
        } else if (!mmFDActive) {
            noFakeLagOnRevolver = false;
            if (!block_set11) {
                UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", fakelag_state_bak);
                block_set11 = true;
            }
            fakelag_state_bak = UI.GetValue("Anti-Aim", "Fake-Lag", "Enabled");
        }
    }
}

var generalHitchanceBak = UI.GetValue("Rage", "GENERAL", "Accuracy", "Hitchance");
var block_set15 = false;

function zeusHitchance() {
    if (!GetVal("zeus_hitchance_enabled")) return;
    player = Entity.GetLocalPlayer();
    weapon = Entity.GetWeapon(player);
    weaponName = Entity.GetName(weapon);
    if (weaponName.includes("zeus")) {
        block_set15 = false;
        UI.SetValue("Rage", "GENERAL", "Accuracy", "Hitchance", GetVal("zeus_hitchance"));
    } else {
        if (!block_set15) {
            UI.SetValue("Rage", "GENERAL", "Accuracy", "Hitchance", generalHitchanceBak);
            block_set15 = true;
        }
        generalHitchanceBak = UI.GetValue("Rage", "GENERAL", "Accuracy", "Hitchance");
    }
}

//Enemy eye tracers
function eyeTracers() {
    if (!GetVal("eye_tracers")) return;
    var color = UI.GetColor("Script Items", "Eye tracers");
    if (!Entity.GetLocalPlayer())
        return;

    var playerList = Entity.GetEnemies();
    for (var i = 0; i < playerList.length; i++) {
        if (!Entity.IsAlive(playerList[i]) || Entity.IsDormant(playerList[i]))
            continue;

        var eyeAngles = Entity.GetProp(playerList[i], "CCSPlayer", "m_angEyeAngles");
        var e_V = angle_to_vec(eyeAngles[0], eyeAngles[1]);

        var entityHead = Entity.GetHitboxPosition(playerList[i], 0); //HITBOX_HEAD

        var stop = [entityHead[0] + e_V[0] * 8192, entityHead[1] + e_V[1] * 8192, entityHead[2] + e_V[2] * 8192];

        var traceResult = Trace.Line(playerList[i], entityHead, stop);

        if (traceResult[1] == 1.0)
            continue;

        stop = [entityHead[0] + e_V[0] * traceResult[1] * 8192, entityHead[1] + e_V[1] * traceResult[1] * 8192, entityHead[2] + e_V[2] * traceResult[1] * 8192];

        entityHead = Render.WorldToScreen(entityHead);
        stop = Render.WorldToScreen(stop);

        if (stop[2] != 1 || entityHead[2] != 1)
            continue;

        Render.Line(entityHead[0], entityHead[1], stop[0], stop[1], color);
    }
}
//Auto team join
var jointeamside = [
    ["jointeam 3 1"],
    ["jointeam 2 1"],
    ["jointeam 1 1"],
];

function jointeam() {
    var selected_team = UI.GetValue.apply(this, "Team");
    Cheat.ExecuteCommand(jointeamside[selected_team].toString());
}

function on_player_connect_full() {
    var localplayer = Entity.GetLocalPlayer();
    var userid = Event.GetInt("userid");
    if (Entity.GetEntityFromUserID(userid) == localplayer) jointeam();
}



//Dark menu background
var menuBackgroundColor = [0, 0, 0, 0];

function darkMenu() {
    if (!GetVal("dark_menu")) return;
    var maxAlpha = 150;
    var speed = 20;

    Render.FilledRect(0, 0, screen_size[0], screen_size[1], menuBackgroundColor);

    if (UI.IsMenuOpen()) {
        menuBackgroundColor[3] = clamp(menuBackgroundColor[3] + speed, 0, maxAlpha);
    } else {
        menuBackgroundColor[3] = clamp(menuBackgroundColor[3] - speed, 0, maxAlpha);
    }
}

//Enemy location spammer
var locationLastTick = 0;

function enemyLocation() {
    if (!GetVal("enemy_location")) return;
    if (locationLastTick == 0) {
        locationLastTick = Global.Tickcount();
        return;
    }

    var SpamDelay = 96;
    var CurrentTickcount = Global.Tickcount();
    if (CurrentTickcount - locationLastTick < SpamDelay) {
        return;
    } else if (CurrentTickcount - locationLastTick > SpamDelay) {
        locationLastTick = CurrentTickcount;
    }

    var enemies = Entity.GetEnemies();

    for (i = 0; i < enemies.length; i++) {
        if (Entity.IsAlive(enemies[i])) {
            var Name = Entity.GetName(enemies[i]);
            var Location = Entity.GetProp(enemies[i], "CBasePlayer", "m_szLastPlaceName");
            var Health = Entity.GetProp(enemies[i], "CBasePlayer", "m_iHealth");
            var Weapon = Entity.GetName(Entity.GetWeapon(enemies[i]));

            var SendInfo = ("[XD.js] Player " + Name + " with " + Health + " HP " + " is at " + Location + " with weapon " + Weapon);
            Cheat.ExecuteCommand("say_team " + SendInfo);
        }
    }
}

//Party mode
var old_party_mode = false;

function partyMode() {
    var party_mode = GetVal("party_mode");

    if (old_party_mode != party_mode) {
        old_party_mode = party_mode;
        Convar.SetString("sv_party_mode", party_mode ? "1" : "0");
    }
}

function partyMode2() {
    var party_mode = GetVal("party_mode");
    Convar.SetString("sv_party_mode", party_mode ? "1" : "0");
}

//Music kit changer
function musicKit() {
    if (Cheat.FrameStage() != 1 || !GetVal("music_kit"))
        return;

    Entity.SetProp(Entity.GetLocalPlayer(), "CCSPlayerResource", "m_nMusicID", GetValue("Music kit"));
}
//Exploit indicators
function get_icon(a) {
    var letter = ""
    switch (a) {
        case "desert eagle":
            letter = "a"
            break
        case "dual berettas":
            letter = "b"
            break
        case "five seven":
            letter = "c"
            break
        case "glock 18":
            letter = "d"
            break
        case "ak 47":
            letter = "e"
            break
        case "aug":
            letter = "f"
            break
        case "awp":
            letter = "g"
            break
        case "famas":
            letter = "h"
            break
        case "m249":
            letter = "i"
            break
        case "g3sg1":
            letter = "j"
            break
        case "galil ar":
            letter = "k"
            break
        case "m4a4":
            letter = "l"
            break
        case "m4a1 s":
            letter = "m"
            break
        case "mac 10":
            letter = "n"
            break
        case "p2000":
            letter = "o"
            break
        case "mp5 sd":
            letter = "p"
            break
        case "ump 45":
            letter = "q"
            break
        case "xm1014":
            letter = "r"
            break
        case "pp bizon":
            letter = "s"
            break
        case "mag 7":
            letter = "t"
            break
        case "negev":
            letter = "u"
            break
        case "sawed off":
            letter = "v"
            break
        case "tec 9":
            letter = "w"
            break
        case "zeus x27":
            letter = "x"
            break
        case "p250":
            letter = "y"
            break
        case "mp7":
            letter = "z"
            break
        case "mp9":
            letter = "A"
            break
        case "nova":
            letter = "B"
            break
        case "p90":
            letter = "C"
            break
        case "scar 20":
            letter = "D"
            break
        case "sg 553":
            letter = "E"
            break
        case "ssg 08":
            letter = "F"
            break
        case "knife":
            letter = "G"
            break
        case "flashbang":
            letter = "H"
            break
        case "high explosive grenade":
            letter = "I"
            break
        case "smoke grenade":
            letter = "J"
            break
        case "molotov":
            letter = "K"
            break
        case "decoy grenade":
            letter = "L"
            break
        case "incendiary grenade":
            letter = "M"
            break
        case "c4 explosive":
            letter = "N"
            break
        case "usp s":
            letter = "P"
            break
        case "cz75 auto":
            letter = "Q"
            break
        case "r8 revolver":
            letter = "R"
            break
        case "bayonet":
            letter = "V"
            break
        case "flip knife":
            letter = "W"
            break
        case "gut knife":
            letter = "X"
            break
        case "karambit":
            letter = "Y"
            break
        case "m9 bayonet":
            letter = "Z"
            break
        case "falchion knife":
            letter = "1"
            break
        case "bowie knife":
            letter = "2"
            break
        case "butterfly knife":
            letter = "3"
            break
        case "shadow daggers":
            letter = "4"
            break
        case "ursus knife":
            letter = "5"
            break
        case "navaja knife":
            letter = "6"
            break
        case "stiletto knife":
            letter = "7"
            break
        case "skeleton knife":
            letter = "8"
            break
        case "huntsman knife":
            letter = "0"
            break
        case "talon knife":
            letter = "8"
            break
        case "classic knife":
            letter = "25"
            break
        case "paracord knife":
            letter = "Z"
            break
        case "survival knife":
            letter = "Z"
            break
        case "nomad knife":
            letter = "Z"
            break
        default:
            letter = ""
            break
    }
    return letter
}

function in_bounds(vec, x, y, x2, y2) {
    return (vec[0] > x) && (vec[1] > y) && (vec[0] < x2) && (vec[1] < y2)
}
var fa = 0;
var sa = 0;

function main_exploits() {
    if (!GetVal("exploit_indicators")) return;
    if (!World.GetServerString()) return;

    const x = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Exploit indicator X position"),
        y = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Exploit indicator Y position");

    localplayer_index = Entity.GetLocalPlayer();
    localplayer_weapon = Entity.GetWeapon(localplayer_index);
    weapon_name = Entity.GetName(localplayer_weapon);
    g_Local_classname = Entity.GetClassName(localplayer_weapon);
    var nextattack = Entity.GetProp(localplayer_weapon, "CBaseCombatWeapon", "m_flNextPrimaryAttack");
    var CanShoot = false;
    if (nextattack <= Globals.Curtime()) {
        CanShoot = true;
    }

    var frames = 8 * Globals.Frametime();

    var font = Render.AddFont("Verdana", 7, 100);
    var fontbullet = Render.AddFont("bullet", 18, 100);
    if (CanShoot && Exploit.GetCharge() == 1 && UI.IsHotkeyActive("Rage", "Exploits", "Doubletap")) {
        var text = "XD.js exploit indicator | tickbase: 16";
        var color = [89, 119, 239, 255];
    } else if (CanShoot && Exploit.GetCharge() == 1 && UI.IsHotkeyActive("Rage", "Exploits", "Hide shots")) {
        var text = "XD.js exploit indicator | tickbase: 7";
        var color = [89, 119, 239, 255];
    } else {
        var text = "XD.js exploit indicator | tickbase: 0";
        var color = [89, 89, 89, 255];
    }
    var w = Render.TextSizeCustom(text, font)[0] + 8;

    Render.FilledRect(x, y, w, 2, color);
    Render.FilledRect(x, y + 2, w, 18, [17, 17, 17, 255]);
    Render.StringCustom(x + 5, y + 5, 0, text, [0, 0, 0, 180], font);
    Render.StringCustom(x + 4, y + 4, 0, text, [255, 255, 255, 255], font);

    Render.String(x + 4, y + 22, 0, get_icon(weapon_name), [255, 255, 255, 255], 5);
    if ((g_Local_classname == "CKnife" || g_Local_classname == "CWeaponSSG08" || g_Local_classname == "CWeaponAWP" || weapon_name == "r8 revolver" || g_Local_classname == "CHEGrenade" || g_Local_classname == "CMolotovGrenade" || g_Local_classname == "CIncendiaryGrenade" || g_Local_classname == "CFlashbang" || g_Local_classname == "CSmokeGrenade" || g_Local_classname == "CDecoyGrenade" || g_Local_classname == "CWeaponTaser" || g_Local_classname == "CC4")) {
        //return
    } else {
        if (CanShoot) {
            fa = Math.min(fa + frames, 1);
            Render.StringCustom(x + 10 + Render.TextSize(get_icon(weapon_name), 5)[0], y + 18, 0, "1", [255, 255, 255, fa * 255], fontbullet);
        } else {
            fa = 0;
        }
        if (CanShoot && Exploit.GetCharge() == 1 && UI.IsHotkeyActive("Rage", "Exploits", "Doubletap")) {
            sa = Math.min(sa + frames, 1);
            Render.StringCustom(x + 30 + Render.TextSize(get_icon(weapon_name), 5)[0], y + 18, 0, "2", [255, 255, 255, sa * 255], fontbullet);
        } else {
            sa = 0;
        }
    }


    if (Global.IsKeyPressed(1) && UI.IsMenuOpen()) {
        const mouse_pos = Global.GetCursorPosition();
        if (in_bounds(mouse_pos, x, y, x + w, y + 30)) {
            UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Exploit indicator X position", mouse_pos[0] - w / 2);
            UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Exploit indicator Y position", mouse_pos[1] - 20);
        }
    }
}

//Indicator
function in_bounds(vec, x, y, x2, y2) {
    return (vec[0] > x) && (vec[1] > y) && (vec[0] < x2) && (vec[1] < y2)
}

function draw_arc(x, y, radius, start_angle, percent, thickness, color) {
    var precision = (2 * Math.PI) / 30;
    var step = Math.PI / 180;
    var inner = radius - thickness;
    var end_angle = (start_angle + percent) * step;
    var start_angle = (start_angle * Math.PI) / 180;

    for (; radius > inner; --radius) {
        for (var angle = start_angle; angle < end_angle; angle += precision) {
            var cx = Math.round(x + radius * Math.cos(angle));
            var cy = Math.round(y + radius * Math.sin(angle));

            var cx2 = Math.round(x + radius * Math.cos(angle + precision));
            var cy2 = Math.round(y + radius * Math.sin(angle + precision));

            Render.Line(cx, cy, cx2, cy2, color);
        }
    }
}

function main_aa() {
    if (!GetVal("indicators_bar")) return;
    local = Entity.GetLocalPlayer();
    if (!World.GetServerString()) return;

    const x = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Indicators bar X position"),
        y = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Indicators bar Y position");

    var font = Render.AddFont("Verdana", 7, 100);
    var RealYaw = Local.GetRealYaw();
    var FakeYaw = Local.GetFakeYaw();
    var delta = Math.min(Math.abs(RealYaw - FakeYaw) / 2, 60).toFixed(1);
    var safety = Math.min(Math.round(1.7 * Math.abs(delta)), 100);
    if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")) {
        var side = "<";
    } else {
        var side = ">";
    }
    var text = "    FAKE (" + delta.toString() + "  ) | safety: " + safety.toString() + "% | real direction: " + side;
    var w = Render.TextSizeCustom(text, font)[0] + 8;

    Render.FilledRect(x - w, y, w, 2, [89, 89 + (delta / 2), 89 + (delta / 0.4), 255]);
    Render.FilledRect(x - w, y + 2, w, 18, [17, 17, 17, 255]);
    Render.StringCustom(x + 5 - w, y + 5, 0, text, [0, 0, 0, 180], font);
    Render.StringCustom(x + 4 - w, y + 4, 0, text, [255, 255, 255, 255], font);
    Render.Circle(x + 18 - w + Render.TextSizeCustom("FAKE (" + delta.toString(), font)[0], y + 8, 1, [255, 255, 255, 255]);
    draw_arc(x + 7 - w, y + 10, 5, 0, delta * 6, 2, [89, 119, 239, 255]);
    if (Global.IsKeyPressed(1) && UI.IsMenuOpen()) {
        const mouse_pos = Global.GetCursorPosition();
        if (in_bounds(mouse_pos, x - w, y, x + w, y + 30)) {
            UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Indicators bar X position", mouse_pos[0] + w / 2);
            UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Indicators bar Y position", mouse_pos[1] - 20);
        }
    }
}

//Info bar
Render.StringOutlined = function(x, y, align, text, color, font) {
    Render.StringCustom(x + 1, y, align, text, [0, 0, 0, 255], font)
    Render.StringCustom(x - 1, y, align, text, [0, 0, 0, 255], font)
    Render.StringCustom(x, y + 1, align, text, [0, 0, 0, 255], font)
    Render.StringCustom(x, y - 1, align, text, [0, 0, 0, 255], font)
    Render.StringCustom(x, y, align, text, color, font)
}
const get_velocity = function(index) {
    const velocity = Entity.GetProp(index, "CBasePlayer", "m_vecVelocity[0]");
    return Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1]);
}
const infobar = function() {
    if (!GetVal("info_bar")) return;
    const x = Global.GetScreenSize()[0] / 2,
        y = Global.GetScreenSize()[1] - 19;
    const font = Render.AddFont("Small Fonts", 5, 100);
    const font1 = Render.AddFont("Small Fonts", 8, 800);
    const fps = Math.floor(1 / Global.Frametime());
    const ping = Math.round(Local.Latency() * 1000 - 16);
    const velocity = get_velocity(Entity.GetLocalPlayer());
    const speed = Math.round(velocity);
    if (ping < 1) ping = 0;
    if (!speed) speed = 0;
    Render.GradientRect(x - 250, y, 250, 19, 1, [40, 40, 40, 0], [0, 0, 0, 90]);
    Render.GradientRect(x, y, 250, 19, 1, [0, 0, 0, 90], [40, 40, 40, 0]);
    Render.StringOutlined(x - 117, y + 2, 1, "" + ping, [149, 255, 0, 255], font1);
    Render.StringOutlined(x - 95, y + 4, 1, "PING", [255, 255, 255, 255], font);
    Render.StringOutlined(x - 13, y + 2, 1, "" + fps, [149, 255, 0, 255], font1);
    Render.StringOutlined(x + 10, y + 4, 1, "FPS", [255, 255, 255, 255], font);
    Render.StringOutlined(x + 75, y + 2, 1, "" + speed, [185, 185, 185, 255], font1);
    Render.StringOutlined(x + 105, y + 4, 1, "SPEED", [255, 255, 255, 255], font);
}

//Team skeet
function check_f() {
    if (!GetVal("teamskeet")) return;
    var val = !GetVal("Teamskeet indicators")
    var value = !GetVal("Indicators settings")

    if (val & (1 << 0) || val & (1 << 1)) {
        UI.SetEnabled("Script items", "Indicators settings", true)
    } else {
        UI.SetEnabled("Script items", "Indicators settings", false)
    }

    if (val & (1 << 2)) {
        UI.SetEnabled("Script items", "Anti-Aim indicators type", true)
        UI.SetEnabled("Script items", "Desync indicator color", true)
    } else {
        UI.SetEnabled("Script items", "Anti-Aim indicators type", false)
        UI.SetEnabled("Script items", "Desync indicator color", false)
    }
}

function is_dragging(x, y, w, h) {
    var mx = Input.GetCursorPosition()[0],
        my = Input.GetCursorPosition()[1]
    var click = Input.IsKeyPressed(0x01)

    var in_x = mx > x && mx < x + w
    var in_y = my > y && my < y + h

    return in_x && in_y && click && UI.IsMenuOpen()
}

function run_dragging() {
    var click = Input.IsKeyPressed(0x01)
    var mx = Input.GetCursorPosition()[0],
        my = Input.GetCursorPosition()[1]
    var x = UI.GetValue("Script items", "Teamskeet X position"),
        y = UI.GetValue("Script items", "Teamskeet Y position")
    var sx = Render.GetScreenSize()[0],
        sy = Render.GetScreenSize()[1]

    if (dragging) {
        var dx = x - ox,
            dy = y - oy
        UI.SetValue("Script items", "Teamskeet X position", Math.min(Math.max(mx + dx, 0), sx))
        UI.SetValue("Script items", "Teamskeet Y position", Math.min(Math.max(my + dy, 0), sy))
        ox = mx
        oy = my
    } else {
        ox = mx
        oy = my
    }
}

Render.OutlineStringCustom = function(x, y, alignid, text, color, font) {
    Render.StringCustom(x - 1, y - 1, alignid, text, [0, 0, 0, color[3]], font);
    Render.StringCustom(x - 1, y, alignid, text, [0, 0, 0, color[3]], font);

    Render.StringCustom(x - 1, y + 1, alignid, text, [0, 0, 0, color[3]], font);
    Render.StringCustom(x, y + 1, alignid, text, [0, 0, 0, color[3]], font);

    Render.StringCustom(x, y - 1, alignid, text, [0, 0, 0, color[3]], font);
    Render.StringCustom(x + 1, y - 1, alignid, text, [0, 0, 0, color[3]], font);

    Render.StringCustom(x + 1, y, alignid, text, [0, 0, 0, color[3]], font);
    Render.StringCustom(x + 1, y + 1, alignid, text, [0, 0, 0, color[3]], font);

    Render.StringCustom(x, y, alignid, text, color, font);
}

function GetVelocity(index) {
    var velocity = Entity.GetProp(index, "CBasePlayer", "m_vecVelocity[0]");
    return Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1]);
}

Math.rad = function(degrees) {
    return degrees * Math.PI / 180;
}

function rotate_point(x, y, rot, size) {
    return [Math.cos(Math.rad(rot)) * size + x, Math.sin(Math.rad(rot)) * size + y]
}

function normalize_yaw(yaw) {
    while (yaw > 180) {
        yaw = yaw - 360
    }
    while (yaw < -180) {
        yaw = yaw + 360
    }
    return yaw
}

function calc_angle(local_x, local_y, enemy_x, enemy_y) {
    var ydelta = local_y - enemy_y
    var xdelta = local_x - enemy_x

    var relativeyaw = Math.atan(ydelta / xdelta)
    relativeyaw = normalize_yaw(relativeyaw * 180 / Math.PI)

    if (xdelta >= 0) {
        relativeyaw = normalize_yaw(relativeyaw + 180)
    }

    return relativeyaw
}

function renderer_arrow(x, y, color, rotation, size) {
    var x0 = rotate_point(x, y, rotation, 45)[0]
    var y0 = rotate_point(x, y, rotation, 45)[1]

    var x1 = rotate_point(x, y, rotation + (size / 3.5), 45 - (size / 4))[0]
    var y1 = rotate_point(x, y, rotation + (size / 3.5), 45 - (size / 4))[1]

    var x2 = rotate_point(x, y, rotation - (size / 3.5), 45 - (size / 4))[0]
    var y2 = rotate_point(x, y, rotation - (size / 3.5), 45 - (size / 4))[1]

    Render.Polygon([
        [x0, y0],
        [x1, y1],
        [x2, y2]
    ], color)
}

function renderer_circle_outline(x, y, color, radius, start_angle, percent, thickness) {
    var precision = (2 * Math.PI) / 30;
    var step = Math.PI / 180;
    var inner = radius - thickness;
    var end_angle = (start_angle + percent) * step;
    var start_angle = (start_angle * Math.PI) / 180;

    for (; radius > inner; --radius) {
        for (var angle = start_angle; angle < end_angle; angle += precision) {
            var cx = Math.round(x + radius * Math.cos(angle));
            var cy = Math.round(y + radius * Math.sin(angle));

            var cx2 = Math.round(x + radius * Math.cos(angle + precision));
            var cy2 = Math.round(y + radius * Math.sin(angle + precision));

            Render.Line(cx, cy, cx2, cy2, color);
        }
    }
}

function get_sliders(plocal) {
    var arr = []

    var sim_time = Entity.GetProp(plocal, "CBaseEntity", "m_flSimulationTime");

    var RealYaw = Local.GetRealYaw();
    var FakeYaw = Local.GetFakeYaw();
    var delta = Math.min(Math.abs(RealYaw - FakeYaw) / 2, 60).toFixed(0);

    var speed = GetVelocity(plocal)

    var val = UI.GetValue("Script items", "Indicators settings")

    if (val & (1 << 0)) {
        arr[arr.length + 0] = {
            v: delta,
            p: delta / 60,
            t: "FAKE YAW",
        }
    }

    if (val & (1 << 1)) {
        arr[arr.length + 0] = {
            v: Math.round(speed).toString(),
            p: speed / 250,
            t: "VELOCITY"
        }
    }
    return arr
}

function get_keys() {
    var arr = []

    if (UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap")) {
        arr[arr.length + 0] = {
            t: "DOUBLE TAP",
            v: "TOGGLED"
        }
    }
    if (UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Hide shots")) {
        arr[arr.length + 0] = {
            t: "HIDE SHOTS",
            v: "TOGGLED"
        }
    }
    if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")) {
        arr[arr.length + 0] = {
            t: "SLOW WALK",
            v: "HOLD"
        }
    }
    if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck")) {
        arr[arr.length + 0] = {
            t: "FAKE DUCK",
            v: "HOLD"
        }
    }
    if (UI.IsHotkeyActive("Misc", "GENERAL", "Movement", "Auto peek")) {
        arr[arr.length + 0] = {
            t: "AUTO PEEK",
            v: "HOLD"
        }
    }
    if (UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force safe point")) {
        arr[arr.length + 0] = {
            t: "FORCE SAFE POINT",
            v: "TOGGLED"
        }
    }
    if (UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force body aim")) {
        arr[arr.length + 0] = {
            t: "FORCE BODY AIM",
            v: "TOGGLED"
        }
    }
    return arr
}

function drawteamskeet() {
    if (!GetVal("teamskeet")) return;
    var sx = Render.GetScreenSize()[0]
    var sy = Render.GetScreenSize()[1]

    var plocal = Entity.GetLocalPlayer()
    var click = Input.IsKeyPressed(0x01)

    var font = Render.AddFont("Small fonts", 6, 400)
    var val = UI.GetValue("Script items", "Indicators settings")

    var sliders = []
    var keys = []
    var x = UI.GetValue("Script items", "Teamskeet X position")
    var y = UI.GetValue("Script items", "Teamskeet Y position")

    var scale = 1
    if (val & (1 << 4)) {
        scale = 1.5
    }

    var w = 200 * scale
    var h = 20 * scale
    var i_dist = scale == 1 && 16 || 18

    var text_size = function(text) {
        return Render.TextSizeCustom(text, font)
    }

    var color = UI.GetColor("Script items", "Real indicator color")
    var color1 = UI.GetColor("Script items", "Desync indicator color")

    var value1 = UI.GetValue("Script items", "Teamskeet indicators")
    if (value1 & (1 << 0)) {
        sliders = get_sliders(plocal)

        Render.FilledRect(x, y, w, h, [20, 20, 20, 255])
        Render.OutlineStringCustom(x + (w / 2) - (text_size("INDICATORS")[0] / 2), y + (i_dist / 2) - (text_size("INDICATORS")[1] / 2) + 1, 0, "INDICATORS", [255, 255, 255, 255], font)

        if (val & (1 << 2)) {
            Render.GradientRect(x, y, w / 2, scale * 2, 1, [0, 200, 255, 255], [255, 0, 255, 255])
            Render.GradientRect(x + w / 2, y, w / 2, scale * 2, 1, [255, 0, 255, 255], [175, 255, 0, 255])
        } else {
            Render.FilledRect(x, y, w, scale * 2, color)
            Render.FilledRect(x, y, w, scale * 2, color)
        }

        var m_h = (sliders.length * i_dist)

        Render.FilledRect(x, y + i_dist, w, m_h, [25, 25, 25, 255])
        Render.FilledRect(x, y + i_dist + m_h, w, 5, [20, 20, 20, 255])

        for (var i = 0; i < sliders.length; i++) {
            Render.OutlineStringCustom(x + 5, y + ((i + 1) * i_dist) + 3, 0, sliders[i].t, [255, 255, 255, 255], font)

            var stx = x + Math.floor(w / 4.5) + 8
            var sty = y + ((i + 1) * i_dist) + 4
            var m_w = Math.floor(w / 1.33) + (scale == 1 && 0 || 1) - 8
            var height = scale == 1 && h / 2.25 || h / 2.75

            if (val & (1 << 3)) {
                stx = x + Math.floor(w / 3.25) + 5
                sty = y + ((i + 1) * i_dist) + 4
                m_w = Math.floor(w / 1.5) - 5
                Render.OutlineStringCustom(x + Math.floor(w / 4.5) + text_size(sliders[i].t)[0] - 35, y + ((i + 1) * i_dist) + 3, 0, sliders[i].v, [255, 255, 255, 255], font)
            }

            var width = Math.max(Math.min(m_w, m_w * sliders[i].p), 5)

            if (val & (1 << 2)) {
                Render.GradientRect(stx, sty, Math.floor(m_w / 2), height, 1, [0, 200, 255, 255], [255, 0, 255, 255])
                Render.GradientRect(stx + Math.floor(m_w / 2), sty, Math.floor(m_w / 2), height, 1, [255, 0, 255, 255], [175, 255, 0, 255])
                Render.FilledRect(stx + 1, sty + 1, m_w - 3, height - 2, [25, 25, 25, 150])

                var amt = m_w - width
                if (amt > 0) {
                    Render.FilledRect(x + w - 5 - amt, sty, amt, height, [25, 25, 25, 255])
                }
            } else {
                Render.FilledRect(stx, sty, width, height, color)
                Render.FilledRect(stx + 1, sty + 1, width - 3, height - 2, [25, 25, 25, 150])
            }
        }

        if (is_dragging(x, y, w, h)) {
            dragging = true
        } else if (!click) {
            dragging = false
        }
    }

    if (value1 & (1 << 1)) {
        UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Show keybind states", false);
        var x2 = x,
            y2 = y + h + (sliders.length * i_dist) + 5

        Render.FilledRect(x2, y2, w, h, [20, 20, 20, 255])
        Render.OutlineStringCustom(x2 + (w / 2) - (text_size("KEYBINDS")[0] / 2), y2 + (i_dist / 2) - (text_size("KEYBINDS")[1] / 2) + 1, 0, "KEYBINDS", [255, 255, 255, 255], font)

        if (val & (1 << 2)) {
            Render.GradientRect(x2, y2, w / 2, scale * 2, 1, [0, 200, 255, 255], [255, 0, 255, 255])
            Render.GradientRect(x2 + w / 2, y2, w / 2, scale * 2, 1, [255, 0, 255, 255], [175, 255, 0, 255])
        } else {
            Render.FilledRect(x2, y2, w, scale * 2, color)
            Render.FilledRect(x2, y2, w, scale * 2, color)
        }

        keys = get_keys()

        Render.FilledRect(x2, y2 + i_dist, w, keys.length * i_dist, [25, 25, 25, 255])

        for (var i = 0; i < keys.length; i++) {
            var tw = Render.TextSizeCustom(keys[i].v, font)[0],
                th = Render.TextSizeCustom(keys[i].v, font)[1]
            var cur_pos = y2 + ((i + 1) * i_dist) + 3

            if (val & (1 << 2)) {
                Render.OutlineStringCustom(x2 + 5, cur_pos, 0, keys[i].t, [100, 200, 255, 255], font)
                Render.OutlineStringCustom(x2 + w - 10 - tw, cur_pos, 0, keys[i].v, [175, 255, 0, 255], font)
            } else {
                Render.OutlineStringCustom(x2 + 5, cur_pos, 0, keys[i].t, color, font)
                Render.OutlineStringCustom(x2 + w - 10 - tw, cur_pos, 0, keys[i].v, [255, 255, 255, 255], font)
            }
        }
        if (is_dragging(x2, y2, w, (keys.length * i_dist) + h)) {
            dragging = true
        } else if (!click) {
            dragging = false
        }
    }

    if (value1 & (1 << 2)) {
        var cx = sx / 2
        var cy = sy / 2

        var cam = Local.GetViewAngles()

        var h = Entity.GetHitboxPosition(plocal, 0)
        var p = Entity.GetHitboxPosition(plocal, 2)

        var yaw = normalize_yaw(calc_angle(p[0], p[1], h[0], h[1]) - cam[1] + 120)
        var bodyyaw = Local.GetRealYaw() - Local.GetFakeYaw()
        var fakeangle = normalize_yaw(yaw + bodyyaw)
        var offset = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset")

        var values = UI.GetValue("Script items", "Anti-Aim indicators type")

        if (values == 1) {
            renderer_circle_outline(cx, cy + 1, [100, 100, 100, 100], 30, 0, 360, 4)
            renderer_circle_outline(cx, cy + 1, color, 30, (fakeangle * -1) - 15, 36, 4)
            renderer_circle_outline(cx, cy + 1, color1, 30, (yaw * -1) - 15, 36, 4)
        } else if (values == 0) {
            renderer_arrow(cx, cy, color, (yaw - 25) * -1, 45)
            renderer_arrow(cx, cy, color1, (fakeangle - 25) * -1, 25)
        } else {
            Render.Polygon([
                    [cx + 55, cy + 1],
                    [cx + 42, cy + 10],
                    [cx + 42, cy - 8]
                ],
                [
                    offset == 90 && color[0] || 35,
                    offset == 90 && color[1] || 35,
                    offset == 90 && color[2] || 35,
                    offset == 90 && color[3] || 150
                ]
            )
            Render.Polygon([
                    [cx - 55, cy + 2],
                    [cx - 42, cy - 7],
                    [cx - 42, cy + 11]
                ],
                [
                    offset == -90 && color[0] || 35,
                    offset == -90 && color[1] || 35,
                    offset == -90 && color[2] || 35,
                    offset == -90 && color[3] || 150
                ]
            )
            Render.FilledRect(cx + 38, cy - 7, 2, 18,
                [
                    bodyyaw < 0 && color1[0] || 35,
                    bodyyaw < 0 && color1[1] || 35,
                    bodyyaw < 0 && color1[2] || 35,
                    bodyyaw < 0 && color1[3] || 150
                ]
            )
            Render.FilledRect(cx - 40, cy - 7, 2, 18,
                [
                    bodyyaw > 0 && color1[0] || 35,
                    bodyyaw > 0 && color1[1] || 35,
                    bodyyaw > 0 && color1[2] || 35,
                    bodyyaw > 0 && color1[3] || 150
                ]
            )
        }
    }

    run_dragging(dragging)
}
//Keybinds
const keybinds = function() {
    if (!GetVal("keybinds")) return;
    UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Show keybind states", false);
    var keybinds = [];
    if (UI.IsMenuOpen()) {
        keybinds.push("Menu is Open")
    };
    if (UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Auto direction")) {
        keybinds.push("Freestand")
    };
    if (UI.IsHotkeyActive("Rage", "Exploits", "Double tap")) {
        keybinds.push("Double tap")
    };
    if (UI.IsHotkeyActive("Rage", "Exploits", "Hide shots")) {
        keybinds.push("Hide shots")
    };
    if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck")) {
        keybinds.push("Duck peek assist")
    };
    if (UI.IsHotkeyActive("Rage", "General", "General", "Force body aim")) {
        keybinds.push("Body aim")
    };
    if (UI.IsHotkeyActive("Rage", "General", "General", "Force safe point")) {
        keybinds.push("Safe point")
    };
    if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")) {
        keybinds.push("Slow Walk")
    };
    if (UI.IsHotkeyActive("Anti-Aim", "Fake angeles", "Inverter")) {
        keybinds.push("Inverter")
    };
    if (UI.IsHotkeyActive("Visual", "World", "View", "Thirdperson")) {
        keybinds.push("Thirdperson")
    };
    if (UI.IsHotkeyActive("Visual", "Self", "Freecam", "Freecam")) {
        keybinds.push("Freecam")
    };
    if (UI.IsHotkeyActive("Misc", "General", "Movement", "Edge jump")) {
        keybinds.push("Jump at edge")
    };
    if (UI.IsHotkeyActive("Misc", "General", "Movement", "Auto peek")) {
        keybinds.push("Auto Peek")
    };
    if (UI.IsHotkeyActive("Script items", "Legit AA")) {
        keybinds.push("Legit AA")
    };
    if (UI.IsHotkeyActive("Script items", "Teleport key")) {
        keybinds.push("Teleport on peek")
    };


    const x = UI.GetValue("Script items", "binds x"),
        y = UI.GetValue("Script items", "binds y");
    const font = Render.AddFont("Calibri", 10, 100);
    const color = UI.GetColor("Script items", "color");

    Render.FilledRect(x, y, 150, 18, [0, 0, 0, color[3]]);
    Render.StringCustom(x + 75, y + 1, 1, "binds", [255, 255, 255, 255], font);
    for (i = 0; i < keybinds.length; i++) {
        Render.StringCustom(x + 1, y + 18 + 15 * i, 0, keybinds[i], [255, 255, 255, 255], font);
        Render.StringCustom(x + 128, y + 18 + 15 * i, 0, "[on]", [255, 255, 255, 255], font);
    }

    Render.GradientRect(x, y - 2, 75, 2, 2, [55, 177, 218 /*55, 177, 218*/ , 255], [203, 70, 205 /*203, 70, 205*/ , 255]);
    Render.GradientRect(x + 75, y - 2, 75, 2, 2, [203, 70, 205 /*203, 70, 205*/ , 255], [204, 227, 53 /*204, 227, 53*/ , 255]);


    if (UI.IsMenuOpen() && Input.IsKeyPressed(0x1)) {
        const mouse_pos = Global.GetCursorPosition();
        if (in_bounds(mouse_pos, x, y, x + 150, y + 40)) {
            if (!stored) {
                x_offs = mouse_pos[0] - x;
                y_offs = mouse_pos[1] - y;
                stored = true;
            }
            UI.SetValue("Script items", "binds x", mouse_pos[0] - x_offs);
            UI.SetValue("Script items", "binds y", mouse_pos[1] - y_offs);
        }
    } else if (stored) stored = false;
}

//Spectator list
const get_spectators = function() {
    var spectators = [];
    const players = Entity.GetPlayers();
    for (i = 0; i < players.length; i++) {
        const cur = players[i];
        if (Entity.GetProp(cur, "CBasePlayer", "m_hObserverTarget") != "m_hObserverTarget") {
            const obs = Entity.GetProp(cur, "CBasePlayer", "m_hObserverTarget")
            if (obs === Entity.GetLocalPlayer()) {
                const name = Entity.GetName(cur);
                spectators.push(name);
            }
        }
    }
    return spectators;
}
const specList = function() {
    if (!GetVal("specList")) return
    UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Spectator list", false);
    const x = UI.GetValue("Script items", "spectators x"),
        y = UI.GetValue("Script items", "spectators y");
    const font = Render.AddFont("Calibri", 10, 100);
    const color = UI.GetColor("Script items", "color");
    const names = get_spectators();

    Render.FilledRect(x, y, 150, 18, [0, 0, 0, color[3]]);
    Render.StringCustom(x + 75, y + 1, 1, "spectators", [255, 255, 255, 255], font);
    //Render.FilledRect(x, y - 2, 150, 2, [color[0], color[1], color[2], 255]);
    Render.GradientRect(x, y - 2, 75, 2, 2, [55, 177, 218 /*55, 177, 218*/ , 255], [203, 70, 205 /*203, 70, 205*/ , 255]);
    Render.GradientRect(x + 75, y - 2, 75, 2, 2, [203, 70, 205 /*203, 70, 205*/ , 255], [204, 227, 53 /*204, 227, 53*/ , 255]);

    for (i = 0; i < names.length; i++) {
        Render.StringCustom(x + 1, y + 18 + 15 * i, 0, names[i], [255, 255, 255, 255], font);
    }

    if (UI.IsMenuOpen() && Input.IsKeyPressed(0x1)) {
        const mouse_pos = Global.GetCursorPosition();
        if (in_bounds(mouse_pos, x, y, x + 150, y + 40)) {
            if (!stored) {
                x_offs = mouse_pos[0] - x;
                y_offs = mouse_pos[1] - y;
                stored = true;
            }
            UI.SetValue("Script items", "spectators x", mouse_pos[0] - x_offs);
            UI.SetValue("Script items", "spectators y", mouse_pos[1] - y_offs);
        }
    } else if (stored) stored = false;
}

//Killsay (the old code was kinda rudimentary so i improved it a bit)
function killsay() {
    if (!GetVal("Killsay")) return;
    local = Entity.GetLocalPlayer();
    var normal_killsays = ["LOL imagine getting tapped by otc", "You got killed by a free cheat, can't relate", "You just got pwned by Onetap crack, the #1 CS:GO free HvH cheat",
        "If I were you, I'd use Onetap crack",
        "Think you could do better than OTC3? Well think again dumbass", "XD.js - good free, open-source js for otc3", "Get good get OTC with XD.js ", "Oof, thats a 1 on my otc screen bro"
    ];

    var hs_killsays = ["LOL imagine getting tapped by otc", "You got killed by a free cheat, can't relate", "You just got pwned by Onetap crack, the #1 CS:GO free HvH cheat",
        "If I were you, I'd use Onetap crack",
        "Think you could do better than OTC3? Well think again dumbass", "XD.js - good free, open-source js for otc3", "Get good get OTC with XD.js ", "Oof, thats a 1 on my otc screen bro"
    ];
    var victim = Entity.GetEntityFromUserID(Event.GetInt("userid"));
    var attacker = Entity.GetEntityFromUserID(Event.GetInt("attacker"));
    var headshot = Event.GetInt("headshot") == 1;

    if (Entity.IsLocalPlayer(attacker) && attacker != victim) {
        var normal_say = normal_killsays[Math.floor(Math.random() * normal_killsays.length)];
        var hs_say = hs_killsays[Math.floor(Math.random() * hs_killsays.length)];

        if (headshot && Math.floor(Math.random() * 3) <= 1) //gamer style randomizer
        {
            Cheat.ExecuteCommand("say " + hs_say);
            return;
        }
        Cheat.ExecuteCommand("say " + normal_say);
    }
}
//Legit AA on key and on knife
var block_set10 = false;
var block_set16 = false;
var legitAAactive = false;

function legitAA() {
    var weapon = getWeaponName();
    var local_isKnife = weapon.indexOf("knife") !== -1;
    var noAAonKnife = local_isKnife && GetVal("antiaim_fix");
    if ((GetVal("legit_aa") && UI.IsHotkeyActive("Script items", "Legit AA")) || noAAonKnife) {
        legitAAactive = true;
        block_set16 = false;
        block_set10 = false;
        UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions", 0);
        UI.SetValue("Anti-Aim", "Extra", "Pitch", 0);
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 180);
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 0);
    } else {
        legitAAactive = false;
        if (!lowdelta_active && !mmFDActive) {
            if (!block_set10) {
                UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yaw_bak);
                UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", jitter_bak);
                block_set10 = true;
            }
            yaw_bak = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset");
            jitter_bak = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset");
        }
        if (!block_set16) {
            UI.SetValue("Anti-Aim", "Extra", "Pitch", pitch_bak);
            UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions", restrictions_bak);
            block_set16 = true;
        }
        pitch_bak = UI.GetValue("Anti-Aim", "Extra", "Pitch");
        restrictions_bak = UI.GetValue("Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions");
    }
}

function freestanding() {
    if (!GetVal("freestanding")) return;
    if (UI.IsHotkeyActive("Misc", "General", "Auto peek")) return;
    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Auto direction", UI.IsHotkeyActive("Script items", "Freestanding"));
}

var otc3_cord_clantag = [
    " ",
    "0",
    "o",
    "o7",
    "ot",
    "ot<",
    "otc",
    "otc3",
    "otc3 0",
    "otc3 o",
    "otc3 o/V",
    "otc3 on",
    "otc3 on 1",
    "otc3 on t",
    "otc3 on t0",
    "otc3 on to",
    "otc3 on tol>",
    "otc3 on top",
    "|",
    "><",
    "X",
    "X|",
    "X[)",
    "XD",
    "XD|",
    "XD.",
    "XD.|",
    "XD.</",
    "XD.j",
    "XD.j|",
    "XD.j$",
    "XD.js",
    "XD.js|",
    "XD.js",
    "XD.js|",
    " ",
    " ",
    " ",
    " ",
];
var otc3_cord_clantag2 = [
    ">_<",
    "-_-",
    "~_~",
    "^.^",
    "^o^",
    "^ω^",
    "UwU",
    ">‿◠",
    "^◡^ 3",
    "OwO <3",
    "^m^ <3",
    "^○^ <3",
    "/ω＼ <3",
    "・ω・ <3",
    "^///^ <3",
    "≧∇≦ <3",
    "⌒ー⌒ <3",
    "~_^ <3",
    "〃 ω 〃 <3",
    "ToT <",
    ">﹏<",
    "T⌓T",
    "つ﹏⊂",
    "〒_〒",
    "ㄒoㄒ",
    "ＴДＴ",
];
var last_clantag_time = 0;

function clantag() {
    if (!GetVal("clantag")) return;
    var speed = 4;
    var time = parseInt((Globals.Curtime() * speed));
    if (time == last_clantag_time) return;
    last_clantag_time = time;
    if (GetValue("Clantag")) {
        Local.SetClanTag(otc3_cord_clantag2[(time) % otc3_cord_clantag2.length]);
        return;
    }
    Local.SetClanTag(otc3_cord_clantag[(time) % otc3_cord_clantag.length]);
}

var dormant_aim_shot = true;

function dormantAim() {
    if (!GetVal("dormant_aim")) return;
    if (!UI.IsHotkeyActive("Script items", "Dormant Aimbot")) return;
    if (!can_shoot(Entity.GetLocalPlayer())) return;
    var e = Entity.GetEnemies();
    var d = e.filter(function(e) {
        return Entity.IsDormant(e) && Entity.IsAlive(e) && Trace.Bullet(Entity.GetLocalPlayer(), e, Entity.GetEyePosition(Entity.GetLocalPlayer()), VectorAdd(Entity.GetRenderOrigin(e), [0, 0, 45]))[1] > 1;
    });
    var c = d.sort(function(a, b) {
        return Trace.Bullet(Entity.GetLocalPlayer(), a, Entity.GetEyePosition(Entity.GetLocalPlayer()), VectorAdd(Entity.GetRenderOrigin(a), [0, 0, 45]))[1] - Trace.Bullet(Entity.GetLocalPlayer(), b, Entity.GetEyePosition(Entity.GetLocalPlayer()), VectorAdd(Entity.GetRenderOrigin(b), [0, 0, 45]))[1];
    })[0];
    // if no enemies return
    if (!c) {
        return;
    }
    var weapon_index = Entity.GetWeapon(Entity.GetLocalPlayer());
    var m_flNextPrimaryAttack = Entity.GetProp(weapon_index, "DT_BaseCombatWeapon", "m_flNextPrimaryAttack"); //gets time until next attack
    var viewangle = VectorAngles(VectorSubtract(VectorAdd(Entity.GetRenderOrigin(c), [0, 0, 45]), Entity.GetEyePosition(Entity.GetLocalPlayer())));
    if (Globals.Curtime() - m_flNextPrimaryAttack > 0.1) {
        //UserCMD.SetViewAngles(viewangle, true)
        UserCMD.SetAngles(viewangle);
        //UserCMD.SetButtons((1 << 0) | UserCMD.GetButtons())
        var getbuttons = Entity.GetProp(Entity.GetLocalPlayer(), 'CBasePlayer', 'm_fFlags');
        Cheat.ExecuteCommand("+attack");
        dormant_aim_shot = true;



        dmg = Trace.Bullet(Entity.GetLocalPlayer(), c, Entity.GetEyePosition(Entity.GetLocalPlayer()), VectorAdd(Entity.GetRenderOrigin(c), [0, 0, 45]))[1];
        // log shot
        Cheat.Print("Dormant aimed at " + Entity.GetName(c) + " for " + dmg + " dmg");
    }
}

function shoot() {
    if (dormant_aim_shot) { // don't care who shot
        Cheat.ExecuteCommand("-attack");
        dormant_aim_shot = false;
    }
}

function antiBuyBot() {
    if (!GetVal("anti_buybot")) return;
    var entity = Entity.GetEntityFromUserID(Event.GetInt("userid"));
    if (entity != Entity.GetLocalPlayer()) return;
    var gamerules = Entity.GetGameRulesProxy();
    UI.SetValue("Misc", "General", "Buybot", "Enable", !Entity.GetProp(gamerules, "CCSGameRulesProxy", "m_bIsValveDS"));
}

var auto_dir_bak = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Auto direction");
var block_set19 = false;
var autopeek_active = false;

function autoPeek() {
    if (!GetVal("auto_peek")) return;
    var gamerules = Entity.GetGameRulesProxy();
    if (UI.IsHotkeyActive("Misc", "General", "Auto peek")) {
        autopeek_active = true;
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Auto direction", true);
        //if(!UI.IsHotkeyActive('Rage', 'GENERAL', 'Force body aim')) UI.ToggleHotkey('Rage', 'GENERAL', 'Force body aim');
        !Entity.GetProp(gamerules, "CCSGameRulesProxy", "m_bIsValveDS") && !UI.IsHotkeyActive('Rage', 'GENERAL', 'Doubletap') && UI.ToggleHotkey('Rage', 'GENERAL', 'Doubletap');
        block_set19 = false;
    } else {
        autopeek_active = false;
        if (!block_set19) {
            UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Auto direction", auto_dir_bak);
            //if(UI.IsHotkeyActive('Rage', 'GENERAL', 'Force body aim') != baim_state_bak) UI.ToggleHotkey('Rage', 'GENERAL', 'Force body aim');
            block_set19 = true;
        }
        auto_dir_bak = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Auto direction");
        //baim_state_bak = UI.IsHotkeyActive('Rage', 'GENERAL', 'Force body aim');
    }

}

var targetSafeHead = -1;
var safeHeadEntities = [];

function playerList() {
    if (!World.GetServerString()) return;
    var target = Ragebot.GetTarget();
    if (target) {
        var player_id = Entity.GetName(target) + target;
        if (player_id in player_list && player_list[player_id]) {
            targetSafeHead = target;
            Ragebot.ForceHitboxSafety(0);
        }
    }
    var enemies = Entity.GetEnemies();
    safeHeadEntities = [];
    for (enemy in enemies) {
        enemy = enemies[enemy];
        var player_id = Entity.GetName(enemy) + enemy;
        if (player_id in player_list && player_list[player_id]) {
            safeHeadEntities.push(enemy);
        }
    }
}

function drawPlayerSafeHead() {
    if (!World.GetServerString()) return;
    var font = Render.AddFont("Verdana", 8, 400);
    for (enemy in safeHeadEntities) {
        enemy = safeHeadEntities[enemy];
        if (!Entity.IsAlive(enemy)) return;
        var pos = Entity.GetRenderBox(enemy);
        var a = pos[3] - pos[1];
        a /= 2;
        a += pos[1];
        var color = (enemy == targetSafeHead) ? [0, 255, 0, 255] : [255, 255, 255, 255];
        Render.StringCustom(a, pos[2] - 30, 1, "SAFE", color, font);
        Render.StringCustom(a + 1, pos[2] - 30 + 1, 1, "SAFE", [0, 0, 0, 125], font);
    }
}

var safety_hitboxes = {
    "head": [false, false, false],
    "body": [false, false, false],
    "legs": [false, false, false],
    "feet": [false, false, false]
}
var hitbox_index = {
    "head": [0],
    "body": [3],
    "legs": [9, 10],
    "feet": [11, 12]
}
var hitbox_cheat_index = {
    "head": [0],
    "body": [1, 2, 3, 4, 5],
    "legs": [6],
    "feet": [7]
}
var block_set21 = false;
var hitboxes_bak = [0, 0, 0, 0, 0, 0];
for (category in weapon_categories) {
    hitboxes_bak[category] = UI.GetValue("Rage", weapon_categories[category], "Targeting", "Hitboxes");
}

function safetySystem() {
    var enemies = Entity.GetEnemies();
    var target = Ragebot.GetTarget();
    for (enemy in enemies) {
        enemy = enemies[enemy];
        if (IsLethal(enemy) && Entity.IsAlive(enemy) && !Entity.IsDormant(enemy) && enemy == target) {
            block_set21 = false;

            var hitboxes = 0;
            for (hitbox in safety_hitboxes) {
                if (safety_hitboxes[hitbox][2] == true) {
                    var hitbox_a = hitbox_cheat_index[hitbox];
                    for (hitbox_i in hitbox_a) {
                        hitboxes += (1 << hitbox_a[hitbox_i]);
                    }
                }
            }
            //Lethal safety
            for (category in weapon_categories) {
                UI.SetValue("Rage", weapon_categories[category], "Targeting", "Hitboxes", hitboxes);
            }

            for (hitbox in safety_hitboxes) {
                if (safety_hitboxes[hitbox][1] == true) {
                    var hitbox_a = hitbox_index[hitbox];
                    for (hitbox_i in hitbox_a) {
                        Ragebot.ForceHitboxSafety(hitbox_a[hitbox_i]);
                    }
                }
            }

        } else {
            //Safety
            forceHitboxSafePoints();
            if (!block_set21) {
                for (category in weapon_categories) {
                    UI.SetValue("Rage", weapon_categories[category], "Targeting", "Hitboxes", hitboxes_bak[category]);
                }
                block_set21 = true;
            }
            if (UI.IsMenuOpen()) {
                for (category in weapon_categories) {
                    hitboxes_bak[category] = UI.GetValue("Rage", weapon_categories[category], "Targeting", "Hitboxes");
                }
            }
        }
    }
}

function forceHitboxSafePoints() {
    for (hitbox in safety_hitboxes) {
        if (safety_hitboxes[hitbox][0] == true) {
            var hitbox_a = hitbox_index[hitbox];
            if (typeof hitbox_a == "object") {
                for (hitbox_i in hitbox_a) {
                    Ragebot.ForceHitboxSafety(hitbox_a[hitbox_i]);
                }
            } else {
                Ragebot.ForceHitboxSafety(hitbox_a);
            }
        }
    }
}

log("Initialized all main functions");




//Script items
var script_items = {
    "lowdelta": [{
            "name": "Lowdelta",
            "type": "dropdown",
            "elements": ["Slowwalk", "Always"]
        },
        {
            "name": "Lowdelta on FD",
            "type": "checkbox"
        }
    ],
    "dormant_aim": [{
        "name": "Dormant Aimbot",
        "type": "hotkey"
    }],
    "mindamage": [{
        "name": "Min damage override",
        "type": "hotkey"
    }],
    "safety_misses": [{
        "name": "Safety after x misses",
        "type": "slider",
        "min": 1,
        "max": 6
    }],
    "mm_fd": [{
            "name": "Matchmaking FD",
            "type": "hotkey"
        },
        {
            "name": "Matchmaking FD presets",
            "type": "dropdown",
            "elements": ["Rage", "Lower Rage", "Semifull", "Full"]
        },
        {
            "name": "Matchmaking FD lock camera",
            "type": "checkbox"
        },
        {
            "name": "Matchmaking FD opposite LBY",
            "type": "checkbox"
        },
        {
            "name": "Matchmaking FD invert on shot",
            "type": "checkbox"
        }
    ],
    "doubletap_boost": [{
        "name": "Doubletap boost",
        "type": "dropdown",
        "elements": ["Faster recharge", "Fastest recharge", "Adaptive", "Adaptive agressive"]
    }],
    "force_backshoot": [{
        "name": "Wait for on-shot",
        "type": "hotkey"
    }],
    "ping_spike": [{
        "name": "Ping spike",
        "type": "hotkey"
    }],
    "freestanding": [{
        "name": "Freestanding",
        "type": "hotkey"
    }],
    "legit_aa": [{
        "name": "Legit AA",
        "type": "hotkey"
    }],
    "bullet_tracer": [{
            "name": "Bullet tracer",
            "type": "color"
        },
        {
            "name": "Bullet tracer thickness",
            "type": "slider",
            "min": 2,
            "max": 6
        }
    ],
    "damage_marker": [{
            "name": "Damage marker",
            "type": "color"
        },
        {
            "name": "Damage marker outline",
            "type": "checkbox"
        }
    ],
    "skeleton_on_hit": [{
            "name": "Skeleton Hit Color",
            "type": "color"
        },
        {
            "name": "Skeleton Kill Color",
            "type": "color"
        }
    ],
    "eye_tracers": [{
        "name": "Eye tracers",
        "type": "color"
    }],
    "trail": [{
            "name": "Trail",
            "type": "color"
        },
        {
            "name": "Trail rainbow",
            "type": "checkbox"
        }
    ],
    "better_scope": [{
            "name": "Better scope hide GUI",
            "type": "checkbox"
        },
        {
            "name": "Better scope viewmodel",
            "type": "checkbox"
        },
        {
            "name": "Better scope width",
            "type": "slider",
            "min": 0,
            "max": 200,
            "default": 50
        },
        {
            "name": "Better scope thickness",
            "type": "slider",
            "min": 0,
            "max": 4,
            "default": 3
        },
        {
            "name": "Better scope start",
            "type": "slider",
            "min": 0,
            "max": 50,
            "default": 15
        },
        {
            "name": "Better scope color 1",
            "type": "color"
        },
        {
            "name": "Better scope color 2",
            "type": "color"
        }
    ],
    "better_crosshair": [{
            "name": "Better crosshair",
            "type": "color"
        },
        {
            "name": "Better crosshair rainbow",
            "type": "checkbox"
        },
        {
            "name": "Better crosshair speed",
            "type": "slider",
            "min": 0,
            "max": 10,
            "default": 2
        },
        {
            "name": "Better crosshair length",
            "type": "slider",
            "min": 0,
            "max": 100,
            "default": 12
        }
    ],
    "hitmarker": [{
            "name": "Hitmarker",
            "type": "color"
        },
        {
            "name": "Hitmarker in screen center",
            "type": "checkbox"
        }
    ],
    "rainbow_bar": [{
        "name": "Rainbow bar",
        "type": "dropdown",
        "elements": ["Single color", "Gradient"]
    }],
    "nade_circle": [{
            "name": "Molotov circle fill",
            "type": "color"
        },
        {
            "name": "Molotov circle outline",
            "type": "color"
        },
        {
            "name": "Smoke circle fill",
            "type": "color"
        },
        {
            "name": "Smoke circle outline",
            "type": "color"
        },
        {
            "name": "HE circle",
            "type": "color"
        }
    ],
    "nade_tracer": [{
        "name": "Nade tracer",
        "type": "color"
    }],
    "transparency_on_nade": [{
            "name": "Wall transparency",
            "type": "slider",
            "min": 0,
            "max": 25,
            "default": 0
        },
        {
            "name": "Prop transparency",
            "type": "slider",
            "min": 0,
            "max": 100,
            "default": 50
        }
    ],
    "agent_changer": [{
            "name": "T agent",
            "type": "dropdown",
            "elements": getAgents("T")
        },
        {
            "name": "CT agent",
            "type": "dropdown",
            "elements": getAgents("CT")
        }
    ],
    "arms_color": [{
            "name": "T arms color",
            "type": "dropdown",
            "elements": ["Default", "Nigger", "Brown", "Asian", "Red", "Tatoo", "White"]
        },
        {
            "name": "CT arms color",
            "type": "dropdown",
            "elements": ["Default", "Nigger", "Brown", "Asian", "Red", "Tatoo", "White"]
        }
    ],
    "better_glow_chams": [{
            "name": "Better glow chams",
            "type": "color"
        },

    ],
    "world_color": [{
        "name": "World color",
        "type": "color"
    }],
    "custom_fog": [{
        "name": "Fog color",
        "type": "color"
    }],
    "music_kit": [{
        "name": "Music kit",
        "type": "slider",
        "min": 1,
        "max": 41
    }],
    //"killsay": [{"name": "Killsay", "type": "checkbox"}],
    "indicators_bar": [{
            "name": "Indicators bar X position",
            "type": "slider",
            "min": 0,
            "max": 1024,
            "default": 0
        }, //replace 1024 with your vertical CSGO resolution
        {
            "name": "Indicators bar Y position",
            "type": "slider",
            "min": 0,
            "max": 768,
            "default": 0
        }, //replace 768 with your horizontal CSGO resolution
        //{"name": "Desync strength", "type": "color"}
    ],
    "watermark": [{
            "name": "Watermark",
            "type": "checkbox"
        },
        {
            "name": "Watermark color",
            "type": "color"
        }
    ],
    "clantag": [{
        "name": "Clantag",
        "type": "dropdown",
        "elements": ["XD.js", "Emoticons"]
    }],
    "buy_list": [{
            "name": "Buylist X position",
            "type": "slider",
            "min": 0,
            "max": 1024,
            "default": 0
        }, //replace 1024 with your vertical CSGO resolution
        {
            "name": "Buylist Y position",
            "type": "slider",
            "min": 0,
            "max": 768,
            "default": 0
        }, //replace 768 with your horizontal CSGO resolution
    ],
    "keybinds": [{
            "name": "binds x",
            "type": "slider",
            "min": 0,
            "max": 1024,
            "default": 317
        }, //replace 1024 with your vertical CSGO resolution
        {
            "name": "binds y",
            "type": "slider",
            "min": 0,
            "max": 768,
            "default": 86
        }, //replace 768 with your horizontal CSGO resolution
    ],
    "specList": [{
            "name": "spectators x",
            "type": "slider",
            "min": 0,
            "max": 1024,
            "default": 176
        }, //replace 1024 with your vertical CSGO resolution
        {
            "name": "spectators y",
            "type": "slider",
            "min": 0,
            "max": 768,
            "default": 229
        }, //replace 768 with your horizontal CSGO resolution
    ],
    "teamskeet": [{
            "name": "Teamskeet indicators",
            "type": "multi",
            "elements": ["Info box", "Key states", "Anti-Aim"]
        },
        {
            "name": "Indicators settings",
            "type": "multi",
            "elements": ["Desync", "Speed", "Gradient", "Show values", "Big"]
        },
        {
            "name": "Anti-Aim indicators type",
            "type": "dropdown",
            "elements": ["Arrows", "Circle", "Static"]
        },
        {
            "name": "Real indicator color",
            "type": "color"
        },
        {
            "name": "Desync indicator color",
            "type": "color"
        },
        {
            "name": "Teamskeet X position",
            "type": "slider",
            "min": 0,
            "max": 1024,
            "default": 0
        }, //replace 1024 with your vertical CSGO resolution
        {
            "name": "Teamskeet Y position",
            "type": "slider",
            "min": 0,
            "max": 768,
            "default": 0
        }, //replace 768 with your horizontal CSGO resolution
    ],
    "auto_teamchoose": [{
        "name": "Team",
        "type": "dropdown",
        "elements": ["Counter-Terrorists", "Terrorists", "Spectators"]
    }, ],
    "clear_chat": [{
        "name": "Clear chat speed",
        "type": "slider",
        "min": 1,
        "max": 100
    }, ],
    "chat_hide": [{
        "name": "Enable hide chat",
        "type": "checkbox"
    }, ],
    "auto_smoke": [{
        "name": "Enable auto-smoke",
        "type": "hotkey"
    }, ],
    "exploit_indicators": [{
            "name": "Exploit indicator X position",
            "type": "slider",
            "min": 0,
            "max": 1024,
            "default": 0
        }, //replace 1024 with your vertical CSGO resolution
        {
            "name": "Exploit indicator Y position",
            "type": "slider",
            "min": 0,
            "max": 768,
            "default": 0
        }, //replace 768 with your horizontal CSGO resolution
    ],
    "anti_crash": [{
        "name": "Enable anti-crasher",
        "type": "hotkey"
    }, ],
    "panorama_weaponlist": [{
            "name": "Remove active weapon",
            "type": "checkbox"
        },
        {
            "name": "Weaponlist X position",
            "type": "slider",
            "min": 0,
            "max": 1024,
            "default": 0
        }, //replace 1024 with your vertical CSGO resolution }
        {
            "name": "Weapon color",
            "type": "color"
        },
    ],
    "base_aa": [{
            "name": "LBY offset",
            "type": "slider",
            "min": -180,
            "max": 180,
            "default": 0
        },
        {
            "name": "Real offset",
            "type": "slider",
            "min": -180,
            "max": 180,
            "default": 0
        },
        {
            "name": "Fake offset",
            "type": "slider",
            "min": -180,
            "max": 180,
            "default": 0
        },
    ],
    "gernade_helper": [{
            "name": "Enable gernade helper",
            "type": "checkbox"
        },
        {
            "name": "Automatic throw",
            "type": "checkbox"
        },
        {
            "name": "Automatic throw hotkey",
            "type": "hotkey"
        },
        {
            "name": "Gernade Helper Color",
            "type": "color"
        },
        {
            "name": "Render nade on all map",
            "type": "checkbox"
        },
    ],
    "better_missLogs": [{
        "name": "Enable chat logging",
        "type": "checkbox"
    }, ],
    // "teleport_onpeek": [
    // 	{"name": "Teleport key", "type": "hotkey"},
    // 	{"name": "Predicted ticks", "type": "slider", "min": 2, "max": 5},
    // 	{"name": "Teleport cooldown", "type": "slider", "min": 1.0, "max": 10.0},
    // 	{"name": "Minimum damage to trigger teleport", "min": 1, "max" : 20},
    // 	{"name": "Enable doubletap after teleport", "type": "checkbox"},
    // 	{"name": "Recharge after teleport", "type": "checkbox"},
    // 	{"name": "Render indicator", "type": "checkbox"},
    // ],
    "rory_jitter": [{
            "name": "[CJitter] Left",
            "type": "hotkey"
        },
        {
            "name": "[CJitter] Back",
            "type": "hotkey"
        },
        {
            "name": "[CJitter] Right",
            "type": "hotkey"
        },
        {
            "name": "[CJitter] Jitter Width",
            "type": "slider",
            "min": 0,
            "max": 90,
            "default": 0
        },
        {
            "name": "[CJitter] Jitter Frequency",
            "type": "slider",
            "min": 1,
            "max": 100,
            "default": 1
        },
        {
            "name": "[CJitter] Randomize Factor",
            "type": "slider",
            "min": 0,
            "max": 25,
            "default": 0
        },
        {
            "name": "[CJitter] Auto-Inverter",
            "type": "checkbox"
        },
        {
            "name": "[CJitter] Visuals",
            "type": "multi",
            "elements": ["Arrows", "Cycle", "Degree", "Inverted"]
        },
    ],
    "body_lean": [{
            "name": "Body Lean moving",
            "type": "checkbox"
        },
        {
            "name": "Inverted body lean",
            "type": "slider",
            "min": -180,
            "max": 180,
            "default": 0
        },
        {
            "name": "Body lean",
            "type": "slider",
            "min": -180,
            "max": 180,
            "default": 0
        },
    ],
};



//OTHER FUNCTIONS
var world_pos1;

function entities() {
    var entities = Entity.GetEntities();
    for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        var name = Entity.GetClassName(entity);
        var world_pos = Entity.GetRenderOrigin(entities[i]);
        if (name === "CEnvTonemapController") {
            worldColor2(entity);
        }
        if (name === "CInferno") {
            draw_circle_3d(world_pos[0], world_pos[1], world_pos[2], 180, 360, 0.150, UI.GetColor("Script items", "Molotov circle fill"), true, UI.GetColor("Script items", "Molotov circle outline"));
        }
        if (name === "CSmokeGrenadeProjectile") {
            var world_pos = Entity.GetRenderOrigin(entities[i]);
            draw_circle_3d(world_pos[0], world_pos[1], world_pos[2], 149, 360, 0.150, UI.GetColor("Script items", "Smoke circle fill"), true, UI.GetColor("Script items", "Smoke circle outline"));
        }
    }
}

function players() {
    var players = Entity.GetPlayers();
    for (var i = 0; i < players.length; i++) {
        return;
        var player = players[i];
        var nickname = Entity.GetName(player);
        //if(player === local) continue;
        var clan = Entity.GetProp(player, "CCSPlayerResource", "m_szClan");
        if (Entity.IsBot(player)) continue;
        //if(clan == "" || !clan) continue;
        //Cheat.Print(clan);
        //Cheat.Print(nickname + "\n");
        //if(clan.length !== 9) continue;
        var command = clan[8];
        var nickname_length = nickname.length;
        nickname_length = clamp(nickname_length, 0, 9);
        if (clan[0] !== "!") continue;
        Cheat.Print(1 + "\n");
        if (clan[1] !== nickname_length) continue;
        Cheat.Print(2 + "\n");
        if (clan[2] !== "c" || clan[3] !== "r") continue;
        Cheat.Print(3 + "\n");
        if (clan[4] !== nickname[1]) continue;
        Cheat.Print(4 + "\n");
        if (clan[5] !== nickname[5]) continue;
        Cheat.Print(5 + "\n");
        if (clan[6] !== "." || (clan[7] !== "&" && clan[7] !== "$")) continue;
        //Cheat.Print(6 + "\n");
        //Cheat.Print(command);
    }
}

function updateVars() {
    screen_size = Render.GetScreenSize();
    cursor_pos = Input.GetCursorPosition();
}

function on_weapon_fire() {
    var shooter = Entity.GetEntityFromUserID(Event.GetInt("userid"));
    last_shot_time[shooter] = Globals.Tickcount();
}

function ragebotFire() {
    if (GetVal("invert_on_shot") || (mmFDActive && GetValue("Matchmaking FD invert on shot"))) {
        UI.ToggleHotkey("Anti-Aim", "Fake angles", "Inverter");
    }
}

function on_player_connect() {
    var entity = Entity.GetEntityFromUserID(Event.GetInt("userid"));
    if (entity != Entity.GetLocalPlayer()) return;
    //Resetting vars
    last_shot_time = [];
    disableTime = 0;
    hitmarkerTime = 0;
    didKill = 0;
    buys = {};
    effect_alpha = 100;
    effect_size = 150;
    he_positions = [];
    grenadeData = [];
    nade_positions = [];
    lastHitTime = 0.0;
    lastImpactTimes = [0.0];
    lastImpacts = [
        [0.0, 0.0, 0.0]
    ];
    bullets = [];
}

function resetVars() {
    var entity = Entity.GetEntityFromUserID(Event.GetInt("userid"));
    if (entity != Entity.GetLocalPlayer()) return;
    //Resetting vars
    last_shot_time = [];
    disableTime = 0;
    hitmarkerTime = 0;
    didKill = 0;
    buys = {};
    effect_alpha = 100;
    effect_size = 150;
    he_positions = [];
    grenadeData = [];
    nade_positions = [];
    bullets = [];
    if (Convar.GetString("cl_lock_camera") !== "0") {
        Convar.SetString('cl_lock_camera', '0');
    }
    Convar.SetFloat("r_drawvgui", 1);
    Convar.SetInt("fov_cs_debug", 0);
    Convar.SetString('cl_draw_only_deathnotices', '0');
}

function on_hegrenade_detonate() {
    worldLocation = [Event.GetInt("x"), Event.GetInt("y"), Event.GetInt("z")];
    he_positions.push(worldLocation);
    grenadeData.push([2, 255]);
}

function renderShadowText(x, y, text, color, font) {
    Render.StringCustom(x + 1, y + 1, 0, text, [0, 0, 0, 100], font);
    Render.StringCustom(x, y, 0, text, color, font);
}

function forceBaim() {
    forcedBaim = true;
    if (!UI.IsHotkeyActive('Rage', 'GENERAL', 'Force body aim')) UI.ToggleHotkey('Rage', 'GENERAL', 'Force body aim');
}

function DisableBaim() {
    if (UI.IsHotkeyActive('Rage', 'GENERAL', 'Force body aim')) UI.ToggleHotkey('Rage', 'GENERAL', 'Force body aim');
}

function ExtrapolateTick(ticks) {
    local = Entity.GetLocalPlayer();
    var head = Entity.GetHitboxPosition(local, 0),
        velocity = Entity.GetProp(local, 'CBasePlayer', 'm_vecVelocity[0]'),
        array = [];
    return array[0] = head[0] + velocity[0] * Globals.TickInterval() * ticks, array[1] = head[1] + velocity[1] * Globals.TickInterval() * ticks, array[2] = head[2] + velocity[2] * Globals.TickInterval() * ticks, array;
}

function IsLethal(player) {
    var health = Entity.GetProp(player, 'CBasePlayer', 'm_iHealth');
    pelvis_pos = Entity.GetHitboxPosition(player, 2),
        body_pos = Entity.GetHitboxPosition(player, 3),
        thorax_pos = Entity.GetHitboxPosition(player, 4);
    local = Entity.GetLocalPlayer();
    result_thorax = Trace.Bullet(local, player, Entity.GetEyePosition(local), thorax_pos);
    if (result_thorax[1] >= health) return true;
    result_thorax_extrapolated = Trace.Bullet(local, player, ExtrapolateTick(14), thorax_pos);
    if (result_thorax_extrapolated[1] >= health) return true;
    return false;
}

function isInAir() {
    var fv = Entity.GetProp(Entity.GetLocalPlayer(), "CBasePlayer", "m_flFallVelocity");
    if (fv < -1 || fv > 1) {
        return true;
    }
    return false;
}

function angle_diff(angle_1, angle_2) {
    var delta = angle_1 - angle_2;
    delta %= 360;
    if (delta > 180) {
        delta -= 360;
    }
    if (delta < -180) {
        delta += 360;
    }
    return delta;
}

function closestTarget() {
    var enemies = Entity.GetEnemies();
    var dists = [];
    var damage = [];
    for (e in enemies) {
        if (!Entity.IsAlive(enemies[e]) || Entity.IsDormant(enemies[e]) || !Entity.IsValid(enemies[e])) continue;
        dists.push([enemies[e], calcDist(Entity.GetHitboxPosition(Entity.GetLocalPlayer(), 0), Entity.GetHitboxPosition(enemies[e], 0))]);
    }
    dists.sort(function(a, b) {
        return a[1] - b[1];
    });
    if (dists.length == 0 || dists == []) return target = -1;
    return dists[0][0];
}

// clean dist func, thanks rzr
function calcDist(a, b) {
    var x = a[0] - b[0];
    var y = a[1] - b[1];
    var z = a[2] - b[2];
    return Math.sqrt(x * x + y * y + z * z);
}

function get_metric_distance(a, b) {
    return Math.floor(Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2) + Math.pow(a[2] - b[2], 2)) * 0.0254);
}

function radians_to_degrees(radians) {
    return radians * (180 / Math.PI);
}

function angle_to_vec(pitch, yaw) {
    var p = degree_to_radian(pitch);
    var y = degree_to_radian(yaw)

    var sin_p = Math.sin(p);
    var cos_p = Math.cos(p);
    var sin_y = Math.sin(y);
    var cos_y = Math.cos(y);

    return [cos_p * cos_y, cos_p * sin_y, -sin_p];
}


function rotateAroundPoint(center, point, angle) {
    angle = angle / 180 * Math.PI;
    var x = Math.cos(angle) * (point[0] - center[0]) - Math.sin(angle) * (point[1] - center[1]) + center[0];
    var y = Math.sin(angle) * (point[0] - center[0]) + Math.cos(angle) * (point[1] - center[1]) + center[1];
    return [x, y];
}

function hsv2rgb(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0:
            r = v, g = t, b = p;
            break;
        case 1:
            r = q, g = v, b = p;
            break;
        case 2:
            r = p, g = v, b = t;
            break;
        case 3:
            r = p, g = q, b = v;
            break;
        case 4:
            r = t, g = p, b = v;
            break;
        case 5:
            r = v, g = p, b = q;
            break;
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    }
}

function draw_circle_3d(x, y, z, radius, degrees, start_at, fill_clr, filled, clr) {
    var accuracy = 10;
    var old_x, old_y;
    start_at = start_at + 1;
    for (rot = start_at; rot < degrees + start_at + 1; rot += accuracy) {
        rot_r = rot * (Math.PI / 180)
        line_x = radius * Math.cos(rot_r) + x, line_y = radius * Math.sin(rot_r) + y
        var curr = Render.WorldToScreen([line_x, line_y, z]),
            cur = Render.WorldToScreen([x, y, z]);
        if (cur[0] != null && curr[0] != null && old_x != null) {
            if (filled) Render.Polygon([
                [curr[0], curr[1]],
                [old_x, old_y],
                [cur[0], cur[1]]
            ], fill_clr)
            Render.Line(curr[0], curr[1], old_x, old_y, clr);
            Render.Line(curr[0] - 1, curr[1] - 1, old_x - 1, old_y - 1, clr);
            //Render.Line(curr[0] - 2, curr[1] - 2, old_x - 2, old_y - 2, clr);
        }
        old_x = curr[0], old_y = curr[1];
    }
}

function renderArc(x, y, r1, r2, s, d, col) {
    for (var i = s; i < s + d; i++) {
        const rad = i * Math.PI / 180;
        Render.Line(x + Math.cos(rad) * r1, y + Math.sin(rad) * r1, x + Math.cos(rad) * r2, y + Math.sin(rad) * r2, col);
    }
}

function can_shift_shot(ticks_to_shift) {
    local = Entity.GetLocalPlayer();
    var wpn = Entity.GetWeapon(local);

    if (local == null || wpn == null)
        return false;

    var tickbase = Entity.GetProp(local, "CCSPlayer", "m_nTickBase");
    var curtime = Globals.TickInterval() * (tickbase - ticks_to_shift)

    if (curtime < Entity.GetProp(local, "CCSPlayer", "m_flNextAttack"))
        return false;

    if (curtime < Entity.GetProp(wpn, "CBaseCombatWeapon", "m_flNextPrimaryAttack"))
        return false;

    return true;
}

var csgo_weapons = {
    "0": "none",
    "1": "deagle",
    "2": "elite",
    "3": "fiveseven",
    "4": "glock",
    "5": "p228",
    "6": "usp",
    "7": "ak47",
    "8": "aug",
    "9": "awp",
    "10": "famas",
    "11": "g3sg1",
    "12": "galil",
    "13": "galilar",
    "14": "m249",
    "15": "m3",
    "16": "m4a4",
    "17": "mac10",
    "18": "mp5navy",
    "19": "p90",
    "20": "ssg08",
    "21": "sg550",
    "22": "sg552",
    "23": "tmp",
    "24": "ump45",
    "25": "xm1014",
    "26": "bizon",
    "27": "mag7",
    "28": "negev",
    "29": "sawedoff",
    "30": "tec9",
    "31": "taser",
    "32": "hkp2000",
    "33": "mp7",
    "34": "mp9",
    "35": "nova",
    "36": "p250",
    "37": "scar17",
    "38": "scar20",
    "39": "sg556",
    "40": "ssg08",
    "41": "knifegg",
    "42": "knife",
    "43": "flashbang",
    "44": "hegrenade",
    "45": "smokegrenade",
    "46": "molotov",
    "47": "decoy",
    "48": "incgrenade",
    "49": "c4",
    "60": "m4a1",
    "63": "cz75",
    "64": "revolver",
    "197108": "knife",
    "197113": "knife",
    "197114": "knife",
    "197115": "knife",
    "197116": "knife",
    "197123": "knife",
    "197120": "knife",
    "197128": "knife",
    "197124": "knife",
    "197130": "knife",
    "197122": "knife",
    "197117": "knife",
    "197131": "knife",
    "197127": "knife",
    "197111": "knife",
    "197125": "knife",
    "197126": "knife",
    "197129": "knife",
    "197133": "knife",
    "262205": "usp",
    "262208": "revolver"
};

function getWeaponName() {
    var weapon = Entity.GetProp(Entity.GetWeapon(Entity.GetLocalPlayer()), "DT_WeaponBaseItem", "m_iItemDefinitionIndex");
    return csgo_weapons[weapon];
}

function canShoot(player) {
    var index = Entity.GetWeapon(player)
    var classid = Entity.GetClassID(index);

    var weapon = classid == 107 || classid == 108 || classid == 96 || classid == 99 || classid == 112 || classid == 155 || classid == 47; //checking if the selected weapon is knife or nade
    var clip = Entity.GetProp(index, "DT_BaseCombatWeapon", "m_iClip1");
    var getbuttons = Entity.GetProp(index, 'CBasePlayer', 'm_fFlags');
    if (weapon || clip == 0 || getbuttons & 1 << 1) //check if player is jumping or as an empty mag // UserCMD.GetButtons() & (1 << 1)
        return false;
    return true;
}

function isSlowwalking() {
    return UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk");
}

function getVelocity(player) {
    var velocity = Entity.GetProp(player, "CBasePlayer", "m_vecVelocity[0]");
    return Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1]);
}

function fakelag(state) {
    UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", state);
}

function alp(c, a) {
    return [c[0], c[1], c[2], a]
}

function clamp(v, min_int, max_int) {
    return Math.max(Math.min(v, max_int), min_int);
}

function VectorNew(array) {
    return {
        x: array[0],
        y: array[1],
        z: array[2]
    }
}

function VectorToArray(vector) {
    return [vector['x'], vector['y'], vector['z']]
}

function VectorOperate(a, b, operation) {
    switch (operation) {
        case '+':
            return {
                x: a.x + b.x,
                    y: a.y + b.y,
                    z: a.z + b.z
            };
        case '-':
            return {
                x: a.x - b.x,
                    y: a.y - b.y,
                    z: a.z - b.z
            };
        case '*':
            return {
                x: a.x * b.x,
                    y: a.y * b.y,
                    z: a.z * b.z
            };
        case '/':
            return {
                x: a.x / b.x,
                    y: a.y / b.y,
                    z: a.z / b.z
            };
    }
}

var meme_text = "CTACcord";

function duplicate(theObject) {
    return JSON.parse(JSON.stringify(theObject));
}

function degree_to_radian(degree) {
    return degree * Math.PI / 180.0;
}

function ExtendVector(vector, angle, extension) {
    var radianAngle = degree_to_radian(angle);
    return [extension * Math.cos(radianAngle) + vector[0], extension * Math.sin(radianAngle) + vector[1], vector[2]];
}

function VectorAdd(a, b) {
    return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}

function VectorDot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

function VectorLength(x, y, z) {
    return Math.sqrt(x * x + y * y + z * z);
}

function VectorNormalize(vec) {
    var length = VectorLength(vec[0], vec[1], vec[2]);
    return [vec[0] / length, vec[1] / length, vec[2] / length];
}

function VectorSubtract(a, b) {
    return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}

function VectorMultiply(a, b) {
    return [a[0] * b[0], a[1] * b[1], a[2] * b[2]];
}

function VectorDistance(a, b) {
    return VectorLength(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
}

function VectorAngles(forward) {
    var angles;
    var tmp, yaw, pitch;

    if (forward[1] == 0 && forward[0] == 0) {
        yaw = 0;
        if (forward[2] > 0)
            pitch = 270;
        else
            pitch = 90;
    } else {
        yaw = (Math.atan2(forward[1], forward[0]) * 180 / Math.PI);
        if (yaw < 0)
            yaw += 360;
        tmp = Math.sqrt(forward[0] * forward[0] + forward[1] * forward[1]);
        pitch = (Math.atan2(-forward[2], tmp) * 180 / Math.PI);
        if (pitch < 0)
            pitch += 360;
    }

    x = pitch;
    y = yaw;
    z = 0;
    angles = [x, y, z];

    return angles;
}

function ClosestPointOnRay(target, rayStart, rayEnd) {
    var to = VectorSubtract(target, rayStart);
    var dir = VectorSubtract(rayEnd, rayStart);
    var length = VectorLength(dir[0], dir[1], dir[2]);
    dir = VectorNormalize(dir);

    var rangeAlong = VectorDot(dir, to);
    if (rangeAlong < 0.0) {
        return rayStart;
    }
    if (rangeAlong > length) {
        return rayEnd;
    }
    return VectorAdd(rayStart, VectorMultiply(dir, [rangeAlong, rangeAlong, rangeAlong]));
}


function setHotkey(path, state) {
    if (UI.IsHotkeyActive(path) !== state) {
        UI.ToggleHotkey(path);
    }
}

function update_anti_aim_state(state) {
    if (UI.GetValue('Rage', 'GENERAL', 'General', 'Enabled')) {
        if (UI.IsHotkeyActive('Anti-Aim', 'Fake angles', 'Inverter') !== state) {
            UI.ToggleHotkey('Anti-Aim', 'Fake angles', 'Inverter');
        }
        return;
    }
}

function exploitsActive(type) {
    var hideshots = UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Hide shots") && UI.GetValue("Rage", "GENERAL", "Exploits", "Hide shots");
    var doubletap = UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap") && UI.GetValue("Rage", "GENERAL", "Exploits", "Doubletap");
    if (type == "hs") {
        return hideshots;
    }
    if (type == "dt") {
        return doubletap;
    }
    if (type == "all") {
        return (hideshots || doubletap);
    }
}

function can_shoot(Player) {
    var index = Entity.GetWeapon(Player);
    var classid = Entity.GetClassID(index);

    var weapon = classid == 107 || classid == 108 || classid == 96 || classid == 99 || classid == 112 || classid == 155 || classid == 47;
    var clip = Entity.GetProp(index, "DT_BaseCombatWeapon", "m_iClip1");
    var getbuttons = Entity.GetProp(index, 'CBasePlayer', 'm_fFlags');
    if (weapon || clip == 0 || getbuttons & 1 << 1) return false;
    return true;
}

for (var element in script_items) {
    for (i = 0; i < script_items[element].length; i++) {
        addScriptItem(script_items[element][i]);
    }
}

function addScriptItem(item) {
    if (item["type"] == "color") {
        UI.AddColorPicker(item["name"]);
        UI.SetColor("Script items", item["name"], [255, 255, 255, 255]);
    }
    if (item["type"] == "hotkey") {
        UI.AddHotkey(item["name"]);
    }
    if (item["type"] == "checkbox") {
        UI.AddCheckbox(item["name"]);
    }
    if (item["type"] == "dropdown") {
        UI.AddDropdown(item["name"], item["elements"]);
    }
    if (item["type"] == "slider") {
        UI.AddSliderInt(item["name"], item["min"], item["max"]);
        if ("default" in item) UI.SetValue("Script items", item["name"], item["default"]);
    }
    if (item["type"] == "multi") {
        UI.AddMultiDropdown(item["name"], item["elements"]);
    }
    if (item["type"] == "textbox") {
        UI.AddTextbox(item["name"]);
    }
}

function scriptItems() {
    if (!UI.IsMenuOpen()) return;
    show_items = GetValue("Show " + name_text + " items");
    for (var checkbox in checkboxes) {
        checkbox = checkboxes[checkbox];
        if (checkbox in script_items) {
            if (GetVal(checkbox) == true) {
                for (i = 0; i < script_items[checkbox].length; i++) {
                    UI.SetEnabled("Script items", script_items[checkbox][i]["name"], show_items);
                }
            } else {
                for (i = 0; i < script_items[checkbox].length; i++) {
                    UI.SetEnabled("Script items", script_items[checkbox][i]["name"], false);
                }
            }
        }
    }
}

UI.IsCursorInBox = function(x, y, width, height) {
    var cursor = Input.GetCursorPosition()
    if (cursor[0] > x && cursor[0] < x + width && cursor[1] > y && cursor[1] < y + height)
        return true
    return false
}


function GetValue(name) {
    return UI.GetValue("Script items", name);
}

function GetVal(id) {
    return UI.GetValue("Script items", name_text + "_" + id);
}

log("Initialized all other functions");

//dangerous. shitcode
//this script is a shitcode itself tbh
for (hitbox in safety_hitboxes) {
    var text = name_text + "_safety_";
    UI.AddCheckbox(text + hitbox + "_safe");
    UI.AddCheckbox(text + hitbox + "_lethal");
    UI.AddCheckbox(text + hitbox + "_force");
    UI.SetEnabled("Script items", text + hitbox + "_safe", false);
    UI.SetEnabled("Script items", text + hitbox + "_lethal", false);
    UI.SetEnabled("Script items", text + hitbox + "_force", false);
}
var tab_names = Object.keys(menu_elements);
var loadedSettings = 0;
var elementsAreReady = false;
var loadSettingsCount = 0;

function loadSettings() {
    if (settingsAreLoaded) return;
    if (!settingsAreLoaded) {
        loadedSettings++;
    }
    log("Loading settings");
    for (i = 0; i < tab_names.length; i++) {
        var tabname = tab_names[i];
        var subtab_names = Object.keys(menu_elements[tab_names[i]]);
        subtabs_names[tabname] = subtab_names;
        selected_subtabs[tab_names[i]] = subtabs_names[tab_names[i]][0];
        for (s = 0; s < subtab_names.length; s++) {
            var subtab = subtab_names[s];
            var box_names = Object.keys(menu_elements[tabname][subtab]);
            var boxes = menu_elements[tabname][subtab];
            for (b = 0; b < box_names.length; b++) {
                var box_name = box_names[b];
                var box = boxes[box_name];
                for (e = 0; e < box.length; e++) {
                    var element = box[e];
                    var element_name = name_text + "_" + element["id"];
                    switch (element["type"]) {
                        case "checkbox":
                            if (!elementsAreReady)
                                UI.AddCheckbox(element_name);
                            checkboxes.push(element["id"]);
                            break;
                        case "slider":
                            if (!elementsAreReady)
                                UI.AddSliderInt(element_name, element["min"], element["max"]);
                            if ("default" in element) {
                                if (!elementsAreReady)
                                    UI.AddCheckbox(element_name + "_not_def");
                                if (!UI.GetValue("Script items", element_name + "_not_def"))
                                    UI.SetValue("Script items", element_name, element["default"]);
                                UI.SetEnabled("Script items", element_name + "_not_def", false);
                            }
                            var value = UI.GetValue("Script items", element_name);
                            value = clamp(value, element["min"], element["max"]);
                            UI.SetValue("Script items", element_name, value);
                            break;
                    }
                    UI.SetEnabled("Script items", element_name, false);
                }
            }
        }
    }
    loadSettingsCount++;
    for (hitbox in safety_hitboxes) {
        var text = name_text + "_safety_";
        safety_hitboxes[hitbox][0] = UI.GetValue("Script items", text + hitbox + "_safe");
        safety_hitboxes[hitbox][1] = UI.GetValue("Script items", text + hitbox + "_lethal");
        safety_hitboxes[hitbox][2] = UI.GetValue("Script items", text + hitbox + "_force");
    }
    if (!elementsAreReady) {
        elementsAreReady = true;
    } else {
        if (loadSettingsCount >= 64) {
            settingsAreLoaded = true;
            scriptItems();
        }
    }
}
var block_set9 = false;

function drawMenu() {
    //log("Starting drawing menu");
    //OTC3 CORD MADE BY @ZXSLEEBU
    if (UI.IsMenuOpen()) {
        Cheat.ExecuteCommand("fps_max 99");
        block_set9 = false;
    } else {
        if (!block_set9) {
            Cheat.ExecuteCommand("fps_max 400");
            block_set9 = true;
        }
        return;
    }

    //Fonts
    var logo_font = Render.AddFont("Segoe UI", 20, 800);
    icon_font = Render.AddFont("menu_font", 16, 300);
    text_icon_font = Render.AddFont("Segoe UI", 10, 800);
    menu_font = Render.AddFont("Segoe UI", 10, 300);
    subtabs_font = Render.AddFont("Segoe UI", 7, 800);

    //Clearing the hint text
    hint_text = "";

    //Gradient line
    Render.FilledCircle(x + header_radius, y + header_radius + 1, header_radius, [217, 157, 86, 255]);
    Render.FilledCircle(x + width - header_radius - 3, y + header_radius + 1, header_radius + 2, [217, 157, 86, 255]);
    Render.GradientRect(x, y + 4, (width / 2), 8, 1, [217, 157, 86, 255], [223, 174, 97, 255]);
    Render.GradientRect(x + (width / 2), y + 4, (width / 2), 8, 1, [223, 174, 97, 255], [217, 157, 86, 255]);
    Render.GradientRect(x + header_radius, y, (width / 2) - header_radius, 8, 1, [217, 157, 86, 255], [223, 174, 97, 255]);
    Render.GradientRect(x + (width / 2), y, (width / 2) - header_radius, 8, 1, [223, 174, 97, 255], [217, 157, 86, 255]);
    Render.Line(x + 3, y + 1, x + width - 3, y + 1, [217, 157, 86, 255]);

    //Top bright line
    Render.Line(x + 3, y, x + width - 3, y, bright_line_color);

    //Left bright lines
    Render.Line(x, y + 3, x + 2, y, bright_line_color);
    Render.Line(x, y + 2, x, y + 8, bright_line_color);
    Render.Line(x + 1, y + 3, x + 3, y, [217, 157, 86, 255]);

    //Right bright lines
    Render.Line(x + width - 1, y + 3, x + width - 3, y, bright_line_color);
    Render.Line(x + width - 1, y + 2, x + width - 1, y + 8, bright_line_color);

    //Bottom bright line
    Render.Line(x, y + 8, x + width - 1, y + 8, bright_line_color);

    //Background
    Render.FilledRect(x + 2, y + 8, width - 4, height - 12, background_color);
    Render.FilledRect(x + 6, y + height - 6, width - 12, 4, background_color);
    Render.Polygon([
        [x + 2, y + height - 5],
        [x + 6, y + height - 5],
        [x + 6, y + height - 1]
    ], background_color);
    Render.Polygon([
        [x + width - 2, y + height - 5],
        [x + width - 6, y + height - 1],
        [x + width - 6, y + height - 5]
    ], background_color);

    //Borders
    Render.Line(x, y + 8, x, y + height - 6, [31, 33, 37, 255]);
    Render.Line(x + width - 1, y + 8, x + width - 1, y + height - 6, [31, 33, 37, 255]);
    Render.Line(x, y + height - 5, x + 4, y + height - 1, [31, 33, 37, 255]);
    Render.Line(x + 4, y + height - 1, x + width - 5, y + height - 1, [31, 33, 37, 255]);
    Render.Line(x + width - 1, y + height - 5, x + width - 4, y + height - 2, [31, 33, 37, 255]);
    Render.Line(x + 1, y + 8, x + 1, y + height - 5, [77, 81, 88, 255]);
    Render.Line(x + width - 2, y + 8, x + width - 2, y + height - 6, [77, 81, 88, 255]);
    Render.Line(x + 1, y + height - 5, x + 4, y + height - 2, [77, 81, 88, 255]);
    Render.Line(x + 5, y + height - 2, x + width - 6, y + height - 2, [77, 81, 88, 255]);
    Render.Line(x + width - 2, y + height - 5, x + width - 6, y + height - 2, [77, 81, 88, 255]);

    //Header gradient transition
    Render.GradientRect(x + 1, y + 8, width - 2, 9, 0, [98, 86, 69, 255], [98, 86, 69, 0]);

    //Footer
    Render.Line(x + 10, y + height - 28, x + width - 10, y + height - 28, line_color);

    var text_size2 = Render.TextSizeCustom("https://github.com/demitriusdemarcus", menu_font);
    Render.StringCustom(x + width - 14 - text_size2[0], y + height - 26, 0, "https://github.com/demitriusdemarcus", text_color, menu_font);
    Render.StringCustom(x + 15, y + height - 26, 0, "Update: " + last_upd + "; v" + version, text_color, menu_font);
    if (UI.IsCursorInBox(x + width - 14 - text_size2[0], y + height - 27, text_size2[0], text_size2[1] + 1)) {
        hint_text = "Discord: DimitriusDemarcuss#4749\nHuge respect for the original author\nInvite him to skeet :)";
        hint_size = Render.TextSizeCustom(hint_text, menu_font);
        hint_y = cursor_pos[1] + checkbox_height;
        hint_x = clamp(cursor_pos[0] - (box_margin_x * 2) - hint_size[0], 0, screen_size[0]);
    }

    if (!settingsAreLoaded)
        return renderLoading();

    //Name
    Render.StringCustom(x + 14, y + 17, 0, name_text, text_color, logo_font);
    var text_size = Render.TextSizeCustom(name_text, logo_font);

    //Vertical line after name
    Render.Line(x + 14 + text_size[0] + 8, y + 22, x + 14 + text_size[0] + 8, y + 21 + text_size[1], line_color);

    //Horizontal line below header
    Render.Line(x + 10, y + 21 + text_size[1] + 8, x + width - 10, y + 21 + text_size[1] + 8, line_color);

    //Preparing variables
    tab_start = x + 14 + text_size[0] + 8 + 15;
    subtab_text_pos = y + 23 + text_size[1] + 8 + 8 + 50 - 8;
    subtab_start = y + 23 + text_size[1] + 8 + 8;

    //Menu tabs
    renderTabs(tab_names);

    //Subtabs
    Render.FilledRect(x + 14, y + 23 + text_size[1] + 8 + 8, subtabs_width, 50, element_color);
    Render.Rect(x + 15, y + 23 + text_size[1] + 8 + 8 + 1, subtabs_width - 2, 48, element_border_color);

    renderSubtabs(subtabs_names);

    //Menu elements and boxes
    renderElements();

    //Render hints on top of the all
    renderHints();

    drawPlayerList();

    drawSafetySystem();
}

function moveMenu() {
    if (!UI.IsMenuOpen()) return;
    cursor_pos = Input.GetCursorPosition();
    if (!Input.IsKeyPressed(0x01)) {
        is_moving = false;
        old_cursor = cursor_pos;
    }
    if ((cursor_pos[0] >= x && cursor_pos[0] <= x + width && cursor_pos[1] >= y && cursor_pos[1] <= y + 30) || (is_moving)) {
        is_moving = true;
        x = cursor_pos[0] - old_cursor[0] + x;
        y = cursor_pos[1] - old_cursor[1] + y;
        UI.SetValue("Script items", name_text + "_x", x);
        UI.SetValue("Script items", name_text + "_y", y);
        old_cursor = cursor_pos;
    }

    x = clamp(x, -width + 5, screen_size[0] - 5);
    y = clamp(y, -28, screen_size[1] - 5);
}

function renderLoading() {
    renderArc(x + width / 2, y + height / 2, 27, 25, Math.pow(loadedSettings, 1.6), 300, [255, 255, 255, 255]);
}

function drawPlayerList() {
    var selected_tab_name = tab_names[selected_tab];
    var selected_subtab = selected_subtabs[selected_tab_name];
    if (selected_subtab !== "Player list") return;
    element_y = subtab_start + 50 + 13;
    var pre_height = 174;
    var textX = x + 23;
    var enemies = Entity.GetEnemies();

    if (!World.GetServerString()) {
        renderLabel("Join a server!", textX, element_y);
        height = 280;
        return;
    }

    renderLabel("Force safe point on head", textX, element_y);
    element_y += 24;
    pre_height += 24;

    for (enemy in enemies) {
        enemy = enemies[enemy];
        var name = Entity.GetName(enemy);
        var player_id = name + enemy;
        player_list[player_id] = renderCheckbox(name, element_y, false, player_id, player_list[player_id], "");
        element_y += element_margin_bottom + checkbox_height;
        pre_height += element_margin_bottom + checkbox_height;
    }

    height = clamp(pre_height, 280, 999);
}

function drawSafetySystem() {
    var selected_tab_name = tab_names[selected_tab];
    var selected_subtab = selected_subtabs[selected_tab_name];
    if (selected_subtab !== "Safety system") return;
    element_y = subtab_start + 50 + 13;
    var red = [255, 0, 0, 255];
    var green = [0, 255, 0, 255];
    var blue = [0, 0, 255, 255];
    var textX = x + 23;
    renderSmallCircle(textX, element_y + 10, red);
    renderSmallCircle(textX, element_y + 26, green);
    renderSmallCircle(textX, element_y + 44, blue);
    textX += 10;
    renderLabel("LMB - force safe point\nRMB - force safe point if lethal\nMWHEEL Click - force hitbox if lethal", textX, element_y);
    var size = 22;
    var head_color = [255, 255, 255, 255];
    var body_color = [255, 255, 255, 255];
    var legs_color = [255, 255, 255, 255];
    var feet_color = [255, 255, 255, 255];

    if (UI.IsCursorInBox(x + width - (size * 5) + 4, element_y, size * 2, size * 2)) {
        safetySystemSet("head");
        head_color = [230, 230, 230, 255];
    }

    if (UI.IsCursorInBox(x + width - (size * 3) - 47, element_y + size * 2 + 3, size * 2.5, size * 5)) {
        safetySystemSet("body");
        body_color = [230, 230, 230, 255];
    }

    if (UI.IsCursorInBox(x + width - (size * 3) - 47, element_y + size * 7 + 2, size * 2.5 + 4, size * 3 + 4)) {
        safetySystemSet("legs");
        legs_color = [230, 230, 230, 255];
    }

    if (UI.IsCursorInBox(x + width - (size * 3) - 47, element_y + size * 10 + 6, size * 2.5 + 3, size * 0.5)) {
        safetySystemSet("feet");
        feet_color = [230, 230, 230, 255];
    }


    //Head
    Render.FilledCircle(x + width - (size * 2) - 40, element_y + size, size, head_color);
    drawSafetySystemDots(x + width - (size * 2) - 38, element_y + size, false, "head");

    //Arms
    rounded_rect(x + width - (size * 4) - 44, element_y + size * 2 + 4, size * 1 - 2, size * 3.5, 8, [255, 255, 255, 255]);
    rounded_rect(x + width - (size * 1) - 33, element_y + size * 2 + 4, size * 1 - 2, size * 3.5, 8, [255, 255, 255, 255]);

    //Legs
    rounded_rect(x + width - (size * 2) - 34, element_y + size * 5 + 4, size * 1, size * 5, 7, legs_color);
    rounded_rect(x + width - (size * 3) - 45, element_y + size * 5 + 4, size * 1, size * 5, 7, legs_color);
    drawSafetySystemDots(x + width - (size * 2) - 25, element_y + size * 8 + 16, true, "legs");
    drawSafetySystemDots(x + width - (size * 3) - 37, element_y + size * 8 + 16, true, "legs");

    //Feet
    rounded_rect(x + width - (size * 2) - 34, element_y + size * 10 + 6, size * 1, size * 0.5, 2, feet_color);
    rounded_rect(x + width - (size * 3) - 45, element_y + size * 10 + 6, size * 1, size * 0.5, 2, feet_color);
    drawSafetySystemDots(x + width - (size * 1.5) - 34, element_y + size * 10 + 12, false, "feet", 6);
    drawSafetySystemDots(x + width - (size * 2.5) - 45, element_y + size * 10 + 12, false, "feet", 6);

    //Body
    rounded_rect(x + width - (size * 3) - 45, element_y + size * 2 + 4, size * 2.5, size * 5, 8, body_color);
    drawSafetySystemDots(x + width - (size * 2) - 38, element_y + size * 4 + 12, false, "body");

    force_lethal = false;
    for (check_hitbox in safety_hitboxes) {
        if (safety_hitboxes[check_hitbox][2]) {
            force_lethal = true;
            break;
        }
    }

    if (force_lethal) {
        for (check_hitbox in safety_hitboxes) {
            if (safety_hitboxes[check_hitbox][1] && !safety_hitboxes[check_hitbox][2]) {
                safety_hitboxes[check_hitbox][1] = false;
            }
        }
    }

    height = 420;
}

function safetySystemSet(hitbox) {
    var anykey_pressed = Input.IsKeyPressed(0x01) || Input.IsKeyPressed(0x02) || Input.IsKeyPressed(0x04);
    if (anykey_pressed && !click_block) {
        click_block = true;
        if (Input.IsKeyPressed(0x01)) {
            safety_hitboxes[hitbox][0] = !safety_hitboxes[hitbox][0];
        }
        if (Input.IsKeyPressed(0x02)) {
            if (force_lethal && !safety_hitboxes[hitbox][2]) {
                safety_hitboxes[hitbox][1] = false;
                return;
            } else {
                safety_hitboxes[hitbox][1] = !safety_hitboxes[hitbox][1];
            }
        }
        if (Input.IsKeyPressed(0x04)) {
            safety_hitboxes[hitbox][2] = !safety_hitboxes[hitbox][2];
        }
    }
    if (!anykey_pressed) {
        click_block = false;
    }
    for (hitbox in safety_hitboxes) {
        var text = name_text + "_safety_";
        UI.SetValue("Script items", text + hitbox + "_safe", safety_hitboxes[hitbox][0]);
        UI.SetValue("Script items", text + hitbox + "_lethal", safety_hitboxes[hitbox][1]);
        UI.SetValue("Script items", text + hitbox + "_force", safety_hitboxes[hitbox][2]);
    }
}

function drawSafetySystemDots(x, y, vertical, hitbox, space) {
    hitbox = safety_hitboxes[hitbox];
    var dot_count = hitbox[0] + hitbox[1] + hitbox[2];
    var red = [255, 0, 0, 255];
    var green = [0, 255, 0, 255];
    var blue = [0, 0, 255, 255];
    if (space === null || space === undefined) {
        space = 8;
    }
    (!vertical) ? x -= dot_count * (space / 2): y -= dot_count * (space / 2);
    for (type in hitbox) {
        if (hitbox[type] == true) {
            var color = ((type == 0) ? red : ((type == 1) ? green : blue));
            renderSmallCircle(x, y, color);
            (!vertical) ? x += space: y += space;
        }
    }
}

function renderTabs(tabs) {
    for (i = 0; i < tabs.length; i++) {
        var name = tabs[i];
        var color = tab_active_color;
        var animate_speed = 11;
        cursor_pos = Input.GetCursorPosition();
        var font = Render.AddFont("Segoe UI", 10, 900);
        var text_size = Render.TextSizeCustom(name, font);
        var x1 = tab_start + ((tab_margin + tab_width) * i);
        var y1 = y + 29;
        var x2 = tab_start + ((tab_margin + tab_width) * i) + tab_width;
        var y2 = y + 29 + 22;
        color[3] = tab_colors[i];

        //if(cursor_pos[0] >= x1 && cursor_pos[0] <= x2 && cursor_pos[1] >= y1 && cursor_pos[1] <= y2 || i == selected_tab){
        if (UI.IsCursorInBox(x1, y1, tab_width, 22) || i == selected_tab) {
            if (Input.IsKeyPressed(0x01) && !is_moving) {
                selected_tab = i;
            }
            color[3] += (color[3] > 100) ? (animate_speed / 1.5) : animate_speed;
        } else {
            color[3] -= animate_speed;
        }
        if (color[3] > 255) {
            color[3] = 255;
        } else {
            if (color[3] < 0) {
                color[3] = 0;
            }
        }
        tab_colors[i] = color[3];
        rounded_rect(x1, y1, tab_width, 22, 2, color);
        /*Render.FilledRect(x1, y1, tab_width, 22, color);*/
        Render.StringCustom(x1 + (tab_width / 2) - (text_size[0] / 2), y1 + 11 - (text_size[1] / 2), 0, name, text_color, font);
    }
}

function renderSubtabs(subtabs) {
    //0TC3 C0RD M4D3 BY @Z X S L 3 3 B U
    var name = tab_names[selected_tab];
    var subtabs_count = subtabs[name].length;
    for (i = 0; i < subtabs_count; i++) {
        var subtab = subtabs[name][i].toUpperCase();
        var icon = subtabs_icons[name][subtabs[name][i]];
        var text_icon = subtabs_text_icons[name][subtabs[name][i]];
        var text_size = Render.TextSizeCustom(subtab, subtabs_font);
        var icon_size = Render.TextSizeCustom(icon, icon_font);
        var text_icon_size = Render.TextSizeCustom(text_icon, text_icon_font);
        var color = subtab_text_color;
        cursor_pos = Input.GetCursorPosition();
        var x1 = x + 14 + ((subtabs_width / subtabs_count) * i);
        var y1 = subtab_start;
        var x2 = x + 14 + ((subtabs_width / subtabs_count) * (i + 1));
        var y2 = subtab_start + 50;
        //if(cursor_pos[0] >= x1 && cursor_pos[0] <= x2 && cursor_pos[1] >= y1 && cursor_pos[1] <= y2 || subtabs[name][i] == selected_subtabs[name]){
        if (UI.IsCursorInBox(x1, subtab_start, (subtabs_width / subtabs_count), 50) || subtabs[name][i] == selected_subtabs[name]) {
            if (Input.IsKeyPressed(0x01) && !is_moving) {
                selected_subtabs[name] = subtabs[name][i];
            }
            color = text_color;
        }
        var textX = x + 14 + ((subtabs_width / subtabs_count) / 2) - (text_size[0] / 2) + ((subtabs_width / subtabs_count) * i);
        var textY = subtab_text_pos - text_size[1] + 1;
        var iconX = x + 14 + ((subtabs_width / subtabs_count) / 2) - (icon_size[0] / 2) + ((subtabs_width / subtabs_count) * i);
        var iconY = subtab_text_pos - text_size[1] - 4 - icon_size[1];
        var text_iconX = x + 14 + ((subtabs_width / subtabs_count) / 2) - (text_icon_size[0] / 2) + ((subtabs_width / subtabs_count) * i);
        var text_iconY = subtab_text_pos - text_size[1] - 5 - text_icon_size[1];

        Render.StringCustom(textX, textY, 0, subtab, color, subtabs_font);
        Render.StringCustom(iconX, iconY, 0, icon, color, icon_font);
        Render.StringCustom(text_iconX, text_iconY, 0, text_icon, color, text_icon_font);
    }
}

function renderBox(name, height, right) {
    box_width = ((width - (15 * 2)) / 2) - 12;
    var boxX = (right) ? x + 15 + box_width + 24 : x + 15;
    var boxY = subtab_start + box_offsets[(right) ? 1 : 0] + 50 + 13;

    Render.Line(boxX, boxY + height - 3, boxX + 3, boxY + height, line_color);
    Render.Line(boxX + box_width, boxY + height - 3, boxX + box_width - 3, boxY + height, line_color);

    Render.Line(boxX, boxY, boxX, boxY + height - 3, line_color);
    Render.Line(boxX + box_width, boxY, boxX + box_width, boxY + height - 3, line_color);
    Render.Line(boxX + 3, boxY + height, boxX + box_width - 4, boxY + height, line_color);

    var text_size = Render.TextSizeCustom(name, menu_font);

    var textX = boxX + (box_width / 2) - (text_size[0] / 2);
    Render.GradientRect(boxX, boxY, (box_width / 2) - (text_size[0] / 2) - 4, 1, 1, [217, 157, 86, 255], [246, 207, 135, 255]);
    Render.GradientRect(textX + text_size[0] + 4, boxY, (box_width / 2) - Math.floor(text_size[0] / 2) - 3, 1, 1, [246, 207, 135, 255], [217, 157, 86, 255]);
    Render.StringCustom(textX, boxY - (text_size[1] / 2) - 1, 0, name, text_color, menu_font);
    box_offsets[(right) ? 1 : 0] += height + 18;
}

function renderElements() {
    var selected_tab_name = tab_names[selected_tab];
    var selected_subtab = selected_subtabs[selected_tab_name];
    var subtab_boxes_names = Object.keys(menu_elements[selected_tab_name][selected_subtab]);
    var subtab_boxes = menu_elements[selected_tab_name][selected_subtab];

    for (i = 0; i < subtab_boxes_names.length; i++) {
        var box_name = subtab_boxes_names[i];
        var box_height = box_margin_top;
        var side = i % 2;
        if (box_offsets[0] > 250) {
            side = 1;
        }

        for (e = 0; e < subtab_boxes[box_name].length; e++) {
            element_y = subtab_start + 50 + 13;
            var element = subtab_boxes[box_name][e];
            if ("master" in element && (!GetVal(element["master"]))) continue;
            if (element["master"] == "mindamage_advanced" && !GetVal("mindamage")) continue;
            switch (element["type"]) {
                case "checkbox":
                    var visible = ("visible" in element) ? element["visible"] : true;
                    if (!visible && !GetVal("useless_features")) break;
                    element_y += box_offsets[side] + box_height;
                    var hint = ("hint" in element) ? element["hint"] : "";
                    renderCheckbox(element["name"], element_y, side, element["id"], GetVal(element["id"]), hint);
                    box_height += element_margin_bottom + checkbox_height;
                    break;
                case "slider":
                    var visible = ("visible" in element) ? element["visible"] : true;
                    if (!visible && !GetVal("useless_features")) break;
                    element_y += box_offsets[side] + box_height;
                    var min = ("min" in element) ? element["min"] : 0;
                    var max = ("max" in element) ? element["max"] : 0;
                    var append = ("append" in element) ? element["append"] : "";
                    renderSlider(element["name"], element_y, side, element["id"], min, max, append);
                    box_height += element_margin_bottom + slider_height + 18;
                    break;
            }
        }

        box_height += box_margin_bottom;
        renderBox(box_name, box_height, side);
    }

    if (selected_subtab !== "Player list" && selected_subtab !== "Safety system") {
        height = Math.max.apply(null, box_offsets) + 164;
    }

    //0TC3 (if) C0RD (you) M4D3 (remove) BY (this) @ Z Х S L 3 3 В U (you're gay)
    box_offsets = [0, 0];
}

function renderCheckbox(name, checkboxY, right, id, active, hint) {
    var checkboxX = ((right) ? x + 15 + box_width + 24 : x + 15) + box_margin_x;
    var text_size = Render.TextSizeCustom(name, menu_font);
    var textX = ((right) ? x + 15 + box_width + 24 : x + 15) + box_text_margin_x;
    var color = element_color;
    var color2 = element_border_color2;
    var checkboxX2 = checkboxX + checkbox_width;
    var checkboxY2 = checkboxY + checkbox_height;
    var elementWidth = checkboxX + box_width - box_margin_x * 2;
    var animationSpeed = 12;
    var checkboxState = active;

    if (active) {
        color = [217, 157, 86, 255];
        color2 = [217, 157, 86, 255];
    }
    if (id in checkbox_alpha) {
        checkbox_alpha[id] = clamp(checkbox_alpha[id], 0, 255);
    }
    if (active) {
        checkbox_alpha[id] = 255;
    }
    //if(cursor_pos[0] >= checkboxX && cursor_pos[0] <= elementWidth && cursor_pos[1] >= checkboxY && cursor_pos[1] <= checkboxY2 && !slider_changing){
    if (UI.IsCursorInBox(checkboxX, checkboxY, box_width - box_margin_x * 2, checkbox_height) && !slider_changing) {
        if (id in script_items) {
            var circle_y_start = checkboxY + (checkbox_height / 2) + 1;
            var circle_x_start = elementWidth - 10;
            if (hint !== "") {
                circle_x_start = elementWidth - 28;
            }
            renderSmallCircle(circle_x_start, circle_y_start, element_active_color);
            //Render.FilledCircle(elementWidth - 27, checkboxY + (checkbox_height / 2), 3, element_active_color);
            //Render.FilledRect(elementWidth - 27, checkboxY + (checkbox_height / 2) - 2, 4, 4, element_active_color);
            if (cursor_pos[0] >= circle_x_start - 4 && cursor_pos[0] <= circle_x_start + 12 && cursor_pos[1] >= checkboxY && cursor_pos[1] <= checkboxY2) {
                hint_text = "This function has settings in the Script items";
                //hint_size = Render.TextSizeCustom(hint_text, menu_font);
                hint_x = cursor_pos[0] + box_margin_x;
                /*var hint_overflowing_menu = (hint_x + hint_size[0] + 3 > x + width + 50);
                var hint_overflowing_screen = (hint_x - hint_size[0] - 9 < screen_size[0]) && (hint_x + hint_size[0] + 9 > screen_size[0]);
                var hint_overflowing = (hint_overflowing_screen && !right) || (right && !hint_overflowing_screen);*/
                var hint_overflowing = hint_x - 100 > screen_size[0] / 2;
                if (hint_overflowing) {
                    hint_x = cursor_pos[0] - (box_margin_x * 2) - hint_size[0];
                }
                hint_y = cursor_pos[1] + checkbox_height;
            }
        }
        if (hint !== "") {
            var hint_icon_font = Render.AddFont("menu_font", 12, 300);
            Render.StringCustom(elementWidth - 16, checkboxY - 1, 0, "G", text_color, hint_icon_font);

            if (cursor_pos[0] >= elementWidth - 17 && cursor_pos[0] <= elementWidth + 1 && cursor_pos[1] >= checkboxY && cursor_pos[1] <= checkboxY2) {
                hint_text = hint;
                //hint_size = Render.TextSizeCustom(hint_text, menu_font);
                hint_x = cursor_pos[0] + box_margin_x;
                /*var hint_overflowing_menu = (hint_x + hint_size[0] + 3 > x + width + 50);
                var hint_overflowing_screen = (hint_x - hint_size[0] - 9 < screen_size[0]) && (hint_x + hint_size[0] + 9 > screen_size[0]);
                var hint_overflowing = (hint_overflowing_screen && !right) || (right && !hint_overflowing_screen);*/
                var hint_overflowing = hint_x - 100 > screen_size[0] / 2;
                if (hint_overflowing) {
                    hint_x = cursor_pos[0] - (box_margin_x * 2) - hint_size[0];
                }
                hint_y = cursor_pos[1] + checkbox_height;
            }
        }
    }
    if (UI.IsCursorInBox(checkboxX - 1, checkboxY - 1, textX - checkboxX + text_size[0] + 1, checkbox_height + 3) && !slider_changing) {
        if (Input.IsKeyPressed(0x01) && !is_moving) {
            if (!click_block) {
                checkboxState = !checkboxState;
                UI.SetValue("Script items", name_text + "_" + id, !GetVal(id));
                click_block = true;
            }
            color = [217, 157, 86, 255];
        } else {
            click_block = false;
        }
        color2 = [217, 157, 86, 255];
        if (!(id in checkbox_alpha)) {
            checkbox_alpha[id] = 0;
        }
        color2[3] = (checkbox_alpha[id] = clamp(checkbox_alpha[id] + animationSpeed, 0, 255));
    } else {
        if ((id in checkbox_alpha) && checkbox_alpha[id] > 5 && !GetVal(id)) {
            color2 = [217, 157, 86, 255];
            color2[3] = (checkbox_alpha[id] = clamp(checkbox_alpha[id] - animationSpeed, 0, 255));
        }
    }

    //Inactive border
    //Vertical
    Render.Line(checkboxX, checkboxY + 1, checkboxX, checkboxY + checkbox_height - 2, element_border_color2);
    Render.Line(checkboxX + checkbox_width - 1, checkboxY + 1, checkboxX + checkbox_width - 1, checkboxY + checkbox_height - 2, element_border_color2);
    //Horizontal
    Render.Line(checkboxX + 1, checkboxY, checkboxX + checkbox_width - 2, checkboxY, element_border_color2);
    Render.Line(checkboxX + 1, checkboxY + checkbox_height - 1, checkboxX + checkbox_width - 2, checkboxY + checkbox_height - 1, element_border_color2);
    //Fill
    Render.FilledRect(checkboxX + 1, checkboxY + 1, checkbox_width - 2, checkbox_height - 2, element_border_color2);

    //Active border
    //Vertical
    Render.Line(checkboxX, checkboxY + 1, checkboxX, checkboxY + checkbox_height - 2, color2);
    Render.Line(checkboxX + checkbox_width - 1, checkboxY + 1, checkboxX + checkbox_width - 1, checkboxY + checkbox_height - 2, color2);
    //Horizontal
    Render.Line(checkboxX + 1, checkboxY, checkboxX + checkbox_width - 2, checkboxY, color2);
    Render.Line(checkboxX + 1, checkboxY + checkbox_height - 1, checkboxX + checkbox_width - 2, checkboxY + checkbox_height - 1, color2);
    //Fill
    Render.FilledRect(checkboxX + 1, checkboxY + 1, checkbox_width - 2, checkbox_height - 2, color2);

    //Background
    //Vertical
    Render.Line(checkboxX + 1, checkboxY + 2, checkboxX + 1, checkboxY + checkbox_height - 3, color);
    Render.Line(checkboxX + checkbox_width - 2, checkboxY + 2, checkboxX + checkbox_width - 2, checkboxY + checkbox_height - 3, color);
    //Horizontal
    Render.Line(checkboxX + 2, checkboxY + 1, checkboxX + checkbox_width - 3, checkboxY + 1, color);
    Render.Line(checkboxX + 2, checkboxY + checkbox_height - 2, checkboxX + checkbox_width - 3, checkboxY + checkbox_height - 2, color);
    //Fill
    Render.FilledRect(checkboxX + 2, checkboxY + 2, checkbox_width - 4, checkbox_height - 4, color);

    //Checkbox name
    Render.StringCustom(textX, checkboxY - 2, 0, name, text_color, menu_font);

    //my nickname is numberless. like z x s l e e b u but without spaces
    //why i put so many comments in code?
    //i just wanna to be a bigname, you know :)
    //btw this mеnu іs crеаtеd bу @zхslееbu

    //the menu looks good ngl tho huge respect to him

    return checkboxState;
}

function renderHints() {
    if (hint_text === "") return;
    hint_size = Render.TextSizeCustom(hint_text, menu_font);
    rounded_rect(hint_x, hint_y, hint_size[0] + 8, hint_size[1] + 4, 2, hintbox_color);
    Render.StringCustom(hint_x + 4, hint_y + 1, 0, hint_text, text_color, menu_font);
    //0TC3 C0RD M4D3 BY @Z X SL3E B U

    //bro thats just cringe 

}

function renderSlider(name, sliderY, right, id, min, max, append, master) {
    var sliderX = ((right) ? x + 15 + box_width + 24 : x + 15) + box_text_margin_x - 6;
    var sliderWidth = box_width - box_text_margin_x * 2 + 14;
    var value = GetVal(id);
    var value_start = -1;
    var percent = (sliderWidth - value_start) / Math.abs(max - min);
    var progress = value * percent + value_start;
    value = (value > max) ? max : value;
    value = (value <= min) ? min : value;
    progress = value * percent + value_start - (min * percent);
    progress = (progress > sliderWidth) ? sliderWidth : progress;
    progress = (value == max) ? sliderWidth - 2 : progress;

    //if((cursor_pos[0] >= sliderX && cursor_pos[0] <= sliderX + sliderWidth - 1 && cursor_pos[1] >= sliderY + 16 && cursor_pos[1] <= sliderY + 16 + slider_height && slider_changing == false) || slider_changing == id){
    if ((UI.IsCursorInBox(sliderX, sliderY + 16, sliderWidth - 1, slider_height) && slider_changing == false) || slider_changing == id) {
        if (Input.IsKeyPressed(0x01) && !is_moving) {
            value = clamp(Math.round(((cursor_pos[0] - sliderX) / percent) + min), min, max);
            UI.SetValue("Script items", name_text + "_" + id, value);
            progress = value * percent + value_start - (min * percent);
            progress = (progress > sliderWidth) ? sliderWidth : progress;
            progress = (value == max) ? sliderWidth - 2 : progress;
            slider_changing = id;
            UI.SetValue("Script items", name_text + "_" + id + "_not_def", true);
        } else {
            slider_changing = false;
        }

        var value_size = Render.TextSizeCustom(value + append, menu_font);

        var slider_hint_x = (cursor_pos[0] >= (sliderX + sliderWidth - value_size[0] - 8 - 12)) ? (sliderX + sliderWidth - value_size[0] - 9) : cursor_pos[0] + 12;
        slider_hint_x = (slider_hint_x <= sliderX) ? sliderX : slider_hint_x;
        var slider_hint_y = sliderY + 16 + slider_height + 2;
        hint_x = slider_hint_x;
        hint_y = slider_hint_y;
        hint_text = value + append;
        /*Render.FilledRect(slider_hint_x, slider_hint_y, value_size[0] + 8, value_size[1] + 4, hintbox_color);
        Render.StringCustom(slider_hint_x + 4, slider_hint_y + 1, 0, value + append, text_color, menu_font);*/
    }

    //Slider name
    Render.StringCustom(sliderX + 6, sliderY - 4, 0, name, text_color, menu_font);

    //Slider background
    Render.FilledRect(sliderX, sliderY + 16, sliderWidth, slider_height, element_color);

    //Slider border
    //Horizontal
    Render.Line(sliderX, sliderY + 16, sliderX + sliderWidth - 1, sliderY + 16, element_border_color2);
    Render.Line(sliderX, sliderY + 16 + slider_height - 1, sliderX + sliderWidth - 1, sliderY + 16 + slider_height - 1, element_border_color2);
    //Vertical
    Render.Line(sliderX - 1, sliderY + 17, sliderX - 1, sliderY + 17 + slider_height - 3, element_border_color2);
    Render.Line(sliderX + sliderWidth, sliderY + 17, sliderX + sliderWidth, sliderY + 17 + slider_height - 3, element_border_color2);
    //Curves
    Render.Line(sliderX - 1, sliderY + 17, sliderX + 5, sliderY + 16, element_border_color2);
    Render.Line(sliderX - 1, sliderY + 14 + slider_height, sliderX + 5, sliderY + 15 + slider_height, element_border_color2);
    Render.Line(sliderX + sliderWidth, sliderY + 17, sliderX + sliderWidth - 3, sliderY + 16, element_border_color2);
    Render.Line(sliderX + sliderWidth, sliderY + 14 + slider_height, sliderX + sliderWidth - 3, sliderY + 15 + slider_height, element_border_color2);


    //Slider progress
    Render.Line(sliderX + 1, sliderY + 17, sliderX + 1, sliderY + 16 + slider_height - 2, element_active_color);
    Render.Line(sliderX, sliderY + 18, sliderX, sliderY + 16 + slider_height - 3, element_active_color);
    Render.FilledRect(sliderX + 2, sliderY + 17, progress - 2, slider_height - 2, element_active_color);
    if (progress > 2) {
        Render.Line(sliderX + progress, sliderY + 17, sliderX + progress, sliderY + 16 + slider_height - 2, element_active_color);
        Render.Line(sliderX + progress + 1, sliderY + 18, sliderX + progress + 1, sliderY + 16 + slider_height - 3, element_active_color);
    }
}

function renderLabel(name, labelX, labelY) {
    Render.StringCustom(labelX, labelY, 0, name, text_color, menu_font);
}

function renderSmallCircle(x, y, color) {
    Render.Line(x, y + 1, x, y - 2, color);
    Render.Line(x + 1, y + 2, x + 1, y - 3, color);
    Render.Line(x + 2, y + 2, x + 2, y - 3, color);
    Render.Line(x + 3, y + 2, x + 3, y - 3, color);
    Render.Line(x + 4, y + 1, x + 4, y - 2, color);
}

function rounded_rect(from_x, from_y, to_x, to_y, radius, color) {
    var diameter = radius * 2;

    Render.FilledRect(from_x + radius, from_y, to_x - diameter, to_y, color); // vertical
    Render.FilledRect(from_x, from_y + radius, to_x, to_y - diameter, color); // horizontal

    // top
    Render.FilledCircle(from_x + radius, from_y + radius, radius, color); // left
    if (radius < 5) {
        Render.FilledCircle(from_x + to_x - radius - 2, from_y + radius, radius + 1, color); // right
    } else {
        Render.FilledCircle(from_x + to_x - radius, from_y + radius, radius, color); // right
    }

    // bottom
    Render.FilledCircle(from_x + radius, from_y + to_y - radius, radius, color); // left
    if (radius < 5) {
        Render.FilledCircle(from_x + to_x - radius - 2, from_y + to_y - radius - 2, radius + 2, color); // right
    } else {
        Render.FilledCircle(from_x + to_x - radius, from_y + to_y - radius, radius, color); // right
    }
}

function onUnload() {
    //cuz i luv you and appreciate your time :)
    Exploit.EnableRecharge();
    Exploit.Recharge();
    AntiAim.SetOverride(0);
    Convar.SetString("cl_lock_camera", "0");
    Cheat.ExecuteCommand("-attack2");
    Convar.SetString("fog_override", "0");
    Convar.SetFloat("mat_ambient_light_r", 0);
    Convar.SetFloat("mat_ambient_light_g", 0);
    Convar.SetFloat("mat_ambient_light_b", 0);
    Convar.SetString("mat_force_tonemap_scale", "0");
    Convar.SetFloat("r_modelAmbientMin", 0);
    Cheat.ExecuteCommand("fov_cs_debug 0");
    var entities = Entity.GetEntities();
    for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        var name = Entity.GetClassName(entity);
        if (name === "CEnvTonemapController") {
            var props = 0;
            if (props == 0) {
                Entity.SetProp(entity, 'CEnvTonemapController', 'm_flCustomBloomScale', 0);
                props = 1;
            }
            if (props == 1) {
                Entity.SetProp(entity, 'CEnvTonemapController', 'm_bUseCustomAutoExposureMin', false);
                Entity.SetProp(entity, 'CEnvTonemapController', 'm_bUseCustomAutoExposureMax', false);
                Entity.SetProp(entity, 'CEnvTonemapController', 'm_bUseCustomBloomScale', false);
            }
        }
    }
    for (checkbox in script_items) {
        checkbox = script_items[checkbox];
        for (script_item in checkbox) {
            script_item = checkbox[script_item];
            UI.SetEnabled("Script items", script_item["name"], false);
        }
    }
}

log("Initialized all the drawing functions etc");

//Prioritizing rage functions to have better response time
//idc if it will not work :D

//Main
Global.RegisterCallback("Draw", "updateVars");

//Rage
Global.RegisterCallback("CreateMove", "safetySystem");
Global.RegisterCallback("CreateMove", "dormantAim");
Global.RegisterCallback("weapon_fire", "shoot");
Global.RegisterCallback("CreateMove", "safeAWP");
Global.RegisterCallback("CreateMove", "jumpscout");
Global.RegisterCallback("CreateMove", "minDamageOverride");
Global.RegisterCallback("CreateMove", "safePointOnDT");
Global.RegisterCallback("CreateMove", "autoscope");
Global.RegisterCallback("CreateMove", "forceBackshoot");
Global.RegisterCallback("CreateMove", "preferBaimOnDT");
Global.RegisterCallback("CreateMove", "doubletapBoost");
Global.RegisterCallback("weapon_fire", "on_weapon_fire");
Global.RegisterCallback("CreateMove", "playerList");
Global.RegisterCallback("CreateMove", "zeusHitchance");
Global.RegisterCallback("CreateMove", "autoPeek");
Global.RegisterCallback("ragebot_fire", "ragebotFire");
Global.RegisterCallback("CreateMove", "hkCreateMove");
Global.RegisterCallback("Draw", "hkDraw");
Global.RegisterCallback("ragebot_fire", "hkRagebotFire");
Global.RegisterCallback("ragebot_fire", "on_ragebot_fire");
Global.RegisterCallback("player_hurt", "on_player_hurt");
Global.RegisterCallback("CreateMove", "on_create_move");
Global.RegisterCallback("player_death", "on_player_death2")
Global.RegisterCallback("round_start", "reset_miss_logs");
Global.RegisterCallback("ragebot_fire", "onShot");
Global.RegisterCallback("CreateMove", "userCMD1");

//Functions that can delay
Global.RegisterCallback("hegrenade_detonate", "on_hegrenade_detonate");
Global.RegisterCallback("player_hurt", "skeletonOnHit");
Global.RegisterCallback("player_hurt", "addHitShot");
Global.RegisterCallback("player_death", "effectOnKill2");

//Anti Aim
Global.RegisterCallback("CreateMove", "idealYaw");
Global.RegisterCallback("CreateMove", "lowdelta");
Global.RegisterCallback("CreateMove", "antiBruteforce3");
Global.RegisterCallback("CreateMove", "oppositeOnExploits");
//Global.RegisterCallback("CreateMove", "pitchZeroOnLand");
Global.RegisterCallback("CreateMove", "legBreaker");
Global.RegisterCallback("CreateMove", "slowmotion");
Global.RegisterCallback("CreateMove", "standingAutoInvert");
Global.RegisterCallback("CreateMove", "mmFD");
Global.RegisterCallback("CreateMove", "alternativeFakelag");
Global.RegisterCallback("bullet_impact", "antiBruteforce");
Global.RegisterCallback("player_hurt", "antiBruteforce2");
Global.RegisterCallback("round_start", "alternativeFakelag2");
Global.RegisterCallback("CreateMove", "pingSpikeOnKey");
Global.RegisterCallback("CreateMove", "fixes");
Global.RegisterCallback("Draw", "legitAA");
Global.RegisterCallback("CreateMove", "freestanding");
Global.RegisterCallback("CreateMove", "baseAA");
Global.RegisterCallback("Draw", "hud");
Global.RegisterCallback("CreateMove", "jitter");
Global.RegisterCallback("player_hurt", "invert");
Global.RegisterCallback("Draw", "keys");

//Visuals
Global.RegisterCallback("Draw", "worldColor");
Global.RegisterCallback("Draw", "bulletTracer2");
Global.RegisterCallback("Draw", "betterScope");
Global.RegisterCallback("FrameStageNotify", "betterScope2");
Global.RegisterCallback("Draw", "skeletonOnHit2");
Global.RegisterCallback("Draw", "trail");
Global.RegisterCallback("Draw", "transparencyOnNade");
Global.RegisterCallback("Draw", "betterCrosshair");
Global.RegisterCallback("Draw", "effectOnKill");
Global.RegisterCallback("Draw", "eyeTracers");
Global.RegisterCallback("Draw", "rainbowBar");
Global.RegisterCallback("Draw", "customFog");
Global.RegisterCallback("Draw", "entities");
Global.RegisterCallback("Draw", "nadeWarning");
Global.RegisterCallback("Draw", "nadeTracer");
Global.RegisterCallback("Draw", "nadeTracer2");
Global.RegisterCallback("Draw", "nadeCircle");
Global.RegisterCallback("Draw", "registerBetterGlowChams");
Global.RegisterCallback("bullet_impact", "bulletTracer");
Global.RegisterCallback("player_connect_full", "on_player_connect");
Global.RegisterCallback("FrameStageNotify", "aspectRatio");
Global.RegisterCallback("FrameStageNotify", "agentChanger");
Global.RegisterCallback("Draw", "armsColor");
Global.RegisterCallback("Material", "betterGlowChams");
Global.RegisterCallback("Draw", "hitShotsHandle");
Global.RegisterCallback("Draw", "drawPlayerSafeHead");

//Misc
Global.RegisterCallback("Draw", "fps_boost");
Global.RegisterCallback("Draw", "menu_wtcheck")
Global.RegisterCallback("Draw", "autostrafeFix");
Global.RegisterCallback("CreateMove", "enemyLocation");
Global.RegisterCallback("FrameStageNotify", "zoomFix");
Global.RegisterCallback("CreateMove", "clantagOnPeek");
Global.RegisterCallback("vote_options", "onVoteOptions");
Global.RegisterCallback("vote_cast", "voteRevealer");
Global.RegisterCallback("CreateMove", "players");
Global.RegisterCallback("player_death", "resetVars");
Global.RegisterCallback("player_death", "killsay");
Global.RegisterCallback("Draw", "partyMode");
Global.RegisterCallback("game_newmap", "partyMode2");
Global.RegisterCallback("FrameStageNotify", "musicKit");
Global.RegisterCallback("Draw", "clantag");
Global.RegisterCallback("player_connect_full", "antiBuyBot");
Global.RegisterCallback("CreateMove", "ClearChat");
Global.RegisterCallback("CreateMove", "hidechat");
Global.RegisterCallback('CreateMove', 'on_tick');
Global.RegisterCallback('molotov_detonate', 'molotov_detonated');
Global.RegisterCallback('Draw', 'on_draw_molotov');
Global.RegisterCallback("Draw", "main_exploits");
Global.RegisterCallback("CreateMove", "anticrash");
Global.RegisterCallback("Draw", "Weaponlist");
Global.RegisterCallback("CreateMove", "checkDelays");
Global.RegisterCallback("CreateMove", "on_create_move");
Global.RegisterCallback("Draw", "grenade_helper");
Global.RegisterCallback("Draw", "drawhelper")
Global.RegisterCallback("ragebot_fire", "ragebot_fire2");
Global.RegisterCallback("item_purchase", "item_purchase");
Global.RegisterCallback("player_hurt", "hitlog");
Global.RegisterCallback("Draw", "onDrawHL");
Global.RegisterCallback("Draw", "removelogs");
//Menu
Global.RegisterCallback("Draw", "scriptItems");
Global.RegisterCallback("Draw", "loadSettings");
Global.RegisterCallback("Draw", "darkMenu");
Global.RegisterCallback("Draw", "drawMenu");
Global.RegisterCallback("Draw", "moveMenu");
Global.RegisterCallback("Unload", "onUnload");

//Buylist
Global.RegisterCallback('Draw', 'onDraw');
Global.RegisterCallback('item_pickup', 'on_item_pickup');
Global.RegisterCallback('item_remove', 'on_item_remove');
Global.RegisterCallback('item_equip', 'on_item_equip');
Global.RegisterCallback('player_death', 'on_player_death');
Global.RegisterCallback('cs_game_disconnected', 'on_cs_game_disconnected');

//Indicators bar
Global.RegisterCallback("Draw", "main_aa");

//Info bar
Global.RegisterCallback("Draw", "infobar");

//Net graph
Global.RegisterCallback("Draw", "netgraph");

//Keybinds
Global.RegisterCallback("Draw", "keybinds");

//Spectator list
Global.RegisterCallback("Draw", "specList");

//Team skeet
Global.RegisterCallback("Draw", "drawteamskeet");
Global.RegisterCallback("Draw", "check_f");

//Auto join team
Global.RegisterCallback("player_connect_full", "on_player_connect_full");
Global.RegisterCallback("cs_match_end_restart", "jointeam");

//Auto stop DT
Global.RegisterCallback("ragebot_fire", "onRageShoot");
Global.RegisterCallback("CreateMove", "onCM");
Global.RegisterCallback("round_start", "reset");

// //Teleport on peek
// // Global.RegisterCallback("Draw", "update_menu");
// Global.RegisterCallback("CreateMove", "on_move");
// Global.RegisterCallback("round_start", "reset_shit");
// Global.RegisterCallback("Draw", "tpindicator");

log("Initialized all the callbacks");