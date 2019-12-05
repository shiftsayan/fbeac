from flask import Flask, request
from flask_restful import Api, Resource, reqparse

import json
from db import insert_many

app = Flask(__name__)
api = Api(app)

class Res(Resource):

    def get(self):
        return "42" # test the API is running

    def post(self):
        json_data = json.loads(str(request.data, encoding='utf-8'))
        insert_many(json_data)


api.add_resource(Res, "/fbeac")
app.run(host='0.0.0.0') # runs on port 5000 by default
