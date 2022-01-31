GS.dataCache['3BE000CF71FAA341056811F8A05386584B8A'] = {
    "uid": "3BE000CF71FAA341056811F8A05386584B8A",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "The Hacksaw Bridge, Part II",
        "type": "vn.scene",
        "parentId": "F395DE37860336477B4A73A82730DCE724DC",
        "chapterUid": "F395DE37860336477B4A73A82730DCE724DC",
        "order": 3,
        "livePreviewDisabled": false,
        "localizableStrings": {},
        "commands": [
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "HacksawBridge.png",
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
                    "duration": 30,
                    "waitForCompletion": 1,
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
                        "duration": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "45122E262292D44B3E7AD4D8B6DADA33D9AC",
                "indent": 0
            },
            {
                "id": "gs.PlayMusic",
                "params": {
                    "layer": 0,
                    "loop": 1,
                    "music": {
                        "folderPath": "Emberwind Assets/Audio/Music",
                        "name": "Ember 1 - Bandits.ogg",
                        "volume": "35",
                        "playbackRate": 100
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
                        "music.playbackRate": 1,
                        "fadeInDuration": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "01979AD32462E347F6090137DE878D2AB84C",
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
                        "duration": 1
                    }
                },
                "uid": "36B835A4950622467B39BFE300D3F2A38959",
                "indent": 0
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
                        "defaultText": "You are about to start across the bridge when a shrill scream pierces the night."
                    },
                    "position": 0,
                    "characterId": "2E81C6E217AF154B253AD80829128BCFF0B8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "68D1C41A3061A54C621B6E86496CD4A850B0",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.CharacterJoinScene",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 4,
                    "expressionId": "4F8B7EA500AB494E447BA868EFC67E1AF3C2",
                    "characterId": "3CB7EC8F64E2B240F219B8F31AAD0A72A798",
                    "zOrder": 1,
                    "origin": 0,
                    "blendMode": 0,
                    "positionType": 1,
                    "motionBlur": {
                        "enabled": 0,
                        "delay": 2,
                        "opacity": 100,
                        "dissolveSpeed": 3
                    },
                    "position": {
                        "x": 898,
                        "y": -1408,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {},
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 0
                        }
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 0
                    },
                    "duration": 60,
                    "waitForCompletion": 0,
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 1,
                        "motionBlur.enabled": 1,
                        "origin": 1,
                        "zOrder": 0,
                        "blendMode": 1,
                        "viewport.type": 1
                    },
                    "previewBackground": {
                        "name": "",
                        "folderPath": ""
                    }
                },
                "uid": "3E4408EA2DE9E742361B4FF387E3312A4F63",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "vn.MoveCharacter",
                "params": {
                    "characterId": "3CB7EC8F64E2B240F219B8F31AAD0A72A798",
                    "predefinedPositionId": 0,
                    "duration": 60,
                    "waitForCompletion": 0,
                    "positionType": 2,
                    "position": {
                        "x": 110,
                        "y": -1388,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {},
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 0
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "81CF8A575213644F477B6EC8D6D08C9BB925",
                "indent": 0
            },
            {
                "id": "vn.ZoomCharacter",
                "params": {
                    "characterId": "3CB7EC8F64E2B240F219B8F31AAD0A72A798",
                    "duration": 0,
                    "waitForCompletion": 1,
                    "zooming": {
                        "x": 25,
                        "y": 25
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "4D949DA48C06394A5D2808D48B353C7B423C",
                "indent": 0
            },
            {
                "id": "vn.ShakeCharacter",
                "params": {
                    "characterId": "3CB7EC8F64E2B240F219B8F31AAD0A72A798",
                    "duration": 1200,
                    "waitForCompletion": 0,
                    "range": {
                        "y": 5,
                        "x": 0
                    },
                    "speed": 20,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "fieldFlags": {
                        "easing.type": 1
                    }
                },
                "uid": "F163C7F451A7A14322888766848D5E064821",
                "indent": 0,
                "expanded": false
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
                        "defaultText": "A woman runs into view on the other side, a chorus of deep barks and howls erupting behind her. Gasping for breath, she staggers toward you, arms outstretched."
                    },
                    "position": 0,
                    "characterId": "2E81C6E217AF154B253AD80829128BCFF0B8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "8EA55D295A4284479E080F042377F41D97BF",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.ShakeCharacter",
                "params": {
                    "characterId": "3CB7EC8F64E2B240F219B8F31AAD0A72A798",
                    "duration": 120,
                    "waitForCompletion": 0,
                    "range": {
                        "y": 5,
                        "x": 0
                    },
                    "speed": 60,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "fieldFlags": {
                        "easing.type": 1
                    }
                },
                "uid": "DE25BD1313C2A644A03B15C6A7F11824FCE0",
                "indent": 0,
                "expanded": false
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
                        "defaultText": "Please!\" she shrieks. \"Anyone! Help!"
                    },
                    "position": 0,
                    "characterId": "3CB7EC8F64E2B240F219B8F31AAD0A72A798",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "917CD90A32E67742E73AE855659612D00DB9",
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
                        "defaultText": "The city does not stir. Her cries echo and die in the silent, indifferent streets. In Gelspar, sticking out one's neck is a good way to get it broken, and the courageous seldom live very long."
                    },
                    "position": 0,
                    "characterId": "2E81C6E217AF154B253AD80829128BCFF0B8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "1F3405DD0DE4144EC26A37B3865214DA3694",
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
                        "defaultText": "A moment later, you see the creatures chasing her. Three large, misshapen hounds emerge from the shadows of the alley and stalk toward her."
                    },
                    "position": 0,
                    "characterId": "2E81C6E217AF154B253AD80829128BCFF0B8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "EDE60D617E13794A9678A4C3435694FE1426",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.CharacterJoinScene",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 6,
                    "expressionId": "F2DC0CE7458067472F39B567544E136A921B",
                    "characterId": "521AB84D894F6342A11B2B23797EE9E191E8",
                    "zOrder": 2,
                    "origin": 0,
                    "blendMode": 0,
                    "positionType": 1,
                    "motionBlur": {
                        "enabled": 0,
                        "delay": 2,
                        "opacity": 100,
                        "dissolveSpeed": 3
                    },
                    "position": {
                        "x": -864,
                        "y": 16,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {},
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 0
                        }
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 0
                    },
                    "duration": 30,
                    "waitForCompletion": 1,
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 1,
                        "motionBlur.enabled": 1,
                        "origin": 1,
                        "zOrder": 0,
                        "blendMode": 1,
                        "viewport.type": 1
                    },
                    "previewBackground": {
                        "name": "",
                        "folderPath": ""
                    }
                },
                "uid": "B5E4A3790BC5F449BD199857799F9AEA691A",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "vn.CharacterJoinScene",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 6,
                    "expressionId": "F29B5ED087305741347B80C23D032FDCCF66",
                    "characterId": "9E2E870847832140576B9958F70CDA9EFC63",
                    "zOrder": 2,
                    "origin": 0,
                    "blendMode": 0,
                    "positionType": 1,
                    "motionBlur": {
                        "enabled": 0,
                        "delay": 2,
                        "opacity": 100,
                        "dissolveSpeed": 3
                    },
                    "position": {
                        "x": -848,
                        "y": 398,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {},
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 0
                        }
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 0
                    },
                    "duration": 30,
                    "waitForCompletion": 1,
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 1,
                        "motionBlur.enabled": 1,
                        "origin": 1,
                        "zOrder": 0,
                        "blendMode": 1,
                        "viewport.type": 1
                    },
                    "previewBackground": {
                        "name": "",
                        "folderPath": ""
                    }
                },
                "uid": "55E2CE047A051949033B98713B3E8D3D18F3",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "vn.CharacterJoinScene",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 6,
                    "expressionId": "0B110EAD6EADE74CBA6B43603888B79A4468",
                    "characterId": "B3DF852E2F2E9143336A91D4128A4CDD3FBE",
                    "zOrder": 2,
                    "origin": 0,
                    "blendMode": 0,
                    "positionType": 1,
                    "motionBlur": {
                        "enabled": 0,
                        "delay": 2,
                        "opacity": 100,
                        "dissolveSpeed": 3
                    },
                    "position": {
                        "x": -850,
                        "y": -126,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {},
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 0
                        }
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 0
                    },
                    "duration": 30,
                    "waitForCompletion": 1,
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 1,
                        "motionBlur.enabled": 1,
                        "origin": 1,
                        "zOrder": 0,
                        "blendMode": 1,
                        "viewport.type": 1
                    },
                    "previewBackground": {
                        "name": "",
                        "folderPath": ""
                    }
                },
                "uid": "A5CBEBB1338D5548D4291A3588360C60BF6C",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "vn.ZoomCharacter",
                "params": {
                    "characterId": "521AB84D894F6342A11B2B23797EE9E191E8",
                    "duration": 60,
                    "waitForCompletion": 0,
                    "zooming": {
                        "x": 70,
                        "y": 70
                    },
                    "easing": {
                        "type": 1,
                        "inOut": 2
                    },
                    "fieldFlags": {
                        "easing.type": 0
                    }
                },
                "uid": "D2D096E52E957040A398F7C61A892A61465C",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "vn.ZoomCharacter",
                "params": {
                    "characterId": "9E2E870847832140576B9958F70CDA9EFC63",
                    "duration": 60,
                    "waitForCompletion": 0,
                    "zooming": {
                        "x": 90,
                        "y": 70
                    },
                    "easing": {
                        "type": 1,
                        "inOut": 2
                    },
                    "fieldFlags": {
                        "easing.type": 0
                    }
                },
                "uid": "187EC2498C77D240175857173C1230383815",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "vn.ZoomCharacter",
                "params": {
                    "characterId": "B3DF852E2F2E9143336A91D4128A4CDD3FBE",
                    "duration": 60,
                    "waitForCompletion": 0,
                    "zooming": {
                        "x": 90,
                        "y": 90
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 2
                    },
                    "fieldFlags": {
                        "easing.type": 0
                    }
                },
                "uid": "E9E4BE8C27DDE54FF53AA0E1596198EFEF59",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "vn.MoveCharacter",
                "params": {
                    "characterId": "521AB84D894F6342A11B2B23797EE9E191E8",
                    "predefinedPositionId": 7,
                    "duration": 120,
                    "waitForCompletion": 0,
                    "positionType": 1,
                    "position": {
                        "x": -120,
                        "y": 102,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {},
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 0
                        }
                    },
                    "easing": {
                        "type": 1,
                        "inOut": 2
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "fieldFlags": {
                        "easing.type": 0
                    }
                },
                "uid": "18E15A4A2492394ECA4BEFF0CC4033075754",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "vn.MoveCharacter",
                "params": {
                    "characterId": "9E2E870847832140576B9958F70CDA9EFC63",
                    "predefinedPositionId": 7,
                    "duration": 120,
                    "waitForCompletion": 0,
                    "positionType": 1,
                    "position": {
                        "x": -208,
                        "y": 252,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {},
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 0
                        }
                    },
                    "easing": {
                        "type": 1,
                        "inOut": 2
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "fieldFlags": {
                        "easing.type": 0
                    }
                },
                "uid": "7AC4F27296C9D844C85B4591D94CD5E2BA1F",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "vn.MoveCharacter",
                "params": {
                    "characterId": "B3DF852E2F2E9143336A91D4128A4CDD3FBE",
                    "predefinedPositionId": 7,
                    "duration": 120,
                    "waitForCompletion": 0,
                    "positionType": 1,
                    "position": {
                        "x": -460,
                        "y": 76,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {},
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 0
                        }
                    },
                    "easing": {
                        "type": 1,
                        "inOut": 2
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "fieldFlags": {
                        "easing.type": 0
                    }
                },
                "uid": "101195B10ABC8142142AE152A51F72D01C55",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "vn.ShakeCharacter",
                "params": {
                    "characterId": "521AB84D894F6342A11B2B23797EE9E191E8",
                    "duration": 360,
                    "waitForCompletion": 0,
                    "range": {
                        "y": 5,
                        "x": 5
                    },
                    "speed": 50,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "596B89586BB6E444276ABA439D8843E9BDC0",
                "indent": 0
            },
            {
                "id": "vn.ShakeCharacter",
                "params": {
                    "characterId": "9E2E870847832140576B9958F70CDA9EFC63",
                    "duration": 360,
                    "waitForCompletion": 0,
                    "range": {
                        "y": 3,
                        "x": 5
                    },
                    "speed": 40,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "9F45413A8AA2964785886CD9D2AD55E52B0F",
                "indent": 0
            },
            {
                "id": "vn.ShakeCharacter",
                "params": {
                    "characterId": "B3DF852E2F2E9143336A91D4128A4CDD3FBE",
                    "duration": 360,
                    "waitForCompletion": 0,
                    "range": {
                        "y": 3,
                        "x": 2
                    },
                    "speed": 40,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "655DCF7047C3F848972833F9F4A3054DA98C",
                "indent": 0
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
                        "defaultText": "The woman stumbles halfway across the bridge, falling with a cry of pain. Her knee buckles as she attempts to stand."
                    },
                    "position": 0,
                    "characterId": "2E81C6E217AF154B253AD80829128BCFF0B8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "7AF9BE191DDE064B4E2B44B8F8D5A8AF6564",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.ShakeCharacter",
                "params": {
                    "characterId": "521AB84D894F6342A11B2B23797EE9E191E8",
                    "duration": 360,
                    "waitForCompletion": 0,
                    "range": {
                        "y": 5,
                        "x": 5
                    },
                    "speed": 50,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "AF61D1995D995142B868E4A4398CA4DCAB84",
                "indent": 0
            },
            {
                "id": "vn.ShakeCharacter",
                "params": {
                    "characterId": "9E2E870847832140576B9958F70CDA9EFC63",
                    "duration": 360,
                    "waitForCompletion": 0,
                    "range": {
                        "y": 3,
                        "x": 5
                    },
                    "speed": 40,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "C65F67678C7AF8411F4AEA160CA0EB562414",
                "indent": 0
            },
            {
                "id": "vn.ShakeCharacter",
                "params": {
                    "characterId": "B3DF852E2F2E9143336A91D4128A4CDD3FBE",
                    "duration": 360,
                    "waitForCompletion": 0,
                    "range": {
                        "y": 3,
                        "x": 2
                    },
                    "speed": 40,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "B60D3B8906B540411C8A90D5919B198F2C2A",
                "indent": 0
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
                        "defaultText": "The three beasts close in on her from all sides, their hungry jaws gaping open to reveal massive, protruding fangs in front of serrated rows of teeth. They snap and snarl at the woman, but seem to be waiting for some kind of signal before moving in for the kill."
                    },
                    "position": 0,
                    "characterId": "2E81C6E217AF154B253AD80829128BCFF0B8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "3BF64E8D46388644285B4E83D6B5DC734C98",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.CharacterJoinScene",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 0,
                    "expressionId": "CFE755B304A0E140AD8AF5F8C4C13A5FAB77",
                    "characterId": "9A7CCC7B3A590649FD4B0AC56B0858696635",
                    "zOrder": 1,
                    "origin": 0,
                    "blendMode": 0,
                    "positionType": 1,
                    "motionBlur": {
                        "enabled": 0,
                        "delay": 2,
                        "opacity": 100,
                        "dissolveSpeed": 3
                    },
                    "position": {
                        "x": -334,
                        "y": -620,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {},
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 0
                        }
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 0
                    },
                    "duration": 120,
                    "waitForCompletion": 0,
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 1,
                        "motionBlur.enabled": 1,
                        "origin": 1,
                        "zOrder": 0,
                        "blendMode": 1,
                        "viewport.type": 1
                    },
                    "previewBackground": {
                        "name": "",
                        "folderPath": ""
                    }
                },
                "uid": "658F81A426621445DC7A43170DDB44BA2016",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.ZoomCharacter",
                "params": {
                    "characterId": "9A7CCC7B3A590649FD4B0AC56B0858696635",
                    "duration": 0,
                    "waitForCompletion": 0,
                    "zooming": {
                        "x": 35,
                        "y": 35
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "B131D22E3647A04F8C796D137EA4B05B62FF",
                "indent": 0
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
                        "defaultText": "A cowled man with a face painted like a skull steps into view on the opposite end of the bridge. He approaches at a steady pace, a barbed leather whip in one hand and a gleaming dagger in the other."
                    },
                    "position": 0,
                    "characterId": "2E81C6E217AF154B253AD80829128BCFF0B8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "66AA03D9453D464E9428C4651CD027AC624F",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.ShakeCharacter",
                "params": {
                    "characterId": "3CB7EC8F64E2B240F219B8F31AAD0A72A798",
                    "duration": 120,
                    "waitForCompletion": 0,
                    "range": {
                        "y": 5,
                        "x": 0
                    },
                    "speed": 60,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "fieldFlags": {
                        "easing.type": 1
                    }
                },
                "uid": "C2F904D80F515141DC592E73347D0A17CB23",
                "indent": 0,
                "expanded": false
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
                        "defaultText": "The woman looks at you, her eyes making a desperate appeal."
                    },
                    "position": 0,
                    "characterId": "2E81C6E217AF154B253AD80829128BCFF0B8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "747183E5467DA24331895EA23D68310A794F",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.ShakeCharacter",
                "params": {
                    "characterId": "9A7CCC7B3A590649FD4B0AC56B0858696635",
                    "duration": 60,
                    "waitForCompletion": 0,
                    "range": {
                        "y": 0,
                        "x": 3
                    },
                    "speed": 20,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "fieldFlags": {
                        "easing.type": 1
                    }
                },
                "uid": "F41649D50444C64DA23A7310FD25E56A48FA",
                "indent": 0,
                "expanded": false
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
                        "defaultText": "This don't concern any a' you,"
                    },
                    "position": 0,
                    "characterId": "9A7CCC7B3A590649FD4B0AC56B0858696635",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "BC8055AB900DB746F388BD10C8632441C600",
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
                        "defaultText": "We're all friends here. Now move along 'fore someone gets hurt. Wouldn't wanta upset the boss."
                    },
                    "position": 0,
                    "characterId": "9A7CCC7B3A590649FD4B0AC56B0858696635",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "0C4A30832B095044444BDDC88926EC466637",
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
                        "defaultText": "You are quite certain you have never seen this man before in your life."
                    },
                    "position": 0,
                    "characterId": "2E81C6E217AF154B253AD80829128BCFF0B8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "21D11CE737B46547191BAFF8809749C45C75",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.ShakeCharacter",
                "params": {
                    "characterId": "3CB7EC8F64E2B240F219B8F31AAD0A72A798",
                    "duration": 60,
                    "waitForCompletion": 0,
                    "range": {
                        "y": 5,
                        "x": 0
                    },
                    "speed": 60,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "fieldFlags": {
                        "easing.type": 1
                    }
                },
                "uid": "68FD88BA84769944CD9B48A76219AA5C3173",
                "indent": 0,
                "expanded": false
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
                        "defaultText": "Please..."
                    },
                    "position": 0,
                    "characterId": "3CB7EC8F64E2B240F219B8F31AAD0A72A798",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "761CE7636028444A5D5A186360453F253908",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.ShakeCharacter",
                "params": {
                    "characterId": "521AB84D894F6342A11B2B23797EE9E191E8",
                    "duration": 360,
                    "waitForCompletion": 0,
                    "range": {
                        "y": 5,
                        "x": 5
                    },
                    "speed": 50,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "78C540D28FA8C64A548BBE53433F47DADB4A",
                "indent": 0
            },
            {
                "id": "vn.ShakeCharacter",
                "params": {
                    "characterId": "9E2E870847832140576B9958F70CDA9EFC63",
                    "duration": 360,
                    "waitForCompletion": 0,
                    "range": {
                        "y": 3,
                        "x": 5
                    },
                    "speed": 40,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "129FA4B93048134F4A5BB647A96BC030E6FC",
                "indent": 0
            },
            {
                "id": "vn.ShakeCharacter",
                "params": {
                    "characterId": "B3DF852E2F2E9143336A91D4128A4CDD3FBE",
                    "duration": 360,
                    "waitForCompletion": 0,
                    "range": {
                        "y": 3,
                        "x": 2
                    },
                    "speed": 40,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "471B1C766E8DD849008BB23283B486A2FEF3",
                "indent": 0
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
                        "defaultText": "the woman begs again, her terrified voice barely audible above the growling beasts. "
                    },
                    "position": 0,
                    "characterId": "2E81C6E217AF154B253AD80829128BCFF0B8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "DB26A5539E361149D32BCD72BB5CF3BA6D04",
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
                        "defaultText": "How can you be so cruel?"
                    },
                    "position": 0,
                    "characterId": "3CB7EC8F64E2B240F219B8F31AAD0A72A798",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "CB69BDD8889F1349307A24B8ED0B14156B66",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "Ignore the Woman"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 1,
                    "box": {
                        "x": 68,
                        "y": 34,
                        "angle": 0,
                        "zoom": 1,
                        "data": {},
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 160
                        },
                        "size": {
                            "width": 448,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "C5A111486255B74D084A1E06498DC7482E68",
                "indent": 0
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "Defend the Woman"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 1,
                    "box": {
                        "x": 770,
                        "y": 34,
                        "angle": 0,
                        "zoom": 1,
                        "data": {},
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 160
                        },
                        "size": {
                            "width": 448,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "76F2275C74CE294A1799E9710267C12B9BCA",
                "indent": 0
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "uid": "259D58AF8ACD254FC46B96312A0F92D94AA4",
                "indent": 0
            }
        ],
        "booleanVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ]
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