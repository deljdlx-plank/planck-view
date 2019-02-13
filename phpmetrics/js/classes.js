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
        "pageRank": 0.41,
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
                "name": "mergeResourceArray",
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
            }
        ],
        "nbMethodsIncludingGettersSetters": 6,
        "nbMethods": 5,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 18,
        "ccn": 13,
        "ccnMethodMax": 7,
        "externals": [
            "Phi\\HTML\\Component"
        ],
        "parents": [],
        "lcom": 2,
        "length": 114,
        "vocabulary": 21,
        "volume": 500.72,
        "difficulty": 6.83,
        "effort": 3421.62,
        "level": 0.15,
        "bugs": 0.17,
        "time": 190,
        "intelligentContent": 73.28,
        "number_operators": 32,
        "number_operands": 82,
        "number_operators_unique": 3,
        "number_operands_unique": 18,
        "cloc": 3,
        "loc": 80,
        "lloc": 77,
        "mi": 52.97,
        "mIwoC": 38.2,
        "commentWeight": 14.78,
        "kanDefect": 2.27,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 1.06,
        "relativeSystemComplexity": 26.06,
        "totalStructuralComplexity": 150,
        "totalDataComplexity": 6.33,
        "totalSystemComplexity": 156.33,
        "package": "Planck\\View\\",
        "pageRank": 0.36,
        "afferentCoupling": 2,
        "efferentCoupling": 1,
        "instability": 0.33,
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
        "nbMethodsIncludingGettersSetters": 11,
        "nbMethods": 11,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 9,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 27,
        "ccn": 17,
        "ccnMethodMax": 6,
        "externals": [
            "Phi\\HTML\\Document",
            "Planck\\Application",
            "parent",
            "Planck\\Exception",
            "Planck\\View\\ComponentManager",
            "parent",
            "parent",
            "Planck\\Application"
        ],
        "parents": [
            "Phi\\HTML\\Document"
        ],
        "lcom": 3,
        "length": 192,
        "vocabulary": 42,
        "volume": 1035.32,
        "difficulty": 7.53,
        "effort": 7792.18,
        "level": 0.13,
        "bugs": 0.35,
        "time": 433,
        "intelligentContent": 137.56,
        "number_operators": 49,
        "number_operands": 143,
        "number_operators_unique": 4,
        "number_operands_unique": 38,
        "cloc": 9,
        "loc": 134,
        "lloc": 125,
        "mi": 50.4,
        "mIwoC": 30.86,
        "commentWeight": 19.54,
        "kanDefect": 2.23,
        "relativeStructuralComplexity": 576,
        "relativeDataComplexity": 0.31,
        "relativeSystemComplexity": 576.31,
        "totalStructuralComplexity": 6336,
        "totalDataComplexity": 3.4,
        "totalSystemComplexity": 6339.4,
        "package": "Planck\\View\\",
        "pageRank": 0.11,
        "afferentCoupling": 0,
        "efferentCoupling": 5,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Planck\\View\\Package",
        "interface": false,
        "abstract": true,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Planck\\View\\Component"
        ],
        "parents": [
            "Planck\\View\\Component"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 0,
        "loc": 4,
        "lloc": 4,
        "mi": 171,
        "mIwoC": 171,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "Planck\\View\\",
        "pageRank": 0.11,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    }
]