from flask import Flask
from flask_restful import Api, Resource, reqparse
import requests
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)
CORS(app)

@app.route('/api/plants/',methods=['GET'])
@app.route('/api/plants/<string:id>', methods=['GET'])

def fetch_plants(id = None):
    if id is None:
        url = "https://house-plants2.p.rapidapi.com/all-lite"
    else:
        url = "https://house-plants2.p.rapidapi.com/id/{id}".format(id=id)

    headers = {
	"x-rapidapi-key": "97598aa4dbmsh3c6af67f739da6ap1d3d46jsne23263a6af6c",
	"x-rapidapi-host": "house-plants2.p.rapidapi.com"
}

    response = requests.get(url, headers=headers)
    row_data = response.json()
    
    if id is not None:
        # If an ID is provided, return a single plant
        return response.json()
    
    # If no ID is provided, return a list of plants in a simplified format
    simplified_data = []
    for plant in row_data:
        print(plant)
        simplified_data.append({
            "id": plant.get("id"),
            "latinName": plant.get("Latin name"),
            "family": plant.get("Family"),
            "category": plant.get("Categories"),
            "img": plant.get("Img")
        })
    return simplified_data

class plants(Resource):
    def __init__(self, id, latinName, family, category, img):
        self.id = id
        self.latinName = latinName
        self.family = family
        self.category = category
        self.img = img

    def get(self, id):
        plants = fetch_plants(id)
        if plants:
            return [plant.to_plant() for plant in plants]
        else:
            return {"message": "Plant not found"}, 404
    
          
    def to_plant(self):
        return {
            "id": self.id,
            "latin name": self.latinName,
            "family": self.family,
            "category": self.category,
            "img": self.img
        }
    
api.add_resource(plants, "/plants", "/plants/<string:id>")   

if __name__ == '__main__':
    app.run(debug=True, port=8080)