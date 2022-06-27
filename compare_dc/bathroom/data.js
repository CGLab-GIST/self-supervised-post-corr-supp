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
                        "132",
                        "128",
                        "132",
                        "128",
                        "132",
                        "128"
                    ]
                },
				{
                    "label": "time (in minutes)",
                    "data": [
                        "7.80",
                        "7.76",
                        "7.76",
                        "7.72",
                        "7.76",
                        "7.72"
                    ]
                },
                {
                    "label": "relative L2",
                    "data": [
                        "0.001299",
                        "0.001210",
                        "0.001596",
                        "0.001110",
                        "0.001031",
                        "0.000979"
                    ]
                }
            ]
        }
    ]
}