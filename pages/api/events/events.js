export default (req, res) => {
    res.status(200).json(
        [
            {
                id: 1,
                title: "Séminaire au centre de formation",
                description: "Dans le cadre du lancement de la startup Ulteamcode, nous organisons une séminaire de formation en Excel",
                Lieu: "Ranérou",
                Date: "04/06/2022 09:30"
            },
            {
                id: 2,
                title: "Séminaire au centre de plyvalent",
                description: "Dans le cadre du lancement de la startup Ulteamcode, nous organisons une séminaire de formation en Excel",
                Lieu: "Ranérou",
                Date: "08/06/2022 09:30"
            }
        ]
    )
}

// export default allEvents    