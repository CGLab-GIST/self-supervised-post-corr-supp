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
                        "68",
                        "64",
                        "68",
                        "64",
                        "68",
                        "64"
                    ]
                },
				{
                    "label": "time (in minutes)",
                    "data": [
                        "4.03",
                        "4.01",
                        "3.99",
                        "3.96",
                        "3.99",
                        "3.96"
                    ]
                },
                {
                    "label": "relative L2",
                    "data": [
                        "0.001814",
                        "0.001432",
                        "0.002006",
                        "0.001559",
                        "0.001519",
                        "0.001379"
                    ]
                }
            ]
        }
    ]
}