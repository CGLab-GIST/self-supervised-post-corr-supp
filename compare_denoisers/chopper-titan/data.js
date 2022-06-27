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
                    "title": "Reference (64K spp)",
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
                        "258",
                        "238",
                        "258",
                        "238",
                        "258",
                        "238"
                    ]
                },
				{
                    "label": "time (in minutes)",
                    "data": [
                        "2.60",
                        "2.60",
                        "2.56",
                        "2.55",
                        "2.56",
                        "2.55"
                    ]
                },
                {
                    "label": "relative L2",
                    "data": [
                        "0.002640",
                        "0.002029",
                        "0.004663",
                        "0.002103",
                        "0.007538",
                        "0.002080"
                    ]
                }
            ]
        }
    ]
}