GS.dataCache['B3858DA05130B341881A1CD66D1235767DAE'] = {
    "uid": "B3858DA05130B341881A1CD66D1235767DAE",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "The Hacksaw Bridge",
        "type": "vn.scene",
        "parentId": "F395DE37860336477B4A73A82730DCE724DC",
        "chapterUid": "F395DE37860336477B4A73A82730DCE724DC",
        "order": 2,
        "livePreviewDisabled": false,
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
                "uid": "4A64F8002313234F54982AF69F8F346738DE",
                "indent": 0
            },
            {
                "id": "gs.PlayMusic",
                "params": {
                    "layer": 0,
                    "loop": 1,
                    "music": {
                        "folderPath": "Emberwind Assets/Audio/Music",
                        "name": "Ember 3 - Roughshod.ogg",
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
                "uid": "291D3D126CD1764BAA3976D3A441A7AA28AD",
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
                "uid": "681D24C33073B2403B2B82135593C25428B8",
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
                        "defaultText": "The streets of Gelspar are deserted as you approach the Hacksaw Bridge. Only a few sheets of metal separate you from the vast abyss below. To fall off Gelspar is to fall off the edge of the world. You don't even know if you would ever hit the ground."
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
                "uid": "80F8A5E088449442E218940351F6997638E8",
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
                        "defaultText": "The bridge is a dilapidated structure of wood and sheet metal running between two of the larger vessels that make up the slum's core. In better days, a railing provided some degree of safety for the careless and clumsy. It has long since fallen away, exposing travellers to high winds and a precipitous drop that has claimed many drunkards."
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
                "uid": "6A2AE95413AEF14A468B8A54D9F99CA96587",
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
                        "defaultText": "Even now, two bodies slump against a building next to the bridge, only a few feet from the edge. Whether they are drunk or dead is anyone's guess, but a hangover will be the least of their problems if they roll out of the wrong side of this bed."
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
                "uid": "1B9C9E7E43670141DF58ADA2FA9E00F7A73C",
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
                        "defaultText": "The two men may need assistance. On the other hand, they are easy prey to pilfer from as well. Do you want to take a closer look and decide what to do with them?"
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
                "uid": "5DDD6E066FE5674D1758DF95EF9AC261D964",
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
                        "label": "Assist",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "Assist"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "uid": "6F53ABD5587FA5454B0963360422A402026C",
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
                        "label": "Steal",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "Steal"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "uid": "BBBB959C3B68C2475D884AA332BF3EF01DCC",
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
                        "label": "Ignore",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "Ignore"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "uid": "E6DF4DF25A93C44C7E1BA198F7ABEBA5A7E4",
                "indent": 0
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "uid": "16465C6B1559C04FBA7A0BF4455B1B63794A",
                "indent": 0
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "Assist"
                },
                "uid": "6684461C6277A343BE7AAA88BDF8CED91068",
                "indent": 0
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "CampaignClock",
                        "index": 5,
                        "scope": 1,
                        "domain": "com.degica.vnm.default",
                        "changed": true
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
                    "operation": 1,
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
                "uid": "74947DCE0D31324F09890A82C2E8A00189AF",
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
                        "defaultText": "The men seem to still be alive, but their breath is shallow and infrequent. You can see what looks like a small vial in one of their pockets."
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
                "uid": "8B8D946C8978154C6A5B2898210464D362C4",
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
                        "defaultText": "The men wake up and leave, offering no thanks."
                    },
                    "position": 0,
                    "characterId": 0,
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "BCBF0C266A94D741D1386A58E160504FAA2A",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Ignore",
                    "target": "activeContext"
                },
                "uid": "C054F1A622DDB54F32485A359EAF4EE6C6B5",
                "indent": 0
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "Steal"
                },
                "uid": "E1208DBC63615144C52BB785224B35044FE8",
                "indent": 0
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "CampaignClock",
                        "index": 5,
                        "scope": 1,
                        "domain": "com.degica.vnm.default",
                        "changed": true
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
                    "operation": 1,
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
                "uid": "B376FD5A1184E84523992F656A581DFB31E9",
                "indent": 0
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "CampaignClock",
                        "index": 5,
                        "scope": 1,
                        "domain": "com.degica.vnm.default",
                        "changed": true
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
                    "operation": 1,
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
                "uid": "3EE3F4035C481949553961C929187C151E86",
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
                        "defaultText": "The men seem to still be alive, but their breath is shallow and infrequent. You can see what looks like a small vial in one of their pockets."
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
                "uid": "8F5B086274FFF549FC680709F87CA2049F12",
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
                        "defaultText": "Add 1 Shot of \"Liquid Courage\" to 1 Hero's Inventory"
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
                "uid": "C584F50096F9E34F431AD9C0519DDD3E43E8",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Ignore",
                    "target": "activeContext"
                },
                "uid": "8156A3185385E840877AE934D3EA52E8908A",
                "indent": 0
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "Ignore"
                },
                "uid": "FDC1AF9E1180324F336BAB72E9991CA39EF8",
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
                        "defaultText": "The surrounding shadows grow deeper every minute you stand at the edge of the Hacksaw Bridge. The derelict span looks like it might fall apart at any moment, and who knows what criminals lurk nearby, ready to prey on anyone foolish enough to try crossing the bridge after dark?"
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
                "uid": "E3F0769C70D3C14F7C4A9BB103DE36853503",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.Condition",
                "params": {
                    "variable": {
                        "name": "CampaignClock",
                        "index": 5,
                        "scope": 1,
                        "domain": "com.degica.vnm.default",
                        "changed": true
                    },
                    "numberValue": 3,
                    "textValue": "",
                    "switchValue": 0,
                    "valueType": 0,
                    "operation": 5,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "4228AE1533E583432E592D03B68CDFB9694F",
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
                        "label": "Scout for an ambush",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "Scout for an ambush"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "uid": "060A03F605F990466C3A18882C24295845CA",
                "indent": 1
            },
            {
                "id": "gs.Condition",
                "params": {
                    "variable": {
                        "name": "CampaignClock",
                        "index": 5,
                        "scope": 1,
                        "domain": "com.degica.vnm.default",
                        "changed": true
                    },
                    "numberValue": 3,
                    "textValue": "",
                    "switchValue": 0,
                    "valueType": 0,
                    "operation": 5,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "6E4070CB5F11014E691B17851BD6A66F5E04",
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
                        "label": "Check for traps",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "Check for traps"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "uid": "9B68CF752751E646DE9890A2FDC4D9634DD8",
                "indent": 1
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
                        "label": "Proceed across the bridge",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "Proceed across the bridge"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "uid": "458EB04D2F0102486789DF01302A31AFA751",
                "indent": 0
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "uid": "385432F11C70E54967287C92BC32296FD65A",
                "indent": 0
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "Scout for an ambush"
                },
                "uid": "1E43758A0D73084516194D182DBF4B6DC87D",
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
                        "defaultText": "The near end of the bridge is lined with abandoned buildings and rubble. They would all make good hiding places for an ambush."
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
                "uid": "90DA0FAC6CCCE6473D585ED4330ED91B5DBF",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "StealthSkillCheck",
                        "index": 0,
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
                    "source": 1,
                    "sourceValue": 0,
                    "sourceRandom": {
                        "start": 1,
                        "end": 20
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
                "uid": "F832F5E50C0975406179B51524EEF7BB9C8A",
                "indent": 0
            },
            {
                "id": "gs.Condition",
                "params": {
                    "variable": {
                        "name": "StealthSkillCheck",
                        "index": 0,
                        "scope": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "numberValue": {
                        "name": "Stealth",
                        "index": 52,
                        "scope": 1,
                        "changed": true,
                        "domain": "com.degica.vnm.default"
                    },
                    "textValue": "",
                    "switchValue": 0,
                    "valueType": 0,
                    "operation": 5,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "217B6F8B0846754F7A6BD4C54CCA7B41B00A",
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
                        "defaultText": "You are about to conclude your investigation when you catch the slightest movement in the corner of your eye. A cloud of smoke and shadow slowly takes shape beneath an overhang on your side of the bridge. You can barely make out the outline of a monstrous hound that seems to melt into the darkness."
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
                "uid": "10B1EDD91A3F354B1538CD814D511804AE4A",
                "indent": 1,
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
                        "defaultText": "You are about to conclude your investigation when you catch the slightest movement in the corner of your eye. A cloud of smoke and shadow slowly takes shape beneath an overhang on your side of the bridge. You can barely make out the outline of a monstrous hound that seems to melt into the darkness."
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
                "uid": "7447DB507D4FE241E43A0AD79563D73BF758",
                "indent": 1,
                "expanded": true
            },
            {
                "id": "gs.Condition",
                "params": {
                    "variable": {
                        "name": "PotentialDangers",
                        "index": 30,
                        "scope": 1,
                        "domain": "com.degica.vnm.default",
                        "changed": true
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
                "uid": "9A3ECFD0678653417C6BCCC4B74C888DF199",
                "indent": 1
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "Advantage",
                        "index": 7,
                        "scope": 1,
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
                    "operation": 1,
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
                "uid": "FA7D1CFD4D8FC641394BE7D677FD378C749A",
                "indent": 2
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "CampaignClock",
                        "index": 5,
                        "scope": 1,
                        "domain": "com.degica.vnm.default",
                        "changed": true
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
                    "operation": 1,
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
                "uid": "DC3D51983D980548B57A4C0888312A3E59A3",
                "indent": 2
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Proceeding across the bridge",
                    "target": "activeContext"
                },
                "uid": "792B66C218BB67475979A7F5D10436262F8A",
                "indent": 2
            },
            {
                "id": "gs.ConditionElse",
                "params": {},
                "uid": "AE375DBD9CBE864C7048D20972AB03B16AB1",
                "indent": 1
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "CampaignClock",
                        "index": 5,
                        "scope": 1,
                        "domain": "com.degica.vnm.default",
                        "changed": true
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
                    "operation": 1,
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
                "uid": "31AB09DB107B0745378BD9A2EEFEC6465D6A",
                "indent": 2
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Proceeding across the bridge",
                    "target": "activeContext"
                },
                "uid": "61262F925D7EB447FA0832F8A56BA5F7B09F",
                "indent": 2
            },
            {
                "id": "gs.ConditionElseIf",
                "params": {
                    "variable": {
                        "name": "Gelspar",
                        "index": 28,
                        "scope": 1,
                        "domain": "com.degica.vnm.default",
                        "changed": true
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
                "uid": "078BAB2832E5564270186A679B28242EDA86",
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
                        "defaultText": "You are about to conclude your investigation when you catch the slightest movement in the corner of your eye. A cloud of smoke and shadow slowly takes shape beneath an overhang on your side of the bridge. You can barely make out the outline of a monstrous hound that seems to melt into the darkness."
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
                "uid": "BB7C59C176028744744AA6E27584821BC551",
                "indent": 1,
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
                        "defaultText": "The hound takes off as soon as it realizes it has been spotted. A second joins a moment later. The two beasts lope across the bridge and slip into the shadows on the far side. There may be danger ahead, but you should not have to worry about getting ambushed from behind."
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
                "uid": "545E939B73055548AC2B701769D35AB20B51",
                "indent": 1,
                "expanded": true
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "CampaignClock",
                        "index": 5,
                        "scope": 1,
                        "domain": "com.degica.vnm.default",
                        "changed": true
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
                    "operation": 1,
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
                "uid": "C2390E0F7255834C3A7956394EBFB9A17222",
                "indent": 1
            },
            {
                "id": "gs.Condition",
                "params": {
                    "variable": {
                        "name": "PotentialDangers",
                        "index": 30,
                        "scope": 1,
                        "domain": "com.degica.vnm.default",
                        "changed": true
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
                "uid": "FD5BC07108B4414B4B8B78154A06877F08FA",
                "indent": 1
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "Advantage",
                        "index": 7,
                        "scope": 1,
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
                    "operation": 1,
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
                "uid": "4C83749029DA7540468BEB0185EFD1165967",
                "indent": 2
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Proceeding across the bridge",
                    "target": "activeContext"
                },
                "uid": "0862689A92ED2648C65AFF86AB70E6C6295B",
                "indent": 2
            },
            {
                "id": "gs.ConditionElse",
                "params": {},
                "uid": "7BBB63125562E746301A38B8F72C06CFB8AE",
                "indent": 1
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Proceeding across the bridge",
                    "target": "activeContext"
                },
                "uid": "512B187451CE6744D13B0E0406C2B79AD296",
                "indent": 2
            },
            {
                "id": "gs.ConditionElse",
                "params": {},
                "uid": "2FA628E32DA2244CDB4A03F62EE8220391B6",
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
                        "defaultText": "You fan out as you approach the bridge, trying to cover as much ground as possible. Your examination does not reveal anything of note. If anyone is watching you, they are much stealthier than your party."
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
                "uid": "E6D4940C4AB96042F14BB7832268FF7B5B78",
                "indent": 1,
                "expanded": true
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "CampaignClock",
                        "index": 5,
                        "scope": 1,
                        "domain": "com.degica.vnm.default",
                        "changed": true
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
                    "operation": 1,
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
                "uid": "7A9440435072734C8A0A9E85D62A1DC85EAE",
                "indent": 1
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Proceeding across the bridge",
                    "target": "activeContext"
                },
                "uid": "8DC9E8352723E744417AC828C13C934A9442",
                "indent": 1
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "Check for traps"
                },
                "uid": "962B3D63427C11434B1B0EA17ABFD1050A0E",
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
                        "defaultText": "There are bloodstains, scuff marks, and other evidence of a recent skirmish. What else did the gangs leave behind?"
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
                "uid": "B845EA426747164C2B6A14F3407710E148CF",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "InsightSkillCheck",
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
                    "source": 1,
                    "sourceValue": 0,
                    "sourceRandom": {
                        "start": 1,
                        "end": 20
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
                "uid": "E0B7D51A81EA3145E3881A34EF26AB6C285A",
                "indent": 0
            },
            {
                "id": "gs.Condition",
                "params": {
                    "variable": {
                        "name": "InsightSkillCheck",
                        "index": 1,
                        "scope": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "numberValue": {
                        "name": "Insight",
                        "index": 48,
                        "scope": 1,
                        "changed": true,
                        "domain": "com.degica.vnm.default"
                    },
                    "textValue": "",
                    "switchValue": 0,
                    "valueType": 0,
                    "operation": 5,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "0ECAE6FF9AD7264E065894E186A50B1E559D",
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
                        "defaultText": "There do not seem to be any traps, but the bridge is dotted with piles of broken glass and jagged pieces of scrap metal that seem to have been strategically placed to impede movement. The terrain is hazardous, but less so now that you are aware of it and can take the appropriate precautions."
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
                "uid": "BF11EECE7BC828401A4A4FB139A2AD6C03EC",
                "indent": 1,
                "expanded": true
            },
            {
                "id": "gs.Condition",
                "params": {
                    "variable": {
                        "name": "PotentialDangers",
                        "index": 30,
                        "scope": 1,
                        "domain": "com.degica.vnm.default",
                        "changed": true
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
                "uid": "9AC82C1D8F63F142968A68F030D4C9B81670",
                "indent": 1
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "Advantage",
                        "index": 7,
                        "scope": 1,
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
                    "operation": 1,
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
                "uid": "F45A23CD3AB93640B19AB96079B2D0396385",
                "indent": 2
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "CampaignClock",
                        "index": 5,
                        "scope": 1,
                        "domain": "com.degica.vnm.default",
                        "changed": true
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
                    "operation": 1,
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
                "uid": "939A2A6A28B758403268A031CA64D406DFD7",
                "indent": 2
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Proceeding across the bridge",
                    "target": "activeContext"
                },
                "uid": "384E2DC125D23740C28B87B2F29FB1417CBC",
                "indent": 2
            },
            {
                "id": "gs.ConditionElse",
                "params": {},
                "uid": "4BB01EB28DCFC2435B69BA446AFDBBF30A85",
                "indent": 1
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "CampaignClock",
                        "index": 5,
                        "scope": 1,
                        "domain": "com.degica.vnm.default",
                        "changed": true
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
                    "operation": 1,
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
                "uid": "4AEEE8B2967B06412C292CC2C4571F1BF8B8",
                "indent": 2
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Proceeding across the bridge",
                    "target": "activeContext"
                },
                "uid": "3F46C5FF5544A549166A0E86EC26BF72BC71",
                "indent": 2
            },
            {
                "id": "gs.ConditionElseIf",
                "params": {
                    "variable": {
                        "name": "TheChasers",
                        "index": 20,
                        "scope": 1,
                        "domain": "com.degica.vnm.default",
                        "changed": true
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
                "uid": "5875D0C58D4F9547E83B99F7F85A7B7FA2A6",
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
                        "defaultText": "There do not seem to be any traps, but the bridge is dotted with piles of broken glass and jagged pieces of scrap metal that seem to have been strategically placed to impede movement. The terrain is hazardous, but less so now that you are aware of it and can take the appropriate precautions."
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
                "uid": "3C03D631752F7249E4995BA79F2881A1BB06",
                "indent": 1,
                "expanded": true
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "CampaignClock",
                        "index": 5,
                        "scope": 1,
                        "domain": "com.degica.vnm.default",
                        "changed": true
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
                    "operation": 1,
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
                "uid": "62F537886720584A1869C42445C660DF9976",
                "indent": 1
            },
            {
                "id": "gs.Condition",
                "params": {
                    "variable": {
                        "name": "PotentialDangers",
                        "index": 30,
                        "scope": 1,
                        "domain": "com.degica.vnm.default",
                        "changed": true
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
                "uid": "B3B71B9425DE5349F6593DA179EECAA41773",
                "indent": 1
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "Advantage",
                        "index": 7,
                        "scope": 1,
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
                    "operation": 1,
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
                "uid": "333B02576100A3464428B0A65A5738CE7270",
                "indent": 2
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Proceeding across the bridge",
                    "target": "activeContext"
                },
                "uid": "9601D1F24FA7A549087949D03D619F8BD7C8",
                "indent": 2
            },
            {
                "id": "gs.ConditionElse",
                "params": {},
                "uid": "A2B1599B5E14834BBF197640C49C4C117338",
                "indent": 1
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Proceeding across the bridge",
                    "target": "activeContext"
                },
                "uid": "F60CD6187B264845BF18BB97982771ED0235",
                "indent": 2
            },
            {
                "id": "gs.ConditionElse",
                "params": {},
                "uid": "6E1E204D4EA4484BE88A96487A6D95268352",
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
                        "defaultText": "There do not seem to be any traps. The bridge is dotted with broken glass, but it does not look like anything you need to worry about."
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
                "uid": "0CB2C2998F349846E75B460978E7AA9BEDEF",
                "indent": 1,
                "expanded": true
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "CampaignClock",
                        "index": 5,
                        "scope": 1,
                        "domain": "com.degica.vnm.default",
                        "changed": true
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
                    "operation": 1,
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
                "uid": "B685488F7B19F140BD198EE62916ACF8EDAA",
                "indent": 1
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Proceeding across the bridge",
                    "target": "activeContext"
                },
                "uid": "2EDC3472171E124C4E18CB938AB0FC3816DC",
                "indent": 1
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "Proceed across the bridge"
                },
                "uid": "1088BE66463DA141E7887C038F4AFD5B5065",
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
                        "defaultText": "At a glance, the bridge seems safe enough. You could be heading into a trap, but there is no time for a more thorough investigation."
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
                "uid": "97A6CA8D60E8C546469AB961C6F0D8835CD6",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "Proceeding across the bridge"
                },
                "uid": "DFA90C988EC4C34CBF39E2C5E65903BD111B",
                "indent": 0
            },
            {
                "id": "gs.PrepareSaveGame",
                "params": {
                    "snapshot": 1
                },
                "uid": "082764011EF78144A9291C138E4DD1FF6BA1",
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
                        "defaultText": "You step over the rubble and approach the Bridge."
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
                "uid": "FE21305B7FC6414CCA0A96A827032E6E651E",
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
                "uid": "9878C08811B8E541CA8BC2A2126BDB8B2993",
                "indent": 0
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "3BE000CF71FAA341056811F8A05386584B8A",
                        "name": "The Hacksaw Bridge, Part II"
                    },
                    "savePrevious": 1,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "0D7B99F066611440C849DDC39EA657000B0A",
                "indent": 0
            }
        ],
        "localizableStrings": {},
        "booleanVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "numberVariables": [
            {
                "name": "StealthSkillCheck",
                "index": 0,
                "scope": 0,
                "domain": "com.degica.vnm.default"
            },
            {
                "name": "InsightSkillCheck",
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
            }
        ],
        "stringVariables": [
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