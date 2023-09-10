document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const routeContainer = document.getElementById("routeContainer");
    
    // フォームに送信イベントリスナーを追加
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // 通常のフォーム送信を防止

        // 選択された値を取得
        const datePicker = document.getElementById('date-picker');     
        const selectedDate = new Date(datePicker.value);
        console.log(selectedDate);
        // 曜日を取得
        const daysOfWeek = ['日', '月', '火', '水', '木', '金', '土'];
        const day = daysOfWeek[selectedDate.getDay()];
        const spot = form.elements["spot"].value;
        const backspot = form.elements["backspot"].value;
        const time = form.elements["time"].value;
        const attime = form.elements["attime"].value;
        const type = form.elements["type"].value;
        console.log(spot);
        console.log(backspot);
        console.log(time);
        console.log(attime);
        console.log(type);

        // データをサーバーサイドに送信するなど、必要なアクションを実行
        // ...
        // 経路1を表示する関数
        var arrive  = 0
        var finish  = 0
        if (spot === "tokyo"){
            routeContainer.innerHTML = ''; // 既存の経路をクリア
            if(day==="土"||day==="日"){
                if(time==="7"){
                    addStationWithLink("7:04発 東京駅", "https://www.jreast.co.jp/estation/stations/1039.html");
                    addArrowAndDescription("↓", "総武線快速 成田空港行き");
                    addStation("8:31着/8:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("9:11着 佐原駅");
                    arrive =911
                }
                else if(time==="8"){
                    addStationWithLink("8:11発 東京駅", "https://www.jreast.co.jp/estation/stations/1039.html");
                    addArrowAndDescription("↓", "総武線快速 成田空港行き");
                    addStation("9:24着/9:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("10:10着 佐原駅");
                    arrive =1010
                }
                else if(time==="9"){
                    addStationWithLink("9:20発 東京駅", "https://www.jreast.co.jp/estation/stations/1039.html");
                    addArrowAndDescription("↓", "総武線快速 成田空港行き");
                    addStation("10:31着/10:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("11:10着 佐原駅");
                    arrive =1110
                }
                else if(time==="10"){
                    addStationWithLink("10:15発 東京駅", "https://www.jreast.co.jp/estation/stations/1039.html");
                    addArrowAndDescription("↓", "総武線快速 成田空港行き");
                    addStation("11:31着/11:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("12:12着 佐原駅");
                    arrive =1212
                }
                else if(time==="11"){
                    addStationWithLink("11:15発 東京駅", "https://www.jreast.co.jp/estation/stations/1039.html");
                    addArrowAndDescription("↓", "総武線快速 成田空港行き");
                    addStation("12:29着/12:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("13:21着 佐原駅");
                    arrive =1321
                }
                else if(time==="12"){
                    addStationWithLink("12:15発 東京駅", "https://www.jreast.co.jp/estation/stations/1039.html");
                    addArrowAndDescription("↓", "総武線快速 成田空港行き");
                    addStation("13:31着/13:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("14:11着 佐原駅");
                    arrive =1411
                }
                else if(time==="13"){
                    addStationWithLink("13:15発 東京駅", "https://www.jreast.co.jp/estation/stations/1039.html");
                    addArrowAndDescription("↓", "総武線快速 成田空港行き");
                    addStation("14:19着/14:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("15:12着 佐原駅");
                    arrive =1512
                }
                else if(time==="14"){
                    addStationWithLink("14:15発 東京駅", "https://www.jreast.co.jp/estation/stations/1039.html");
                    addArrowAndDescription("↓", "総武線快速 成田空港行き");
                    addStation("15:30着/15:36発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("16:06着 佐原駅");
                    arrive =1606
                }
            }
            else{
                if(time==="7"){
                    addStationWithLink("7:08発 東京駅", "https://www.jreast.co.jp/estation/stations/1039.html");
                    addArrowAndDescription("↓", "総武線快速 成田空港行き");
                    addStation("8:31着/8:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("9:11着 佐原駅");
                    arrive =911
                }
                if(time==="8"){
                    addStationWithLink("8:11発 東京駅", "https://www.jreast.co.jp/estation/stations/1039.html");
                    addArrowAndDescription("↓", "総武線快速 成田空港行き");
                    addStation("9:24着/9:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("10:10着 佐原駅");
                    arrive =1010
                }
                if(time==="9"){
                    addStationWithLink("9:18発 東京駅", "https://www.jreast.co.jp/estation/stations/1039.html");
                    addArrowAndDescription("↓", "総武線快速 成田空港行き");
                    addStation("10:31着/10:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("11:10着 佐原駅");
                    arrive =1110
                }
                if(time==="10"){
                    addStationWithLink("10:15発 東京駅", "https://www.jreast.co.jp/estation/stations/1039.html");
                    addArrowAndDescription("↓", "総武線快速 成田空港行き");
                    addStation("11:31着/11:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("12:12着 佐原駅");
                    arrive =1212
                }
                if(time==="11"){
                    addStationWithLink("11:15発 東京駅", "https://www.jreast.co.jp/estation/stations/1039.html");
                    addArrowAndDescription("↓", "総武線快速 成田空港行き");
                    addStation("12:29着/12:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("13:21着 佐原駅");
                    arrive =1321
                }
                if(time==="12"){
                    addStationWithLink("12:15発 東京駅", "https://www.jreast.co.jp/estation/stations/1039.html");
                    addArrowAndDescription("↓", "総武線快速 成田空港行き");
                    addStation("13:31着/13:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("14:11着 佐原駅");
                    arrive =1411
                }
                if(time==="13"){
                    addStationWithLink("13:15発 東京駅", "https://www.jreast.co.jp/estation/stations/1039.html");
                    addArrowAndDescription("↓", "総武線快速 成田空港行き");
                    addStation("14:29着/14:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("15:12着 佐原駅");
                    arrive =1512
                }
                if(time==="14"){
                    addStationWithLink("14:15発 東京駅", "https://www.jreast.co.jp/estation/stations/1039.html");
                    addArrowAndDescription("↓", "総武線快速 成田空港行き");
                    addStation("15:30着/15:36発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("16:06着 佐原駅");
                    arrive =1606
                }
            }
        } else if (spot === "shinagawa") {
            routeContainer.innerHTML = ''; // 既存の経路をクリア
            if(day==="土"||day==="日"){
                if(time==="7"||time==="8"){
                    addStationWithLink("8:03発 品川駅", "https://www.jreast.co.jp/estation/stations/788.html");
                    addArrowAndDescription("↓", "横須賀線、総武線快速 成田空港行き");
                    addStation("9:24着/9:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("10:10着 佐原駅");
                    arrive =1010
                }
                else if(time==="9"){
                    addStationWithLink("9:08発 品川駅", "https://www.jreast.co.jp/estation/stations/788.html");
                    addArrowAndDescription("↓", "横須賀線、総武線快速 成田空港行き");
                    addStation("10:31着/10:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("11:10着 佐原駅");
                    arrive =1110
                }
                else if(time==="10"){
                    addStationWithLink("10:00発 品川駅", "https://www.jreast.co.jp/estation/stations/788.html");
                    addArrowAndDescription("↓", "横須賀線、総武線快速 成田空港行き");
                    addStation("11:31着/11:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("12:12着 佐原駅");
                    arrive =1212
                }
                else if(time==="11"){
                    addStationWithLink("11:05発 品川駅", "https://www.jreast.co.jp/estation/stations/788.html");
                    addArrowAndDescription("↓", "横須賀線、総武線快速 成田空港行き");
                    addStation("12:29着/12:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("13:21着 佐原駅");
                    arrive =1321
                }
                else if(time==="12"){
                    addStationWithLink("12:05発 品川駅", "https://www.jreast.co.jp/estation/stations/788.html");
                    addArrowAndDescription("↓", "横須賀線、総武線快速 成田空港行き");
                    addStation("13:31着/13:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("14:11着 佐原駅");
                    arrive =1411
                }
                else if(time==="13"){
                    addStationWithLink("13:06発 品川駅", "https://www.jreast.co.jp/estation/stations/788.html");
                    addArrowAndDescription("↓", "横須賀線、総武線快速 成田空港行き");
                    addStation("14:29着/14:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("15:12着 佐原駅");
                    arrive =1512
                }
                else if(time==="14"){
                    addStationWithLink("14:05発 品川駅", "https://www.jreast.co.jp/estation/stations/788.html");
                    addArrowAndDescription("↓", "横須賀線、総武線快速 成田空港行き");
                    addStation("15:30着/15:36発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("16:06着 佐原駅");
                    arrive =1606
                }
            }
            else{
                if(time==="7"||time==="8"){
                    addStationWithLink("8:01発 品川駅", "https://www.jreast.co.jp/estation/stations/788.html");
                    addArrowAndDescription("↓", "横須賀線、総武線快速 成田空港行き");
                    addStation("9:24着/9:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("10:10着 佐原駅");
                    arrive =1010
                }
                if(time==="9"){
                    addStationWithLink("9:08発 品川駅", "https://www.jreast.co.jp/estation/stations/788.html");
                    addArrowAndDescription("↓", "横須賀線、総武線快速 成田空港行き");
                    addStation("10:31着/10:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("11:10着 佐原駅");
                    arrive =1110
                }
                if(time==="10"){
                    addStationWithLink("10:03発 品川駅", "https://www.jreast.co.jp/estation/stations/788.html");
                    addArrowAndDescription("↓", "横須賀線、総武線快速 成田空港行き");
                    addStation("11:31着/11:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("12:12着 佐原駅");
                    arrive =1212
                }
                if(time==="11"){
                    addStationWithLink("11:05発 品川駅", "https://www.jreast.co.jp/estation/stations/788.html");
                    addArrowAndDescription("↓", "横須賀線、総武線快速 成田空港行き");
                    addStation("12:29着/12:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("13:21着 佐原駅");
                    arrive =1321
                }
                if(time==="12"){
                    addStationWithLink("12:05発 品川駅", "https://www.jreast.co.jp/estation/stations/788.html");
                    addArrowAndDescription("↓", "横須賀線、総武線快速 成田空港行き");
                    addStation("13:31着/13:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("14:11着 佐原駅");
                    arrive =1411
                }
                if(time==="13"){
                    addStationWithLink("13:06発 品川駅", "https://www.jreast.co.jp/estation/stations/788.html");
                    addArrowAndDescription("↓", "横須賀線、総武線快速 成田空港行き");
                    addStation("14:29着/14:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("15:12着 佐原駅");
                    arrive =1512
                }
                if(time==="14"){
                    addStationWithLink("14:05発 品川駅", "https://www.jreast.co.jp/estation/stations/788.html");
                    addArrowAndDescription("↓", "横須賀線、総武線快速 成田空港行き");
                    addStation("15:30着/15:36発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("16:06着 佐原駅");
                    arrive =1606
                }
            }
        }
        else if (spot === "yokohama") {
            routeContainer.innerHTML = ''; // 既存の経路をクリア
                if(day==="土"||day==="日"){
                    if(time==="7"){
                        addStationWithLink("7:41発 横浜駅", "https://www.jreast.co.jp/estation/stations/1638.html");
                        addArrowAndDescription("↓", "横須賀線、総武線快速 成田空港行き");
                        addStation("9:24着/9:41発 成田駅");
                        addArrowAndDescription("↓", "成田線 銚子行き");
                        addStation("10:10着 佐原駅");
                        arrive =1010
                    }
                    else if(time==="8"){
                        addStationWithLink("8:44発 横浜駅", "https://www.jreast.co.jp/estation/stations/1638.html");
                        addArrowAndDescription("↓", "横須賀線、総武線快速 成田空港行き");
                        addStation("10:31着/10:41発 成田駅");
                        addArrowAndDescription("↓", "成田線 銚子行き");
                        addStation("11:10着 佐原駅");
                        arrive =1110
                    }
                    else if(time==="9"){
                        addStationWithLink("9:38発 横浜駅", "https://www.jreast.co.jp/estation/stations/1638.html");
                        addArrowAndDescription("↓", "横須賀線、総武線快速 成田空港行き");
                        addStation("11:31着/11:41発 成田駅");
                        addArrowAndDescription("↓", "成田線 銚子行き");
                        addStation("12:12着 佐原駅");
                        arrive =1212
                    }
                    else if(time==="10"){
                        addStationWithLink("10:43発 横浜駅", "https://www.jreast.co.jp/estation/stations/1638.html");
                        addArrowAndDescription("↓", "横須賀線、総武線快速 成田空港行き");
                        addStation("12:29着/12:41発 成田駅");
                        addArrowAndDescription("↓", "成田線 銚子行き");
                        addStation("13:21着 佐原駅");
                        arrive =1321
                    }
                    else if(time==="11"){
                        addStationWithLink("11:43発 横浜駅", "https://www.jreast.co.jp/estation/stations/1638.html");
                        addArrowAndDescription("↓", "横須賀線、総武線快速 成田空港行き");
                        addStation("13:31着/13:41発 成田駅");
                        addArrowAndDescription("↓", "成田線 銚子行き");
                        addStation("14:11着 佐原駅");
                        arrive =1411
                    }
                    else if(time==="12"){
                        addStationWithLink("12:44発 横浜駅", "https://www.jreast.co.jp/estation/stations/1638.html");
                        addArrowAndDescription("↓", "横須賀線、総武線快速 成田空港行き");
                        addStation("14:29着/14:41発 成田駅");
                        addArrowAndDescription("↓", "成田線 銚子行き");
                        addStation("15:12着 佐原駅");
                        arrive =1512
                    }
                    else if(time==="13"){
                        addStationWithLink("13:43発 横浜駅", "https://www.jreast.co.jp/estation/stations/1638.html");
                        addArrowAndDescription("↓", "横須賀線、総武線快速 成田空港行き");
                        addStation("15:30着/15:36発 成田駅");
                        addArrowAndDescription("↓", "成田線 銚子行き");
                        addStation("16:06着 佐原駅");
                        arrive =1606
                    }
                    else if(time==="14"){
                        addStationWithLink("14:43発 横浜駅", "https://www.jreast.co.jp/estation/stations/1638.html");
                        addArrowAndDescription("↓", "横須賀線、総武線快速 成田空港行き");
                        addStation("16:31着/16:36発 成田駅");
                        addArrowAndDescription("↓", "成田線 銚子行き");
                        addStation("17:10着 佐原駅");
                        arrive =1710
                    }
                }
                else{
                    if(time==="7"){
                        addStationWithLink("7:38発 横浜駅", "https://www.jreast.co.jp/estation/stations/1638.html");
                        addArrowAndDescription("↓", "横須賀線、総武線快速 成田空港行き");
                        addStation("9:24着/9:41発 成田駅");
                        addArrowAndDescription("↓", "成田線 銚子行き");
                        addStation("10:10着 佐原駅");
                        arrive =1010
                    }
                    if(time==="8"){
                        addStationWithLink("8:44発 横浜駅", "https://www.jreast.co.jp/estation/stations/1638.html");
                        addArrowAndDescription("↓", "横須賀線、総武線快速 成田空港行き");
                        addStation("10:31着/10:41発 成田駅");
                        addArrowAndDescription("↓", "成田線 銚子行き");
                        addStation("11:10着 佐原駅");
                        arrive =1110
                    }
                    if(time==="9"){
                        addStationWithLink("9:40発 横浜駅", "https://www.jreast.co.jp/estation/stations/1638.html");
                        addArrowAndDescription("↓", "横須賀線、総武線快速 成田空港行き");
                        addStation("11:31着/11:41発 成田駅");
                        addArrowAndDescription("↓", "成田線 銚子行き");
                        addStation("12:12着 佐原駅");
                        arrive =1212
                    }
                    if(time==="10"){
                        addStationWithLink("10:43発 横浜駅", "https://www.jreast.co.jp/estation/stations/1638.html");
                        addArrowAndDescription("↓", "横須賀線、総武線快速 成田空港行き");
                        addStation("12:29着/12:41発 成田駅");
                        addArrowAndDescription("↓", "成田線 銚子行き");
                        addStation("13:21着 佐原駅");
                        arrive =1321
                    }
                    if(time==="11"){
                        addStationWithLink("11:43発 横浜駅", "https://www.jreast.co.jp/estation/stations/1638.html");
                        addArrowAndDescription("↓", "横須賀線、総武線快速 成田空港行き");
                        addStation("13:31着/13:41発 成田駅");
                        addArrowAndDescription("↓", "成田線 銚子行き");
                        addStation("14:11着 佐原駅");
                        arrive =1411
                    }
                    if(time==="12"){
                        addStationWithLink("12:44発 横浜駅", "https://www.jreast.co.jp/estation/stations/1638.html");
                        addArrowAndDescription("↓", "横須賀線、総武線快速 成田空港行き");
                        addStation("14:29着/14:41発 成田駅");
                        addArrowAndDescription("↓", "成田線 銚子行き");
                        addStation("15:12着 佐原駅");
                        arrive =1512
                    }
                    if(time==="13"){
                        addStationWithLink("13:43発 横浜駅", "https://www.jreast.co.jp/estation/stations/1638.html");
                        addArrowAndDescription("↓", "横須賀線、総武線快速 成田空港行き");
                        addStation("15:30着/15:36発 成田駅");
                        addArrowAndDescription("↓", "成田線 銚子行き");
                        addStation("16:06着 佐原駅");
                        arrive =1606
                    }
                    if(time==="14"){
                        addStationWithLink("14:43発 横浜駅", "https://www.jreast.co.jp/estation/stations/1638.html");
                        addArrowAndDescription("↓", "横須賀線、総武線快速 成田空港行き");
                        addStation("16:31着/16:36発 成田駅");
                        addArrowAndDescription("↓", "成田線 銚子行き");
                        addStation("17:10着 佐原駅");
                        arrive =1710
                    }
        }
    } 
    else if (spot === "chiba") {
        routeContainer.innerHTML = ''; // 既存の経路をクリア
            if(day==="土"||day==="日"){
                if(time==="7"){
                    addStationWithLink("7:55発 千葉駅", "https://www.jreast.co.jp/estation/stations/989.html");
                    addArrowAndDescription("↓", "成田線快速 成田空港行き");
                    addStation("8:31着/8:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("9:11着 佐原駅");
                    arrive =911
                }
                else if(time==="8"){
                    addStationWithLink("8:51発 千葉駅", "https://www.jreast.co.jp/estation/stations/989.html");
                    addArrowAndDescription("↓", "成田線快速 成田空港行き");
                    addStation("9:24着/9:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("10:10着 佐原駅");
                    arrive =1010
                }
                else if(time==="9"||time==="10"){
                    addStationWithLink("10:01発 千葉駅", "https://www.jreast.co.jp/estation/stations/989.html");
                    addArrowAndDescription("↓", "成田線快速 成田空港行き");
                    addStation("10:31着/10:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("11:10着 佐原駅");
                    arrive =1110
                }
                else if(time==="11"){
                    addStationWithLink("11:01発 千葉駅", "https://www.jreast.co.jp/estation/stations/989.html");
                    addArrowAndDescription("↓", "成田線快速 成田空港行き");
                    addStation("11:31着/11:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("12:12着 佐原駅");
                    arrive =1212
                }
                else if(time==="12"){
                    addStationWithLink("12:00発 千葉駅", "https://www.jreast.co.jp/estation/stations/989.html");
                    addArrowAndDescription("↓", "成田線快速 成田空港行き");
                    addStation("12:29着/12:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("13:21着 佐原駅");
                    arrive =1321
                }
                else if(time==="13"){
                    addStationWithLink("13:01発 千葉駅", "https://www.jreast.co.jp/estation/stations/989.html");
                    addArrowAndDescription("↓", "成田線快速 成田空港行き");
                    addStation("13:31着/13:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("14:11着 佐原駅");
                    arrive =1411
                }
                else if(time==="14"){
                    addStationWithLink("14:00発 千葉駅", "https://www.jreast.co.jp/estation/stations/989.html");
                    addArrowAndDescription("↓", "成田線快速 成田空港行き");
                    addStation("14:29着/14:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("15:12着 佐原駅");
                    arrive =1512
                }
            }
            else{
                if(time==="7"){
                    addStationWithLink("7:55発 千葉駅", "https://www.jreast.co.jp/estation/stations/989.html");
                    addArrowAndDescription("↓", "横須賀線、総武線快速 成田空港行き");
                    addStation("8:31着/8:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("9:11着 佐原駅");
                    arrive =911
                }
                if(time==="8"){
                    addStationWithLink("8:51発 千葉駅", "https://www.jreast.co.jp/estation/stations/989.html");
                    addArrowAndDescription("↓", "成田線快速 成田空港行き");
                    addStation("9:24着/9:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("10:10着 佐原駅");
                    arrive =1010
                }
                if(time==="9"||time==="10"){
                    addStationWithLink("10:01発 千葉駅", "https://www.jreast.co.jp/estation/stations/989.html");
                    addArrowAndDescription("↓", "成田線快速 成田空港行き");
                    addStation("10:31着/10:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("11:10着 佐原駅");
                    arrive =1110
                }
                if(time==="11"){
                    addStationWithLink("11:01発 千葉駅", "https://www.jreast.co.jp/estation/stations/989.html");
                    addArrowAndDescription("↓", "成田線快速 成田空港行き");
                    addStation("11:31着/11:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("12:12着 佐原駅");
                    arrive =1212
                }
                if(time==="12"){
                    addStationWithLink("12:00発 千葉駅", "https://www.jreast.co.jp/estation/stations/989.html");
                    addArrowAndDescription("↓", "成田線快速 成田空港行き");
                    addStation("12:29着/12:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("13:21着 佐原駅");
                    arrive =1321
                }
                if(time==="13"){
                    addStationWithLink("13:01発 千葉駅", "https://www.jreast.co.jp/estation/stations/989.html");
                    addArrowAndDescription("↓", "成田線快速 成田空港行き");
                    addStation("13:31着/13:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("14:11着 佐原駅");
                    arrive =1411
                }
                if(time==="14"){
                    addStationWithLink("14:00発 千葉駅", "https://www.jreast.co.jp/estation/stations/989.html");
                    addArrowAndDescription("↓", "成田線快速 成田空港行き");
                    addStation("14:29着/14:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("15:12着 佐原駅");
                    arrive =1512
                }
            }
    }
    else if (spot === "narita") {
        routeContainer.innerHTML = ''; // 既存の経路をクリア
            if(day==="土"||day==="日"){
                if(time==="7"){
                    addStationWithLink("7:26発 成田駅", "https://www.jreast.co.jp/estation/stations/1129.html");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("7:58着 佐原駅");
                    arrive =758
                }
                else if(time==="8"){
                    addStationWithLink("8:41発 成田駅", "https://www.jreast.co.jp/estation/stations/1129.html");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("9:11着 佐原駅");
                    arrive =911
                }
                else if(time==="9"){
                    addStationWithLink("9:41発 成田駅", "https://www.jreast.co.jp/estation/stations/1129.html");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("10:10着 佐原駅");
                    arrive =1010
                }
                else if(time==="10"){
                    addStationWithLink("10:41発 成田駅", "https://www.jreast.co.jp/estation/stations/1129.html");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("11:10着 佐原駅");
                    arrive =1110
                }
                else if(time==="11"){
                    addStationWithLink("11:41発 成田駅", "https://www.jreast.co.jp/estation/stations/1129.html");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("12:12着 佐原駅");
                    arrive =1212
                }
                else if(time==="12"){
                    addStationWithLink("12:41発 成田駅", "https://www.jreast.co.jp/estation/stations/1129.html");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("13:21着 佐原駅");
                    arrive =1321
                }
                else if(time==="13"){
                    addStationWithLink("13:41発 成田駅", "https://www.jreast.co.jp/estation/stations/1129.html");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("14:11着 佐原駅");
                    arrive =1411
                }
                else if(time==="14"){
                    addStationWithLink("14:41発 千葉駅", "https://www.jreast.co.jp/estation/stations/1129.html");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("15:12着 佐原駅");
                    arrive =1512
                }
            }
            else{
                if(time==="7"){
                    addStationWithLink("7:26発 成田駅", "https://www.jreast.co.jp/estation/stations/1129.html");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("7:58着 佐原駅");
                    arrive =758
                }
                else if(time==="8"){
                    addStationWithLink("8:41発 成田駅", "https://www.jreast.co.jp/estation/stations/1129.html");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("9:11着 佐原駅");
                    arrive =911
                }
                else if(time==="9"){
                    addStationWithLink("9:41発 成田駅", "https://www.jreast.co.jp/estation/stations/1129.html");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("10:10着 佐原駅");
                    arrive =1010
                }
                else if(time==="10"){
                    addStationWithLink("10:41発 成田駅", "https://www.jreast.co.jp/estation/stations/1129.html");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("11:10着 佐原駅");
                    arrive =1110
                }
                else if(time==="11"){
                    addStationWithLink("11:41発 成田駅", "https://www.jreast.co.jp/estation/stations/1129.html");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("12:12着 佐原駅");
                    arrive =1212
                }
                else if(time==="12"){
                    addStationWithLink("12:41発 成田駅", "https://www.jreast.co.jp/estation/stations/1129.html");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("13:21着 佐原駅");
                    arrive =1321
                }
                else if(time==="13"){
                    addStationWithLink("13:41発 成田駅", "https://www.jreast.co.jp/estation/stations/1129.html");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("14:11着 佐原駅");
                    arrive =1411
                }
                else if(time==="14"){
                    addStationWithLink("14:41発 千葉駅", "https://www.jreast.co.jp/estation/stations/1129.html");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("15:12着 佐原駅");
                    arrive =1512
                }
            }
    }
    else if (spot === "narita-airport") {
        routeContainer.innerHTML = ''; // 既存の経路をクリア
            if(day==="土"||day==="日"){
                if(time==="7"){
                    addStationWithLink("7:59発 成田空港駅", "https://www.jreast.co.jp/estation/stations/1130.html");
                    addArrowAndDescription("↓", "成田線快速 東京行き");
                    addStation("8:14着/8:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("9:11着 佐原駅");
                    arrive =911
                }
                else if(time==="8"||time==="9"){
                    addStationWithLink("9:05発 成田空港駅", "https://www.jreast.co.jp/estation/stations/1130.html");
                    addArrowAndDescription("↓", "成田線快速 銚子行き");
                    addStation("9:16着/9:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("10:10着 佐原駅");
                    arrive =1010
                }
                else if(time==="10"){
                    addStationWithLink("10:59発 成田空港駅", "https://www.jreast.co.jp/estation/stations/1130.html");
                    addArrowAndDescription("↓", "成田線快速 逗子行き");
                    addStation("10:31着/10:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("12:12着 佐原駅");
                    arrive =1212
                }
                else if(time==="11"){
                    addStationWithLink("11:58発 成田空港駅", "https://www.jreast.co.jp/estation/stations/1130.html");
                    addArrowAndDescription("↓", "成田線快速 東京行き");
                    addStation("12:09着/12:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("13:21着 佐原駅");
                    arrive =1321
                }
                else if(time==="12"){
                    addStationWithLink("12:59発 成田空港駅", "https://www.jreast.co.jp/estation/stations/1130.html");
                    addArrowAndDescription("↓", "成田線快速 逗子行き");
                    addStation("13:10着/13:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("14:11着 佐原駅");
                    arrive =1411
                }
                else if(time==="13"){
                    addStationWithLink("13:58発 成田空港駅", "https://www.jreast.co.jp/estation/stations/1130.html");
                    addArrowAndDescription("↓", "成田線快速 東京行き");
                    addStation("14:10着/14:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("15:12着 佐原駅");
                    arrive =1512
                }
                else if(time==="14"){
                    addStationWithLink("14:59発 千葉駅", "https://www.jreast.co.jp/estation/stations/1130.html");
                    addArrowAndDescription("↓", "成田線快速 逗子行き");
                    addStation("15:10着/15:36発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("16:06着 佐原駅");
                    arrive =1606
                }
            }
            else{
                if(time==="7"){
                    addStationWithLink("7:59発 成田空港駅", "https://www.jreast.co.jp/estation/stations/1130.html");
                    addArrowAndDescription("↓", "成田線快速 東京行き");
                    addStation("8:14着/8:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("9:11着 佐原駅");
                    arrive =911
                }
                else if(time==="8"||time==="9"){
                    addStationWithLink("9:05発 成田空港駅", "https://www.jreast.co.jp/estation/stations/1130.html");
                    addArrowAndDescription("↓", "成田線快速 銚子行き");
                    addStation("9:16着/9:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("10:10着 佐原駅");
                    arrive =1010
                }
                else if(time==="10"){
                    addStationWithLink("10:59発 成田空港駅", "https://www.jreast.co.jp/estation/stations/1130.html");
                    addArrowAndDescription("↓", "成田線快速 逗子行き");
                    addStation("10:31着/10:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("12:12着 佐原駅");
                    arrive =1212
                }
                else if(time==="11"){
                    addStationWithLink("11:58発 成田空港駅", "https://www.jreast.co.jp/estation/stations/1130.html");
                    addArrowAndDescription("↓", "成田線快速 東京行き");
                    addStation("12:09着/12:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("13:21着 佐原駅");
                    arrive =1321
                }
                else if(time==="12"){
                    addStationWithLink("12:59発 成田空港駅", "https://www.jreast.co.jp/estation/stations/1130.html");
                    addArrowAndDescription("↓", "成田線快速 逗子行き");
                    addStation("13:10着/13:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("14:11着 佐原駅");
                    arrive =1411
                }
                else if(time==="13"){
                    addStationWithLink("13:58発 成田空港駅", "https://www.jreast.co.jp/estation/stations/1130.html");
                    addArrowAndDescription("↓", "成田線快速 東京行き");
                    addStation("14:10着/14:41発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("15:12着 佐原駅");
                    arrive =1512
                }
                else if(time==="14"){
                    addStationWithLink("14:59発 千葉駅", "https://www.jreast.co.jp/estation/stations/1130.html");
                    addArrowAndDescription("↓", "成田線快速 逗子行き");
                    addStation("15:10着/15:36発 成田駅");
                    addArrowAndDescription("↓", "成田線 銚子行き");
                    addStation("16:06着 佐原駅");
                    arrive =1606
                }
            }
        }
        else if (spot === "shinjyuku") {
            routeContainer.innerHTML = ''; // 既存の経路をクリア
                if(day==="土"||day==="日"){
                        if(time==="7"||time==="8"||time==="9"){
                            addStationWithLink("9:02発 新宿駅", "https://www.jreast.co.jp/estation/stations/866.html");
                            addArrowAndDescription("↓", "中央線快速 東京行き");
                            addStation("9:15着/9:20発 東京駅");
                            addArrowAndDescription("↓", "総武線快速 成田空港行き");
                            addStation("10:31着/10:41発 成田駅");
                            addArrowAndDescription("↓", "成田線 銚子行き");
                            addStation("11:10着 佐原駅");
                            arrive =1110
                        }
                    else if(time==="10"){
                        addStationWithLink("10:53発 新宿駅", "https://www.jreast.co.jp/estation/stations/866.html");
                        addArrowAndDescription("↓", "中央線快速 東京行き");
                        addStation("11:06着/11:15発 東京駅");
                        addArrowAndDescription("↓", "総武線快速 成田空港行き");
                        addStation("12:29着/12:41発 成田駅");
                        addArrowAndDescription("↓", "成田線 銚子行き");
                        addStation("13:21着 佐原駅");
                        arrive =1321
                    }
                    else if(time==="11"){
                        addStationWithLink("11:52発 新宿駅", "https://www.jreast.co.jp/estation/stations/866.html");
                        addArrowAndDescription("↓", "中央線快速 東京行き");
                        addStation("12:05着/12:15発 東京駅");
                        addArrowAndDescription("↓", "総武線快速 成田空港行き");
                        addStation("13:31着/13:41発 成田駅");
                        addArrowAndDescription("↓", "成田線 銚子行き");
                        addStation("14:11着 佐原駅");
                        arrive =1411
                    }
                    else if(time==="12"){
                        addStationWithLink("12:55発 新宿駅", "https://www.jreast.co.jp/estation/stations/866.html");
                        addArrowAndDescription("↓", "中央線快速 東京行き");
                        addStation("13:08着/13:15発 東京駅");
                        addArrowAndDescription("↓", "総武線快速 成田空港行き");
                        addStation("14:29着/14:41発 成田駅");
                        addArrowAndDescription("↓", "成田線 銚子行き");
                        addStation("15:12着 佐原駅");
                        arrive =1512
                    }
                    else if(time==="13"){
                        addStationWithLink("13:55発 新宿駅", "https://www.jreast.co.jp/estation/stations/866.html");
                        addArrowAndDescription("↓", "中央線快速 東京行き");
                        addStation("14:09着/14:15発 東京駅");
                        addArrowAndDescription("↓", "総武線快速 成田空港行き");
                        addStation("15:30着/15:36発 成田駅");
                        addArrowAndDescription("↓", "成田線 銚子行き");
                        addStation("16:06着 佐原駅");
                        arrive =1606
                    }
                    else if(time==="14"){
                        addStationWithLink("14:54発 新宿駅", "https://www.jreast.co.jp/estation/stations/866.html");
                        addArrowAndDescription("↓", "中央線快速 東京行き");
                        addStation("15:08着/15:15発 東京駅");
                        addArrowAndDescription("↓", "総武線快速 成田空港行き");
                        addStation("16:31着/16:36発 成田駅");
                        addArrowAndDescription("↓", "成田線 銚子行き");
                        addStation("17:10着 佐原駅");
                        arrive =1710
                    }
                }
                else{
                    if(time==="7"||time==="8"){
                        addStationWithLink("8:58発 新宿駅", "https://www.jreast.co.jp/estation/stations/866.html");
                        addArrowAndDescription("↓", "中央線快速 東京行き");
                        addStation("9:12着/9:18発 東京駅");
                        addArrowAndDescription("↓", "総武線快速 成田空港行き");
                        addStation("10:31着/10:41発 成田駅");
                        addArrowAndDescription("↓", "成田線 銚子行き");
                        addStation("11:10着 佐原駅");
                        arrive =1110
                    }
                    else if(time==="9"){
                        addStationWithLink("9:53発 新宿駅", "https://www.jreast.co.jp/estation/stations/866.html");
                        addArrowAndDescription("↓", "中央線快速 東京行き");
                        addStation("10:07着/10:15発 東京駅");
                        addArrowAndDescription("↓", "総武線快速 成田空港行き");
                        addStation("11:31着/11:41発 成田駅");
                        addArrowAndDescription("↓", "成田線 銚子行き");
                        addStation("12:12着 佐原駅");
                        arrive =1212
                    }
                    else if(time==="10"){
                        addStationWithLink("10:56発 新宿駅", "https://www.jreast.co.jp/estation/stations/866.html");
                        addArrowAndDescription("↓", "中央線快速 東京行き");
                        addStation("11:09着/11:15発 東京駅");
                        addArrowAndDescription("↓", "総武線快速 成田空港行き");
                        addStation("12:29着/12:41発 成田駅");
                        addArrowAndDescription("↓", "成田線 銚子行き");
                        addStation("13:21着 佐原駅");
                        arrive =1321
                    }
                    else if(time==="11"){
                        addStationWithLink("11:52発 新宿駅", "https://www.jreast.co.jp/estation/stations/866.html");
                        addArrowAndDescription("↓", "中央線快速 東京行き");
                        addStation("12:06着/12:15発 東京駅");
                        addArrowAndDescription("↓", "総武線快速 成田空港行き");
                        addStation("13:31着/13:41発 成田駅");
                        addArrowAndDescription("↓", "成田線 銚子行き");
                        addStation("14:11着 佐原駅");
                        arrive =1411
                    }
                    else if(time==="12"){
                        addStationWithLink("12:54発 新宿駅", "https://www.jreast.co.jp/estation/stations/866.html");
                        addArrowAndDescription("↓", "中央線青梅特快 東京行き");
                        addStation("13:08着/13:15発 東京駅");
                        addArrowAndDescription("↓", "総武線快速 成田空港行き");
                        addStation("14:29着/14:41発 成田駅");
                        addArrowAndDescription("↓", "成田線 銚子行き");
                        addStation("15:12着 佐原駅");
                        arrive =1512
                    }
                    else if(time==="13"){
                        addStationWithLink("13:55発 新宿駅", "https://www.jreast.co.jp/estation/stations/866.html");
                        addArrowAndDescription("↓", "中央線青梅特快 東京行き");
                        addStation("14:08着/14:15発 東京駅");
                        addArrowAndDescription("↓", "総武線快速 成田空港行き");
                        addStation("15:30着/15:36発 成田駅");
                        addArrowAndDescription("↓", "成田線 銚子行き");
                        addStation("16:06着 佐原駅");
                        arrive =1606
                    }
                    else if(time==="14"){
                        addStationWithLink("14:53発 新宿駅", "https://www.jreast.co.jp/estation/stations/866.html");
                        addArrowAndDescription("↓", "中央線青梅特快 東京行き");
                        addStation("15:07着/15:15発 東京駅");
                        addArrowAndDescription("↓", "総武線快速 成田空港行き");
                        addStation("16:31着/16:36発 成田駅");
                        addArrowAndDescription("↓", "成田線 銚子行き");
                        addStation("17:10着 佐原駅");
                        arrive =1710
                    }
            }
        }
        else {
            routeContainer.textContent = '条件を満たす経路はありません。';
        }
    if(day==="月"){  //月曜日
        console.log(10)
        if(type==="kengaku"){ //見学種類
            console.log(20)
            if(attime==="2"){ //滞在時間
                addArrowAndDescription("↓", "徒歩10分");
                addStationWithLink("諏訪神社 10分", "http://osuwa3.jp");
                addArrowAndDescription("↓", "徒歩8分");
                addStationWithLink("荘厳寺 10分","https://br-promotion.jp/shogonji/");
                addArrowAndDescription("↓", "徒歩14分");
                addStationWithLink("東薫酒造 30分","https://www.tokun.co.jp");
                addArrowAndDescription("↓", "徒歩11分");
                addStationWithLink("八坂神社 10分","https://www.suigonow.com/yasakajinja/");
                addArrowAndDescription("↓", "徒歩14分");
                arrive+=200
            }
            if(attime==="3"){ //滞在時間
                addArrowAndDescription("↓", "徒歩10分");
                addStationWithLink("諏訪神社 10分","http://osuwa3.jp");
                addArrowAndDescription("↓", "徒歩8分");
                addStationWithLink("荘厳寺 10分","https://br-promotion.jp/shogonji/");
                addArrowAndDescription("↓", "徒歩14分");
                addStationWithLink("東薫酒造 30分","https://www.tokun.co.jp");
                addArrowAndDescription("↓", "徒歩6分");
                addStationWithLink("佐原町並み交流館 10分","https://sawara-machinami.com");
                addArrowAndDescription("↓", "徒歩3分");
                addStationWithLink("伊能忠敬旧宅 10分","https://www.city.katori.lg.jp/sightseeing/meisho/rekishi/s_kyutaku.html");
                addArrowAndDescription("↓", "徒歩5分");
                addStationWithLink("八坂神社 10分","https://www.suigonow.com/yasakajinja/");
                addArrowAndDescription("↓", "徒歩6分");
                addStationWithLink("小野川沿い散策 10分","https://www.sawara-machinami.org/home/history");
                addArrowAndDescription("↓", "徒歩9分");
                arrive+=300
            }
            if(attime==="4"){ //滞在時間
                addArrowAndDescription("↓", "徒歩10分");
                addStationWithLink("諏訪神社 10分","http://osuwa3.jp");
                addArrowAndDescription("↓", "徒歩8分");
                addStationWithLink("荘厳寺 10分","https://br-promotion.jp/shogonji/");
                addArrowAndDescription("↓", "徒歩14分");
                addStationWithLink("東薫酒造 30分","https://www.tokun.co.jp");
                addArrowAndDescription("↓", "徒歩6分");
                addStationWithLink("佐原町並み交流館 10分","https://sawara-machinami.com");
                addArrowAndDescription("↓");
                addStationWithLink("小野川沿いでご飯 60分", "https://dmap.nid.co.jp/sawara/map#/?c=gourmet");
                addArrowAndDescription("↓");
                addStationWithLink("伊能忠敬旧宅 10分","https://www.city.katori.lg.jp/sightseeing/meisho/rekishi/s_kyutaku.html");
                addArrowAndDescription("↓", "徒歩5分");
                addStationWithLink("八坂神社 10分","https://www.suigonow.com/yasakajinja/");
                addArrowAndDescription("↓", "徒歩6分");
                addStationWithLink("小野川沿い散策 10分","https://www.sawara-machinami.org/home/history");
                addArrowAndDescription("↓", "徒歩9分");
                arrive+=400
            }
            if(attime==="5"){ //滞在時間
                addArrowAndDescription("↓", "徒歩7分");
                addStationWithLink("伊能忠敬像","https://hokuso-4cities.com/spots/detail/63/");
                addArrowAndDescription("↓", "徒歩5分");
                addStationWithLink("諏訪神社 10分","http://osuwa3.jp");
                addArrowAndDescription("↓", "徒歩8分");
                addStationWithLink("荘厳寺 10分","https://br-promotion.jp/shogonji/");
                addArrowAndDescription("↓", "徒歩14分");
                addStationWithLink("東薫酒造 30分","https://www.tokun.co.jp");
                addArrowAndDescription("↓", "徒歩6分");
                addStationWithLink("佐原町並み交流館 10分","https://sawara-machinami.com");
                addArrowAndDescription("↓");
                addStationWithLink("小野川沿いでご飯 60分", "https://dmap.nid.co.jp/sawara/map#/?c=gourmet");
                addArrowAndDescription("↓");
                addStationWithLink("伊能忠敬旧宅 10分","https://www.city.katori.lg.jp/sightseeing/meisho/rekishi/s_kyutaku.html");
                addArrowAndDescription("↓", "徒歩5分");
                addStationWithLink("八坂神社 10分","https://www.suigonow.com/yasakajinja/");
                addArrowAndDescription("↓", "徒歩6分");
                addStationWithLink("小野川沿い散策 25分","https://www.sawara-machinami.org/home/history");
                addArrowAndDescription("↓", "徒歩15分");
                addStationWithLink("水の郷佐原 40分","http://www.e-sawara.com");
                addArrowAndDescription("↓", "徒歩20分");
                arrive+=500
            }
            if(attime==="6"){ //滞在時間
                addArrowAndDescription("↓", "徒歩20分");
                addStationWithLink("水の郷佐原 40分","http://www.e-sawara.com");
                addArrowAndDescription("↓", "徒歩15分");
                addStationWithLink("小野川沿い散策 10分","https://www.sawara-machinami.org/home/history");
                addArrowAndDescription("↓");
                addStationWithLink("小野川沿いでご飯 80分", "https://dmap.nid.co.jp/sawara/map#/?c=gourmet");
                addArrowAndDescription("↓", "徒歩8分");
                addStationWithLink("東薫酒造 30分","https://www.tokun.co.jp");
                addArrowAndDescription("↓", "徒歩6分");
                addStationWithLink("佐原町並み交流館 10分","https://sawara-machinami.com");
                addArrowAndDescription("↓" ,"徒歩15分");
                addStationWithLink("観福寺 20分","http://kanpukuji.or.jp");
                addArrowAndDescription("↓", "徒歩17分");
                addStationWithLink("八坂神社 10分","https://www.suigonow.com/yasakajinja/");
                addArrowAndDescription("↓", "徒歩9分");
                addStationWithLink("伊能忠敬像","https://hokuso-4cities.com/spots/detail/63/");
                addArrowAndDescription("↓", "徒歩5分");
                addStationWithLink("諏訪神社 10分","http://osuwa3.jp");
                addArrowAndDescription("↓", "徒歩8分");
                addStationWithLink("荘厳寺 10分","https://br-promotion.jp/shogonji/");
                addArrowAndDescription("↓", "徒歩12分");
                arrive+=600   
            }
        }    
        else if(type==="taiken"){ //見学種類
            if(attime==="2"){ //滞在時間
                addArrowAndDescription("↓", "徒歩13分");
                addStationWithLink("小野川船巡り 30分", "http://www.kimera-sawara.co.jp/business/boat.html");
                addArrowAndDescription("↓", "徒歩16分");
                addStationWithLink("観福寺 20分","http://kanpukuji.or.jp");
                addArrowAndDescription("↓", "徒歩17分");
                addStationWithLink("八坂神社 10分","https://www.suigonow.com/yasakajinja/");
                addArrowAndDescription("↓", "徒歩14分");
                arrive+=200
            }
            if(attime==="3"){ //滞在時間
                addArrowAndDescription("↓", "徒歩13分");
                addStationWithLink("小野川船巡り 30分", "http://www.kimera-sawara.co.jp/business/boat.html");
                addArrowAndDescription("↓", "徒歩4分");
                addStationWithLink("与倉屋大土倉","https://www.suigonow.com/yokuraya/");
                addArrowAndDescription("↓", "徒歩16分");
                addStationWithLink("観福寺 20分","http://kanpukuji.or.jp");
                addArrowAndDescription("↓", "徒歩11分");
                addStationWithLink("浄国寺 10分","http://jyokokuji.jp");
                addArrowAndDescription("↓", "徒歩6分");
                addStationWithLink("八坂神社 10分","https://www.suigonow.com/yasakajinja/");
                addArrowAndDescription("↓", "徒歩5分");
                addStationWithLink("伊能忠敬旧宅 10分","https://www.city.katori.lg.jp/sightseeing/meisho/rekishi/s_kyutaku.html");
                addArrowAndDescription("↓", "徒歩5分");
                addStationWithLink("小野川沿い散策 15分","https://www.sawara-machinami.org/home/history");
                addArrowAndDescription("↓", "徒歩9分");
                arrive+=300
            }
            if(attime==="4"){ //滞在時間
                addArrowAndDescription("↓", "徒歩13分");
                addStationWithLink("小野川船巡り 30分", "http://www.kimera-sawara.co.jp/business/boat.html");
                addArrowAndDescription("↓", "徒歩4分");
                addStationWithLink("与倉屋大土倉","https://www.suigonow.com/yokuraya/");
                addArrowAndDescription("↓", "徒歩16分");
                addStationWithLink("観福寺 20分","http://kanpukuji.or.jp");
                addArrowAndDescription("↓", "徒歩11分");
                addStationWithLink("浄国寺 10分","http://jyokokuji.jp");
                addArrowAndDescription("↓", "徒歩6分");
                addStationWithLink("八坂神社 10分","https://www.suigonow.com/yasakajinja/");
                addArrowAndDescription("↓", "徒歩5分");
                addStationWithLink("伊能忠敬旧宅 10分","https://www.city.katori.lg.jp/sightseeing/meisho/rekishi/s_kyutaku.html");
                addArrowAndDescription("↓");
                addStationWithLink("小野川沿い散策 15分","https://www.sawara-machinami.org/home/history");
                addArrowAndDescription("↓");
                addStationWithLink("小野川沿いでご飯 60分", "https://dmap.nid.co.jp/sawara/map#/?c=gourmet");
                addArrowAndDescription("↓", "徒歩9分");
                arrive+=400
            }
            if(attime==="5"){ //滞在時間
                addArrowAndDescription("↓", "徒歩20分");
                addStationWithLink("水の郷佐原 40分","http://www.e-sawara.com");
                addArrowAndDescription("↓", "徒歩15分");
                addStation("佐原駅");
                addArrowAndDescription("↓", "徒歩13分");
                addStationWithLink("小野川船巡り 30分", "http://www.kimera-sawara.co.jp/business/boat.html");
                addArrowAndDescription("↓");
                addStationWithLink("小野川沿いでご飯 60分", "https://dmap.nid.co.jp/sawara/map#/?c=gourmet");
                addArrowAndDescription("↓", "徒歩4分");
                addStationWithLink("与倉屋大土倉","https://www.suigonow.com/yokuraya/");
                addArrowAndDescription("↓", "徒歩15分");
                addStationWithLink("観福寺 20分","http://kanpukuji.or.jp");
                addArrowAndDescription("↓", "徒歩11分");
                addStationWithLink("浄国寺 10分","http://jyokokuji.jp");
                addArrowAndDescription("↓", "徒歩6分");
                addStationWithLink("八坂神社 10分","https://www.suigonow.com/yasakajinja/");
                addArrowAndDescription("↓", "徒歩14分");
                addStationWithLink("諏訪神社 10分","http://osuwa3.jp");
                addArrowAndDescription("↓", "徒歩5分");
                addStationWithLink("伊能忠敬像","https://hokuso-4cities.com/spots/detail/63/");
                addArrowAndDescription("↓", "徒歩6分");
                arrive+=500
            }
            if(attime==="6"){ //滞在時間
                addArrowAndDescription("↓", "徒歩20分");
                addStationWithLink("水の郷佐原 40分","http://www.e-sawara.com");
                addArrowAndDescription("↓", "徒歩20分");
                addStation("佐原駅");
                addArrowAndDescription("↓", "徒歩20分");
                addStationWithLink("小野川船巡り 30分", "http://www.kimera-sawara.co.jp/business/boat.html");
                addArrowAndDescription("↓");
                addStationWithLink("小野川沿いでご飯 60分", "https://dmap.nid.co.jp/sawara/map#/?c=gourmet");
                addArrowAndDescription("↓", "徒歩4分");
                addStationWithLink("与倉屋大土倉","https://www.suigonow.com/yokuraya/");
                addArrowAndDescription("↓", "徒歩15分");
                addStationWithLink("観福寺 20分","http://kanpukuji.or.jp");
                addArrowAndDescription("↓", "徒歩11分");
                addStationWithLink("浄国寺 10分","http://jyokokuji.jp");
                addArrowAndDescription("↓", "徒歩6分");
                addStationWithLink("八坂神社 10分","https://www.suigonow.com/yasakajinja/");
                addArrowAndDescription("↓", "徒歩14分");
                addStationWithLink("佐原町屋館","https://www.city.katori.lg.jp/sightseeing/meisho/kanko/machiyakan.html");
                addArrowAndDescription("↓", "徒歩5分");
                addStationWithLink("小野川沿い散策 10分","https://www.sawara-machinami.org/home/history");
                addArrowAndDescription("↓", "徒歩8分");
                addStationWithLink("伊能忠敬像","https://hokuso-4cities.com/spots/detail/63/");
                addArrowAndDescription("↓", "徒歩5分");
                addStationWithLink("諏訪神社 10分","http://osuwa3.jp");
                addArrowAndDescription("↓", "徒歩7分");
                addStationWithLink("荘厳寺 10分","https://br-promotion.jp/shogonji/");
                addArrowAndDescription("↓", "徒歩12分");
                arrive+=600
            }


        }
    }
    else{ //月曜日以外
        if(type==="kengaku"||"inou"||"onogawa"){
            if(attime==="2"){ //滞在時間
                addArrowAndDescription("↓", "徒歩7分");
                addStationWithLink("伊能忠敬像","https://hokuso-4cities.com/spots/detail/63/");
                addArrowAndDescription("↓", "徒歩5分");
                addStationWithLink("諏訪神社 10分","http://osuwa3.jp");
                addArrowAndDescription("↓", "徒歩8分");
                addStationWithLink("小野川散策", "https://www.sawara-machinami.org/home/history");
                addArrowAndDescription("↓" ,"徒歩7分");
                addStationWithLink("伊能忠敬記念館 40分","https://www.city.katori.lg.jp/sightseeing/museum/");
                addArrowAndDescription("↓", "徒歩1分");
                addStationWithLink("伊能忠敬旧宅 15分","https://www.city.katori.lg.jp/sightseeing/meisho/rekishi/s_kyutaku.html");
                addArrowAndDescription("↓", "徒歩13分");
                arrive+=200
            }
            if(attime==="3"){ //滞在時間
                addArrowAndDescription("↓", "徒歩7分");
                addStationWithLink("伊能忠敬像","https://hokuso-4cities.com/spots/detail/63/");
                addArrowAndDescription("↓", "徒歩5分");
                addStationWithLink("諏訪神社 10分","http://osuwa3.jp");
                addArrowAndDescription("↓", "徒歩15分");
                addStationWithLink("小野川散策", "https://www.sawara-machinami.org/home/history");
                addArrowAndDescription("↓" ,"徒歩7分");
                addStationWithLink("伊能忠敬記念館 40分","https://www.city.katori.lg.jp/sightseeing/museum/");
                addArrowAndDescription("↓", "徒歩1分");
                addStationWithLink("伊能忠敬旧宅 10分","https://www.city.katori.lg.jp/sightseeing/meisho/rekishi/s_kyutaku.html");
                addArrowAndDescription("↓", "徒歩3分");
                addStationWithLink("佐原町並み交流館 10分","https://sawara-machinami.com");
                addArrowAndDescription("↓" ,"徒歩5分");
                addStationWithLink("八坂神社・山車会館 40分","https://www.suigonow.com/yasakajinja/");
                addArrowAndDescription("↓", "徒歩14分");
                arrive+=300
            }
            if(attime==="4"){ //滞在時間
                addArrowAndDescription("↓", "徒歩7分");
                addStationWithLink("伊能忠敬像","https://hokuso-4cities.com/spots/detail/63/");
                addArrowAndDescription("↓", "徒歩5分");
                addStationWithLink("諏訪神社 10分","http://osuwa3.jp");
                addArrowAndDescription("↓", "徒歩15分");
                addStationWithLink("小野川散策", "https://www.sawara-machinami.org/home/history");
                addArrowAndDescription("↓");
                addStationWithLink("小野川沿いでご飯 60分", "https://dmap.nid.co.jp/sawara/map#/?c=gourmet");
                addArrowAndDescription("↓", "徒歩7分");
                addStationWithLink("伊能忠敬記念館 40分","https://www.city.katori.lg.jp/sightseeing/museum/");
                addArrowAndDescription("↓", "徒歩1分");
                addStationWithLink("伊能忠敬旧宅 10分","https://www.city.katori.lg.jp/sightseeing/meisho/rekishi/s_kyutaku.html");
                addArrowAndDescription("↓", "徒歩3分");
                addStationWithLink("佐原町並み交流館 10分","https://sawara-machinami.com");
                addArrowAndDescription("↓" ,"徒歩5分");
                addStationWithLink("八坂神社・山車会館 40分","https://www.suigonow.com/yasakajinja/");
                addArrowAndDescription("↓", "徒歩14分");
                arrive+=400
            }
            if(attime==="5"){ //滞在時間
                addArrowAndDescription("↓", "徒歩7分");
                addStationWithLink("伊能忠敬像","https://hokuso-4cities.com/spots/detail/63/");
                addArrowAndDescription("↓", "徒歩5分");
                addStationWithLink("諏訪神社 10分","http://osuwa3.jp");
                addArrowAndDescription("↓", "徒歩15分");
                addStationWithLink("東薫酒造 30分","https://www.tokun.co.jp");
                addArrowAndDescription("↓", "徒歩7分");
                addStationWithLink("伊能忠敬記念館 40分","https://www.city.katori.lg.jp/sightseeing/museum/");
                addArrowAndDescription("↓", "徒歩1分");
                addStationWithLink("伊能忠敬旧宅 10分","https://www.city.katori.lg.jp/sightseeing/meisho/rekishi/s_kyutaku.html");
                addArrowAndDescription("↓", "徒歩8分");
                addStationWithLink("八坂神社・山車会館 40分","https://www.suigonow.com/yasakajinja/");
                addArrowAndDescription("↓", "徒歩6分");
                addStationWithLink("小野川散策 15分" , "https://www.sawara-machinami.org/home/history");
                addArrowAndDescription("↓");
                addStationWithLink("小野川沿いでご飯 60分", "https://dmap.nid.co.jp/sawara/map#/?c=gourmet");
                addArrowAndDescription("↓", "徒歩9分");
                arrive+=500
            }
            if(attime==="6"){ //滞在時間
                addArrowAndDescription("↓", "徒歩20分");
                addStationWithLink("水の郷佐原 40分","http://www.e-sawara.com");
                addArrowAndDescription("↓", "徒歩20分");
                addStation("佐原駅");
                addArrowAndDescription("↓", "徒歩9分");
                addStationWithLink("小野川散策 15分" , "https://www.sawara-machinami.org/home/history");
                addArrowAndDescription("↓");
                addStationWithLink("小野川沿いでご飯 60分", "https://dmap.nid.co.jp/sawara/map#/?c=gourmet");
                addArrowAndDescription("↓", "徒歩4分");
                addStationWithLink("伊能忠敬記念館 40分","https://www.city.katori.lg.jp/sightseeing/museum/");
                addArrowAndDescription("↓", "徒歩1分");
                addStationWithLink("伊能忠敬旧宅 10分","https://www.city.katori.lg.jp/sightseeing/meisho/rekishi/s_kyutaku.html");
                addArrowAndDescription("↓", "徒歩8分");
                addStationWithLink("八坂神社・山車会館 40分","https://www.suigonow.com/yasakajinja/");
                addArrowAndDescription("↓", "徒歩14分");
                addStationWithLink("佐原町並み交流館 20分","https://sawara-machinami.com");
                addArrowAndDescription("↓" ,"徒歩15分");
                addStationWithLink("諏訪神社 10分","http://osuwa3.jp");
                addArrowAndDescription("↓", "徒歩5分");
                addStationWithLink("伊能忠敬像","https://hokuso-4cities.com/spots/detail/63/");
                addArrowAndDescription("↓", "徒歩6分");
                arrive+=600
            }
        }    
        if(type==="taiken"){
            if(attime==="2"){ //滞在時間
                addArrowAndDescription("↓", "徒歩13分");
                addStationWithLink("小野川船巡り 30分", "http://www.kimera-sawara.co.jp/business/boat.html");
                addArrowAndDescription("↓", "徒歩すぐ");
                addStationWithLink("伊能忠敬記念館 40分","https://www.city.katori.lg.jp/sightseeing/museum/");
                addArrowAndDescription("↓", "徒歩すぐ");
                addStationWithLink("伊能忠敬旧宅 15分","https://www.city.katori.lg.jp/sightseeing/meisho/rekishi/s_kyutaku.html");
                addArrowAndDescription("↓", "徒歩すぐ");
                addStationWithLink("佐原町屋館 5分","https://www.city.katori.lg.jp/sightseeing/meisho/kanko/machiyakan.html");
                addArrowAndDescription("↓", "徒歩11分");
                arrive+=200
            }
            if(attime==="3"){ //滞在時間
                addArrowAndDescription("↓", "徒歩13分");
                addStationWithLink("小野川船巡り 30分", "http://www.kimera-sawara.co.jp/business/boat.html");
                addArrowAndDescription("↓", "徒歩すぐ");
                addStationWithLink("伊能忠敬記念館 40分","https://www.city.katori.lg.jp/sightseeing/museum/");
                addArrowAndDescription("↓", "徒歩すぐ");
                addStationWithLink("伊能忠敬旧宅 15分","https://www.city.katori.lg.jp/sightseeing/meisho/rekishi/s_kyutaku.html");
                addArrowAndDescription("↓", "徒歩すぐ");
                addStationWithLink("佐原町並み交流館 10分","https://sawara-machinami.com");
                addArrowAndDescription("↓" ,"徒歩5分");
                addStationWithLink("八坂神社 10分","https://www.suigonow.com/yasakajinja/");
                addArrowAndDescription("↓", "徒歩6分");
                addStationWithLink("佐原町屋館 5分","https://www.city.katori.lg.jp/sightseeing/meisho/kanko/machiyakan.html");
                addArrowAndDescription("↓","徒歩20分");
                arrive+=300
            }
            if(attime==="4"){ //滞在時間
                addArrowAndDescription("↓", "徒歩13分");
                addStationWithLink("小野川船巡り 30分", "http://www.kimera-sawara.co.jp/business/boat.html");
                addArrowAndDescription("↓","徒歩すぐ");
                addStationWithLink("伊能忠敬記念館 40分","https://www.city.katori.lg.jp/sightseeing/museum/");
                addArrowAndDescription("↓", "徒歩すぐ");
                addStationWithLink("伊能忠敬旧宅 15分","https://www.city.katori.lg.jp/sightseeing/meisho/rekishi/s_kyutaku.html");
                addArrowAndDescription("↓", "徒歩すぐ");
                addStationWithLink("佐原町並み交流館 10分","https://sawara-machinami.com");
                addArrowAndDescription("↓" ,"徒歩5分");
                addStationWithLink("八坂神社 10分","https://www.suigonow.com/yasakajinja/");
                addArrowAndDescription("↓", "徒歩6分");
                addStationWithLink("小野川沿いでご飯 60分", "https://dmap.nid.co.jp/sawara/map#/?c=gourmet");
                addArrowAndDescription("↓");
                addStationWithLink("佐原町屋館 5分","https://www.city.katori.lg.jp/sightseeing/meisho/kanko/machiyakan.html");
                addArrowAndDescription("↓","徒歩20分");
                arrive+=400
            }
            if(attime==="5"){ //滞在時間
                addArrowAndDescription("↓", "徒歩13分");
                addStationWithLink("小野川船巡り 30分", "http://www.kimera-sawara.co.jp/business/boat.html");
                addArrowAndDescription("↓","徒歩すぐ");
                addStationWithLink("伊能忠敬記念館 40分","https://www.city.katori.lg.jp/sightseeing/museum/");
                addArrowAndDescription("↓", "徒歩すぐ");
                addStationWithLink("伊能忠敬旧宅 15分","https://www.city.katori.lg.jp/sightseeing/meisho/rekishi/s_kyutaku.html");
                addArrowAndDescription("↓", "徒歩すぐ");
                addStationWithLink("佐原町並み交流館 10分","https://sawara-machinami.com");
                addArrowAndDescription("↓" ,"徒歩16分");
                addStationWithLink("観福寺 20分","http://kanpukuji.or.jp");
                addArrowAndDescription("↓", "徒歩11分");
                addStationWithLink("浄国寺 10分","http://jyokokuji.jp");
                addArrowAndDescription("↓", "徒歩6分");
                addStationWithLink("八坂神社 10分","https://www.suigonow.com/yasakajinja/");
                addArrowAndDescription("↓", "徒歩6分");
                addStationWithLink("小野川沿いでご飯 60分", "https://dmap.nid.co.jp/sawara/map#/?c=gourmet");
                addArrowAndDescription("↓");
                addStationWithLink("佐原町屋館 5分","https://www.city.katori.lg.jp/sightseeing/meisho/kanko/machiyakan.html");
                addArrowAndDescription("↓","徒歩20分");
                arrive+=500
            }
            if(attime==="6"){ //滞在時間
                addArrowAndDescription("↓", "徒歩20分");
                addStationWithLink("水の郷佐原 40分","http://www.e-sawara.com");
                addArrowAndDescription("↓", "徒歩20分");
                addStation("佐原駅");
                addArrowAndDescription("↓", "徒歩13分");
                addStationWithLink("小野川船巡り 30分", "http://www.kimera-sawara.co.jp/business/boat.html");
                addArrowAndDescription("↓","徒歩すぐ");
                addStationWithLink("伊能忠敬記念館 40分","https://www.city.katori.lg.jp/sightseeing/museum/");
                addArrowAndDescription("↓", "徒歩すぐ");
                addStationWithLink("伊能忠敬旧宅 15分","https://www.city.katori.lg.jp/sightseeing/meisho/rekishi/s_kyutaku.html");
                addArrowAndDescription("↓", "徒歩すぐ");
                addStationWithLink("佐原町並み交流館 10分","https://sawara-machinami.com");
                addArrowAndDescription("↓" ,"徒歩16分");
                addStationWithLink("観福寺 20分","http://kanpukuji.or.jp");
                addArrowAndDescription("↓", "徒歩11分");
                addStationWithLink("浄国寺 10分","http://jyokokuji.jp");
                addArrowAndDescription("↓", "徒歩6分");
                addStationWithLink("八坂神社 10分","https://www.suigonow.com/yasakajinja/");
                addArrowAndDescription("↓", "徒歩6分");
                addStationWithLink("小野川沿いでご飯 60分", "https://dmap.nid.co.jp/sawara/map#/?c=gourmet");
                addArrowAndDescription("↓");
                addStationWithLink("佐原町屋館 5分","https://www.city.katori.lg.jp/sightseeing/meisho/kanko/machiyakan.html");
                addArrowAndDescription("↓","徒歩15分");
                arrive+=600
            }
        }    
        else if(type==="jinjya"){ //見学種類
            if(attime==="2"){ //滞在時間
                addArrowAndDescription("↓", "徒歩10分");
                addStationWithLink("諏訪神社 10分", "http://osuwa3.jp");
                addArrowAndDescription("↓", "徒歩13分");
                addStationWithLink("与倉屋大土倉","https://www.suigonow.com/yokuraya/");
                addArrowAndDescription("↓", "徒歩15分");
                addStationWithLink("観福寺 20分","http://kanpukuji.or.jp");
                addArrowAndDescription("↓", "徒歩18分");
                addStationWithLink("八坂神社 10分","https://www.suigonow.com/yasakajinja/");
                addArrowAndDescription("↓", "徒歩14分");
                arrive+=200
            }
            if(attime==="3"){ //滞在時間
                addArrowAndDescription("↓", "徒歩10分");
                addStationWithLink("諏訪神社 10分", "http://osuwa3.jp");
                addArrowAndDescription("↓", "徒歩8分");
                addStationWithLink("荘厳寺 10分","https://br-promotion.jp/shogonji/");
                addArrowAndDescription("↓", "徒歩14分");
                addStationWithLink("与倉屋大土倉","https://www.suigonow.com/yokuraya/");
                addArrowAndDescription("↓", "徒歩15分");
                addStationWithLink("観福寺 20分","http://kanpukuji.or.jp");
                addArrowAndDescription("↓", "徒歩12分");
                addStationWithLink("浄国寺 10分","http://jyokokuji.jp");
                addArrowAndDescription("↓", "徒歩6分");
                addStationWithLink("八坂神社 10分","https://www.suigonow.com/yasakajinja/");
                addArrowAndDescription("↓", "徒歩14分");
                addStationWithLink("佐原町並み交流館 20分","https://sawara-machinami.com");
                addArrowAndDescription("↓" ,"徒歩13分");
                arrive+=300
             }
            if(attime==="4"){ //滞在時間
                addArrowAndDescription("↓", "徒歩10分");
                addStationWithLink("諏訪神社 10分", "http://osuwa3.jp");
                addArrowAndDescription("↓", "徒歩8分");
                addStationWithLink("荘厳寺 10分","https://br-promotion.jp/shogonji/");
                addArrowAndDescription("↓", "徒歩14分");
                addStationWithLink("与倉屋大土倉","https://www.suigonow.com/yokuraya/");
                addArrowAndDescription("↓", "徒歩15分");
                addStationWithLink("観福寺 20分","http://kanpukuji.or.jp");
                addArrowAndDescription("↓", "徒歩12分");
                addStationWithLink("浄国寺 10分","http://jyokokuji.jp");
                addArrowAndDescription("↓", "徒歩6分");
                addStationWithLink("八坂神社 10分","https://www.suigonow.com/yasakajinja/");
                addArrowAndDescription("↓", "徒歩14分");
                addStationWithLink("佐原町並み交流館 20分","https://sawara-machinami.com");
                addArrowAndDescription("↓" ,"徒歩4分");
                addStationWithLink("小野川沿いでご飯 60分", "https://dmap.nid.co.jp/sawara/map#/?c=gourmet");
                addArrowAndDescription("↓", "徒歩9分");
                arrive+=400
            }
            if(attime==="5"){ //滞在時間
                addArrowAndDescription("↓", "徒歩20分");
                addStationWithLink("水の郷佐原 40分","http://www.e-sawara.com");
                addArrowAndDescription("↓", "徒歩20分");
                addStation("佐原駅");
                addArrowAndDescription("↓", "徒歩10分");
                addStationWithLink("諏訪神社 10分", "http://osuwa3.jp");
                addArrowAndDescription("↓", "徒歩8分");
                addStationWithLink("荘厳寺 10分","https://br-promotion.jp/shogonji/");
                addArrowAndDescription("↓", "徒歩14分");
                addStationWithLink("与倉屋大土倉","https://www.suigonow.com/yokuraya/");
                addArrowAndDescription("↓", "徒歩15分");
                addStationWithLink("観福寺 20分","http://kanpukuji.or.jp");
                addArrowAndDescription("↓", "徒歩12分");
                addStationWithLink("浄国寺 10分","http://jyokokuji.jp");
                addArrowAndDescription("↓", "徒歩6分");
                addStationWithLink("八坂神社 10分","https://www.suigonow.com/yasakajinja/");
                addArrowAndDescription("↓", "徒歩14分");
                addStationWithLink("佐原町並み交流館 20分","https://sawara-machinami.com");
                addArrowAndDescription("↓" ,"徒歩4分");
                addStationWithLink("小野川沿いでご飯 60分", "https://dmap.nid.co.jp/sawara/map#/?c=gourmet");
                addArrowAndDescription("↓", "徒歩9分");
                arrive+=500
            }
            if(attime==="6"){ //滞在時間
                addArrowAndDescription("↓", "徒歩20分");
                addStationWithLink("水の郷佐原 40分","http://www.e-sawara.com");
                addArrowAndDescription("↓", "徒歩20分");
                addStation("佐原駅");
                addArrowAndDescription("↓", "徒歩10分");
                addStationWithLink("諏訪神社 10分", "http://osuwa3.jp");
                addArrowAndDescription("↓", "徒歩8分");
                addStationWithLink("荘厳寺 10分","https://br-promotion.jp/shogonji/");
                addArrowAndDescription("↓", "徒歩14分");
                addStationWithLink("与倉屋大土倉","https://www.suigonow.com/yokuraya/");
                addArrowAndDescription("↓", "徒歩15分");
                addStationWithLink("観福寺 20分","http://kanpukuji.or.jp");
                addArrowAndDescription("↓", "徒歩12分");
                addStationWithLink("浄国寺 10分","http://jyokokuji.jp");
                addArrowAndDescription("↓", "徒歩6分");
                addStationWithLink("八坂神社 10分","https://www.suigonow.com/yasakajinja/");
                addArrowAndDescription("↓", "徒歩20分");
                addStationWithLink("佐原町並み交流館 20分","https://sawara-machinami.com");
                addArrowAndDescription("↓" ,"徒歩4分");
                addStationWithLink("小野川沿い散策 15分","https://www.sawara-machinami.org/home/history");
                addArrowAndDescription("↓");
                addStationWithLink("小野川沿いでご飯 90分", "https://dmap.nid.co.jp/sawara/map#/?c=gourmet");
                addArrowAndDescription("↓", "徒歩9分");
                arrive+=600
            }
        
            
         
        }

           
    }
    if(backspot==="sawara"){
        addStation("佐原駅");
    }
    if(arrive<=1111){     //佐原駅到着時間
        console.log(arrive)

        if(day==="土"||day==="日"&& backspot!=="sawara"){
            console.log(10)
            addStation("11:11発 佐原駅");
            addArrowAndDescription("↓", "成田線 千葉行き");
                if(backspot==="narita"){
                    addStation("12:08着 成田駅");
                }
                else if(backspot==="narita-airport"){
                    addStation("11:41着/12:08発 成田駅");
                    addArrowAndDescription("↓", "成田線 成田空港行き");
                    addStation("12:19着 成田空港駅");
                }
                else if(backspot==="chiba"){
                    addStation("12:13着 千葉駅")
                }
                if(backspot==="tokyo"||backspot==="yokohama"||backspot==="shinjyuku"||backspot==="shinagawa"){  //到着地を指定
                    addStation("12:13着/12:26発 千葉駅");
                    addArrowAndDescription("↓", "総武線快速 久里浜行き");
                    if(backspot==="tokyo"){
                        addStation("13:05着 東京駅")
                    }
                    else if(backspot==="shinagawa"){
                        addStation("13:16着 品川駅")
                    }
                    else if(backspot==="yokohama"){
                        addStation("13:38着 横浜駅")
                    }
                    else if(backspot==="shinjyuku"){
                        addStation("13:05着/13:11発 東京駅")
                        addArrowAndDescription("↓", "中央線快速 立川行き");
                        addStation("13:24着 新宿駅")
                    }
                }
        }else if(backspot!=="sawara"){
            console.log(10)
            addStation("11:11発 佐原駅");
            addArrowAndDescription("↓", "成田線 千葉行き");
                if(backspot==="narita"){
                    addStation("12:08着 成田駅");
                }
                else if(backspot==="narita-airport"){
                    addStation("11:41着/12:08発 成田駅");
                    addArrowAndDescription("↓", "成田線 成田空港行き");
                    addStation("12:19着 成田空港駅");
                }
                else if(backspot==="chiba"){
                    addStation("12:13着 千葉駅")
                }
                if(backspot==="tokyo"||backspot==="yokohama"||backspot==="shinjyuku"||backspot==="shinagawa"){  //到着地を指定
                    addStation("12:13着/12:26発 千葉駅");
                    addArrowAndDescription("↓", "総武線快速 久里浜行き");
                    if(backspot==="tokyo"){
                        addStation("13:05着 東京駅")
                    }
                    else if(backspot==="shinagawa"){
                        addStation("13:16着 品川駅")
                    }
                    else if(backspot==="yokohama"){
                        addStation("13:38着 横浜駅")
                    }
                    else if(backspot==="shinjyuku"){
                        addStation("13:05着/13:10発 東京駅")
                        addArrowAndDescription("↓", "中央線快速 青梅行き");
                        addStation("13:24着 新宿駅")
                    }
                }
        }
        
    }
    if(1111<arrive&&arrive<=1254){     //佐原駅到着時間
        console.log(arrive)

        if(day==="土"||day==="日"&& backspot!=="sawara"){
            console.log(10)
            addStation("12:54発 佐原駅");
            addArrowAndDescription("↓", "成田線 千葉行き");
                if(backspot==="narita"){
                    addStation("13:25着 成田駅");
                }
                else if(backspot==="narita-airport"){
                    addStation("13:25着/13:32発 成田駅");
                    addArrowAndDescription("↓", "成田線 成田空港行き");
                    addStation("13:44着 成田空港駅");
                }
                else if(backspot==="chiba"){
                    addStation("14:09着 千葉駅")
                }
                if(backspot==="tokyo"||backspot==="yokohama"||backspot==="shinjyuku"||backspot==="shinagawa"){  //到着地を指定
                    addStation("14:09着/14:26発 千葉駅");
                    addArrowAndDescription("↓", "総武線快速 久里浜行き");
                    if(backspot==="tokyo"){
                        addStation("15:05着 東京駅")
                    }
                    else if(backspot==="shinagawa"){
                        addStation("15:16着 品川駅")
                    }
                    else if(backspot==="yokohama"){
                        addStation("15:38着 横浜駅")
                    }
                    else if(backspot==="shinjyuku"){
                        addStation("15:05着/15:10発 東京駅")
                        addArrowAndDescription("↓", "中央線快速 高尾行き");
                        addStation("15:24着 新宿駅")
                    }
                }
        }else if(backspot!=="sawara"){
            console.log(10)
            addStation("12:54発 佐原駅");
            addArrowAndDescription("↓", "成田線 千葉行き");
                if(backspot==="narita"){
                    addStation("13:25着 成田駅");
                }
                else if(backspot==="narita-airport"){
                    addStation("13:25着/13:32発 成田駅");
                    addArrowAndDescription("↓", "成田線 成田空港行き");
                    addStation("13:44着 成田空港駅");
                }
                else if(backspot==="chiba"){
                    addStation("14:09着 千葉駅")
                }
                if(backspot==="tokyo"||backspot==="yokohama"||backspot==="shinjyuku"||backspot==="shinagawa"){  //到着地を指定
                    addStation("14:09着/14:26発 千葉駅");
                    addArrowAndDescription("↓", "総武線快速 久里浜行き");
                    if(backspot==="tokyo"){
                        addStation("15:05着 東京駅")
                    }
                    else if(backspot==="shinagawa"){
                        addStation("15:16着 品川駅")
                    }
                    else if(backspot==="yokohama"){
                        addStation("15:38着 横浜駅")
                    }
                    else if(backspot==="shinjyuku"){
                        addStation("15:05着/15:17発 東京駅")
                        addArrowAndDescription("↓", "中央線快速 武蔵小金井行き");
                        addStation("15:30着 新宿駅")
                    }
                }
        }
        
    }
    if(1254<arrive&&arrive<=1352){     //佐原駅到着時間
        console.log(arrive)
        if(day==="土"||day==="日"&& backspot!=="sawara"){
            console.log(10)
            addStation("13:52発 佐原駅");
            addArrowAndDescription("↓", "成田線 成田行き");
                if(backspot==="narita"){
                    addStation("14:26着 成田駅");
                }
                else if(backspot==="narita-airport"){
                    addStation("14:26着/14:30発 成田駅");
                    addArrowAndDescription("↓", "成田線 成田空港行き");
                    addStation("14:44着 成田空港駅");
                }
                else if(backspot==="chiba"){
                    addStation("14:26着/14:30発 成田駅");
                    addArrowAndDescription("↓", "成田線 千葉行き");
                    addStation("15:17着 千葉駅");
                    
                }
                if(backspot==="tokyo"||backspot==="yokohama"||backspot==="shinjyuku"||backspot==="shinagawa"){  //到着地を指定
                    addStation("14:26着/14:30発 成田駅");
                    addArrowAndDescription("↓", "成田線 千葉行き");
                    addStation("15:17着/15:26発 千葉駅");
                    addArrowAndDescription("↓", "総武線快速 横須賀行き");
                    if(backspot==="tokyo"){
                        addStation("16:05着 東京駅")
                    }
                    else if(backspot==="shinagawa"){
                        addStation("16:19着 品川駅")
                    }
                    else if(backspot==="yokohama"){
                        addStation("16:42着 横浜駅")
                    }
                    else if(backspot==="shinjyuku"){
                        addStation("16:05着/16:13発 東京駅")
                        addArrowAndDescription("↓", "中央線快速 豊田行き");
                        addStation("16:26着 新宿駅")
                    }
                }
        }else if(backspot!=="sawara"){
            console.log(10)
            addStation("13:52発 佐原駅");
            addArrowAndDescription("↓", "成田線 成田行き");
                if(backspot==="narita"){
                    addStation("14:26着 成田駅");
                }
                else if(backspot==="narita-airport"){
                    addStation("14:26着/14:30発 成田駅");
                    addArrowAndDescription("↓", "成田線 成田空港行き");
                    addStation("14:44着 成田空港駅");
                }
                else if(backspot==="chiba"){
                    addStation("14:26着/14:30発 成田駅");
                    addArrowAndDescription("↓", "成田線 千葉行き");
                    addStation("15:17着 千葉駅");
                    
                }
                if(backspot==="tokyo"||backspot==="yokohama"||backspot==="shinjyuku"||backspot==="shinagawa"){  //到着地を指定
                    addStation("14:26着/14:30発 成田駅");
                    addArrowAndDescription("↓", "成田線 千葉行き");
                    addStation("15:17着/15:26発 千葉駅");
                    addArrowAndDescription("↓", "総武線快速 横須賀行き");
                    if(backspot==="tokyo"){
                        addStation("16:05着 東京駅")
                    }
                    else if(backspot==="shinagawa"){
                        addStation("16:19着 品川駅")
                    }
                    else if(backspot==="yokohama"){
                        addStation("16:42着 横浜駅")
                    }
                    else if(backspot==="shinjyuku"){
                        addStation("16:05着/16:17発 東京駅")
                        addArrowAndDescription("↓", "中央線快速 青梅行き");
                        addStation("16:31着 新宿駅")
                    }
                }
        }
        
    }
    if(1352<arrive&&arrive<=1452){     //佐原駅到着時間
        console.log(arrive)
        if(day==="土"||day==="日"&& backspot!=="sawara"){
            console.log(10)
            addStation("14:52発 佐原駅");
            addArrowAndDescription("↓", "成田線 千葉行き");
                if(backspot==="narita"){
                    addStation("15:25着 成田駅");
                }
                else if(backspot==="narita-airport"){
                    addStation("15:25着/15:32発 成田駅");
                    addArrowAndDescription("↓", "成田線 成田空港行き");
                    addStation("15:43着 成田空港駅");
                }
                else if(backspot==="chiba"){
                    addStation("16:16着 千葉駅");
                    
                }
                if(backspot==="tokyo"||backspot==="yokohama"||backspot==="shinjyuku"||backspot==="shinagawa"){  //到着地を指定
                    addStation("16:16着/16:23発 千葉駅");
                    addArrowAndDescription("↓", "総武線快速 逗子行き");
                    if(backspot==="tokyo"){
                        addStation("17:01着 東京駅")
                    }
                    else if(backspot==="shinagawa"){
                        addStation("17:13着 品川駅")
                    }
                    else if(backspot==="yokohama"){
                        addStation("17:35着 横浜駅")
                    }
                    else if(backspot==="shinjyuku"){
                        addStation("17:01着/17:08発 東京駅")
                        addArrowAndDescription("↓", "中央線青梅特快 青梅行き");
                        addStation("17:23着 新宿駅")
                    }
                }
        }else if(backspot!=="sawara"){
            console.log(10)
            addStation("14:52発 佐原駅");
            addArrowAndDescription("↓", "成田線 千葉行き");
                if(backspot==="narita"){
                    addStation("15:25着 成田駅");
                }
                else if(backspot==="narita-airport"){
                    addStation("15:25着/15:32発 成田駅");
                    addArrowAndDescription("↓", "成田線 成田空港行き");
                    addStation("15:43着 成田空港駅");
                }
                else if(backspot==="chiba"){
                    addStation("16:16着 千葉駅");
                    
                }
                if(backspot==="tokyo"||backspot==="yokohama"||backspot==="shinjyuku"||backspot==="shinagawa"){  //到着地を指定
                    addStation("16:16着/16:24発 千葉駅");
                    addArrowAndDescription("↓", "総武線快速 久里浜行き");
                    if(backspot==="tokyo"){
                        addStation("17:02着 東京駅")
                    }
                    else if(backspot==="shinagawa"){
                        addStation("17:13着 品川駅")
                    }
                    else if(backspot==="yokohama"){
                        addStation("17:36着 横浜駅")
                    }
                    else if(backspot==="shinjyuku"){
                        addStation("17:02着/17:07発 東京駅")
                        addArrowAndDescription("↓", "中央線快速 八王子行き");
                        addStation("17:21着 新宿駅")
                    }
                }
        }
        
    }
    if(1452<arrive&&arrive<=1556){     //佐原駅到着時間
        console.log(arrive)
        if(day==="土"||day==="日"&& backspot!=="sawara"){
            console.log(10)
            addStation("15:56発 佐原駅");
            addArrowAndDescription("↓", "成田線 千葉行き");
                if(backspot==="narita"){
                    addStation("16:27着 成田駅");
                }
                else if(backspot==="narita-airport"){
                    addStation("16:27着/16:32発 成田駅");
                    addArrowAndDescription("↓", "成田線 成田空港行き");
                    addStation("16:44着 成田空港駅");
                }
                else if(backspot==="chiba"){
                    addStation("17:11着 千葉駅");
                    
                }
                if(backspot==="tokyo"||backspot==="yokohama"||backspot==="shinjyuku"||backspot==="shinagawa"){  //到着地を指定
                    addStation("17:11着/17:22発 千葉駅");
                    addArrowAndDescription("↓", "総武線快速 東京行き");
                    if(backspot==="tokyo"){
                        addStation("18:03着 東京駅")
                    }
                    else if(backspot==="shinagawa"){
                        addStation("18:03着/18:09発 東京駅")
                        addArrowAndDescription("↓", "横須賀線普通 久里浜行き");
                        addStation("18:19着 品川駅")
                    }
                    else if(backspot==="yokohama"){
                        addStation("18:03着/18:09発 東京駅")
                        addArrowAndDescription("↓", "横須賀線普通 久里浜行き");
                        addStation("18:42着 横浜駅")
                    }
                    else if(backspot==="shinjyuku"){
                        addStation("18:03着/18:14発 東京駅")
                        addArrowAndDescription("↓", "中央線快速 青梅行き");
                        addStation("18:28着 新宿駅")
                    }
                }
        }else if(backspot!=="sawara"){
            console.log(10)
            addStation("15:56発 佐原駅");
            addArrowAndDescription("↓", "成田線 千葉行き");
                if(backspot==="narita"){
                    addStation("16:27着 成田駅");
                }
                else if(backspot==="narita-airport"){
                    addStation("16:27着/16:32発 成田駅");
                    addArrowAndDescription("↓", "成田線 成田空港行き");
                    addStation("16:44着 成田空港駅");
                }
                else if(backspot==="chiba"){
                    addStation("17:11着 千葉駅");
                    
                }
                if(backspot==="tokyo"||backspot==="yokohama"||backspot==="shinjyuku"||backspot==="shinagawa"){  //到着地を指定
                    addStation("17:11着/17:22発 千葉駅");
                    addArrowAndDescription("↓", "総武線快速 逗子行き");
                    if(backspot==="tokyo"){
                        addStation("18:01着 東京駅")
                    }
                    else if(backspot==="shinagawa"){
                        addStation("18:10着 品川駅")
                    }
                    else if(backspot==="yokohama"){
                        addStation("18:34着 横浜駅")
                    }
                    else if(backspot==="shinjyuku"){
                        addStation("18:01着/18:07発 東京駅")
                        addArrowAndDescription("↓", "中央線通勤快速 河口湖行き");
                        addStation("18:20着 新宿駅")
                    }
                }
        }
        
    }
    if(1556<arrive&&arrive<=1659){     //佐原駅到着時間
        console.log(arrive)
        if(day==="土"||day==="日"&& backspot!=="sawara"){
            console.log(10)
            addStation("16:59発 佐原駅");
            addArrowAndDescription("↓", "成田線 成田行き");
                if(backspot==="narita"){
                    addStation("17:31着 成田駅");
                }
                else if(backspot==="narita-airport"){
                    addStation("17:31着/17:33発 成田駅");
                    addArrowAndDescription("↓", "成田線 成田空港行き");
                    addStation("17:45着 成田空港駅");
                }
                else if(backspot==="chiba"){
                    addStation("17:31着/17:49発 成田駅");
                    addArrowAndDescription("↓", "成田線 千葉行き");
                    addStation("18:26着 千葉駅");
                    
                }
                if(backspot==="tokyo"||backspot==="yokohama"||backspot==="shinjyuku"||backspot==="shinagawa"){  //到着地を指定
                    addStation("17:31着/17:49発 成田駅");
                    addArrowAndDescription("↓", "成田線 千葉行き");
                    addStation("18:26着/18:30発 千葉駅");
                    addArrowAndDescription("↓", "総武線快速 久里浜行き");
                    if(backspot==="tokyo"){
                        addStation("19:08着 東京駅")
                    }
                    else if(backspot==="shinagawa"){
                        addStation("19:17着 品川駅")
                    }
                    else if(backspot==="yokohama"){
                        addStation("19:39着 横浜駅")
                    }
                    else if(backspot==="shinjyuku"){
                        addStation("19:08着/19:13発 東京駅")
                        addArrowAndDescription("↓", "中央線快速 青梅行き");
                        addStation("19:26着 新宿駅")
                    }
                }
        }else if(backspot!=="sawara"){
            console.log(10)
            addStation("16:59発 佐原駅");
            addArrowAndDescription("↓", "成田線 成田行き");
                if(backspot==="narita"){
                    addStation("17:31着 成田駅");
                }
                else if(backspot==="narita-airport"){
                    addStation("17:31着/17:33発 成田駅");
                    addArrowAndDescription("↓", "成田線 成田空港行き");
                    addStation("17:45着 成田空港駅");
                }
                else if(backspot==="chiba"){
                    addStation("17:31着/17:49発 成田駅");
                    addArrowAndDescription("↓", "成田線 千葉行き");
                    addStation("18:26着 千葉駅");
                    
                }
                if(backspot==="tokyo"||backspot==="yokohama"||backspot==="shinjyuku"||backspot==="shinagawa"){  //到着地を指定
                    addStation("17:31着/17:49発 成田駅");
                    addArrowAndDescription("↓", "成田線 千葉行き");
                    addStation("18:26着/18:34発 千葉駅");
                    addArrowAndDescription("↓", "総武線快速 逗子行き");
                    if(backspot==="tokyo"){
                        addStation("19:12着 東京駅")
                    }
                    else if(backspot==="shinagawa"){
                        addStation("19:23着 品川駅")
                    }
                    else if(backspot==="yokohama"){
                        addStation("19:45着 横浜駅")
                    }
                    else if(backspot==="shinjyuku"){
                        addStation("19:12着/19:17発 東京駅")
                        addArrowAndDescription("↓", "中央線快速 立川行き");
                        addStation("19:30着 新宿駅")
                    }
                }
        }
        
    }
    if(1659<arrive&&arrive<=1757){     //佐原駅到着時間
        console.log(arrive)
        if(day==="土"||day==="日"&& backspot!=="sawara"){
            console.log(10)
            addStation("17:57発 佐原駅");
            addArrowAndDescription("↓", "成田線 千葉行き");
                if(backspot==="narita"){
                    addStation("18:27着 成田駅");
                }
                else if(backspot==="narita-airport"){
                    addStation("18:27着/18:30発 成田駅");
                    addArrowAndDescription("↓", "成田線 成田空港行き");
                    addStation("18:41着 成田空港駅");
                }
                else if(backspot==="chiba"){
                    addStation("19:05着 千葉駅");
                    
                }
                if(backspot==="tokyo"||backspot==="yokohama"||backspot==="shinjyuku"||backspot==="shinagawa"){  //到着地を指定
                    addStation("19:05着/19:16発 千葉駅");
                    addArrowAndDescription("↓", "総武線快速 久里浜行き");
                    if(backspot==="tokyo"){
                        addStation("19:57着 東京駅")
                    }
                    else if(backspot==="shinagawa"){
                        addStation("20:08着 品川駅")
                    }
                    else if(backspot==="yokohama"){
                        addStation("20:30着 横浜駅")
                    }
                    else if(backspot==="shinjyuku"){
                        addStation("19:57着/20:01発 東京駅")
                        addArrowAndDescription("↓", "中央線快速 八王子行き");
                        addStation("20:15着 新宿駅")
                    }
                }
        }else if(backspot!=="sawara"){
            addStation("17:57発 佐原駅");
            addArrowAndDescription("↓", "成田線 千葉行き");
                if(backspot==="narita"){
                    addStation("18:27着 成田駅");
                }
                else if(backspot==="narita-airport"){
                    addStation("18:27着/18:30発 成田駅");
                    addArrowAndDescription("↓", "成田線 成田空港行き");
                    addStation("18:41着 成田空港駅");
                }
                else if(backspot==="chiba"){
                    addStation("19:05着 千葉駅");
                    
                }
                if(backspot==="tokyo"||backspot==="yokohama"||backspot==="shinjyuku"||backspot==="shinagawa"){  //到着地を指定
                    addStation("19:05着/19:16発 千葉駅");
                    addArrowAndDescription("↓", "総武線快速 久里浜行き");
                    if(backspot==="tokyo"){
                        addStation("19:57着 東京駅")
                    }
                    else if(backspot==="shinagawa"){
                        addStation("20:09着 品川駅")
                    }
                    else if(backspot==="yokohama"){
                        addStation("20:31着 横浜駅")
                    }
                    else if(backspot==="shinjyuku"){
                        addStation("19:57着/20:03発 東京駅")
                        addArrowAndDescription("↓", "中央線快速 青梅行き");
                        addStation("20:17着 新宿駅")
                    }
                }
        }
        
    }
    
});

    // 駅とURLを追加する関数
    function addStationWithLink(stationText, stationURL) {
        const stationContainer = document.createElement('div');
        stationContainer.className = 'station-container';

        const station = document.createElement('div');
        station.className = 'station';
        station.textContent = stationText;

        const stationLink = document.createElement('a');
        stationLink.href = stationURL;
        stationLink.textContent = '詳細を見る'; // リンクのテキストを設定

        stationContainer.appendChild(station);
        stationContainer.appendChild(stationLink);

        routeContainer.appendChild(stationContainer);
    }
    // 駅を追加する関数
    function addStation(stationText) {
        const station = document.createElement('div');
        station.className = 'station';
        station.textContent = stationText;
        routeContainer.appendChild(station);
    }


    // 矢印と隣の文字を同じ行に追加する関数
    function addArrowAndDescription(arrowText, descriptionText) {
        const container = document.createElement('div');
        container.className = 'arrow-and-description';

        const arrow = document.createElement('div');
        arrow.className = 'arrow';
        arrow.textContent = arrowText;

        const description = document.createElement('div');
        description.className = 'description';
        description.textContent = descriptionText;

        container.appendChild(arrow);
        container.appendChild(description);

        routeContainer.appendChild(container);
    }
});
