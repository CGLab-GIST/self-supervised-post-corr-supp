const data =
{
    "imageBoxes": [
        {
            "title": "Equal-time comparisons",
            "elements": [
                {
                    "title": "DC for KPCN",
                    "version": "-",
                    "image": "images/kpcn_dc.png"
                },
                {
                    "title": "DC for KPCN + Ours",
                    "version": "-",
                    "image": "images/kpcn_dc_ours.png"
                },
                {
                    "title": "DC for AMCD",
                    "version": "-",
                    "image": "images/amcd_dc.png"
                },
                {
                    "title": "DC for AMCD + Ours",
                    "version": "-",
                    "image": "images/amcd_dc_ours.png"
                },
                {
                    "title": "DC for AFGSA",
                    "version": "-",
                    "image": "images/afgsa_dc.png"
                },
                {
                    "title": "DC for AFGSA + Ours",
                    "version": "-",
                    "image": "images/afgsa_dc_ours.png"
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
                    "title": "DC for KPCN",
                    "version": "-",
                    "image": "images/viserr_kpcn_dc.png"
                },
                {
                    "title": "DC for KPCN + Ours",
                    "version": "-",
                    "image": "images/viserr_kpcn_dc_ours.png"
                },
                {
                    "title": "DC for AMCD",
                    "version": "-",
                    "image": "images/viserr_amcd_dc.png"
                },
                {
                    "title": "DC for AMCD + Ours",
                    "version": "-",
                    "image": "images/viserr_amcd_dc_ours.png"
                },
                {
                    "title": "DC for AFGSA",
                    "version": "-",
                    "image": "images/viserr_afgsa_dc.png"
                },
                {
                    "title": "DC for AFGSA + Ours",
                    "version": "-",
                    "image": "images/viserr_afgsa_dc_ours.png"
                }
            ]
        }
    ],
    "stats": [
        {
            "title": "equal-time comparisons",
            "labels": [
                "DC for KPCN",
                "DC for KPCN + Ours",
                "DC for AMCD",
                "DC for AMCD + Ours",
                "DC for AFGSA",
                "DC for AFGSA + Ours"
            ],
            "series": [
				{
                    "label": "spp",
                    "data": [
                        "74",
                        "62",
                        "74",
                        "62",
                        "74",
                        "62"
                    ]
                },
				{
                    "label": "time (in minutes)",
                    "data": [
                        "1.49",
                        "1.48",
                        "1.44",
                        "1.43",
                        "1.44",
                        "1.43"
                    ]
                },
                {
                    "label": "relative L2",
                    "data": [
                        "0.011594",
                        "0.011936",
                        "0.019859",
                        "0.011432",
                        "0.017521",
                        "0.011327"
                    ]
                }
            ]
        }
    ]
}