const data =
{
    "imageBoxes": [
        {
            "title": "Equal-time comparisons",
            "elements": [
                {
                    "title": "KPCN",
                    "version": "-",
                    "image": "images/kpcn.png"
                },
                {
                    "title": "KPCN + Ours",
                    "version": "-",
                    "image": "images/kpcn_ours.png"
                },
                {
                    "title": "AMCD",
                    "version": "-",
                    "image": "images/amcd.png"
                },
                {
                    "title": "AMCD + Ours",
                    "version": "-",
                    "image": "images/amcd_ours.png"
                },
                {
                    "title": "AFGSA",
                    "version": "-",
                    "image": "images/afgsa.png"
                },
                {
                    "title": "AFGSA + Ours",
                    "version": "-",
                    "image": "images/afgsa_ours.png"
                },
                {
                    "title": "Reference (16K spp)",
                    "version": "-",
                    "image": "images/Reference.png"
                }
            ]
        },
        {
            "title": "Relative L2 visualization",
            "elements": [
                {
                    "title": "KPCN",
                    "version": "-",
                    "image": "images/viserr_kpcn.png"
                },
                {
                    "title": "KPCN + Ours",
                    "version": "-",
                    "image": "images/viserr_kpcn_ours.png"
                },
                {
                    "title": "AMCD",
                    "version": "-",
                    "image": "images/viserr_amcd.png"
                },
                {
                    "title": "AMCD + Ours",
                    "version": "-",
                    "image": "images/viserr_amcd_ours.png"
                },
                {
                    "title": "AFGSA",
                    "version": "-",
                    "image": "images/viserr_afgsa.png"
                },
                {
                    "title": "AFGSA + Ours",
                    "version": "-",
                    "image": "images/viserr_afgsa_ours.png"
                }
            ]
        }
    ],
    "stats": [
        {
            "title": "equal-time comparisons",
            "labels": [
                "KPCN",
                "KPCN + Ours",
                "AMCD",
                "AMCD + Ours",
                "AFGSA",
                "AFGSA + Ours"
            ],
            "series": [
				{
                    "label": "spp",
                    "data": [
                        "266",
                        "262",
                        "266",
                        "262",
                        "266",
                        "262"
                    ]
                },
				{
                    "label": "time (in minutes)",
                    "data": [
                        "25.66",
                        "25.45",
                        "25.62",
                        "25.40",
                        "25.62",
                        "25.40"
                    ]
                },
                {
                    "label": "relative L2",
                    "data": [
                        "0.004581",
                        "0.003548",
                        "0.005477",
                        "0.003800",
                        "0.004255",
                        "0.003699"
                    ]
                }
            ]
        }
    ]
}