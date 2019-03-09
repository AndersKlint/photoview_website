#!/usr/bin/env python

import os
import io
from glob import glob
from os.path import join

from flask import Flask, jsonify
from flask_restful import Resource, Api, request
from flask import send_file, make_response
from flask_cors import CORS


app = Flask(__name__)
api = Api(app)
CORS(app)


image_directory = '/media/anders/Media/Pictures/Post processed/'
small_thumbnail_directory = '/media/anders/Media/Pictures/Post processed/thumbnails/small/'
big_thumbnail_directory = '/media/anders/Media/Pictures/Post processed/thumbnails/big/'

thumbnails = {} # {name : binary_data}
                # thumbnails are saved to memory as they are small and need to be accessed often.
                # Note: Raw images are not loaded to memory.

image_info = {} # {image_name : int(nbr of likes)}

@app.route('/images/<string:image_name>')
def get_image(image_name):
    image_binary = thumbnails[image_name]
    return make_image_response(image_binary, image_name)

@app.route('/images/raw/<string:image_name>')
def get_raw_image(image_name):
    return send_file(image_directory + image_name)

# Returns the filenames in the default original image directory
# sorted by rating on client side
@app.route('/images/filenames.json')
def get_filenames():
    return jsonify(image_info)

def make_image_response(image_binary, image_name):
    response = make_response(image_binary)
    response.headers.set('Content-Type', 'image/jpeg')
    response.headers.set(
        'Content-Disposition', '', filename='%s.jpg' % image_name) # '' argument represent "not as attachment"
    return response

def read_images(directory_list):
    img_dict = {}
    for directory in directory_list:
        filenames = read_filenames(directory)
        for filename in filenames:
            print('READING FILE: ' + str(filename))
            img_dict[filename] = open(directory + filename, "rb").read()
    return img_dict

def read_image_info(directory):
    image_info = { 'one' : 1, 'three' : 2, 'two' : 3} # TODO: change to load json
    for filename in os.listdir(directory):
        if filename not in image_info.keys():
            if filename.endswith('.png') or filename.endswith('.jpg'):
                image_info[filename] = 0
    return image_info

def read_filenames(directory):
    filenames = []
    for filename in os.listdir(directory):
        if filename.endswith('.png') or filename.endswith('.jpg'):
            filenames.append(filename)
    return filenames

class ImageRating(Resource):
    def get(self, image_name):
        if image_name in image_info:
            return image_info[image_name]
        return 0

    def put(self, image_name):
        put_data =  int(request.form['data'])
        if image_name in image_info.keys():
            image_info[image_name] += put_data
        elif put_data > 0:
            image_info[image_name] = put_data
        return image_info[image_name]

api.add_resource(ImageRating, '/ratings/<string:image_name>')

if __name__ == '__main__':
    # ORDER IMPORTANT
    image_info = read_image_info(image_directory)
    thumbnails = read_images([small_thumbnail_directory, big_thumbnail_directory])
    app.run(debug=False)
