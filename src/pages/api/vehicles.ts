export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify([{ "vehicle": "car", 
                            "ownerName": "bruno",
                            "details": "details about car"
                            }, 
                            {
                                "vehicle": "bike", 
                                "ownerName": "john",
                                "details": "details about bike"
                            },
                            {
                                "vehicle": "air plane", 
                                "ownerName": "Quang",
                                "details": "details about air plane"
                            }

]))}