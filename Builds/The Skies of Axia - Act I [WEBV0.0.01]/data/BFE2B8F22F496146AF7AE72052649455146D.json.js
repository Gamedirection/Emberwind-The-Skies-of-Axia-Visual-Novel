GS.dataCache['BFE2B8F22F496146AF7AE72052649455146D'] = {
    "uid": "BFE2B8F22F496146AF7AE72052649455146D",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Introduction",
        "type": "vn.scene",
        "parentId": "83E1A6488356D74D733BFB61BD0C325199DB",
        "chapterUid": "83E1A6488356D74D733BFB61BD0C325199DB",
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
                "id": "gs.PlayMusic",
                "params": {
                    "layer": 0,
                    "loop": 1,
                    "music": {
                        "folderPath": "Emberwind Assets/Audio/Music",
                        "name": "Of_Us_The_Dark_Will_Be_Afraid.mp3",
                        "volume": 100,
                        "playbackRate": 100
                    },
                    "fadeInDuration": 3,
                    "playTime": {
                        "min": 10,
                        "max": 30
                    },
                    "playRange": {
                        "start": 10,
                        "end": 20
                    },
                    "playType": 0,
                    "waitForCompletion": 1,
                    "fieldFlags": {
                        "music.volume": 1,
                        "music.playbackRate": 1,
                        "fadeInDuration": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "1B1842A496ADE3452E29BF56D3BEB312A434",
                "indent": 0
            },
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "Cover_0004_Cover.png",
                        "folderPath": "Emberwind Assets/Graphics/Backgrounds/Scaled",
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
                    "origin": 1,
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
                        "duration": 0,
                        "easing.type": 0,
                        "animation.type": 1,
                        "origin": 0,
                        "zOrder": 0,
                        "blendMode": 0,
                        "viewport.type": 0,
                        "loopVertical": 1,
                        "loopHorizontal": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "08D4FE302307204F162A5B42816B03FCE391",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 6
                },
                "uid": "AF633109201885469D2B06152DDD0B0E3536",
                "indent": 0
            },
            {
                "id": "gs.ShowPicture",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "viewport": {
                        "type": "ui"
                    },
                    "size": {
                        "type": 0,
                        "width": 100,
                        "height": 100
                    },
                    "visual": {
                        "type": 0,
                        "quad": {
                            "color": {
                                "red": 255,
                                "green": 255,
                                "blue": 255,
                                "alpha": 255
                            }
                        },
                        "frame": {
                            "thickness": 16,
                            "cornerSize": 16
                        },
                        "threePartImage": {
                            "orientation": 0
                        }
                    },
                    "predefinedPositionId": 8,
                    "number": 0,
                    "blendMode": 0,
                    "zOrder": 1,
                    "duration": 60,
                    "origin": 1,
                    "waitForCompletion": 1,
                    "positionType": 0,
                    "position": {
                        "x": 0,
                        "y": 0
                    },
                    "easing": {
                        "type": 2,
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
                        "origin": 0,
                        "duration": 0,
                        "easing.type": 0,
                        "animation.type": 0,
                        "zOrder": 0,
                        "blendMode": 0,
                        "visual.type": 0,
                        "visual.frame.thickness": 1,
                        "visual.frame.cornerSize": 1,
                        "visual.threePartImage.orientation": 1,
                        "visual.quad.color": 1,
                        "size.type": 0,
                        "size.width": 1,
                        "size.height": 1,
                        "viewport.type": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "Emberiwnd-Logo.png",
                        "folderPath": "Emberwind Assets/Graphics/Backgrounds/Scaled",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        }
                    }
                },
                "uid": "E959C282507C1744DC5A49698088CD744935",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.Comment",
                "params": {
                    "text": "The Skies of Axia Text Appears"
                },
                "uid": "B14824608425274DC92B487877B29E7DECA5",
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
                    "predefinedPositionId": 8,
                    "positionType": 0,
                    "number": 0,
                    "duration": 30,
                    "waitForCompletion": 0,
                    "blendMode": 0,
                    "positionOrigin": 0,
                    "origin": 0,
                    "zOrder": 0,
                    "text": {
                        "lcId": null,
                        "defaultText": "T h e  S k i e s  o f  A x i a"
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
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 0,
                        "origin": 0,
                        "positionOrigin": 0,
                        "zOrder": 1,
                        "blendMode": 0,
                        "viewport.type": 0
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "00EDD2FD4EC28845C55829E74B700D2DEA21",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.TextDefaults",
                "params": {
                    "appearDuration": 30,
                    "disappearDuration": 30,
                    "origin": 0,
                    "zOrder": 2,
                    "motionBlur": {
                        "enabled": 0,
                        "delay": 2,
                        "opacity": 100,
                        "dissolveSpeed": 3
                    },
                    "appearAnimation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "disappearAnimation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "appearEasing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "disappearEasing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "fieldFlags": {
                        "appearDuration": 0,
                        "disappearDuration": 0,
                        "appearEasing.type": 1,
                        "appearAnimation.type": 1,
                        "disappearEasing.type": 1,
                        "disappearAnimation.type": 0,
                        "origin": 0,
                        "zOrder": 0,
                        "motionBlur.enabled": 0
                    }
                },
                "uid": "DCB644E650A7574D390BE6D1CEB6797C38B8",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.ChangeTextSettings",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0,
                    "bold": 0,
                    "italic": 0,
                    "underline": 0,
                    "smallCaps": 0,
                    "strikeThrough": 0,
                    "lineSpacing": 0,
                    "padding": [
                        0,
                        0,
                        0,
                        0
                    ],
                    "font": "Proxima Nova",
                    "size": 50,
                    "outline": 0,
                    "shadow": 1,
                    "outlineColor": {
                        "red": 0,
                        "green": 0,
                        "blue": 0,
                        "alpha": 255
                    },
                    "shadowColor": {
                        "red": 30,
                        "green": 0,
                        "blue": 34,
                        "alpha": 181
                    },
                    "fieldFlags": {
                        "font": 0,
                        "size": 0,
                        "color": 1,
                        "bold": 1,
                        "italic": 1,
                        "smallCaps": 1,
                        "underline": 1,
                        "strikeThrough": 1,
                        "lineSpacing": 0,
                        "outline": 1,
                        "outlineColor": 1,
                        "outlineSize": 1,
                        "shadow": 0,
                        "shadowColor": 0,
                        "shadowOffsetX": 0,
                        "shadowOffsetY": 0,
                        "padding.0": 0,
                        "padding.1": 1,
                        "padding.2": 0,
                        "padding.3": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "shadowOffsetX": 4,
                    "shadowOffsetY": 4
                },
                "uid": "4E9F1EDD38AC724343089004E14E1B3C7314",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.MoveText",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "predefinedPositionId": 0,
                    "positionType": 1,
                    "number": 0,
                    "duration": 0,
                    "waitForCompletion": 0,
                    "picture": {
                        "position": {
                            "x": 330,
                            "y": 475
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "fieldFlags": {
                        "easing.type": 0
                    }
                },
                "uid": "C324CCAB41BEC54FA13A34B37041FC947C1A",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.WaitForInput",
                "params": {
                    "key": 1,
                    "state": 2,
                    "action": {
                        "type": 0,
                        "data": {
                            "label": "$$C50EA7EF0592134BEF59E098BD7961D34EB4",
                            "commonEventId": 0
                        }
                    }
                },
                "uid": "FFFD174F0BC9324E824806217D2DA0BDE979",
                "indent": 0
            },
            {
                "id": "gs.EraseText",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0,
                    "duration": 30,
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
                        "duration": 0,
                        "easing.type": 0,
                        "animation.type": 1
                    }
                },
                "uid": "FC2A77FC0564754F521BBFA5256C5EC32E6D",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.ErasePicture",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0,
                    "duration": 30,
                    "waitForCompletion": 1,
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
                    }
                },
                "uid": "5F59489C5BA6B04A0F49DE464D8804D8207A",
                "indent": 0
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "A100044C8504E742223968D1AD25CB11004F",
                        "name": "Epigraph"
                    },
                    "savePrevious": 0,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "2964C3FA7E68E34CD16BA5F26AB4A1CBC6F5",
                "indent": 0,
                "expanded": false
            }
        ],
        "numberVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "stringVariables": [
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