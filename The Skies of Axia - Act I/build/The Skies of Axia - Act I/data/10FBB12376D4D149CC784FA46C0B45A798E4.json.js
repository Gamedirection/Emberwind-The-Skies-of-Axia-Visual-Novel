GS.dataCache['10FBB12376D4D149CC784FA46C0B45A798E4'] = {
    "uid": "10FBB12376D4D149CC784FA46C0B45A798E4",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "The Last One Out, Get the Lights",
        "type": "vn.scene",
        "parentId": "3FC694F96954274B692AC503F9CAFB0C38DE",
        "chapterUid": "3FC694F96954274B692AC503F9CAFB0C38DE",
        "order": 0,
        "livePreviewDisabled": false,
        "booleanVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "commands": [
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "StarlightCommons.png",
                        "folderPath": "Emberwind Assets/Graphics/Backgrounds",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        }
                    },
                    "layer": 0,
                    "duration": 0,
                    "waitForCompletion": 0,
                    "blendMode": 0,
                    "origin": 0,
                    "zOrder": 0,
                    "loopVertical": 0,
                    "loopHorizontal": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "63E83F1F6976E247086A92E49773205FBFFC",
                "indent": 0
            },
            {
                "id": "gs.PlayMusic",
                "params": {
                    "layer": 0,
                    "loop": 1,
                    "music": {
                        "folderPath": "Emberwind Assets/Audio/Music",
                        "name": "Ember 4 - Caravan.ogg",
                        "volume": "20",
                        "playbackRate": "60"
                    },
                    "fadeInDuration": 30,
                    "playTime": {
                        "min": 10,
                        "max": 30
                    },
                    "playRange": {
                        "start": 10,
                        "end": 20
                    },
                    "playType": 0,
                    "waitForCompletion": 0,
                    "fieldFlags": {
                        "music.volume": 0,
                        "music.playbackRate": 0,
                        "fadeInDuration": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "BD8A43D16A1A7948CC48384096F3DA67C034",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.ShowText",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "viewport": {
                        "type": "ui"
                    },
                    "predefinedPositionId": 0,
                    "positionType": 0,
                    "number": 0,
                    "duration": 0,
                    "waitForCompletion": 0,
                    "blendMode": 0,
                    "positionOrigin": 0,
                    "origin": 0,
                    "zOrder": 0,
                    "text": {
                        "lcId": null,
                        "defaultText": "Click to Continue..."
                    },
                    "position": {
                        "x": 0,
                        "y": 0
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 1,
                        "easing.type": 1,
                        "animation.type": 1,
                        "origin": 1,
                        "positionOrigin": 1,
                        "zOrder": 1,
                        "blendMode": 1,
                        "viewport.type": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "823C1BA96AFEF4402248FDF8772D47EC7DCE",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "vn.MessageBoxVisibility",
                "params": {
                    "duration": 30,
                    "waitForCompletion": true,
                    "id": "messageBox",
                    "visible": 1,
                    "animation": {
                        "type": 0,
                        "movement": 3,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "fieldFlags": {
                        "duration": 1,
                        "easing.type": 1,
                        "animation.type": 1
                    }
                },
                "uid": "F658432942C2554C831B5204312293A9B8D8",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.EraseText",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0,
                    "duration": 0,
                    "waitForCompletion": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "uid": "E8AEC5FD59B5644CE5699512B27891B7BEDE",
                "indent": 0
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 0,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "Darkness falls over the streets of Gelspar like a cloak. Unlike the rest of Adriel, the slums are not offered the luxury of light. Crowds of the ragged and hungry flock to the underbellies of the great ships, where the rich toss their waste overboard—scraps, coin, and whatever other junk or charity they deem ample for the poor's \"survival.\""
                    },
                    "position": 0,
                    "characterId": "2E81C6E217AF154B253AD80829128BCFF0B8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 0
                    },
                    "expressions": [],
                    "animations": [],
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "voice": {
                        "folderPath": "Emberwind Assets/Audio/Character Dialog/STORYTELLER (Austin Hopkins)",
                        "name": "Storyteller - Prologue - 01.ogg",
                        "volume": 100,
                        "playbackRate": 100
                    }
                },
                "uid": "56587DB27D8B564A1A7A4A6903BA71D637D9",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "The locals know alertness tempered by silence is necessary for their survival. Loose lips or the jingle of coppers could earn one a shiv in the back. It's common for people, even entire families, to disappear completely. The lucky ones reappear again as corpses underfoot."
                    },
                    "position": 0,
                    "characterId": "2E81C6E217AF154B253AD80829128BCFF0B8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": [],
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "voice": {
                        "folderPath": "Emberwind Assets/Audio/Character Dialog/STORYTELLER (Austin Hopkins)",
                        "name": "Storyteller - Prologue - 02.ogg",
                        "volume": 100,
                        "playbackRate": 100
                    }
                },
                "uid": "C2B033F2400C164B1E481DC2EE6D9D8898A3",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "Rustling scabbards, the echo of boots on metal, and the practiced moans of pleasure workers are the only sounds once night falls."
                    },
                    "position": 0,
                    "characterId": "2E81C6E217AF154B253AD80829128BCFF0B8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": [],
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "voice": {
                        "folderPath": "Emberwind Assets/Audio/Character Dialog/STORYTELLER (Austin Hopkins)",
                        "name": "Storyteller - Prologue - 03.ogg",
                        "volume": 100,
                        "playbackRate": 100
                    }
                },
                "uid": "3856D57F6F171142C94A8B000B33B1C39C47",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "That, and the ever-present hum of Gelspar's hearth crystal. It sits atop an ornate tower covered with detailed stonework at odds with the ramshackle slum surrounding it."
                    },
                    "position": 0,
                    "characterId": "2E81C6E217AF154B253AD80829128BCFF0B8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": [],
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "voice": {
                        "folderPath": "Emberwind Assets/Audio/Character Dialog/STORYTELLER (Austin Hopkins)",
                        "name": "Storyteller - Prologue - 04.ogg",
                        "volume": 100,
                        "playbackRate": 100
                    }
                },
                "uid": "543CCE926EC314456889DA18E59DEFAC95BD",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "Someone valued Gelspar at one point, but no longer. Today, anyone could use the intricate carvings as handholds and climb up to the hearth crystal to steal a shard."
                    },
                    "position": 0,
                    "characterId": "2E81C6E217AF154B253AD80829128BCFF0B8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": [],
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "voice": {
                        "folderPath": "Emberwind Assets/Audio/Character Dialog/STORYTELLER (Austin Hopkins)",
                        "name": "Storyteller - Prologue - 05.ogg",
                        "volume": 100,
                        "playbackRate": 100
                    }
                },
                "uid": "9D0A5E3940B5C84DFF9B8FD82C2EF5EA4C98",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "And that is why the crystal is failing."
                    },
                    "position": 0,
                    "characterId": "2E81C6E217AF154B253AD80829128BCFF0B8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": [],
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "voice": {
                        "folderPath": "Emberwind Assets/Audio/Character Dialog/STORYTELLER (Austin Hopkins)",
                        "name": "Storyteller - Prologue - 06.ogg",
                        "volume": 100,
                        "playbackRate": 100
                    }
                },
                "uid": "794581AF8929304FCC892682C739378F0544",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "The crystal that once lit up the night like a beacon has been reduced to a dim glow that is becoming dangerously faint. Every day, locals brave or desperate enough climb the tower and steal slivers of the precious gem to turn a quick profit."
                    },
                    "position": 0,
                    "characterId": "2E81C6E217AF154B253AD80829128BCFF0B8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": [],
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "voice": {
                        "folderPath": "Emberwind Assets/Audio/Character Dialog/STORYTELLER (Austin Hopkins)",
                        "name": "Storyteller - Prologue - 07.ogg",
                        "volume": 100,
                        "playbackRate": 100
                    }
                },
                "uid": "74CFDC624A603244D60866A41E7D61AF6BF8",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "When you're hungry enough, selling off tomorrow to get through today is an easy choice. But as the people of Gelspar chip away their one safeguard against the toxic air of Axia, they're accruing a debt they will never be able to repay."
                    },
                    "position": 0,
                    "characterId": "2E81C6E217AF154B253AD80829128BCFF0B8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": [],
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "voice": {
                        "folderPath": "Emberwind Assets/Audio/Character Dialog/STORYTELLER (Austin Hopkins)",
                        "name": "Storyteller - Prologue - 08.ogg",
                        "volume": 100,
                        "playbackRate": 100
                    }
                },
                "uid": "0268E7ED1C2D454EE89AF0E70C54E3698875",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.SaveGame",
                "params": {
                    "slot": 1,
                    "thumbWidth": 0,
                    "thumbHeight": 0
                },
                "uid": "FDB891C203789642061A8223FD5F1EDA1F4B",
                "indent": 0
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "A1151F0290E60149CD180104FAC6A9E02B28",
                        "name": "Into the Fold"
                    },
                    "savePrevious": 0,
                    "erasePictures": 1,
                    "eraseTexts": 1,
                    "eraseVideos": 1,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "C68D08888AEC224CDC8A93830184399D0901",
                "indent": 0,
                "expanded": true
            }
        ],
        "stringVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "numberVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "listVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "localizableStrings": {}
    },
    "summary": [
        "name",
        "type",
        "parentId",
        "chapterUid",
        "order"
    ],
    "externalItems": []
}