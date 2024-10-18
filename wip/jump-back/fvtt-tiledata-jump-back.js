{
  "flags": {
    "monks-active-tiles": {
      "name": "",
      "active": true,
      "record": false,
      "restriction": "all",
      "controlled": "all",
      "trigger": [
        "enter"
      ],
      "allowpaused": false,
      "usealpha": false,
      "pointer": false,
      "vision": true,
      "pertoken": false,
      "minrequired": 0,
      "cooldown": null,
      "chance": 100,
      "fileindex": 0,
      "actions": [
        {
          "action": "anchor",
          "data": {
            "tag": "_up-left",
            "stop": true
          },
          "id": "hvBFkalrURWMDEgS"
        },
        {
          "action": "movement",
          "data": {
            "snap": true
          },
          "id": "KiDStOQUHWHSxqvO"
        },
        {
          "action": "monks-tokenbar.requestroll",
          "data": {
            "entity": {
              "id": "token",
              "name": "Triggering Token"
            },
            "request": "attribute:perception",
            "dc": "30",
            "flavor": "What's that?",
            "rollmode": "gmroll",
            "silent": false,
            "fastforward": false,
            "usetokens": "all",
            "continue": "always"
          },
          "id": "VoAJrX6yQQOzhmuF"
        },
        {
          "action": "monks-tokenbar.filterrequest",
          "data": {
            "passed": "up-left-pass",
            "failed": "fail",
            "resume": ""
          },
          "id": "AmRbIAJPUQllT2rK"
        },
        {
          "action": "anchor",
          "data": {
            "tag": "_up-right",
            "stop": true
          },
          "id": "167NmeLJk2aThc9c"
        },
        {
          "action": "movement",
          "data": {
            "snap": true
          },
          "id": "z4RbUgcbUSrFwH3H"
        },
        {
          "action": "monks-tokenbar.requestroll",
          "data": {
            "entity": {
              "id": "token",
              "name": "Triggering Token"
            },
            "request": "attribute:perception",
            "dc": "30",
            "flavor": "What's that?",
            "rollmode": "gmroll",
            "silent": false,
            "fastforward": false,
            "usetokens": "all",
            "continue": "always"
          },
          "id": "5XR6MjZR89gq83pS"
        },
        {
          "action": "monks-tokenbar.filterrequest",
          "data": {
            "passed": "up-right-pass",
            "failed": "fail",
            "resume": ""
          },
          "id": "iAxGbxRMVUTXYJZ6"
        },
        {
          "action": "anchor",
          "data": {
            "tag": "_up",
            "stop": true
          },
          "id": "zx00RlnpIAzhq3hn"
        },
        {
          "action": "movement",
          "data": {
            "snap": true
          },
          "id": "3oI5gJk71Py4Urq0"
        },
        {
          "action": "monks-tokenbar.requestroll",
          "data": {
            "entity": {
              "id": "token",
              "name": "Triggering Token"
            },
            "request": "attribute:perception",
            "dc": "30",
            "flavor": "What's that?",
            "rollmode": "gmroll",
            "silent": false,
            "fastforward": false,
            "usetokens": "all",
            "continue": "always"
          },
          "id": "2j2UheBfElNxNJ0y"
        },
        {
          "action": "monks-tokenbar.filterrequest",
          "data": {
            "passed": "up-pass",
            "failed": "fail",
            "resume": ""
          },
          "id": "GbkBd7A5wbkrLlVL"
        },
        {
          "action": "anchor",
          "data": {
            "tag": "_down-left",
            "stop": true
          },
          "id": "ToD7WkRvpxBmDMDw"
        },
        {
          "action": "movement",
          "data": {
            "snap": true
          },
          "id": "AItW2VZN3DupUP7d"
        },
        {
          "action": "monks-tokenbar.requestroll",
          "data": {
            "entity": {
              "id": "token",
              "name": "Triggering Token"
            },
            "request": "attribute:perception",
            "dc": "30",
            "flavor": "What's that?",
            "rollmode": "gmroll",
            "silent": false,
            "fastforward": false,
            "usetokens": "all",
            "continue": "always"
          },
          "id": "7g5X9qWF4xZ3UZ2x"
        },
        {
          "action": "monks-tokenbar.filterrequest",
          "data": {
            "passed": "down-left-pass",
            "failed": "fail",
            "resume": ""
          },
          "id": "Yy3LOqMXGvZVk0D3"
        },
        {
          "action": "anchor",
          "data": {
            "tag": "_down-right",
            "stop": true
          },
          "id": "E3UKA44uRZSRmmZo"
        },
        {
          "action": "movement",
          "data": {
            "snap": true
          },
          "id": "u3X2WQhUs03KTxdk"
        },
        {
          "action": "monks-tokenbar.requestroll",
          "data": {
            "entity": {
              "id": "token",
              "name": "Triggering Token"
            },
            "request": "attribute:perception",
            "dc": "30",
            "flavor": "What's that?",
            "rollmode": "gmroll",
            "silent": false,
            "fastforward": false,
            "usetokens": "all",
            "continue": "always"
          },
          "id": "pJlFBjPWo9oB7NsF"
        },
        {
          "action": "monks-tokenbar.filterrequest",
          "data": {
            "passed": "down-right-pass",
            "failed": "fail",
            "resume": ""
          },
          "id": "72n5GZ6tDThe7YdS"
        },
        {
          "action": "anchor",
          "data": {
            "tag": "_down",
            "stop": true
          },
          "id": "bOcGdVwzemBZ18bX"
        },
        {
          "action": "movement",
          "data": {
            "snap": true
          },
          "id": "l8HXZrCWey7JH0Ko"
        },
        {
          "action": "monks-tokenbar.requestroll",
          "data": {
            "entity": {
              "id": "token",
              "name": "Triggering Token"
            },
            "request": "attribute:perception",
            "dc": "30",
            "flavor": "What's that?",
            "rollmode": "gmroll",
            "silent": false,
            "fastforward": false,
            "usetokens": "all",
            "continue": "always"
          },
          "id": "wGLnNl5VryRkBwOI"
        },
        {
          "action": "monks-tokenbar.filterrequest",
          "data": {
            "passed": "down-pass",
            "failed": "fail",
            "resume": ""
          },
          "id": "99jEYHlRQvGm1J5A"
        },
        {
          "action": "anchor",
          "data": {
            "tag": "_left",
            "stop": true
          },
          "id": "HQJFwTEfJy1JBYIC"
        },
        {
          "action": "movement",
          "data": {
            "snap": true
          },
          "id": "VuijvLAG17ecMku1"
        },
        {
          "action": "monks-tokenbar.requestroll",
          "data": {
            "entity": {
              "id": "token",
              "name": "Triggering Token"
            },
            "request": "attribute:perception",
            "dc": "30",
            "flavor": "What's that?",
            "rollmode": "gmroll",
            "silent": false,
            "fastforward": false,
            "usetokens": "all",
            "continue": "always"
          },
          "id": "I7mbaPJ2gxB0kPqB"
        },
        {
          "action": "monks-tokenbar.filterrequest",
          "data": {
            "passed": "left-pass",
            "failed": "fail",
            "resume": ""
          },
          "id": "srX94TR6zCsPEGSh"
        },
        {
          "action": "anchor",
          "data": {
            "tag": "_right",
            "stop": true
          },
          "id": "gFm08D8mcHSR8hZE"
        },
        {
          "action": "movement",
          "data": {
            "snap": true
          },
          "id": "8KbzRmqN6YwzT340"
        },
        {
          "action": "monks-tokenbar.requestroll",
          "data": {
            "entity": {
              "id": "token",
              "name": "Triggering Token"
            },
            "request": "attribute:perception",
            "dc": "30",
            "flavor": "What's that?",
            "rollmode": "gmroll",
            "silent": false,
            "fastforward": false,
            "usetokens": "all",
            "continue": "always"
          },
          "id": "5GLK9aAXDVAbskG3"
        },
        {
          "action": "monks-tokenbar.filterrequest",
          "data": {
            "passed": "right-pass",
            "failed": "fail",
            "resume": ""
          },
          "id": "VAPa0AVRncFL5BHV"
        },
        {
          "action": "anchor",
          "data": {
            "tag": "up-left-pass",
            "stop": true
          },
          "id": "3vbZhwOL3LOo00Gc"
        },
        {
          "action": "chatmessage",
          "data": {
            "flavor": "",
            "text": "I think I see something....",
            "entity": {
              "id": "token",
              "name": "Triggering Token"
            },
            "incharacter": true,
            "chatbubble": "true",
            "showto": "everyone",
            "language": ""
          },
          "id": "SUoW3BwUFRO6Po7z"
        },
        {
          "action": "runcode",
          "data": {
            "code": "// up-left\nconst gridSize = canvas.scene?.grid?.size || 100;\n\nawait token.update({\n  x: token.x + gridSize,\n  y: token.y + gridSize,\n});"
          },
          "id": "WfsFAmhehzwXKc8X"
        },
        {
          "action": "anchor",
          "data": {
            "tag": "up-right-pass",
            "stop": true
          },
          "id": "nSG0KTKdaLiNWBbZ"
        },
        {
          "action": "chatmessage",
          "data": {
            "flavor": "",
            "text": "I think I see something....",
            "entity": {
              "id": "token",
              "name": "Triggering Token"
            },
            "incharacter": true,
            "chatbubble": "true",
            "showto": "everyone",
            "language": ""
          },
          "id": "NAeR0AFaXq8vtgpo"
        },
        {
          "action": "runcode",
          "data": {
            "code": "// up-right\nconst gridSize = canvas.scene?.grid?.size || 100;\n\nawait token.update({\n  x: token.x - gridSize,\n  y: token.y + gridSize,\n});\n"
          },
          "id": "QNDaEjNScRiuSkd7"
        },
        {
          "action": "anchor",
          "data": {
            "tag": "up-pass",
            "stop": true
          },
          "id": "ef897chfCGedMfnh"
        },
        {
          "action": "chatmessage",
          "data": {
            "flavor": "",
            "text": "I think I see something....",
            "entity": {
              "id": "token",
              "name": "Triggering Token"
            },
            "incharacter": true,
            "chatbubble": "true",
            "showto": "everyone",
            "language": ""
          },
          "id": "F4QcLQpzWkMXATHw"
        },
        {
          "action": "runcode",
          "data": {
            "code": "// up\nconst gridSize = canvas.scene?.grid?.size || 100;\n\nawait token.update({\n  y: token.y + gridSize,\n});"
          },
          "id": "fic3iOt4TQi4gDwo"
        },
        {
          "action": "anchor",
          "data": {
            "tag": "down-left-pass",
            "stop": true
          },
          "id": "UIAVGr7TiiyHvvLS"
        },
        {
          "action": "chatmessage",
          "data": {
            "flavor": "",
            "text": "I think I see something....",
            "entity": {
              "id": "token",
              "name": "Triggering Token"
            },
            "incharacter": true,
            "chatbubble": "true",
            "showto": "everyone",
            "language": ""
          },
          "id": "zKqzTzm8nKhTsaH2"
        },
        {
          "action": "runcode",
          "data": {
            "code": "// down-left\nconst gridSize = canvas.scene?.grid?.size || 100;\n\nawait token.update({\n  x: token.x + gridSize ,\n  y: token.y - gridSize ,\n});"
          },
          "id": "VuaXnuRpECOgk088"
        },
        {
          "action": "anchor",
          "data": {
            "tag": "down-right-pass",
            "stop": true
          },
          "id": "GoLjPN8l7lXwY6i1"
        },
        {
          "action": "chatmessage",
          "data": {
            "flavor": "",
            "text": "I think I see something....",
            "entity": {
              "id": "token",
              "name": "Triggering Token"
            },
            "incharacter": true,
            "chatbubble": "true",
            "showto": "everyone",
            "language": ""
          },
          "id": "LY6TnOjdDz7Gbl5r"
        },
        {
          "action": "runcode",
          "data": {
            "code": "// down-right\nconst gridSize = canvas.scene?.grid?.size || 100;\n\nawait token.update({\n  x: token.x - gridSize ,\n  y: token.y - gridSize,\n});"
          },
          "id": "saaOgzmUyLr7dWo3"
        },
        {
          "action": "anchor",
          "data": {
            "tag": "down-pass",
            "stop": true
          },
          "id": "Fe1U1HuyBuDDIBMc"
        },
        {
          "action": "chatmessage",
          "data": {
            "flavor": "",
            "text": "I think I see something....",
            "entity": {
              "id": "token",
              "name": "Triggering Token"
            },
            "incharacter": true,
            "chatbubble": "true",
            "showto": "everyone",
            "language": ""
          },
          "id": "tuCoWzVU3vpYvdmC"
        },
        {
          "action": "runcode",
          "data": {
            "code": "// down\nconst gridSize = canvas.scene?.grid?.size || 100;\n\nawait token.update({\n  y: token.y - gridSize ,\n});"
          },
          "id": "RtTZNs0PTjtOKl7q"
        },
        {
          "action": "anchor",
          "data": {
            "tag": "left-pass",
            "stop": true
          },
          "id": "lO7RKXosK0n4YaMo"
        },
        {
          "action": "chatmessage",
          "data": {
            "flavor": "",
            "text": "I think I see something....",
            "entity": {
              "id": "token",
              "name": "Triggering Token"
            },
            "incharacter": true,
            "chatbubble": "true",
            "showto": "everyone",
            "language": ""
          },
          "id": "V37XFh29d3gXpMtc"
        },
        {
          "action": "runcode",
          "data": {
            "code": "// left\nconst gridSize = canvas.scene?.grid?.size || 100;\n\nawait token.update({\n  x: token.x + gridSize,\n});"
          },
          "id": "F2jI4nOVyIlcynPG"
        },
        {
          "action": "anchor",
          "data": {
            "tag": "right-pass",
            "stop": true
          },
          "id": "rvc8A2l4pprGVNHa"
        },
        {
          "action": "chatmessage",
          "data": {
            "flavor": "",
            "text": "I think I see something....",
            "entity": {
              "id": "token",
              "name": "Triggering Token"
            },
            "incharacter": true,
            "chatbubble": "true",
            "showto": "everyone",
            "language": ""
          },
          "id": "nWsAeTPJmkal8GqO"
        },
        {
          "action": "runcode",
          "data": {
            "code": "// right\nconst gridSize = canvas.scene?.grid?.size || 100;\n\nawait token.update({\n  x: token.x - gridSize ,\n});"
          },
          "id": "KStN6aw2JLZdY3u7"
        },
        {
          "action": "anchor",
          "data": {
            "tag": "fail",
            "stop": true
          },
          "id": "bwyc5ST7f04oXZ0W"
        },
        {
          "action": "chatmessage",
          "data": {
            "flavor": "",
            "text": "I failed",
            "entity": {
              "id": "token",
              "name": "Triggering Token"
            },
            "incharacter": true,
            "chatbubble": "true",
            "showto": "everyone",
            "language": ""
          },
          "id": "o3bDRraBHd3EXMX8"
        },
        {
          "action": "delay",
          "data": {
            "delay": "1"
          },
          "id": "3TPW6MrORCJWmVPP"
        },
        {
          "action": "goto",
          "data": {
            "tag": "done",
            "limit": "",
            "rollmode": "roll",
            "resume": false
          },
          "id": "DAwZJDfDJgOzR5bQ"
        },
        {
          "action": "anchor",
          "data": {
            "tag": "done",
            "stop": true
          },
          "id": "Djtr4URlONNdtTaJ"
        },
        {
          "action": "chatmessage",
          "data": {
            "flavor": "",
            "text": "Done!!!",
            "entity": {
              "id": "token",
              "name": "Triggering Token"
            },
            "incharacter": true,
            "chatbubble": "true",
            "showto": "everyone",
            "language": ""
          },
          "id": "tVU7O6Yh9HW9zfQV"
        }
      ],
      "files": [],
      "variables": {
        "currX": 3200
      }
    },
    "tagger": {
      "tags": [
        "caustic dart trap trigger",
        "Dart Trap Trigger"
      ]
    },
    "exportSource": {
      "world": "pf2e-test",
      "system": "pf2e",
      "coreVersion": "12.331",
      "systemVersion": "6.4.1"
    }
  },
  "texture": {
    "src": null,
    "scaleX": 1,
    "scaleY": 1,
    "tint": "#ffffff",
    "anchorX": 0.5,
    "anchorY": 0.5,
    "offsetX": 0,
    "offsetY": 0,
    "fit": "fill",
    "rotation": 0,
    "alphaThreshold": 0.75
  },
  "x": 3100,
  "y": 1700,
  "width": 300,
  "height": 100,
  "rotation": 0,
  "alpha": 1,
  "elevation": 0,
  "occlusion": {
    "mode": 0,
    "alpha": 0
  },
  "restrictions": {
    "light": false,
    "weather": false
  },
  "video": {
    "loop": true,
    "autoplay": true,
    "volume": 0
  },
  "hidden": false,
  "locked": false,
  "id": "bCKRN9YSpRNBOUUE",
  "name": "Jump back",
  "visible": true,
  "img": null,
  "thumbnail": "modules/monks-active-tiles/img/cube.svg"
}