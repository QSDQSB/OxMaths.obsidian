'use strict';

var obsidian = require('obsidian');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var Provider = /** @class */ (function () {
    function Provider() {
    }
    Provider.prototype.matchWith = function (input) {
        var _this = this;
        var inputLowered = input.toLowerCase();
        var inputHasUpperCase = /[A-Z]/.test(input);
        // case-sensitive logic if input has an upper case.
        // Otherwise, uses case-insensitive logic
        var suggestions = this.completions
            .filter(function (suggestion) {
            return suggestion != input
                ? inputHasUpperCase
                    ? suggestion.includes(input)
                    : suggestion.toLowerCase().includes(inputLowered)
                : false;
        })
            .sort(function (a, b) { return a.localeCompare(b); })
            .sort(function (a, b) {
            return Number(b.toLowerCase().startsWith(inputLowered)) -
                Number(a.toLowerCase().startsWith(inputLowered));
        })
            .map(function (suggestion) {
            return { category: _this.category, value: suggestion };
        });
        return suggestions;
    };
    Provider.wordSeparatorRegex = /(\.|,|;|:|'|"|!|\?|-|\)|\]|\}|\/| |Enter)/g;
    Provider.placeholder = '#{}';
    return Provider;
}());

function defaultDirection() {
    return { index: 0, direction: 'still' };
}
function managePlaceholders(selectedValue, initialCursorIndex) {
    var normalizedValue;
    var placeholder = Provider.placeholder;
    var newCursorPosition = initialCursorIndex;
    var placeholderIndex = selectedValue.indexOf(placeholder);
    if (placeholderIndex > -1) {
        // TODO: Manage multiple placeholders
        var placeholderRegex = new RegExp(placeholder, 'g');
        normalizedValue = selectedValue.replace(placeholderRegex, '');
        newCursorPosition += placeholderIndex;
    }
    else {
        normalizedValue = selectedValue;
        newCursorPosition += selectedValue.length;
    }
    return { normalizedValue: normalizedValue, newCursorPosition: newCursorPosition };
}
function selectLastSuggestion(selected, suggestionsLength) {
    var decreased = selected.index - 1;
    var updatedSelected = {
        index: decreased < 0 ? suggestionsLength - 1 : decreased,
        direction: 'backward',
    };
    return updatedSelected;
}
function updateSelectedSuggestionFrom(event, selected, suggestionsLength) {
    var updatedSelected = selected;
    switch (event.ctrlKey + " " + event.key) {
        case 'true p':
        case 'false ArrowUp':
            updatedSelected = selectLastSuggestion(selected, suggestionsLength);
            break;
        case 'true n':
        case 'false ArrowDown':
            var increased = selected.index + 1;
            updatedSelected = {
                index: increased >= suggestionsLength ? 0 : increased,
                direction: 'forward',
            };
            break;
    }
    return updatedSelected;
}
function copyObject(obj) {
    return __assign({}, obj);
}
function isVimNormalMode(editor) {
    return editor.getOption('keyMap') === 'vim';
}

function generateView(suggestions, selectedIndex) {
    var suggestionsHtml = suggestions.map(function (tip, index) {
        var isSelected = selectedIndex === index;
        return "\n        <div id=\"suggestion-" + index + "\" class=\"no-space-wrap suggestion-item" + (isSelected ? ' is-selected' : '') + "\">\n          <div id=\"suggestion-" + index + "\" class=\"suggestion-content\">\n          <span class=\"suggestion-flair\">" + tip.category + "</span>\n          " + tip.value + "\n          </div>\n        </div>\n      ";
    }, []);
    var suggestionsJoined = suggestionsHtml.join('\n');
    var viewString = "\n      <div id=\"suggestion-list\" class=\"suggestion\">\n        " + (suggestionsJoined.length > 0
        ? suggestionsJoined
        : '<div class="no-suggestions">No match found</div>') + "\n      </div>\n      <div class=\"prompt-instructions\">\n        <div class=\"prompt-instruction\">\n          <span class=\"prompt-instruction-command\">Ctrl+N /\u2191 </span>\n          <span>Next Suggestion</span>\n        </div>\n        <div class=\"prompt-instruction\">\n          <span class=\"prompt-instruction-command\">Ctrl+P /\u2193 </span>\n          <span>Previous Suggestion</span>\n        </div>\n        <div class=\"prompt-instruction\">\n          <span class=\"prompt-instruction-command\">Enter</span>\n          <span>Select Suggestion</span>\n        </div>\n      </div>\n    ";
    var containerNode = document.createElement('div');
    containerNode.classList.add('suggestion-container');
    containerNode.insertAdjacentHTML('beforeend', viewString);
    return containerNode;
}
function updateCachedView(view, selectedIndex) {
    var _a;
    var children = (_a = view.firstElementChild) === null || _a === void 0 ? void 0 : _a.children;
    if (!children)
        return;
    for (var index = 0; index < children.length; index++) {
        var child = children[index];
        child.toggleClass('is-selected', index === selectedIndex);
    }
}
function scrollTo(selected, view, suggestionsLength) {
    if (!view || suggestionsLength === 0)
        return;
    // TODO: Improve scrolling with page size and boundaries
    var parent = view.children[0];
    var selectedIndex = selected.index;
    var child = parent.children[0];
    if (child) {
        var scrollAmount = child.scrollHeight * selectedIndex;
        switch (selected.direction) {
            case 'forward':
                if (selectedIndex === 0)
                    // End -> Start
                    parent.scrollTop = 0;
                else
                    parent.scrollTop = scrollAmount;
                break;
            case 'backward':
                if (selectedIndex === suggestionsLength - 1)
                    // End <- Start
                    parent.scrollTop = parent.scrollHeight;
                else
                    parent.scrollTop = scrollAmount;
                break;
        }
    }
}
function appendWidget(editor, view, scrollable) {
    if (scrollable === void 0) { scrollable = true; }
    var cursor = editor.getCursor();
    editor.addWidget({ ch: cursor.ch, line: cursor.line }, view, scrollable);
}

var TOKENIZE_STRATEGIES = [
    'default',
    'japanese',
    'arabic',
];
var Tokenizer = /** @class */ (function () {
    function Tokenizer() {
        this.wordSeparatorPattern = /[\[\]()<>"'.,|:; `!?\/]/;
        // NOTE: global flag takes note of lastIndex used!
        this.trimPattern = new RegExp(this.wordSeparatorPattern, 'g');
    }
    Tokenizer.prototype.lastWordStartPos = function (text, index, options) {
        if (options === void 0) { options = { normalize: false }; }
        var _a = options.normalize
            ? this.normalizedLine(text, index)
            : { normalized: text, updatedCursor: index }, normalized = _a.normalized, updatedCursor = _a.updatedCursor;
        var wordStartIndex = updatedCursor;
        while (wordStartIndex &&
            !this.isWordSeparator(normalized.charAt(wordStartIndex - 1)))
            wordStartIndex -= 1;
        return wordStartIndex;
    };
    Tokenizer.prototype.lastWordFrom = function (text, cursorIndex, options) {
        if (options === void 0) { options = { normalize: false }; }
        var _a = options.normalize
            ? this.normalizedLine(text, cursorIndex)
            : { normalized: text, updatedCursor: cursorIndex }, normalized = _a.normalized, updatedCursor = _a.updatedCursor;
        if (options.normalize)
            // Already normalized
            options.normalize = false;
        var wordStartIndex = this.lastWordStartPos(normalized, updatedCursor, options);
        var word = null;
        if (wordStartIndex !== updatedCursor)
            word = text.slice(wordStartIndex, updatedCursor);
        return word;
    };
    Tokenizer.prototype.isWordSeparator = function (char) {
        return this.wordSeparatorPattern.test(char);
    };
    /*
     * Remove spaces and word separators
     * near the left of the cursorIndex
     */
    Tokenizer.prototype.normalizedLine = function (line, cursorIndex) {
        var partialLine = line.slice(0, cursorIndex);
        var normalized = partialLine.trimEnd();
        // Subtract how many spaces removed
        var updatedCursor = cursorIndex - (partialLine.length - normalized.length);
        if (normalized.length === 0)
            return { normalized: '', updatedCursor: 0 };
        var lastChar = normalized.charAt(updatedCursor - 1);
        if (this.isWordSeparator(lastChar)) {
            updatedCursor -= 1;
            normalized = normalized.slice(0, updatedCursor);
        }
        return { normalized: normalized, updatedCursor: updatedCursor };
    };
    return Tokenizer;
}());

var DefaultTokenizer = /** @class */ (function (_super) {
    __extends(DefaultTokenizer, _super);
    function DefaultTokenizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultTokenizer.prototype.tokenize = function (text, range) {
        var _this = this;
        var tokens = text
            .slice(range === null || range === void 0 ? void 0 : range.start, range === null || range === void 0 ? void 0 : range.end)
            .split('\n')
            .flatMap(function (line) { return line.split(_this.trimPattern); })
            .filter(function (t) { return t.length > 0; });
        return { range: range, tokens: tokens };
    };
    return DefaultTokenizer;
}(Tokenizer));

var ArabicTokenizer = /** @class */ (function (_super) {
    __extends(ArabicTokenizer, _super);
    function ArabicTokenizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wordSeparatorPattern = /[\[\]()<>"'.,|; `!?،؛]/;
        return _this;
    }
    return ArabicTokenizer;
}(DefaultTokenizer));

// @ts-nocheck
// Because this code is originally javascript code.
// TinySegmenter 0.1 -- Super compact Japanese tokenizer in Javascript
// (c) 2008 Taku Kudo <taku@chasen.org>
// TinySegmenter is freely distributable under the terms of a new BSD licence.
// For details, see http://chasen.org/~taku/software/TinySegmenter/LICENCE.txt
function TinySegmenter() {
    var patterns = {
        '[一二三四五六七八九十百千万億兆]': 'M',
        '[一-龠々〆ヵヶ]': 'H',
        '[ぁ-ん]': 'I',
        '[ァ-ヴーｱ-ﾝﾞｰ]': 'K',
        '[a-zA-Zａ-ｚＡ-Ｚ]': 'A',
        '[0-9０-９]': 'N',
    };
    this.chartype_ = [];
    for (var i in patterns) {
        var regexp = new RegExp();
        regexp.compile(i);
        this.chartype_.push([regexp, patterns[i]]);
    }
    this.BIAS__ = -332;
    this.BC1__ = { HH: 6, II: 2461, KH: 406, OH: -1378 };
    this.BC2__ = {
        AA: -3267,
        AI: 2744,
        AN: -878,
        HH: -4070,
        HM: -1711,
        HN: 4012,
        HO: 3761,
        IA: 1327,
        IH: -1184,
        II: -1332,
        IK: 1721,
        IO: 5492,
        KI: 3831,
        KK: -8741,
        MH: -3132,
        MK: 3334,
        OO: -2920,
    };
    this.BC3__ = {
        HH: 996,
        HI: 626,
        HK: -721,
        HN: -1307,
        HO: -836,
        IH: -301,
        KK: 2762,
        MK: 1079,
        MM: 4034,
        OA: -1652,
        OH: 266,
    };
    this.BP1__ = { BB: 295, OB: 304, OO: -125, UB: 352 };
    this.BP2__ = { BO: 60, OO: -1762 };
    this.BQ1__ = {
        BHH: 1150,
        BHM: 1521,
        BII: -1158,
        BIM: 886,
        BMH: 1208,
        BNH: 449,
        BOH: -91,
        BOO: -2597,
        OHI: 451,
        OIH: -296,
        OKA: 1851,
        OKH: -1020,
        OKK: 904,
        OOO: 2965,
    };
    this.BQ2__ = {
        BHH: 118,
        BHI: -1159,
        BHM: 466,
        BIH: -919,
        BKK: -1720,
        BKO: 864,
        OHH: -1139,
        OHM: -181,
        OIH: 153,
        UHI: -1146,
    };
    this.BQ3__ = {
        BHH: -792,
        BHI: 2664,
        BII: -299,
        BKI: 419,
        BMH: 937,
        BMM: 8335,
        BNN: 998,
        BOH: 775,
        OHH: 2174,
        OHM: 439,
        OII: 280,
        OKH: 1798,
        OKI: -793,
        OKO: -2242,
        OMH: -2402,
        OOO: 11699,
    };
    this.BQ4__ = {
        BHH: -3895,
        BIH: 3761,
        BII: -4654,
        BIK: 1348,
        BKK: -1806,
        BMI: -3385,
        BOO: -12396,
        OAH: 926,
        OHH: 266,
        OHK: -2036,
        ONN: -973,
    };
    this.BW1__ = {
        ',と': 660,
        ',同': 727,
        B1あ: 1404,
        B1同: 542,
        '、と': 660,
        '、同': 727,
        '」と': 1682,
        あっ: 1505,
        いう: 1743,
        いっ: -2055,
        いる: 672,
        うし: -4817,
        うん: 665,
        から: 3472,
        がら: 600,
        こう: -790,
        こと: 2083,
        こん: -1262,
        さら: -4143,
        さん: 4573,
        した: 2641,
        して: 1104,
        すで: -3399,
        そこ: 1977,
        それ: -871,
        たち: 1122,
        ため: 601,
        った: 3463,
        つい: -802,
        てい: 805,
        てき: 1249,
        でき: 1127,
        です: 3445,
        では: 844,
        とい: -4915,
        とみ: 1922,
        どこ: 3887,
        ない: 5713,
        なっ: 3015,
        など: 7379,
        なん: -1113,
        にし: 2468,
        には: 1498,
        にも: 1671,
        に対: -912,
        の一: -501,
        の中: 741,
        ませ: 2448,
        まで: 1711,
        まま: 2600,
        まる: -2155,
        やむ: -1947,
        よっ: -2565,
        れた: 2369,
        れで: -913,
        をし: 1860,
        を見: 731,
        亡く: -1886,
        京都: 2558,
        取り: -2784,
        大き: -2604,
        大阪: 1497,
        平方: -2314,
        引き: -1336,
        日本: -195,
        本当: -2423,
        毎日: -2113,
        目指: -724,
        Ｂ１あ: 1404,
        Ｂ１同: 542,
        '｣と': 1682,
    };
    this.BW2__ = {
        '..': -11822,
        11: -669,
        '――': -5730,
        '−−': -13175,
        いう: -1609,
        うか: 2490,
        かし: -1350,
        かも: -602,
        から: -7194,
        かれ: 4612,
        がい: 853,
        がら: -3198,
        きた: 1941,
        くな: -1597,
        こと: -8392,
        この: -4193,
        させ: 4533,
        され: 13168,
        さん: -3977,
        しい: -1819,
        しか: -545,
        した: 5078,
        して: 972,
        しな: 939,
        その: -3744,
        たい: -1253,
        たた: -662,
        ただ: -3857,
        たち: -786,
        たと: 1224,
        たは: -939,
        った: 4589,
        って: 1647,
        っと: -2094,
        てい: 6144,
        てき: 3640,
        てく: 2551,
        ては: -3110,
        ても: -3065,
        でい: 2666,
        でき: -1528,
        でし: -3828,
        です: -4761,
        でも: -4203,
        とい: 1890,
        とこ: -1746,
        とと: -2279,
        との: 720,
        とみ: 5168,
        とも: -3941,
        ない: -2488,
        なが: -1313,
        など: -6509,
        なの: 2614,
        なん: 3099,
        にお: -1615,
        にし: 2748,
        にな: 2454,
        によ: -7236,
        に対: -14943,
        に従: -4688,
        に関: -11388,
        のか: 2093,
        ので: -7059,
        のに: -6041,
        のの: -6125,
        はい: 1073,
        はが: -1033,
        はず: -2532,
        ばれ: 1813,
        まし: -1316,
        まで: -6621,
        まれ: 5409,
        めて: -3153,
        もい: 2230,
        もの: -10713,
        らか: -944,
        らし: -1611,
        らに: -1897,
        りし: 651,
        りま: 1620,
        れた: 4270,
        れて: 849,
        れば: 4114,
        ろう: 6067,
        われ: 7901,
        を通: -11877,
        んだ: 728,
        んな: -4115,
        一人: 602,
        一方: -1375,
        一日: 970,
        一部: -1051,
        上が: -4479,
        会社: -1116,
        出て: 2163,
        分の: -7758,
        同党: 970,
        同日: -913,
        大阪: -2471,
        委員: -1250,
        少な: -1050,
        年度: -8669,
        年間: -1626,
        府県: -2363,
        手権: -1982,
        新聞: -4066,
        日新: -722,
        日本: -7068,
        日米: 3372,
        曜日: -601,
        朝鮮: -2355,
        本人: -2697,
        東京: -1543,
        然と: -1384,
        社会: -1276,
        立て: -990,
        第に: -1612,
        米国: -4268,
        '１１': -669,
    };
    this.BW3__ = {
        あた: -2194,
        あり: 719,
        ある: 3846,
        'い.': -1185,
        'い。': -1185,
        いい: 5308,
        いえ: 2079,
        いく: 3029,
        いた: 2056,
        いっ: 1883,
        いる: 5600,
        いわ: 1527,
        うち: 1117,
        うと: 4798,
        えと: 1454,
        'か.': 2857,
        'か。': 2857,
        かけ: -743,
        かっ: -4098,
        かに: -669,
        から: 6520,
        かり: -2670,
        'が,': 1816,
        'が、': 1816,
        がき: -4855,
        がけ: -1127,
        がっ: -913,
        がら: -4977,
        がり: -2064,
        きた: 1645,
        けど: 1374,
        こと: 7397,
        この: 1542,
        ころ: -2757,
        さい: -714,
        さを: 976,
        'し,': 1557,
        'し、': 1557,
        しい: -3714,
        した: 3562,
        して: 1449,
        しな: 2608,
        しま: 1200,
        'す.': -1310,
        'す。': -1310,
        する: 6521,
        'ず,': 3426,
        'ず、': 3426,
        ずに: 841,
        そう: 428,
        'た.': 8875,
        'た。': 8875,
        たい: -594,
        たの: 812,
        たり: -1183,
        たる: -853,
        'だ.': 4098,
        'だ。': 4098,
        だっ: 1004,
        った: -4748,
        って: 300,
        てい: 6240,
        てお: 855,
        ても: 302,
        です: 1437,
        でに: -1482,
        では: 2295,
        とう: -1387,
        とし: 2266,
        との: 541,
        とも: -3543,
        どう: 4664,
        ない: 1796,
        なく: -903,
        など: 2135,
        'に,': -1021,
        'に、': -1021,
        にし: 1771,
        にな: 1906,
        には: 2644,
        'の,': -724,
        'の、': -724,
        の子: -1000,
        'は,': 1337,
        'は、': 1337,
        べき: 2181,
        まし: 1113,
        ます: 6943,
        まっ: -1549,
        まで: 6154,
        まれ: -793,
        らし: 1479,
        られ: 6820,
        るる: 3818,
        'れ,': 854,
        'れ、': 854,
        れた: 1850,
        れて: 1375,
        れば: -3246,
        れる: 1091,
        われ: -605,
        んだ: 606,
        んで: 798,
        カ月: 990,
        会議: 860,
        入り: 1232,
        大会: 2217,
        始め: 1681,
        市: 965,
        新聞: -5055,
        '日,': 974,
        '日、': 974,
        社会: 2024,
        ｶ月: 990,
    };
    this.TC1__ = {
        AAA: 1093,
        HHH: 1029,
        HHM: 580,
        HII: 998,
        HOH: -390,
        HOM: -331,
        IHI: 1169,
        IOH: -142,
        IOI: -1015,
        IOM: 467,
        MMH: 187,
        OOI: -1832,
    };
    this.TC2__ = {
        HHO: 2088,
        HII: -1023,
        HMM: -1154,
        IHI: -1965,
        KKH: 703,
        OII: -2649,
    };
    this.TC3__ = {
        AAA: -294,
        HHH: 346,
        HHI: -341,
        HII: -1088,
        HIK: 731,
        HOH: -1486,
        IHH: 128,
        IHI: -3041,
        IHO: -1935,
        IIH: -825,
        IIM: -1035,
        IOI: -542,
        KHH: -1216,
        KKA: 491,
        KKH: -1217,
        KOK: -1009,
        MHH: -2694,
        MHM: -457,
        MHO: 123,
        MMH: -471,
        NNH: -1689,
        NNO: 662,
        OHO: -3393,
    };
    this.TC4__ = {
        HHH: -203,
        HHI: 1344,
        HHK: 365,
        HHM: -122,
        HHN: 182,
        HHO: 669,
        HIH: 804,
        HII: 679,
        HOH: 446,
        IHH: 695,
        IHO: -2324,
        IIH: 321,
        III: 1497,
        IIO: 656,
        IOO: 54,
        KAK: 4845,
        KKA: 3386,
        KKK: 3065,
        MHH: -405,
        MHI: 201,
        MMH: -241,
        MMM: 661,
        MOM: 841,
    };
    this.TQ1__ = {
        BHHH: -227,
        BHHI: 316,
        BHIH: -132,
        BIHH: 60,
        BIII: 1595,
        BNHH: -744,
        BOHH: 225,
        BOOO: -908,
        OAKK: 482,
        OHHH: 281,
        OHIH: 249,
        OIHI: 200,
        OIIH: -68,
    };
    this.TQ2__ = { BIHH: -1401, BIII: -1033, BKAK: -543, BOOO: -5591 };
    this.TQ3__ = {
        BHHH: 478,
        BHHM: -1073,
        BHIH: 222,
        BHII: -504,
        BIIH: -116,
        BIII: -105,
        BMHI: -863,
        BMHM: -464,
        BOMH: 620,
        OHHH: 346,
        OHHI: 1729,
        OHII: 997,
        OHMH: 481,
        OIHH: 623,
        OIIH: 1344,
        OKAK: 2792,
        OKHH: 587,
        OKKA: 679,
        OOHH: 110,
        OOII: -685,
    };
    this.TQ4__ = {
        BHHH: -721,
        BHHM: -3604,
        BHII: -966,
        BIIH: -607,
        BIII: -2181,
        OAAA: -2763,
        OAKK: 180,
        OHHH: -294,
        OHHI: 2446,
        OHHO: 480,
        OHIH: -1573,
        OIHH: 1935,
        OIHI: -493,
        OIIH: 626,
        OIII: -4007,
        OKAK: -8156,
    };
    this.TW1__ = { につい: -4681, 東京都: 2026 };
    this.TW2__ = {
        ある程: -2049,
        いった: -1256,
        ころが: -2434,
        しょう: 3873,
        その後: -4430,
        だって: -1049,
        ていた: 1833,
        として: -4657,
        ともに: -4517,
        もので: 1882,
        一気に: -792,
        初めて: -1512,
        同時に: -8097,
        大きな: -1255,
        対して: -2721,
        社会党: -3216,
    };
    this.TW3__ = {
        いただ: -1734,
        してい: 1314,
        として: -4314,
        につい: -5483,
        にとっ: -5989,
        に当た: -6247,
        'ので,': -727,
        'ので、': -727,
        のもの: -600,
        れから: -3752,
        十二月: -2287,
    };
    this.TW4__ = {
        'いう.': 8576,
        'いう。': 8576,
        からな: -2348,
        してい: 2958,
        'たが,': 1516,
        'たが、': 1516,
        ている: 1538,
        という: 1349,
        ました: 5543,
        ません: 1097,
        ようと: -4258,
        よると: 5865,
    };
    this.UC1__ = { A: 484, K: 93, M: 645, O: -505 };
    this.UC2__ = { A: 819, H: 1059, I: 409, M: 3987, N: 5775, O: 646 };
    this.UC3__ = { A: -1370, I: 2311 };
    this.UC4__ = {
        A: -2643,
        H: 1809,
        I: -1032,
        K: -3450,
        M: 3565,
        N: 3876,
        O: 6646,
    };
    this.UC5__ = { H: 313, I: -1238, K: -799, M: 539, O: -831 };
    this.UC6__ = { H: -506, I: -253, K: 87, M: 247, O: -387 };
    this.UP1__ = { O: -214 };
    this.UP2__ = { B: 69, O: 935 };
    this.UP3__ = { B: 189 };
    this.UQ1__ = {
        BH: 21,
        BI: -12,
        BK: -99,
        BN: 142,
        BO: -56,
        OH: -95,
        OI: 477,
        OK: 410,
        OO: -2422,
    };
    this.UQ2__ = { BH: 216, BI: 113, OK: 1759 };
    this.UQ3__ = {
        BA: -479,
        BH: 42,
        BI: 1913,
        BK: -7198,
        BM: 3160,
        BN: 6427,
        BO: 14761,
        OI: -827,
        ON: -3212,
    };
    this.UW1__ = {
        ',': 156,
        '、': 156,
        '「': -463,
        あ: -941,
        う: -127,
        が: -553,
        き: 121,
        こ: 505,
        で: -201,
        と: -547,
        ど: -123,
        に: -789,
        の: -185,
        は: -847,
        も: -466,
        や: -470,
        よ: 182,
        ら: -292,
        り: 208,
        れ: 169,
        を: -446,
        ん: -137,
        '・': -135,
        主: -402,
        京: -268,
        区: -912,
        午: 871,
        国: -460,
        大: 561,
        委: 729,
        市: -411,
        日: -141,
        理: 361,
        生: -408,
        県: -386,
        都: -718,
        '｢': -463,
        '･': -135,
    };
    this.UW2__ = {
        ',': -829,
        '、': -829,
        〇: 892,
        '「': -645,
        '」': 3145,
        あ: -538,
        い: 505,
        う: 134,
        お: -502,
        か: 1454,
        が: -856,
        く: -412,
        こ: 1141,
        さ: 878,
        ざ: 540,
        し: 1529,
        す: -675,
        せ: 300,
        そ: -1011,
        た: 188,
        だ: 1837,
        つ: -949,
        て: -291,
        で: -268,
        と: -981,
        ど: 1273,
        な: 1063,
        に: -1764,
        の: 130,
        は: -409,
        ひ: -1273,
        べ: 1261,
        ま: 600,
        も: -1263,
        や: -402,
        よ: 1639,
        り: -579,
        る: -694,
        れ: 571,
        を: -2516,
        ん: 2095,
        ア: -587,
        カ: 306,
        キ: 568,
        ッ: 831,
        三: -758,
        不: -2150,
        世: -302,
        中: -968,
        主: -861,
        事: 492,
        人: -123,
        会: 978,
        保: 362,
        入: 548,
        初: -3025,
        副: -1566,
        北: -3414,
        区: -422,
        大: -1769,
        天: -865,
        太: -483,
        子: -1519,
        学: 760,
        実: 1023,
        小: -2009,
        市: -813,
        年: -1060,
        強: 1067,
        手: -1519,
        揺: -1033,
        政: 1522,
        文: -1355,
        新: -1682,
        日: -1815,
        明: -1462,
        最: -630,
        朝: -1843,
        本: -1650,
        東: -931,
        果: -665,
        次: -2378,
        民: -180,
        気: -1740,
        理: 752,
        発: 529,
        目: -1584,
        相: -242,
        県: -1165,
        立: -763,
        第: 810,
        米: 509,
        自: -1353,
        行: 838,
        西: -744,
        見: -3874,
        調: 1010,
        議: 1198,
        込: 3041,
        開: 1758,
        間: -1257,
        '｢': -645,
        '｣': 3145,
        ｯ: 831,
        ｱ: -587,
        ｶ: 306,
        ｷ: 568,
    };
    this.UW3__ = {
        ',': 4889,
        1: -800,
        '−': -1723,
        '、': 4889,
        々: -2311,
        〇: 5827,
        '」': 2670,
        '〓': -3573,
        あ: -2696,
        い: 1006,
        う: 2342,
        え: 1983,
        お: -4864,
        か: -1163,
        が: 3271,
        く: 1004,
        け: 388,
        げ: 401,
        こ: -3552,
        ご: -3116,
        さ: -1058,
        し: -395,
        す: 584,
        せ: 3685,
        そ: -5228,
        た: 842,
        ち: -521,
        っ: -1444,
        つ: -1081,
        て: 6167,
        で: 2318,
        と: 1691,
        ど: -899,
        な: -2788,
        に: 2745,
        の: 4056,
        は: 4555,
        ひ: -2171,
        ふ: -1798,
        へ: 1199,
        ほ: -5516,
        ま: -4384,
        み: -120,
        め: 1205,
        も: 2323,
        や: -788,
        よ: -202,
        ら: 727,
        り: 649,
        る: 5905,
        れ: 2773,
        わ: -1207,
        を: 6620,
        ん: -518,
        ア: 551,
        グ: 1319,
        ス: 874,
        ッ: -1350,
        ト: 521,
        ム: 1109,
        ル: 1591,
        ロ: 2201,
        ン: 278,
        '・': -3794,
        一: -1619,
        下: -1759,
        世: -2087,
        両: 3815,
        中: 653,
        主: -758,
        予: -1193,
        二: 974,
        人: 2742,
        今: 792,
        他: 1889,
        以: -1368,
        低: 811,
        何: 4265,
        作: -361,
        保: -2439,
        元: 4858,
        党: 3593,
        全: 1574,
        公: -3030,
        六: 755,
        共: -1880,
        円: 5807,
        再: 3095,
        分: 457,
        初: 2475,
        別: 1129,
        前: 2286,
        副: 4437,
        力: 365,
        動: -949,
        務: -1872,
        化: 1327,
        北: -1038,
        区: 4646,
        千: -2309,
        午: -783,
        協: -1006,
        口: 483,
        右: 1233,
        各: 3588,
        合: -241,
        同: 3906,
        和: -837,
        員: 4513,
        国: 642,
        型: 1389,
        場: 1219,
        外: -241,
        妻: 2016,
        学: -1356,
        安: -423,
        実: -1008,
        家: 1078,
        小: -513,
        少: -3102,
        州: 1155,
        市: 3197,
        平: -1804,
        年: 2416,
        広: -1030,
        府: 1605,
        度: 1452,
        建: -2352,
        当: -3885,
        得: 1905,
        思: -1291,
        性: 1822,
        戸: -488,
        指: -3973,
        政: -2013,
        教: -1479,
        数: 3222,
        文: -1489,
        新: 1764,
        日: 2099,
        旧: 5792,
        昨: -661,
        時: -1248,
        曜: -951,
        最: -937,
        月: 4125,
        期: 360,
        李: 3094,
        村: 364,
        東: -805,
        核: 5156,
        森: 2438,
        業: 484,
        氏: 2613,
        民: -1694,
        決: -1073,
        法: 1868,
        海: -495,
        無: 979,
        物: 461,
        特: -3850,
        生: -273,
        用: 914,
        町: 1215,
        的: 7313,
        直: -1835,
        省: 792,
        県: 6293,
        知: -1528,
        私: 4231,
        税: 401,
        立: -960,
        第: 1201,
        米: 7767,
        系: 3066,
        約: 3663,
        級: 1384,
        統: -4229,
        総: 1163,
        線: 1255,
        者: 6457,
        能: 725,
        自: -2869,
        英: 785,
        見: 1044,
        調: -562,
        財: -733,
        費: 1777,
        車: 1835,
        軍: 1375,
        込: -1504,
        通: -1136,
        選: -681,
        郎: 1026,
        郡: 4404,
        部: 1200,
        金: 2163,
        長: 421,
        開: -1432,
        間: 1302,
        関: -1282,
        雨: 2009,
        電: -1045,
        非: 2066,
        駅: 1620,
        '１': -800,
        '｣': 2670,
        '･': -3794,
        ｯ: -1350,
        ｱ: 551,
        ｸﾞ: 1319,
        ｽ: 874,
        ﾄ: 521,
        ﾑ: 1109,
        ﾙ: 1591,
        ﾛ: 2201,
        ﾝ: 278,
    };
    this.UW4__ = {
        ',': 3930,
        '.': 3508,
        '―': -4841,
        '、': 3930,
        '。': 3508,
        〇: 4999,
        '「': 1895,
        '」': 3798,
        '〓': -5156,
        あ: 4752,
        い: -3435,
        う: -640,
        え: -2514,
        お: 2405,
        か: 530,
        が: 6006,
        き: -4482,
        ぎ: -3821,
        く: -3788,
        け: -4376,
        げ: -4734,
        こ: 2255,
        ご: 1979,
        さ: 2864,
        し: -843,
        じ: -2506,
        す: -731,
        ず: 1251,
        せ: 181,
        そ: 4091,
        た: 5034,
        だ: 5408,
        ち: -3654,
        っ: -5882,
        つ: -1659,
        て: 3994,
        で: 7410,
        と: 4547,
        な: 5433,
        に: 6499,
        ぬ: 1853,
        ね: 1413,
        の: 7396,
        は: 8578,
        ば: 1940,
        ひ: 4249,
        び: -4134,
        ふ: 1345,
        へ: 6665,
        べ: -744,
        ほ: 1464,
        ま: 1051,
        み: -2082,
        む: -882,
        め: -5046,
        も: 4169,
        ゃ: -2666,
        や: 2795,
        ょ: -1544,
        よ: 3351,
        ら: -2922,
        り: -9726,
        る: -14896,
        れ: -2613,
        ろ: -4570,
        わ: -1783,
        を: 13150,
        ん: -2352,
        カ: 2145,
        コ: 1789,
        セ: 1287,
        ッ: -724,
        ト: -403,
        メ: -1635,
        ラ: -881,
        リ: -541,
        ル: -856,
        ン: -3637,
        '・': -4371,
        ー: -11870,
        一: -2069,
        中: 2210,
        予: 782,
        事: -190,
        井: -1768,
        人: 1036,
        以: 544,
        会: 950,
        体: -1286,
        作: 530,
        側: 4292,
        先: 601,
        党: -2006,
        共: -1212,
        内: 584,
        円: 788,
        初: 1347,
        前: 1623,
        副: 3879,
        力: -302,
        動: -740,
        務: -2715,
        化: 776,
        区: 4517,
        協: 1013,
        参: 1555,
        合: -1834,
        和: -681,
        員: -910,
        器: -851,
        回: 1500,
        国: -619,
        園: -1200,
        地: 866,
        場: -1410,
        塁: -2094,
        士: -1413,
        多: 1067,
        大: 571,
        子: -4802,
        学: -1397,
        定: -1057,
        寺: -809,
        小: 1910,
        屋: -1328,
        山: -1500,
        島: -2056,
        川: -2667,
        市: 2771,
        年: 374,
        庁: -4556,
        後: 456,
        性: 553,
        感: 916,
        所: -1566,
        支: 856,
        改: 787,
        政: 2182,
        教: 704,
        文: 522,
        方: -856,
        日: 1798,
        時: 1829,
        最: 845,
        月: -9066,
        木: -485,
        来: -442,
        校: -360,
        業: -1043,
        氏: 5388,
        民: -2716,
        気: -910,
        沢: -939,
        済: -543,
        物: -735,
        率: 672,
        球: -1267,
        生: -1286,
        産: -1101,
        田: -2900,
        町: 1826,
        的: 2586,
        目: 922,
        省: -3485,
        県: 2997,
        空: -867,
        立: -2112,
        第: 788,
        米: 2937,
        系: 786,
        約: 2171,
        経: 1146,
        統: -1169,
        総: 940,
        線: -994,
        署: 749,
        者: 2145,
        能: -730,
        般: -852,
        行: -792,
        規: 792,
        警: -1184,
        議: -244,
        谷: -1000,
        賞: 730,
        車: -1481,
        軍: 1158,
        輪: -1433,
        込: -3370,
        近: 929,
        道: -1291,
        選: 2596,
        郎: -4866,
        都: 1192,
        野: -1100,
        銀: -2213,
        長: 357,
        間: -2344,
        院: -2297,
        際: -2604,
        電: -878,
        領: -1659,
        題: -792,
        館: -1984,
        首: 1749,
        高: 2120,
        '｢': 1895,
        '｣': 3798,
        '･': -4371,
        ｯ: -724,
        ｰ: -11870,
        ｶ: 2145,
        ｺ: 1789,
        ｾ: 1287,
        ﾄ: -403,
        ﾒ: -1635,
        ﾗ: -881,
        ﾘ: -541,
        ﾙ: -856,
        ﾝ: -3637,
    };
    this.UW5__ = {
        ',': 465,
        '.': -299,
        1: -514,
        E2: -32768,
        ']': -2762,
        '、': 465,
        '。': -299,
        '「': 363,
        あ: 1655,
        い: 331,
        う: -503,
        え: 1199,
        お: 527,
        か: 647,
        が: -421,
        き: 1624,
        ぎ: 1971,
        く: 312,
        げ: -983,
        さ: -1537,
        し: -1371,
        す: -852,
        だ: -1186,
        ち: 1093,
        っ: 52,
        つ: 921,
        て: -18,
        で: -850,
        と: -127,
        ど: 1682,
        な: -787,
        に: -1224,
        の: -635,
        は: -578,
        べ: 1001,
        み: 502,
        め: 865,
        ゃ: 3350,
        ょ: 854,
        り: -208,
        る: 429,
        れ: 504,
        わ: 419,
        を: -1264,
        ん: 327,
        イ: 241,
        ル: 451,
        ン: -343,
        中: -871,
        京: 722,
        会: -1153,
        党: -654,
        務: 3519,
        区: -901,
        告: 848,
        員: 2104,
        大: -1296,
        学: -548,
        定: 1785,
        嵐: -1304,
        市: -2991,
        席: 921,
        年: 1763,
        思: 872,
        所: -814,
        挙: 1618,
        新: -1682,
        日: 218,
        月: -4353,
        査: 932,
        格: 1356,
        機: -1508,
        氏: -1347,
        田: 240,
        町: -3912,
        的: -3149,
        相: 1319,
        省: -1052,
        県: -4003,
        研: -997,
        社: -278,
        空: -813,
        統: 1955,
        者: -2233,
        表: 663,
        語: -1073,
        議: 1219,
        選: -1018,
        郎: -368,
        長: 786,
        間: 1191,
        題: 2368,
        館: -689,
        '１': -514,
        Ｅ２: -32768,
        '｢': 363,
        ｲ: 241,
        ﾙ: 451,
        ﾝ: -343,
    };
    this.UW6__ = {
        ',': 227,
        '.': 808,
        1: -270,
        E1: 306,
        '、': 227,
        '。': 808,
        あ: -307,
        う: 189,
        か: 241,
        が: -73,
        く: -121,
        こ: -200,
        じ: 1782,
        す: 383,
        た: -428,
        っ: 573,
        て: -1014,
        で: 101,
        と: -105,
        な: -253,
        に: -149,
        の: -417,
        は: -236,
        も: -206,
        り: 187,
        る: -135,
        を: 195,
        ル: -673,
        ン: -496,
        一: -277,
        中: 201,
        件: -800,
        会: 624,
        前: 302,
        区: 1792,
        員: -1212,
        委: 798,
        学: -960,
        市: 887,
        広: -695,
        後: 535,
        業: -697,
        相: 753,
        社: -507,
        福: 974,
        空: -822,
        者: 1811,
        連: 463,
        郎: 1082,
        '１': -270,
        Ｅ１: 306,
        ﾙ: -673,
        ﾝ: -496,
    };
    return this;
}
TinySegmenter.prototype.ctype_ = function (str) {
    for (var i in this.chartype_) {
        if (str.match(this.chartype_[i][0])) {
            return this.chartype_[i][1];
        }
    }
    return 'O';
};
TinySegmenter.prototype.ts_ = function (v) {
    if (v) {
        return v;
    }
    return 0;
};
TinySegmenter.prototype.segment = function (input) {
    if (input == null || input == undefined || input == '') {
        return [];
    }
    var result = [];
    var seg = ['B3', 'B2', 'B1'];
    var ctype = ['O', 'O', 'O'];
    var o = input.split('');
    for (i = 0; i < o.length; ++i) {
        seg.push(o[i]);
        ctype.push(this.ctype_(o[i]));
    }
    seg.push('E1');
    seg.push('E2');
    seg.push('E3');
    ctype.push('O');
    ctype.push('O');
    ctype.push('O');
    var word = seg[3];
    var p1 = 'U';
    var p2 = 'U';
    var p3 = 'U';
    for (var i = 4; i < seg.length - 3; ++i) {
        var score = this.BIAS__;
        var w1 = seg[i - 3];
        var w2 = seg[i - 2];
        var w3 = seg[i - 1];
        var w4 = seg[i];
        var w5 = seg[i + 1];
        var w6 = seg[i + 2];
        var c1 = ctype[i - 3];
        var c2 = ctype[i - 2];
        var c3 = ctype[i - 1];
        var c4 = ctype[i];
        var c5 = ctype[i + 1];
        var c6 = ctype[i + 2];
        score += this.ts_(this.UP1__[p1]);
        score += this.ts_(this.UP2__[p2]);
        score += this.ts_(this.UP3__[p3]);
        score += this.ts_(this.BP1__[p1 + p2]);
        score += this.ts_(this.BP2__[p2 + p3]);
        score += this.ts_(this.UW1__[w1]);
        score += this.ts_(this.UW2__[w2]);
        score += this.ts_(this.UW3__[w3]);
        score += this.ts_(this.UW4__[w4]);
        score += this.ts_(this.UW5__[w5]);
        score += this.ts_(this.UW6__[w6]);
        score += this.ts_(this.BW1__[w2 + w3]);
        score += this.ts_(this.BW2__[w3 + w4]);
        score += this.ts_(this.BW3__[w4 + w5]);
        score += this.ts_(this.TW1__[w1 + w2 + w3]);
        score += this.ts_(this.TW2__[w2 + w3 + w4]);
        score += this.ts_(this.TW3__[w3 + w4 + w5]);
        score += this.ts_(this.TW4__[w4 + w5 + w6]);
        score += this.ts_(this.UC1__[c1]);
        score += this.ts_(this.UC2__[c2]);
        score += this.ts_(this.UC3__[c3]);
        score += this.ts_(this.UC4__[c4]);
        score += this.ts_(this.UC5__[c5]);
        score += this.ts_(this.UC6__[c6]);
        score += this.ts_(this.BC1__[c2 + c3]);
        score += this.ts_(this.BC2__[c3 + c4]);
        score += this.ts_(this.BC3__[c4 + c5]);
        score += this.ts_(this.TC1__[c1 + c2 + c3]);
        score += this.ts_(this.TC2__[c2 + c3 + c4]);
        score += this.ts_(this.TC3__[c3 + c4 + c5]);
        score += this.ts_(this.TC4__[c4 + c5 + c6]);
        //  score += this.ts_(this.TC5__[c4 + c5 + c6]);
        score += this.ts_(this.UQ1__[p1 + c1]);
        score += this.ts_(this.UQ2__[p2 + c2]);
        score += this.ts_(this.UQ3__[p3 + c3]);
        score += this.ts_(this.BQ1__[p2 + c2 + c3]);
        score += this.ts_(this.BQ2__[p2 + c3 + c4]);
        score += this.ts_(this.BQ3__[p3 + c2 + c3]);
        score += this.ts_(this.BQ4__[p3 + c3 + c4]);
        score += this.ts_(this.TQ1__[p2 + c1 + c2 + c3]);
        score += this.ts_(this.TQ2__[p2 + c2 + c3 + c4]);
        score += this.ts_(this.TQ3__[p3 + c1 + c2 + c3]);
        score += this.ts_(this.TQ4__[p3 + c2 + c3 + c4]);
        var p = 'O';
        if (score > 0) {
            result.push(word);
            word = '';
            p = 'B';
        }
        p1 = p2;
        p2 = p3;
        p3 = p;
        word += seg[i];
    }
    result.push(word);
    return result;
};

var JapaneseTokenizer = /** @class */ (function (_super) {
    __extends(JapaneseTokenizer, _super);
    function JapaneseTokenizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // @ts-ignore
        _this.tokenizer = new TinySegmenter();
        return _this;
    }
    JapaneseTokenizer.prototype.tokenize = function (text, range) {
        var _this = this;
        var tokens = text
            .slice(range === null || range === void 0 ? void 0 : range.start, range === null || range === void 0 ? void 0 : range.end)
            .split('\n')
            .flatMap(function (line) { return _this.tokenizer.segment(line); })
            .map(function (t) { return t.replace(_this.trimPattern, ''); });
        return { tokens: tokens };
    };
    return JapaneseTokenizer;
}(Tokenizer));

var TokenizerFactory = /** @class */ (function () {
    function TokenizerFactory() {
    }
    TokenizerFactory.getTokenizer = function (strategy) {
        var tokenizer;
        switch (strategy) {
            case 'default':
                tokenizer = new DefaultTokenizer();
                break;
            case 'japanese':
                tokenizer = new JapaneseTokenizer();
                break;
            case 'arabic':
                tokenizer = new ArabicTokenizer();
                break;
            default:
                throw new Error("Strategy '" + strategy + "' not found");
        }
        return tokenizer;
    };
    return TokenizerFactory;
}());

var FlowProvider = /** @class */ (function (_super) {
    __extends(FlowProvider, _super);
    function FlowProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.category = 'F';
        _this.completions = [];
        return _this;
    }
    FlowProvider.prototype.addLastWordFrom = function (line, cursorIndex, strategy) {
        var word = TokenizerFactory.getTokenizer(strategy).lastWordFrom(line, cursorIndex, { normalize: true });
        this.addWord(word);
    };
    FlowProvider.prototype.addWordsFrom = function (text, strategy) {
        var _this = this;
        if (strategy === void 0) { strategy = 'default'; }
        var result = TokenizerFactory.getTokenizer(strategy).tokenize(text);
        result.tokens.forEach(function (token) { return _this.addWord(token); });
    };
    FlowProvider.prototype.addWord = function (word) {
        if (!word || this.alreadyAdded(word))
            return;
        this.completions.push(word);
    };
    FlowProvider.prototype.alreadyAdded = function (word) {
        return this.completions.includes(word);
    };
    return FlowProvider;
}(Provider));

var LaTexProvider = /** @class */ (function (_super) {
    __extends(LaTexProvider, _super);
    function LaTexProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.category = "L";
        _this.completions = ["\\Arrowvert", "\\Bbbk", "\\Big", "\\Bigg", "\\Biggl", "\\Biggr", "\\Bigl", "\\Bigm", "\\Bigr", "\\Box", "\\Bumpeq", "\\Cap", "\\cite[#{}]{#{}}", "\\cite", "\\Cup", "\\DeclareMathOperator{#{}}{#{}}", "\\Delta", "\\Downarrow", "\\Finv", "\\Game", "\\Gamma", "\\Im", "\\Lambda", "\\Leftarrow", "\\Leftrightarrow", "\\Lleftarrow", "\\Longleftarrow", "\\Longleftrightarrow", "\\Longrightarrow", "\\Lsh", "\\Omega", "\\Phi", "\\Pi", "\\Pr", "\\Psi", "\\Re", "\\Rightarrow", "\\Rrightarrow", "\\Rsh", "\\S", "\\Sigma", "\\Subset", "\\Supset", "\\TeX", "\\Theta", "\\Uparrow", "\\Updownarrow", "\\Upsilon", "\\Vdash", "\\Vert", "\\Vvdash", "\\Xi", "\\above", "\\abovewithdelims", "\\acute{#{}}", "\\aleph", "\\alpha", "\\amalg", "\\angle", "\\approx", "\\approxeq", "\\arccos", "\\arcsin", "\\arctan", "\\arg", "\\arrowvert", "\\ast", "\\asymp", "\\atop",
            "\\atopwithdelims", "\\backepsilon", "\\backprime", "\\backsim", "\\backsimeq", "\\backslash", "\\bar{#{}}", "\\barwedge", "\\because", "\\beta", "\\beth", "\\between", "\\bf", "\\big", "\\bigcap", "\\bigcirc", "\\bigcup", "\\bigg", "\\biggl", "\\biggm", "\\biggr", "\\bigl", "\\bigm", "\\bigodot", "\\bigoplus", "\\bigotimes", "\\bigr\\}", "\\bigsqcup", "\\bigstar", "\\bigtriangledown", "\\bigtriangleup", "\\biguplus", "\\bigvee", "\\bigwedge", "\\binom{#{}}{#{}}", "\\blacklozenge", "\\blacksquare", "\\blacktriangle", "\\blacktriangledown", "\\blacktriangleleft", "\\blacktriangleright", "\\bmod", "\\boldsymbol{#{}}", "\\bot", "\\bowtie", "\\boxdot", "\\boxed{#{}}", "\\boxminus", "\\boxplus", "\\boxtimes", "\\brace", "\\bracevert", "\\brack", "\\breve{#{}}", "\\buildrel", "\\bullet", "\\bumpeq", "\\cal", "\\cap", "\\cases{#{}}", "\\cdot", "\\cdotp", "\\cdots",
            "\\centerdot", "\\cfrac{#{}}{#{}}", "\\check{#{}}", "\\checkmark", "\\chi", "\\choose", "\\circ", "\\circeq", "\\circlearrowleft", "\\circlearrowright", "\\circledS", "\\circledast", "\\circledcirc", "\\circleddash", "\\clubsuit", "\\colon", "\\complement", "\\cong", "\\coprod", "\\cos", "\\cosh", "\\cot", "\\coth", "\\cr", "\\csc", "\\cup", "\\curlyeqprec", "\\curlyeqsucc", "\\curlyvee", "\\curlywedge", "\\curvearrowleft", "\\curvearrowright", "\\dagger", "\\daleth", "\\dashleftarrow", "\\dashrightarrow", "\\dashv", "\\dbinom{#{}}{#{}}", "\\ddagger", "\\ddddot{#{}}", "\\dddot{#{}}", "\\ddot{#{}}", "\\ddots", "\\def", "\\deg", "\\delta", "\\det", "\\dfrac{#{}}{#{}}", "\\diagdown", "\\diagup", "\\diamond", "\\diamondsuit", "\\digamma", "\\dim", "\\displaylines", "\\displaystyle", "\\div", "\\divideontimes", "\\dot{#{}}", "\\doteq", "\\doteqdot", "\\dotplus",
            "\\dots", "\\dotsb", "\\dotsc", "\\dotsi", "\\dotsm", "\\dotso", "\\doublebarwedge", "\\downarrow", "\\downdownarrows", "\\downharpoonleft", "\\downharpoonright", "\\ell", "\\emptyset", "\\enspace", "\\epsilon", "\\eqalign{#{}}", "\\eqalignno{#{}}", "\\eqcirc", "\\eqref{#{}}", "\\eqsim", "\\eqslantgtr", "\\eqslantless", "\\equiv", "\\eta", "\\eth", "\\exists", "\\exp", "\\fallingdotseq", "\\flat", "\\forall", "\\frown", "\\gamma", "\\gcd", "\\ge", "\\geq", "\\geqq", "\\geqslant", "\\gets", "\\gg", "\\ggg", "\\gimel", "\\gnapprox", "\\gneq", "\\gneqq", "\\gnsim", "\\grave{#{}}", "\\gtrapprox", "\\gtrdot", "\\gtreqless", "\\gtreqqless", "\\gtrless", "\\gtrsim", "\\gvertneqq", "\\hat{#{}}", "\\hbar", "\\hbox", "\\heartsuit", "\\hfil", "\\hfill", "\\hom", "\\hookleftarrow", "\\hookrightarrow", "\\hphantom{#{}}", "\\hskip", "\\hslash", "\\idotsint", "\\iff",
            "\\iiiint", "\\iiint", "\\iint", "\\imath", "\\impliedby", "\\implies", "\\in", "\\inf", "\\infty", "\\injlim", "\\int\\limits_{#{}}^{#{}}", "\\intercal", "\\iota", "\\it", "\\jmath", "\\kappa", "\\ker", "\\kern", "\\lVert", "\\lambda", "\\land", "\\langle", "\\lbrace", "\\lbrack", "\\lceil", "\\ldotp", "\\ldots", "\\le", "\\left", "\\leftarrow", "\\leftarrowtail", "\\leftharpoondown", "\\leftharpoonup", "\\leftleftarrows", "\\leftrightarrow", "\\leftrightarrows", "\\leftrightharpoons", "\\leftrightsquigarrow", "\\leftroot{#{}}", "\\leftthreetimes", "\\leq", "\\leqalignno{#{}}", "\\leqq", "\\leqslant", "\\lessapprox", "\\lessdot", "\\lesseqgtr", "\\lesseqqgtr", "\\lessgtr", "\\lesssim", "\\let{#{}}{#{}}", "\\lfloor", "\\lg", "\\lgroup", "\\lhd", "\\lim", "\\liminf", "\\limits_{#{}}^{#{}}", "\\limsup", "\\ll", "\\llap{#{}}", "\\llcorner", "\\lll", "\\lmoustache",
            "\\ln", "\\lnapprox", "\\lneq", "\\lneqq", "\\lnot", "\\lnsim", "\\log", "\\longleftarrow", "\\longleftrightarrow", "\\longmapsto", "\\longrightarrow", "\\looparrowleft", "\\looparrowright", "\\lor", "\\lower", "\\lozenge", "\\lrcorner", "\\ltimes", "\\lvert", "\\lvertneqq", "\\maltese", "\\mapsto", "\\mathbb{#{}}", "\\mathbf{#{}}", "\\mathbin", "\\mathcal{#{}}", "\\mathchoice", "\\mathclose", "\\mathfrak{#{}}", "\\mathinner", "\\mathop", "\\mathopen", "\\mathord", "\\mathpunct", "\\mathrel", "\\mathstrut", "\\matrix{#{}}", "\\max", "\\measuredangle", "\\mho", "\\mid", "\\middle", "\\min", "\\mit", "\\mkern", "\\mod", "\\models", "\\moveleft", "\\moveright", "\\mp", "\\mskip", "\\mspace{#{}}", "\\mu", "\\multimap", "\\nLeftarrow", "\\nLeftrightarrow", "\\nRightarrow", "\\nVDash", "\\nVdash", "\\nabla", "\\natural", "\\ncong", "\\ne", "\\nearrow", "\\neg", "\\negmedspace",
            "\\negthickspace", "\\negthinspace", "\\neq", "\\nexists", "\\ngeq", "\\ngeqq", "\\ngeqslant", "\\ngtr", "\\ni", "\\nleftarrow", "\\nleftrightarrow", "\\nleq", "\\nleqq", "\\nleqslant", "\\nless", "\\nmid", "\\nolimits_{#{}}^{#{}}", "\\not", "\\notag", "\\notin", "\\nparallel", "\\nprec", "\\npreceq", "\\nrightarrow", "\\nshortmid", "\\nshortparallel", "\\nsim", "\\nsubseteq", "\\nsubseteqq", "\\nsucc", "\\nsucceq", "\\nsupseteq", "\\nsupseteqq", "\\ntriangleleft", "\\ntrianglelefteq", "\\ntriangleright", "\\ntrianglerighteq", "\\nu", "\\nvDash", "\\nvdash", "\\nwarrow", "\\odot", "\\oint", "\\oldstyle", "\\omega", "\\ominus", "\\operatorname{#{}}", "\\oplus", "\\oslash", "\\otimes", "\\over", "\\overbrace{#{}}", "\\overleftarrow{#{}}", "\\overleftrightarrow{#{}}", "\\overline{#{}}", "\\overrightarrow{#{}}", "\\overset{#{}}{#{}}", "\\overwithdelims", "\\owns",
            "\\parallel", "\\partial", "\\perp", "\\phantom{#{}}", "\\phi", "\\pi", "\\pitchfork", "\\pm", "\\pmatrix{#{}}", "\\pmb{#{}}", "\\pmod", "\\pod", "\\prec", "\\precapprox", "\\preccurlyeq", "\\preceq", "\\precnapprox", "\\precneqq", "\\precnsim", "\\precsim", "\\prime", "\\prod\\limits_{#{}}^{#{}}", "\\projlim", "\\propto", "\\psi", "\\qquad", "\\quad", "\\rVert", "\\raise", "\\rangle", "\\rbrace", "\\rbrack", "\\rceil", "\\rfloor", "\\rgroup", "\\rhd", "\\rho", "\\right", "\\rightarrow", "\\rightarrowtail", "\\rightharpoondown", "\\rightharpoonup", "\\rightleftarrows", "\\rightleftharpoons", "\\rightrightarrows", "\\rightsquigarrow", "\\rightthreetimes", "\\risingdotseq", "\\rlap{#{}}", "\\rm", "\\rmoustache", "\\root #{} \\of #{}", "\\rtimes", "\\rvert", "\\scriptscriptstyle", "\\scriptstyle", "\\searrow", "\\sec", "\\setminus", "\\sharp", "\\shortmid",
            "\\shortparallel", "\\sideset{#{}}{#{}}{#{}}", "\\sigma", "\\sim", "\\simeq", "\\sin", "\\sinh", "\\skew{#{}}{#{}}{#{}}", "\\smallfrown", "\\smallint", "\\smallsetminus", "\\smallsmile", "\\smash{#{}}", "\\smile", "\\space", "\\spadesuit", "\\sphericalangle", "\\sqcap", "\\sqcup", "\\sqrt{#{}}", "\\sqsubset", "\\sqsubseteq", "\\sqsupset", "\\sqsupseteq", "\\square", "\\star", "\\strut", "\\subset", "\\subseteq", "\\subseteqq", "\\subsetneq", "\\subsetneqq", "\\substack{#{}}", "\\succ", "\\succapprox", "\\succcurlyeq", "\\succeq", "\\succnapprox", "\\succneqq", "\\succnsim", "\\succsim", "\\sum\\limits_{#{}}^{#{}}", "\\sup", "\\supset", "\\supseteq", "\\supseteqq", "\\supsetneq", "\\supsetneqq", "\\surd", "\\swarrow", "\\tag{#{}}", "\\tan", "\\tanh", "\\tau", "\\tbinom{#{}}{#{}}", "\\text{#{}}", "\\textstyle", "\\tfrac{#{}}{#{}}", "\\therefore", "\\theta",
            "\\thickapprox", "\\thicksim", "\\thinspace", "\\tilde{#{}}", "\\times", "\\to", "\\top", "\\triangle", "\\triangledown", "\\triangleleft", "\\trianglelefteq", "\\triangleq", "\\triangleright", "\\trianglerighteq", "\\tt", "\\twoheadleftarrow", "\\twoheadrightarrow", "\\ulcorner", "\\underbrace{#{}}", "\\underleftarrow{#{}}", "\\underleftrightarrow{#{}}", "\\underline{#{}}", "\\underrightarrow{#{}}", "\\underset{#{}}{#{}}", "\\unlhd", "\\unrhd", "\\uparrow", "\\updownarrow", "\\upharpoonleft", "\\upharpoonright", "\\uplus", "\\uproot{#{}}", "\\upsilon", "\\upuparrows", "\\urcorner", "\\vDash", "\\varDelta", "\\varGamma", "\\varLambda", "\\varOmega", "\\varPhi", "\\varPi", "\\varPsi", "\\varSigma", "\\varTheta", "\\varUpsilon", "\\varXi", "\\varepsilon", "\\varinjlim", "\\varkappa", "\\varliminf", "\\varlimsup", "\\varnothing", "\\varphi", "\\varpi",
            "\\varprojlim", "\\varpropto", "\\varrho", "\\varsigma", "\\varsubsetneq", "\\varsubsetneqq", "\\varsupsetneq", "\\varsupsetneqq", "\\vartheta", "\\vartriangle", "\\vartriangleleft", "\\vartriangleright", "\\vcenter", "\\vdash", "\\vec{#{}}", "\\vee", "\\veebar", "\\vert", "\\vphantom{#{}}", "\\wedge", "\\widehat{#{}}", "\\widetilde{#{}}", "\\wp", "\\wr", "\\xi", "\\xleftarrow{#{}}", "\\xrightarrow{#{}}", "\\zeta", "\\begin{definition}", "\\begin{tikzcd}", "\\begin{tikzpicture}", "\\begin{align}", "\\begin{align*}", "\\begin{alignat}", "\\begin{alignat*}", "\\begin{aligned}", "\\begin{alignedat}", "\\begin{array}", "\\begin{Bmatrix}", "\\begin{bmatrix}", "\\begin{cases}", "\\begin{CD}", "\\begin{eqnarray}", "\\begin{eqnarray*}", "\\begin{equation}", "\\begin{equation*}", "\\begin{gather}", "\\begin{gather*}", "\\begin{gathered}", "\\begin{matrix}",
            "\\begin{multline}", "\\begin{multline*}", "\\begin{pmatrix}", "\\begin{smallmatrix}", "\\begin{split}", "\\begin{subarray}", "\\begin{Vmatrix}", "\\begin{vmatrix}"];
        return _this;
    }
    return LaTexProvider;
}(Provider));

var Autocomplete = /** @class */ (function () {
    function Autocomplete(settings) {
        var _this = this;
        this.keyMaps = {
            // Override code mirror default key maps
            'Ctrl-P': function () { },
            'Ctrl-N': function () { },
            Down: function () { },
            Up: function () { },
            Enter: function (editor) {
                _this.selectSuggestion(editor);
            },
            Esc: function (editor) {
                _this.removeViewFrom(editor);
                if (editor.getOption('keyMap') === 'vim-insert')
                    editor.operation(function () {
                        // https://github.com/codemirror/CodeMirror/blob/bd37a96d362b8d92895d3960d569168ec39e4165/keymap/vim.js#L5341
                        var vim = editor.state.vim;
                        vim.insertMode = false;
                        editor.setOption('keyMap', 'vim');
                    });
            },
        };
        this.settings = settings;
        this.loadProviders();
        this.suggestions = [];
        this.selected = defaultDirection();
        this.view = null;
    }
    Object.defineProperty(Autocomplete.prototype, "isShown", {
        get: function () {
            return this.view !== null;
        },
        enumerable: false,
        configurable: true
    });
    Autocomplete.prototype.toggleViewIn = function (editor, autoSelect) {
        if (autoSelect === void 0) { autoSelect = true; }
        var isEnabled = this.settings.enabled;
        if (this.isShown || !isEnabled) {
            this.cursorAtTrigger = null;
            this.removeViewFrom(editor);
        }
        else if (isEnabled) {
            var cursor = copyObject(editor.getCursor());
            var currentLine = editor.getLine(cursor.line);
            var wordStartIndex = this.tokenizer.lastWordStartPos(currentLine, cursor.ch);
            var cursorAt = cursor.ch;
            cursor.ch = wordStartIndex;
            this.cursorAtTrigger = cursor;
            var word = currentLine.slice(wordStartIndex, cursorAt);
            this.showViewIn(editor, word, autoSelect);
        }
    };
    Autocomplete.prototype.updateViewIn = function (editor, event, options) {
        if (options === void 0) { options = {
            updateSelected: true,
            autoSelect: true,
        }; }
        if (!event.ctrlKey && event.key === ' ')
            return this.removeViewFrom(editor);
        if (options.updateSelected)
            this.selected = updateSelectedSuggestionFrom(event, this.selected, this.suggestions.length);
        var cursor = copyObject(editor.getCursor());
        var currentLine = editor.getLine(cursor.line);
        var completionWord = this.tokenizer.lastWordFrom(currentLine, cursor.ch);
        var recreate = completionWord !== this.lastCompletionWord;
        if (recreate) {
            this.lastCompletionWord = completionWord;
            this.showViewIn(editor, completionWord, options.autoSelect);
        }
        else
            updateCachedView(this.view, this.selected.index);
        scrollTo(this.selected, this.view, this.suggestions.length);
    };
    Autocomplete.prototype.removeViewFrom = function (editor) {
        this.selected = defaultDirection();
        editor.removeKeyMap(this.keyMaps);
        if (!this.view)
            return;
        this.addClickListener(this.view, editor, false);
        try {
            var parentNode = this.view.parentNode;
            if (parentNode) {
                var removed = parentNode.removeChild(this.view);
                if (removed)
                    this.view = null;
            }
        }
        catch (e) {
            console.error("Cannot destroy view. Reason: " + e);
        }
    };
    Autocomplete.prototype.updateProvidersFrom = function (event, editor) {
        var _this = this;
        var tokenizer = TokenizerFactory.getTokenizer(this.settings.flowProviderTokenizeStrategy);
        if (!event.ctrlKey &&
            (tokenizer.isWordSeparator(event.key) || event.key === 'Enter')) {
            var cursor_1 = copyObject(editor.getCursor());
            if (/Enter/.test(event.key)) {
                cursor_1.line -= 1;
                var currentLine = editor.getLine(cursor_1.line);
                // Changed editor pane
                if (!currentLine)
                    return;
                cursor_1.ch = currentLine.length;
            }
            var line_1 = editor.getLine(cursor_1.line);
            this.providers.forEach(function (provider) {
                // For now only FlowProvider
                if (provider instanceof FlowProvider)
                    provider.addLastWordFrom(line_1, cursor_1.ch, _this.tokenizerStrategy);
            });
        }
    };
    Autocomplete.prototype.scanFile = function (file, strategy) {
        var _a;
        if (strategy === void 0) { strategy = 'default'; }
        var providers = this.providers;
        (_a = file.vault) === null || _a === void 0 ? void 0 : _a.read(file).then(function (content) {
            // TODO: Make it async
            providers.forEach(function (provider) {
                if (provider instanceof FlowProvider)
                    provider.addWordsFrom(content, strategy);
            });
        });
    };
    // TODO: Improve suggestions public API
    Autocomplete.prototype.selectLastSuggestion = function () {
        this.selected = {
            index: this.suggestions.length - 1,
            direction: 'backward',
        };
    };
    Object.defineProperty(Autocomplete.prototype, "tokenizer", {
        get: function () {
            return TokenizerFactory.getTokenizer(this.tokenizerStrategy);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Autocomplete.prototype, "tokenizerStrategy", {
        get: function () {
            return this.settings.flowProviderTokenizeStrategy;
        },
        enumerable: false,
        configurable: true
    });
    Autocomplete.prototype.showViewIn = function (editor, completionWord, autoSelect) {
        if (completionWord === void 0) { completionWord = ''; }
        if (autoSelect === void 0) { autoSelect = true; }
        if (this.view)
            this.removeViewFrom(editor);
        this.suggestions = this.providers.reduce(function (acc, provider) { return acc.concat(provider.matchWith(completionWord || '')); }, []);
        if (autoSelect && this.suggestions.length === 1) {
            // Suggest automatically
            this.selected.index = 0;
            this.selectSuggestion(editor);
        }
        else {
            editor.addKeyMap(this.keyMaps);
            this.view = generateView(this.suggestions, this.selected.index);
            this.addClickListener(this.view, editor);
            appendWidget(editor, this.view);
        }
    };
    // TODO: Refactor
    Autocomplete.prototype.addClickListener = function (view, editor, add) {
        var _this = this;
        if (add === void 0) { add = true; }
        if (!this.onClickCallback)
            this.onClickCallback = function (event) {
                var element = event.target;
                var hintId = element.id;
                if (!hintId) {
                    var parent_1 = element.parentNode;
                    if (parent_1 && parent_1.id)
                        hintId = parent_1.id;
                }
                var hintIdPrefix = 'suggestion-';
                if (hintId && hintId.startsWith(hintIdPrefix)) {
                    hintId = hintId.replace(hintIdPrefix, '');
                    var id = parseInt(hintId);
                    if (id >= 0 && id < _this.suggestions.length) {
                        _this.selected.index = id;
                        _this.selectSuggestion(editor);
                    }
                }
            };
        if (add)
            view.addEventListener('click', this.onClickCallback);
        else
            view.removeEventListener('click', this.onClickCallback);
    };
    Autocomplete.prototype.selectSuggestion = function (editor) {
        var _this = this;
        var _a;
        var cursor = editor.getCursor();
        var selectedValue = (_a = this.suggestions[this.selected.index]) === null || _a === void 0 ? void 0 : _a.value;
        if (!selectedValue) {
            this.removeViewFrom(editor);
            return;
        }
        var _b = managePlaceholders(selectedValue, this.cursorAtTrigger.ch), normalizedValue = _b.normalizedValue, newCursorPosition = _b.newCursorPosition;
        editor.operation(function () {
            editor.replaceRange(normalizedValue, _this.cursorAtTrigger, cursor);
            var updatedCursor = {
                line: cursor.line,
                ch: newCursorPosition,
            };
            editor.setCursor(updatedCursor);
        });
        // Need to remove it here because of focus
        this.removeViewFrom(editor);
        editor.focus();
    };
    Autocomplete.prototype.loadProviders = function () {
        var providers = [];
        if (this.settings.flowProvider)
            providers.push(new FlowProvider());
        if (this.settings.latexProvider)
            providers.push(new LaTexProvider());
        this.providers = providers;
    };
    return Autocomplete;
}());

var AutocompleteSettings = /** @class */ (function () {
    function AutocompleteSettings() {
        this.enabled = true;
        /*
         * Trigger on ctrl-p/n bindings
         */
        this.triggerLikeVim = false;
        // TODO: Refactor provider settings
        this.latexProvider = true;
        this.flowProvider = true;
        this.flowProviderScanCurrent = true;
        this.flowProviderTokenizeStrategy = 'default';
    }
    return AutocompleteSettings;
}());

var AutocompleteSettingsTab = /** @class */ (function (_super) {
    __extends(AutocompleteSettingsTab, _super);
    function AutocompleteSettingsTab(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.plugin = plugin;
        return _this;
    }
    AutocompleteSettingsTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        containerEl.empty();
        containerEl.createEl('h2', { text: 'Autocomplete Settings' });
        new obsidian.Setting(containerEl)
            .setName('Enabled')
            .setDesc('Set the autocomplete state')
            .addToggle(function (cb) {
            return cb.setValue(_this.plugin.settings.enabled).onChange(function (value) {
                _this.plugin.settings.enabled = value;
                _this.plugin.saveData(_this.plugin.settings);
                _this.plugin.refresh();
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Trigger like Vim autocomplete')
            .setDesc('Use CTRL-P/N bindings to trigger autocomplete. Be aware of keybinding clash on Windows (ctrl-n)')
            .addToggle(function (cb) {
            return cb.setValue(_this.plugin.settings.triggerLikeVim).onChange(function (value) {
                _this.plugin.settings.triggerLikeVim = value;
                _this.plugin.saveData(_this.plugin.settings);
                _this.plugin.refresh();
            });
        });
        // Providers
        new obsidian.Setting(containerEl)
            .setName('Text Providers')
            .setDesc('The providers below suggest completions based on input. Be aware that enabling multiple providers can decrease performance.')
            .setHeading();
        new obsidian.Setting(containerEl)
            .setClass('no-border-top')
            .setName('LaTex Provider')
            .setDesc('Toggle LaTex suggestions')
            .addToggle(function (cb) {
            return cb.setValue(_this.plugin.settings.latexProvider).onChange(function (value) {
                _this.plugin.settings.latexProvider = value;
                _this.plugin.saveData(_this.plugin.settings);
                _this.plugin.refresh();
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Flow Provider')
            .setDesc('Learns as you type. For now limited to current session.')
            .addToggle(function (cb) {
            return cb.setValue(_this.plugin.settings.flowProvider).onChange(function (value) {
                _this.plugin.settings.flowProvider = value;
                if (!value)
                    // Scan current file can be enabled only if flow provider is
                    _this.plugin.settings.flowProviderScanCurrent = false;
                _this.plugin.saveData(_this.plugin.settings);
                _this.plugin.refresh();
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Flow Provider: Scan strategy')
            .setDesc('Choose the default scan strategy')
            .addDropdown(function (cb) {
            // Add options
            TOKENIZE_STRATEGIES.forEach(function (strategy) {
                var capitalized = strategy.replace(/^\w/, function (c) {
                    return c.toLocaleUpperCase();
                });
                cb.addOption(strategy, capitalized);
            });
            var settings = _this.plugin.settings;
            cb.setValue(settings.flowProviderTokenizeStrategy).onChange(function (value) {
                if (settings.flowProvider) {
                    _this.plugin.settings.flowProviderTokenizeStrategy = value;
                    _this.plugin.saveData(_this.plugin.settings);
                    _this.plugin.refresh();
                }
                else {
                    new obsidian.Notice('Cannot change because flow provider is not enabled.');
                }
            });
        });
        // TODO: Improve UI reactivity when parent setting is disabled
        new obsidian.Setting(containerEl)
            .setName('Flow Provider: Scan current file')
            .setDesc('Provides current file text suggestions. Be aware of performance issues with large files.')
            .addToggle(function (cb) {
            var settings = _this.plugin.settings;
            cb.setValue(settings.flowProvider && settings.flowProviderScanCurrent).onChange(function (value) {
                if (settings.flowProvider) {
                    _this.plugin.settings.flowProviderScanCurrent = value;
                    _this.plugin.saveData(_this.plugin.settings);
                    _this.plugin.refresh();
                }
                else if (value) {
                    // Cannot enable plugin
                    cb.setValue(false);
                    new obsidian.Notice('Cannot activate because flow provider is not enabled.');
                }
            });
        });
    };
    return AutocompleteSettingsTab;
}(obsidian.PluginSettingTab));

var StatusBarView = /** @class */ (function () {
    function StatusBarView(plugin, settings) {
        var _this = this;
        this.onStatusBarClick = function () {
            var currentStrategy = _this.settings.flowProviderTokenizeStrategy;
            var currentIndex = TOKENIZE_STRATEGIES.findIndex(function (strategy) { return strategy === currentStrategy; });
            var newStrategy = currentIndex === TOKENIZE_STRATEGIES.length - 1
                ? TOKENIZE_STRATEGIES[0]
                : TOKENIZE_STRATEGIES[currentIndex + 1];
            _this.settings.flowProviderTokenizeStrategy = newStrategy;
            _this.plugin.saveData(_this.settings);
            _this.statusBar.innerHTML = _this.getStatusBarText(newStrategy);
        };
        this.plugin = plugin;
        this.settings = settings;
    }
    StatusBarView.prototype.addStatusBar = function () {
        if (!this.settings.flowProvider)
            return;
        var statusBar = this.plugin.addStatusBarItem();
        statusBar.addClass('mod-clickable');
        statusBar.innerHTML = this.getStatusBarText(this.settings.flowProviderTokenizeStrategy);
        statusBar.addEventListener('click', this.onStatusBarClick);
        this.statusBar = statusBar;
    };
    StatusBarView.prototype.removeStatusBar = function () {
        if (!this.statusBar)
            return;
        this.statusBar.removeEventListener('click', this.onStatusBarClick);
        this.statusBar.remove();
    };
    StatusBarView.prototype.getStatusBarText = function (strategy) {
        return "strategy: " + strategy;
    };
    return StatusBarView;
}());

var AutocompletePlugin = /** @class */ (function (_super) {
    __extends(AutocompletePlugin, _super);
    function AutocompletePlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /*
         * Listener used to trigger autocomplete
         */
        _this.keyDownListener = function (editor, event) {
            var autocomplete = _this.autocomplete;
            // TODO: Refactor autocomplete behavior options
            // Trigger like Vim autocomplete (ctrl+p/n)
            var updateSelected = true;
            var autoSelect = true;
            if (_this.settings.triggerLikeVim &&
                !isVimNormalMode(editor) &&
                !autocomplete.isShown &&
                event.ctrlKey &&
                (event.key === 'n' || event.key === 'p')) {
                // Do not update since we are changing selected
                updateSelected = false;
                // Do not auto select otherwise cursor jumps on an another line
                autoSelect = false;
                autocomplete.toggleViewIn(editor, autoSelect);
                if (event.key === 'p')
                    autocomplete.selectLastSuggestion();
            }
            if (!autocomplete.isShown)
                return;
            _this.updateEditorIfChanged(editor, autocomplete);
            autocomplete.updateViewIn(editor, event, { updateSelected: updateSelected, autoSelect: autoSelect });
        };
        /*
         * Listener used to scan current word
         */
        _this.keyUpListener = function (editor, event) {
            var autocomplete = _this.autocomplete;
            autocomplete.updateProvidersFrom(event, editor);
        };
        return _this;
    }
    AutocompletePlugin.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        console.log('Loading Autocomplete plugin.');
                        _a = this;
                        _c = (_b = Object).assign;
                        _d = [new AutocompleteSettings()];
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.settings = _c.apply(_b, _d.concat([_e.sent()]));
                        this.addSettingTab(new AutocompleteSettingsTab(this.app, this));
                        if (!this.settings.enabled)
                            return [2 /*return*/];
                        this.statusBar = new StatusBarView(this, this.settings);
                        this.enable();
                        this.addCommands();
                        return [2 /*return*/];
                }
            });
        });
    };
    AutocompletePlugin.prototype.onunload = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log('Unloaded Obsidian Autocomplete');
                this.disable();
                return [2 /*return*/];
            });
        });
    };
    AutocompletePlugin.prototype.refresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.disable();
                this.enable();
                return [2 /*return*/];
            });
        });
    };
    AutocompletePlugin.prototype.addCommands = function () {
        var _this = this;
        this.addCommand({
            id: 'autocomplete-toggle',
            name: 'Toggle Autocomplete',
            hotkeys: [
                {
                    modifiers: ['Ctrl'],
                    key: ' ',
                },
            ],
            callback: function () {
                var autocomplete = _this.autocomplete;
                var editor = _this.getValidEditorFor(autocomplete);
                if (editor) {
                    // Do not open on vim normal mode
                    if (isVimNormalMode(editor))
                        return;
                    autocomplete.toggleViewIn(editor);
                }
            },
        });
        this.addScanCommands();
    };
    AutocompletePlugin.prototype.enable = function () {
        var _this = this;
        this.autocomplete = new Autocomplete(this.settings);
        var settings = this.settings;
        if (this.settings.flowProvider)
            this.statusBar.addStatusBar();
        if (settings.flowProviderScanCurrent) {
            this.app.workspace.on('file-open', this.onFileOpened, this);
            if (this.app.workspace.layoutReady)
                this.onLayoutReady();
            this.app.workspace.on('layout-ready', this.onLayoutReady, this);
        }
        this.registerCodeMirror(function (editor) {
            editor.on('keydown', _this.keyDownListener);
            editor.on('keyup', _this.keyUpListener);
        });
    };
    AutocompletePlugin.prototype.disable = function () {
        var _this = this;
        var workspace = this.app.workspace;
        // Always remove to avoid any kind problem
        workspace.off('file-open', this.onFileOpened);
        workspace.off('layout-ready', this.onLayoutReady);
        this.statusBar.removeStatusBar();
        workspace.iterateCodeMirrors(function (cm) {
            cm.off('keyup', _this.keyUpListener);
            cm.off('keydown', _this.keyDownListener);
            _this.autocomplete.removeViewFrom(cm);
        });
    };
    AutocompletePlugin.prototype.addScanCommands = function () {
        var _this = this;
        TOKENIZE_STRATEGIES.forEach(function (type) {
            var capitalized = type.replace(/^\w/, function (c) { return c.toLocaleUpperCase(); });
            var name = "Scan current file " + (type !== 'default' ? "(" + capitalized + ")" : '');
            _this.addCommand({
                id: "autocomplete-scan-current-file-" + type,
                name: name,
                callback: function () {
                    if (!_this.settings.flowProviderScanCurrent) {
                        new obsidian.Notice('Please activate setting flow Provider: Scan current file');
                    }
                    var autocomplete = _this.autocomplete;
                    var editor = _this.getValidEditorFor(autocomplete);
                    if (editor) {
                        var file = _this.app.workspace.getActiveFile();
                        autocomplete.scanFile(file, type);
                    }
                },
            });
        });
    };
    AutocompletePlugin.prototype.onLayoutReady = function () {
        var file = this.app.workspace.getActiveFile();
        if (file)
            this.autocomplete.scanFile(file, this.settings.flowProviderTokenizeStrategy);
    };
    AutocompletePlugin.prototype.onFileOpened = function (file) {
        if (file)
            this.autocomplete.scanFile(file, this.settings.flowProviderTokenizeStrategy);
    };
    AutocompletePlugin.prototype.getValidEditorFor = function (autocomplete) {
        var currentEditor = this.getCurrentEditor();
        if (currentEditor)
            this.updateEditorIfChanged(currentEditor, autocomplete);
        return currentEditor;
    };
    AutocompletePlugin.prototype.updateEditorIfChanged = function (editor, autocomplete) {
        if (!this.lastUsedEditor)
            this.lastUsedEditor = editor;
        if (editor !== this.lastUsedEditor) {
            autocomplete.removeViewFrom(this.lastUsedEditor);
            this.lastUsedEditor = editor;
        }
    };
    AutocompletePlugin.prototype.getCurrentEditor = function () {
        var view = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
        return view ? view.sourceMode.cmEditor : null;
    };
    return AutocompletePlugin;
}(obsidian.Plugin));

module.exports = AutocompletePlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIi4uL3NyYy9wcm92aWRlcnMvcHJvdmlkZXIudHMiLCIuLi9zcmMvYXV0b2NvbXBsZXRlL2NvcmUudHMiLCIuLi9zcmMvYXV0b2NvbXBsZXRlL3ZpZXcudHMiLCIuLi9zcmMvcHJvdmlkZXJzL2Zsb3cvdG9rZW5pemVyLnRzIiwiLi4vc3JjL3Byb3ZpZGVycy9mbG93L3Rva2VuaXplci9kZWZhdWx0LnRzIiwiLi4vc3JjL3Byb3ZpZGVycy9mbG93L3Rva2VuaXplci9hcmFiaWMudHMiLCIuLi9zcmMvdmVuZG9yL3Rpbnktc2VnbWVudGVyLnRzIiwiLi4vc3JjL3Byb3ZpZGVycy9mbG93L3Rva2VuaXplci9qYXBhbmVzZS50cyIsIi4uL3NyYy9wcm92aWRlcnMvZmxvdy9mYWN0b3J5LnRzIiwiLi4vc3JjL3Byb3ZpZGVycy9mbG93LnRzIiwiLi4vc3JjL3Byb3ZpZGVycy9sYXRleC50cyIsIi4uL3NyYy9hdXRvY29tcGxldGUudHMiLCIuLi9zcmMvc2V0dGluZ3Mvc2V0dGluZ3MudHMiLCIuLi9zcmMvc2V0dGluZ3Mvc2V0dGluZ3MtdGFiLnRzIiwiLi4vc3JjL3N0YXR1c2Jhci50cyIsIi4uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlTWFwLnNldChyZWNlaXZlciwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbiIsImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQcm92aWRlciB7XG4gIGFic3RyYWN0IHJlYWRvbmx5IGNhdGVnb3J5OiBzdHJpbmdcbiAgYWJzdHJhY3QgY29tcGxldGlvbnM6IEFycmF5PHN0cmluZz5cblxuICBzdGF0aWMgcmVhZG9ubHkgd29yZFNlcGFyYXRvclJlZ2V4ID0gLyhcXC58LHw7fDp8J3xcInwhfFxcP3wtfFxcKXxcXF18XFx9fFxcL3wgfEVudGVyKS9nXG4gIHN0YXRpYyByZWFkb25seSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyN7fSdcblxuICBtYXRjaFdpdGgoaW5wdXQ6IHN0cmluZyk6IENvbXBsZXRpb25bXSB7XG4gICAgY29uc3QgaW5wdXRMb3dlcmVkID0gaW5wdXQudG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IGlucHV0SGFzVXBwZXJDYXNlID0gL1tBLVpdLy50ZXN0KGlucHV0KVxuXG4gICAgLy8gY2FzZS1zZW5zaXRpdmUgbG9naWMgaWYgaW5wdXQgaGFzIGFuIHVwcGVyIGNhc2UuXG4gICAgLy8gT3RoZXJ3aXNlLCB1c2VzIGNhc2UtaW5zZW5zaXRpdmUgbG9naWNcbiAgICBjb25zdCBzdWdnZXN0aW9ucyA9IHRoaXMuY29tcGxldGlvbnNcbiAgICAgIC5maWx0ZXIoKHN1Z2dlc3Rpb24pID0+XG4gICAgICAgIHN1Z2dlc3Rpb24gIT0gaW5wdXRcbiAgICAgICAgICA/IGlucHV0SGFzVXBwZXJDYXNlXG4gICAgICAgICAgICA/IHN1Z2dlc3Rpb24uaW5jbHVkZXMoaW5wdXQpXG4gICAgICAgICAgICA6IHN1Z2dlc3Rpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dExvd2VyZWQpXG4gICAgICAgICAgOiBmYWxzZVxuICAgICAgKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEubG9jYWxlQ29tcGFyZShiKSlcbiAgICAgIC5zb3J0KFxuICAgICAgICAoYSwgYikgPT5cbiAgICAgICAgICBOdW1iZXIoYi50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoaW5wdXRMb3dlcmVkKSkgLVxuICAgICAgICAgIE51bWJlcihhLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChpbnB1dExvd2VyZWQpKVxuICAgICAgKVxuICAgICAgLm1hcCgoc3VnZ2VzdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4geyBjYXRlZ29yeTogdGhpcy5jYXRlZ29yeSwgdmFsdWU6IHN1Z2dlc3Rpb24gfVxuICAgICAgfSlcblxuICAgIHJldHVybiBzdWdnZXN0aW9uc1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcGxldGlvbiB7XG4gIGNhdGVnb3J5OiBzdHJpbmdcbiAgdmFsdWU6IHN0cmluZ1xufVxuIiwiaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICcuLi9wcm92aWRlcnMvcHJvdmlkZXInXG5cbmV4cG9ydCB0eXBlIERpcmVjdGlvbiA9IHtcbiAgaW5kZXg6IG51bWJlclxuICBkaXJlY3Rpb246ICdmb3J3YXJkJyB8ICdiYWNrd2FyZCcgfCAnc3RpbGwnXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0RGlyZWN0aW9uKCk6IERpcmVjdGlvbiB7XG4gIHJldHVybiB7IGluZGV4OiAwLCBkaXJlY3Rpb246ICdzdGlsbCcgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFuYWdlUGxhY2Vob2xkZXJzKFxuICBzZWxlY3RlZFZhbHVlOiBzdHJpbmcsXG4gIGluaXRpYWxDdXJzb3JJbmRleDogbnVtYmVyXG4pOiB7IG5vcm1hbGl6ZWRWYWx1ZTogc3RyaW5nOyBuZXdDdXJzb3JQb3NpdGlvbjogbnVtYmVyIH0ge1xuICBsZXQgbm9ybWFsaXplZFZhbHVlOiBzdHJpbmdcbiAgY29uc3QgcGxhY2Vob2xkZXIgPSBQcm92aWRlci5wbGFjZWhvbGRlclxuICBsZXQgbmV3Q3Vyc29yUG9zaXRpb24gPSBpbml0aWFsQ3Vyc29ySW5kZXhcblxuICBjb25zdCBwbGFjZWhvbGRlckluZGV4ID0gc2VsZWN0ZWRWYWx1ZS5pbmRleE9mKHBsYWNlaG9sZGVyKVxuICBpZiAocGxhY2Vob2xkZXJJbmRleCA+IC0xKSB7XG4gICAgLy8gVE9ETzogTWFuYWdlIG11bHRpcGxlIHBsYWNlaG9sZGVyc1xuICAgIGNvbnN0IHBsYWNlaG9sZGVyUmVnZXggPSBuZXcgUmVnRXhwKHBsYWNlaG9sZGVyLCAnZycpXG4gICAgbm9ybWFsaXplZFZhbHVlID0gc2VsZWN0ZWRWYWx1ZS5yZXBsYWNlKHBsYWNlaG9sZGVyUmVnZXgsICcnKVxuICAgIG5ld0N1cnNvclBvc2l0aW9uICs9IHBsYWNlaG9sZGVySW5kZXhcbiAgfSBlbHNlIHtcbiAgICBub3JtYWxpemVkVmFsdWUgPSBzZWxlY3RlZFZhbHVlXG4gICAgbmV3Q3Vyc29yUG9zaXRpb24gKz0gc2VsZWN0ZWRWYWx1ZS5sZW5ndGhcbiAgfVxuXG4gIHJldHVybiB7IG5vcm1hbGl6ZWRWYWx1ZSwgbmV3Q3Vyc29yUG9zaXRpb24gfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0TGFzdFN1Z2dlc3Rpb24oXG4gIHNlbGVjdGVkOiBEaXJlY3Rpb24sXG4gIHN1Z2dlc3Rpb25zTGVuZ3RoOiBudW1iZXJcbik6IERpcmVjdGlvbiB7XG4gIGNvbnN0IGRlY3JlYXNlZCA9IHNlbGVjdGVkLmluZGV4IC0gMVxuICBjb25zdCB1cGRhdGVkU2VsZWN0ZWQ6IERpcmVjdGlvbiA9IHtcbiAgICBpbmRleDogZGVjcmVhc2VkIDwgMCA/IHN1Z2dlc3Rpb25zTGVuZ3RoIC0gMSA6IGRlY3JlYXNlZCxcbiAgICBkaXJlY3Rpb246ICdiYWNrd2FyZCcsXG4gIH1cblxuICByZXR1cm4gdXBkYXRlZFNlbGVjdGVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTZWxlY3RlZFN1Z2dlc3Rpb25Gcm9tKFxuICBldmVudDogS2V5Ym9hcmRFdmVudCxcbiAgc2VsZWN0ZWQ6IERpcmVjdGlvbixcbiAgc3VnZ2VzdGlvbnNMZW5ndGg6IG51bWJlclxuKTogRGlyZWN0aW9uIHtcbiAgbGV0IHVwZGF0ZWRTZWxlY3RlZDogRGlyZWN0aW9uID0gc2VsZWN0ZWRcbiAgc3dpdGNoIChgJHtldmVudC5jdHJsS2V5fSAke2V2ZW50LmtleX1gKSB7XG4gICAgY2FzZSAndHJ1ZSBwJzpcbiAgICBjYXNlICdmYWxzZSBBcnJvd1VwJzpcbiAgICAgIHVwZGF0ZWRTZWxlY3RlZCA9IHNlbGVjdExhc3RTdWdnZXN0aW9uKHNlbGVjdGVkLCBzdWdnZXN0aW9uc0xlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndHJ1ZSBuJzpcbiAgICBjYXNlICdmYWxzZSBBcnJvd0Rvd24nOlxuICAgICAgY29uc3QgaW5jcmVhc2VkID0gc2VsZWN0ZWQuaW5kZXggKyAxXG4gICAgICB1cGRhdGVkU2VsZWN0ZWQgPSB7XG4gICAgICAgIGluZGV4OiBpbmNyZWFzZWQgPj0gc3VnZ2VzdGlvbnNMZW5ndGggPyAwIDogaW5jcmVhc2VkLFxuICAgICAgICBkaXJlY3Rpb246ICdmb3J3YXJkJyxcbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gIH1cblxuICByZXR1cm4gdXBkYXRlZFNlbGVjdGVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5T2JqZWN0KG9iajogYW55KTogYW55IHtcbiAgcmV0dXJuIHsgLi4ub2JqIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmltTm9ybWFsTW9kZShlZGl0b3I6IENvZGVNaXJyb3IuRWRpdG9yKTogYm9vbGVhbiB7XG4gIHJldHVybiBlZGl0b3IuZ2V0T3B0aW9uKCdrZXlNYXAnKSA9PT0gJ3ZpbSdcbn1cbiIsImltcG9ydCB7IENvbXBsZXRpb24gfSBmcm9tICcuLi9wcm92aWRlcnMvcHJvdmlkZXInXG5pbXBvcnQgeyBEaXJlY3Rpb24gfSBmcm9tICcuL2NvcmUnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVZpZXcoc3VnZ2VzdGlvbnM6IENvbXBsZXRpb25bXSwgc2VsZWN0ZWRJbmRleDogbnVtYmVyKSB7XG4gIGNvbnN0IHN1Z2dlc3Rpb25zSHRtbCA9IHN1Z2dlc3Rpb25zLm1hcCgodGlwOiBDb21wbGV0aW9uLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBzZWxlY3RlZEluZGV4ID09PSBpbmRleFxuICAgIHJldHVybiBgXG4gICAgICAgIDxkaXYgaWQ9XCJzdWdnZXN0aW9uLSR7aW5kZXh9XCIgY2xhc3M9XCJuby1zcGFjZS13cmFwIHN1Z2dlc3Rpb24taXRlbSR7XG4gICAgICBpc1NlbGVjdGVkID8gJyBpcy1zZWxlY3RlZCcgOiAnJ1xuICAgIH1cIj5cbiAgICAgICAgICA8ZGl2IGlkPVwic3VnZ2VzdGlvbi0ke2luZGV4fVwiIGNsYXNzPVwic3VnZ2VzdGlvbi1jb250ZW50XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdWdnZXN0aW9uLWZsYWlyXCI+JHt0aXAuY2F0ZWdvcnl9PC9zcGFuPlxuICAgICAgICAgICR7dGlwLnZhbHVlfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIGBcbiAgfSwgW10pXG4gIGNvbnN0IHN1Z2dlc3Rpb25zSm9pbmVkID0gc3VnZ2VzdGlvbnNIdG1sLmpvaW4oJ1xcbicpXG4gIGNvbnN0IHZpZXdTdHJpbmcgPSBgXG4gICAgICA8ZGl2IGlkPVwic3VnZ2VzdGlvbi1saXN0XCIgY2xhc3M9XCJzdWdnZXN0aW9uXCI+XG4gICAgICAgICR7XG4gICAgICAgICAgc3VnZ2VzdGlvbnNKb2luZWQubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBzdWdnZXN0aW9uc0pvaW5lZFxuICAgICAgICAgICAgOiAnPGRpdiBjbGFzcz1cIm5vLXN1Z2dlc3Rpb25zXCI+Tm8gbWF0Y2ggZm91bmQ8L2Rpdj4nXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInByb21wdC1pbnN0cnVjdGlvbnNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByb21wdC1pbnN0cnVjdGlvblwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvbXB0LWluc3RydWN0aW9uLWNvbW1hbmRcIj5DdHJsK04gL+KGkSA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+TmV4dCBTdWdnZXN0aW9uPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByb21wdC1pbnN0cnVjdGlvblwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvbXB0LWluc3RydWN0aW9uLWNvbW1hbmRcIj5DdHJsK1AgL+KGkyA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+UHJldmlvdXMgU3VnZ2VzdGlvbjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9tcHQtaW5zdHJ1Y3Rpb25cIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb21wdC1pbnN0cnVjdGlvbi1jb21tYW5kXCI+RW50ZXI8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+U2VsZWN0IFN1Z2dlc3Rpb248L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYFxuICBjb25zdCBjb250YWluZXJOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29udGFpbmVyTm9kZS5jbGFzc0xpc3QuYWRkKCdzdWdnZXN0aW9uLWNvbnRhaW5lcicpXG4gIGNvbnRhaW5lck5vZGUuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB2aWV3U3RyaW5nKVxuXG4gIHJldHVybiBjb250YWluZXJOb2RlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDYWNoZWRWaWV3KHZpZXc6IEhUTUxFbGVtZW50LCBzZWxlY3RlZEluZGV4OiBudW1iZXIpIHtcbiAgY29uc3QgY2hpbGRyZW4gPSB2aWV3LmZpcnN0RWxlbWVudENoaWxkPy5jaGlsZHJlblxuXG4gIGlmICghY2hpbGRyZW4pIHJldHVyblxuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjaGlsZHJlbi5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2luZGV4XVxuICAgIGNoaWxkLnRvZ2dsZUNsYXNzKCdpcy1zZWxlY3RlZCcsIGluZGV4ID09PSBzZWxlY3RlZEluZGV4KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY3JvbGxUbyhcbiAgc2VsZWN0ZWQ6IERpcmVjdGlvbixcbiAgdmlldzogSFRNTEVsZW1lbnQsXG4gIHN1Z2dlc3Rpb25zTGVuZ3RoOiBudW1iZXJcbikge1xuICBpZiAoIXZpZXcgfHwgc3VnZ2VzdGlvbnNMZW5ndGggPT09IDApIHJldHVyblxuXG4gIC8vIFRPRE86IEltcHJvdmUgc2Nyb2xsaW5nIHdpdGggcGFnZSBzaXplIGFuZCBib3VuZGFyaWVzXG5cbiAgY29uc3QgcGFyZW50ID0gdmlldy5jaGlsZHJlblswXVxuICBjb25zdCBzZWxlY3RlZEluZGV4ID0gc2VsZWN0ZWQuaW5kZXhcbiAgY29uc3QgY2hpbGQgPSBwYXJlbnQuY2hpbGRyZW5bMF1cbiAgaWYgKGNoaWxkKSB7XG4gICAgbGV0IHNjcm9sbEFtb3VudCA9IGNoaWxkLnNjcm9sbEhlaWdodCAqIHNlbGVjdGVkSW5kZXhcblxuICAgIHN3aXRjaCAoc2VsZWN0ZWQuZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlICdmb3J3YXJkJzpcbiAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggPT09IDApXG4gICAgICAgICAgLy8gRW5kIC0+IFN0YXJ0XG4gICAgICAgICAgcGFyZW50LnNjcm9sbFRvcCA9IDBcbiAgICAgICAgZWxzZSBwYXJlbnQuc2Nyb2xsVG9wID0gc2Nyb2xsQW1vdW50XG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdiYWNrd2FyZCc6XG4gICAgICAgIGlmIChzZWxlY3RlZEluZGV4ID09PSBzdWdnZXN0aW9uc0xlbmd0aCAtIDEpXG4gICAgICAgICAgLy8gRW5kIDwtIFN0YXJ0XG4gICAgICAgICAgcGFyZW50LnNjcm9sbFRvcCA9IHBhcmVudC5zY3JvbGxIZWlnaHRcbiAgICAgICAgZWxzZSBwYXJlbnQuc2Nyb2xsVG9wID0gc2Nyb2xsQW1vdW50XG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRXaWRnZXQoXG4gIGVkaXRvcjogQ29kZU1pcnJvci5FZGl0b3IsXG4gIHZpZXc6IEhUTUxFbGVtZW50LFxuICBzY3JvbGxhYmxlID0gdHJ1ZVxuKSB7XG4gIGNvbnN0IGN1cnNvciA9IGVkaXRvci5nZXRDdXJzb3IoKVxuXG4gIGVkaXRvci5hZGRXaWRnZXQoeyBjaDogY3Vyc29yLmNoLCBsaW5lOiBjdXJzb3IubGluZSB9LCB2aWV3LCBzY3JvbGxhYmxlKVxufVxuIiwiZXhwb3J0IHR5cGUgVG9rZW5pemVTdHJhdGVneSA9ICdkZWZhdWx0JyB8ICdqYXBhbmVzZScgfCAnYXJhYmljJ1xuZXhwb3J0IGNvbnN0IFRPS0VOSVpFX1NUUkFURUdJRVM6IFRva2VuaXplU3RyYXRlZ3lbXSA9IFtcbiAgJ2RlZmF1bHQnLFxuICAnamFwYW5lc2UnLFxuICAnYXJhYmljJyxcbl1cblxuZXhwb3J0IGludGVyZmFjZSBUb2tlbml6ZWRSZXN1bHQge1xuICByYW5nZT86IFJhbmdlXG4gIHRva2Vuczogc3RyaW5nW11cbn1cblxuZXhwb3J0IHR5cGUgUmFuZ2UgPSB7IHN0YXJ0PzogbnVtYmVyOyBlbmQ/OiBudW1iZXIgfVxuZXhwb3J0IHR5cGUgVG9rZW5pemVyT3B0aW9ucyA9IHsgbm9ybWFsaXplOiBib29sZWFuIH1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRva2VuaXplciB7XG4gIHByb3RlY3RlZCByZWFkb25seSB3b3JkU2VwYXJhdG9yUGF0dGVybjogUmVnRXhwID0gL1tcXFtcXF0oKTw+XCInLix8OjsgYCE/XFwvXS9cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHRyaW1QYXR0ZXJuOiBSZWdFeHBcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBOT1RFOiBnbG9iYWwgZmxhZyB0YWtlcyBub3RlIG9mIGxhc3RJbmRleCB1c2VkIVxuICAgIHRoaXMudHJpbVBhdHRlcm4gPSBuZXcgUmVnRXhwKHRoaXMud29yZFNlcGFyYXRvclBhdHRlcm4sICdnJylcbiAgfVxuXG4gIGFic3RyYWN0IHRva2VuaXplKHRleHQ6IHN0cmluZywgcmFuZ2U/OiBSYW5nZSk6IFRva2VuaXplZFJlc3VsdCB8IHVuZGVmaW5lZFxuXG4gIGxhc3RXb3JkU3RhcnRQb3MoXG4gICAgdGV4dDogc3RyaW5nLFxuICAgIGluZGV4OiBudW1iZXIsXG4gICAgb3B0aW9uczogVG9rZW5pemVyT3B0aW9ucyA9IHsgbm9ybWFsaXplOiBmYWxzZSB9XG4gICk6IG51bWJlciB7XG4gICAgY29uc3QgeyBub3JtYWxpemVkLCB1cGRhdGVkQ3Vyc29yIH0gPSBvcHRpb25zLm5vcm1hbGl6ZVxuICAgICAgPyB0aGlzLm5vcm1hbGl6ZWRMaW5lKHRleHQsIGluZGV4KVxuICAgICAgOiB7IG5vcm1hbGl6ZWQ6IHRleHQsIHVwZGF0ZWRDdXJzb3I6IGluZGV4IH1cblxuICAgIGxldCB3b3JkU3RhcnRJbmRleCA9IHVwZGF0ZWRDdXJzb3JcbiAgICB3aGlsZSAoXG4gICAgICB3b3JkU3RhcnRJbmRleCAmJlxuICAgICAgIXRoaXMuaXNXb3JkU2VwYXJhdG9yKG5vcm1hbGl6ZWQuY2hhckF0KHdvcmRTdGFydEluZGV4IC0gMSkpXG4gICAgKVxuICAgICAgd29yZFN0YXJ0SW5kZXggLT0gMVxuXG4gICAgcmV0dXJuIHdvcmRTdGFydEluZGV4XG4gIH1cblxuICBsYXN0V29yZEZyb20oXG4gICAgdGV4dDogc3RyaW5nLFxuICAgIGN1cnNvckluZGV4OiBudW1iZXIsXG4gICAgb3B0aW9uczogVG9rZW5pemVyT3B0aW9ucyA9IHsgbm9ybWFsaXplOiBmYWxzZSB9XG4gICk6IHN0cmluZyB8IG51bGwge1xuICAgIGNvbnN0IHsgbm9ybWFsaXplZCwgdXBkYXRlZEN1cnNvciB9ID0gb3B0aW9ucy5ub3JtYWxpemVcbiAgICAgID8gdGhpcy5ub3JtYWxpemVkTGluZSh0ZXh0LCBjdXJzb3JJbmRleClcbiAgICAgIDogeyBub3JtYWxpemVkOiB0ZXh0LCB1cGRhdGVkQ3Vyc29yOiBjdXJzb3JJbmRleCB9XG5cbiAgICBpZiAob3B0aW9ucy5ub3JtYWxpemUpXG4gICAgICAvLyBBbHJlYWR5IG5vcm1hbGl6ZWRcbiAgICAgIG9wdGlvbnMubm9ybWFsaXplID0gZmFsc2VcblxuICAgIGxldCB3b3JkU3RhcnRJbmRleCA9IHRoaXMubGFzdFdvcmRTdGFydFBvcyhcbiAgICAgIG5vcm1hbGl6ZWQsXG4gICAgICB1cGRhdGVkQ3Vyc29yLFxuICAgICAgb3B0aW9uc1xuICAgIClcbiAgICBsZXQgd29yZDogc3RyaW5nIHwgbnVsbCA9IG51bGxcbiAgICBpZiAod29yZFN0YXJ0SW5kZXggIT09IHVwZGF0ZWRDdXJzb3IpXG4gICAgICB3b3JkID0gdGV4dC5zbGljZSh3b3JkU3RhcnRJbmRleCwgdXBkYXRlZEN1cnNvcilcblxuICAgIHJldHVybiB3b3JkXG4gIH1cblxuICBpc1dvcmRTZXBhcmF0b3IoY2hhcjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMud29yZFNlcGFyYXRvclBhdHRlcm4udGVzdChjaGFyKVxuICB9XG5cbiAgLypcbiAgICogUmVtb3ZlIHNwYWNlcyBhbmQgd29yZCBzZXBhcmF0b3JzXG4gICAqIG5lYXIgdGhlIGxlZnQgb2YgdGhlIGN1cnNvckluZGV4XG4gICAqL1xuICBwcml2YXRlIG5vcm1hbGl6ZWRMaW5lKFxuICAgIGxpbmU6IHN0cmluZyxcbiAgICBjdXJzb3JJbmRleDogbnVtYmVyXG4gICk6IHsgbm9ybWFsaXplZDogc3RyaW5nOyB1cGRhdGVkQ3Vyc29yOiBudW1iZXIgfSB7XG4gICAgY29uc3QgcGFydGlhbExpbmUgPSBsaW5lLnNsaWNlKDAsIGN1cnNvckluZGV4KVxuICAgIGxldCBub3JtYWxpemVkID0gcGFydGlhbExpbmUudHJpbUVuZCgpXG5cbiAgICAvLyBTdWJ0cmFjdCBob3cgbWFueSBzcGFjZXMgcmVtb3ZlZFxuICAgIGxldCB1cGRhdGVkQ3Vyc29yID0gY3Vyc29ySW5kZXggLSAocGFydGlhbExpbmUubGVuZ3RoIC0gbm9ybWFsaXplZC5sZW5ndGgpXG5cbiAgICBpZiAobm9ybWFsaXplZC5sZW5ndGggPT09IDApIHJldHVybiB7IG5vcm1hbGl6ZWQ6ICcnLCB1cGRhdGVkQ3Vyc29yOiAwIH1cblxuICAgIGNvbnN0IGxhc3RDaGFyID0gbm9ybWFsaXplZC5jaGFyQXQodXBkYXRlZEN1cnNvciAtIDEpXG5cbiAgICBpZiAodGhpcy5pc1dvcmRTZXBhcmF0b3IobGFzdENoYXIpKSB7XG4gICAgICB1cGRhdGVkQ3Vyc29yIC09IDFcbiAgICAgIG5vcm1hbGl6ZWQgPSBub3JtYWxpemVkLnNsaWNlKDAsIHVwZGF0ZWRDdXJzb3IpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbm9ybWFsaXplZCwgdXBkYXRlZEN1cnNvciB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFJhbmdlLCBUb2tlbml6ZXIgfSBmcm9tICcuLi90b2tlbml6ZXInXG5cbmV4cG9ydCBjbGFzcyBEZWZhdWx0VG9rZW5pemVyIGV4dGVuZHMgVG9rZW5pemVyIHtcbiAgdG9rZW5pemUodGV4dDogc3RyaW5nLCByYW5nZT86IFJhbmdlKSB7XG4gICAgY29uc3QgdG9rZW5zID0gdGV4dFxuICAgICAgLnNsaWNlKHJhbmdlPy5zdGFydCwgcmFuZ2U/LmVuZClcbiAgICAgIC5zcGxpdCgnXFxuJylcbiAgICAgIC5mbGF0TWFwPHN0cmluZz4oKGxpbmUpID0+IGxpbmUuc3BsaXQodGhpcy50cmltUGF0dGVybikpXG4gICAgICAuZmlsdGVyKCh0KSA9PiB0Lmxlbmd0aCA+IDApXG5cbiAgICByZXR1cm4geyByYW5nZSwgdG9rZW5zIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgRGVmYXVsdFRva2VuaXplciB9IGZyb20gJy4vZGVmYXVsdCdcblxuZXhwb3J0IGNsYXNzIEFyYWJpY1Rva2VuaXplciBleHRlbmRzIERlZmF1bHRUb2tlbml6ZXIge1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgd29yZFNlcGFyYXRvclBhdHRlcm46IFJlZ0V4cCA9IC9bXFxbXFxdKCk8PlwiJy4sfDsgYCE/2IzYm10vXG59XG4iLCIvLyBAdHMtbm9jaGVja1xuLy8gQmVjYXVzZSB0aGlzIGNvZGUgaXMgb3JpZ2luYWxseSBqYXZhc2NyaXB0IGNvZGUuXG5cbi8vIFRpbnlTZWdtZW50ZXIgMC4xIC0tIFN1cGVyIGNvbXBhY3QgSmFwYW5lc2UgdG9rZW5pemVyIGluIEphdmFzY3JpcHRcbi8vIChjKSAyMDA4IFRha3UgS3VkbyA8dGFrdUBjaGFzZW4ub3JnPlxuLy8gVGlueVNlZ21lbnRlciBpcyBmcmVlbHkgZGlzdHJpYnV0YWJsZSB1bmRlciB0aGUgdGVybXMgb2YgYSBuZXcgQlNEIGxpY2VuY2UuXG4vLyBGb3IgZGV0YWlscywgc2VlIGh0dHA6Ly9jaGFzZW4ub3JnL350YWt1L3NvZnR3YXJlL1RpbnlTZWdtZW50ZXIvTElDRU5DRS50eHRcblxuZXhwb3J0IGZ1bmN0aW9uIFRpbnlTZWdtZW50ZXIoKSB7XG4gIHZhciBwYXR0ZXJucyA9IHtcbiAgICAnW+S4gOS6jOS4ieWbm+S6lOWFreS4g+WFq+S5neWNgeeZvuWNg+S4h+WEhOWFhl0nOiAnTScsXG4gICAgJ1vkuIAt6b6g44CF44CG44O144O2XSc6ICdIJyxcbiAgICAnW+OBgS3jgpNdJzogJ0knLFxuICAgICdb44KhLeODtOODvO+9sS3vvp3vvp7vvbBdJzogJ0snLFxuICAgICdbYS16QS1a772BLe+9mu+8oS3vvLpdJzogJ0EnLFxuICAgICdbMC0577yQLe+8mV0nOiAnTicsXG4gIH1cbiAgdGhpcy5jaGFydHlwZV8gPSBbXVxuICBmb3IgKHZhciBpIGluIHBhdHRlcm5zKSB7XG4gICAgdmFyIHJlZ2V4cCA9IG5ldyBSZWdFeHAoKVxuICAgIHJlZ2V4cC5jb21waWxlKGkpXG4gICAgdGhpcy5jaGFydHlwZV8ucHVzaChbcmVnZXhwLCBwYXR0ZXJuc1tpXV0pXG4gIH1cblxuICB0aGlzLkJJQVNfXyA9IC0zMzJcbiAgdGhpcy5CQzFfXyA9IHsgSEg6IDYsIElJOiAyNDYxLCBLSDogNDA2LCBPSDogLTEzNzggfVxuICB0aGlzLkJDMl9fID0ge1xuICAgIEFBOiAtMzI2NyxcbiAgICBBSTogMjc0NCxcbiAgICBBTjogLTg3OCxcbiAgICBISDogLTQwNzAsXG4gICAgSE06IC0xNzExLFxuICAgIEhOOiA0MDEyLFxuICAgIEhPOiAzNzYxLFxuICAgIElBOiAxMzI3LFxuICAgIElIOiAtMTE4NCxcbiAgICBJSTogLTEzMzIsXG4gICAgSUs6IDE3MjEsXG4gICAgSU86IDU0OTIsXG4gICAgS0k6IDM4MzEsXG4gICAgS0s6IC04NzQxLFxuICAgIE1IOiAtMzEzMixcbiAgICBNSzogMzMzNCxcbiAgICBPTzogLTI5MjAsXG4gIH1cbiAgdGhpcy5CQzNfXyA9IHtcbiAgICBISDogOTk2LFxuICAgIEhJOiA2MjYsXG4gICAgSEs6IC03MjEsXG4gICAgSE46IC0xMzA3LFxuICAgIEhPOiAtODM2LFxuICAgIElIOiAtMzAxLFxuICAgIEtLOiAyNzYyLFxuICAgIE1LOiAxMDc5LFxuICAgIE1NOiA0MDM0LFxuICAgIE9BOiAtMTY1MixcbiAgICBPSDogMjY2LFxuICB9XG4gIHRoaXMuQlAxX18gPSB7IEJCOiAyOTUsIE9COiAzMDQsIE9POiAtMTI1LCBVQjogMzUyIH1cbiAgdGhpcy5CUDJfXyA9IHsgQk86IDYwLCBPTzogLTE3NjIgfVxuICB0aGlzLkJRMV9fID0ge1xuICAgIEJISDogMTE1MCxcbiAgICBCSE06IDE1MjEsXG4gICAgQklJOiAtMTE1OCxcbiAgICBCSU06IDg4NixcbiAgICBCTUg6IDEyMDgsXG4gICAgQk5IOiA0NDksXG4gICAgQk9IOiAtOTEsXG4gICAgQk9POiAtMjU5NyxcbiAgICBPSEk6IDQ1MSxcbiAgICBPSUg6IC0yOTYsXG4gICAgT0tBOiAxODUxLFxuICAgIE9LSDogLTEwMjAsXG4gICAgT0tLOiA5MDQsXG4gICAgT09POiAyOTY1LFxuICB9XG4gIHRoaXMuQlEyX18gPSB7XG4gICAgQkhIOiAxMTgsXG4gICAgQkhJOiAtMTE1OSxcbiAgICBCSE06IDQ2NixcbiAgICBCSUg6IC05MTksXG4gICAgQktLOiAtMTcyMCxcbiAgICBCS086IDg2NCxcbiAgICBPSEg6IC0xMTM5LFxuICAgIE9ITTogLTE4MSxcbiAgICBPSUg6IDE1MyxcbiAgICBVSEk6IC0xMTQ2LFxuICB9XG4gIHRoaXMuQlEzX18gPSB7XG4gICAgQkhIOiAtNzkyLFxuICAgIEJISTogMjY2NCxcbiAgICBCSUk6IC0yOTksXG4gICAgQktJOiA0MTksXG4gICAgQk1IOiA5MzcsXG4gICAgQk1NOiA4MzM1LFxuICAgIEJOTjogOTk4LFxuICAgIEJPSDogNzc1LFxuICAgIE9ISDogMjE3NCxcbiAgICBPSE06IDQzOSxcbiAgICBPSUk6IDI4MCxcbiAgICBPS0g6IDE3OTgsXG4gICAgT0tJOiAtNzkzLFxuICAgIE9LTzogLTIyNDIsXG4gICAgT01IOiAtMjQwMixcbiAgICBPT086IDExNjk5LFxuICB9XG4gIHRoaXMuQlE0X18gPSB7XG4gICAgQkhIOiAtMzg5NSxcbiAgICBCSUg6IDM3NjEsXG4gICAgQklJOiAtNDY1NCxcbiAgICBCSUs6IDEzNDgsXG4gICAgQktLOiAtMTgwNixcbiAgICBCTUk6IC0zMzg1LFxuICAgIEJPTzogLTEyMzk2LFxuICAgIE9BSDogOTI2LFxuICAgIE9ISDogMjY2LFxuICAgIE9ISzogLTIwMzYsXG4gICAgT05OOiAtOTczLFxuICB9XG4gIHRoaXMuQlcxX18gPSB7XG4gICAgJyzjgagnOiA2NjAsXG4gICAgJyzlkIwnOiA3MjcsXG4gICAgQjHjgYI6IDE0MDQsXG4gICAgQjHlkIw6IDU0MixcbiAgICAn44CB44GoJzogNjYwLFxuICAgICfjgIHlkIwnOiA3MjcsXG4gICAgJ+OAjeOBqCc6IDE2ODIsXG4gICAg44GC44GjOiAxNTA1LFxuICAgIOOBhOOBhjogMTc0MyxcbiAgICDjgYTjgaM6IC0yMDU1LFxuICAgIOOBhOOCizogNjcyLFxuICAgIOOBhuOBlzogLTQ4MTcsXG4gICAg44GG44KTOiA2NjUsXG4gICAg44GL44KJOiAzNDcyLFxuICAgIOOBjOOCiTogNjAwLFxuICAgIOOBk+OBhjogLTc5MCxcbiAgICDjgZPjgag6IDIwODMsXG4gICAg44GT44KTOiAtMTI2MixcbiAgICDjgZXjgok6IC00MTQzLFxuICAgIOOBleOCkzogNDU3MyxcbiAgICDjgZfjgZ86IDI2NDEsXG4gICAg44GX44GmOiAxMTA0LFxuICAgIOOBmeOBpzogLTMzOTksXG4gICAg44Gd44GTOiAxOTc3LFxuICAgIOOBneOCjDogLTg3MSxcbiAgICDjgZ/jgaE6IDExMjIsXG4gICAg44Gf44KBOiA2MDEsXG4gICAg44Gj44GfOiAzNDYzLFxuICAgIOOBpOOBhDogLTgwMixcbiAgICDjgabjgYQ6IDgwNSxcbiAgICDjgabjgY06IDEyNDksXG4gICAg44Gn44GNOiAxMTI3LFxuICAgIOOBp+OBmTogMzQ0NSxcbiAgICDjgafjga86IDg0NCxcbiAgICDjgajjgYQ6IC00OTE1LFxuICAgIOOBqOOBvzogMTkyMixcbiAgICDjganjgZM6IDM4ODcsXG4gICAg44Gq44GEOiA1NzEzLFxuICAgIOOBquOBozogMzAxNSxcbiAgICDjgarjgak6IDczNzksXG4gICAg44Gq44KTOiAtMTExMyxcbiAgICDjgavjgZc6IDI0NjgsXG4gICAg44Gr44GvOiAxNDk4LFxuICAgIOOBq+OCgjogMTY3MSxcbiAgICDjgavlr746IC05MTIsXG4gICAg44Gu5LiAOiAtNTAxLFxuICAgIOOBruS4rTogNzQxLFxuICAgIOOBvuOBmzogMjQ0OCxcbiAgICDjgb7jgac6IDE3MTEsXG4gICAg44G+44G+OiAyNjAwLFxuICAgIOOBvuOCizogLTIxNTUsXG4gICAg44KE44KAOiAtMTk0NyxcbiAgICDjgojjgaM6IC0yNTY1LFxuICAgIOOCjOOBnzogMjM2OSxcbiAgICDjgozjgac6IC05MTMsXG4gICAg44KS44GXOiAxODYwLFxuICAgIOOCkuimizogNzMxLFxuICAgIOS6oeOBjzogLTE4ODYsXG4gICAg5Lqs6YO9OiAyNTU4LFxuICAgIOWPluOCijogLTI3ODQsXG4gICAg5aSn44GNOiAtMjYwNCxcbiAgICDlpKfpmKo6IDE0OTcsXG4gICAg5bmz5pa5OiAtMjMxNCxcbiAgICDlvJXjgY06IC0xMzM2LFxuICAgIOaXpeacrDogLTE5NSxcbiAgICDmnKzlvZM6IC0yNDIzLFxuICAgIOavjuaXpTogLTIxMTMsXG4gICAg55uu5oyHOiAtNzI0LFxuICAgIO+8ou+8keOBgjogMTQwNCxcbiAgICDvvKLvvJHlkIw6IDU0MixcbiAgICAn772j44GoJzogMTY4MixcbiAgfVxuICB0aGlzLkJXMl9fID0ge1xuICAgICcuLic6IC0xMTgyMixcbiAgICAxMTogLTY2OSxcbiAgICAn4oCV4oCVJzogLTU3MzAsXG4gICAgJ+KIkuKIkic6IC0xMzE3NSxcbiAgICDjgYTjgYY6IC0xNjA5LFxuICAgIOOBhuOBizogMjQ5MCxcbiAgICDjgYvjgZc6IC0xMzUwLFxuICAgIOOBi+OCgjogLTYwMixcbiAgICDjgYvjgok6IC03MTk0LFxuICAgIOOBi+OCjDogNDYxMixcbiAgICDjgYzjgYQ6IDg1MyxcbiAgICDjgYzjgok6IC0zMTk4LFxuICAgIOOBjeOBnzogMTk0MSxcbiAgICDjgY/jgao6IC0xNTk3LFxuICAgIOOBk+OBqDogLTgzOTIsXG4gICAg44GT44GuOiAtNDE5MyxcbiAgICDjgZXjgZs6IDQ1MzMsXG4gICAg44GV44KMOiAxMzE2OCxcbiAgICDjgZXjgpM6IC0zOTc3LFxuICAgIOOBl+OBhDogLTE4MTksXG4gICAg44GX44GLOiAtNTQ1LFxuICAgIOOBl+OBnzogNTA3OCxcbiAgICDjgZfjgaY6IDk3MixcbiAgICDjgZfjgao6IDkzOSxcbiAgICDjgZ3jga46IC0zNzQ0LFxuICAgIOOBn+OBhDogLTEyNTMsXG4gICAg44Gf44GfOiAtNjYyLFxuICAgIOOBn+OBoDogLTM4NTcsXG4gICAg44Gf44GhOiAtNzg2LFxuICAgIOOBn+OBqDogMTIyNCxcbiAgICDjgZ/jga86IC05MzksXG4gICAg44Gj44GfOiA0NTg5LFxuICAgIOOBo+OBpjogMTY0NyxcbiAgICDjgaPjgag6IC0yMDk0LFxuICAgIOOBpuOBhDogNjE0NCxcbiAgICDjgabjgY06IDM2NDAsXG4gICAg44Gm44GPOiAyNTUxLFxuICAgIOOBpuOBrzogLTMxMTAsXG4gICAg44Gm44KCOiAtMzA2NSxcbiAgICDjgafjgYQ6IDI2NjYsXG4gICAg44Gn44GNOiAtMTUyOCxcbiAgICDjgafjgZc6IC0zODI4LFxuICAgIOOBp+OBmTogLTQ3NjEsXG4gICAg44Gn44KCOiAtNDIwMyxcbiAgICDjgajjgYQ6IDE4OTAsXG4gICAg44Go44GTOiAtMTc0NixcbiAgICDjgajjgag6IC0yMjc5LFxuICAgIOOBqOOBrjogNzIwLFxuICAgIOOBqOOBvzogNTE2OCxcbiAgICDjgajjgoI6IC0zOTQxLFxuICAgIOOBquOBhDogLTI0ODgsXG4gICAg44Gq44GMOiAtMTMxMyxcbiAgICDjgarjgak6IC02NTA5LFxuICAgIOOBquOBrjogMjYxNCxcbiAgICDjgarjgpM6IDMwOTksXG4gICAg44Gr44GKOiAtMTYxNSxcbiAgICDjgavjgZc6IDI3NDgsXG4gICAg44Gr44GqOiAyNDU0LFxuICAgIOOBq+OCiDogLTcyMzYsXG4gICAg44Gr5a++OiAtMTQ5NDMsXG4gICAg44Gr5b6TOiAtNDY4OCxcbiAgICDjgavplqI6IC0xMTM4OCxcbiAgICDjga7jgYs6IDIwOTMsXG4gICAg44Gu44GnOiAtNzA1OSxcbiAgICDjga7jgas6IC02MDQxLFxuICAgIOOBruOBrjogLTYxMjUsXG4gICAg44Gv44GEOiAxMDczLFxuICAgIOOBr+OBjDogLTEwMzMsXG4gICAg44Gv44GaOiAtMjUzMixcbiAgICDjgbDjgow6IDE4MTMsXG4gICAg44G+44GXOiAtMTMxNixcbiAgICDjgb7jgac6IC02NjIxLFxuICAgIOOBvuOCjDogNTQwOSxcbiAgICDjgoHjgaY6IC0zMTUzLFxuICAgIOOCguOBhDogMjIzMCxcbiAgICDjgoLjga46IC0xMDcxMyxcbiAgICDjgonjgYs6IC05NDQsXG4gICAg44KJ44GXOiAtMTYxMSxcbiAgICDjgonjgas6IC0xODk3LFxuICAgIOOCiuOBlzogNjUxLFxuICAgIOOCiuOBvjogMTYyMCxcbiAgICDjgozjgZ86IDQyNzAsXG4gICAg44KM44GmOiA4NDksXG4gICAg44KM44GwOiA0MTE0LFxuICAgIOOCjeOBhjogNjA2NyxcbiAgICDjgo/jgow6IDc5MDEsXG4gICAg44KS6YCaOiAtMTE4NzcsXG4gICAg44KT44GgOiA3MjgsXG4gICAg44KT44GqOiAtNDExNSxcbiAgICDkuIDkuro6IDYwMixcbiAgICDkuIDmlrk6IC0xMzc1LFxuICAgIOS4gOaXpTogOTcwLFxuICAgIOS4gOmDqDogLTEwNTEsXG4gICAg5LiK44GMOiAtNDQ3OSxcbiAgICDkvJrnpL46IC0xMTE2LFxuICAgIOWHuuOBpjogMjE2MyxcbiAgICDliIbjga46IC03NzU4LFxuICAgIOWQjOWFmjogOTcwLFxuICAgIOWQjOaXpTogLTkxMyxcbiAgICDlpKfpmKo6IC0yNDcxLFxuICAgIOWnlOWToTogLTEyNTAsXG4gICAg5bCR44GqOiAtMTA1MCxcbiAgICDlubTluqY6IC04NjY5LFxuICAgIOW5tOmWkzogLTE2MjYsXG4gICAg5bqc55yMOiAtMjM2MyxcbiAgICDmiYvmqKk6IC0xOTgyLFxuICAgIOaWsOiBnjogLTQwNjYsXG4gICAg5pel5pawOiAtNzIyLFxuICAgIOaXpeacrDogLTcwNjgsXG4gICAg5pel57GzOiAzMzcyLFxuICAgIOabnOaXpTogLTYwMSxcbiAgICDmnJ3prq46IC0yMzU1LFxuICAgIOacrOS6ujogLTI2OTcsXG4gICAg5p2x5LqsOiAtMTU0MyxcbiAgICDnhLbjgag6IC0xMzg0LFxuICAgIOekvuS8mjogLTEyNzYsXG4gICAg56uL44GmOiAtOTkwLFxuICAgIOesrOOBqzogLTE2MTIsXG4gICAg57Gz5Zu9OiAtNDI2OCxcbiAgICAn77yR77yRJzogLTY2OSxcbiAgfVxuICB0aGlzLkJXM19fID0ge1xuICAgIOOBguOBnzogLTIxOTQsXG4gICAg44GC44KKOiA3MTksXG4gICAg44GC44KLOiAzODQ2LFxuICAgICfjgYQuJzogLTExODUsXG4gICAgJ+OBhOOAgic6IC0xMTg1LFxuICAgIOOBhOOBhDogNTMwOCxcbiAgICDjgYTjgYg6IDIwNzksXG4gICAg44GE44GPOiAzMDI5LFxuICAgIOOBhOOBnzogMjA1NixcbiAgICDjgYTjgaM6IDE4ODMsXG4gICAg44GE44KLOiA1NjAwLFxuICAgIOOBhOOCjzogMTUyNyxcbiAgICDjgYbjgaE6IDExMTcsXG4gICAg44GG44GoOiA0Nzk4LFxuICAgIOOBiOOBqDogMTQ1NCxcbiAgICAn44GLLic6IDI4NTcsXG4gICAgJ+OBi+OAgic6IDI4NTcsXG4gICAg44GL44GROiAtNzQzLFxuICAgIOOBi+OBozogLTQwOTgsXG4gICAg44GL44GrOiAtNjY5LFxuICAgIOOBi+OCiTogNjUyMCxcbiAgICDjgYvjgoo6IC0yNjcwLFxuICAgICfjgYwsJzogMTgxNixcbiAgICAn44GM44CBJzogMTgxNixcbiAgICDjgYzjgY06IC00ODU1LFxuICAgIOOBjOOBkTogLTExMjcsXG4gICAg44GM44GjOiAtOTEzLFxuICAgIOOBjOOCiTogLTQ5NzcsXG4gICAg44GM44KKOiAtMjA2NCxcbiAgICDjgY3jgZ86IDE2NDUsXG4gICAg44GR44GpOiAxMzc0LFxuICAgIOOBk+OBqDogNzM5NyxcbiAgICDjgZPjga46IDE1NDIsXG4gICAg44GT44KNOiAtMjc1NyxcbiAgICDjgZXjgYQ6IC03MTQsXG4gICAg44GV44KSOiA5NzYsXG4gICAgJ+OBlywnOiAxNTU3LFxuICAgICfjgZfjgIEnOiAxNTU3LFxuICAgIOOBl+OBhDogLTM3MTQsXG4gICAg44GX44GfOiAzNTYyLFxuICAgIOOBl+OBpjogMTQ0OSxcbiAgICDjgZfjgao6IDI2MDgsXG4gICAg44GX44G+OiAxMjAwLFxuICAgICfjgZkuJzogLTEzMTAsXG4gICAgJ+OBmeOAgic6IC0xMzEwLFxuICAgIOOBmeOCizogNjUyMSxcbiAgICAn44GaLCc6IDM0MjYsXG4gICAgJ+OBmuOAgSc6IDM0MjYsXG4gICAg44Ga44GrOiA4NDEsXG4gICAg44Gd44GGOiA0MjgsXG4gICAgJ+OBny4nOiA4ODc1LFxuICAgICfjgZ/jgIInOiA4ODc1LFxuICAgIOOBn+OBhDogLTU5NCxcbiAgICDjgZ/jga46IDgxMixcbiAgICDjgZ/jgoo6IC0xMTgzLFxuICAgIOOBn+OCizogLTg1MyxcbiAgICAn44GgLic6IDQwOTgsXG4gICAgJ+OBoOOAgic6IDQwOTgsXG4gICAg44Gg44GjOiAxMDA0LFxuICAgIOOBo+OBnzogLTQ3NDgsXG4gICAg44Gj44GmOiAzMDAsXG4gICAg44Gm44GEOiA2MjQwLFxuICAgIOOBpuOBijogODU1LFxuICAgIOOBpuOCgjogMzAyLFxuICAgIOOBp+OBmTogMTQzNyxcbiAgICDjgafjgas6IC0xNDgyLFxuICAgIOOBp+OBrzogMjI5NSxcbiAgICDjgajjgYY6IC0xMzg3LFxuICAgIOOBqOOBlzogMjI2NixcbiAgICDjgajjga46IDU0MSxcbiAgICDjgajjgoI6IC0zNTQzLFxuICAgIOOBqeOBhjogNDY2NCxcbiAgICDjgarjgYQ6IDE3OTYsXG4gICAg44Gq44GPOiAtOTAzLFxuICAgIOOBquOBqTogMjEzNSxcbiAgICAn44GrLCc6IC0xMDIxLFxuICAgICfjgavjgIEnOiAtMTAyMSxcbiAgICDjgavjgZc6IDE3NzEsXG4gICAg44Gr44GqOiAxOTA2LFxuICAgIOOBq+OBrzogMjY0NCxcbiAgICAn44GuLCc6IC03MjQsXG4gICAgJ+OBruOAgSc6IC03MjQsXG4gICAg44Gu5a2QOiAtMTAwMCxcbiAgICAn44GvLCc6IDEzMzcsXG4gICAgJ+OBr+OAgSc6IDEzMzcsXG4gICAg44G544GNOiAyMTgxLFxuICAgIOOBvuOBlzogMTExMyxcbiAgICDjgb7jgZk6IDY5NDMsXG4gICAg44G+44GjOiAtMTU0OSxcbiAgICDjgb7jgac6IDYxNTQsXG4gICAg44G+44KMOiAtNzkzLFxuICAgIOOCieOBlzogMTQ3OSxcbiAgICDjgonjgow6IDY4MjAsXG4gICAg44KL44KLOiAzODE4LFxuICAgICfjgowsJzogODU0LFxuICAgICfjgozjgIEnOiA4NTQsXG4gICAg44KM44GfOiAxODUwLFxuICAgIOOCjOOBpjogMTM3NSxcbiAgICDjgozjgbA6IC0zMjQ2LFxuICAgIOOCjOOCizogMTA5MSxcbiAgICDjgo/jgow6IC02MDUsXG4gICAg44KT44GgOiA2MDYsXG4gICAg44KT44GnOiA3OTgsXG4gICAg44Kr5pyIOiA5OTAsXG4gICAg5Lya6K2wOiA4NjAsXG4gICAg5YWl44KKOiAxMjMyLFxuICAgIOWkp+S8mjogMjIxNyxcbiAgICDlp4vjgoE6IDE2ODEsXG4gICAg5biCOiA5NjUsXG4gICAg5paw6IGeOiAtNTA1NSxcbiAgICAn5pelLCc6IDk3NCxcbiAgICAn5pel44CBJzogOTc0LFxuICAgIOekvuS8mjogMjAyNCxcbiAgICDvvbbmnIg6IDk5MCxcbiAgfVxuICB0aGlzLlRDMV9fID0ge1xuICAgIEFBQTogMTA5MyxcbiAgICBISEg6IDEwMjksXG4gICAgSEhNOiA1ODAsXG4gICAgSElJOiA5OTgsXG4gICAgSE9IOiAtMzkwLFxuICAgIEhPTTogLTMzMSxcbiAgICBJSEk6IDExNjksXG4gICAgSU9IOiAtMTQyLFxuICAgIElPSTogLTEwMTUsXG4gICAgSU9NOiA0NjcsXG4gICAgTU1IOiAxODcsXG4gICAgT09JOiAtMTgzMixcbiAgfVxuICB0aGlzLlRDMl9fID0ge1xuICAgIEhITzogMjA4OCxcbiAgICBISUk6IC0xMDIzLFxuICAgIEhNTTogLTExNTQsXG4gICAgSUhJOiAtMTk2NSxcbiAgICBLS0g6IDcwMyxcbiAgICBPSUk6IC0yNjQ5LFxuICB9XG4gIHRoaXMuVEMzX18gPSB7XG4gICAgQUFBOiAtMjk0LFxuICAgIEhISDogMzQ2LFxuICAgIEhISTogLTM0MSxcbiAgICBISUk6IC0xMDg4LFxuICAgIEhJSzogNzMxLFxuICAgIEhPSDogLTE0ODYsXG4gICAgSUhIOiAxMjgsXG4gICAgSUhJOiAtMzA0MSxcbiAgICBJSE86IC0xOTM1LFxuICAgIElJSDogLTgyNSxcbiAgICBJSU06IC0xMDM1LFxuICAgIElPSTogLTU0MixcbiAgICBLSEg6IC0xMjE2LFxuICAgIEtLQTogNDkxLFxuICAgIEtLSDogLTEyMTcsXG4gICAgS09LOiAtMTAwOSxcbiAgICBNSEg6IC0yNjk0LFxuICAgIE1ITTogLTQ1NyxcbiAgICBNSE86IDEyMyxcbiAgICBNTUg6IC00NzEsXG4gICAgTk5IOiAtMTY4OSxcbiAgICBOTk86IDY2MixcbiAgICBPSE86IC0zMzkzLFxuICB9XG4gIHRoaXMuVEM0X18gPSB7XG4gICAgSEhIOiAtMjAzLFxuICAgIEhISTogMTM0NCxcbiAgICBISEs6IDM2NSxcbiAgICBISE06IC0xMjIsXG4gICAgSEhOOiAxODIsXG4gICAgSEhPOiA2NjksXG4gICAgSElIOiA4MDQsXG4gICAgSElJOiA2NzksXG4gICAgSE9IOiA0NDYsXG4gICAgSUhIOiA2OTUsXG4gICAgSUhPOiAtMjMyNCxcbiAgICBJSUg6IDMyMSxcbiAgICBJSUk6IDE0OTcsXG4gICAgSUlPOiA2NTYsXG4gICAgSU9POiA1NCxcbiAgICBLQUs6IDQ4NDUsXG4gICAgS0tBOiAzMzg2LFxuICAgIEtLSzogMzA2NSxcbiAgICBNSEg6IC00MDUsXG4gICAgTUhJOiAyMDEsXG4gICAgTU1IOiAtMjQxLFxuICAgIE1NTTogNjYxLFxuICAgIE1PTTogODQxLFxuICB9XG4gIHRoaXMuVFExX18gPSB7XG4gICAgQkhISDogLTIyNyxcbiAgICBCSEhJOiAzMTYsXG4gICAgQkhJSDogLTEzMixcbiAgICBCSUhIOiA2MCxcbiAgICBCSUlJOiAxNTk1LFxuICAgIEJOSEg6IC03NDQsXG4gICAgQk9ISDogMjI1LFxuICAgIEJPT086IC05MDgsXG4gICAgT0FLSzogNDgyLFxuICAgIE9ISEg6IDI4MSxcbiAgICBPSElIOiAyNDksXG4gICAgT0lISTogMjAwLFxuICAgIE9JSUg6IC02OCxcbiAgfVxuICB0aGlzLlRRMl9fID0geyBCSUhIOiAtMTQwMSwgQklJSTogLTEwMzMsIEJLQUs6IC01NDMsIEJPT086IC01NTkxIH1cbiAgdGhpcy5UUTNfXyA9IHtcbiAgICBCSEhIOiA0NzgsXG4gICAgQkhITTogLTEwNzMsXG4gICAgQkhJSDogMjIyLFxuICAgIEJISUk6IC01MDQsXG4gICAgQklJSDogLTExNixcbiAgICBCSUlJOiAtMTA1LFxuICAgIEJNSEk6IC04NjMsXG4gICAgQk1ITTogLTQ2NCxcbiAgICBCT01IOiA2MjAsXG4gICAgT0hISDogMzQ2LFxuICAgIE9ISEk6IDE3MjksXG4gICAgT0hJSTogOTk3LFxuICAgIE9ITUg6IDQ4MSxcbiAgICBPSUhIOiA2MjMsXG4gICAgT0lJSDogMTM0NCxcbiAgICBPS0FLOiAyNzkyLFxuICAgIE9LSEg6IDU4NyxcbiAgICBPS0tBOiA2NzksXG4gICAgT09ISDogMTEwLFxuICAgIE9PSUk6IC02ODUsXG4gIH1cbiAgdGhpcy5UUTRfXyA9IHtcbiAgICBCSEhIOiAtNzIxLFxuICAgIEJISE06IC0zNjA0LFxuICAgIEJISUk6IC05NjYsXG4gICAgQklJSDogLTYwNyxcbiAgICBCSUlJOiAtMjE4MSxcbiAgICBPQUFBOiAtMjc2MyxcbiAgICBPQUtLOiAxODAsXG4gICAgT0hISDogLTI5NCxcbiAgICBPSEhJOiAyNDQ2LFxuICAgIE9ISE86IDQ4MCxcbiAgICBPSElIOiAtMTU3MyxcbiAgICBPSUhIOiAxOTM1LFxuICAgIE9JSEk6IC00OTMsXG4gICAgT0lJSDogNjI2LFxuICAgIE9JSUk6IC00MDA3LFxuICAgIE9LQUs6IC04MTU2LFxuICB9XG4gIHRoaXMuVFcxX18gPSB7IOOBq+OBpOOBhDogLTQ2ODEsIOadseS6rOmDvTogMjAyNiB9XG4gIHRoaXMuVFcyX18gPSB7XG4gICAg44GC44KL56iLOiAtMjA0OSxcbiAgICDjgYTjgaPjgZ86IC0xMjU2LFxuICAgIOOBk+OCjeOBjDogLTI0MzQsXG4gICAg44GX44KH44GGOiAzODczLFxuICAgIOOBneOBruW+jDogLTQ0MzAsXG4gICAg44Gg44Gj44GmOiAtMTA0OSxcbiAgICDjgabjgYTjgZ86IDE4MzMsXG4gICAg44Go44GX44GmOiAtNDY1NyxcbiAgICDjgajjgoLjgas6IC00NTE3LFxuICAgIOOCguOBruOBpzogMTg4MixcbiAgICDkuIDmsJfjgas6IC03OTIsXG4gICAg5Yid44KB44GmOiAtMTUxMixcbiAgICDlkIzmmYLjgas6IC04MDk3LFxuICAgIOWkp+OBjeOBqjogLTEyNTUsXG4gICAg5a++44GX44GmOiAtMjcyMSxcbiAgICDnpL7kvJrlhZo6IC0zMjE2LFxuICB9XG4gIHRoaXMuVFczX18gPSB7XG4gICAg44GE44Gf44GgOiAtMTczNCxcbiAgICDjgZfjgabjgYQ6IDEzMTQsXG4gICAg44Go44GX44GmOiAtNDMxNCxcbiAgICDjgavjgaTjgYQ6IC01NDgzLFxuICAgIOOBq+OBqOOBozogLTU5ODksXG4gICAg44Gr5b2T44GfOiAtNjI0NyxcbiAgICAn44Gu44GnLCc6IC03MjcsXG4gICAgJ+OBruOBp+OAgSc6IC03MjcsXG4gICAg44Gu44KC44GuOiAtNjAwLFxuICAgIOOCjOOBi+OCiTogLTM3NTIsXG4gICAg5Y2B5LqM5pyIOiAtMjI4NyxcbiAgfVxuICB0aGlzLlRXNF9fID0ge1xuICAgICfjgYTjgYYuJzogODU3NixcbiAgICAn44GE44GG44CCJzogODU3NixcbiAgICDjgYvjgonjgao6IC0yMzQ4LFxuICAgIOOBl+OBpuOBhDogMjk1OCxcbiAgICAn44Gf44GMLCc6IDE1MTYsXG4gICAgJ+OBn+OBjOOAgSc6IDE1MTYsXG4gICAg44Gm44GE44KLOiAxNTM4LFxuICAgIOOBqOOBhOOBhjogMTM0OSxcbiAgICDjgb7jgZfjgZ86IDU1NDMsXG4gICAg44G+44Gb44KTOiAxMDk3LFxuICAgIOOCiOOBhuOBqDogLTQyNTgsXG4gICAg44KI44KL44GoOiA1ODY1LFxuICB9XG4gIHRoaXMuVUMxX18gPSB7IEE6IDQ4NCwgSzogOTMsIE06IDY0NSwgTzogLTUwNSB9XG4gIHRoaXMuVUMyX18gPSB7IEE6IDgxOSwgSDogMTA1OSwgSTogNDA5LCBNOiAzOTg3LCBOOiA1Nzc1LCBPOiA2NDYgfVxuICB0aGlzLlVDM19fID0geyBBOiAtMTM3MCwgSTogMjMxMSB9XG4gIHRoaXMuVUM0X18gPSB7XG4gICAgQTogLTI2NDMsXG4gICAgSDogMTgwOSxcbiAgICBJOiAtMTAzMixcbiAgICBLOiAtMzQ1MCxcbiAgICBNOiAzNTY1LFxuICAgIE46IDM4NzYsXG4gICAgTzogNjY0NixcbiAgfVxuICB0aGlzLlVDNV9fID0geyBIOiAzMTMsIEk6IC0xMjM4LCBLOiAtNzk5LCBNOiA1MzksIE86IC04MzEgfVxuICB0aGlzLlVDNl9fID0geyBIOiAtNTA2LCBJOiAtMjUzLCBLOiA4NywgTTogMjQ3LCBPOiAtMzg3IH1cbiAgdGhpcy5VUDFfXyA9IHsgTzogLTIxNCB9XG4gIHRoaXMuVVAyX18gPSB7IEI6IDY5LCBPOiA5MzUgfVxuICB0aGlzLlVQM19fID0geyBCOiAxODkgfVxuICB0aGlzLlVRMV9fID0ge1xuICAgIEJIOiAyMSxcbiAgICBCSTogLTEyLFxuICAgIEJLOiAtOTksXG4gICAgQk46IDE0MixcbiAgICBCTzogLTU2LFxuICAgIE9IOiAtOTUsXG4gICAgT0k6IDQ3NyxcbiAgICBPSzogNDEwLFxuICAgIE9POiAtMjQyMixcbiAgfVxuICB0aGlzLlVRMl9fID0geyBCSDogMjE2LCBCSTogMTEzLCBPSzogMTc1OSB9XG4gIHRoaXMuVVEzX18gPSB7XG4gICAgQkE6IC00NzksXG4gICAgQkg6IDQyLFxuICAgIEJJOiAxOTEzLFxuICAgIEJLOiAtNzE5OCxcbiAgICBCTTogMzE2MCxcbiAgICBCTjogNjQyNyxcbiAgICBCTzogMTQ3NjEsXG4gICAgT0k6IC04MjcsXG4gICAgT046IC0zMjEyLFxuICB9XG4gIHRoaXMuVVcxX18gPSB7XG4gICAgJywnOiAxNTYsXG4gICAgJ+OAgSc6IDE1NixcbiAgICAn44CMJzogLTQ2MyxcbiAgICDjgYI6IC05NDEsXG4gICAg44GGOiAtMTI3LFxuICAgIOOBjDogLTU1MyxcbiAgICDjgY06IDEyMSxcbiAgICDjgZM6IDUwNSxcbiAgICDjgac6IC0yMDEsXG4gICAg44GoOiAtNTQ3LFxuICAgIOOBqTogLTEyMyxcbiAgICDjgas6IC03ODksXG4gICAg44GuOiAtMTg1LFxuICAgIOOBrzogLTg0NyxcbiAgICDjgoI6IC00NjYsXG4gICAg44KEOiAtNDcwLFxuICAgIOOCiDogMTgyLFxuICAgIOOCiTogLTI5MixcbiAgICDjgoo6IDIwOCxcbiAgICDjgow6IDE2OSxcbiAgICDjgpI6IC00NDYsXG4gICAg44KTOiAtMTM3LFxuICAgICfjg7snOiAtMTM1LFxuICAgIOS4uzogLTQwMixcbiAgICDkuqw6IC0yNjgsXG4gICAg5Yy6OiAtOTEyLFxuICAgIOWNiDogODcxLFxuICAgIOWbvTogLTQ2MCxcbiAgICDlpKc6IDU2MSxcbiAgICDlp5Q6IDcyOSxcbiAgICDluII6IC00MTEsXG4gICAg5pelOiAtMTQxLFxuICAgIOeQhjogMzYxLFxuICAgIOeUnzogLTQwOCxcbiAgICDnnIw6IC0zODYsXG4gICAg6YO9OiAtNzE4LFxuICAgICfvvaInOiAtNDYzLFxuICAgICfvvaUnOiAtMTM1LFxuICB9XG4gIHRoaXMuVVcyX18gPSB7XG4gICAgJywnOiAtODI5LFxuICAgICfjgIEnOiAtODI5LFxuICAgIOOAhzogODkyLFxuICAgICfjgIwnOiAtNjQ1LFxuICAgICfjgI0nOiAzMTQ1LFxuICAgIOOBgjogLTUzOCxcbiAgICDjgYQ6IDUwNSxcbiAgICDjgYY6IDEzNCxcbiAgICDjgYo6IC01MDIsXG4gICAg44GLOiAxNDU0LFxuICAgIOOBjDogLTg1NixcbiAgICDjgY86IC00MTIsXG4gICAg44GTOiAxMTQxLFxuICAgIOOBlTogODc4LFxuICAgIOOBljogNTQwLFxuICAgIOOBlzogMTUyOSxcbiAgICDjgZk6IC02NzUsXG4gICAg44GbOiAzMDAsXG4gICAg44GdOiAtMTAxMSxcbiAgICDjgZ86IDE4OCxcbiAgICDjgaA6IDE4MzcsXG4gICAg44GkOiAtOTQ5LFxuICAgIOOBpjogLTI5MSxcbiAgICDjgac6IC0yNjgsXG4gICAg44GoOiAtOTgxLFxuICAgIOOBqTogMTI3MyxcbiAgICDjgao6IDEwNjMsXG4gICAg44GrOiAtMTc2NCxcbiAgICDjga46IDEzMCxcbiAgICDjga86IC00MDksXG4gICAg44GyOiAtMTI3MyxcbiAgICDjgbk6IDEyNjEsXG4gICAg44G+OiA2MDAsXG4gICAg44KCOiAtMTI2MyxcbiAgICDjgoQ6IC00MDIsXG4gICAg44KIOiAxNjM5LFxuICAgIOOCijogLTU3OSxcbiAgICDjgos6IC02OTQsXG4gICAg44KMOiA1NzEsXG4gICAg44KSOiAtMjUxNixcbiAgICDjgpM6IDIwOTUsXG4gICAg44KiOiAtNTg3LFxuICAgIOOCqzogMzA2LFxuICAgIOOCrTogNTY4LFxuICAgIOODgzogODMxLFxuICAgIOS4iTogLTc1OCxcbiAgICDkuI06IC0yMTUwLFxuICAgIOS4ljogLTMwMixcbiAgICDkuK06IC05NjgsXG4gICAg5Li7OiAtODYxLFxuICAgIOS6izogNDkyLFxuICAgIOS6ujogLTEyMyxcbiAgICDkvJo6IDk3OCxcbiAgICDkv506IDM2MixcbiAgICDlhaU6IDU0OCxcbiAgICDliJ06IC0zMDI1LFxuICAgIOWJrzogLTE1NjYsXG4gICAg5YyXOiAtMzQxNCxcbiAgICDljLo6IC00MjIsXG4gICAg5aSnOiAtMTc2OSxcbiAgICDlpKk6IC04NjUsXG4gICAg5aSqOiAtNDgzLFxuICAgIOWtkDogLTE1MTksXG4gICAg5a2mOiA3NjAsXG4gICAg5a6fOiAxMDIzLFxuICAgIOWwjzogLTIwMDksXG4gICAg5biCOiAtODEzLFxuICAgIOW5tDogLTEwNjAsXG4gICAg5by3OiAxMDY3LFxuICAgIOaJizogLTE1MTksXG4gICAg5o+6OiAtMTAzMyxcbiAgICDmlL86IDE1MjIsXG4gICAg5paHOiAtMTM1NSxcbiAgICDmlrA6IC0xNjgyLFxuICAgIOaXpTogLTE4MTUsXG4gICAg5piOOiAtMTQ2MixcbiAgICDmnIA6IC02MzAsXG4gICAg5pydOiAtMTg0MyxcbiAgICDmnKw6IC0xNjUwLFxuICAgIOadsTogLTkzMSxcbiAgICDmnpw6IC02NjUsXG4gICAg5qyhOiAtMjM3OCxcbiAgICDmsJE6IC0xODAsXG4gICAg5rCXOiAtMTc0MCxcbiAgICDnkIY6IDc1MixcbiAgICDnmbo6IDUyOSxcbiAgICDnm646IC0xNTg0LFxuICAgIOebuDogLTI0MixcbiAgICDnnIw6IC0xMTY1LFxuICAgIOerizogLTc2MyxcbiAgICDnrKw6IDgxMCxcbiAgICDnsbM6IDUwOSxcbiAgICDoh6o6IC0xMzUzLFxuICAgIOihjDogODM4LFxuICAgIOilvzogLTc0NCxcbiAgICDopos6IC0zODc0LFxuICAgIOiqvzogMTAxMCxcbiAgICDorbA6IDExOTgsXG4gICAg6L68OiAzMDQxLFxuICAgIOmWizogMTc1OCxcbiAgICDplpM6IC0xMjU3LFxuICAgICfvvaInOiAtNjQ1LFxuICAgICfvvaMnOiAzMTQ1LFxuICAgIO+9rzogODMxLFxuICAgIO+9sTogLTU4NyxcbiAgICDvvbY6IDMwNixcbiAgICDvvbc6IDU2OCxcbiAgfVxuICB0aGlzLlVXM19fID0ge1xuICAgICcsJzogNDg4OSxcbiAgICAxOiAtODAwLFxuICAgICfiiJInOiAtMTcyMyxcbiAgICAn44CBJzogNDg4OSxcbiAgICDjgIU6IC0yMzExLFxuICAgIOOAhzogNTgyNyxcbiAgICAn44CNJzogMjY3MCxcbiAgICAn44CTJzogLTM1NzMsXG4gICAg44GCOiAtMjY5NixcbiAgICDjgYQ6IDEwMDYsXG4gICAg44GGOiAyMzQyLFxuICAgIOOBiDogMTk4MyxcbiAgICDjgYo6IC00ODY0LFxuICAgIOOBizogLTExNjMsXG4gICAg44GMOiAzMjcxLFxuICAgIOOBjzogMTAwNCxcbiAgICDjgZE6IDM4OCxcbiAgICDjgZI6IDQwMSxcbiAgICDjgZM6IC0zNTUyLFxuICAgIOOBlDogLTMxMTYsXG4gICAg44GVOiAtMTA1OCxcbiAgICDjgZc6IC0zOTUsXG4gICAg44GZOiA1ODQsXG4gICAg44GbOiAzNjg1LFxuICAgIOOBnTogLTUyMjgsXG4gICAg44GfOiA4NDIsXG4gICAg44GhOiAtNTIxLFxuICAgIOOBozogLTE0NDQsXG4gICAg44GkOiAtMTA4MSxcbiAgICDjgaY6IDYxNjcsXG4gICAg44GnOiAyMzE4LFxuICAgIOOBqDogMTY5MSxcbiAgICDjgak6IC04OTksXG4gICAg44GqOiAtMjc4OCxcbiAgICDjgas6IDI3NDUsXG4gICAg44GuOiA0MDU2LFxuICAgIOOBrzogNDU1NSxcbiAgICDjgbI6IC0yMTcxLFxuICAgIOOBtTogLTE3OTgsXG4gICAg44G4OiAxMTk5LFxuICAgIOOBuzogLTU1MTYsXG4gICAg44G+OiAtNDM4NCxcbiAgICDjgb86IC0xMjAsXG4gICAg44KBOiAxMjA1LFxuICAgIOOCgjogMjMyMyxcbiAgICDjgoQ6IC03ODgsXG4gICAg44KIOiAtMjAyLFxuICAgIOOCiTogNzI3LFxuICAgIOOCijogNjQ5LFxuICAgIOOCizogNTkwNSxcbiAgICDjgow6IDI3NzMsXG4gICAg44KPOiAtMTIwNyxcbiAgICDjgpI6IDY2MjAsXG4gICAg44KTOiAtNTE4LFxuICAgIOOCojogNTUxLFxuICAgIOOCsDogMTMxOSxcbiAgICDjgrk6IDg3NCxcbiAgICDjg4M6IC0xMzUwLFxuICAgIOODiDogNTIxLFxuICAgIOODoDogMTEwOSxcbiAgICDjg6s6IDE1OTEsXG4gICAg44OtOiAyMjAxLFxuICAgIOODszogMjc4LFxuICAgICfjg7snOiAtMzc5NCxcbiAgICDkuIA6IC0xNjE5LFxuICAgIOS4izogLTE3NTksXG4gICAg5LiWOiAtMjA4NyxcbiAgICDkuKE6IDM4MTUsXG4gICAg5LitOiA2NTMsXG4gICAg5Li7OiAtNzU4LFxuICAgIOS6iDogLTExOTMsXG4gICAg5LqMOiA5NzQsXG4gICAg5Lq6OiAyNzQyLFxuICAgIOS7ijogNzkyLFxuICAgIOS7ljogMTg4OSxcbiAgICDku6U6IC0xMzY4LFxuICAgIOS9jjogODExLFxuICAgIOS9lTogNDI2NSxcbiAgICDkvZw6IC0zNjEsXG4gICAg5L+dOiAtMjQzOSxcbiAgICDlhYM6IDQ4NTgsXG4gICAg5YWaOiAzNTkzLFxuICAgIOWFqDogMTU3NCxcbiAgICDlhaw6IC0zMDMwLFxuICAgIOWFrTogNzU1LFxuICAgIOWFsTogLTE4ODAsXG4gICAg5YaGOiA1ODA3LFxuICAgIOWGjTogMzA5NSxcbiAgICDliIY6IDQ1NyxcbiAgICDliJ06IDI0NzUsXG4gICAg5YilOiAxMTI5LFxuICAgIOWJjTogMjI4NixcbiAgICDlia86IDQ0MzcsXG4gICAg5YqbOiAzNjUsXG4gICAg5YuVOiAtOTQ5LFxuICAgIOWLmTogLTE4NzIsXG4gICAg5YyWOiAxMzI3LFxuICAgIOWMlzogLTEwMzgsXG4gICAg5Yy6OiA0NjQ2LFxuICAgIOWNgzogLTIzMDksXG4gICAg5Y2IOiAtNzgzLFxuICAgIOWNlDogLTEwMDYsXG4gICAg5Y+jOiA0ODMsXG4gICAg5Y+zOiAxMjMzLFxuICAgIOWQhDogMzU4OCxcbiAgICDlkIg6IC0yNDEsXG4gICAg5ZCMOiAzOTA2LFxuICAgIOWSjDogLTgzNyxcbiAgICDlk6E6IDQ1MTMsXG4gICAg5Zu9OiA2NDIsXG4gICAg5Z6LOiAxMzg5LFxuICAgIOWgtDogMTIxOSxcbiAgICDlpJY6IC0yNDEsXG4gICAg5aa7OiAyMDE2LFxuICAgIOWtpjogLTEzNTYsXG4gICAg5a6JOiAtNDIzLFxuICAgIOWunzogLTEwMDgsXG4gICAg5a62OiAxMDc4LFxuICAgIOWwjzogLTUxMyxcbiAgICDlsJE6IC0zMTAyLFxuICAgIOW3njogMTE1NSxcbiAgICDluII6IDMxOTcsXG4gICAg5bmzOiAtMTgwNCxcbiAgICDlubQ6IDI0MTYsXG4gICAg5bqDOiAtMTAzMCxcbiAgICDlupw6IDE2MDUsXG4gICAg5bqmOiAxNDUyLFxuICAgIOW7ujogLTIzNTIsXG4gICAg5b2TOiAtMzg4NSxcbiAgICDlvpc6IDE5MDUsXG4gICAg5oCdOiAtMTI5MSxcbiAgICDmgKc6IDE4MjIsXG4gICAg5oi4OiAtNDg4LFxuICAgIOaMhzogLTM5NzMsXG4gICAg5pS/OiAtMjAxMyxcbiAgICDmlZk6IC0xNDc5LFxuICAgIOaVsDogMzIyMixcbiAgICDmloc6IC0xNDg5LFxuICAgIOaWsDogMTc2NCxcbiAgICDml6U6IDIwOTksXG4gICAg5penOiA1NzkyLFxuICAgIOaYqDogLTY2MSxcbiAgICDmmYI6IC0xMjQ4LFxuICAgIOabnDogLTk1MSxcbiAgICDmnIA6IC05MzcsXG4gICAg5pyIOiA0MTI1LFxuICAgIOacnzogMzYwLFxuICAgIOadjjogMzA5NCxcbiAgICDmnZE6IDM2NCxcbiAgICDmnbE6IC04MDUsXG4gICAg5qC4OiA1MTU2LFxuICAgIOajrjogMjQzOCxcbiAgICDmpa06IDQ4NCxcbiAgICDmsI86IDI2MTMsXG4gICAg5rCROiAtMTY5NCxcbiAgICDmsbo6IC0xMDczLFxuICAgIOazlTogMTg2OCxcbiAgICDmtbc6IC00OTUsXG4gICAg54ShOiA5NzksXG4gICAg54mpOiA0NjEsXG4gICAg54m5OiAtMzg1MCxcbiAgICDnlJ86IC0yNzMsXG4gICAg55SoOiA5MTQsXG4gICAg55S6OiAxMjE1LFxuICAgIOeahDogNzMxMyxcbiAgICDnm7Q6IC0xODM1LFxuICAgIOecgTogNzkyLFxuICAgIOecjDogNjI5MyxcbiAgICDnn6U6IC0xNTI4LFxuICAgIOengTogNDIzMSxcbiAgICDnqI46IDQwMSxcbiAgICDnq4s6IC05NjAsXG4gICAg56ysOiAxMjAxLFxuICAgIOexszogNzc2NyxcbiAgICDns7s6IDMwNjYsXG4gICAg57SEOiAzNjYzLFxuICAgIOe0mjogMTM4NCxcbiAgICDntbE6IC00MjI5LFxuICAgIOe3jzogMTE2MyxcbiAgICDnt5o6IDEyNTUsXG4gICAg6ICFOiA2NDU3LFxuICAgIOiDvTogNzI1LFxuICAgIOiHqjogLTI4NjksXG4gICAg6IuxOiA3ODUsXG4gICAg6KaLOiAxMDQ0LFxuICAgIOiqvzogLTU2MixcbiAgICDosqE6IC03MzMsXG4gICAg6LK7OiAxNzc3LFxuICAgIOi7ijogMTgzNSxcbiAgICDou406IDEzNzUsXG4gICAg6L68OiAtMTUwNCxcbiAgICDpgJo6IC0xMTM2LFxuICAgIOmBuDogLTY4MSxcbiAgICDpg446IDEwMjYsXG4gICAg6YOhOiA0NDA0LFxuICAgIOmDqDogMTIwMCxcbiAgICDph5E6IDIxNjMsXG4gICAg6ZW3OiA0MjEsXG4gICAg6ZaLOiAtMTQzMixcbiAgICDplpM6IDEzMDIsXG4gICAg6ZaiOiAtMTI4MixcbiAgICDpm6g6IDIwMDksXG4gICAg6Zu7OiAtMTA0NSxcbiAgICDpnZ46IDIwNjYsXG4gICAg6aeFOiAxNjIwLFxuICAgICfvvJEnOiAtODAwLFxuICAgICfvvaMnOiAyNjcwLFxuICAgICfvvaUnOiAtMzc5NCxcbiAgICDvva86IC0xMzUwLFxuICAgIO+9sTogNTUxLFxuICAgIO+9uO++njogMTMxOSxcbiAgICDvvb06IDg3NCxcbiAgICDvvoQ6IDUyMSxcbiAgICDvvpE6IDExMDksXG4gICAg776ZOiAxNTkxLFxuICAgIO++mzogMjIwMSxcbiAgICDvvp06IDI3OCxcbiAgfVxuICB0aGlzLlVXNF9fID0ge1xuICAgICcsJzogMzkzMCxcbiAgICAnLic6IDM1MDgsXG4gICAgJ+KAlSc6IC00ODQxLFxuICAgICfjgIEnOiAzOTMwLFxuICAgICfjgIInOiAzNTA4LFxuICAgIOOAhzogNDk5OSxcbiAgICAn44CMJzogMTg5NSxcbiAgICAn44CNJzogMzc5OCxcbiAgICAn44CTJzogLTUxNTYsXG4gICAg44GCOiA0NzUyLFxuICAgIOOBhDogLTM0MzUsXG4gICAg44GGOiAtNjQwLFxuICAgIOOBiDogLTI1MTQsXG4gICAg44GKOiAyNDA1LFxuICAgIOOBizogNTMwLFxuICAgIOOBjDogNjAwNixcbiAgICDjgY06IC00NDgyLFxuICAgIOOBjjogLTM4MjEsXG4gICAg44GPOiAtMzc4OCxcbiAgICDjgZE6IC00Mzc2LFxuICAgIOOBkjogLTQ3MzQsXG4gICAg44GTOiAyMjU1LFxuICAgIOOBlDogMTk3OSxcbiAgICDjgZU6IDI4NjQsXG4gICAg44GXOiAtODQzLFxuICAgIOOBmDogLTI1MDYsXG4gICAg44GZOiAtNzMxLFxuICAgIOOBmjogMTI1MSxcbiAgICDjgZs6IDE4MSxcbiAgICDjgZ06IDQwOTEsXG4gICAg44GfOiA1MDM0LFxuICAgIOOBoDogNTQwOCxcbiAgICDjgaE6IC0zNjU0LFxuICAgIOOBozogLTU4ODIsXG4gICAg44GkOiAtMTY1OSxcbiAgICDjgaY6IDM5OTQsXG4gICAg44GnOiA3NDEwLFxuICAgIOOBqDogNDU0NyxcbiAgICDjgao6IDU0MzMsXG4gICAg44GrOiA2NDk5LFxuICAgIOOBrDogMTg1MyxcbiAgICDjga06IDE0MTMsXG4gICAg44GuOiA3Mzk2LFxuICAgIOOBrzogODU3OCxcbiAgICDjgbA6IDE5NDAsXG4gICAg44GyOiA0MjQ5LFxuICAgIOOBszogLTQxMzQsXG4gICAg44G1OiAxMzQ1LFxuICAgIOOBuDogNjY2NSxcbiAgICDjgbk6IC03NDQsXG4gICAg44G7OiAxNDY0LFxuICAgIOOBvjogMTA1MSxcbiAgICDjgb86IC0yMDgyLFxuICAgIOOCgDogLTg4MixcbiAgICDjgoE6IC01MDQ2LFxuICAgIOOCgjogNDE2OSxcbiAgICDjgoM6IC0yNjY2LFxuICAgIOOChDogMjc5NSxcbiAgICDjgoc6IC0xNTQ0LFxuICAgIOOCiDogMzM1MSxcbiAgICDjgok6IC0yOTIyLFxuICAgIOOCijogLTk3MjYsXG4gICAg44KLOiAtMTQ4OTYsXG4gICAg44KMOiAtMjYxMyxcbiAgICDjgo06IC00NTcwLFxuICAgIOOCjzogLTE3ODMsXG4gICAg44KSOiAxMzE1MCxcbiAgICDjgpM6IC0yMzUyLFxuICAgIOOCqzogMjE0NSxcbiAgICDjgrM6IDE3ODksXG4gICAg44K7OiAxMjg3LFxuICAgIOODgzogLTcyNCxcbiAgICDjg4g6IC00MDMsXG4gICAg44OhOiAtMTYzNSxcbiAgICDjg6k6IC04ODEsXG4gICAg44OqOiAtNTQxLFxuICAgIOODqzogLTg1NixcbiAgICDjg7M6IC0zNjM3LFxuICAgICfjg7snOiAtNDM3MSxcbiAgICDjg7w6IC0xMTg3MCxcbiAgICDkuIA6IC0yMDY5LFxuICAgIOS4rTogMjIxMCxcbiAgICDkuog6IDc4MixcbiAgICDkuos6IC0xOTAsXG4gICAg5LqVOiAtMTc2OCxcbiAgICDkuro6IDEwMzYsXG4gICAg5LulOiA1NDQsXG4gICAg5LyaOiA5NTAsXG4gICAg5L2TOiAtMTI4NixcbiAgICDkvZw6IDUzMCxcbiAgICDlgbQ6IDQyOTIsXG4gICAg5YWIOiA2MDEsXG4gICAg5YWaOiAtMjAwNixcbiAgICDlhbE6IC0xMjEyLFxuICAgIOWGhTogNTg0LFxuICAgIOWGhjogNzg4LFxuICAgIOWInTogMTM0NyxcbiAgICDliY06IDE2MjMsXG4gICAg5YmvOiAzODc5LFxuICAgIOWKmzogLTMwMixcbiAgICDli5U6IC03NDAsXG4gICAg5YuZOiAtMjcxNSxcbiAgICDljJY6IDc3NixcbiAgICDljLo6IDQ1MTcsXG4gICAg5Y2UOiAxMDEzLFxuICAgIOWPgjogMTU1NSxcbiAgICDlkIg6IC0xODM0LFxuICAgIOWSjDogLTY4MSxcbiAgICDlk6E6IC05MTAsXG4gICAg5ZmoOiAtODUxLFxuICAgIOWbnjogMTUwMCxcbiAgICDlm706IC02MTksXG4gICAg5ZySOiAtMTIwMCxcbiAgICDlnLA6IDg2NixcbiAgICDloLQ6IC0xNDEwLFxuICAgIOWhgTogLTIwOTQsXG4gICAg5aOrOiAtMTQxMyxcbiAgICDlpJo6IDEwNjcsXG4gICAg5aSnOiA1NzEsXG4gICAg5a2QOiAtNDgwMixcbiAgICDlraY6IC0xMzk3LFxuICAgIOWumjogLTEwNTcsXG4gICAg5a+6OiAtODA5LFxuICAgIOWwjzogMTkxMCxcbiAgICDlsYs6IC0xMzI4LFxuICAgIOWxsTogLTE1MDAsXG4gICAg5bO2OiAtMjA1NixcbiAgICDlt506IC0yNjY3LFxuICAgIOW4gjogMjc3MSxcbiAgICDlubQ6IDM3NCxcbiAgICDluoE6IC00NTU2LFxuICAgIOW+jDogNDU2LFxuICAgIOaApzogNTUzLFxuICAgIOaEnzogOTE2LFxuICAgIOaJgDogLTE1NjYsXG4gICAg5pSvOiA4NTYsXG4gICAg5pS5OiA3ODcsXG4gICAg5pS/OiAyMTgyLFxuICAgIOaVmTogNzA0LFxuICAgIOaWhzogNTIyLFxuICAgIOaWuTogLTg1NixcbiAgICDml6U6IDE3OTgsXG4gICAg5pmCOiAxODI5LFxuICAgIOacgDogODQ1LFxuICAgIOaciDogLTkwNjYsXG4gICAg5pyoOiAtNDg1LFxuICAgIOadpTogLTQ0MixcbiAgICDmoKE6IC0zNjAsXG4gICAg5qWtOiAtMTA0MyxcbiAgICDmsI86IDUzODgsXG4gICAg5rCROiAtMjcxNixcbiAgICDmsJc6IC05MTAsXG4gICAg5rKiOiAtOTM5LFxuICAgIOa4iDogLTU0MyxcbiAgICDniak6IC03MzUsXG4gICAg546HOiA2NzIsXG4gICAg55CDOiAtMTI2NyxcbiAgICDnlJ86IC0xMjg2LFxuICAgIOeUozogLTExMDEsXG4gICAg55SwOiAtMjkwMCxcbiAgICDnlLo6IDE4MjYsXG4gICAg55qEOiAyNTg2LFxuICAgIOebrjogOTIyLFxuICAgIOecgTogLTM0ODUsXG4gICAg55yMOiAyOTk3LFxuICAgIOepujogLTg2NyxcbiAgICDnq4s6IC0yMTEyLFxuICAgIOesrDogNzg4LFxuICAgIOexszogMjkzNyxcbiAgICDns7s6IDc4NixcbiAgICDntIQ6IDIxNzEsXG4gICAg57WMOiAxMTQ2LFxuICAgIOe1sTogLTExNjksXG4gICAg57ePOiA5NDAsXG4gICAg57eaOiAtOTk0LFxuICAgIOe9sjogNzQ5LFxuICAgIOiAhTogMjE0NSxcbiAgICDog706IC03MzAsXG4gICAg6IisOiAtODUyLFxuICAgIOihjDogLTc5MixcbiAgICDopo86IDc5MixcbiAgICDoraY6IC0xMTg0LFxuICAgIOitsDogLTI0NCxcbiAgICDosLc6IC0xMDAwLFxuICAgIOiznjogNzMwLFxuICAgIOi7ijogLTE0ODEsXG4gICAg6LuNOiAxMTU4LFxuICAgIOi8qjogLTE0MzMsXG4gICAg6L68OiAtMzM3MCxcbiAgICDov5E6IDkyOSxcbiAgICDpgZM6IC0xMjkxLFxuICAgIOmBuDogMjU5NixcbiAgICDpg446IC00ODY2LFxuICAgIOmDvTogMTE5MixcbiAgICDph446IC0xMTAwLFxuICAgIOmKgDogLTIyMTMsXG4gICAg6ZW3OiAzNTcsXG4gICAg6ZaTOiAtMjM0NCxcbiAgICDpmaI6IC0yMjk3LFxuICAgIOmamzogLTI2MDQsXG4gICAg6Zu7OiAtODc4LFxuICAgIOmgmDogLTE2NTksXG4gICAg6aGMOiAtNzkyLFxuICAgIOmkqDogLTE5ODQsXG4gICAg6aaWOiAxNzQ5LFxuICAgIOmrmDogMjEyMCxcbiAgICAn772iJzogMTg5NSxcbiAgICAn772jJzogMzc5OCxcbiAgICAn772lJzogLTQzNzEsXG4gICAg772vOiAtNzI0LFxuICAgIO+9sDogLTExODcwLFxuICAgIO+9tjogMjE0NSxcbiAgICDvvbo6IDE3ODksXG4gICAg772+OiAxMjg3LFxuICAgIO++hDogLTQwMyxcbiAgICDvvpI6IC0xNjM1LFxuICAgIO++lzogLTg4MSxcbiAgICDvvpg6IC01NDEsXG4gICAg776ZOiAtODU2LFxuICAgIO++nTogLTM2MzcsXG4gIH1cbiAgdGhpcy5VVzVfXyA9IHtcbiAgICAnLCc6IDQ2NSxcbiAgICAnLic6IC0yOTksXG4gICAgMTogLTUxNCxcbiAgICBFMjogLTMyNzY4LFxuICAgICddJzogLTI3NjIsXG4gICAgJ+OAgSc6IDQ2NSxcbiAgICAn44CCJzogLTI5OSxcbiAgICAn44CMJzogMzYzLFxuICAgIOOBgjogMTY1NSxcbiAgICDjgYQ6IDMzMSxcbiAgICDjgYY6IC01MDMsXG4gICAg44GIOiAxMTk5LFxuICAgIOOBijogNTI3LFxuICAgIOOBizogNjQ3LFxuICAgIOOBjDogLTQyMSxcbiAgICDjgY06IDE2MjQsXG4gICAg44GOOiAxOTcxLFxuICAgIOOBjzogMzEyLFxuICAgIOOBkjogLTk4MyxcbiAgICDjgZU6IC0xNTM3LFxuICAgIOOBlzogLTEzNzEsXG4gICAg44GZOiAtODUyLFxuICAgIOOBoDogLTExODYsXG4gICAg44GhOiAxMDkzLFxuICAgIOOBozogNTIsXG4gICAg44GkOiA5MjEsXG4gICAg44GmOiAtMTgsXG4gICAg44GnOiAtODUwLFxuICAgIOOBqDogLTEyNyxcbiAgICDjgak6IDE2ODIsXG4gICAg44GqOiAtNzg3LFxuICAgIOOBqzogLTEyMjQsXG4gICAg44GuOiAtNjM1LFxuICAgIOOBrzogLTU3OCxcbiAgICDjgbk6IDEwMDEsXG4gICAg44G/OiA1MDIsXG4gICAg44KBOiA4NjUsXG4gICAg44KDOiAzMzUwLFxuICAgIOOChzogODU0LFxuICAgIOOCijogLTIwOCxcbiAgICDjgos6IDQyOSxcbiAgICDjgow6IDUwNCxcbiAgICDjgo86IDQxOSxcbiAgICDjgpI6IC0xMjY0LFxuICAgIOOCkzogMzI3LFxuICAgIOOCpDogMjQxLFxuICAgIOODqzogNDUxLFxuICAgIOODszogLTM0MyxcbiAgICDkuK06IC04NzEsXG4gICAg5LqsOiA3MjIsXG4gICAg5LyaOiAtMTE1MyxcbiAgICDlhZo6IC02NTQsXG4gICAg5YuZOiAzNTE5LFxuICAgIOWMujogLTkwMSxcbiAgICDlkYo6IDg0OCxcbiAgICDlk6E6IDIxMDQsXG4gICAg5aSnOiAtMTI5NixcbiAgICDlraY6IC01NDgsXG4gICAg5a6aOiAxNzg1LFxuICAgIOW1kDogLTEzMDQsXG4gICAg5biCOiAtMjk5MSxcbiAgICDluK06IDkyMSxcbiAgICDlubQ6IDE3NjMsXG4gICAg5oCdOiA4NzIsXG4gICAg5omAOiAtODE0LFxuICAgIOaMmTogMTYxOCxcbiAgICDmlrA6IC0xNjgyLFxuICAgIOaXpTogMjE4LFxuICAgIOaciDogLTQzNTMsXG4gICAg5p+7OiA5MzIsXG4gICAg5qC8OiAxMzU2LFxuICAgIOapnzogLTE1MDgsXG4gICAg5rCPOiAtMTM0NyxcbiAgICDnlLA6IDI0MCxcbiAgICDnlLo6IC0zOTEyLFxuICAgIOeahDogLTMxNDksXG4gICAg55u4OiAxMzE5LFxuICAgIOecgTogLTEwNTIsXG4gICAg55yMOiAtNDAwMyxcbiAgICDnoJQ6IC05OTcsXG4gICAg56S+OiAtMjc4LFxuICAgIOepujogLTgxMyxcbiAgICDntbE6IDE5NTUsXG4gICAg6ICFOiAtMjIzMyxcbiAgICDooag6IDY2MyxcbiAgICDoqp46IC0xMDczLFxuICAgIOitsDogMTIxOSxcbiAgICDpgbg6IC0xMDE4LFxuICAgIOmDjjogLTM2OCxcbiAgICDplbc6IDc4NixcbiAgICDplpM6IDExOTEsXG4gICAg6aGMOiAyMzY4LFxuICAgIOmkqDogLTY4OSxcbiAgICAn77yRJzogLTUxNCxcbiAgICDvvKXvvJI6IC0zMjc2OCxcbiAgICAn772iJzogMzYzLFxuICAgIO+9sjogMjQxLFxuICAgIO++mTogNDUxLFxuICAgIO++nTogLTM0MyxcbiAgfVxuICB0aGlzLlVXNl9fID0ge1xuICAgICcsJzogMjI3LFxuICAgICcuJzogODA4LFxuICAgIDE6IC0yNzAsXG4gICAgRTE6IDMwNixcbiAgICAn44CBJzogMjI3LFxuICAgICfjgIInOiA4MDgsXG4gICAg44GCOiAtMzA3LFxuICAgIOOBhjogMTg5LFxuICAgIOOBizogMjQxLFxuICAgIOOBjDogLTczLFxuICAgIOOBjzogLTEyMSxcbiAgICDjgZM6IC0yMDAsXG4gICAg44GYOiAxNzgyLFxuICAgIOOBmTogMzgzLFxuICAgIOOBnzogLTQyOCxcbiAgICDjgaM6IDU3MyxcbiAgICDjgaY6IC0xMDE0LFxuICAgIOOBpzogMTAxLFxuICAgIOOBqDogLTEwNSxcbiAgICDjgao6IC0yNTMsXG4gICAg44GrOiAtMTQ5LFxuICAgIOOBrjogLTQxNyxcbiAgICDjga86IC0yMzYsXG4gICAg44KCOiAtMjA2LFxuICAgIOOCijogMTg3LFxuICAgIOOCizogLTEzNSxcbiAgICDjgpI6IDE5NSxcbiAgICDjg6s6IC02NzMsXG4gICAg44OzOiAtNDk2LFxuICAgIOS4gDogLTI3NyxcbiAgICDkuK06IDIwMSxcbiAgICDku7Y6IC04MDAsXG4gICAg5LyaOiA2MjQsXG4gICAg5YmNOiAzMDIsXG4gICAg5Yy6OiAxNzkyLFxuICAgIOWToTogLTEyMTIsXG4gICAg5aeUOiA3OTgsXG4gICAg5a2mOiAtOTYwLFxuICAgIOW4gjogODg3LFxuICAgIOW6gzogLTY5NSxcbiAgICDlvow6IDUzNSxcbiAgICDmpa06IC02OTcsXG4gICAg55u4OiA3NTMsXG4gICAg56S+OiAtNTA3LFxuICAgIOemjzogOTc0LFxuICAgIOepujogLTgyMixcbiAgICDogIU6IDE4MTEsXG4gICAg6YCjOiA0NjMsXG4gICAg6YOOOiAxMDgyLFxuICAgICfvvJEnOiAtMjcwLFxuICAgIO+8pe+8kTogMzA2LFxuICAgIO++mTogLTY3MyxcbiAgICDvvp06IC00OTYsXG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG5UaW55U2VnbWVudGVyLnByb3RvdHlwZS5jdHlwZV8gPSBmdW5jdGlvbiAoc3RyKSB7XG4gIGZvciAodmFyIGkgaW4gdGhpcy5jaGFydHlwZV8pIHtcbiAgICBpZiAoc3RyLm1hdGNoKHRoaXMuY2hhcnR5cGVfW2ldWzBdKSkge1xuICAgICAgcmV0dXJuIHRoaXMuY2hhcnR5cGVfW2ldWzFdXG4gICAgfVxuICB9XG4gIHJldHVybiAnTydcbn1cblxuVGlueVNlZ21lbnRlci5wcm90b3R5cGUudHNfID0gZnVuY3Rpb24gKHYpIHtcbiAgaWYgKHYpIHtcbiAgICByZXR1cm4gdlxuICB9XG4gIHJldHVybiAwXG59XG5cblRpbnlTZWdtZW50ZXIucHJvdG90eXBlLnNlZ21lbnQgPSBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgaWYgKGlucHV0ID09IG51bGwgfHwgaW5wdXQgPT0gdW5kZWZpbmVkIHx8IGlucHV0ID09ICcnKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdXG4gIHZhciBzZWcgPSBbJ0IzJywgJ0IyJywgJ0IxJ11cbiAgdmFyIGN0eXBlID0gWydPJywgJ08nLCAnTyddXG4gIHZhciBvID0gaW5wdXQuc3BsaXQoJycpXG4gIGZvciAoaSA9IDA7IGkgPCBvLmxlbmd0aDsgKytpKSB7XG4gICAgc2VnLnB1c2gob1tpXSlcbiAgICBjdHlwZS5wdXNoKHRoaXMuY3R5cGVfKG9baV0pKVxuICB9XG4gIHNlZy5wdXNoKCdFMScpXG4gIHNlZy5wdXNoKCdFMicpXG4gIHNlZy5wdXNoKCdFMycpXG4gIGN0eXBlLnB1c2goJ08nKVxuICBjdHlwZS5wdXNoKCdPJylcbiAgY3R5cGUucHVzaCgnTycpXG4gIHZhciB3b3JkID0gc2VnWzNdXG4gIHZhciBwMSA9ICdVJ1xuICB2YXIgcDIgPSAnVSdcbiAgdmFyIHAzID0gJ1UnXG4gIGZvciAodmFyIGkgPSA0OyBpIDwgc2VnLmxlbmd0aCAtIDM7ICsraSkge1xuICAgIHZhciBzY29yZSA9IHRoaXMuQklBU19fXG4gICAgdmFyIHcxID0gc2VnW2kgLSAzXVxuICAgIHZhciB3MiA9IHNlZ1tpIC0gMl1cbiAgICB2YXIgdzMgPSBzZWdbaSAtIDFdXG4gICAgdmFyIHc0ID0gc2VnW2ldXG4gICAgdmFyIHc1ID0gc2VnW2kgKyAxXVxuICAgIHZhciB3NiA9IHNlZ1tpICsgMl1cbiAgICB2YXIgYzEgPSBjdHlwZVtpIC0gM11cbiAgICB2YXIgYzIgPSBjdHlwZVtpIC0gMl1cbiAgICB2YXIgYzMgPSBjdHlwZVtpIC0gMV1cbiAgICB2YXIgYzQgPSBjdHlwZVtpXVxuICAgIHZhciBjNSA9IGN0eXBlW2kgKyAxXVxuICAgIHZhciBjNiA9IGN0eXBlW2kgKyAyXVxuICAgIHNjb3JlICs9IHRoaXMudHNfKHRoaXMuVVAxX19bcDFdKVxuICAgIHNjb3JlICs9IHRoaXMudHNfKHRoaXMuVVAyX19bcDJdKVxuICAgIHNjb3JlICs9IHRoaXMudHNfKHRoaXMuVVAzX19bcDNdKVxuICAgIHNjb3JlICs9IHRoaXMudHNfKHRoaXMuQlAxX19bcDEgKyBwMl0pXG4gICAgc2NvcmUgKz0gdGhpcy50c18odGhpcy5CUDJfX1twMiArIHAzXSlcbiAgICBzY29yZSArPSB0aGlzLnRzXyh0aGlzLlVXMV9fW3cxXSlcbiAgICBzY29yZSArPSB0aGlzLnRzXyh0aGlzLlVXMl9fW3cyXSlcbiAgICBzY29yZSArPSB0aGlzLnRzXyh0aGlzLlVXM19fW3czXSlcbiAgICBzY29yZSArPSB0aGlzLnRzXyh0aGlzLlVXNF9fW3c0XSlcbiAgICBzY29yZSArPSB0aGlzLnRzXyh0aGlzLlVXNV9fW3c1XSlcbiAgICBzY29yZSArPSB0aGlzLnRzXyh0aGlzLlVXNl9fW3c2XSlcbiAgICBzY29yZSArPSB0aGlzLnRzXyh0aGlzLkJXMV9fW3cyICsgdzNdKVxuICAgIHNjb3JlICs9IHRoaXMudHNfKHRoaXMuQlcyX19bdzMgKyB3NF0pXG4gICAgc2NvcmUgKz0gdGhpcy50c18odGhpcy5CVzNfX1t3NCArIHc1XSlcbiAgICBzY29yZSArPSB0aGlzLnRzXyh0aGlzLlRXMV9fW3cxICsgdzIgKyB3M10pXG4gICAgc2NvcmUgKz0gdGhpcy50c18odGhpcy5UVzJfX1t3MiArIHczICsgdzRdKVxuICAgIHNjb3JlICs9IHRoaXMudHNfKHRoaXMuVFczX19bdzMgKyB3NCArIHc1XSlcbiAgICBzY29yZSArPSB0aGlzLnRzXyh0aGlzLlRXNF9fW3c0ICsgdzUgKyB3Nl0pXG4gICAgc2NvcmUgKz0gdGhpcy50c18odGhpcy5VQzFfX1tjMV0pXG4gICAgc2NvcmUgKz0gdGhpcy50c18odGhpcy5VQzJfX1tjMl0pXG4gICAgc2NvcmUgKz0gdGhpcy50c18odGhpcy5VQzNfX1tjM10pXG4gICAgc2NvcmUgKz0gdGhpcy50c18odGhpcy5VQzRfX1tjNF0pXG4gICAgc2NvcmUgKz0gdGhpcy50c18odGhpcy5VQzVfX1tjNV0pXG4gICAgc2NvcmUgKz0gdGhpcy50c18odGhpcy5VQzZfX1tjNl0pXG4gICAgc2NvcmUgKz0gdGhpcy50c18odGhpcy5CQzFfX1tjMiArIGMzXSlcbiAgICBzY29yZSArPSB0aGlzLnRzXyh0aGlzLkJDMl9fW2MzICsgYzRdKVxuICAgIHNjb3JlICs9IHRoaXMudHNfKHRoaXMuQkMzX19bYzQgKyBjNV0pXG4gICAgc2NvcmUgKz0gdGhpcy50c18odGhpcy5UQzFfX1tjMSArIGMyICsgYzNdKVxuICAgIHNjb3JlICs9IHRoaXMudHNfKHRoaXMuVEMyX19bYzIgKyBjMyArIGM0XSlcbiAgICBzY29yZSArPSB0aGlzLnRzXyh0aGlzLlRDM19fW2MzICsgYzQgKyBjNV0pXG4gICAgc2NvcmUgKz0gdGhpcy50c18odGhpcy5UQzRfX1tjNCArIGM1ICsgYzZdKVxuICAgIC8vICBzY29yZSArPSB0aGlzLnRzXyh0aGlzLlRDNV9fW2M0ICsgYzUgKyBjNl0pO1xuICAgIHNjb3JlICs9IHRoaXMudHNfKHRoaXMuVVExX19bcDEgKyBjMV0pXG4gICAgc2NvcmUgKz0gdGhpcy50c18odGhpcy5VUTJfX1twMiArIGMyXSlcbiAgICBzY29yZSArPSB0aGlzLnRzXyh0aGlzLlVRM19fW3AzICsgYzNdKVxuICAgIHNjb3JlICs9IHRoaXMudHNfKHRoaXMuQlExX19bcDIgKyBjMiArIGMzXSlcbiAgICBzY29yZSArPSB0aGlzLnRzXyh0aGlzLkJRMl9fW3AyICsgYzMgKyBjNF0pXG4gICAgc2NvcmUgKz0gdGhpcy50c18odGhpcy5CUTNfX1twMyArIGMyICsgYzNdKVxuICAgIHNjb3JlICs9IHRoaXMudHNfKHRoaXMuQlE0X19bcDMgKyBjMyArIGM0XSlcbiAgICBzY29yZSArPSB0aGlzLnRzXyh0aGlzLlRRMV9fW3AyICsgYzEgKyBjMiArIGMzXSlcbiAgICBzY29yZSArPSB0aGlzLnRzXyh0aGlzLlRRMl9fW3AyICsgYzIgKyBjMyArIGM0XSlcbiAgICBzY29yZSArPSB0aGlzLnRzXyh0aGlzLlRRM19fW3AzICsgYzEgKyBjMiArIGMzXSlcbiAgICBzY29yZSArPSB0aGlzLnRzXyh0aGlzLlRRNF9fW3AzICsgYzIgKyBjMyArIGM0XSlcbiAgICB2YXIgcCA9ICdPJ1xuICAgIGlmIChzY29yZSA+IDApIHtcbiAgICAgIHJlc3VsdC5wdXNoKHdvcmQpXG4gICAgICB3b3JkID0gJydcbiAgICAgIHAgPSAnQidcbiAgICB9XG4gICAgcDEgPSBwMlxuICAgIHAyID0gcDNcbiAgICBwMyA9IHBcbiAgICB3b3JkICs9IHNlZ1tpXVxuICB9XG4gIHJlc3VsdC5wdXNoKHdvcmQpXG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZGVmYXVsdCBUaW55U2VnbWVudGVyXG4iLCJpbXBvcnQgeyBUaW55U2VnbWVudGVyIH0gZnJvbSAnc3JjL3ZlbmRvci90aW55LXNlZ21lbnRlcidcbmltcG9ydCB7IFJhbmdlLCBUb2tlbml6ZXIgfSBmcm9tICcuLi90b2tlbml6ZXInXG5cbmV4cG9ydCBjbGFzcyBKYXBhbmVzZVRva2VuaXplciBleHRlbmRzIFRva2VuaXplciB7XG4gIC8vIEB0cy1pZ25vcmVcbiAgcHJpdmF0ZSB0b2tlbml6ZXIgPSBuZXcgVGlueVNlZ21lbnRlcigpXG5cbiAgdG9rZW5pemUodGV4dDogc3RyaW5nLCByYW5nZT86IFJhbmdlKSB7XG4gICAgY29uc3QgdG9rZW5zOiBzdHJpbmdbXSA9IHRleHRcbiAgICAgIC5zbGljZShyYW5nZT8uc3RhcnQsIHJhbmdlPy5lbmQpXG4gICAgICAuc3BsaXQoJ1xcbicpXG4gICAgICAuZmxhdE1hcDxzdHJpbmc+KChsaW5lKSA9PiB0aGlzLnRva2VuaXplci5zZWdtZW50KGxpbmUpKVxuICAgICAgLm1hcCgodCkgPT4gdC5yZXBsYWNlKHRoaXMudHJpbVBhdHRlcm4sICcnKSlcblxuICAgIHJldHVybiB7IHRva2VucyB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFRva2VuaXplU3RyYXRlZ3ksIFRva2VuaXplciB9IGZyb20gJy4vdG9rZW5pemVyJ1xuaW1wb3J0IHsgQXJhYmljVG9rZW5pemVyIH0gZnJvbSAnLi90b2tlbml6ZXIvYXJhYmljJ1xuaW1wb3J0IHsgRGVmYXVsdFRva2VuaXplciB9IGZyb20gJy4vdG9rZW5pemVyL2RlZmF1bHQnXG5pbXBvcnQgeyBKYXBhbmVzZVRva2VuaXplciB9IGZyb20gJy4vdG9rZW5pemVyL2phcGFuZXNlJ1xuXG5leHBvcnQgY2xhc3MgVG9rZW5pemVyRmFjdG9yeSB7XG4gIHN0YXRpYyBnZXRUb2tlbml6ZXIoc3RyYXRlZ3k6IFRva2VuaXplU3RyYXRlZ3kpOiBUb2tlbml6ZXIge1xuICAgIGxldCB0b2tlbml6ZXI6IFRva2VuaXplclxuICAgIHN3aXRjaCAoc3RyYXRlZ3kpIHtcbiAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICB0b2tlbml6ZXIgPSBuZXcgRGVmYXVsdFRva2VuaXplcigpXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ2phcGFuZXNlJzpcbiAgICAgICAgdG9rZW5pemVyID0gbmV3IEphcGFuZXNlVG9rZW5pemVyKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2FyYWJpYyc6XG4gICAgICAgIHRva2VuaXplciA9IG5ldyBBcmFiaWNUb2tlbml6ZXIoKVxuICAgICAgICBicmVha1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFN0cmF0ZWd5ICcke3N0cmF0ZWd5fScgbm90IGZvdW5kYClcbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW5pemVyXG4gIH1cbn1cbiIsImltcG9ydCB7IFRva2VuaXplckZhY3RvcnkgfSBmcm9tICcuL2Zsb3cvZmFjdG9yeSdcbmltcG9ydCB7IFRva2VuaXplU3RyYXRlZ3kgfSBmcm9tICcuL2Zsb3cvdG9rZW5pemVyJ1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICcuL3Byb3ZpZGVyJ1xuXG5leHBvcnQgY2xhc3MgRmxvd1Byb3ZpZGVyIGV4dGVuZHMgUHJvdmlkZXIge1xuICBjYXRlZ29yeSA9ICdGJ1xuICBjb21wbGV0aW9uczogc3RyaW5nW10gPSBbXVxuXG4gIGFkZExhc3RXb3JkRnJvbShcbiAgICBsaW5lOiBzdHJpbmcsXG4gICAgY3Vyc29ySW5kZXg6IG51bWJlcixcbiAgICBzdHJhdGVneTogVG9rZW5pemVTdHJhdGVneVxuICApOiB2b2lkIHtcbiAgICBjb25zdCB3b3JkID0gVG9rZW5pemVyRmFjdG9yeS5nZXRUb2tlbml6ZXIoc3RyYXRlZ3kpLmxhc3RXb3JkRnJvbShcbiAgICAgIGxpbmUsXG4gICAgICBjdXJzb3JJbmRleCxcbiAgICAgIHsgbm9ybWFsaXplOiB0cnVlIH1cbiAgICApXG5cbiAgICB0aGlzLmFkZFdvcmQod29yZClcbiAgfVxuXG4gIGFkZFdvcmRzRnJvbSh0ZXh0OiBzdHJpbmcsIHN0cmF0ZWd5OiBUb2tlbml6ZVN0cmF0ZWd5ID0gJ2RlZmF1bHQnKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gVG9rZW5pemVyRmFjdG9yeS5nZXRUb2tlbml6ZXIoc3RyYXRlZ3kpLnRva2VuaXplKHRleHQpXG5cbiAgICByZXN1bHQudG9rZW5zLmZvckVhY2goKHRva2VuKSA9PiB0aGlzLmFkZFdvcmQodG9rZW4pKVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRXb3JkKHdvcmQ6IHN0cmluZykge1xuICAgIGlmICghd29yZCB8fCB0aGlzLmFscmVhZHlBZGRlZCh3b3JkKSkgcmV0dXJuXG5cbiAgICB0aGlzLmNvbXBsZXRpb25zLnB1c2god29yZClcbiAgfVxuXG4gIHByaXZhdGUgYWxyZWFkeUFkZGVkKHdvcmQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbXBsZXRpb25zLmluY2x1ZGVzKHdvcmQpXG4gIH1cbn1cbiIsImltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJy4vcHJvdmlkZXInXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYVRleFByb3ZpZGVyIGV4dGVuZHMgUHJvdmlkZXIge1xuICAgIGNhdGVnb3J5ID0gXCJMXCJcbiAgICBjb21wbGV0aW9ucyA9IFtcIlxcXFxBcnJvd3ZlcnRcIiwgXCJcXFxcQmJia1wiLCBcIlxcXFxCaWdcIiwgXCJcXFxcQmlnZ1wiLCBcIlxcXFxCaWdnbFwiLCBcIlxcXFxCaWdnclwiLCBcIlxcXFxCaWdsXCIsIFwiXFxcXEJpZ21cIiwgXCJcXFxcQmlnclwiLCBcIlxcXFxCb3hcIiwgXCJcXFxcQnVtcGVxXCIsIFwiXFxcXENhcFwiLCBcIlxcXFxjaXRlWyN7fV17I3t9fVwiLCBcIlxcXFxjaXRlXCIsIFwiXFxcXEN1cFwiLCBcIlxcXFxEZWNsYXJlTWF0aE9wZXJhdG9yeyN7fX17I3t9fVwiLCBcIlxcXFxEZWx0YVwiLCBcIlxcXFxEb3duYXJyb3dcIiwgXCJcXFxcRmludlwiLCBcIlxcXFxHYW1lXCIsIFwiXFxcXEdhbW1hXCIsIFwiXFxcXEltXCIsIFwiXFxcXExhbWJkYVwiLCBcIlxcXFxMZWZ0YXJyb3dcIiwgXCJcXFxcTGVmdHJpZ2h0YXJyb3dcIiwgXCJcXFxcTGxlZnRhcnJvd1wiLCBcIlxcXFxMb25nbGVmdGFycm93XCIsIFwiXFxcXExvbmdsZWZ0cmlnaHRhcnJvd1wiLCBcIlxcXFxMb25ncmlnaHRhcnJvd1wiLCBcIlxcXFxMc2hcIiwgXCJcXFxcT21lZ2FcIiwgXCJcXFxcUGhpXCIsIFwiXFxcXFBpXCIsIFwiXFxcXFByXCIsIFwiXFxcXFBzaVwiLCBcIlxcXFxSZVwiLCBcIlxcXFxSaWdodGFycm93XCIsIFwiXFxcXFJyaWdodGFycm93XCIsIFwiXFxcXFJzaFwiLCBcIlxcXFxTXCIsIFwiXFxcXFNpZ21hXCIsIFwiXFxcXFN1YnNldFwiLCBcIlxcXFxTdXBzZXRcIiwgXCJcXFxcVGVYXCIsIFwiXFxcXFRoZXRhXCIsIFwiXFxcXFVwYXJyb3dcIiwgXCJcXFxcVXBkb3duYXJyb3dcIiwgXCJcXFxcVXBzaWxvblwiLCBcIlxcXFxWZGFzaFwiLCBcIlxcXFxWZXJ0XCIsIFwiXFxcXFZ2ZGFzaFwiLCBcIlxcXFxYaVwiLCBcIlxcXFxhYm92ZVwiLCBcIlxcXFxhYm92ZXdpdGhkZWxpbXNcIiwgXCJcXFxcYWN1dGV7I3t9fVwiLCBcIlxcXFxhbGVwaFwiLCBcIlxcXFxhbHBoYVwiLCBcIlxcXFxhbWFsZ1wiLCBcIlxcXFxhbmdsZVwiLCBcIlxcXFxhcHByb3hcIiwgXCJcXFxcYXBwcm94ZXFcIiwgXCJcXFxcYXJjY29zXCIsIFwiXFxcXGFyY3NpblwiLCBcIlxcXFxhcmN0YW5cIiwgXCJcXFxcYXJnXCIsIFwiXFxcXGFycm93dmVydFwiLCBcIlxcXFxhc3RcIiwgXCJcXFxcYXN5bXBcIiwgXCJcXFxcYXRvcFwiLFxuICAgICAgICBcIlxcXFxhdG9wd2l0aGRlbGltc1wiLCBcIlxcXFxiYWNrZXBzaWxvblwiLCBcIlxcXFxiYWNrcHJpbWVcIiwgXCJcXFxcYmFja3NpbVwiLCBcIlxcXFxiYWNrc2ltZXFcIiwgXCJcXFxcYmFja3NsYXNoXCIsIFwiXFxcXGJhcnsje319XCIsIFwiXFxcXGJhcndlZGdlXCIsIFwiXFxcXGJlY2F1c2VcIiwgXCJcXFxcYmV0YVwiLCBcIlxcXFxiZXRoXCIsIFwiXFxcXGJldHdlZW5cIiwgXCJcXFxcYmZcIiwgXCJcXFxcYmlnXCIsIFwiXFxcXGJpZ2NhcFwiLCBcIlxcXFxiaWdjaXJjXCIsIFwiXFxcXGJpZ2N1cFwiLCBcIlxcXFxiaWdnXCIsIFwiXFxcXGJpZ2dsXCIsIFwiXFxcXGJpZ2dtXCIsIFwiXFxcXGJpZ2dyXCIsIFwiXFxcXGJpZ2xcIiwgXCJcXFxcYmlnbVwiLCBcIlxcXFxiaWdvZG90XCIsIFwiXFxcXGJpZ29wbHVzXCIsIFwiXFxcXGJpZ290aW1lc1wiLCBcIlxcXFxiaWdyXFxcXH1cIiwgXCJcXFxcYmlnc3FjdXBcIiwgXCJcXFxcYmlnc3RhclwiLCBcIlxcXFxiaWd0cmlhbmdsZWRvd25cIiwgXCJcXFxcYmlndHJpYW5nbGV1cFwiLCBcIlxcXFxiaWd1cGx1c1wiLCBcIlxcXFxiaWd2ZWVcIiwgXCJcXFxcYmlnd2VkZ2VcIiwgXCJcXFxcYmlub217I3t9fXsje319XCIsIFwiXFxcXGJsYWNrbG96ZW5nZVwiLCBcIlxcXFxibGFja3NxdWFyZVwiLCBcIlxcXFxibGFja3RyaWFuZ2xlXCIsIFwiXFxcXGJsYWNrdHJpYW5nbGVkb3duXCIsIFwiXFxcXGJsYWNrdHJpYW5nbGVsZWZ0XCIsIFwiXFxcXGJsYWNrdHJpYW5nbGVyaWdodFwiLCBcIlxcXFxibW9kXCIsIFwiXFxcXGJvbGRzeW1ib2x7I3t9fVwiLCBcIlxcXFxib3RcIiwgXCJcXFxcYm93dGllXCIsIFwiXFxcXGJveGRvdFwiLCBcIlxcXFxib3hlZHsje319XCIsIFwiXFxcXGJveG1pbnVzXCIsIFwiXFxcXGJveHBsdXNcIiwgXCJcXFxcYm94dGltZXNcIiwgXCJcXFxcYnJhY2VcIiwgXCJcXFxcYnJhY2V2ZXJ0XCIsIFwiXFxcXGJyYWNrXCIsIFwiXFxcXGJyZXZleyN7fX1cIiwgXCJcXFxcYnVpbGRyZWxcIiwgXCJcXFxcYnVsbGV0XCIsIFwiXFxcXGJ1bXBlcVwiLCBcIlxcXFxjYWxcIiwgXCJcXFxcY2FwXCIsIFwiXFxcXGNhc2VzeyN7fX1cIiwgXCJcXFxcY2RvdFwiLCBcIlxcXFxjZG90cFwiLCBcIlxcXFxjZG90c1wiLFxuICAgICAgICBcIlxcXFxjZW50ZXJkb3RcIiwgXCJcXFxcY2ZyYWN7I3t9fXsje319XCIsIFwiXFxcXGNoZWNreyN7fX1cIiwgXCJcXFxcY2hlY2ttYXJrXCIsIFwiXFxcXGNoaVwiLCBcIlxcXFxjaG9vc2VcIiwgXCJcXFxcY2lyY1wiLCBcIlxcXFxjaXJjZXFcIiwgXCJcXFxcY2lyY2xlYXJyb3dsZWZ0XCIsIFwiXFxcXGNpcmNsZWFycm93cmlnaHRcIiwgXCJcXFxcY2lyY2xlZFNcIiwgXCJcXFxcY2lyY2xlZGFzdFwiLCBcIlxcXFxjaXJjbGVkY2lyY1wiLCBcIlxcXFxjaXJjbGVkZGFzaFwiLCBcIlxcXFxjbHVic3VpdFwiLCBcIlxcXFxjb2xvblwiLCBcIlxcXFxjb21wbGVtZW50XCIsIFwiXFxcXGNvbmdcIiwgXCJcXFxcY29wcm9kXCIsIFwiXFxcXGNvc1wiLCBcIlxcXFxjb3NoXCIsIFwiXFxcXGNvdFwiLCBcIlxcXFxjb3RoXCIsIFwiXFxcXGNyXCIsIFwiXFxcXGNzY1wiLCBcIlxcXFxjdXBcIiwgXCJcXFxcY3VybHllcXByZWNcIiwgXCJcXFxcY3VybHllcXN1Y2NcIiwgXCJcXFxcY3VybHl2ZWVcIiwgXCJcXFxcY3VybHl3ZWRnZVwiLCBcIlxcXFxjdXJ2ZWFycm93bGVmdFwiLCBcIlxcXFxjdXJ2ZWFycm93cmlnaHRcIiwgXCJcXFxcZGFnZ2VyXCIsIFwiXFxcXGRhbGV0aFwiLCBcIlxcXFxkYXNobGVmdGFycm93XCIsIFwiXFxcXGRhc2hyaWdodGFycm93XCIsIFwiXFxcXGRhc2h2XCIsIFwiXFxcXGRiaW5vbXsje319eyN7fX1cIiwgXCJcXFxcZGRhZ2dlclwiLCBcIlxcXFxkZGRkb3R7I3t9fVwiLCBcIlxcXFxkZGRvdHsje319XCIsIFwiXFxcXGRkb3R7I3t9fVwiLCBcIlxcXFxkZG90c1wiLCBcIlxcXFxkZWZcIiwgXCJcXFxcZGVnXCIsIFwiXFxcXGRlbHRhXCIsIFwiXFxcXGRldFwiLCBcIlxcXFxkZnJhY3sje319eyN7fX1cIiwgXCJcXFxcZGlhZ2Rvd25cIiwgXCJcXFxcZGlhZ3VwXCIsIFwiXFxcXGRpYW1vbmRcIiwgXCJcXFxcZGlhbW9uZHN1aXRcIiwgXCJcXFxcZGlnYW1tYVwiLCBcIlxcXFxkaW1cIiwgXCJcXFxcZGlzcGxheWxpbmVzXCIsIFwiXFxcXGRpc3BsYXlzdHlsZVwiLCBcIlxcXFxkaXZcIiwgXCJcXFxcZGl2aWRlb250aW1lc1wiLCBcIlxcXFxkb3R7I3t9fVwiLCBcIlxcXFxkb3RlcVwiLCBcIlxcXFxkb3RlcWRvdFwiLCBcIlxcXFxkb3RwbHVzXCIsXG4gICAgICAgIFwiXFxcXGRvdHNcIiwgXCJcXFxcZG90c2JcIiwgXCJcXFxcZG90c2NcIiwgXCJcXFxcZG90c2lcIiwgXCJcXFxcZG90c21cIiwgXCJcXFxcZG90c29cIiwgXCJcXFxcZG91YmxlYmFyd2VkZ2VcIiwgXCJcXFxcZG93bmFycm93XCIsIFwiXFxcXGRvd25kb3duYXJyb3dzXCIsIFwiXFxcXGRvd25oYXJwb29ubGVmdFwiLCBcIlxcXFxkb3duaGFycG9vbnJpZ2h0XCIsIFwiXFxcXGVsbFwiLCBcIlxcXFxlbXB0eXNldFwiLCBcIlxcXFxlbnNwYWNlXCIsIFwiXFxcXGVwc2lsb25cIiwgXCJcXFxcZXFhbGlnbnsje319XCIsIFwiXFxcXGVxYWxpZ25ub3sje319XCIsIFwiXFxcXGVxY2lyY1wiLCBcIlxcXFxlcXJlZnsje319XCIsIFwiXFxcXGVxc2ltXCIsIFwiXFxcXGVxc2xhbnRndHJcIiwgXCJcXFxcZXFzbGFudGxlc3NcIiwgXCJcXFxcZXF1aXZcIiwgXCJcXFxcZXRhXCIsIFwiXFxcXGV0aFwiLCBcIlxcXFxleGlzdHNcIiwgXCJcXFxcZXhwXCIsIFwiXFxcXGZhbGxpbmdkb3RzZXFcIiwgXCJcXFxcZmxhdFwiLCBcIlxcXFxmb3JhbGxcIiwgXCJcXFxcZnJvd25cIiwgXCJcXFxcZ2FtbWFcIiwgXCJcXFxcZ2NkXCIsIFwiXFxcXGdlXCIsIFwiXFxcXGdlcVwiLCBcIlxcXFxnZXFxXCIsIFwiXFxcXGdlcXNsYW50XCIsIFwiXFxcXGdldHNcIiwgXCJcXFxcZ2dcIiwgXCJcXFxcZ2dnXCIsIFwiXFxcXGdpbWVsXCIsIFwiXFxcXGduYXBwcm94XCIsIFwiXFxcXGduZXFcIiwgXCJcXFxcZ25lcXFcIiwgXCJcXFxcZ25zaW1cIiwgXCJcXFxcZ3JhdmV7I3t9fVwiLCBcIlxcXFxndHJhcHByb3hcIiwgXCJcXFxcZ3RyZG90XCIsIFwiXFxcXGd0cmVxbGVzc1wiLCBcIlxcXFxndHJlcXFsZXNzXCIsIFwiXFxcXGd0cmxlc3NcIiwgXCJcXFxcZ3Ryc2ltXCIsIFwiXFxcXGd2ZXJ0bmVxcVwiLCBcIlxcXFxoYXR7I3t9fVwiLCBcIlxcXFxoYmFyXCIsIFwiXFxcXGhib3hcIiwgXCJcXFxcaGVhcnRzdWl0XCIsIFwiXFxcXGhmaWxcIiwgXCJcXFxcaGZpbGxcIiwgXCJcXFxcaG9tXCIsIFwiXFxcXGhvb2tsZWZ0YXJyb3dcIiwgXCJcXFxcaG9va3JpZ2h0YXJyb3dcIiwgXCJcXFxcaHBoYW50b217I3t9fVwiLCBcIlxcXFxoc2tpcFwiLCBcIlxcXFxoc2xhc2hcIiwgXCJcXFxcaWRvdHNpbnRcIiwgXCJcXFxcaWZmXCIsXG4gICAgICAgIFwiXFxcXGlpaWludFwiLCBcIlxcXFxpaWludFwiLCBcIlxcXFxpaW50XCIsIFwiXFxcXGltYXRoXCIsIFwiXFxcXGltcGxpZWRieVwiLCBcIlxcXFxpbXBsaWVzXCIsIFwiXFxcXGluXCIsIFwiXFxcXGluZlwiLCBcIlxcXFxpbmZ0eVwiLCBcIlxcXFxpbmpsaW1cIiwgXCJcXFxcaW50XFxcXGxpbWl0c197I3t9fV57I3t9fVwiLCBcIlxcXFxpbnRlcmNhbFwiLCBcIlxcXFxpb3RhXCIsIFwiXFxcXGl0XCIsIFwiXFxcXGptYXRoXCIsIFwiXFxcXGthcHBhXCIsIFwiXFxcXGtlclwiLCBcIlxcXFxrZXJuXCIsIFwiXFxcXGxWZXJ0XCIsIFwiXFxcXGxhbWJkYVwiLCBcIlxcXFxsYW5kXCIsIFwiXFxcXGxhbmdsZVwiLCBcIlxcXFxsYnJhY2VcIiwgXCJcXFxcbGJyYWNrXCIsIFwiXFxcXGxjZWlsXCIsIFwiXFxcXGxkb3RwXCIsIFwiXFxcXGxkb3RzXCIsIFwiXFxcXGxlXCIsIFwiXFxcXGxlZnRcIiwgXCJcXFxcbGVmdGFycm93XCIsIFwiXFxcXGxlZnRhcnJvd3RhaWxcIiwgXCJcXFxcbGVmdGhhcnBvb25kb3duXCIsIFwiXFxcXGxlZnRoYXJwb29udXBcIiwgXCJcXFxcbGVmdGxlZnRhcnJvd3NcIiwgXCJcXFxcbGVmdHJpZ2h0YXJyb3dcIiwgXCJcXFxcbGVmdHJpZ2h0YXJyb3dzXCIsIFwiXFxcXGxlZnRyaWdodGhhcnBvb25zXCIsIFwiXFxcXGxlZnRyaWdodHNxdWlnYXJyb3dcIiwgXCJcXFxcbGVmdHJvb3R7I3t9fVwiLCBcIlxcXFxsZWZ0dGhyZWV0aW1lc1wiLCBcIlxcXFxsZXFcIiwgXCJcXFxcbGVxYWxpZ25ub3sje319XCIsIFwiXFxcXGxlcXFcIiwgXCJcXFxcbGVxc2xhbnRcIiwgXCJcXFxcbGVzc2FwcHJveFwiLCBcIlxcXFxsZXNzZG90XCIsIFwiXFxcXGxlc3NlcWd0clwiLCBcIlxcXFxsZXNzZXFxZ3RyXCIsIFwiXFxcXGxlc3NndHJcIiwgXCJcXFxcbGVzc3NpbVwiLCBcIlxcXFxsZXR7I3t9fXsje319XCIsIFwiXFxcXGxmbG9vclwiLCBcIlxcXFxsZ1wiLCBcIlxcXFxsZ3JvdXBcIiwgXCJcXFxcbGhkXCIsIFwiXFxcXGxpbVwiLCBcIlxcXFxsaW1pbmZcIiwgXCJcXFxcbGltaXRzX3sje319Xnsje319XCIsIFwiXFxcXGxpbXN1cFwiLCBcIlxcXFxsbFwiLCBcIlxcXFxsbGFweyN7fX1cIiwgXCJcXFxcbGxjb3JuZXJcIiwgXCJcXFxcbGxsXCIsIFwiXFxcXGxtb3VzdGFjaGVcIixcbiAgICAgICAgXCJcXFxcbG5cIiwgXCJcXFxcbG5hcHByb3hcIiwgXCJcXFxcbG5lcVwiLCBcIlxcXFxsbmVxcVwiLCBcIlxcXFxsbm90XCIsIFwiXFxcXGxuc2ltXCIsIFwiXFxcXGxvZ1wiLCBcIlxcXFxsb25nbGVmdGFycm93XCIsIFwiXFxcXGxvbmdsZWZ0cmlnaHRhcnJvd1wiLCBcIlxcXFxsb25nbWFwc3RvXCIsIFwiXFxcXGxvbmdyaWdodGFycm93XCIsIFwiXFxcXGxvb3BhcnJvd2xlZnRcIiwgXCJcXFxcbG9vcGFycm93cmlnaHRcIiwgXCJcXFxcbG9yXCIsIFwiXFxcXGxvd2VyXCIsIFwiXFxcXGxvemVuZ2VcIiwgXCJcXFxcbHJjb3JuZXJcIiwgXCJcXFxcbHRpbWVzXCIsIFwiXFxcXGx2ZXJ0XCIsIFwiXFxcXGx2ZXJ0bmVxcVwiLCBcIlxcXFxtYWx0ZXNlXCIsIFwiXFxcXG1hcHN0b1wiLCBcIlxcXFxtYXRoYmJ7I3t9fVwiLCBcIlxcXFxtYXRoYmZ7I3t9fVwiLCBcIlxcXFxtYXRoYmluXCIsIFwiXFxcXG1hdGhjYWx7I3t9fVwiLCBcIlxcXFxtYXRoY2hvaWNlXCIsIFwiXFxcXG1hdGhjbG9zZVwiLCBcIlxcXFxtYXRoZnJha3sje319XCIsIFwiXFxcXG1hdGhpbm5lclwiLCBcIlxcXFxtYXRob3BcIiwgXCJcXFxcbWF0aG9wZW5cIiwgXCJcXFxcbWF0aG9yZFwiLCBcIlxcXFxtYXRocHVuY3RcIiwgXCJcXFxcbWF0aHJlbFwiLCBcIlxcXFxtYXRoc3RydXRcIiwgXCJcXFxcbWF0cml4eyN7fX1cIiwgXCJcXFxcbWF4XCIsIFwiXFxcXG1lYXN1cmVkYW5nbGVcIiwgXCJcXFxcbWhvXCIsIFwiXFxcXG1pZFwiLCBcIlxcXFxtaWRkbGVcIiwgXCJcXFxcbWluXCIsIFwiXFxcXG1pdFwiLCBcIlxcXFxta2VyblwiLCBcIlxcXFxtb2RcIiwgXCJcXFxcbW9kZWxzXCIsIFwiXFxcXG1vdmVsZWZ0XCIsIFwiXFxcXG1vdmVyaWdodFwiLCBcIlxcXFxtcFwiLCBcIlxcXFxtc2tpcFwiLCBcIlxcXFxtc3BhY2V7I3t9fVwiLCBcIlxcXFxtdVwiLCBcIlxcXFxtdWx0aW1hcFwiLCBcIlxcXFxuTGVmdGFycm93XCIsIFwiXFxcXG5MZWZ0cmlnaHRhcnJvd1wiLCBcIlxcXFxuUmlnaHRhcnJvd1wiLCBcIlxcXFxuVkRhc2hcIiwgXCJcXFxcblZkYXNoXCIsIFwiXFxcXG5hYmxhXCIsIFwiXFxcXG5hdHVyYWxcIiwgXCJcXFxcbmNvbmdcIiwgXCJcXFxcbmVcIiwgXCJcXFxcbmVhcnJvd1wiLCBcIlxcXFxuZWdcIiwgXCJcXFxcbmVnbWVkc3BhY2VcIixcbiAgICAgICAgXCJcXFxcbmVndGhpY2tzcGFjZVwiLCBcIlxcXFxuZWd0aGluc3BhY2VcIiwgXCJcXFxcbmVxXCIsIFwiXFxcXG5leGlzdHNcIiwgXCJcXFxcbmdlcVwiLCBcIlxcXFxuZ2VxcVwiLCBcIlxcXFxuZ2Vxc2xhbnRcIiwgXCJcXFxcbmd0clwiLCBcIlxcXFxuaVwiLCBcIlxcXFxubGVmdGFycm93XCIsIFwiXFxcXG5sZWZ0cmlnaHRhcnJvd1wiLCBcIlxcXFxubGVxXCIsIFwiXFxcXG5sZXFxXCIsIFwiXFxcXG5sZXFzbGFudFwiLCBcIlxcXFxubGVzc1wiLCBcIlxcXFxubWlkXCIsIFwiXFxcXG5vbGltaXRzX3sje319Xnsje319XCIsIFwiXFxcXG5vdFwiLCBcIlxcXFxub3RhZ1wiLCBcIlxcXFxub3RpblwiLCBcIlxcXFxucGFyYWxsZWxcIiwgXCJcXFxcbnByZWNcIiwgXCJcXFxcbnByZWNlcVwiLCBcIlxcXFxucmlnaHRhcnJvd1wiLCBcIlxcXFxuc2hvcnRtaWRcIiwgXCJcXFxcbnNob3J0cGFyYWxsZWxcIiwgXCJcXFxcbnNpbVwiLCBcIlxcXFxuc3Vic2V0ZXFcIiwgXCJcXFxcbnN1YnNldGVxcVwiLCBcIlxcXFxuc3VjY1wiLCBcIlxcXFxuc3VjY2VxXCIsIFwiXFxcXG5zdXBzZXRlcVwiLCBcIlxcXFxuc3Vwc2V0ZXFxXCIsIFwiXFxcXG50cmlhbmdsZWxlZnRcIiwgXCJcXFxcbnRyaWFuZ2xlbGVmdGVxXCIsIFwiXFxcXG50cmlhbmdsZXJpZ2h0XCIsIFwiXFxcXG50cmlhbmdsZXJpZ2h0ZXFcIiwgXCJcXFxcbnVcIiwgXCJcXFxcbnZEYXNoXCIsIFwiXFxcXG52ZGFzaFwiLCBcIlxcXFxud2Fycm93XCIsIFwiXFxcXG9kb3RcIiwgXCJcXFxcb2ludFwiLCBcIlxcXFxvbGRzdHlsZVwiLCBcIlxcXFxvbWVnYVwiLCBcIlxcXFxvbWludXNcIiwgXCJcXFxcb3BlcmF0b3JuYW1leyN7fX1cIiwgXCJcXFxcb3BsdXNcIiwgXCJcXFxcb3NsYXNoXCIsIFwiXFxcXG90aW1lc1wiLCBcIlxcXFxvdmVyXCIsIFwiXFxcXG92ZXJicmFjZXsje319XCIsIFwiXFxcXG92ZXJsZWZ0YXJyb3d7I3t9fVwiLCBcIlxcXFxvdmVybGVmdHJpZ2h0YXJyb3d7I3t9fVwiLCBcIlxcXFxvdmVybGluZXsje319XCIsIFwiXFxcXG92ZXJyaWdodGFycm93eyN7fX1cIiwgXCJcXFxcb3ZlcnNldHsje319eyN7fX1cIiwgXCJcXFxcb3ZlcndpdGhkZWxpbXNcIiwgXCJcXFxcb3duc1wiLFxuICAgICAgICBcIlxcXFxwYXJhbGxlbFwiLCBcIlxcXFxwYXJ0aWFsXCIsIFwiXFxcXHBlcnBcIiwgXCJcXFxccGhhbnRvbXsje319XCIsIFwiXFxcXHBoaVwiLCBcIlxcXFxwaVwiLCBcIlxcXFxwaXRjaGZvcmtcIiwgXCJcXFxccG1cIiwgXCJcXFxccG1hdHJpeHsje319XCIsIFwiXFxcXHBtYnsje319XCIsIFwiXFxcXHBtb2RcIiwgXCJcXFxccG9kXCIsIFwiXFxcXHByZWNcIiwgXCJcXFxccHJlY2FwcHJveFwiLCBcIlxcXFxwcmVjY3VybHllcVwiLCBcIlxcXFxwcmVjZXFcIiwgXCJcXFxccHJlY25hcHByb3hcIiwgXCJcXFxccHJlY25lcXFcIiwgXCJcXFxccHJlY25zaW1cIiwgXCJcXFxccHJlY3NpbVwiLCBcIlxcXFxwcmltZVwiLCBcIlxcXFxwcm9kXFxcXGxpbWl0c197I3t9fV57I3t9fVwiLCBcIlxcXFxwcm9qbGltXCIsIFwiXFxcXHByb3B0b1wiLCBcIlxcXFxwc2lcIiwgXCJcXFxccXF1YWRcIiwgXCJcXFxccXVhZFwiLCBcIlxcXFxyVmVydFwiLCBcIlxcXFxyYWlzZVwiLCBcIlxcXFxyYW5nbGVcIiwgXCJcXFxccmJyYWNlXCIsIFwiXFxcXHJicmFja1wiLCBcIlxcXFxyY2VpbFwiLCBcIlxcXFxyZmxvb3JcIiwgXCJcXFxccmdyb3VwXCIsIFwiXFxcXHJoZFwiLCBcIlxcXFxyaG9cIiwgXCJcXFxccmlnaHRcIiwgXCJcXFxccmlnaHRhcnJvd1wiLCBcIlxcXFxyaWdodGFycm93dGFpbFwiLCBcIlxcXFxyaWdodGhhcnBvb25kb3duXCIsIFwiXFxcXHJpZ2h0aGFycG9vbnVwXCIsIFwiXFxcXHJpZ2h0bGVmdGFycm93c1wiLCBcIlxcXFxyaWdodGxlZnRoYXJwb29uc1wiLCBcIlxcXFxyaWdodHJpZ2h0YXJyb3dzXCIsIFwiXFxcXHJpZ2h0c3F1aWdhcnJvd1wiLCBcIlxcXFxyaWdodHRocmVldGltZXNcIiwgXCJcXFxccmlzaW5nZG90c2VxXCIsIFwiXFxcXHJsYXB7I3t9fVwiLCBcIlxcXFxybVwiLCBcIlxcXFxybW91c3RhY2hlXCIsIFwiXFxcXHJvb3QgI3t9IFxcXFxvZiAje31cIiwgXCJcXFxccnRpbWVzXCIsIFwiXFxcXHJ2ZXJ0XCIsIFwiXFxcXHNjcmlwdHNjcmlwdHN0eWxlXCIsIFwiXFxcXHNjcmlwdHN0eWxlXCIsIFwiXFxcXHNlYXJyb3dcIiwgXCJcXFxcc2VjXCIsIFwiXFxcXHNldG1pbnVzXCIsIFwiXFxcXHNoYXJwXCIsIFwiXFxcXHNob3J0bWlkXCIsXG4gICAgICAgIFwiXFxcXHNob3J0cGFyYWxsZWxcIiwgXCJcXFxcc2lkZXNldHsje319eyN7fX17I3t9fVwiLCBcIlxcXFxzaWdtYVwiLCBcIlxcXFxzaW1cIiwgXCJcXFxcc2ltZXFcIiwgXCJcXFxcc2luXCIsIFwiXFxcXHNpbmhcIiwgXCJcXFxcc2tld3sje319eyN7fX17I3t9fVwiLCBcIlxcXFxzbWFsbGZyb3duXCIsIFwiXFxcXHNtYWxsaW50XCIsIFwiXFxcXHNtYWxsc2V0bWludXNcIiwgXCJcXFxcc21hbGxzbWlsZVwiLCBcIlxcXFxzbWFzaHsje319XCIsIFwiXFxcXHNtaWxlXCIsIFwiXFxcXHNwYWNlXCIsIFwiXFxcXHNwYWRlc3VpdFwiLCBcIlxcXFxzcGhlcmljYWxhbmdsZVwiLCBcIlxcXFxzcWNhcFwiLCBcIlxcXFxzcWN1cFwiLCBcIlxcXFxzcXJ0eyN7fX1cIiwgXCJcXFxcc3FzdWJzZXRcIiwgXCJcXFxcc3FzdWJzZXRlcVwiLCBcIlxcXFxzcXN1cHNldFwiLCBcIlxcXFxzcXN1cHNldGVxXCIsIFwiXFxcXHNxdWFyZVwiLCBcIlxcXFxzdGFyXCIsIFwiXFxcXHN0cnV0XCIsIFwiXFxcXHN1YnNldFwiLCBcIlxcXFxzdWJzZXRlcVwiLCBcIlxcXFxzdWJzZXRlcXFcIiwgXCJcXFxcc3Vic2V0bmVxXCIsIFwiXFxcXHN1YnNldG5lcXFcIiwgXCJcXFxcc3Vic3RhY2t7I3t9fVwiLCBcIlxcXFxzdWNjXCIsIFwiXFxcXHN1Y2NhcHByb3hcIiwgXCJcXFxcc3VjY2N1cmx5ZXFcIiwgXCJcXFxcc3VjY2VxXCIsIFwiXFxcXHN1Y2NuYXBwcm94XCIsIFwiXFxcXHN1Y2NuZXFxXCIsIFwiXFxcXHN1Y2Nuc2ltXCIsIFwiXFxcXHN1Y2NzaW1cIiwgXCJcXFxcc3VtXFxcXGxpbWl0c197I3t9fV57I3t9fVwiLCBcIlxcXFxzdXBcIiwgXCJcXFxcc3Vwc2V0XCIsIFwiXFxcXHN1cHNldGVxXCIsIFwiXFxcXHN1cHNldGVxcVwiLCBcIlxcXFxzdXBzZXRuZXFcIiwgXCJcXFxcc3Vwc2V0bmVxcVwiLCBcIlxcXFxzdXJkXCIsIFwiXFxcXHN3YXJyb3dcIiwgXCJcXFxcdGFneyN7fX1cIiwgXCJcXFxcdGFuXCIsIFwiXFxcXHRhbmhcIiwgXCJcXFxcdGF1XCIsIFwiXFxcXHRiaW5vbXsje319eyN7fX1cIiwgXCJcXFxcdGV4dHsje319XCIsIFwiXFxcXHRleHRzdHlsZVwiLCBcIlxcXFx0ZnJhY3sje319eyN7fX1cIiwgXCJcXFxcdGhlcmVmb3JlXCIsIFwiXFxcXHRoZXRhXCIsXG4gICAgICAgIFwiXFxcXHRoaWNrYXBwcm94XCIsIFwiXFxcXHRoaWNrc2ltXCIsIFwiXFxcXHRoaW5zcGFjZVwiLCBcIlxcXFx0aWxkZXsje319XCIsIFwiXFxcXHRpbWVzXCIsIFwiXFxcXHRvXCIsIFwiXFxcXHRvcFwiLCBcIlxcXFx0cmlhbmdsZVwiLCBcIlxcXFx0cmlhbmdsZWRvd25cIiwgXCJcXFxcdHJpYW5nbGVsZWZ0XCIsIFwiXFxcXHRyaWFuZ2xlbGVmdGVxXCIsIFwiXFxcXHRyaWFuZ2xlcVwiLCBcIlxcXFx0cmlhbmdsZXJpZ2h0XCIsIFwiXFxcXHRyaWFuZ2xlcmlnaHRlcVwiLCBcIlxcXFx0dFwiLCBcIlxcXFx0d29oZWFkbGVmdGFycm93XCIsIFwiXFxcXHR3b2hlYWRyaWdodGFycm93XCIsIFwiXFxcXHVsY29ybmVyXCIsIFwiXFxcXHVuZGVyYnJhY2V7I3t9fVwiLCBcIlxcXFx1bmRlcmxlZnRhcnJvd3sje319XCIsIFwiXFxcXHVuZGVybGVmdHJpZ2h0YXJyb3d7I3t9fVwiLCBcIlxcXFx1bmRlcmxpbmV7I3t9fVwiLCBcIlxcXFx1bmRlcnJpZ2h0YXJyb3d7I3t9fVwiLCBcIlxcXFx1bmRlcnNldHsje319eyN7fX1cIiwgXCJcXFxcdW5saGRcIiwgXCJcXFxcdW5yaGRcIiwgXCJcXFxcdXBhcnJvd1wiLCBcIlxcXFx1cGRvd25hcnJvd1wiLCBcIlxcXFx1cGhhcnBvb25sZWZ0XCIsIFwiXFxcXHVwaGFycG9vbnJpZ2h0XCIsIFwiXFxcXHVwbHVzXCIsIFwiXFxcXHVwcm9vdHsje319XCIsIFwiXFxcXHVwc2lsb25cIiwgXCJcXFxcdXB1cGFycm93c1wiLCBcIlxcXFx1cmNvcm5lclwiLCBcIlxcXFx2RGFzaFwiLCBcIlxcXFx2YXJEZWx0YVwiLCBcIlxcXFx2YXJHYW1tYVwiLCBcIlxcXFx2YXJMYW1iZGFcIiwgXCJcXFxcdmFyT21lZ2FcIiwgXCJcXFxcdmFyUGhpXCIsIFwiXFxcXHZhclBpXCIsIFwiXFxcXHZhclBzaVwiLCBcIlxcXFx2YXJTaWdtYVwiLCBcIlxcXFx2YXJUaGV0YVwiLCBcIlxcXFx2YXJVcHNpbG9uXCIsIFwiXFxcXHZhclhpXCIsIFwiXFxcXHZhcmVwc2lsb25cIiwgXCJcXFxcdmFyaW5qbGltXCIsIFwiXFxcXHZhcmthcHBhXCIsIFwiXFxcXHZhcmxpbWluZlwiLCBcIlxcXFx2YXJsaW1zdXBcIiwgXCJcXFxcdmFybm90aGluZ1wiLCBcIlxcXFx2YXJwaGlcIiwgXCJcXFxcdmFycGlcIixcbiAgICAgICAgXCJcXFxcdmFycHJvamxpbVwiLCBcIlxcXFx2YXJwcm9wdG9cIiwgXCJcXFxcdmFycmhvXCIsIFwiXFxcXHZhcnNpZ21hXCIsIFwiXFxcXHZhcnN1YnNldG5lcVwiLCBcIlxcXFx2YXJzdWJzZXRuZXFxXCIsIFwiXFxcXHZhcnN1cHNldG5lcVwiLCBcIlxcXFx2YXJzdXBzZXRuZXFxXCIsIFwiXFxcXHZhcnRoZXRhXCIsIFwiXFxcXHZhcnRyaWFuZ2xlXCIsIFwiXFxcXHZhcnRyaWFuZ2xlbGVmdFwiLCBcIlxcXFx2YXJ0cmlhbmdsZXJpZ2h0XCIsIFwiXFxcXHZjZW50ZXJcIiwgXCJcXFxcdmRhc2hcIiwgXCJcXFxcdmVjeyN7fX1cIiwgXCJcXFxcdmVlXCIsIFwiXFxcXHZlZWJhclwiLCBcIlxcXFx2ZXJ0XCIsIFwiXFxcXHZwaGFudG9teyN7fX1cIiwgXCJcXFxcd2VkZ2VcIiwgXCJcXFxcd2lkZWhhdHsje319XCIsIFwiXFxcXHdpZGV0aWxkZXsje319XCIsIFwiXFxcXHdwXCIsIFwiXFxcXHdyXCIsIFwiXFxcXHhpXCIsIFwiXFxcXHhsZWZ0YXJyb3d7I3t9fVwiLCBcIlxcXFx4cmlnaHRhcnJvd3sje319XCIsIFwiXFxcXHpldGFcIiwgXCJcXFxcYmVnaW57ZGVmaW5pdGlvbn1cIiwgXCJcXFxcYmVnaW57dGlremNkfVwiLCBcIlxcXFxiZWdpbnt0aWt6cGljdHVyZX1cIiwgXCJcXFxcYmVnaW57YWxpZ259XCIsIFwiXFxcXGJlZ2lue2FsaWduKn1cIiwgXCJcXFxcYmVnaW57YWxpZ25hdH1cIiwgXCJcXFxcYmVnaW57YWxpZ25hdCp9XCIsIFwiXFxcXGJlZ2lue2FsaWduZWR9XCIsIFwiXFxcXGJlZ2lue2FsaWduZWRhdH1cIiwgXCJcXFxcYmVnaW57YXJyYXl9XCIsIFwiXFxcXGJlZ2lue0JtYXRyaXh9XCIsIFwiXFxcXGJlZ2lue2JtYXRyaXh9XCIsIFwiXFxcXGJlZ2lue2Nhc2VzfVwiLCBcIlxcXFxiZWdpbntDRH1cIiwgXCJcXFxcYmVnaW57ZXFuYXJyYXl9XCIsIFwiXFxcXGJlZ2lue2VxbmFycmF5Kn1cIiwgXCJcXFxcYmVnaW57ZXF1YXRpb259XCIsIFwiXFxcXGJlZ2lue2VxdWF0aW9uKn1cIiwgXCJcXFxcYmVnaW57Z2F0aGVyfVwiLCBcIlxcXFxiZWdpbntnYXRoZXIqfVwiLCBcIlxcXFxiZWdpbntnYXRoZXJlZH1cIiwgXCJcXFxcYmVnaW57bWF0cml4fVwiLFxuICAgICAgICBcIlxcXFxiZWdpbnttdWx0bGluZX1cIiwgXCJcXFxcYmVnaW57bXVsdGxpbmUqfVwiLCBcIlxcXFxiZWdpbntwbWF0cml4fVwiLCBcIlxcXFxiZWdpbntzbWFsbG1hdHJpeH1cIiwgXCJcXFxcYmVnaW57c3BsaXR9XCIsIFwiXFxcXGJlZ2lue3N1YmFycmF5fVwiLCBcIlxcXFxiZWdpbntWbWF0cml4fVwiLCBcIlxcXFxiZWdpbnt2bWF0cml4fVwiXVxufVxuIiwiaW1wb3J0IHtcbiAgRGlyZWN0aW9uLFxuICBkZWZhdWx0RGlyZWN0aW9uLFxuICBtYW5hZ2VQbGFjZWhvbGRlcnMsXG4gIHVwZGF0ZVNlbGVjdGVkU3VnZ2VzdGlvbkZyb20sXG4gIGNvcHlPYmplY3QsXG4gIHNlbGVjdExhc3RTdWdnZXN0aW9uLFxufSBmcm9tICcuL2F1dG9jb21wbGV0ZS9jb3JlJ1xuaW1wb3J0IHtcbiAgZ2VuZXJhdGVWaWV3LFxuICBhcHBlbmRXaWRnZXQsXG4gIHVwZGF0ZUNhY2hlZFZpZXcsXG4gIHNjcm9sbFRvLFxufSBmcm9tICcuL2F1dG9jb21wbGV0ZS92aWV3J1xuXG5pbXBvcnQgeyBGbG93UHJvdmlkZXIgfSBmcm9tICcuL3Byb3ZpZGVycy9mbG93J1xuaW1wb3J0IHsgVG9rZW5pemVTdHJhdGVneSB9IGZyb20gJy4vcHJvdmlkZXJzL2Zsb3cvdG9rZW5pemVyJ1xuaW1wb3J0IHsgVG9rZW5pemVyRmFjdG9yeSB9IGZyb20gJy4vcHJvdmlkZXJzL2Zsb3cvZmFjdG9yeSdcbmltcG9ydCBMYVRleFByb3ZpZGVyIGZyb20gJy4vcHJvdmlkZXJzL2xhdGV4J1xuaW1wb3J0IHsgQ29tcGxldGlvbiwgUHJvdmlkZXIgfSBmcm9tICcuL3Byb3ZpZGVycy9wcm92aWRlcidcblxuaW1wb3J0IHsgQXV0b2NvbXBsZXRlU2V0dGluZ3MgfSBmcm9tICcuL3NldHRpbmdzL3NldHRpbmdzJ1xuXG5pbXBvcnQgeyBURmlsZSB9IGZyb20gJ29ic2lkaWFuJ1xuXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlIHtcbiAgcHJpdmF0ZSBwcm92aWRlcnM6IFByb3ZpZGVyW11cbiAgcHJpdmF0ZSBzdWdnZXN0aW9uczogQ29tcGxldGlvbltdXG4gIHByaXZhdGUgc2VsZWN0ZWQ6IERpcmVjdGlvblxuXG4gIHByaXZhdGUgdmlldzogSFRNTEVsZW1lbnRcbiAgcHJpdmF0ZSBjdXJzb3JBdFRyaWdnZXI/OiBDb2RlTWlycm9yLlBvc2l0aW9uXG4gIHByaXZhdGUgbGFzdENvbXBsZXRpb25Xb3JkPzogc3RyaW5nXG4gIHByaXZhdGUgb25DbGlja0NhbGxiYWNrOiAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHZvaWRcblxuICBwcml2YXRlIHNldHRpbmdzOiBBdXRvY29tcGxldGVTZXR0aW5nc1xuXG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzOiBBdXRvY29tcGxldGVTZXR0aW5ncykge1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5nc1xuICAgIHRoaXMubG9hZFByb3ZpZGVycygpXG4gICAgdGhpcy5zdWdnZXN0aW9ucyA9IFtdXG4gICAgdGhpcy5zZWxlY3RlZCA9IGRlZmF1bHREaXJlY3Rpb24oKVxuICAgIHRoaXMudmlldyA9IG51bGxcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNTaG93bigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aWV3ICE9PSBudWxsXG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlVmlld0luKGVkaXRvcjogQ29kZU1pcnJvci5FZGl0b3IsIGF1dG9TZWxlY3Q6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgY29uc3QgaXNFbmFibGVkID0gdGhpcy5zZXR0aW5ncy5lbmFibGVkXG4gICAgaWYgKHRoaXMuaXNTaG93biB8fCAhaXNFbmFibGVkKSB7XG4gICAgICB0aGlzLmN1cnNvckF0VHJpZ2dlciA9IG51bGxcbiAgICAgIHRoaXMucmVtb3ZlVmlld0Zyb20oZWRpdG9yKVxuICAgIH0gZWxzZSBpZiAoaXNFbmFibGVkKSB7XG4gICAgICBjb25zdCBjdXJzb3IgPSBjb3B5T2JqZWN0KGVkaXRvci5nZXRDdXJzb3IoKSlcbiAgICAgIGNvbnN0IGN1cnJlbnRMaW5lOiBzdHJpbmcgPSBlZGl0b3IuZ2V0TGluZShjdXJzb3IubGluZSlcblxuICAgICAgY29uc3Qgd29yZFN0YXJ0SW5kZXggPSB0aGlzLnRva2VuaXplci5sYXN0V29yZFN0YXJ0UG9zKFxuICAgICAgICBjdXJyZW50TGluZSxcbiAgICAgICAgY3Vyc29yLmNoXG4gICAgICApXG4gICAgICBjb25zdCBjdXJzb3JBdCA9IGN1cnNvci5jaFxuICAgICAgY3Vyc29yLmNoID0gd29yZFN0YXJ0SW5kZXhcbiAgICAgIHRoaXMuY3Vyc29yQXRUcmlnZ2VyID0gY3Vyc29yXG5cbiAgICAgIGNvbnN0IHdvcmQgPSBjdXJyZW50TGluZS5zbGljZSh3b3JkU3RhcnRJbmRleCwgY3Vyc29yQXQpXG5cbiAgICAgIHRoaXMuc2hvd1ZpZXdJbihlZGl0b3IsIHdvcmQsIGF1dG9TZWxlY3QpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHVwZGF0ZVZpZXdJbihcbiAgICBlZGl0b3I6IENvZGVNaXJyb3IuRWRpdG9yLFxuICAgIGV2ZW50OiBLZXlib2FyZEV2ZW50LFxuICAgIG9wdGlvbnM6IHsgdXBkYXRlU2VsZWN0ZWQ6IGJvb2xlYW47IGF1dG9TZWxlY3Q6IGJvb2xlYW4gfSA9IHtcbiAgICAgIHVwZGF0ZVNlbGVjdGVkOiB0cnVlLFxuICAgICAgYXV0b1NlbGVjdDogdHJ1ZSxcbiAgICB9XG4gICkge1xuICAgIGlmICghZXZlbnQuY3RybEtleSAmJiBldmVudC5rZXkgPT09ICcgJykgcmV0dXJuIHRoaXMucmVtb3ZlVmlld0Zyb20oZWRpdG9yKVxuXG4gICAgaWYgKG9wdGlvbnMudXBkYXRlU2VsZWN0ZWQpXG4gICAgICB0aGlzLnNlbGVjdGVkID0gdXBkYXRlU2VsZWN0ZWRTdWdnZXN0aW9uRnJvbShcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQsXG4gICAgICAgIHRoaXMuc3VnZ2VzdGlvbnMubGVuZ3RoXG4gICAgICApXG5cbiAgICBjb25zdCBjdXJzb3IgPSBjb3B5T2JqZWN0KGVkaXRvci5nZXRDdXJzb3IoKSlcbiAgICBjb25zdCBjdXJyZW50TGluZTogc3RyaW5nID0gZWRpdG9yLmdldExpbmUoY3Vyc29yLmxpbmUpXG4gICAgY29uc3QgY29tcGxldGlvbldvcmQgPSB0aGlzLnRva2VuaXplci5sYXN0V29yZEZyb20oY3VycmVudExpbmUsIGN1cnNvci5jaClcblxuICAgIGNvbnN0IHJlY3JlYXRlID0gY29tcGxldGlvbldvcmQgIT09IHRoaXMubGFzdENvbXBsZXRpb25Xb3JkXG4gICAgaWYgKHJlY3JlYXRlKSB7XG4gICAgICB0aGlzLmxhc3RDb21wbGV0aW9uV29yZCA9IGNvbXBsZXRpb25Xb3JkXG4gICAgICB0aGlzLnNob3dWaWV3SW4oZWRpdG9yLCBjb21wbGV0aW9uV29yZCwgb3B0aW9ucy5hdXRvU2VsZWN0KVxuICAgIH0gZWxzZSB1cGRhdGVDYWNoZWRWaWV3KHRoaXMudmlldywgdGhpcy5zZWxlY3RlZC5pbmRleClcblxuICAgIHNjcm9sbFRvKHRoaXMuc2VsZWN0ZWQsIHRoaXMudmlldywgdGhpcy5zdWdnZXN0aW9ucy5sZW5ndGgpXG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlVmlld0Zyb20oZWRpdG9yOiBDb2RlTWlycm9yLkVkaXRvcikge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBkZWZhdWx0RGlyZWN0aW9uKClcbiAgICBlZGl0b3IucmVtb3ZlS2V5TWFwKHRoaXMua2V5TWFwcylcblxuICAgIGlmICghdGhpcy52aWV3KSByZXR1cm5cbiAgICB0aGlzLmFkZENsaWNrTGlzdGVuZXIodGhpcy52aWV3LCBlZGl0b3IsIGZhbHNlKVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBwYXJlbnROb2RlID0gdGhpcy52aWV3LnBhcmVudE5vZGVcbiAgICAgIGlmIChwYXJlbnROb2RlKSB7XG4gICAgICAgIGNvbnN0IHJlbW92ZWQgPSBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMudmlldylcbiAgICAgICAgaWYgKHJlbW92ZWQpIHRoaXMudmlldyA9IG51bGxcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBDYW5ub3QgZGVzdHJveSB2aWV3LiBSZWFzb246ICR7ZX1gKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVQcm92aWRlcnNGcm9tKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBlZGl0b3I6IENvZGVNaXJyb3IuRWRpdG9yKSB7XG4gICAgY29uc3QgdG9rZW5pemVyID0gVG9rZW5pemVyRmFjdG9yeS5nZXRUb2tlbml6ZXIoXG4gICAgICB0aGlzLnNldHRpbmdzLmZsb3dQcm92aWRlclRva2VuaXplU3RyYXRlZ3lcbiAgICApXG4gICAgaWYgKFxuICAgICAgIWV2ZW50LmN0cmxLZXkgJiZcbiAgICAgICh0b2tlbml6ZXIuaXNXb3JkU2VwYXJhdG9yKGV2ZW50LmtleSkgfHwgZXZlbnQua2V5ID09PSAnRW50ZXInKVxuICAgICkge1xuICAgICAgY29uc3QgY3Vyc29yID0gY29weU9iamVjdChlZGl0b3IuZ2V0Q3Vyc29yKCkpXG4gICAgICBpZiAoL0VudGVyLy50ZXN0KGV2ZW50LmtleSkpIHtcbiAgICAgICAgY3Vyc29yLmxpbmUgLT0gMVxuICAgICAgICBjb25zdCBjdXJyZW50TGluZSA9IGVkaXRvci5nZXRMaW5lKGN1cnNvci5saW5lKVxuXG4gICAgICAgIC8vIENoYW5nZWQgZWRpdG9yIHBhbmVcbiAgICAgICAgaWYgKCFjdXJyZW50TGluZSkgcmV0dXJuXG5cbiAgICAgICAgY3Vyc29yLmNoID0gY3VycmVudExpbmUubGVuZ3RoXG4gICAgICB9XG4gICAgICBjb25zdCBsaW5lID0gZWRpdG9yLmdldExpbmUoY3Vyc29yLmxpbmUpXG4gICAgICB0aGlzLnByb3ZpZGVycy5mb3JFYWNoKChwcm92aWRlcikgPT4ge1xuICAgICAgICAvLyBGb3Igbm93IG9ubHkgRmxvd1Byb3ZpZGVyXG4gICAgICAgIGlmIChwcm92aWRlciBpbnN0YW5jZW9mIEZsb3dQcm92aWRlcilcbiAgICAgICAgICBwcm92aWRlci5hZGRMYXN0V29yZEZyb20obGluZSwgY3Vyc29yLmNoLCB0aGlzLnRva2VuaXplclN0cmF0ZWd5KVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2NhbkZpbGUoZmlsZTogVEZpbGUsIHN0cmF0ZWd5OiBUb2tlbml6ZVN0cmF0ZWd5ID0gJ2RlZmF1bHQnKSB7XG4gICAgY29uc3QgcHJvdmlkZXJzID0gdGhpcy5wcm92aWRlcnNcbiAgICBmaWxlLnZhdWx0Py5yZWFkKGZpbGUpLnRoZW4oKGNvbnRlbnQ6IHN0cmluZykgPT4ge1xuICAgICAgLy8gVE9ETzogTWFrZSBpdCBhc3luY1xuICAgICAgcHJvdmlkZXJzLmZvckVhY2goKHByb3ZpZGVyKSA9PiB7XG4gICAgICAgIGlmIChwcm92aWRlciBpbnN0YW5jZW9mIEZsb3dQcm92aWRlcilcbiAgICAgICAgICBwcm92aWRlci5hZGRXb3Jkc0Zyb20oY29udGVudCwgc3RyYXRlZ3kpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvLyBUT0RPOiBJbXByb3ZlIHN1Z2dlc3Rpb25zIHB1YmxpYyBBUElcbiAgcHVibGljIHNlbGVjdExhc3RTdWdnZXN0aW9uKCkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB7XG4gICAgICBpbmRleDogdGhpcy5zdWdnZXN0aW9ucy5sZW5ndGggLSAxLFxuICAgICAgZGlyZWN0aW9uOiAnYmFja3dhcmQnLFxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0IHRva2VuaXplcigpIHtcbiAgICByZXR1cm4gVG9rZW5pemVyRmFjdG9yeS5nZXRUb2tlbml6ZXIodGhpcy50b2tlbml6ZXJTdHJhdGVneSlcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IHRva2VuaXplclN0cmF0ZWd5KCkge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdzLmZsb3dQcm92aWRlclRva2VuaXplU3RyYXRlZ3lcbiAgfVxuXG4gIHByaXZhdGUgc2hvd1ZpZXdJbihcbiAgICBlZGl0b3I6IENvZGVNaXJyb3IuRWRpdG9yLFxuICAgIGNvbXBsZXRpb25Xb3JkOiBzdHJpbmcgPSAnJyxcbiAgICBhdXRvU2VsZWN0OiBib29sZWFuID0gdHJ1ZVxuICApIHtcbiAgICBpZiAodGhpcy52aWV3KSB0aGlzLnJlbW92ZVZpZXdGcm9tKGVkaXRvcilcblxuICAgIHRoaXMuc3VnZ2VzdGlvbnMgPSB0aGlzLnByb3ZpZGVycy5yZWR1Y2UoXG4gICAgICAoYWNjLCBwcm92aWRlcikgPT4gYWNjLmNvbmNhdChwcm92aWRlci5tYXRjaFdpdGgoY29tcGxldGlvbldvcmQgfHwgJycpKSxcbiAgICAgIFtdXG4gICAgKVxuXG4gICAgaWYgKGF1dG9TZWxlY3QgJiYgdGhpcy5zdWdnZXN0aW9ucy5sZW5ndGggPT09IDEpIHtcbiAgICAgIC8vIFN1Z2dlc3QgYXV0b21hdGljYWxseVxuICAgICAgdGhpcy5zZWxlY3RlZC5pbmRleCA9IDBcbiAgICAgIHRoaXMuc2VsZWN0U3VnZ2VzdGlvbihlZGl0b3IpXG4gICAgfSBlbHNlIHtcbiAgICAgIGVkaXRvci5hZGRLZXlNYXAodGhpcy5rZXlNYXBzKVxuXG4gICAgICB0aGlzLnZpZXcgPSBnZW5lcmF0ZVZpZXcodGhpcy5zdWdnZXN0aW9ucywgdGhpcy5zZWxlY3RlZC5pbmRleClcbiAgICAgIHRoaXMuYWRkQ2xpY2tMaXN0ZW5lcih0aGlzLnZpZXcsIGVkaXRvcilcbiAgICAgIGFwcGVuZFdpZGdldChlZGl0b3IsIHRoaXMudmlldylcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGtleU1hcHMgPSB7XG4gICAgLy8gT3ZlcnJpZGUgY29kZSBtaXJyb3IgZGVmYXVsdCBrZXkgbWFwc1xuICAgICdDdHJsLVAnOiAoKSA9PiB7fSxcbiAgICAnQ3RybC1OJzogKCkgPT4ge30sXG4gICAgRG93bjogKCkgPT4ge30sXG4gICAgVXA6ICgpID0+IHt9LFxuICAgIEVudGVyOiAoZWRpdG9yOiBDb2RlTWlycm9yLkVkaXRvcikgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RTdWdnZXN0aW9uKGVkaXRvcilcbiAgICB9LFxuICAgIEVzYzogKGVkaXRvcjogQ29kZU1pcnJvci5FZGl0b3IpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlVmlld0Zyb20oZWRpdG9yKVxuICAgICAgaWYgKGVkaXRvci5nZXRPcHRpb24oJ2tleU1hcCcpID09PSAndmltLWluc2VydCcpXG4gICAgICAgIGVkaXRvci5vcGVyYXRpb24oKCkgPT4ge1xuICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9jb2RlbWlycm9yL0NvZGVNaXJyb3IvYmxvYi9iZDM3YTk2ZDM2MmI4ZDkyODk1ZDM5NjBkNTY5MTY4ZWMzOWU0MTY1L2tleW1hcC92aW0uanMjTDUzNDFcbiAgICAgICAgICBjb25zdCB2aW0gPSBlZGl0b3Iuc3RhdGUudmltXG4gICAgICAgICAgdmltLmluc2VydE1vZGUgPSBmYWxzZVxuICAgICAgICAgIGVkaXRvci5zZXRPcHRpb24oJ2tleU1hcCcsICd2aW0nKVxuICAgICAgICB9KVxuICAgIH0sXG4gIH1cblxuICAvLyBUT0RPOiBSZWZhY3RvclxuICBwcml2YXRlIGFkZENsaWNrTGlzdGVuZXIoXG4gICAgdmlldzogSFRNTEVsZW1lbnQsXG4gICAgZWRpdG9yOiBDb2RlTWlycm9yLkVkaXRvcixcbiAgICBhZGQgPSB0cnVlXG4gICkge1xuICAgIGlmICghdGhpcy5vbkNsaWNrQ2FsbGJhY2spXG4gICAgICB0aGlzLm9uQ2xpY2tDYWxsYmFjayA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50XG4gICAgICAgIGxldCBoaW50SWQgPSBlbGVtZW50LmlkXG4gICAgICAgIGlmICghaGludElkKSB7XG4gICAgICAgICAgY29uc3QgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50XG4gICAgICAgICAgaWYgKHBhcmVudCAmJiBwYXJlbnQuaWQpIGhpbnRJZCA9IHBhcmVudC5pZFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaGludElkUHJlZml4ID0gJ3N1Z2dlc3Rpb24tJ1xuICAgICAgICBpZiAoaGludElkICYmIGhpbnRJZC5zdGFydHNXaXRoKGhpbnRJZFByZWZpeCkpIHtcbiAgICAgICAgICBoaW50SWQgPSBoaW50SWQucmVwbGFjZShoaW50SWRQcmVmaXgsICcnKVxuICAgICAgICAgIGNvbnN0IGlkID0gcGFyc2VJbnQoaGludElkKVxuICAgICAgICAgIGlmIChpZCA+PSAwICYmIGlkIDwgdGhpcy5zdWdnZXN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQuaW5kZXggPSBpZFxuICAgICAgICAgICAgdGhpcy5zZWxlY3RTdWdnZXN0aW9uKGVkaXRvcilcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIGlmIChhZGQpIHZpZXcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2tDYWxsYmFjaylcbiAgICBlbHNlIHZpZXcucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2tDYWxsYmFjaylcbiAgfVxuXG4gIHByaXZhdGUgc2VsZWN0U3VnZ2VzdGlvbihlZGl0b3I6IENvZGVNaXJyb3IuRWRpdG9yKSB7XG4gICAgY29uc3QgY3Vyc29yID0gZWRpdG9yLmdldEN1cnNvcigpXG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHRoaXMuc3VnZ2VzdGlvbnNbdGhpcy5zZWxlY3RlZC5pbmRleF0/LnZhbHVlXG5cbiAgICBpZiAoIXNlbGVjdGVkVmFsdWUpIHtcbiAgICAgIHRoaXMucmVtb3ZlVmlld0Zyb20oZWRpdG9yKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyBub3JtYWxpemVkVmFsdWUsIG5ld0N1cnNvclBvc2l0aW9uIH0gPSBtYW5hZ2VQbGFjZWhvbGRlcnMoXG4gICAgICBzZWxlY3RlZFZhbHVlLFxuICAgICAgdGhpcy5jdXJzb3JBdFRyaWdnZXIhLmNoXG4gICAgKVxuXG4gICAgZWRpdG9yLm9wZXJhdGlvbigoKSA9PiB7XG4gICAgICBlZGl0b3IucmVwbGFjZVJhbmdlKG5vcm1hbGl6ZWRWYWx1ZSwgdGhpcy5jdXJzb3JBdFRyaWdnZXIsIGN1cnNvcilcblxuICAgICAgY29uc3QgdXBkYXRlZEN1cnNvciA9IHtcbiAgICAgICAgbGluZTogY3Vyc29yLmxpbmUsXG4gICAgICAgIGNoOiBuZXdDdXJzb3JQb3NpdGlvbixcbiAgICAgIH1cbiAgICAgIGVkaXRvci5zZXRDdXJzb3IodXBkYXRlZEN1cnNvcilcbiAgICB9KVxuICAgIC8vIE5lZWQgdG8gcmVtb3ZlIGl0IGhlcmUgYmVjYXVzZSBvZiBmb2N1c1xuICAgIHRoaXMucmVtb3ZlVmlld0Zyb20oZWRpdG9yKVxuICAgIGVkaXRvci5mb2N1cygpXG4gIH1cblxuICBwcml2YXRlIGxvYWRQcm92aWRlcnMoKSB7XG4gICAgY29uc3QgcHJvdmlkZXJzID0gW11cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5mbG93UHJvdmlkZXIpIHByb3ZpZGVycy5wdXNoKG5ldyBGbG93UHJvdmlkZXIoKSlcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5sYXRleFByb3ZpZGVyKSBwcm92aWRlcnMucHVzaChuZXcgTGFUZXhQcm92aWRlcigpKVxuXG4gICAgdGhpcy5wcm92aWRlcnMgPSBwcm92aWRlcnNcbiAgfVxufVxuIiwiaW1wb3J0IHsgVG9rZW5pemVTdHJhdGVneSB9IGZyb20gJ3NyYy9wcm92aWRlcnMvZmxvdy90b2tlbml6ZXInXG5cbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVTZXR0aW5ncyB7XG4gIGVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlXG5cbiAgLypcbiAgICogVHJpZ2dlciBvbiBjdHJsLXAvbiBiaW5kaW5nc1xuICAgKi9cbiAgdHJpZ2dlckxpa2VWaW06IGJvb2xlYW4gPSBmYWxzZVxuXG4gIC8vIFRPRE86IFJlZmFjdG9yIHByb3ZpZGVyIHNldHRpbmdzXG4gIGxhdGV4UHJvdmlkZXI6IGJvb2xlYW4gPSB0cnVlXG4gIGZsb3dQcm92aWRlcjogYm9vbGVhbiA9IHRydWVcbiAgZmxvd1Byb3ZpZGVyU2NhbkN1cnJlbnQ6IGJvb2xlYW4gPSB0cnVlXG4gIGZsb3dQcm92aWRlclRva2VuaXplU3RyYXRlZ3k6IFRva2VuaXplU3RyYXRlZ3kgPSAnZGVmYXVsdCdcbn1cbiIsImltcG9ydCB7IEFwcCwgTm90aWNlLCBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nIH0gZnJvbSAnb2JzaWRpYW4nXG5pbXBvcnQge1xuICBUb2tlbml6ZVN0cmF0ZWd5LFxuICBUT0tFTklaRV9TVFJBVEVHSUVTLFxufSBmcm9tICdzcmMvcHJvdmlkZXJzL2Zsb3cvdG9rZW5pemVyJ1xuaW1wb3J0IEF1dG9jb21wbGV0ZVBsdWdpbiBmcm9tICcuLi9tYWluJ1xuXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlU2V0dGluZ3NUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcbiAgcGx1Z2luOiBBdXRvY29tcGxldGVQbHVnaW5cblxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBBdXRvY29tcGxldGVQbHVnaW4pIHtcbiAgICBzdXBlcihhcHAsIHBsdWdpbilcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpblxuICB9XG5cbiAgZGlzcGxheSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lckVsIH0gPSB0aGlzXG5cbiAgICBjb250YWluZXJFbC5lbXB0eSgpXG5cbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgnaDInLCB7IHRleHQ6ICdBdXRvY29tcGxldGUgU2V0dGluZ3MnIH0pXG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKCdFbmFibGVkJylcbiAgICAgIC5zZXREZXNjKCdTZXQgdGhlIGF1dG9jb21wbGV0ZSBzdGF0ZScpXG4gICAgICAuYWRkVG9nZ2xlKChjYikgPT5cbiAgICAgICAgY2Iuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuZW5hYmxlZCkub25DaGFuZ2UoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuZW5hYmxlZCA9IHZhbHVlXG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEodGhpcy5wbHVnaW4uc2V0dGluZ3MpXG4gICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaCgpXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKCdUcmlnZ2VyIGxpa2UgVmltIGF1dG9jb21wbGV0ZScpXG4gICAgICAuc2V0RGVzYygnVXNlIENUUkwtUC9OIGJpbmRpbmdzIHRvIHRyaWdnZXIgYXV0b2NvbXBsZXRlLiBCZSBhd2FyZSBvZiBrZXliaW5kaW5nIGNsYXNoIG9uIFdpbmRvd3MgKGN0cmwtbiknKVxuICAgICAgLmFkZFRvZ2dsZSgoY2IpID0+XG4gICAgICAgIGNiLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnRyaWdnZXJMaWtlVmltKS5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50cmlnZ2VyTGlrZVZpbSA9IHZhbHVlXG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEodGhpcy5wbHVnaW4uc2V0dGluZ3MpXG4gICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaCgpXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICAvLyBQcm92aWRlcnNcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKCdUZXh0IFByb3ZpZGVycycpXG4gICAgICAuc2V0RGVzYyhcbiAgICAgICAgJ1RoZSBwcm92aWRlcnMgYmVsb3cgc3VnZ2VzdCBjb21wbGV0aW9ucyBiYXNlZCBvbiBpbnB1dC4gQmUgYXdhcmUgdGhhdCBlbmFibGluZyBtdWx0aXBsZSBwcm92aWRlcnMgY2FuIGRlY3JlYXNlIHBlcmZvcm1hbmNlLidcbiAgICAgIClcbiAgICAgIC5zZXRIZWFkaW5nKClcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldENsYXNzKCduby1ib3JkZXItdG9wJylcbiAgICAgIC5zZXROYW1lKCdMYVRleCBQcm92aWRlcicpXG4gICAgICAuc2V0RGVzYygnVG9nZ2xlIExhVGV4IHN1Z2dlc3Rpb25zJylcbiAgICAgIC5hZGRUb2dnbGUoKGNiKSA9PlxuICAgICAgICBjYi5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5sYXRleFByb3ZpZGVyKS5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5sYXRleFByb3ZpZGVyID0gdmFsdWVcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlRGF0YSh0aGlzLnBsdWdpbi5zZXR0aW5ncylcbiAgICAgICAgICB0aGlzLnBsdWdpbi5yZWZyZXNoKClcbiAgICAgICAgfSlcbiAgICAgIClcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoJ0Zsb3cgUHJvdmlkZXInKVxuICAgICAgLnNldERlc2MoJ0xlYXJucyBhcyB5b3UgdHlwZS4gRm9yIG5vdyBsaW1pdGVkIHRvIGN1cnJlbnQgc2Vzc2lvbi4nKVxuICAgICAgLmFkZFRvZ2dsZSgoY2IpID0+XG4gICAgICAgIGNiLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmZsb3dQcm92aWRlcikub25DaGFuZ2UoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuZmxvd1Byb3ZpZGVyID0gdmFsdWVcbiAgICAgICAgICBpZiAoIXZhbHVlKVxuICAgICAgICAgICAgLy8gU2NhbiBjdXJyZW50IGZpbGUgY2FuIGJlIGVuYWJsZWQgb25seSBpZiBmbG93IHByb3ZpZGVyIGlzXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5mbG93UHJvdmlkZXJTY2FuQ3VycmVudCA9IGZhbHNlXG5cbiAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlRGF0YSh0aGlzLnBsdWdpbi5zZXR0aW5ncylcbiAgICAgICAgICB0aGlzLnBsdWdpbi5yZWZyZXNoKClcbiAgICAgICAgfSlcbiAgICAgIClcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoJ0Zsb3cgUHJvdmlkZXI6IFNjYW4gc3RyYXRlZ3knKVxuICAgICAgLnNldERlc2MoJ0Nob29zZSB0aGUgZGVmYXVsdCBzY2FuIHN0cmF0ZWd5JylcbiAgICAgIC5hZGREcm9wZG93bigoY2IpID0+IHtcbiAgICAgICAgLy8gQWRkIG9wdGlvbnNcbiAgICAgICAgVE9LRU5JWkVfU1RSQVRFR0lFUy5mb3JFYWNoKChzdHJhdGVneSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNhcGl0YWxpemVkID0gc3RyYXRlZ3kucmVwbGFjZSgvXlxcdy8sIChjKSA9PlxuICAgICAgICAgICAgYy50b0xvY2FsZVVwcGVyQ2FzZSgpXG4gICAgICAgICAgKVxuICAgICAgICAgIGNiLmFkZE9wdGlvbihzdHJhdGVneSwgY2FwaXRhbGl6ZWQpXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLnBsdWdpbi5zZXR0aW5nc1xuICAgICAgICBjYi5zZXRWYWx1ZShzZXR0aW5ncy5mbG93UHJvdmlkZXJUb2tlbml6ZVN0cmF0ZWd5KS5vbkNoYW5nZShcbiAgICAgICAgICAodmFsdWU6IFRva2VuaXplU3RyYXRlZ3kpID0+IHtcbiAgICAgICAgICAgIGlmIChzZXR0aW5ncy5mbG93UHJvdmlkZXIpIHtcbiAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuZmxvd1Byb3ZpZGVyVG9rZW5pemVTdHJhdGVneSA9IHZhbHVlXG4gICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMucGx1Z2luLnNldHRpbmdzKVxuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5yZWZyZXNoKClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5ldyBOb3RpY2UoJ0Nhbm5vdCBjaGFuZ2UgYmVjYXVzZSBmbG93IHByb3ZpZGVyIGlzIG5vdCBlbmFibGVkLicpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICB9KVxuXG4gICAgLy8gVE9ETzogSW1wcm92ZSBVSSByZWFjdGl2aXR5IHdoZW4gcGFyZW50IHNldHRpbmcgaXMgZGlzYWJsZWRcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKCdGbG93IFByb3ZpZGVyOiBTY2FuIGN1cnJlbnQgZmlsZScpXG4gICAgICAuc2V0RGVzYyhcbiAgICAgICAgJ1Byb3ZpZGVzIGN1cnJlbnQgZmlsZSB0ZXh0IHN1Z2dlc3Rpb25zLiBCZSBhd2FyZSBvZiBwZXJmb3JtYW5jZSBpc3N1ZXMgd2l0aCBsYXJnZSBmaWxlcy4nXG4gICAgICApXG4gICAgICAuYWRkVG9nZ2xlKChjYikgPT4ge1xuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMucGx1Z2luLnNldHRpbmdzXG4gICAgICAgIGNiLnNldFZhbHVlKFxuICAgICAgICAgIHNldHRpbmdzLmZsb3dQcm92aWRlciAmJiBzZXR0aW5ncy5mbG93UHJvdmlkZXJTY2FuQ3VycmVudFxuICAgICAgICApLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgIGlmIChzZXR0aW5ncy5mbG93UHJvdmlkZXIpIHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmZsb3dQcm92aWRlclNjYW5DdXJyZW50ID0gdmFsdWVcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMucGx1Z2luLnNldHRpbmdzKVxuICAgICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaCgpXG4gICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgLy8gQ2Fubm90IGVuYWJsZSBwbHVnaW5cbiAgICAgICAgICAgIGNiLnNldFZhbHVlKGZhbHNlKVxuICAgICAgICAgICAgbmV3IE5vdGljZSgnQ2Fubm90IGFjdGl2YXRlIGJlY2F1c2UgZmxvdyBwcm92aWRlciBpcyBub3QgZW5hYmxlZC4nKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gIH1cbn1cbiIsImltcG9ydCB7IFBsdWdpbiB9IGZyb20gJ29ic2lkaWFuJ1xuaW1wb3J0IHtcbiAgVG9rZW5pemVTdHJhdGVneSxcbiAgVE9LRU5JWkVfU1RSQVRFR0lFUyxcbn0gZnJvbSAnLi9wcm92aWRlcnMvZmxvdy90b2tlbml6ZXInXG5pbXBvcnQgeyBBdXRvY29tcGxldGVTZXR0aW5ncyB9IGZyb20gJy4vc2V0dGluZ3Mvc2V0dGluZ3MnXG5cbmV4cG9ydCBjbGFzcyBTdGF0dXNCYXJWaWV3IHtcbiAgcHJpdmF0ZSByZWFkb25seSBwbHVnaW46IFBsdWdpblxuICBwcml2YXRlIHNldHRpbmdzOiBBdXRvY29tcGxldGVTZXR0aW5nc1xuXG4gIHByaXZhdGUgc3RhdHVzQmFyOiBIVE1MRWxlbWVudFxuXG4gIGNvbnN0cnVjdG9yKHBsdWdpbjogUGx1Z2luLCBzZXR0aW5nczogQXV0b2NvbXBsZXRlU2V0dGluZ3MpIHtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpblxuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5nc1xuICB9XG5cbiAgYWRkU3RhdHVzQmFyKCkge1xuICAgIGlmICghdGhpcy5zZXR0aW5ncy5mbG93UHJvdmlkZXIpIHJldHVyblxuXG4gICAgY29uc3Qgc3RhdHVzQmFyID0gdGhpcy5wbHVnaW4uYWRkU3RhdHVzQmFySXRlbSgpXG4gICAgc3RhdHVzQmFyLmFkZENsYXNzKCdtb2QtY2xpY2thYmxlJylcbiAgICBzdGF0dXNCYXIuaW5uZXJIVE1MID0gdGhpcy5nZXRTdGF0dXNCYXJUZXh0KFxuICAgICAgdGhpcy5zZXR0aW5ncy5mbG93UHJvdmlkZXJUb2tlbml6ZVN0cmF0ZWd5XG4gICAgKVxuICAgIHN0YXR1c0Jhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25TdGF0dXNCYXJDbGljaylcblxuICAgIHRoaXMuc3RhdHVzQmFyID0gc3RhdHVzQmFyXG4gIH1cblxuICByZW1vdmVTdGF0dXNCYXIoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXR1c0JhcikgcmV0dXJuXG5cbiAgICB0aGlzLnN0YXR1c0Jhci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25TdGF0dXNCYXJDbGljaylcbiAgICB0aGlzLnN0YXR1c0Jhci5yZW1vdmUoKVxuICB9XG5cbiAgb25TdGF0dXNCYXJDbGljayA9ICgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50U3RyYXRlZ3kgPSB0aGlzLnNldHRpbmdzLmZsb3dQcm92aWRlclRva2VuaXplU3RyYXRlZ3lcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBUT0tFTklaRV9TVFJBVEVHSUVTLmZpbmRJbmRleChcbiAgICAgIChzdHJhdGVneSkgPT4gc3RyYXRlZ3kgPT09IGN1cnJlbnRTdHJhdGVneVxuICAgIClcbiAgICBjb25zdCBuZXdTdHJhdGVneSA9XG4gICAgICBjdXJyZW50SW5kZXggPT09IFRPS0VOSVpFX1NUUkFURUdJRVMubGVuZ3RoIC0gMVxuICAgICAgICA/IFRPS0VOSVpFX1NUUkFURUdJRVNbMF1cbiAgICAgICAgOiBUT0tFTklaRV9TVFJBVEVHSUVTW2N1cnJlbnRJbmRleCArIDFdXG5cbiAgICB0aGlzLnNldHRpbmdzLmZsb3dQcm92aWRlclRva2VuaXplU3RyYXRlZ3kgPSBuZXdTdHJhdGVneVxuICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpXG5cbiAgICB0aGlzLnN0YXR1c0Jhci5pbm5lckhUTUwgPSB0aGlzLmdldFN0YXR1c0JhclRleHQobmV3U3RyYXRlZ3kpXG4gIH1cblxuICBwcml2YXRlIGdldFN0YXR1c0JhclRleHQoc3RyYXRlZ3k6IFRva2VuaXplU3RyYXRlZ3kpIHtcbiAgICByZXR1cm4gYHN0cmF0ZWd5OiAke3N0cmF0ZWd5fWBcbiAgfVxufVxuIiwiaW1wb3J0IHsgTWFya2Rvd25WaWV3LCBOb3RpY2UsIFBsdWdpbiwgVEZpbGUgfSBmcm9tICdvYnNpZGlhbidcbmltcG9ydCB7IEF1dG9jb21wbGV0ZSB9IGZyb20gJy4vYXV0b2NvbXBsZXRlJ1xuaW1wb3J0IHsgaXNWaW1Ob3JtYWxNb2RlIH0gZnJvbSAnLi9hdXRvY29tcGxldGUvY29yZSdcbmltcG9ydCB7IFRPS0VOSVpFX1NUUkFURUdJRVMgfSBmcm9tICcuL3Byb3ZpZGVycy9mbG93L3Rva2VuaXplcidcbmltcG9ydCB7IEF1dG9jb21wbGV0ZVNldHRpbmdzIH0gZnJvbSAnLi9zZXR0aW5ncy9zZXR0aW5ncydcbmltcG9ydCB7IEF1dG9jb21wbGV0ZVNldHRpbmdzVGFiIH0gZnJvbSAnLi9zZXR0aW5ncy9zZXR0aW5ncy10YWInXG5pbXBvcnQgeyBTdGF0dXNCYXJWaWV3IH0gZnJvbSAnLi9zdGF0dXNiYXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9jb21wbGV0ZVBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XG4gIHByaXZhdGUgYXV0b2NvbXBsZXRlOiBBdXRvY29tcGxldGVcbiAgcHJpdmF0ZSBsYXN0VXNlZEVkaXRvcjogQ29kZU1pcnJvci5FZGl0b3JcblxuICBwcml2YXRlIHN0YXR1c0JhcjogU3RhdHVzQmFyVmlld1xuXG4gIHNldHRpbmdzOiBBdXRvY29tcGxldGVTZXR0aW5nc1xuXG4gIGFzeW5jIG9ubG9hZCgpIHtcbiAgICBjb25zb2xlLmxvZygnTG9hZGluZyBBdXRvY29tcGxldGUgcGx1Z2luLicpXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICBuZXcgQXV0b2NvbXBsZXRlU2V0dGluZ3MoKSxcbiAgICAgIGF3YWl0IHRoaXMubG9hZERhdGEoKVxuICAgIClcbiAgICB0aGlzLmFkZFNldHRpbmdUYWIobmV3IEF1dG9jb21wbGV0ZVNldHRpbmdzVGFiKHRoaXMuYXBwLCB0aGlzKSlcblxuICAgIGlmICghdGhpcy5zZXR0aW5ncy5lbmFibGVkKSByZXR1cm5cblxuICAgIHRoaXMuc3RhdHVzQmFyID0gbmV3IFN0YXR1c0JhclZpZXcodGhpcywgdGhpcy5zZXR0aW5ncylcbiAgICB0aGlzLmVuYWJsZSgpXG4gICAgdGhpcy5hZGRDb21tYW5kcygpXG4gIH1cblxuICBhc3luYyBvbnVubG9hZCgpIHtcbiAgICBjb25zb2xlLmxvZygnVW5sb2FkZWQgT2JzaWRpYW4gQXV0b2NvbXBsZXRlJylcbiAgICB0aGlzLmRpc2FibGUoKVxuICB9XG5cbiAgYXN5bmMgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRpc2FibGUoKVxuICAgIHRoaXMuZW5hYmxlKClcbiAgfVxuXG4gIHByaXZhdGUgYWRkQ29tbWFuZHMoKSB7XG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAnYXV0b2NvbXBsZXRlLXRvZ2dsZScsXG4gICAgICBuYW1lOiAnVG9nZ2xlIEF1dG9jb21wbGV0ZScsXG4gICAgICBob3RrZXlzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RpZmllcnM6IFsnQ3RybCddLFxuICAgICAgICAgIGtleTogJyAnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGF1dG9jb21wbGV0ZSA9IHRoaXMuYXV0b2NvbXBsZXRlXG4gICAgICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuZ2V0VmFsaWRFZGl0b3JGb3IoYXV0b2NvbXBsZXRlKVxuXG4gICAgICAgIGlmIChlZGl0b3IpIHtcbiAgICAgICAgICAvLyBEbyBub3Qgb3BlbiBvbiB2aW0gbm9ybWFsIG1vZGVcbiAgICAgICAgICBpZiAoaXNWaW1Ob3JtYWxNb2RlKGVkaXRvcikpIHJldHVyblxuXG4gICAgICAgICAgYXV0b2NvbXBsZXRlLnRvZ2dsZVZpZXdJbihlZGl0b3IpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSlcblxuICAgIHRoaXMuYWRkU2NhbkNvbW1hbmRzKClcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLmF1dG9jb21wbGV0ZSA9IG5ldyBBdXRvY29tcGxldGUodGhpcy5zZXR0aW5ncylcblxuICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5zZXR0aW5nc1xuICAgIGlmICh0aGlzLnNldHRpbmdzLmZsb3dQcm92aWRlcikgdGhpcy5zdGF0dXNCYXIuYWRkU3RhdHVzQmFyKClcbiAgICBpZiAoc2V0dGluZ3MuZmxvd1Byb3ZpZGVyU2NhbkN1cnJlbnQpIHtcbiAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5vbignZmlsZS1vcGVuJywgdGhpcy5vbkZpbGVPcGVuZWQsIHRoaXMpXG5cbiAgICAgIGlmICh0aGlzLmFwcC53b3Jrc3BhY2UubGF5b3V0UmVhZHkpIHRoaXMub25MYXlvdXRSZWFkeSgpXG4gICAgICB0aGlzLmFwcC53b3Jrc3BhY2Uub24oJ2xheW91dC1yZWFkeScsIHRoaXMub25MYXlvdXRSZWFkeSwgdGhpcylcbiAgICB9XG5cbiAgICB0aGlzLnJlZ2lzdGVyQ29kZU1pcnJvcigoZWRpdG9yKSA9PiB7XG4gICAgICBlZGl0b3Iub24oJ2tleWRvd24nLCB0aGlzLmtleURvd25MaXN0ZW5lcilcbiAgICAgIGVkaXRvci5vbigna2V5dXAnLCB0aGlzLmtleVVwTGlzdGVuZXIpXG4gICAgfSlcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgY29uc3Qgd29ya3NwYWNlID0gdGhpcy5hcHAud29ya3NwYWNlXG4gICAgLy8gQWx3YXlzIHJlbW92ZSB0byBhdm9pZCBhbnkga2luZCBwcm9ibGVtXG4gICAgd29ya3NwYWNlLm9mZignZmlsZS1vcGVuJywgdGhpcy5vbkZpbGVPcGVuZWQpXG4gICAgd29ya3NwYWNlLm9mZignbGF5b3V0LXJlYWR5JywgdGhpcy5vbkxheW91dFJlYWR5KVxuXG4gICAgdGhpcy5zdGF0dXNCYXIucmVtb3ZlU3RhdHVzQmFyKClcblxuICAgIHdvcmtzcGFjZS5pdGVyYXRlQ29kZU1pcnJvcnMoKGNtKSA9PiB7XG4gICAgICBjbS5vZmYoJ2tleXVwJywgdGhpcy5rZXlVcExpc3RlbmVyKVxuICAgICAgY20ub2ZmKCdrZXlkb3duJywgdGhpcy5rZXlEb3duTGlzdGVuZXIpXG4gICAgICB0aGlzLmF1dG9jb21wbGV0ZS5yZW1vdmVWaWV3RnJvbShjbSlcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRTY2FuQ29tbWFuZHMoKSB7XG4gICAgVE9LRU5JWkVfU1RSQVRFR0lFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICBjb25zdCBjYXBpdGFsaXplZCA9IHR5cGUucmVwbGFjZSgvXlxcdy8sIChjKSA9PiBjLnRvTG9jYWxlVXBwZXJDYXNlKCkpXG4gICAgICBjb25zdCBuYW1lID0gYFNjYW4gY3VycmVudCBmaWxlICR7XG4gICAgICAgIHR5cGUgIT09ICdkZWZhdWx0JyA/IGAoJHtjYXBpdGFsaXplZH0pYCA6ICcnXG4gICAgICB9YFxuXG4gICAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgICBpZDogYGF1dG9jb21wbGV0ZS1zY2FuLWN1cnJlbnQtZmlsZS0ke3R5cGV9YCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MuZmxvd1Byb3ZpZGVyU2NhbkN1cnJlbnQpIHtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UoXG4gICAgICAgICAgICAgICdQbGVhc2UgYWN0aXZhdGUgc2V0dGluZyBmbG93IFByb3ZpZGVyOiBTY2FuIGN1cnJlbnQgZmlsZSdcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBhdXRvY29tcGxldGUgPSB0aGlzLmF1dG9jb21wbGV0ZVxuICAgICAgICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuZ2V0VmFsaWRFZGl0b3JGb3IoYXV0b2NvbXBsZXRlKVxuXG4gICAgICAgICAgaWYgKGVkaXRvcikge1xuICAgICAgICAgICAgY29uc3QgZmlsZSA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVGaWxlKClcbiAgICAgICAgICAgIGF1dG9jb21wbGV0ZS5zY2FuRmlsZShmaWxlLCB0eXBlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8qXG4gICAqIExpc3RlbmVyIHVzZWQgdG8gdHJpZ2dlciBhdXRvY29tcGxldGVcbiAgICovXG4gIHByaXZhdGUga2V5RG93bkxpc3RlbmVyID0gKFxuICAgIGVkaXRvcjogQ29kZU1pcnJvci5FZGl0b3IsXG4gICAgZXZlbnQ6IEtleWJvYXJkRXZlbnRcbiAgKSA9PiB7XG4gICAgY29uc3QgYXV0b2NvbXBsZXRlID0gdGhpcy5hdXRvY29tcGxldGVcblxuICAgIC8vIFRPRE86IFJlZmFjdG9yIGF1dG9jb21wbGV0ZSBiZWhhdmlvciBvcHRpb25zXG4gICAgLy8gVHJpZ2dlciBsaWtlIFZpbSBhdXRvY29tcGxldGUgKGN0cmwrcC9uKVxuICAgIGxldCB1cGRhdGVTZWxlY3RlZCA9IHRydWVcbiAgICBsZXQgYXV0b1NlbGVjdCA9IHRydWVcbiAgICBpZiAoXG4gICAgICB0aGlzLnNldHRpbmdzLnRyaWdnZXJMaWtlVmltICYmXG4gICAgICAhaXNWaW1Ob3JtYWxNb2RlKGVkaXRvcikgJiZcbiAgICAgICFhdXRvY29tcGxldGUuaXNTaG93biAmJlxuICAgICAgZXZlbnQuY3RybEtleSAmJlxuICAgICAgKGV2ZW50LmtleSA9PT0gJ24nIHx8IGV2ZW50LmtleSA9PT0gJ3AnKVxuICAgICkge1xuICAgICAgLy8gRG8gbm90IHVwZGF0ZSBzaW5jZSB3ZSBhcmUgY2hhbmdpbmcgc2VsZWN0ZWRcbiAgICAgIHVwZGF0ZVNlbGVjdGVkID0gZmFsc2VcbiAgICAgIC8vIERvIG5vdCBhdXRvIHNlbGVjdCBvdGhlcndpc2UgY3Vyc29yIGp1bXBzIG9uIGFuIGFub3RoZXIgbGluZVxuICAgICAgYXV0b1NlbGVjdCA9IGZhbHNlXG5cbiAgICAgIGF1dG9jb21wbGV0ZS50b2dnbGVWaWV3SW4oZWRpdG9yLCBhdXRvU2VsZWN0KVxuXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSAncCcpIGF1dG9jb21wbGV0ZS5zZWxlY3RMYXN0U3VnZ2VzdGlvbigpXG4gICAgfVxuXG4gICAgaWYgKCFhdXRvY29tcGxldGUuaXNTaG93bikgcmV0dXJuXG5cbiAgICB0aGlzLnVwZGF0ZUVkaXRvcklmQ2hhbmdlZChlZGl0b3IsIGF1dG9jb21wbGV0ZSlcblxuICAgIGF1dG9jb21wbGV0ZS51cGRhdGVWaWV3SW4oZWRpdG9yLCBldmVudCwgeyB1cGRhdGVTZWxlY3RlZCwgYXV0b1NlbGVjdCB9KVxuICB9XG5cbiAgLypcbiAgICogTGlzdGVuZXIgdXNlZCB0byBzY2FuIGN1cnJlbnQgd29yZFxuICAgKi9cbiAgcHJpdmF0ZSBrZXlVcExpc3RlbmVyID0gKGVkaXRvcjogQ29kZU1pcnJvci5FZGl0b3IsIGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgY29uc3QgYXV0b2NvbXBsZXRlID0gdGhpcy5hdXRvY29tcGxldGVcbiAgICBhdXRvY29tcGxldGUudXBkYXRlUHJvdmlkZXJzRnJvbShldmVudCwgZWRpdG9yKVxuICB9XG5cbiAgcHJpdmF0ZSBvbkxheW91dFJlYWR5KCkge1xuICAgIGNvbnN0IGZpbGUgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlRmlsZSgpXG4gICAgaWYgKGZpbGUpXG4gICAgICB0aGlzLmF1dG9jb21wbGV0ZS5zY2FuRmlsZShcbiAgICAgICAgZmlsZSxcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5mbG93UHJvdmlkZXJUb2tlbml6ZVN0cmF0ZWd5XG4gICAgICApXG4gIH1cblxuICBwcml2YXRlIG9uRmlsZU9wZW5lZChmaWxlOiBURmlsZSkge1xuICAgIGlmIChmaWxlKVxuICAgICAgdGhpcy5hdXRvY29tcGxldGUuc2NhbkZpbGUoXG4gICAgICAgIGZpbGUsXG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZmxvd1Byb3ZpZGVyVG9rZW5pemVTdHJhdGVneVxuICAgICAgKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRWYWxpZEVkaXRvckZvcihcbiAgICBhdXRvY29tcGxldGU6IEF1dG9jb21wbGV0ZVxuICApOiBDb2RlTWlycm9yLkVkaXRvciB8IG51bGwge1xuICAgIGNvbnN0IGN1cnJlbnRFZGl0b3IgPSB0aGlzLmdldEN1cnJlbnRFZGl0b3IoKVxuXG4gICAgaWYgKGN1cnJlbnRFZGl0b3IpIHRoaXMudXBkYXRlRWRpdG9ySWZDaGFuZ2VkKGN1cnJlbnRFZGl0b3IsIGF1dG9jb21wbGV0ZSlcblxuICAgIHJldHVybiBjdXJyZW50RWRpdG9yXG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUVkaXRvcklmQ2hhbmdlZChcbiAgICBlZGl0b3I6IENvZGVNaXJyb3IuRWRpdG9yLFxuICAgIGF1dG9jb21wbGV0ZTogQXV0b2NvbXBsZXRlXG4gICkge1xuICAgIGlmICghdGhpcy5sYXN0VXNlZEVkaXRvcikgdGhpcy5sYXN0VXNlZEVkaXRvciA9IGVkaXRvclxuXG4gICAgaWYgKGVkaXRvciAhPT0gdGhpcy5sYXN0VXNlZEVkaXRvcikge1xuICAgICAgYXV0b2NvbXBsZXRlLnJlbW92ZVZpZXdGcm9tKHRoaXMubGFzdFVzZWRFZGl0b3IpXG4gICAgICB0aGlzLmxhc3RVc2VkRWRpdG9yID0gZWRpdG9yXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDdXJyZW50RWRpdG9yKCk6IENvZGVNaXJyb3IuRWRpdG9yIHwgbnVsbCB7XG4gICAgY29uc3QgdmlldyA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldylcblxuICAgIHJldHVybiB2aWV3ID8gdmlldy5zb3VyY2VNb2RlLmNtRWRpdG9yIDogbnVsbFxuICB9XG59XG4iXSwibmFtZXMiOlsiU2V0dGluZyIsIk5vdGljZSIsIlBsdWdp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QUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDbkcsUUFBUSxTQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDdEcsUUFBUSxTQUFTLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUU7QUFDdEgsUUFBUSxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUUsS0FBSyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBQ0Q7QUFDTyxTQUFTLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQzNDLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNySCxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLE1BQU0sS0FBSyxVQUFVLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxXQUFXLEVBQUUsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzdKLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxVQUFVLENBQUMsRUFBRSxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDdEUsSUFBSSxTQUFTLElBQUksQ0FBQyxFQUFFLEVBQUU7QUFDdEIsUUFBUSxJQUFJLENBQUMsRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7QUFDdEUsUUFBUSxPQUFPLENBQUMsRUFBRSxJQUFJO0FBQ3RCLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFB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QUU7UUFDdEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQTtRQUN6QixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7S0FDM0M7SUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFBO0lBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUNwRCxJQUFJLENBQUMsS0FBSyxHQUFHO1FBQ1gsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLENBQUMsR0FBRztRQUNSLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLENBQUMsSUFBSTtLQUNWLENBQUE7SUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHO1FBQ1gsRUFBRSxFQUFFLEdBQUc7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLEVBQUUsRUFBRSxDQUFDLEdBQUc7UUFDUixFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLENBQUMsR0FBRztRQUNSLEVBQUUsRUFBRSxDQUFDLEdBQUc7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLEdBQUc7S0FDUixDQUFBO0lBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFBO0lBQ3BELElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUc7UUFDWCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxDQUFDLEVBQUU7UUFDUixHQUFHLEVBQUUsQ0FBQyxJQUFJO1FBQ1YsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsQ0FBQyxHQUFHO1FBQ1QsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsQ0FBQyxJQUFJO1FBQ1YsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsSUFBSTtLQUNWLENBQUE7SUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHO1FBQ1gsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsQ0FBQyxJQUFJO1FBQ1YsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsQ0FBQyxHQUFHO1FBQ1QsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLEdBQUcsRUFBRSxDQUFDLEdBQUc7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxDQUFDLElBQUk7S0FDWCxDQUFBO0lBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRztRQUNYLEdBQUcsRUFBRSxDQUFDLEdBQUc7UUFDVCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxDQUFDLEdBQUc7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsQ0FBQyxHQUFHO1FBQ1QsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLEdBQUcsRUFBRSxDQUFDLElBQUk7UUFDVixHQUFHLEVBQUUsS0FBSztLQUNYLENBQUE7SUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHO1FBQ1gsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLEdBQUcsRUFBRSxDQUFDLElBQUk7UUFDVixHQUFHLEVBQUUsQ0FBQyxLQUFLO1FBQ1gsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxDQUFDLElBQUk7UUFDVixHQUFHLEVBQUUsQ0FBQyxHQUFHO0tBQ1YsQ0FBQTtJQUNELElBQUksQ0FBQyxLQUFLLEdBQUc7UUFDWCxJQUFJLEVBQUUsR0FBRztRQUNULElBQUksRUFBRSxHQUFHO1FBQ1QsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLElBQUksRUFBRSxHQUFHO1FBQ1QsSUFBSSxFQUFFLEdBQUc7UUFDVCxJQUFJLEVBQUUsSUFBSTtRQUNWLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLEdBQUc7UUFDUCxFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLEdBQUc7UUFDUCxFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxHQUFHO1FBQ1AsRUFBRSxFQUFFLENBQUMsR0FBRztRQUNSLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsQ0FBQyxHQUFHO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsR0FBRztRQUNQLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLENBQUMsR0FBRztRQUNSLEVBQUUsRUFBRSxHQUFHO1FBQ1AsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsQ0FBQyxHQUFHO1FBQ1IsRUFBRSxFQUFFLENBQUMsR0FBRztRQUNSLEVBQUUsRUFBRSxHQUFHO1FBQ1AsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsQ0FBQyxHQUFHO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsR0FBRztRQUNQLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxDQUFDLEdBQUc7UUFDUixFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxDQUFDLEdBQUc7UUFDUixHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsSUFBSSxFQUFFLElBQUk7S0FDWCxDQUFBO0lBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRztRQUNYLElBQUksRUFBRSxDQUFDLEtBQUs7UUFDWixFQUFFLEVBQUUsQ0FBQyxHQUFHO1FBQ1IsSUFBSSxFQUFFLENBQUMsSUFBSTtRQUNYLElBQUksRUFBRSxDQUFDLEtBQUs7UUFDWixFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLENBQUMsR0FBRztRQUNSLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxHQUFHO1FBQ1AsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsS0FBSztRQUNULEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLENBQUMsR0FBRztRQUNSLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLENBQUMsR0FBRztRQUNSLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsQ0FBQyxHQUFHO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsQ0FBQyxHQUFHO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsR0FBRztRQUNQLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsQ0FBQyxLQUFLO1FBQ1YsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxDQUFDLEtBQUs7UUFDVixFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsQ0FBQyxLQUFLO1FBQ1YsRUFBRSxFQUFFLENBQUMsR0FBRztRQUNSLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLEdBQUc7UUFDUCxFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsQ0FBQyxLQUFLO1FBQ1YsRUFBRSxFQUFFLEdBQUc7UUFDUCxFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLEdBQUc7UUFDUCxFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLEdBQUc7UUFDUCxFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsR0FBRztRQUNQLEVBQUUsRUFBRSxDQUFDLEdBQUc7UUFDUixFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxDQUFDLEdBQUc7UUFDUixFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsQ0FBQyxHQUFHO1FBQ1IsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsQ0FBQyxHQUFHO1FBQ1IsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxJQUFJLEVBQUUsQ0FBQyxHQUFHO0tBQ1gsQ0FBQTtJQUNELElBQUksQ0FBQyxLQUFLLEdBQUc7UUFDWCxFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLEdBQUc7UUFDUCxFQUFFLEVBQUUsSUFBSTtRQUNSLElBQUksRUFBRSxDQUFDLElBQUk7UUFDWCxJQUFJLEVBQUUsQ0FBQyxJQUFJO1FBQ1gsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixJQUFJLEVBQUUsSUFBSTtRQUNWLElBQUksRUFBRSxJQUFJO1FBQ1YsRUFBRSxFQUFFLENBQUMsR0FBRztRQUNSLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsQ0FBQyxHQUFHO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsSUFBSSxFQUFFLElBQUk7UUFDVixJQUFJLEVBQUUsSUFBSTtRQUNWLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLENBQUMsR0FBRztRQUNSLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLENBQUMsR0FBRztRQUNSLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLElBQUk7UUFDVixJQUFJLEVBQUUsSUFBSTtRQUNWLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLElBQUksRUFBRSxDQUFDLElBQUk7UUFDWCxJQUFJLEVBQUUsQ0FBQyxJQUFJO1FBQ1gsRUFBRSxFQUFFLElBQUk7UUFDUixJQUFJLEVBQUUsSUFBSTtRQUNWLElBQUksRUFBRSxJQUFJO1FBQ1YsRUFBRSxFQUFFLEdBQUc7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxJQUFJO1FBQ1YsSUFBSSxFQUFFLElBQUk7UUFDVixFQUFFLEVBQUUsQ0FBQyxHQUFHO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLENBQUMsR0FBRztRQUNSLElBQUksRUFBRSxJQUFJO1FBQ1YsSUFBSSxFQUFFLElBQUk7UUFDVixFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsR0FBRztRQUNQLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxDQUFDLEdBQUc7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLElBQUksRUFBRSxDQUFDLElBQUk7UUFDWCxJQUFJLEVBQUUsQ0FBQyxJQUFJO1FBQ1gsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxJQUFJO1FBQ1IsSUFBSSxFQUFFLENBQUMsR0FBRztRQUNWLElBQUksRUFBRSxDQUFDLEdBQUc7UUFDVixFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsSUFBSSxFQUFFLElBQUk7UUFDVixJQUFJLEVBQUUsSUFBSTtRQUNWLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxDQUFDLEdBQUc7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixJQUFJLEVBQUUsR0FBRztRQUNULElBQUksRUFBRSxHQUFHO1FBQ1QsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxDQUFDLEdBQUc7UUFDUixFQUFFLEVBQUUsR0FBRztRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLENBQUMsRUFBRSxHQUFHO1FBQ04sRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULElBQUksRUFBRSxHQUFHO1FBQ1QsSUFBSSxFQUFFLEdBQUc7UUFDVCxFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxHQUFHO0tBQ1IsQ0FBQTtJQUNELElBQUksQ0FBQyxLQUFLLEdBQUc7UUFDWCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxDQUFDLEdBQUc7UUFDVCxHQUFHLEVBQUUsQ0FBQyxHQUFHO1FBQ1QsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsQ0FBQyxHQUFHO1FBQ1QsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsQ0FBQyxJQUFJO0tBQ1gsQ0FBQTtJQUNELElBQUksQ0FBQyxLQUFLLEdBQUc7UUFDWCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxDQUFDLElBQUk7UUFDVixHQUFHLEVBQUUsQ0FBQyxJQUFJO1FBQ1YsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLENBQUMsSUFBSTtLQUNYLENBQUE7SUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHO1FBQ1gsR0FBRyxFQUFFLENBQUMsR0FBRztRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLENBQUMsR0FBRztRQUNULEdBQUcsRUFBRSxDQUFDLElBQUk7UUFDVixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxDQUFDLElBQUk7UUFDVixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxDQUFDLElBQUk7UUFDVixHQUFHLEVBQUUsQ0FBQyxJQUFJO1FBQ1YsR0FBRyxFQUFFLENBQUMsR0FBRztRQUNULEdBQUcsRUFBRSxDQUFDLElBQUk7UUFDVixHQUFHLEVBQUUsQ0FBQyxHQUFHO1FBQ1QsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLEdBQUcsRUFBRSxDQUFDLElBQUk7UUFDVixHQUFHLEVBQUUsQ0FBQyxJQUFJO1FBQ1YsR0FBRyxFQUFFLENBQUMsR0FBRztRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLENBQUMsR0FBRztRQUNULEdBQUcsRUFBRSxDQUFDLElBQUk7UUFDVixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxDQUFDLElBQUk7S0FDWCxDQUFBO0lBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRztRQUNYLEdBQUcsRUFBRSxDQUFDLEdBQUc7UUFDVCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLENBQUMsR0FBRztRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxDQUFDLElBQUk7UUFDVixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsRUFBRTtRQUNQLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxDQUFDLEdBQUc7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxDQUFDLEdBQUc7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO0tBQ1QsQ0FBQTtJQUNELElBQUksQ0FBQyxLQUFLLEdBQUc7UUFDWCxJQUFJLEVBQUUsQ0FBQyxHQUFHO1FBQ1YsSUFBSSxFQUFFLEdBQUc7UUFDVCxJQUFJLEVBQUUsQ0FBQyxHQUFHO1FBQ1YsSUFBSSxFQUFFLEVBQUU7UUFDUixJQUFJLEVBQUUsSUFBSTtRQUNWLElBQUksRUFBRSxDQUFDLEdBQUc7UUFDVixJQUFJLEVBQUUsR0FBRztRQUNULElBQUksRUFBRSxDQUFDLEdBQUc7UUFDVixJQUFJLEVBQUUsR0FBRztRQUNULElBQUksRUFBRSxHQUFHO1FBQ1QsSUFBSSxFQUFFLEdBQUc7UUFDVCxJQUFJLEVBQUUsR0FBRztRQUNULElBQUksRUFBRSxDQUFDLEVBQUU7S0FDVixDQUFBO0lBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ2xFLElBQUksQ0FBQyxLQUFLLEdBQUc7UUFDWCxJQUFJLEVBQUUsR0FBRztRQUNULElBQUksRUFBRSxDQUFDLElBQUk7UUFDWCxJQUFJLEVBQUUsR0FBRztRQUNULElBQUksRUFBRSxDQUFDLEdBQUc7UUFDVixJQUFJLEVBQUUsQ0FBQyxHQUFHO1FBQ1YsSUFBSSxFQUFFLENBQUMsR0FBRztRQUNWLElBQUksRUFBRSxDQUFDLEdBQUc7UUFDVixJQUFJLEVBQUUsQ0FBQyxHQUFHO1FBQ1YsSUFBSSxFQUFFLEdBQUc7UUFDVCxJQUFJLEVBQUUsR0FBRztRQUNULElBQUksRUFBRSxJQUFJO1FBQ1YsSUFBSSxFQUFFLEdBQUc7UUFDVCxJQUFJLEVBQUUsR0FBRztRQUNULElBQUksRUFBRSxHQUFHO1FBQ1QsSUFBSSxFQUFFLElBQUk7UUFDVixJQUFJLEVBQUUsSUFBSTtRQUNWLElBQUksRUFBRSxHQUFHO1FBQ1QsSUFBSSxFQUFFLEdBQUc7UUFDVCxJQUFJLEVBQUUsR0FBRztRQUNULElBQUksRUFBRSxDQUFDLEdBQUc7S0FDWCxDQUFBO0lBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRztRQUNYLElBQUksRUFBRSxDQUFDLEdBQUc7UUFDVixJQUFJLEVBQUUsQ0FBQyxJQUFJO1FBQ1gsSUFBSSxFQUFFLENBQUMsR0FBRztRQUNWLElBQUksRUFBRSxDQUFDLEdBQUc7UUFDVixJQUFJLEVBQUUsQ0FBQyxJQUFJO1FBQ1gsSUFBSSxFQUFFLENBQUMsSUFBSTtRQUNYLElBQUksRUFBRSxHQUFHO1FBQ1QsSUFBSSxFQUFFLENBQUMsR0FBRztRQUNWLElBQUksRUFBRSxJQUFJO1FBQ1YsSUFBSSxFQUFFLEdBQUc7UUFDVCxJQUFJLEVBQUUsQ0FBQyxJQUFJO1FBQ1gsSUFBSSxFQUFFLElBQUk7UUFDVixJQUFJLEVBQUUsQ0FBQyxHQUFHO1FBQ1YsSUFBSSxFQUFFLEdBQUc7UUFDVCxJQUFJLEVBQUUsQ0FBQyxJQUFJO1FBQ1gsSUFBSSxFQUFFLENBQUMsSUFBSTtLQUNaLENBQUE7SUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQTtJQUN0QyxJQUFJLENBQUMsS0FBSyxHQUFHO1FBQ1gsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLEdBQUcsRUFBRSxDQUFDLElBQUk7UUFDVixHQUFHLEVBQUUsQ0FBQyxJQUFJO1FBQ1YsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsQ0FBQyxJQUFJO1FBQ1YsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLEdBQUcsRUFBRSxDQUFDLElBQUk7UUFDVixHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxDQUFDLEdBQUc7UUFDVCxHQUFHLEVBQUUsQ0FBQyxJQUFJO1FBQ1YsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLEdBQUcsRUFBRSxDQUFDLElBQUk7UUFDVixHQUFHLEVBQUUsQ0FBQyxJQUFJO1FBQ1YsR0FBRyxFQUFFLENBQUMsSUFBSTtLQUNYLENBQUE7SUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHO1FBQ1gsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLEdBQUcsRUFBRSxDQUFDLElBQUk7UUFDVixHQUFHLEVBQUUsQ0FBQyxJQUFJO1FBQ1YsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLEtBQUssRUFBRSxDQUFDLEdBQUc7UUFDWCxLQUFLLEVBQUUsQ0FBQyxHQUFHO1FBQ1gsR0FBRyxFQUFFLENBQUMsR0FBRztRQUNULEdBQUcsRUFBRSxDQUFDLElBQUk7UUFDVixHQUFHLEVBQUUsQ0FBQyxJQUFJO0tBQ1gsQ0FBQTtJQUNELElBQUksQ0FBQyxLQUFLLEdBQUc7UUFDWCxLQUFLLEVBQUUsSUFBSTtRQUNYLEtBQUssRUFBRSxJQUFJO1FBQ1gsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLEdBQUcsRUFBRSxJQUFJO1FBQ1QsS0FBSyxFQUFFLElBQUk7UUFDWCxLQUFLLEVBQUUsSUFBSTtRQUNYLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLEdBQUcsRUFBRSxJQUFJO0tBQ1YsQ0FBQTtJQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtJQUMvQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQTtJQUNsRSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQTtJQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHO1FBQ1gsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7S0FDUixDQUFBO0lBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFBO0lBQzNELElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtJQUN6RCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUE7SUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFBO0lBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUE7SUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRztRQUNYLEVBQUUsRUFBRSxFQUFFO1FBQ04sRUFBRSxFQUFFLENBQUMsRUFBRTtRQUNQLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDUCxFQUFFLEVBQUUsQ0FBQyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLEVBQUUsRUFBRSxDQUFDLElBQUk7S0FDVixDQUFBO0lBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUE7SUFDM0MsSUFBSSxDQUFDLEtBQUssR0FBRztRQUNYLEVBQUUsRUFBRSxDQUFDLEdBQUc7UUFDUixFQUFFLEVBQUUsRUFBRTtRQUNOLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsS0FBSztRQUNULEVBQUUsRUFBRSxDQUFDLEdBQUc7UUFDUixFQUFFLEVBQUUsQ0FBQyxJQUFJO0tBQ1YsQ0FBQTtJQUNELElBQUksQ0FBQyxLQUFLLEdBQUc7UUFDWCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLENBQUMsR0FBRztRQUNULENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLEdBQUcsRUFBRSxDQUFDLEdBQUc7UUFDVCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLEdBQUcsRUFBRSxDQUFDLEdBQUc7UUFDVCxHQUFHLEVBQUUsQ0FBQyxHQUFHO0tBQ1YsQ0FBQTtJQUNELElBQUksQ0FBQyxLQUFLLEdBQUc7UUFDWCxHQUFHLEVBQUUsQ0FBQyxHQUFHO1FBQ1QsR0FBRyxFQUFFLENBQUMsR0FBRztRQUNULENBQUMsRUFBRSxHQUFHO1FBQ04sR0FBRyxFQUFFLENBQUMsR0FBRztRQUNULEdBQUcsRUFBRSxJQUFJO1FBQ1QsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixHQUFHLEVBQUUsQ0FBQyxHQUFHO1FBQ1QsR0FBRyxFQUFFLElBQUk7UUFDVCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxHQUFHO0tBQ1AsQ0FBQTtJQUNELElBQUksQ0FBQyxLQUFLLEdBQUc7UUFDWCxHQUFHLEVBQUUsSUFBSTtRQUNULENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxHQUFHLEVBQUUsQ0FBQyxJQUFJO1FBQ1YsR0FBRyxFQUFFLElBQUk7UUFDVCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxDQUFDLElBQUk7UUFDVixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixHQUFHLEVBQUUsQ0FBQyxJQUFJO1FBQ1YsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsR0FBRyxFQUFFLENBQUMsR0FBRztRQUNULEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsR0FBRztRQUNOLEVBQUUsRUFBRSxJQUFJO1FBQ1IsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxHQUFHO0tBQ1AsQ0FBQTtJQUNELElBQUksQ0FBQyxLQUFLLEdBQUc7UUFDWCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLElBQUk7UUFDVCxDQUFDLEVBQUUsSUFBSTtRQUNQLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsQ0FBQyxJQUFJO1FBQ1YsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxLQUFLO1FBQ1QsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLEtBQUs7UUFDUixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLEdBQUcsRUFBRSxDQUFDLElBQUk7UUFDVixDQUFDLEVBQUUsQ0FBQyxLQUFLO1FBQ1QsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsQ0FBQyxJQUFJO1FBQ1YsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLEtBQUs7UUFDVCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7S0FDVCxDQUFBO0lBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRztRQUNYLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLENBQUMsR0FBRztRQUNULENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxFQUFFLEVBQUUsQ0FBQyxLQUFLO1FBQ1YsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLENBQUMsR0FBRztRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxFQUFFO1FBQ0wsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQ04sQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxHQUFHLEVBQUUsQ0FBQyxHQUFHO1FBQ1QsRUFBRSxFQUFFLENBQUMsS0FBSztRQUNWLEdBQUcsRUFBRSxHQUFHO1FBQ1IsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLEdBQUc7S0FDUixDQUFBO0lBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRztRQUNYLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQ04sQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxJQUFJO1FBQ1AsR0FBRyxFQUFFLENBQUMsR0FBRztRQUNULEVBQUUsRUFBRSxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7S0FDUixDQUFBO0lBRUQsT0FBTyxJQUFJLENBQUE7QUFDYixDQUFDO0FBRUQsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsVUFBVSxHQUFHO0lBQzVDLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUM1QixJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ25DLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUM1QjtLQUNGO0lBQ0QsT0FBTyxHQUFHLENBQUE7QUFDWixDQUFDLENBQUE7QUFFRCxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUM7SUFDdkMsSUFBSSxDQUFDLEVBQUU7UUFDTCxPQUFPLENBQUMsQ0FBQTtLQUNUO0lBQ0QsT0FBTyxDQUFDLENBQUE7QUFDVixDQUFDLENBQUE7QUFFRCxhQUFhLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxVQUFVLEtBQUs7SUFDL0MsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxTQUFTLElBQUksS0FBSyxJQUFJLEVBQUUsRUFBRTtRQUN0RCxPQUFPLEVBQUUsQ0FBQTtLQUNWO0lBQ0QsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFBO0lBQ2YsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQzVCLElBQUksS0FBSyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUMzQixJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3ZCLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtRQUM3QixHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2QsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7S0FDOUI7SUFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2QsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNkLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDZCxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ2YsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNmLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDZixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDakIsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFBO0lBQ1osSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFBO0lBQ1osSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFBO0lBQ1osS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUE7UUFDdkIsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUNuQixJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQ25CLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDbkIsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2YsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUNuQixJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQ25CLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDckIsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUNyQixJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQ3JCLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNqQixJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQ3JCLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDckIsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ2pDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNqQyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDakMsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUN0QyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ3RDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNqQyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDakMsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ2pDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNqQyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDakMsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ2pDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDdEMsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUN0QyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ3RDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzNDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzNDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzNDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzNDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNqQyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDakMsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ2pDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNqQyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDakMsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ2pDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDdEMsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUN0QyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ3RDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzNDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzNDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzNDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBOztRQUUzQyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ3RDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDdEMsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUN0QyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUMzQyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUMzQyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUMzQyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUMzQyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDaEQsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ2hELEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNoRCxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDaEQsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO1FBQ1gsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNqQixJQUFJLEdBQUcsRUFBRSxDQUFBO1lBQ1QsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtTQUNSO1FBQ0QsRUFBRSxHQUFHLEVBQUUsQ0FBQTtRQUNQLEVBQUUsR0FB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
