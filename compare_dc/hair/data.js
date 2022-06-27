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
                        "64",
                        "62",
                        "64",
                        "62",
                        "64",
                        "62"
                    ]
                },
				{
                    "label": "time (in minutes)",
                    "data": [
                        "30.04",
                        "29.29",
                        "29.99",
                        "29.24",
                        "29.98",
                        "29.24"
                    ]
                },
                {
                    "label": "relative L2",
                    "data": [
                        "0.006956",
                        "0.005052",
                        "0.011004",
                        "0.005732",
                        "0.009841",
                        "0.005625"
                    ]
                }
            ]
        }
    ]
}