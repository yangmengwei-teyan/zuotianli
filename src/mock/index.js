export default [
    {
        sel: "Subtraction",
        type: "Sub",
        id: 0,
        oknum:0,
        err:0,
        ti: [
            {
                "question": "8-3=__?",
                "answer": [
                    {
                        "num": "A",
                        "answers": 5,
                        "flag": true
                    }, {
                        "num": "B",
                        "answers": 6,
                        "flag": false
                    }, {
                        "num": "C",
                        "answers": 7,
                        "flag": false
                    }, {
                        "num": "D",
                        "answers": 8,
                        "flag": false
                    }
                ]
            }, {
                "question": "5-3=__?",
                "answer": [
                    {
                        "num": "A",
                        "answers": 5,
                        "flag": false
                    }, {
                        "num": "B",
                        "answers": 6,
                        "flag": false
                    }, {
                        "num": "C",
                        "answers": 7,
                        "flag": false
                    }, {
                        "num": "D",
                        "answers": 2,
                        "flag": true
                    }
                ]
            }, {
                "question": "10-5=__?",
                "answer": [
                    {
                        "num": "A",
                        "answers": 5,
                        "flag": true
                    }, {
                        "num": "B",
                        "answers": 6,
                        "flag": false
                    }, {
                        "num": "C",
                        "answers": 7,
                        "flag": false
                    }, {
                        "num": "D",
                        "answers": 8,
                        "flag": false
                    }
                ]
            }
        ]


    }, {
        sel: "Addition",
        type: "Add",
        id: 1,
        oknum:0,
        err:0,
        ti: [
            {
                "question": "2+3=__?",
                "answer": [
                    {
                        "num": "A",
                        "answers": 5,
                        "flag": true
                    }, {
                        "num": "B",
                        "answers": 6,
                        "flag": false
                    }, {
                        "num": "C",
                        "answers": 7,
                        "flag": false
                    }, {
                        "num": "D",
                        "answers": 8,
                        "flag": false
                    }
                ]
            }, {
                "question": "5+3=__?",
                "answer": [
                    {
                        "num": "A",
                        "answers": 5,
                        "flag": false
                    }, {
                        "num": "B",
                        "answers": 6,
                        "flag": false
                    }, {
                        "num": "C",
                        "answers": 7,
                        "flag": false
                    }, {
                        "num": "D",
                        "answers": 8,
                        "flag": true
                    }
                ]
            }, {
                "question": "2+5=__?",
                "answer": [
                    {
                        "num": "A",
                        "answers": 5,
                        "flag": false
                    }, {
                        "num": "B",
                        "answers": 6,
                        "flag": false
                    }, {
                        "num": "C",
                        "answers": 7,
                        "flag": true
                    }, {
                        "num": "D",
                        "answers": 8,
                        "flag": false
                    }
                ]
            }
        ],
        ok: 'B'


    }, {
        sel: "Multiply",
        type: "Mul",
        id: 2,
        ti: [
            {
                "question": "2x3=__?",
                "answer": [
                    {
                        "num": "A",
                        "answers": 5,
                        "flag": false
                    }, {
                        "num": "B",
                        "answers": 6,
                        "flag": true
                    }, {
                        "num": "C",
                        "answers": 7,
                        "flag": false
                    }, {
                        "num": "D",
                        "answers": 8,
                        "flag": false
                    }
                ]
            }, {
                "question": "5x3=__?",
                "answer": [
                    {
                        "num": "A",
                        "answers": 5,
                        "flag": false
                    }, {
                        "num": "B",
                        "answers": 6,
                        "flag": false
                    }, {
                        "num": "C",
                        "answers": 7,
                        "flag": false
                    }, {
                        "num": "D",
                        "answers": 15,
                        "flag": true
                    }
                ]
            }, {
                "question": "1x5=__?",
                "answer": [
                    {
                        "num": "A",
                        "answers": 5,
                        "flag": true
                    }, {
                        "num": "B",
                        "answers": 6,
                        "flag": false
                    }, {
                        "num": "C",
                        "answers": 7,
                        "flag": false
                    }, {
                        "num": "D",
                        "answers": 8,
                        "flag": false
                    }
                ]
            }
        ],
        ok: 'B'
    }, {
    sel: "Comparison",
        type: "Com",
            id: 3,
                ti: [
                    {
                        "question":"2__3=__?",
                        "answer":[
                            {
                                "num":"A",
                                "answers":"<",
                                "flag":true
                            },{
                                "num":"B",
                                "answers":">",
                                "flag":false
                            },{
                                "num":"C",
                                "answers":"=",
                                "flag":false
                            },{
                                "num":"D",
                                "answers":"None",
                                "flag":false
                            }
                        ]
                    },{
                        "question":"5__3=__?",
                        "answer":[
                            {
                                "num":"A",
                                "answers":"=",
                                "flag":false
                            },{
                                "num":"B",
                                "answers":"None",
                                "flag":false
                            },{
                                "num":"C",
                                "answers":"<",
                                "flag":false
                            },{
                                "num":"D",
                                "answers":">",
                                "flag":true
                            }
                        ]
                    },{
                        "question":"1__5=__?",
                        "answer":[
                            {
                                "num":"A",
                                "answers":"<",
                                "flag":true
                            },{
                                "num":"B",
                                "answers":"=",
                                "flag":false
                            },{
                                "num":"C",
                                "answers":"None",
                                "flag":false
                            },{
                                "num":"D",
                                "answers":">",
                                "flag":false
                            }
                        ],
                        ok: 'B'
                    }
                ]
}
]