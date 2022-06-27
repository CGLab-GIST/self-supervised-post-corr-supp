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
                        "244",
                        "242",
                        "244",
                        "242",
                        "244",
                        "242"
                    ]
                },
				{
                    "label": "time (in minutes)",
                    "data": [
                        "114.13",
                        "113.52",
                        "114.08",
                        "113.47",
                        "114.08",
                        "113.47"
                    ]
                },
                {
                    "label": "relative L2",
                    "data": [
                        "0.003456",
                        "0.002356",
                        "0.006133",
                        "0.002557",
                        "0.005626",
                        "0.002542"
                    ]
                }
            ]
        }
    ]
}