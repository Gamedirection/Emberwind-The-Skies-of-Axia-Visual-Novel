GS.dataCache['A100044C8504E742223968D1AD25CB11004F'] = {
    "uid": "A100044C8504E742223968D1AD25CB11004F",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Epigraph",
        "type": "vn.scene",
        "parentId": "83E1A6488356D74D733BFB61BD0C325199DB",
        "chapterUid": "83E1A6488356D74D733BFB61BD0C325199DB",
        "order": 1,
        "localizableStrings": {},
        "commands": [
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "Skip",
                        "index": 1,
                        "scope": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetScope": 0,
                    "targetRange": {
                        "start": 0,
                        "end": 0
                    },
                    "targetReferenceDomain": "com.degica.vnm.default",
                    "targetReference": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "operation": 0,
                    "source": 0,
                    "sourceValue": 1,
                    "sourceRandom": {
                        "start": 0,
                        "end": 0
                    },
                    "sourceScope": 0,
                    "sourceVariable": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "sourceReferenceDomain": "com.degica.vnm.default",
                    "sourceReference": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "42CA679551DFC542A59A68C60778332EEE72",
                "indent": 0
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
                "uid": "84AF9C0960E8C741CF8820F38FA5295F4B43",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.PlayMusic",
                "params": {
                    "layer": 0,
                    "loop": 1,
                    "music": {
                        "folderPath": "Emberwind Assets/Audio/Music",
                        "name": "Ember 2 - Hollows.ogg",
                        "volume": "20",
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
                "uid": "EB2185715F60964D3F2856386D8C18554CA0",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.Comment",
                "params": {
                    "text": "5 sec to Space to skip"
                },
                "uid": "F83839C72FCC264A9F2A56B374053AE24B7D",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.LoopCommand",
                "params": {},
                "uid": "50F7040388B8644EF338229627119B0AF16C",
                "indent": 0
            },
            {
                "id": "gs.Condition",
                "params": {
                    "variable": {
                        "name": "Skip",
                        "index": 1,
                        "scope": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "numberValue": 1,
                    "textValue": "",
                    "switchValue": 0,
                    "valueType": 0,
                    "operation": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "C25F9FE891FD9348817A8166AF0A83B249C8",
                "indent": 1
            },
            {
                "id": "gs.StartTimer",
                "params": {
                    "number": 3,
                    "interval": 300,
                    "action": {
                        "type": 0,
                        "data": {
                            "label": "BreakTheLoop",
                            "commonEventId": 0
                        }
                    }
                },
                "uid": "70FFB95C5853334E1809CBC39E62D3BD05B1",
                "indent": 2
            },
            {
                "id": "gs.WaitForInput",
                "params": {
                    "key": 132,
                    "state": 2,
                    "action": {
                        "type": 0,
                        "data": {
                            "label": "$$C50EA7EF0592134BEF59E098BD7961D34EB4",
                            "commonEventId": 0
                        }
                    }
                },
                "indent": 2,
                "uid": "158415AC1D8F524156296CF023ED31EF6EFF"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "BreakTheLoop"
                },
                "uid": "0184992977E96642497A740302B63EF5704E",
                "indent": 2
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "Skip",
                        "index": 1,
                        "scope": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetScope": 0,
                    "targetRange": {
                        "start": 0,
                        "end": 0
                    },
                    "targetReferenceDomain": "com.degica.vnm.default",
                    "targetReference": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "operation": 0,
                    "source": 0,
                    "sourceValue": 2,
                    "sourceRandom": {
                        "start": 0,
                        "end": 0
                    },
                    "sourceScope": 0,
                    "sourceVariable": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "sourceReferenceDomain": "com.degica.vnm.default",
                    "sourceReference": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "3B68451D7373604E9F19B4731D768E08E09E",
                "indent": 2
            },
            {
                "id": "gs.ConditionElseIf",
                "params": {
                    "variable": {
                        "name": "Skip",
                        "index": 1,
                        "scope": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "numberValue": 2,
                    "textValue": "",
                    "switchValue": 0,
                    "valueType": 0,
                    "operation": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "79EB6BEB0F2B9649B80AACC4E61CA34F345B",
                "indent": 1
            },
            {
                "id": "gs.StopTimer",
                "params": {
                    "number": 3
                },
                "uid": "1D47001765F1434B2E7A7450DE83548DFB27",
                "indent": 2
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "Skip",
                        "index": 1,
                        "scope": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetScope": 0,
                    "targetRange": {
                        "start": 0,
                        "end": 0
                    },
                    "targetReferenceDomain": "com.degica.vnm.default",
                    "targetReference": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "operation": 0,
                    "source": 0,
                    "sourceValue": 1,
                    "sourceRandom": {
                        "start": 0,
                        "end": 0
                    },
                    "sourceScope": 0,
                    "sourceVariable": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "sourceReferenceDomain": "com.degica.vnm.default",
                    "sourceReference": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "DE560EC57B63C74D5D49C8172ED333749879",
                "indent": 2
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Skipped",
                    "target": "activeContext"
                },
                "uid": "375D3E7D3D62334D0A8B8E64C5116E07D3B9",
                "indent": 2
            },
            {
                "id": "gs.BreakLoopCommand",
                "params": {},
                "uid": "9D88E4D1018B28421E98A060CC4B35F47782",
                "indent": 2
            },
            {
                "id": "gs.Comment",
                "params": {
                    "text": "Wait for user to click for 12sec"
                },
                "uid": "E951236328AA674B38783D9163B57ED1B156",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.LoopCommand",
                "params": {},
                "uid": "056D514A15853349044AD78570666CFFD7AA",
                "indent": 0
            },
            {
                "id": "gs.Condition",
                "params": {
                    "variable": {
                        "name": "Skip",
                        "index": 1,
                        "scope": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "numberValue": 1,
                    "textValue": "",
                    "switchValue": 0,
                    "valueType": 0,
                    "operation": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "90B37F6E872D9540501A02B041D41A9F5998",
                "indent": 1
            },
            {
                "id": "gs.StartTimer",
                "params": {
                    "number": 3,
                    "interval": 720,
                    "action": {
                        "type": 0,
                        "data": {
                            "label": "BreakTheLoop",
                            "commonEventId": 0
                        }
                    }
                },
                "uid": "2AA5B9E79AED52429909DEE6BDA2EFAF5356",
                "indent": 2
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
                "indent": 2,
                "uid": "9CBCCE24660FC14B2869B8C1D9D26283A163"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "BreakTheLoop"
                },
                "uid": "E18B50D89896474992984BC22B5BFC0D76CC",
                "indent": 2
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "Skip",
                        "index": 1,
                        "scope": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetScope": 0,
                    "targetRange": {
                        "start": 0,
                        "end": 0
                    },
                    "targetReferenceDomain": "com.degica.vnm.default",
                    "targetReference": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "operation": 0,
                    "source": 0,
                    "sourceValue": 2,
                    "sourceRandom": {
                        "start": 0,
                        "end": 0
                    },
                    "sourceScope": 0,
                    "sourceVariable": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "sourceReferenceDomain": "com.degica.vnm.default",
                    "sourceReference": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "D7C363D02418C44F1C49DA367E1D6E0CB406",
                "indent": 2
            },
            {
                "id": "gs.ConditionElseIf",
                "params": {
                    "variable": {
                        "name": "Skip",
                        "index": 1,
                        "scope": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "numberValue": 2,
                    "textValue": "",
                    "switchValue": 0,
                    "valueType": 0,
                    "operation": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "E0A975A41E92364A585853619752F298654E",
                "indent": 1
            },
            {
                "id": "gs.StopTimer",
                "params": {
                    "number": 3
                },
                "uid": "690A731524B462459C5AEB4176205CA013FC",
                "indent": 2
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "Skip",
                        "index": 1,
                        "scope": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetScope": 0,
                    "targetRange": {
                        "start": 0,
                        "end": 0
                    },
                    "targetReferenceDomain": "com.degica.vnm.default",
                    "targetReference": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "operation": 0,
                    "source": 0,
                    "sourceValue": 1,
                    "sourceRandom": {
                        "start": 0,
                        "end": 0
                    },
                    "sourceScope": 0,
                    "sourceVariable": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "sourceReferenceDomain": "com.degica.vnm.default",
                    "sourceReference": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "6553FF6377C0C3428C8A7514DE8FD0F6639B",
                "indent": 2
            },
            {
                "id": "gs.BreakLoopCommand",
                "params": {},
                "uid": "616E25B1265BA14D6C78FEA8459F39571557",
                "indent": 2
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
                "uid": "317B3ABF71C0644E7D1857425DFD89DF2945",
                "indent": 0
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 0,
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
                        "defaultText": "Axia is wracked by a sickness. Something is eating away at our world, and has been since the very beginning. It did not stop when the seas boiled and turned to toxic steam. It continued when the mountains fell. We heard the wails of distress when the very land was ripped asunder, and our world was scattered impossibly across the skies. \n\nAt first we were transfixed, overwhelmed by the sheer magnitude of the Calamity. We mourned those that were lost, and silently prepared to join them in the beyond. Then, miraculously, we were spared. The world stopped shaking. We discovered the hearth crystals, and learned to survive.\n\nWe adapted to the strange new world around us. We rebuilt, and made a decent life out of what remained. Some of us even thrived. We created Adriel, the tiny harbour that grew into a vast metropolis, a kingdom unto heaven, a port for those seeking shelter from the hazardous skies. \n\nBut over the years, we also became complacent. The Calamitywas not the work of an instant. Axia broke apart over the span of decades—maybe even centuries—and we were foolish to think that would be the end, as if there is no cause for concern while the continents still dangle from the clouds.\n\nThe sickness has not been cured. The corruption of this world continues. Even now, I can feel our final reserves of vitality slowly ebbing away. I have tried to warn them, but people will not see what they do not wish to fear.\n\nI am no such coward. I will not stand by and lose what we have built. I only hope that I can prepare this world in time.\n\nAdriel is my home. I will not see it fall.\n\n— The Private Records of Kendrick Maddox"
                    },
                    "position": 0,
                    "characterId": "3170CFD5192BA34C21599ED09C5DCDC3B921",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 0
                    },
                    "expressions": [],
                    "animations": [],
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "7D13CA0A30ED7143C358D783B0B4088A4DF2",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "vn.MessageVisibility",
                "params": {
                    "duration": 0,
                    "waitForCompletion": 0,
                    "visible": 0,
                    "animation": {
                        "type": 1,
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
                        "duration": 0
                    }
                },
                "uid": "28099DB914D20540C7280367E32DC33CA8C3",
                "indent": 0
            },
            {
                "id": "gs.Comment",
                "params": {
                    "text": "Remove previous text; start the show"
                },
                "indent": 0,
                "uid": "36254C095574D8475B3B0CF3332FBB06D467",
                "expanded": false
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
                    "predefinedPositionId": 0,
                    "number": 20,
                    "blendMode": 0,
                    "zOrder": -1,
                    "duration": 30,
                    "origin": 1,
                    "waitForCompletion": 1,
                    "positionType": 1,
                    "position": {
                        "x": -12,
                        "y": -1414,
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
                        "blendMode": 1,
                        "visual.type": 1,
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
                        "name": "Kendrick.png",
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
                    }
                },
                "uid": "BFFFD864715A5646BE8B28D4FD25FFF41EED",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.MovePicture",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "predefinedPositionId": 0,
                    "number": 20,
                    "duration": 4500,
                    "waitForCompletion": 0,
                    "positionType": 2,
                    "picture": {
                        "previewImage": {
                            "name": "Kendrick.png",
                            "folderPath": "Emberwind Assets/Graphics/Backgrounds",
                            "hue": 0,
                            "opacity": 255,
                            "blending": 0,
                            "tone": {
                                "red": 0,
                                "green": 0,
                                "blue": 0
                            }
                        },
                        "previewBackground": {
                            "name": "",
                            "folderPath": "Graphics/Backgrounds",
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
                        "position": {
                            "x": -302,
                            "y": -220,
                            "angle": 0,
                            "zoom": 1,
                            "data": {},
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 0
                            }
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 2
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "fieldFlags": {
                        "easing.type": 0
                    }
                },
                "uid": "998583215323C2425D291A716CD628A2256E",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.TintPicture",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 20,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "tone": {
                        "red": -68,
                        "green": -68,
                        "blue": -68,
                        "grey": 0
                    },
                    "duration": 360,
                    "waitForCompletion": 0,
                    "fieldFlags": {
                        "easing.type": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "4E0E5B9357A9794CAF6AFD14E2C7EB751106",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.Comment",
                "params": {
                    "text": "Show Text"
                },
                "uid": "B0D70DEA2767F843EF48F0831027E82AE563",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.TextDefaults",
                "params": {
                    "appearDuration": 30,
                    "disappearDuration": 30,
                    "origin": 0,
                    "zOrder": 0,
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
                        "disappearAnimation.type": 1,
                        "origin": 1,
                        "zOrder": 1,
                        "motionBlur.enabled": 1
                    }
                },
                "indent": 0,
                "uid": "DBF77B97399A254F192A0BE71BF3DA22A445",
                "expanded": false
            },
            {
                "id": "gs.ChangeTextSettings",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 1,
                    "bold": 0,
                    "italic": 1,
                    "underline": 0,
                    "smallCaps": 0,
                    "strikeThrough": 0,
                    "lineSpacing": 0,
                    "padding": [
                        6,
                        0,
                        6,
                        0
                    ],
                    "font": "Archer",
                    "size": 40,
                    "outline": 0,
                    "shadow": 1,
                    "outlineColor": {
                        "red": 0,
                        "green": 0,
                        "blue": 0,
                        "alpha": 255
                    },
                    "shadowColor": {
                        "red": 0,
                        "green": 0,
                        "blue": 0,
                        "alpha": 255
                    },
                    "fieldFlags": {
                        "font": 0,
                        "size": 0,
                        "color": 0,
                        "bold": 1,
                        "italic": 0,
                        "smallCaps": 1,
                        "underline": 1,
                        "strikeThrough": 1,
                        "lineSpacing": 1,
                        "outline": 1,
                        "outlineColor": 1,
                        "outlineSize": 1,
                        "shadow": 0,
                        "shadowColor": 1,
                        "shadowOffsetX": 0,
                        "shadowOffsetY": 0,
                        "padding.0": 1,
                        "padding.1": 1,
                        "padding.2": 1,
                        "padding.3": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "shadowOffsetX": 2,
                    "shadowOffsetY": 2
                },
                "uid": "334F09F15CC2B549E91A7493F4ECD30992F3",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.ShowText",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 0,
                    "positionType": 1,
                    "number": 1,
                    "duration": 30,
                    "waitForCompletion": 1,
                    "blendMode": 0,
                    "positionOrigin": 8,
                    "origin": 1,
                    "zOrder": 1,
                    "text": {
                        "lcId": null,
                        "defaultText": "Axia is wracked by a sickness. Something is eating away at our world, \nand has been since the very beginning. It did not stop when the seas \nboiled and turned to toxic steam. It continued when the mountains fell. \nWe heard the wails of distress when the very land was ripped asunder, \nand our world was scattered impossibly across the skies."
                    },
                    "position": {
                        "x": 650,
                        "y": 200
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
                        "animation.type": 1,
                        "origin": 0,
                        "positionOrigin": 0,
                        "zOrder": 0,
                        "blendMode": 0,
                        "viewport.type": 0
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "3516E9AF8C76C74A745A555592F9F4131977",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.PlaySound",
                "params": {
                    "sound": {
                        "folderPath": "Emberwind Assets/Audio/Character Dialog/KENDRIK MADDOX (Chad Taylor)",
                        "name": "Kendrik-Epigraph-01.ogg",
                        "volume": 100,
                        "playbackRate": 100
                    },
                    "musicEffect": 0,
                    "loop": 0,
                    "waitForCompletion": 1,
                    "fieldFlags": {
                        "sound.volume": 1,
                        "sound.playbackRate": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "B4CB471E1067354CA8095C66B5AF529AA8E2",
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
                    "positionType": 1,
                    "number": 1,
                    "duration": 30,
                    "waitForCompletion": 0,
                    "blendMode": 0,
                    "positionOrigin": 0,
                    "origin": 0,
                    "zOrder": 1,
                    "text": {
                        "lcId": null,
                        "defaultText": "At first we were transfixed, overwhelmed by the sheer\nmagnitude of the Calamity. We mourned those that were\nlost, and silently prepared to join them in the beyond.\nThen, miraculously, we were spared. The world stopped shaking.\nWe discovered the hearth crystals, and learned to survive."
                    },
                    "position": {
                        "x": 50,
                        "y": 400
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
                        "animation.type": 1,
                        "origin": 1,
                        "positionOrigin": 1,
                        "zOrder": 0,
                        "blendMode": 1,
                        "viewport.type": 0
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "8B29A585903CC94CDB5934E5EA9D44D618E5",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.PlaySound",
                "params": {
                    "sound": {
                        "folderPath": "Emberwind Assets/Audio/Character Dialog/KENDRIK MADDOX (Chad Taylor)",
                        "name": "Kendrik-Epigraph-02.ogg",
                        "volume": 100,
                        "playbackRate": 100
                    },
                    "musicEffect": 0,
                    "loop": 0,
                    "waitForCompletion": 1,
                    "fieldFlags": {
                        "sound.volume": 1,
                        "sound.playbackRate": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "D242BF3A2F754345CE6AB041E3F8B9D77649",
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
                    "positionType": 1,
                    "number": 1,
                    "duration": 30,
                    "waitForCompletion": 0,
                    "blendMode": 0,
                    "positionOrigin": 0,
                    "origin": 0,
                    "zOrder": 1,
                    "text": {
                        "lcId": null,
                        "defaultText": "We adapted to the strange new world around us. We rebuilt,\nand made a decent life out of what remained. Some of us\neven thrived. We created Adriel, the tiny harbour that grew\ninto a vast metropolis, a kingdom unto heaven, a port for\nthose seeking shelter from the hazardous skies.\n\nBut over the years, we also became complacent. The Calamity\nwas not the work of an instant. Axia broke apart over the span\nof decades—maybe even centuries—and we were foolish to think\nthat would be the end, as if there is no cause for concern while\nthe continents still dangle from the clouds."
                    },
                    "position": {
                        "x": 50,
                        "y": 100
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
                        "animation.type": 1,
                        "origin": 1,
                        "positionOrigin": 1,
                        "zOrder": 0,
                        "blendMode": 1,
                        "viewport.type": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "A3C4D1DE7804084F307839588BCC6259EC8C",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.PlaySound",
                "params": {
                    "sound": {
                        "folderPath": "Emberwind Assets/Audio/Character Dialog/KENDRIK MADDOX (Chad Taylor)",
                        "name": "Kendrik-Epigraph-03.ogg",
                        "volume": 100,
                        "playbackRate": 100
                    },
                    "musicEffect": 0,
                    "loop": 0,
                    "waitForCompletion": 1,
                    "fieldFlags": {
                        "sound.volume": 1,
                        "sound.playbackRate": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "F2A8634A256BF941831B7564BD247042C56D",
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
                    "positionType": 1,
                    "number": 1,
                    "duration": 30,
                    "waitForCompletion": 0,
                    "blendMode": 0,
                    "positionOrigin": 0,
                    "origin": 0,
                    "zOrder": 1,
                    "text": {
                        "lcId": null,
                        "defaultText": "The sickness has not been cured. The corruption of this\nworld continues. Even now, I can feel our final reserves of\nvitality slowly ebbing away. I have tried to warn them, but\npeople will not see what they do not wish to fear."
                    },
                    "position": {
                        "x": 50,
                        "y": 100
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
                        "animation.type": 1,
                        "origin": 1,
                        "positionOrigin": 1,
                        "zOrder": 0,
                        "blendMode": 1,
                        "viewport.type": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "B892C7AD1A957044784ACC75BD4307EBAE50",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.PlaySound",
                "params": {
                    "sound": {
                        "folderPath": "Emberwind Assets/Audio/Character Dialog/KENDRIK MADDOX (Chad Taylor)",
                        "name": "Kendrik-Epigraph-04.ogg",
                        "volume": 100,
                        "playbackRate": 100
                    },
                    "musicEffect": 0,
                    "loop": 0,
                    "waitForCompletion": 0,
                    "fieldFlags": {
                        "sound.volume": 1,
                        "sound.playbackRate": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "6B1A42A15E04F542001A444565F4234240E4",
                "indent": 0
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 660
                },
                "uid": "A02B2C0B2856604FF64B61865188D996481F",
                "indent": 0
            },
            {
                "id": "gs.TintPicture",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 20,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "tone": {
                        "red": 0,
                        "green": 0,
                        "blue": 0,
                        "grey": 0
                    },
                    "duration": 480,
                    "waitForCompletion": 0,
                    "fieldFlags": {
                        "easing.type": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "7F11A11D1CEFC6489F5982C5C19467C4050F",
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
                    "positionType": 1,
                    "number": 1,
                    "duration": 30,
                    "waitForCompletion": 0,
                    "blendMode": 0,
                    "positionOrigin": 0,
                    "origin": 0,
                    "zOrder": 1,
                    "text": {
                        "lcId": null,
                        "defaultText": "I am no such coward. I will not stand by and lose what we\nhave built. I only hope that I can prepare this world in time.\nAdriel is my home. I will not see it fall.\n\n— The Private Records of Kendrick Maddox"
                    },
                    "position": {
                        "x": 50,
                        "y": 300
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
                        "animation.type": 1,
                        "origin": 1,
                        "positionOrigin": 1,
                        "zOrder": 0,
                        "blendMode": 1,
                        "viewport.type": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "160E0FE7104A114D856BEF7719DF5969ADEB",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 480
                },
                "uid": "9F3DFE04545B744CC968EF666B06A0499088",
                "indent": 0
            },
            {
                "id": "gs.EraseText",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0,
                    "duration": 120,
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
                        "duration": 0
                    }
                },
                "uid": "3FE1BDE42417F8474768FEF1FAEDE9400F18",
                "indent": 0
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "Skipped"
                },
                "uid": "B6F07F132311B64D84486F66585B1F15FD84",
                "indent": 0
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
                    "duration": 30,
                    "waitForCompletion": 0,
                    "blendMode": 0,
                    "positionOrigin": 0,
                    "origin": 0,
                    "zOrder": 0,
                    "text": {
                        "lcId": null,
                        "defaultText": "Saving, Click to Continue..."
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
                "uid": "1816869778927442561A6F60650AD3848F62",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.PrepareSaveGame",
                "params": {
                    "snapshot": 1
                },
                "uid": "5D06735E73F0C047638AD4E1939BCF756511",
                "indent": 0
            },
            {
                "id": "gs.LoopCommand",
                "params": {},
                "uid": "749AC99549DDC34EAA380F06467916F0F4E3",
                "indent": 0
            },
            {
                "id": "gs.Condition",
                "params": {
                    "variable": {
                        "name": "Skip",
                        "index": 1,
                        "scope": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "numberValue": 1,
                    "textValue": "",
                    "switchValue": 0,
                    "valueType": 0,
                    "operation": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "FB8C1D37680AD540206873D9EFA56242A87B",
                "indent": 1
            },
            {
                "id": "gs.StartTimer",
                "params": {
                    "number": 3,
                    "interval": 1200,
                    "action": {
                        "type": 0,
                        "data": {
                            "label": "BreakTheLoop",
                            "commonEventId": 0
                        }
                    }
                },
                "uid": "A0551BA78470E14E25286622BF19C101BBD1",
                "indent": 2
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
                "indent": 2,
                "uid": "2C7CD1C8206D114C09791D7827954072D9A5"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "BreakTheLoop"
                },
                "uid": "1D9F379268F9F84E2D2B4CB1D5E2EE183B35",
                "indent": 2
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "Skip",
                        "index": 1,
                        "scope": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetScope": 0,
                    "targetRange": {
                        "start": 0,
                        "end": 0
                    },
                    "targetReferenceDomain": "com.degica.vnm.default",
                    "targetReference": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "operation": 0,
                    "source": 0,
                    "sourceValue": 2,
                    "sourceRandom": {
                        "start": 0,
                        "end": 0
                    },
                    "sourceScope": 0,
                    "sourceVariable": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "sourceReferenceDomain": "com.degica.vnm.default",
                    "sourceReference": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "C872029675F0314C9C983A1700A69B4D6EAC",
                "indent": 2
            },
            {
                "id": "gs.ConditionElseIf",
                "params": {
                    "variable": {
                        "name": "Skip",
                        "index": 1,
                        "scope": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "numberValue": 2,
                    "textValue": "",
                    "switchValue": 0,
                    "valueType": 0,
                    "operation": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "FD8AD20F1CA0464AB988E4F8F54BE56E11C8",
                "indent": 1
            },
            {
                "id": "gs.StopTimer",
                "params": {
                    "number": 3
                },
                "uid": "245B3A026AA12646064B7D07F384DDA6B10D",
                "indent": 2
            },
            {
                "id": "gs.BreakLoopCommand",
                "params": {},
                "uid": "CE4D40E855B9B942B9392C906C3E9598F6AA",
                "indent": 2
            },
            {
                "id": "gs.SaveSettings",
                "params": {},
                "uid": "BA928AA08555044461086AE71315BE62AF18",
                "indent": 0
            },
            {
                "id": "gs.SaveGame",
                "params": {
                    "slot": 1,
                    "thumbWidth": 0,
                    "thumbHeight": 0
                },
                "uid": "CD80B080569047479E69BEB3FD0B9742CFFE",
                "indent": 0
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "10FBB12376D4D149CC784FA46C0B45A798E4",
                        "name": "The Last One Out, Get the Lights"
                    },
                    "savePrevious": 0,
                    "erasePictures": 1,
                    "eraseTexts": 1,
                    "eraseVideos": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "F3A27E912D50714A9E9B96E6468A5BDCE2B8",
                "indent": 0,
                "expanded": true
            }
        ],
        "livePreviewDisabled": false,
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
            },
            {
                "name": "Skip",
                "index": 1,
                "scope": 0,
                "domain": "com.degica.vnm.default"
            },
            {
                "name": "",
                "index": 2,
                "scope": 1
            },
            {
                "name": "",
                "index": 3,
                "scope": 1
            },
            {
                "name": "",
                "index": 4,
                "scope": 1
            },
            {
                "name": "",
                "index": 5,
                "scope": 1
            },
            {
                "name": "",
                "index": 6,
                "scope": 1
            },
            {
                "name": "",
                "index": 7,
                "scope": 1
            },
            {
                "name": "",
                "index": 8,
                "scope": 1
            },
            {
                "name": "",
                "index": 9,
                "scope": 1
            }
        ],
        "booleanVariables": [
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