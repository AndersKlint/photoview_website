#!/usr/bin/env python

import os
import io
from glob import glob
from os.path import join

from flask import Flask, jsonify
from flask import send_file
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


image_directory = '/media/anders/Media/Pictures/Post processed/'
small_thumbnail_directory = '/media/anders/Media/Pictures/Post processed/thumbnails/small/'
big_thumbnail_directory = '/media/anders/Media/Pictures/Post processed/thumbnails/big/'

thumbnails = {} #thumbnails saved to memory as they are small and need to be accessed often

@app.route('/images/<string:image_name>')
def get_image(image_name):
    image_binary = thumbnails[image_name]
    return make_image_response(image_binary, image_name)

## Return the filenames in the default original image directory
@app.route('/images/filenames.json')
def get_filenames():
    filenames = read_filenames(image_directory)
    return jsonify(filenames)

def make_image_response(image_binary, pid):
    response = send_file(
        io.BytesIO(image_binary),
        mimetype='image/JPEG',
        as_attachment=True,
        attachment_filename='%s.jpg' % pid)
    response.headers.set('Content-Type', 'image/JPEG')
    response.headers.set(
        'Content-Disposition', 'attachment', filename='%s.jpg' % pid)
    return response

def read_images(directory_list):
    img_dict = {}
    for directory in directory_list:
        filenames = read_filenames(directory)
        for filename in filenames:
            print('READING FILE: ' + str(filename))
            img_dict[filename] = open(directory + filename, "rb").read()
    return img_dict

def read_filenames(directory):
    files = []
    for file in os.listdir(directory):
        if file.endswith('.png') or file.endswith('.jpg'):
            files.append(file)
    return files

if __name__ == '__main__':
    thumbnails = read_images([small_thumbnail_directory, big_thumbnail_directory])
    app.run(debug=False)
