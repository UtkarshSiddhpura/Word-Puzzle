var items = new Array();

var WordList = [
  {
    name: "word1",
    value: "Graduate",
    type: "media",
    list: { index: 1, name: "words" },
    media: "text",
    hint: "",
  },
  {
    name: "word2",
    value: "Uniforms",
    type: "media",
    list: { index: 2, name: "words" },
    media: "text",
    hint: "",
  },
  {
    name: "word3",
    value: "Degree",
    type: "media",
    list: { index: 3, name: "words" },
    media: "text",
    hint: "",
  },
  {
    name: "word4",
    value: "literacy",
    type: "media",
    list: { index: 4, name: "words" },
    media: "text",
    hint: "",
  },
  {
    name: "word5",
    value: "acquisition",
    type: "media",
    list: { index: 5, name: "words" },
    media: "text",
    hint: "",
  },
  {
    name: "word6",
    value: "Learning",
    type: "media",
    list: { index: 6, name: "words" },
    media: "text",
    hint: "",
  },
  {
    name: "word7",
    value: "boarders",
    type: "media",
    list: { index: 7, name: "words" },
    media: "text",
    hint: "",
  },
  {
    name: "word8",
    value: "Formal",
    type: "media",
    list: { index: 8, name: "words" },
    media: "text",
    hint: "",
  },
  {
    name: "word9",
    value: "Informal",
    type: "media",
    list: { index: 9, name: "words" },
    media: "text",
    hint: "",
  },
  {
    name: "word10",
    value: "quizzes",
    type: "media",
    list: { index: 10, name: "words" },
    media: "text",
    hint: "",
  },
  {
    name: "word11",
    value: "memorize",
    type: "media",
    list: { index: 11, name: "words" },
    media: "text",
    hint: "",
  },
  {
    name: "word12",
    xmlValue: "",
    value: "",
    type: "media",
    list: { index: 12, name: "words" },
  },
  {
    name: "word13",
    xmlValue: "",
    value: "",
    type: "media",
    list: { index: 13, name: "words" },
  },
  {
    name: "word14",
    xmlValue: "",
    value: "",
    type: "media",
    list: { index: 14, name: "words" },
  },
  {
    name: "word15",
    xmlValue: "",
    value: "",
    type: "media",
    list: { index: 15, name: "words" },
  },
  {
    name: "word16",
    xmlValue: "",
    value: "",
    type: "media",
    list: { index: 16, name: "words" },
  },
  {
    name: "word17",
    xmlValue: "",
    value: "",
    type: "media",
    list: { index: 17, name: "words" },
  },
  {
    name: "word18",
    xmlValue: "",
    value: "",
    type: "media",
    list: { index: 18, name: "words" },
  },
  {
    name: "word19",
    xmlValue: "",
    value: "",
    type: "media",
    list: { index: 19, name: "words" },
  },
  {
    name: "word20",
    xmlValue: "",
    value: "",
    type: "media",
    list: { index: 20, name: "words" },
  },
];
var HintList = [
  {
    name: "hint1",
    value: "",
    type: "media",
    list: { index: 1, name: "words" },
  },
  {
    name: "hint2",
    value: "",
    type: "media",
    list: { index: 2, name: "words" },
  },
  {
    name: "hint3",
    value: "",
    type: "media",
    list: { index: 3, name: "words" },
  },
  {
    name: "hint4",
    value: "",
    type: "media",
    list: { index: 4, name: "words" },
  },
  {
    name: "hint5",
    value: "",
    type: "media",
    list: { index: 5, name: "words" },
  },
  {
    name: "hint6",
    value: "",
    type: "media",
    list: { index: 6, name: "words" },
  },
  {
    name: "hint7",
    value: "",
    type: "media",
    list: { index: 7, name: "words" },
  },
  {
    name: "hint8",
    value: "",
    type: "media",
    list: { index: 8, name: "words" },
  },
  {
    name: "hint9",
    value: "",
    type: "media",
    list: { index: 9, name: "words" },
  },
  {
    name: "hint10",
    value: "",
    type: "media",
    list: { index: 10, name: "words" },
  },
  {
    name: "hint11",
    value: "",
    type: "media",
    list: { index: 11, name: "words" },
  },
  {
    name: "hint12",
    value: "",
    type: "media",
    list: { index: 12, name: "words" },
  },
  {
    name: "hint13",
    value: "",
    type: "media",
    list: { index: 13, name: "words" },
  },
  {
    name: "hint14",
    value: "",
    type: "media",
    list: { index: 14, name: "words" },
  },
  {
    name: "hint15",
    value: "",
    type: "media",
    list: { index: 15, name: "words" },
  },
  {
    name: "hint16",
    value: "",
    type: "media",
    list: { index: 16, name: "words" },
  },
  {
    name: "hint17",
    value: "",
    type: "media",
    list: { index: 17, name: "words" },
  },
  {
    name: "hint18",
    value: "",
    type: "media",
    list: { index: 18, name: "words" },
  },
  {
    name: "hint19",
    value: "",
    type: "media",
    list: { index: 19, name: "words" },
  },
  {
    name: "hint20",
    value: "",
    type: "media",
    list: { index: 20, name: "words" },
  },
];
var lowercase = "";

var id = 0;
for (var i = 0; i < WordList.length; i++) {
  if (trim(WordList[i].value) == "") {
    // delete unused slots
    WordList.splice(i, 1);
    HintList.splice(i, 1);
    i--;
    continue;
  }
  id++;
  items.push({
    id: id,
    word: trim(
      lowercase
        ? WordList[i].value.toLowerCase()
        : WordList[i].value.toUpperCase()
    ),
    hint: HintList[i].value != "" ? HintList[i] : null,
  });
}

var diagonal = true;
window.onload = function () {
  var dirs = ["-", "|"];
  if (diagonal == "true")
    dirs = ["-", "|", "\\", "/"];

  characters = "abcdefghijklmnopqrstuvwxyz".toUpperCase();

  if (lowercase == "true") {
    characters = characters.toLowerCase();
  }

  var grid = createWordgrid(items, dirs, characters);

  document.getElementById("k").innerHTML = displayWordgrid(
    grid,
    AppClient.getParameter("showwords") == "true",
    AppClient.getParameter("showhints") == "true"
  );
};

function showHintSolution(id) {
  for (var i = 0; i < currentWordgrid.items.length; i++) {
    if (currentWordgrid.items[i].id == id) {
      var h = currentWordgrid.items[i].hint;
      // show hint in popup

      if (h.media == "image") {
      }
      if (h.media == "speech") {
      }
      if (h.media == "audio") {
        createModalDialogFrame(
          '<div id="modalContentInner"></div>',
          function () {
            h.loadPlayer("modalContentInner", true);
          }
        ).modal("show");
      }
      if (h.media == "video") {
      }
    }
  }
}

function onWordgridSolved() {
}

var currentWordgrid = null;
function checkWordgridCorrectFilled() {
  var done = true;
  for (var z = 0; z < currentWordgrid.items.length; z++) {
    var item = currentWordgrid.items[z];
    var wrongWord = false;
    var wordOk = true;
    var parts = new Array();
    for (var i = 0; i < item.word.length; i++) {
      var charOk = true;
      var d = null;
      if (item.direction == "-") {
        d = document.getElementById("grid_" + (item.x + i) + "_" + item.y);
        if (d && d.className.indexOf("highlight") < 0) charOk = false;
        parts.push(d);
      }
      if (item.direction == "|") {
        d = document.getElementById("grid_" + item.x + "_" + (item.y + i));
        if (d && d.className.indexOf("highlight") < 0) charOk = false;
        parts.push(d);
      }
      if (item.direction == "\\") {
        d = document.getElementById(
          "grid_" + (item.x + i) + "_" + (item.y + i)
        );
        if (d && d.className.indexOf("highlight") < 0) charOk = false;
        parts.push(d);
      }
      if (item.direction == "/") {
        d = document.getElementById(
          "grid_" + (item.x + i) + "_" + (item.y - i)
        );
        if (d && d.className.indexOf("highlight") < 0) charOk = false;
        parts.push(d);
      }
      if (!charOk) wordOk = false;
    }
    if (wordOk) {
      // check if only this word is highlighted
      for (
        var dy = currentWordgrid.minY - 1;
        dy < currentWordgrid.maxY + 2;
        dy++
      ) {
        for (
          var dx = currentWordgrid.minX - 1;
          dx < currentWordgrid.maxX + 2;
          dx++
        ) {
          if (currentWordgrid.grid[dy][dx]) {
            var d = document.getElementById("grid_" + dx + "_" + dy);
            if (d && d.className.indexOf("highlight") > 0) {
              var ispart = false;
              for (var i = 0; i < parts.length; i++)
                if (parts[i] == d) ispart = true;
              if (!ispart) wordOk = false;
            }
          }
        }
      }
    }
    if (item.solved) wordOk = true;
    if (wordOk) {
      for (var i = 0; i < parts.length; i++) {
        var d = parts[i];
        if (d) {
          d.className = d.className.replace("correct", "");
          d.className += " correct";
        }
      }
      if (!item.solved) {
        item.solved = true;
        addFoundWord(item);
      }
    } else wrongWord = true;

    if (wrongWord) done = false;
  }
  if (done) onWordgridSolved();
  return done;
}
function clearHighlight() {
  for (var dy = currentWordgrid.minY - 1; dy < currentWordgrid.maxY + 2; dy++) {
    for (
      var dx = currentWordgrid.minX - 1;
      dx < currentWordgrid.maxX + 2;
      dx++
    ) {
      if (currentWordgrid.grid[dy][dx]) {
        var d = document.getElementById("grid_" + dx + "_" + dy);
        if (d) d.className = d.className.replace("highlight", "");
      }
    }
  }
}

var lastClickItemIndex = 0;
var downFieldX = -1;
var downFieldY = -1;
var downDirection = "";
var mouseIsDown = false;
function updateHighlightField(x, y) {
  if (!mouseIsDown) return;
  var dx = downFieldX - x;
  var dy = downFieldY - y;
  downDirection = "-";
  if (dx > 0 && dy > 0) downDirection = "\\";
  if (dx < 0 && dy < 0) downDirection = "\\";
  if (dx > 0 && dy < 0) downDirection = "/";
  if (dx < 0 && dy > 0) downDirection = "/";
  if (dx < 0 && dy == 0) downDirection = "-";
  if (dx > 0 && dy == 0) downDirection = "-";
  if (dx == 0 && dy < 0) downDirection = "|";
  if (dx == 0 && dy > 0) downDirection = "|";

  // clear highlight
  clearHighlight();

  // highlight selected fields
  if (downDirection == "-") {
    var run = true;
    var dx = 0;
    while (run) {
      var d = document.getElementById(
        "grid_" + (downFieldX + dx) + "_" + downFieldY
      );
      run = d && d.innerHTML != "";
      if (run) {
        d.className = d.className.replace("highlight", "");
        d.className += " highlight";
      }
      if (downFieldX + dx == x) break;
      if (x > downFieldX) dx++;
      else dx--;
    }
  }

  if (downDirection == "|") {
    var run = true;
    var dy = 0;
    while (run) {
      var d = document.getElementById(
        "grid_" + downFieldX + "_" + (downFieldY + dy)
      );
      run = d && d.innerHTML != "";
      if (run) {
        d.className = d.className.replace("highlight", "");
        d.className += " highlight";
      }
      if (downFieldY + dy == y) break;
      if (y > downFieldY) dy++;
      else dy--;
    }
  }

  if (downDirection == "/" || downDirection == "\\") {
    var run = true;
    var dx = 0;
    var dy = 0;
    while (run) {
      var d = document.getElementById(
        "grid_" + (downFieldX + dx) + "_" + (downFieldY + dy)
      );
      run = d && d.innerHTML != "";
      if (run) {
        d.className = d.className.replace("highlight", "");
        d.className += " highlight";
      }
      if (downFieldX + dx == x) break;
      if (x > downFieldX) dx++;
      else dx--;
      if (y > downFieldY) dy++;
      else dy--;
    }
  }
}
function endSelection(x, y) {
  mouseIsDown = false;
  checkWordgridCorrectFilled();
  // clear highlight
  clearHighlight();
}
function selectWordgridField(x, y) {
  var direction = "";
  mouseIsDown = true;
  downFieldX = x;
  downFieldY = y;

  // clear highlight
  clearHighlight();
  updateHighlightField(x, y);
}
function updateHighlightFieldTouch(event) {
  var touch = event.touches[0];
  var el = document.elementFromPoint
    ? document.elementFromPoint(touch.clientX, touch.clientY)
    : null;
  if (el) {
    var d = el.id.split("_");
    updateHighlightField(d[1], d[2]);
  }
}
function displayWordgrid(grid, showWords, showHints) {
  currentWordgrid = grid;
  currentWordgrid.showWords = showWords;
  currentWordgrid.showHints = showHints;
  var html = "";
  html +=
    '<table id="wordgrid" style="width:100%;" cellpadding="0" cellspacing="0"><tr><td id="innerWordgrid" align="right" valign="top"><table cellspacing="0" cellpadding="0" ontouchmove="updateHighlightFieldTouch(event);event.preventDefault()" >';
  if (grid.grid.length > 0)
    for (var y = grid.minY - 1; y < grid.maxY + 2; y++) {
      html += "<tr>";
      for (var x = grid.minX - 1; x < grid.maxX + 2; x++) {
        if (grid.grid[y][x]) {
          startIndex = null;
          for (var it = 0; it < grid.grid[y][x].items.length; it++) {
            if (
              grid.grid[y][x].items[it].x == x &&
              grid.grid[y][x].items[it].y == y
            )
              startIndex = grid.grid[y][x].items[it];
          }
          html +=
            '<td><div id="grid_' +
            x +
            "_" +
            y +
            '" style="position:relative;z-Index:1;" ontouchstart="selectWordgridField(' +
            x +
            "," +
            y +
            ');event.preventDefault()" ontouchend="endSelection(' +
            x +
            "," +
            y +
            ');event.preventDefault()" onmousedown="selectWordgridField(' +
            x +
            "," +
            y +
            ')" onmousemove="updateHighlightField(' +
            x +
            "," +
            y +
            ')" onmouseup="endSelection(' +
            x +
            "," +
            y +
            ')" class="field filled">' +
            grid.grid[y][x].character +
            "</div></td>";
        }
      }
      html += "</tr>";
    }
  html += "</table>";

  html += '</td><td valign="top"><div style="padding-left:1.5em;width:16em">';
  var maxlength = 0;
  var hasHints = false;
  for (var z = 0; z < currentWordgrid.items.length; z++) {
    var item = currentWordgrid.items[z];
    maxlength = Math.max(maxlength, item.word.length);
    if (item.hint) hasHints = true;
  }
  if (currentWordgrid.showHints && !hasHints) currentWordgrid.showHints = false;

  var clearword = "";
  for (var z = 0; z < maxlength; z++) clearword += "_";
  currentWordgrid.clearword = clearword;

  html += '<ol id="solutions" class="solutions" style="margin-top:0px">';
  for (var z = 0; z < currentWordgrid.items.length; z++) {
    var item = currentWordgrid.items[z];
    html += '<li><span style="font-weight:bold" id="solution_' + item.id + '">';
    if (showWords) html += item.word;
    else html += clearword;
    html += "</span>";
    html +=
      '<br><span class="solutionhint" id="solution_hint_' + item.id + '">';
    if (item.hint) {
      if (showHints) {
        if (item.hint.media == "text") html += item.hint.value;
        else
          html +=
            '<span class="solutionhintButton" onclick="showHintSolution(' +
            item.id +
            ')"><i class="glyphicon glyphicon-question-sign"></i> ' +
            AppClient.getTranslation("Hinweis") +
            "</span>";
      }
    }
    html += "</span>";
    html += "</li>";
  }
  html += "</ol>";
  html += "</div></td></tr></table>";
  html += "</td></tr></table>";
  return html;
}
function addFoundWord(item) {
  var d = document.getElementById("solution_" + item.id);
  var h = document.getElementById("solution_hint_" + item.id);
  if (currentWordgrid.showWords || currentWordgrid.showHints) {
    d.style.color = "#22cc22";
    if (h) h.style.color = "#22cc22";
    d.innerHTML = item.word;
    var h = document.getElementById(
      d.id.replace("solution_", "solution_hint_")
    );
    if (h && item.hint) {
      if (item.hint.media == "text") h.innerHTML = item.hint.value;
      else
        h.innerHTML =
          '<span class="solutionhintButton" onclick="showHintSolution(' +
          item.id +
          ')"><i class="glyphicon glyphicon-question-sign"></i> ' +
          AppClient.getTranslation("Hinweis") +
          "</span>";
      h.style.color = "#22cc22";
    }
  } else {
    var s = document.getElementById("solutions");
    var els = s.getElementsByTagName("li");
    for (var i = 0; i < els.length; i++) {
      var d = els[i].getElementsByTagName("span")[0];
      if (d.innerHTML == currentWordgrid.clearword) {
        d.style.color = "#22cc22";
        var h = document.getElementById(
          d.id.replace("solution_", "solution_hint_")
        );
        if (h && item.hint) {
          if (item.hint.media == "text") h.innerHTML = item.hint.value;
          else
            h.innerHTML =
              '<span class="solutionhintButton" onclick="showHintSolution(' +
              item.id +
              ')"><i class="glyphicon glyphicon-question-sign"></i> ' +
              AppClient.getTranslation("Hinweis") +
              "</span>";
          h.style.color = "#22cc22";
        }
        d.innerHTML = item.word;
        break;
      }
    }
  }
}

// Main Function responsible to place words on grid --------
function createWordgrid(items, directions, fillCharacters) {
  if (!directions) directions = new Array("-", "|", "\\", "/");
  var maxlen = 0;
  for (var i = 0; i < items.length; i++) {
    maxlen += items[i].word.length * 2;
  }

  // create 2d grid
  var grid = new Array(maxlen);
  for (var i = 0; i < maxlen; i++) grid[i] = new Array(maxlen);
  var done = new Array();

  // fill grid
  grid.fixedSolution = false;

  var impossible = new Array();
  var retry = 0;
  var lastfails = 0;

  while (retry < 100) {
    var fails = 0;
    while (done.length < items.length) {
      find = true;
      while (find) {
        r = Math.floor(AppClient.random() * items.length);
        find = false;
        for (var i = 0; i < done.length; i++) {
          if (done[i].id == items[r].id) find = true;
        }
        for (var i = 0; i < impossible.length; i++) {
          if (impossible[i].id == items[r].id) find = true;
        }
      }

      var item = items[r];
      item.x = -1;
      item.y = -1;

      if (done.length > 0) {
        for (var i = 0; i < done.length; i++) {
          if (item.x >= 0 && item.y >= 0) break;

          var characters = new Array();
          for (var c = 0; c < item.word.length; c++) characters.push(false);

          for (var c = 0; c < item.word.length; c++) {
            if (item.x >= 0 && item.y >= 0) break;
            var find = true;
            while (find) {
              var r = Math.floor(AppClient.random() * item.word.length);
              find = characters[r];
            }
            characters[r] = true;
            var chr = item.word.substr(r, 1);
            if (done[i].word.indexOf(chr) >= 0) {
              for (var z = 0; z < done[i].word.length; z++) {
                if (item.x >= 0 && item.y >= 0) break;
                if (done[i].word.substr(z, 1) == chr) {
                  var x, y;

                  if (done[i].direction == "-") {
                    x = done[i].x + z;
                    y = done[i].y;
                  }
                  if (done[i].direction == "|") {
                    x = done[i].x;
                    y = done[i].y + z;
                  }
                  if (done[i].direction == "\\") {
                    x = done[i].x + z;
                    y = done[i].y + z;
                  }
                  if (done[i].direction == "/") {
                    x = done[i].x + z;
                    y = done[i].y - z;
                  }
                  var possibledirections = new Array();
                  for (var d = 0; d < directions.length; d++)
                    if (directions[d] != done[i].direction)
                      possibledirections.push(directions[d]);

                  possibledirections.sort(function (a, b) {
                    if (a == "-" || a == "|") return AppClient.random() - 0.1;
                    if (b == "-" || b == "|") return AppClient.random() - 0.9;
                    return AppClient.random() - 0.5;
                  });

                  while (possibledirections.length > 0) {
                    var fail = false;

                    item.direction = possibledirections.pop();
                    if (item.direction == "|") {
                      y = y - r;
                      if (grid[y + item.word.length][x]) fail = true;
                    }
                    if (item.direction == "-") {
                      x = x - r;
                      if (grid[y][x + item.word.length]) fail = true;
                    }
                    if (item.direction == "\\") {
                      x = x - r;
                      y = y - r;
                      if (grid[y + item.word.length][x + item.word.length])
                        fail = true;
                    }
                    if (item.direction == "/") {
                      x = x - r;
                      y = y + r;
                      if (grid[y - item.word.length][x + item.word.length])
                        fail = true;
                    }

                    for (var w = 0; w < item.word.length; w++) {
                      if (item.direction == "-") {
                        if (
                          grid[y][x + w] &&
                          grid[y][x + w].character != item.word.substr(w, 1)
                        )
                          fail = true;
                        //        if(grid[y-1][x+w] && w != r) fail = true;
                        //        if(grid[y+1][x+w] && w != r) fail = true;
                      }
                      if (item.direction == "|") {
                        if (
                          grid[y + w][x] &&
                          grid[y + w][x].character != item.word.substr(w, 1)
                        )
                          fail = true;
                        //        if(grid[y+w][x-1] && w != r) fail = true;
                        //        if(grid[y+w][x+1] && w != r) fail = true;
                      }
                      if (item.direction == "\\") {
                        if (
                          grid[y + w][x + w] &&
                          grid[y + w][x + w].character != item.word.substr(w, 1)
                        )
                          fail = true;
                      }
                      if (item.direction == "/") {
                        if (
                          grid[y - w][x + w] &&
                          grid[y - w][x + w].character != item.word.substr(w, 1)
                        )
                          fail = true;
                      }
                    }
                    if (!fail) {
                      item.x = x;
                      item.y = y;
                      impossible = new Array();
                      break;
                    }
                  }
                }
              }
            }
          }
        }
        if (item.x == -1 && item.y == -1) {
          impossible.push(item);
          if (impossible.length == items.length - done.length) {
            fails++;
            var c = 0;
            while (c < 100) {
              if (item.x >= 0 && item.y >= 0) break;

              var r = Math.floor(AppClient.random() * 2);
              item.direction = r == 0 ? "-" : "|";
              var fail = false;

              if (item.direction == "-") {
                var x =
                  Math.floor(grid.length / 2) -
                  Math.floor(item.word.length / 2);
                var y = Math.floor(grid[0].length / 2);

                x +=
                  (AppClient.random() > 0.5 ? -1 : 1) *
                  Math.floor(AppClient.random() * c);
                y +=
                  (AppClient.random() > 0.5 ? -1 : 1) *
                  Math.floor(AppClient.random() * c);

                for (var z = 0; z < item.word.length; z++) {
                  if (
                    grid[y][x + z] &&
                    grid[y][x + z].character != item.word.substr(z, 1)
                  )
                    fail = true;
                  if (grid[y - 1][x + z]) fail = true;
                  if (grid[y + 1][x + z]) fail = true;
                }
                if (grid[y][x - 1] || grid[y][x + item.word.length])
                  fail = true;
              }
              if (item.direction == "|") {
                var x = Math.floor(grid[0].length / 2);
                var y =
                  Math.floor(grid.length / 2) -
                  Math.floor(item.word.length / 2);

                x +=
                  (AppClient.random() > 0.5 ? -1 : 1) *
                  Math.floor(AppClient.random() * c);
                y +=
                  (AppClient.random() > 0.5 ? -1 : 1) *
                  Math.floor(AppClient.random() * c);

                for (var z = 0; z < item.word.length; z++) {
                  if (
                    grid[y + z][x] &&
                    grid[y + z][x].character != item.word.substr(z, 1)
                  )
                    fail = true;
                  if (grid[y + z][x - 1]) fail = true;
                  if (grid[y + z][x + 1]) fail = true;
                }
                if (grid[y - 1][x] || grid[y + item.word.length][x])
                  fail = true;
              }
              if (!fail) {
                item.x = x;
                item.y = y;
              }
              c += 0.1;
            }

            impossible = new Array();
          }
        }
      }
      if (done.length == 0) {
        item.direction = "|";
        item.x = Math.floor(grid[0].length / 2);
        item.y = Math.floor(grid.length / 2) - Math.floor(item.word.length / 2);
      }

      if (item.x >= 0 && item.y >= 0) {
        done.push(item);
        function combineField(is, add) {
          if (!is) return add;
          is.items.push(add.items[0]);
          return is;
        }
        for (var w = 0; w < item.word.length; w++) {
          if (item.direction == "-")
            grid[item.y][item.x + w] = combineField(grid[item.y][item.x + w], {
              items: [item],
              character: item.word.substr(w, 1),
            });
          if (item.direction == "|")
            grid[item.y + w][item.x] = combineField(grid[item.y + w][item.x], {
              items: [item],
              character: item.word.substr(w, 1),
            });
          if (item.direction == "\\")
            grid[item.y + w][item.x + w] = combineField(
              grid[item.y + w][item.x + w],
              { items: [item], character: item.word.substr(w, 1) }
            );
          if (item.direction == "/")
            grid[item.y - w][item.x + w] = combineField(
              grid[item.y - w][item.x + w],
              { items: [item], character: item.word.substr(w, 1) }
            );
        }
      }
    }
    if (retry == 0) {
      savegrid = grid;
      lastfails = fails;
    } else if (lastfails > fails) {
      savegrid = grid;
      lastfails = fails;
    }
    if (lastfails == 0) break;
    retry++;
  }
  // cut out
  var minX = grid.length;
  var minY = grid.length;
  var maxX = 0;
  var maxY = 0;
  for (var y = 0; y < savegrid.length; y++) {
    for (var x = 0; x < savegrid[y].length; x++) {
      if (savegrid[y][x] && y < minY) minY = y;
      if (savegrid[y][x] && x < minX) minX = x;
      if (savegrid[y][x] && y > maxY) maxY = y;
      if (savegrid[y][x] && x > maxX) maxX = x;
    }
  }
  // new grid
  var o = new Object();
  o.minX = minX + 1;
  o.minY = minY + 1;
  o.maxX = maxX - 1;
  o.maxY = maxY - 1;
  o.grid = savegrid;
  o.items = done;
  function getRandomChar() {
    return (
      fillCharacters[Math.floor(AppClient.random() * fillCharacters.length)] +
      ""
    );
  }
  // fill grid
  for (var y = 0; y < savegrid.length; y++) {
    for (var x = 0; x < savegrid[y].length; x++) {
      if (!savegrid[y][x])
        savegrid[y][x] = { character: getRandomChar(), items: new Array() };
    }
  }

  return o;
}
