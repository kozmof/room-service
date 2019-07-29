"use strict";
exports.__esModule = true;
var Data3x3_1 = require("./data/Data3x3");
var Data3x3_2 = require("./data/Data3x3");
var Explanation = /** @class */ (function () {
    function Explanation(subject, detail) {
        this.subject = subject;
        this.detail = detail;
    }
    return Explanation;
}());
var EvaluationTable3x3 = /** @class */ (function () {
    function EvaluationTable3x3(rank, malformTypes, lang) {
        var _this = this;
        if (rank === void 0) { rank = { sourceRank: "N", infoRank: 0 }; }
        if (malformTypes === void 0) { malformTypes = []; }
        if (lang === void 0) { lang = "EN"; }
        this.rank = rank;
        this.malformTypes = malformTypes;
        this.lang = lang;
        this.detailSource = function (sourceTransparency) {
            switch (_this.lang) {
                case "EN":
                    switch (sourceTransparency) {
                        case "N":
                            return [Data3x3_1.data_N_0_en];
                        case "A":
                            return [Data3x3_1.data_A_0_en];
                        case "B":
                            return [Data3x3_1.data_B_0_en];
                    }
            }
        };
        this.detailInfo = function (infoRank) {
            switch (_this.lang) {
                case "EN":
                    switch (infoRank) {
                        case 0:
                            return [Data3x3_1.data_0_0_en];
                        case 1:
                            return [Data3x3_1.data_1_0_en];
                        case 2:
                            return [Data3x3_1.data_2_0_en];
                    }
            }
        };
        this.malform = function (malformTypes) {
            var result = [];
            switch (_this.lang) {
                case "EN":
                    for (var _i = 0, malformTypes_1 = malformTypes; _i < malformTypes_1.length; _i++) {
                        var maltype = malformTypes_1[_i];
                        switch (maltype) {
                            case 3:
                                result.push(new Explanation(Data3x3_2.data_3_0_mal_en, Data3x3_2.data_3_1_mal_en));
                            case 5:
                                result.push(new Explanation(Data3x3_2.data_5_0_mal_en, Data3x3_2.data_5_1_mal_en));
                            case 7:
                                result.push(new Explanation(Data3x3_2.data_7_0_mal_en, Data3x3_2.data_7_1_mal_en));
                            case 11:
                                result.push(new Explanation(Data3x3_2.data_11_0_mal_en, Data3x3_2.data_11_1_mal_en));
                            case 13:
                                result.push(new Explanation(Data3x3_2.data_13_0_mal_en, Data3x3_2.data_13_1_mal_en));
                            case 17:
                                result.push(new Explanation(Data3x3_2.data_17_0_mal_en, Data3x3_2.data_17_1_mal_en));
                            case 19:
                                result.push(new Explanation(Data3x3_2.data_19_0_mal_en, Data3x3_2.data_19_1_mal_en));
                            case 23:
                                result.push(new Explanation(Data3x3_2.data_21_0_mal_en, Data3x3_2.data_21_1_mal_en));
                        }
                    }
                    return result;
            }
        };
        this.detail = function () {
            var det3x3 = {
                sourceDetail: _this.detailSource(_this.rank.sourceRank),
                infoDetail: _this.detailInfo(_this.rank.infoRank)
            };
            return det3x3;
        };
    }
    return EvaluationTable3x3;
}());
exports.EvaluationTable3x3 = EvaluationTable3x3;
