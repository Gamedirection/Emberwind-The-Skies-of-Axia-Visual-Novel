ui.UiFactory.customTypes["ui.InputTextBox"] = {
  "type": "ui.FreeLayout",
  "frame": [0, 0, Graphics.width, Graphics.height],
  "controls": [
    {
      "type": "ui.FreeLayout",
      "sizeToFit": true,
      "alignmentX": "center",
      "frame": [0, 10],
      "zIndex": 1000,
      "controls": [
        {
          "type": "ui.FreeLayout",
          "sizeToFit": true,
          "controls": [
            {
              "type": "ui.Window",
              "frame": [0, 0, "MAX($tempFields.letters * 110, 900)", 490],
              "zIndex": 5
            }, {
              "type": "ui.Panel",
              "style": "windowSubPanel",
              "frame": ["MAX($tempFields.letters * 110, 900) - 130", 180, 130, 470 - 160],
              "zIndex": 10
            }, {
              "type": "ui.Panel",
              "color": [111, 111, 111],
              "frame": [0, 180, "MAX($tempFields.letters * 110, 900)", 1],
              "zIndex": 10
            }, {
              "type": "ui.Text",
              "styles": ["regularUIText"],
              "sizeToFit": true,
              "text": "Text Entry",
              "zIndex": 10,
              "frame": [20, 15]
            }, {
              "type": "ui.StackLayout",
              "components": [
                {
                  "id": "textInput",
                  "type": "Component_TextInput",
                  "params": {
                    "letters": $(function() {
                      return $tempFields.letters;
                    })
                  }
                }
              ],
              "sizeToFit": true,
              "id": "textField",
              "zIndex": 10,
              "alignmentX": "center",
              "frame": [12, 50],
              "dataField": $(function() {
                return $tempFields.letters;
              }),
              "template": {
                "type": "ui.FreeLayout",
                "margin": [5, 5, 5, 5],
                "sizeToFit": true,
                "controls": [
                  {
                    "type": "ui.Image",
                    "image": "UI/entrybox.png"
                  }, {
                    "type": "ui.Text",
                    "frame": [0, 0],
                    "sizeToFit": true,
                    "alignmentX": "center",
                    "alignmentY": "center",
                    "color": [0, 0, 0, 0],
                    "style": "textInputEntryText",
                    "text": ""
                  }
                ]
              }
            }
          ]
        }, {
          "type": "ui.GridLayout",
          "sizeToFit": true,
          "id": "charPage1_1",
          "rows": 6,
          "order": 10,
          "columns": 5,
          "alignmentY": 0,
          "frame": [30, 185],
          "cellSpacing": [0, 0, 20, 0],
          "controls": $(function() {
            return $dataFields.textInputPages[0];
          })
        }, {
          "type": "ui.GridLayout",
          "id": "charPage1_2",
          "sizeToFit": true,
          "rows": 6,
          "columns": 5,
          "alignmentY": 0,
          "frame": [420, 185],
          "cellSpacing": [0, 0, 20, 0],
          "controls": $(function() {
            return $dataFields.textInputPages[1];
          })
        }, {
          "type": "ui.GridLayout",
          "sizeToFit": true,
          "id": "charPage2_1",
          "visible": false,
          "rows": 6,
          "order": 10,
          "columns": 5,
          "alignmentY": 0,
          "frame": [30, 185],
          "cellSpacing": [0, 0, 20, 0],
          "controls": $(function() {
            return $dataFields.textInputPages[2];
          })
        }, {
          "type": "ui.GridLayout",
          "id": "charPage2_2",
          "visible": false,
          "sizeToFit": true,
          "rows": 6,
          "columns": 5,
          "alignmentY": 0,
          "frame": [420, 185],
          "cellSpacing": [0, 0, 20, 0],
          "controls": $(function() {
            return $dataFields.textInputPages[3];
          })
        }, {
          "type": "ui.TextBackspace",
          "params": {
            "target": $(function() {
              return 'textField.textInput';
            })
          },
          "frame": ["100% - 120", 260]
        }, {
          "type": "ui.TextAccept",
          "frame": ["100% - 120", 200]
        }, {
          "type": "ui.Text",
          "sizeToFit": true,
          "styles": ["regularUIText"],
          "frame": ["100% - 120", 320],
          "text": "Page",
          "zIndex": 5000,
          "action": {
            "name": "executeFormulas",
            "params": [
              $(function() {
                return $charPage1_1.visible = !$charPage1_1.visible;
              }), $(function() {
                return $charPage1_2.visible = !$charPage1_2.visible;
              }), $(function() {
                return $charPage2_1.visible = !$charPage2_1.visible;
              }), $(function() {
                return $charPage2_2.visible = !$charPage2_2.visible;
              })
            ]
          }
        }
      ]
    }
  ]
};

ui.UiFactory.customTypes["ui.Letter"] = {
  "type": "ui.FreeLayout",
  "sizeToFit": true,
  "controls": [
    {
      "type": "ui.Frame",
      "styles": ["selectableWindowShadow"],
      "zIndex": 5000,
      "padding": [-16, -16, -16, -16],
      "frame": [0, 0, 50, 50],
      "actions": [
        {
          "name": "action_addLetter",
          "target": (function() {
            return p.target;
          }),
          "params": {
            "letter": (function() {
              return p.text;
            })
          }
        }
      ]
    }, {
      "type": "ui.Text",
      "sizeToFit": true,
      "alignmentX": "center",
      "alignmentY": "center",
      "style": "textInputLetterText",
      "text": function() {
        return p.text;
      },
      "zIndex": 5000
    }
  ]
};

ui.UiFactory.customTypes["ui.TextBackspace"] = {
  "type": "ui.FreeLayout",
  "sizeToFit": true,
  "controls": [
    {
      "type": "ui.Text",
      "sizeToFit": true,
      "styles": ["regularUIText"],
      "text": "Back",
      "zIndex": 5000,
      "action": {
        "name": "action_removeLetter",
        "target": (function() {
          return p.target;
        }),
        "params": {
          "letter": (function() {
            return p.text;
          })
        }
      }
    }
  ]
};

ui.UiFactory.customTypes["ui.TextAccept"] = {
  "type": "ui.FreeLayout",
  "sizeToFit": true,
  "controls": [
    {
      "type": "ui.Text",
      "sizeToFit": true,
      "styles": ["regularUIText"],
      "text": "Confirm",
      "zIndex": 5000,
      "action": {
        "name": "emitEvent",
        "params": {
          "name": "accept",
          "source": $(function() {
            return o.parent.parent.parent;
          }),
          "data": {
            "text": $(function() {
              return $textField.textInput.text;
            })
          }
        }
      }
    }
  ]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEVBQUUsQ0FBQyxTQUFTLENBQUMsV0FBWSxDQUFBLGlCQUFBLENBQXpCLEdBQThDO0VBQzFDLE1BQUEsRUFBUSxlQURrQztFQUUxQyxPQUFBLEVBQVMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLFFBQVEsQ0FBQyxLQUFoQixFQUF1QixRQUFRLENBQUMsTUFBaEMsQ0FGaUM7RUFHMUMsVUFBQSxFQUFZO0lBQ1I7TUFDSSxNQUFBLEVBQVEsZUFEWjtNQUVJLFdBQUEsRUFBYSxJQUZqQjtNQUdJLFlBQUEsRUFBYyxRQUhsQjtNQUlJLE9BQUEsRUFBUyxDQUFDLENBQUQsRUFBSSxFQUFKLENBSmI7TUFLSSxRQUFBLEVBQVUsSUFMZDtNQU1JLFVBQUEsRUFBWTtRQUNSO1VBQ0ksTUFBQSxFQUFRLGVBRFo7VUFFSSxXQUFBLEVBQWEsSUFGakI7VUFHSSxVQUFBLEVBQVk7WUFDUjtjQUNJLE1BQUEsRUFBUSxXQURaO2NBRUksT0FBQSxFQUFTLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxxQ0FBUCxFQUE4QyxHQUE5QyxDQUZiO2NBR0ksUUFBQSxFQUFVLENBSGQ7YUFEUSxFQU1SO2NBQ0ksTUFBQSxFQUFRLFVBRFo7Y0FFSSxPQUFBLEVBQVMsZ0JBRmI7Y0FHSSxPQUFBLEVBQVMsQ0FBQywyQ0FBRCxFQUE4QyxHQUE5QyxFQUFtRCxHQUFuRCxFQUF3RCxHQUFBLEdBQU0sR0FBOUQsQ0FIYjtjQUlJLFFBQUEsRUFBVSxFQUpkO2FBTlEsRUFZUjtjQUNJLE1BQUEsRUFBUSxVQURaO2NBRUksT0FBQSxFQUFTLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBRmI7Y0FHSSxPQUFBLEVBQVMsQ0FBQyxDQUFELEVBQUksR0FBSixFQUFTLHFDQUFULEVBQWdELENBQWhELENBSGI7Y0FJSSxRQUFBLEVBQVUsRUFKZDthQVpRLEVBa0JSO2NBQ0ksTUFBQSxFQUFR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QSxFQUFVO1VBQUUsTUFBQSxFQUFRLFFBQVY7VUFBb0IsUUFBQSxFQUFXLENBQUEsQ0FBRSxTQUFBO21CQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1VBQW5CLENBQUYsQ0FBL0I7VUFBNkQsTUFBQSxFQUFRO1lBQUUsTUFBQSxFQUFTLENBQUEsQ0FBRSxTQUFBO3FCQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUM7WUFBeEIsQ0FBRixDQUFYO1dBQXJFO1NBQWhDO09BTmQ7S0FEUTtHQUg0QiIsInNvdXJjZXNDb250ZW50IjpbInVpLlVpRmFjdG9yeS5jdXN0b21UeXBlc1tcInVpLklucHV0VGV4dEJveFwiXSA9IHtcbiAgICBcInR5cGVcIjogXCJ1aS5GcmVlTGF5b3V0XCIsXG4gICAgXCJmcmFtZVwiOiBbMCwgMCwgR3JhcGhpY3Mud2lkdGgsIEdyYXBoaWNzLmhlaWdodF0sXG4gICAgXCJjb250cm9sc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLkZyZWVMYXlvdXRcIixcbiAgICAgICAgICAgIFwic2l6ZVRvRml0XCI6IHRydWUsXG4gICAgICAgICAgICBcImFsaWdubWVudFhcIjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIFwiZnJhbWVcIjogWzAsIDEwXSxcbiAgICAgICAgICAgIFwiekluZGV4XCI6IDEwMDAsXG4gICAgICAgICAgICBcImNvbnRyb2xzXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLkZyZWVMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzaXplVG9GaXRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJjb250cm9sc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidWkuV2luZG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmcmFtZVwiOiBbMCwgMCwgXCJNQVgoJHRlbXBGaWVsZHMubGV0dGVycyAqIDExMCwgOTAwKVwiLCA0OTBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiekluZGV4XCI6IDVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidWkuUGFuZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwid2luZG93U3ViUGFuZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZyYW1lXCI6IFtcIk1BWCgkdGVtcEZpZWxkcy5sZXR0ZXJzICogMTEwLCA5MDApIC0gMTMwXCIsIDE4MCwgMTMwLCA0NzAgLSAxNjBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiekluZGV4XCI6IDEwXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLlBhbmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBbMTExLCAxMTEsIDExMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmcmFtZVwiOiBbMCwgMTgwLCBcIk1BWCgkdGVtcEZpZWxkcy5sZXR0ZXJzICogMTEwLCA5MDApXCIsIDFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiekluZGV4XCI6IDEwXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLlRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlc1wiOiBbXCJyZWd1bGFyVUlUZXh0XCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVRvRml0XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiVGV4dCBFbnRyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiekluZGV4XCI6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnJhbWVcIjogWzIwLCAxNV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidWkuU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudHNcIjogW3sgXCJpZFwiOiBcInRleHRJbnB1dFwiLCBcInR5cGVcIjogXCJDb21wb25lbnRfVGV4dElucHV0XCIsIFwicGFyYW1zXCI6IHsgXCJsZXR0ZXJzXCI6ICgkIC0+ICR0ZW1wRmllbGRzLmxldHRlcnMpIH0gfV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplVG9GaXRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwidGV4dEZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ6SW5kZXhcIjogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGlnbm1lbnRYXCI6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmcmFtZVwiOiBbMTIsIDUwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFGaWVsZFwiOiAkIC0+ICR0ZW1wRmllbGRzLmxldHRlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRlbXBsYXRlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidWkuRnJlZUxheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1hcmdpblwiOiBbNSwgNSwgNSwgNV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVRvRml0XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udHJvbHNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLkltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOiBcIlVJL2VudHJ5Ym94LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLlRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZyYW1lXCI6IFswLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpemVUb0ZpdFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxpZ25tZW50WFwiOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxpZ25tZW50WVwiOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogWzAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJ0ZXh0SW5wdXRFbnRyeVRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzaXplVG9GaXRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcImNoYXJQYWdlMV8xXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicm93c1wiOiA2LFxuICAgICAgICAgICAgICAgICAgICBcIm9yZGVyXCI6IDEwLFxuICAgICAgICAgICAgICAgICAgICBcImNvbHVtbnNcIjogNSxcbiAgICAgICAgICAgICAgICAgICAgXCJhbGlnbm1lbnRZXCI6IDAsXG4gICAgICAgICAgICAgICAgICAgIFwiZnJhbWVcIjogWzMwLCAxODVdLFxuICAgICAgICAgICAgICAgICAgICBcImNlbGxTcGFjaW5nXCI6IFswLCAwLCAyMCwgMF0sXG4gICAgICAgICAgICAgICAgICAgIFwiY29udHJvbHNcIjogJCAtPiAkZGF0YUZpZWxkcy50ZXh0SW5wdXRQYWdlc1swXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ1aS5HcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJjaGFyUGFnZTFfMlwiLFxuICAgICAgICAgICAgICAgICAgICBcInNpemVUb0ZpdFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcInJvd3NcIjogNixcbiAgICAgICAgICAgICAgICAgICAgXCJjb2x1bW5zXCI6IDUsXG4gICAgICAgICAgICAgICAgICAgIFwiYWxpZ25tZW50WVwiOiAwLFxuICAgICAgICAgICAgICAgICAgICBcImZyYW1lXCI6IFs0MjAsIDE4NV0sXG4gICAgICAgICAgICAgICAgICAgIFwiY2VsbFNwYWNpbmdcIjogWzAsIDAsIDIwLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgXCJjb250cm9sc1wiOiAkIC0+ICRkYXRhRmllbGRzLnRleHRJbnB1dFBhZ2VzWzFdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzaXplVG9GaXRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcImNoYXJQYWdlMl8xXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgXCJyb3dzXCI6IDYsXG4gICAgICAgICAgICAgICAgICAgIFwib3JkZXJcIjogMTAsXG4gICAgICAgICAgICAgICAgICAgIFwiY29sdW1uc1wiOiA1LFxuICAgICAgICAgICAgICAgICAgICBcImFsaWdubWVudFlcIjogMCxcbiAgICAgICAgICAgICAgICAgICAgXCJmcmFtZVwiOiBbMzAsIDE4NV0sXG4gICAgICAgICAgICAgICAgICAgIFwiY2VsbFNwYWNpbmdcIjogWzAsIDAsIDIwLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgXCJjb250cm9sc1wiOiAkIC0+ICRkYXRhRmllbGRzLnRleHRJbnB1dFBhZ2VzWzJdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcImNoYXJQYWdlMl8yXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgXCJzaXplVG9GaXRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJyb3dzXCI6IDYsXG4gICAgICAgICAgICAgICAgICAgIFwiY29sdW1uc1wiOiA1LFxuICAgICAgICAgICAgICAgICAgICBcImFsaWdubWVudFlcIjogMCxcbiAgICAgICAgICAgICAgICAgICAgXCJmcmFtZVwiOiBbNDIwLCAxODVdLFxuICAgICAgICAgICAgICAgICAgICBcImNlbGxTcGFjaW5nXCI6IFswLCAwLCAyMCwgMF0sXG4gICAgICAgICAgICAgICAgICAgIFwiY29udHJvbHNcIjogJCAtPiAkZGF0YUZpZWxkcy50ZXh0SW5wdXRQYWdlc1szXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ1aS5UZXh0QmFja3NwYWNlXCIsIFwicGFyYW1zXCI6IHsgXCJ0YXJnZXRcIjogKCQgLT4gJ3RleHRGaWVsZC50ZXh0SW5wdXQnKSB9LFxuICAgICAgICAgICAgICAgICAgICBcImZyYW1lXCI6IFtcIjEwMCUgLSAxMjBcIiwgMjYwXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ1aS5UZXh0QWNjZXB0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZnJhbWVcIjogW1wiMTAwJSAtIDEyMFwiLCAyMDBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLlRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzaXplVG9GaXRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZXNcIjogW1wicmVndWxhclVJVGV4dFwiXSxcbiAgICAgICAgICAgICAgICAgICAgXCJmcmFtZVwiOiBbXCIxMDAlIC0gMTIwXCIsIDMyMF0sXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIlBhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ6SW5kZXhcIjogNTAwMCxcbiAgICAgICAgICAgICAgICAgICAgXCJhY3Rpb25cIjoge1wibmFtZVwiOiBcImV4ZWN1dGVGb3JtdWxhc1wiLCBcInBhcmFtc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAkIC0+ICRjaGFyUGFnZTFfMS52aXNpYmxlID0gISRjaGFyUGFnZTFfMS52aXNpYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAkIC0+ICRjaGFyUGFnZTFfMi52aXNpYmxlID0gISRjaGFyUGFnZTFfMi52aXNpYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAkIC0+ICRjaGFyUGFnZTJfMS52aXNpYmxlID0gISRjaGFyUGFnZTJfMS52aXNpYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAkIC0+ICRjaGFyUGFnZTJfMi52aXNpYmxlID0gISRjaGFyUGFnZTJfMi52aXNpYmxlXG4gICAgICAgICAgICAgICAgICAgIF0gfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIF1cbn1cblxudWkuVWlGYWN0b3J5LmN1c3RvbVR5cGVzW1widWkuTGV0dGVyXCJdID0ge1xuICAgIFwidHlwZVwiOiBcInVpLkZyZWVMYXlvdXRcIixcbiAgICBcInNpemVUb0ZpdFwiOiB0cnVlLFxuICAgIFwiY29udHJvbHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJ1aS5GcmFtZVwiLFxuICAgICAgICAgICAgXCJzdHlsZXNcIjogW1wic2VsZWN0YWJsZVdpbmRvd1NoYWRvd1wiXSxcbiAgICAgICAgICAgIFwiekluZGV4XCI6IDUwMDAsXG4gICAgICAgICAgICBcInBhZGRpbmdcIjogWy0xNiwgLTE2LCAtMTYsIC0xNl0sXG4gICAgICAgICAgICBcImZyYW1lXCI6IFswLCAwLCA1MCwgNTBdLFxuICAgICAgICAgICAgXCJhY3Rpb25zXCI6IFt7XCJuYW1lXCI6IFwiYWN0aW9uX2FkZExldHRlclwiLCBcInRhcmdldFwiOiAoLT4gcC50YXJnZXQpLCBcInBhcmFtc1wiOiB7IFwibGV0dGVyXCI6ICgtPiBwLnRleHQpIH0gfV1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidWkuVGV4dFwiLFxuICAgICAgICAgICAgXCJzaXplVG9GaXRcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiYWxpZ25tZW50WFwiOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgXCJhbGlnbm1lbnRZXCI6IFwiY2VudGVyXCJcbiAgICAgICAgICAgIFwic3R5bGVcIjogXCJ0ZXh0SW5wdXRMZXR0ZXJUZXh0XCIsXG4gICAgICAgICAgICBcInRleHRcIjogLT4gcC50ZXh0XG4gICAgICAgICAgICBcInpJbmRleFwiOiA1MDAwXG4gICAgICAgIH1cbiAgICBdXG59XG51aS5VaUZhY3RvcnkuY3VzdG9tVHlwZXNbXCJ1aS5UZXh0QmFja3NwYWNlXCJdID0ge1xuICAgIFwidHlwZVwiOiBcInVpLkZyZWVMYXlvdXRcIixcbiAgICBcInNpemVUb0ZpdFwiOiB0cnVlLFxuICAgIFwiY29udHJvbHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJ1aS5UZXh0XCIsXG4gICAgICAgICAgICBcInNpemVUb0ZpdFwiOiB0cnVlLFxuICAgICAgICAgICAgXCJzdHlsZXNcIjogW1wicmVndWxhclVJVGV4dFwiXSxcbiAgICAgICAgICAgIFwidGV4dFwiOiBcIkJhY2tcIixcbiAgICAgICAgICAgIFwiekluZGV4XCI6IDUwMDAsXG4gICAgICAgICAgICBcImFjdGlvblwiOiB7XCJuYW1lXCI6IFwiYWN0aW9uX3JlbW92ZUxldHRlclwiLCBcInRhcmdldFwiOiAoLT4gcC50YXJnZXQpLCBcInBhcmFtc1wiOiB7IFwibGV0dGVyXCI6ICgtPiBwLnRleHQpIH0gfVxuICAgICAgICB9XG4gICAgXVxufVxudWkuVWlGYWN0b3J5LmN1c3RvbVR5cGVzW1widWkuVGV4dEFjY2VwdFwiXSA9IHtcbiAgICBcInR5cGVcIjogXCJ1aS5GcmVlTGF5b3V0XCIsXG4gICAgXCJzaXplVG9GaXRcIjogdHJ1ZSxcbiAgICBcImNvbnRyb2xzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidWkuVGV4dFwiLFxuICAgICAgICAgICAgXCJzaXplVG9GaXRcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwic3R5bGVzXCI6IFtcInJlZ3VsYXJVSVRleHRcIl0sXG4gICAgICAgICAgICBcInRleHRcIjogXCJDb25maXJtXCIsXG4gICAgICAgICAgICBcInpJbmRleFwiOiA1MDAwLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjoge1wibmFtZVwiOiBcImVtaXRFdmVudFwiLCBcInBhcmFtc1wiOiB7IFwibmFtZVwiOiBcImFjY2VwdFwiLCBcInNvdXJjZVwiOiAoJCAtPiBvLnBhcmVudC5wYXJlbnQucGFyZW50KSwgXCJkYXRhXCI6IHsgXCJ0ZXh0XCI6ICgkIC0+ICR0ZXh0RmllbGQudGV4dElucHV0LnRleHQpIH0gfSB9XG4gICAgICAgIH1cbiAgICBdXG59Il19
//# sourceURL=Template_InputTextBox_176.js