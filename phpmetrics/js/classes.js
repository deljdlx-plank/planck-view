var classes = [
    {
        "name": "Planck\\View\\Component",
        "interface": false,
        "abstract": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "initialize",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setVariable",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "loadDataFromJSON",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "loadEntityFromJSON",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "i18n",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "html",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDefaultComponentManager",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 8,
        "nbMethods": 8,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 7,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 17,
        "ccn": 10,
        "ccnMethodMax": 5,
        "externals": [
            "Phi\\HTML\\Component",
            "parent",
            "parent",
            "Planck\\Exception",
            "Planck\\View\\ComponentManager"
        ],
        "parents": [
            "Phi\\HTML\\Component"
        ],
        "lcom": 1,
        "length": 116,
        "vocabulary": 31,
        "volume": 574.69,
        "difficulty": 6.74,
        "effort": 3873.81,
        "level": 0.15,
        "bugs": 0.19,
        "time": 215,
        "intelligentContent": 85.26,
        "number_operators": 25,
        "number_operands": 91,
        "number_operators_unique": 4,
        "number_operands_unique": 27,
        "cloc": 1,
        "loc": 76,
        "lloc": 75,
        "mi": 47.27,
        "mIwoC": 38.43,
        "commentWeight": 8.84,
        "kanDefect": 0.94,
        "relativeStructuralComplexity": 169,
        "relativeDataComplexity": 0.46,
        "relativeSystemComplexity": 169.46,
        "totalStructuralComplexity": 1352,
        "totalDataComplexity": 3.71,
        "totalSystemComplexity": 1355.71,
        "package": "Planck\\View\\",
        "pageRank": 0.26,
        "afferentCoupling": 1,
        "efferentCoupling": 4,
        "instability": 0.8,
        "violations": {}
    },
    {
        "name": "Planck\\View\\ComponentManager",
        "interface": false,
        "abstract": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "registerPackage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "registerComponent",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getComponents",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getJavascripts",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "packageJavascripts",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCSS",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "packageCSS",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mergeResourceArray",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 9,
        "nbMethods": 8,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 22,
        "ccn": 14,
        "ccnMethodMax": 4,
        "externals": [
            "Phi\\HTML\\Component",
            "Phi\\HTML\\JavascriptFile",
            "Phi\\HTML\\CSSFile"
        ],
        "parents": [],
        "lcom": 2,
        "length": 160,
        "vocabulary": 28,
        "volume": 769.18,
        "difficulty": 6.96,
        "effort": 5353.47,
        "level": 0.14,
        "bugs": 0.26,
        "time": 297,
        "intelligentContent": 110.51,
        "number_operators": 44,
        "number_operands": 116,
        "number_operators_unique": 3,
        "number_operands_unique": 25,
        "cloc": 3,
        "loc": 105,
        "lloc": 102,
        "mi": 47.04,
        "mIwoC": 34.09,
        "commentWeight": 12.94,
        "kanDefect": 2.34,
        "relativeStructuralComplexity": 49,
        "relativeDataComplexity": 1.07,
        "relativeSystemComplexity": 50.07,
        "totalStructuralComplexity": 441,
        "totalDataComplexity": 9.63,
        "totalSystemComplexity": 450.63,
        "package": "Planck\\View\\",
        "pageRank": 0.34,
        "afferentCoupling": 2,
        "efferentCoupling": 3,
        "instability": 0.6,
        "violations": {}
    },
    {
        "name": "Planck\\View\\Layout",
        "interface": false,
        "abstract": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setTheme",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTheme",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addResources",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addResourcesFromResponses",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getComponent",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setComponent",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDefaultComponentManager",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "registerPackage",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "injectResources",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "compile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "render",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addLocalCSSFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addLocalJavascriptFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 14,
        "nbMethods": 13,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 10,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 34,
        "ccn": 21,
        "ccnMethodMax": 8,
        "externals": [
            "Phi\\HTML\\Document",
            "Planck\\Application\\Application",
            "parent",
            "Planck\\View\\Theme",
            "Planck\\Exception",
            "Planck\\View\\ComponentManager",
            "parent",
            "parent",
            "Planck\\Application\\Application"
        ],
        "parents": [
            "Phi\\HTML\\Document"
        ],
        "lcom": 3,
        "length": 241,
        "vocabulary": 49,
        "volume": 1353.15,
        "difficulty": 7.91,
        "effort": 10704.88,
        "level": 0.13,
        "bugs": 0.45,
        "time": 595,
        "intelligentContent": 171.04,
        "number_operators": 63,
        "number_operands": 178,
        "number_operators_unique": 4,
        "number_operands_unique": 45,
        "cloc": 20,
        "loc": 175,
        "lloc": 155,
        "mi": 52.48,
        "mIwoC": 27.47,
        "commentWeight": 25.01,
        "kanDefect": 2.83,
        "relativeStructuralComplexity": 784,
        "relativeDataComplexity": 0.37,
        "relativeSystemComplexity": 784.37,
        "totalStructuralComplexity": 10976,
        "totalDataComplexity": 5.14,
        "totalSystemComplexity": 10981.14,
        "package": "Planck\\View\\",
        "pageRank": 0.12,
        "afferentCoupling": 0,
        "efferentCoupling": 6,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Planck\\View\\Package",
        "interface": false,
        "abstract": true,
        "methods": [
            {
                "name": "getJavascriptPackageDescriptor",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addJavascriptFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCSSPackageDescriptor",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addCSSFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 8,
        "ccn": 5,
        "ccnMethodMax": 2,
        "externals": [
            "Planck\\View\\Component",
            "parent",
            "parent"
        ],
        "parents": [
            "Planck\\View\\Component"
        ],
        "lcom": 1,
        "length": 70,
        "vocabulary": 14,
        "volume": 266.51,
        "difficulty": 9.6,
        "effort": 2558.54,
        "level": 0.1,
        "bugs": 0.09,
        "time": 142,
        "intelligentContent": 27.76,
        "number_operators": 22,
        "number_operands": 48,
        "number_operators_unique": 4,
        "number_operands_unique": 10,
        "cloc": 7,
        "loc": 49,
        "lloc": 42,
        "mi": 74.57,
        "mIwoC": 46.93,
        "commentWeight": 27.63,
        "kanDefect": 0.75,
        "relativeStructuralComplexity": 36,
        "relativeDataComplexity": 0.71,
        "relativeSystemComplexity": 36.71,
        "totalStructuralComplexity": 144,
        "totalDataComplexity": 2.86,
        "totalSystemComplexity": 146.86,
        "package": "Planck\\View\\",
        "pageRank": 0.12,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Planck\\View\\Theme",
        "interface": false,
        "abstract": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFilepath",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getJavascriptFilepath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasJavascriptPackage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasJavascriptRequirementPackage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getJavascriptPackageFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getJavascriptRequirementPackageFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLayout",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 8,
        "nbMethods": 7,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 7,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 16,
        "ccn": 9,
        "ccnMethodMax": 4,
        "externals": [
            "Planck\\Exception\\DoesNotExist",
            "Planck\\Exception\\DoesNotExist",
            "Planck\\Exception\\DoesNotExist",
            "layoutName",
            "className",
            "Planck\\Exception\\DoesNotExist"
        ],
        "parents": [],
        "lcom": 1,
        "length": 112,
        "vocabulary": 20,
        "volume": 484.06,
        "difficulty": 10.83,
        "effort": 5243.94,
        "level": 0.09,
        "bugs": 0.16,
        "time": 291,
        "intelligentContent": 44.68,
        "number_operators": 47,
        "number_operands": 65,
        "number_operators_unique": 5,
        "number_operands_unique": 15,
        "cloc": 6,
        "loc": 83,
        "lloc": 77,
        "mi": 59.07,
        "mIwoC": 38.84,
        "commentWeight": 20.23,
        "kanDefect": 0.57,
        "relativeStructuralComplexity": 36,
        "relativeDataComplexity": 1.59,
        "relativeSystemComplexity": 37.59,
        "totalStructuralComplexity": 288,
        "totalDataComplexity": 12.71,
        "totalSystemComplexity": 300.71,
        "package": "Planck\\View\\",
        "pageRank": 0.17,
        "afferentCoupling": 1,
        "efferentCoupling": 3,
        "instability": 0.75,
        "violations": {}
    }
]